from flask import request, jsonify
from Connection import mysql


def todosPosteos():
    if request.method == "GET":
        try:
            cur = mysql.connection.cursor()
            cur.execute(
                "SELECT id, contenido, created_at, updated_at, titulo FROM posteos;")
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
            data = request.get_json()
            contenido = data['contenido']
            titulo = data['titulo']
            cur = mysql.connection.cursor()
            cur.execute(
                "INSERT INTO posteos (contenido, titulo) VALUES (%s, %s);", (contenido, titulo))
            mysql.connection.commit()
            return jsonify({"result": "success"})
        except:
            return jsonify({"result": "error"})


def editarPosteo(id):
    if request.method == "PUT":
        try:
            data = request.get_json()
            contenido = data['contenido']
            cur = mysql.connection.cursor()
            cur.execute(
                "UPDATE posteos SET contenido = (%s) WHERE id = (%s);", (contenido, id))
            mysql.connection.commit()
            return jsonify({"result": "success"})
        except:
            return jsonify({"result": "error"})


def eliminarPosteo(id):
    if request.method == "DELETE":
        try:
            cur = mysql.connection.cursor()
            cur.execute("DELETE FROM posteos WHERE id = (%s);", (id))
            mysql.connection.commit()
            return jsonify({"result": "success"})
        except:
            return jsonify({"result": "error"})
