import copy
spam = ['A', 'B', 'C']
cheese = copy.copy(spam)  # Creates a duplicate copy of the list
cheese[1] = 42  # Changes cheese
print(spam)  # The spam variable is unchanged.
print(cheese)# The cheese variable is changed.