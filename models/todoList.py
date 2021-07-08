from datetime import datetime
from models.db import db


class TodoList(db.Model):
    __tablename__ = 'lists'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=str(
        datetime.utcnow()), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.now())
    user = db.relationship("User", backref=db.backref('users', lazy=True))
    todos = db.relationship("Todo", cascade='all',
                            backref=db.backref('todos', lazy=True))

    def __init__(self, title, user_id):
        self.title = title
        self.user_id = user_id

    def json(self):
        return {"id": self.id, "title": self.title, "user_id": self.user_id, "created_at": str(self.created_at), "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        return TodoList.query.all()

    @classmethod
    def find_by_id(cls, list_id):
        list = TodoList.query.filter_by(id=list_id).first()
        return list
