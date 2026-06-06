# dictionaries = a collection of {key:value} pairs
#                ordered and changeable. No duplicates


capitals = {"USA": "Washington D.C.",
            "India" : "New Delhi",
            "China" : "Beijing",
            "Russia": "Moscow"}
print(capitals.get("yo")) # Check if theres a value within that key
print("------------------------------------------------------------------------------")
if capitals.get("Japan") == None:
    print("YO")
capitals.update({"Germany": "New Delhi"}) # Updates an existing value 
                                          # (Cant change the key if u try you'll just add a new key with that value)
                                          # or add a new key and value
print("------------------------------------------------------------------------------")                                          
print(capitals)                                          
print("------------------------------------------------------------------------------")
capitals.pop("Germany") # removes a key:value pair must enter the key not the value
print(capitals)
print("------------------------------------------------------------------------------")
capitals.popitem() # Removes the latest/last value of key:value method
print(capitals)
print("------------------------------------------------------------------------------")
# capitals.clear() - Clears the entire dictionary

keys = capitals.keys()# Returns all the key NOT the values
print(keys)
print("------------------------------------------------------------------------------")
values = capitals.values()# Returns all the values NOT the keys
print(values)
print("------------------------------------------------------------------------------")
items = capitals.items()# Returns all the key:value pairs in 2D
print(items)
print("------------------------------------------------------------------------------")
# ALTERNATIVE COMMANDS
capitals.keys()# Returns all the key NOT the values
for key in capitals.keys():
    print(key, end = " ")
print()                                        
print("------------------------------------------------------------------------------") 
capitals.values() # Returns all the values NOT the keys
for value in capitals.values():
    print(value, end = " ")
print()
print("------------------------------------------------------------------------------")
capitals.items()# Returns all the key:value pairs
for key, value in capitals.items():
    print(f"{key}: {value}")


# Concession stand program
menu ={"pizza":3.00,
       "nachos": 4.50,
       "popcorn": 6.00,
       "fries": 2.50,
       "chips": 1.00,
       "pretzel": 3.50,
       "soda": 3.00,
       "lemonade": 4.25}
cart= []
total = 0
print("------------------------------The Menu----------------------------------------")
for item, value in menu.items():
    print(f"                        {item:10}|   ${value:.2f}")
print("------------------------------------------------------------------------------")    

while True:
   food = input("Which food do you like to buy? (q to quit): ").lower()
   if food == "q":
       break
   elif menu.get(food) is not None:
    cart.append(food) 
print("---------------------------Your Order-----------------------------------------")    
for food in cart:
    total += menu.get(food)  
    print(f"                             {food}")      
print("----------------------------Please Pay----------------------------------------")
print(f"                               ${total}")  
print("------------------------------------------------------------------------------")
 