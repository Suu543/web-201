from random import randint
answer = randint(1, 100)
print('answer', answer)

while True:
    guess = int(input("숫자를 맞춰주세요"))


    if guess == answer: 
        print("Congrats")
        break
    elif guess < 1 or guess > 100:
        print("OUT OF BOUNDS")
    elif abs(answer - guess) <= 10:
        print("WARM")
    else: 
        print("COLD")
else:
    print("Congrats")
    