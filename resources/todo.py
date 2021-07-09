from models.db import db
from models.todo import Todo
from sqlalchemy.orm import joinedload
from flask_restful import Resource
from flask import request


class Todos(Resource):
    def get(self):
        todos = Todo.find_all()
        return [todo.json() for todo in todos]

    def post(self):
        data = request.get_json()
        print(data)
        params = {}
        for k in data.keys():
            params[k] = data[k]
        todo = Todo(**params)
        todo.create()
        return todo.json(), 201


class TodoDetails(Resource):
    def get(self, todo_id):
        todo = Todo.query.options(joinedload(
            'list')).filter_by(id=todo_id).first()
        list = todo.list.json()
        return {**todo.json(), "list": list}

    def put(self, todo_id):
        data = request.get_json()
        todo = Todo.find_by_id(todo_id)
        print(todo)
        for k in data.keys():
            setattr(todo, k, data[k])
        db.session.commit()
        return todo.json()

    def delete(self, todo_id):
        todo = Todo.find_by_id(todo_id)
        if not todo:
            return {"msg": "Not found"}, 404
        db.session.delete(todo)
        db.session.commit()
        return todo.json()
