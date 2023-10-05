from flask import request, jsonify
from Connection import mysql
import jwt


def todosPosteos():
    if request.method == "GET":
        try:
            token = request.headers['auth']
            token = jwt.decode(jwt=token, key='secret', algorithms=["HS256"])
            cur = mysql.connection.cursor()
            cur.execute(
                "SELECT id, contenido, created_at, updated_at, titulo FROM posteos WHERE userId = (%s) ORDER BY updated_at DESC;", [token["id"]])
            data = cur.fetchall()
            posteos = []
            for row in data:
                posteo = {'id': row[0], 'contenido': row[1],
                          'created_at': row[2], 'updated_at': row[3], 'titulo': row[4]}
                posteos.append(posteo)
            return jsonify({"result": "success", "posteos": posteos})
        except:
            return jsonify({"result": "error"})


def guardarPosteo():
    if request.method == "POST":
        try:
            token = request.headers['auth']
            token = jwt.decode(jwt=token, key='secret', algorithms=["HS256"])
            data = request.get_json()
            contenido = data['contenido']
            titulo = data['titulo']
            cur = mysql.connection.cursor()
            cur.execute(
                "INSERT INTO posteos (contenido, titulo, userId) VALUES (%s, %s, %s);", (contenido, titulo, token["id"]))
            mysql.connection.commit()
            return jsonify({"result": "success"})
        except:
            return jsonify({"result": "error"})


def editarPosteo(id):
    if request.method == "PUT":
        try:
            token = request.headers['auth']
            token = jwt.decode(jwt=token, key='secret', algorithms=["HS256"])
            data = request.get_json()
            contenido = data['contenido']
            titulo = data['titulo']
            cur = mysql.connection.cursor()
            cur.execute(
                "UPDATE posteos SET contenido = (%s), titulo = (%s) WHERE id = (%s) AND userId = (%s);", (contenido, titulo, id, token["id"]))
            mysql.connection.commit()
            return jsonify({"result": "success"})
        except:
            return jsonify({"result": "error"})


def eliminarPosteo(id):
    if request.method == "DELETE":
        try:
            token = request.headers['auth']
            token = jwt.decode(jwt=token, key='secret', algorithms=["HS256"])
            cur = mysql.connection.cursor()
            cur.execute(
                "DELETE FROM posteos WHERE id = (%s) AND userId = (%s);", (id, token["id"]))
            mysql.connection.commit()
            return jsonify({"result": "success"})
        except:
            return jsonify({"result": "error"})
