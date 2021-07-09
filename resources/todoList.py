from models.db import db
from models.todoList import TodoList
from sqlalchemy.orm import joinedload
from flask_restful import Resource
from flask import request
from middleware import create_token, read_token, gen_password, compare_password, strip_token


class TodoLists(Resource):
    def get(self):
        todos = TodoList.find_all()
        return [todo.json() for todo in todos]

    def post(self):
        data = request.get_json()
        params = {}
        for k in data.keys():
            params[k] = data[k]
        todo = TodoList(**params)
        todo.create()
        return todo.json(), 201


class TodoListDetails(Resource):
    def get(self, list_id):
        todo = TodoList.query.options(joinedload(
            'user'), joinedload('todos')).filter_by(id=list_id).first()
        user = todo.user.json()
        print(todo.todos)
        return {**todo.json(), "user": user, "todos": [todo.json() for todo in todo.todos]}

    def put(self, list_id):
        data = request.get_json()
        todo = TodoList.find_by_id(list_id)
        print(todo)
        for k in data.keys():
            setattr(todo, k, data[k])
        db.session.commit()
        return todo.json()

    def delete(self, list_id):
        todo = TodoList.find_by_id(list_id)
        if not todo:
            return {"msg": "Not found"}, 404
        db.session.delete(todo)
        db.session.commit()
        return todo.json()


class TodoListsByUser(Resource):
    def get(self, token):
        # print(request)
        # data = request.get_json()
        # print('*******')
        # print(data)
        # print('***********')
        print(token)
        if token:
            try:
                payload = read_token(token)
            except:
                return {"message": "Unauthorized"}, 401
        user_id = payload['id']
        print(user_id)
        lists = TodoList.query.options(joinedload(
            'user'), joinedload('todos')).filter_by(user_id=user_id)

        return [todo.json() for todo in lists]
        # todo = TodoList.query.options(joinedload(
        #     'user'), joinedload('todos')).filter_by(id=list_id).first()
        # user = todo.user.json()
        # print(todo.todos)
        # return {**todo.json(), "user": user, "todos": [todo.json() for todo in todo.todos]}
