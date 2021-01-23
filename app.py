while True:
    # command: 명령어
    print("+, -, *, /, %, stop")
    command = (input("연산자를 입력해주세요: "))
    first_num = int(input("첫번째 숫자를 입력해주세요: "))
    second_num = int(input("두번째 숫자를 입력해주세요: "))

    if (command == "+"):
        print(f"{first_num} + {second_num} = {first_num + second_num}")
    elif (command == "-"):
        print(f"{first_num} - {second_num} = {first_num - second_num}")
    elif (command == "*"):
        print(f"{first_num} * {second_num} = {first_num * second_num}")
    elif (command == "/"):
        print(f"{first_num} / {second_num} = {first_num / second_num}")
    elif (command == "%"):
        print(f"{first_num} % {second_num} = {first_num % second_num}")
    elif (command == "stop"):
        print("멈출께유")
        break
    else:
        print("븅신아 똑바로 입력해: +, -, *, /, % 중에 아니면 종휘된다")