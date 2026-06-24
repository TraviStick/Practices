import random
def message(messages):
    messages = ['It is certain',
        'It is decidedly so',
        'Yes definitely',
        'Reply hazy try again',
        'Ask again later',
        'Concentrate and ask again',
        'My reply is no',
        'Outlook not so good',
        'Very doubtful']
    randomizee = random.choice(messages)
    return randomizee
while True:
    print('Ask a yes or no question:')
    myInput = input('>')
    print(message(myInput))
    if message(myInput) == 'Very doubtful':
        print('Thats unlucky')
        break