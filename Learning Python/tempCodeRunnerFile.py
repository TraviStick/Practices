user_input = int(input('Enter a number: '))
userLength = len(str(user_input))
solve = 0
for i in range(userLength,0,-1):
    times = 10 ** (i - 1)
    result = user_input // times % 10
    solve += result
print(solve)