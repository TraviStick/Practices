for i in range(3,0,-1):
        print(f'Hello, Joe. What is the password? (It is a fish.) {i} attempts left.')
        password = input('>')
        if password != 'swordfish' and i == 0:
            continue