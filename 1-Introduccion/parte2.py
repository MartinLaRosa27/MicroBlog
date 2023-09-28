# list: Mantiene el orden.
l = ["Luna", "Kamala"]
l.append("Carol")
l.remove("Kamala")
print("Luna" in l)

# tuple: No se puede modificar. Mantiene el orden.
t = ("Luna", "Kamala")
print("Luna" in t)

# set: Se puede agregar o eliminar, pero no pueden estar valores repetidos.
s = {"Luna", "Kamala"}
s.add("Carol")
print("Luna" in s)

# diccionarios:
d = {"luna": 19, "kamala":16}
d["carol"] = 30
print(d["luna"])
print(d["carol"])
for friend, age in d.items():
    print(f"{friend} is {age}")