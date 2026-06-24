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