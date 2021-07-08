from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from models import user, todo, todoList
from resources import user, todo, todoList

app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://localhost:5432/honeydew_db"
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)

api.add_resource(user.Login, '/login')
api.add_resource(user.Register, '/register')
api.add_resource(user.Users, '/users')
api.add_resource(user.UserDetail, '/user/<int:user_id>')
api.add_resource(todoList.TodoLists, '/lists')
api.add_resource(todoList.TodoListDetails, '/lists/<int:list_id>')
api.add_resource(todo.Todos, '/todos')
api.add_resource(todo.TodoDetails, '/todos/<int:todo_id>')
if __name__ == '__main__':
    app.run(debug=True)
