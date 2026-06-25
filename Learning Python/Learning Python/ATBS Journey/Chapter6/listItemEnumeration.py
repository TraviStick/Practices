cat_names = []
while True:
    print('Enter the name of cat ' + str(len(cat_names) + 1) +
      ' (Or enter nothing to stop.):')
    name = input()
    if name == '':
        break
    cat_names += [name]  # List concatenation
print('The cat names are:')
for i in range(len(cat_names)):
    print(f'{i + 1}. {cat_names[i]}')


# Using enumerate() instead

dog_names = []
while True:
    print(f'Enter the name of dog {len(dog_names)+1} (Or enter nothing to stop.):')
    name = input()
    if name == '':
        break
    dog_names += [name]  # List concatenation
print('The dog names are:')
for number, dogs in enumerate(dog_names):
    print(f'{number + 1}. {dogs}')