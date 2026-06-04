groceries = [[1, 2, 3],
             [4, 5, 6],
             [7, 8, 9],
             ["*", 0, "#"]]

print(groceries[0][0])

for collection in groceries:
    for food in collection:
        print(food, end=" ")
    print()        

#-------------------quiz game
questions = ("Whats 9 + 10?",
             "Are you stupid?",
             "I am therefore....",
             "I am......",
             "Whose your main in Wildrift")
options = (("A. 21", "B. 19", "C. 910", "D. idk"),
           ("A. No", "B. Yes", "C. Maybe", "D. Perhaps"),
           ("A. I am", "B. Are you.... are you...", "C. He is", "D. Idk"),
           ("A. Ako si jose rizal", "B. John Cena", "C. Steve", "D. You"),
           ("A. Akshan", "B. Katarina", "C. Viegar", "D. Brand"))
answers = ("A", "D", "B", "C", "B")
guesses = []
item_number = 0
score = 0
count = 0
for question in questions:
    print()
    print(f"{count+1}. {question}")
    count += 1
    for option in options[item_number]:
        print(option)

    guess = input("Enter your answer: ").upper()
    guesses.append(guess)
    if guess == answers[item_number]:
        score+=1
        print("Correct")
    else:
        print("Incorrect FN")
    item_number += 1
print(f"Your total score is {score}. Congrats FN!")     