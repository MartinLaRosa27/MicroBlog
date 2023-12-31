from flask import request, jsonify
from Connection import mysql
from passlib.hash import pbkdf2_sha256
import jwt


def guardarUser():
    if request.method == "POST":
        try:
            data = request.get_json()
            email = data['email']
            password = pbkdf2_sha256.hash(data['password'])
            cur = mysql.connection.cursor()
            cur.execute(
                "INSERT INTO users (email, password) VALUES (%s, %s);", (email, password))
            mysql.connection.commit()
            return jsonify({"result": "success"})
        except:
            return jsonify({"result": "error"})


def autenticacionUser():
    if request.method == "POST":
        try:
            data = request.get_json()
            email = data['email']
            password = data['password']
            hashPassword = ""
            cur = mysql.connection.cursor()
            cur.execute(
                "SELECT id, email, password FROM users WHERE email = %s;", [email])
            data = cur.fetchall()
            user = {}
            for row in data:
                user = {'id': row[0], 'email': row[1]}
                hashPassword = row[2]
            if (user):
                if not (pbkdf2_sha256.verify(password, hashPassword)):
                    raise ValueError("Usuario no registrado")
            encoded_jwt = jwt.encode(user, 'secret', algorithm='HS256')
            return jsonify({"result": "success", "token": encoded_jwt})
        except:
            return jsonify({"result": "error"})
