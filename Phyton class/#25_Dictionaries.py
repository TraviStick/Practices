# dictionaries = a collection of {key:value} pairs
#                ordered and changeable. No duplicates


capitals = {"USA": "Washington D.C.",
            "India" : "New Delhi",
            "China" : "Beijing",
            "Russia": "Moscow"}
print(capitals.get("yo")) # Check if theres a value within that key

if capitals.get("Japan") == None:
    print("YO")
capitals.update({"Germany": "New Delhi"}) # Updates an existing value 
                                          # (Cant change the key if u try you'll just add a new key with that value)
                                          # or add a new key and value
print(capitals)                                          
capitals.pop("Germany") # removes a key:value pair must enter the key not the value
print(capitals)
capitals.popitem() # Removes the latest/last value of key:value method
print(capitals)
# capitals.clear() - Clears the entire dictionary
capitals.keys()# Gets all the key NOT the values
for key in capitals.keys():
    print(key, end = " ")
print()                                         
capitals.values() # Gets all the values NOT the keys
for value in capitals.values():
    print(value, end = " ")
