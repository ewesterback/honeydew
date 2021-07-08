from datetime import datetime
from models.db import db


class Todo(db.Model):
    __tablename__ = 'todos'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    content = db.Column(db.String(255), nullable=False)
    priority = db.Column(db.Integer, default=2, nullable=False)
    due_date = db.Column(db.DateTime, nullable=False)
    list_id = db.Column(db.Integer, db.ForeignKey(
        'lists.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=str(
        datetime.utcnow()), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.now())
    list = db.relationship("TodoList", backref=db.backref('list', lazy=True))

    def __init__(self, title, content, priority, due_date, list_id):
        self.title = title
        self.content = content
        self.priority = priority
        self.due_date = due_date
        self.list_id = list_id

    def json(self):
        print('hi')
        return {"id": self.id, "title": self.title, "content": self.content, "priority": str(self.priority), "due_date": str(self.due_date), "list_id": str(self.list_id), "created_at": str(self.created_at), "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        return Todo.query.all()

    @classmethod
    def find_by_id(cls, todo_id):
        todo = Todo.query.filter_by(id=todo_id).first()
        return todo
