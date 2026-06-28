import random
pets = ['parrot', 'koala', 'worm']
randpets = random.choice(pets)
print(randpets)

    

# long version
animal = ['Dog', 'Cat', 'Moose']
print(animal[random.randint(0, len(animal) - 1)])



# The random.shuffle() function will reorder the items in a list in place.
people = ['Alice', 'Bob', 'Carol', 'David']
random.shuffle(people)
print(people)


