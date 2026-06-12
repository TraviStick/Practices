while True:
    print('Who are you?')
    name = input('>')
    if name != 'Joe':
        continue
    for i in range(3,0,-1):
        print(f'Hello, Joe. What is the password? (It is a fish.) {i} attempts left.')
        password = input('>')
        if i == 0:
            print('Access Denied')
        elif password != 'swordfish':
            print("Try again")
        else:
            print('Access Granted.')
            break
    break 