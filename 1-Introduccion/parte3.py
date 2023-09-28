value = True
friends = ["Rolf", "Jen", "Bob"]

# statements:
if value: print("true")
elif not value: print("false")
else: print("ninguno")

# loops:
while value:
    print("In loop")
    if value == 10:
        break
    value = False

for friend in friends:
    print(f"{friend} es mi pana")