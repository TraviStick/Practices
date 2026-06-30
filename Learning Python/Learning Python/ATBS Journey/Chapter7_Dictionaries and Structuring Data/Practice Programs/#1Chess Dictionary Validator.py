def isValidChessBoard(board):
    pieces = {}
    isValid = True
    
    for KEYS,VALUES in board.items(): # Creates a dictionary for the number of pieces
        pieces.setdefault(VALUES,0)
        pieces[VALUES] += 1  

    for a,b in board.keys(): # Creates a dictionary for the pieces places
        if a in ('a','b','c','d','e','f','g','h'):
            isValid = True
        else:
            isValid = False
            return isValid
        if b in ('1','2','7','8'):
            isValid = True
        else:
            isValid = False
            return isValid
        
    for i,j in board.values(): # Checks if the names begin with 'b(Black)' or 'w(White)'
        if i in ('b','w'):
            isValid = True
        else:
            isValid = False
            return isValid
    for KEYS, VALUES in pieces.items(): # Checks the numbers of each pieces   
        if KEYS in ('bK', 'wK') and VALUES == 1:
            isValid = True
        elif KEYS in ('bQ', 'wQ') and VALUES == 1:
            isValid = True    
        elif KEYS in ('bB', 'wB') and VALUES == 2:
            isValid = True
        elif KEYS in ('bR', 'wR') and VALUES == 2:
            isValid = True
        elif KEYS in ('bN', 'wN') and VALUES == 2:
            isValid = True
        elif KEYS in ('bP', 'wP') and VALUES == 8:
            isValid = True     
        else:
            isValid = False
            return isValid
    return isValid
STARTING_PIECES = {'a8': 'bR', 'b8': 'bN', 'c8': 'bB', 'd8': 'bQ', 'e8': 'bK', 'f8': 'bB', 'g8': 'bN', 'h8': 'bR',
                   'a7': 'bP', 'b7': 'bP', 'c7': 'bP', 'd7': 'bP', 'e7': 'bP', 'f7': 'bP', 'g7': 'bP', 'h7': 'bP',
                   'a1': 'wR', 'b1': 'wN', 'c1': 'wB', 'd1': 'wQ', 'e1': 'wK', 'f1': 'wB', 'g1': 'wN', 'h1': 'wR',
                   'a2': 'wP', 'b2': 'wP', 'c2': 'wP', 'd2': 'wP', 'e2': 'wP', 'f2': 'wP', 'g2': 'wP', 'h2': 'wP'}

print(isValidChessBoard(STARTING_PIECES))