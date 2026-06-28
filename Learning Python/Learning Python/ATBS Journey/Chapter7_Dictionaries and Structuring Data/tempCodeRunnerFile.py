
lister = {}

while True:
    name = input(f'Put a name: ')
    job = input(f'Enter a job in that person: ')
    if name == '' or job == '':
        break
    elif name not in lister:
        lister[name] = job
    
for i,j in lister.items():
    print(f'{i} : {j}', end = ' | ')