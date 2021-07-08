from flask_restful import Resource
from flask import request
from models.user import User
from sqlalchemy.orm import joinedload
from middleware import create_token, read_token, gen_password, compare_password, strip_token


class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.find_by_email(data['email'])
        if user and compare_password(data['password'], user.password_digest):
            payload = {
                "id": user.id,
                "email": user.email
            }
            token = create_token(payload)
            return {"payload": payload, "token": token}, 200
        return {"message": "Login Failed"}, 401

    def get(self):
        token = strip_token(request)
        if token:
            try:
                payload = read_token(token)
                return payload
            except:
                return {"message": "Unauthorized"}, 401
        return {"message": "Unauthorized"}, 401


class Register(Resource):
    def post(self):
        data = request.get_json()
        params = {
            "name": data['name'],
            "email": data['email'],
            "password_digest": gen_password(data['password'])
        }
        user = User(**params)
        user.create()
        return user.json(), 201


class Users(Resource):
    def get(self):
        users = User.find_all()
        return [user.json() for user in users]


class UserDetail(Resource):
    def get(self, user_id):
        user = User.query.options(joinedload(
            'lists')).filter_by(id=user_id).first()
        lists = [l.json() for l in user.lists]
        return {**user.json(), "lists": lists}
