from flask import request, jsonify
from Connection import mysql


def guardarUser():
    if request.method == "POST":
        try:
            data = request.get_json()
            email = data['email']
            password = data['password']
            cur = mysql.connection.cursor()
            cur.execute(
                "INSERT INTO users (email, password) VALUES (%s, %s);", (email, password))
            mysql.connection.commit()
            return jsonify({"result": "success"})
        except:
            return jsonify({"result": "error"})
