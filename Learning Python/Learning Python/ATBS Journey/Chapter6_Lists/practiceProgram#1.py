def list_value(spams):

    storage = ''

    for i in range(len(spams)): # adds comma for each value then adds 'and' in the last value
        if i < len(spams)-1:
                storage = storage + f'{spams[i]}, '
        else:
                storage = storage + f'and {spams[i]}'
 
    if len(spams) == 2: # removes the comma if theres only 2
        for i in range(0,2):
              if i < 1:
                    storage = f'{spams[i]}'
              else:
                   storage = storage + f' and {spams[i]}' 
    elif len(spams) == 1: # only prints exactly 1 string value 
             storage = f'{spams[0]}'
    elif len(spams) == 0: # only executes if the list is empty
            return 'Empty list' 
            
    return '\''  + storage + '\'' 

spams = [True,'apples', 1, 1.2]
spammer = [True,'Green apple']
eggs = ['apples']
bacons = [True]
porks = [1]
chicken = [1.2]
nothingness = []

print(list_value(spams))         
print(list_value(spammer)) 
print(list_value(eggs))    
print(list_value(bacons))
print(list_value(porks))
print(list_value(chicken))
print(list_value(nothingness))



