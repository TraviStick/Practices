import random
def message():
    text = ['It is certain',
        'It is decidedly so',
        'Yes definitely',
        'Reply hazy try again',
        'Ask again later',
        'Concentrate and ask again',
        'My reply is no',
        'Outlook not so good',
        'Very doubtful']
    return random.choice(text)
while True: 
    print('Ask a yes or no question:')
    myInput = input('>')
    result = message()
    print(result)
    if result == 'Very doubtful':
        print('Zamn bro...')
        break