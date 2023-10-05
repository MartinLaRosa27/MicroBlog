from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS
import os
from dotenv import load_dotenv


# Accede a lasa variables de entorno:
load_dotenv()

# Evalua el nombre del modulo:
app = Flask(__name__)
CORS(app)

# Crear conexión as DB:
app.config["MYSQL_HOST"] = os.getenv("DB_HOST")
app.config["MYSQL_USER"] = os.getenv("DB_USER")
app.config["MYSQL_PASSWORD"] = os.getenv("DB_PASS")
app.config["MYSQL_DB"] = os.getenv("DB_NAME")
mysql = MySQL(app)
