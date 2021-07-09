from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from flask_cors import CORS
from models.db import db
from models import user, todo, todoList
from resources import user, todo, todoList

app = Flask(__name__)
CORS(app)
api = Api(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://localhost:5432/honeydew_db"
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)

api.add_resource(user.Login, '/api/login')
api.add_resource(user.Register, '/api/register')
api.add_resource(user.Users, '/api/users')
api.add_resource(user.UserDetail, '/api/user/<int:user_id>')
api.add_resource(todoList.TodoLists, '/api/lists')
api.add_resource(todoList.TodoListDetails, '/api/lists/<int:list_id>')
api.add_resource(todoList.TodoListsByUser, '/api/lists/user/<string:token>')
api.add_resource(todo.Todos, '/api/todos')
api.add_resource(todo.TodoDetails, '/api/todos/<int:todo_id>')
if __name__ == '__main__':
    app.run(debug=True)
