name = ''
while not name:
    print('Enter your name:')
    name = input('>')
print('How many guests will you have?')
num_of_guests = int(input('>'))
if num_of_guests:
    print('Be sure to have enough room for all your guests.')   
print('Done')
print(bool(0))
print(bool('a'))


for i in range(3,1,-1):
    print(i)