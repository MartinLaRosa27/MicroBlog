from Connection import app
from Routes import *

# Se ejecuta cuando es el archivo principal:
if (__name__ == "__main__"):
    app.run(port=4000, debug=True)
