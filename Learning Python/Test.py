def box_print(symbol, width, height):
    if len(symbol) != 1:
        raise Exception('Symbol must be a single character string.')
    if width <= 2:
        raise Exception('Width must be greater than 2.')
    if height <= 2:
        raise Exception('Height must be greater than 2.')

    print(symbol * width)
    for i in range(height - 2):
        print(symbol + (' ' * (width - 2)) + symbol)
    print(symbol * width)

try:
    box_print('*', 3, 3)
    box_print('Os', 20, 5)
    box_print('x', 6, 10)
    box_print('Z', 10, 6)
except Exception as err:
    print('An exception happened: ' + str(err))
try:
    box_print('Z', 10, 6)
except Exception as err:
    print('An exception happened: ' + str(err))