spam = {'color': 'red', 'age': 42}
for v in spam.keys(): # prints key
    print(v)
for v in spam.values(): # prints value
    print(v)

for v in spam.items(): # prints key:value
    print(v)
for i,j in spam.items():# prints key:value without ( )
    print(f'Key is: {i} While the Value is: {j}')

spam['color'] = 'green'
print(spam['color'])



print('color'in spam)# checking if theres a key or value in the dictionary
print('color' not in spam)
print(spam.keys())