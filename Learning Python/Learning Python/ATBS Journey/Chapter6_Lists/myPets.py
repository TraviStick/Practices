my_pets = ['Zophie', 'Pooka', 'Fat-tail']
while True:
    print('Enter a pet name:')
    name = input()
    if name not in my_pets:
        print('I do not have a pet named ' + name)
    else:
        print(name + ' is my pet.')
        break