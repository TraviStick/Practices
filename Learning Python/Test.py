from collections import defaultdict

message = 'It was a bright cold day in April, and the clocks were striking thirteen.'
count = {}

for i in message:
    count.setdefault(i,[]) 
    count[i].append('see')
    

print(count)

split = input('> ').split()
print(type(split))
print(split)