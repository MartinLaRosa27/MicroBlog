from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS

# Evalua el nombre del modulo:
app = Flask(__name__)
CORS(app)

# Crear conexión as DB:
app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "root"
app.config["MYSQL_DB"] = "microblog"
mysql = MySQL(app)
