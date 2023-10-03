from Connection import app
from controllers.PosteosController import *
from controllers.UsersController import *


# routes-posteos:
@app.route("/todos-posteos", methods=["GET"])
def call():
    return todosPosteos()


@app.route("/guardar-posteo", methods=["POST"])
def callGuardarPosteo():
    return guardarPosteo()


@app.route("/editar-posteo/<id>", methods=["PUT"])
def callEditarPosteo(id):
    return editarPosteo(id)


@app.route("/eliminar-posteo/<id>", methods=["DELETE"])
def callEliminarPosteo(id):
    return eliminarPosteo(id)


# routes-user:

@app.route("/guardar-user", methods=["POST"])
def callGuardarUser():
    return guardarUser()
