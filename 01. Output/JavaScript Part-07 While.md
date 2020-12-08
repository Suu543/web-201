# JavaScript While Loop

### syntax

```javascript
while (조건) {
    // 실행 코드
}
```

- `while` 반복문은 조건의 값이 `참(true)`인 경우 내부의 실행 코드를 실행한다.

``` javascript
let i = 0 ;
while (i < 10) {
    console.log('Current Index is ', i);
    i++;
}

// 결과
Current Index is  0
Current Index is  1
Current Index is  2
Current Index is  3
Current Index is  4
Current Index is  5
Current Index is  6
Current Index is  7
Current Index is  8
Current Index is  9
```



# The Do/While Loop

`do/while` 반복문은 `while` 문의 조건을 확인하기 전에 먼저 `do` 부분에 있는 코드를 실행시킨다. 적어도 `do`는 한 번은 실행된다. (조건을 검증하기 전에 실행하기 때문에)

```javascript
let i = 0;

do {
    console.log('Current Index is', i);
    i++;
}
while (i < 10);

// 결과
Current Index is 0
Current Index is 1
Current Index is 2
Current Index is 3
Current Index is 4
Current Index is 5
Current Index is 6
Current Index is 7
Current Index is 8
Current Index is 9
```



# JavaScript Break and Continue

### break

`break`는 `switch` 문에서 사용했던 것처럼 반복문에서도 반복문을 멈추고 빠져나가는 기능을 한다.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    
    console.log('Current Index is', i);
}

// 결과
Current Index is 0
Current Index is 1
Current Index is 2
```

 

### continue

`continue`는 단어 뜻 그대로 멈추지 않고 계속 나아감을 의미한다. 용도는 반복문을 순회하는 중 특정 조건에 부합하면 해당 순서를 건너뛰고 다음 반복문으로 넘어갈 때 사용한다.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        // i 값이 3 일때 반복문을 멈추지 않고 계속 진행한다.
        console.log('세번째 입니다.')
        continue;
    }
    
    console.log("Current Index is", i);
}

// 결과
Current Index is 0
Current Index is 1
Current Index is 2
세번째 입니다.
Current Index is 4
Current Index is 5
Current Index is 6
Current Index is 7
Current Index is 8
Current Index is 9  
```



### do/while 용례

```javascript
// generate secret number is a random integer between 1 and 12
const MIN = 1;
const MAX = 12;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0; // for storing the number of guesses
let hint = ''; // for storing hint
let number = 0;
do {
    // get input from user
    let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);
    // get the integer
    number = parseInt(input);
    // increase the number of guesses
    guesses++;
    // check input number with the secret number
    // provide hint if needed
    if (number > secretNumber) {
        hint = ', and less than ' + number;
    } else if (number < secretNumber) {
        hint = ', and greater than ' + number;
    } else if(number == secretNumber) {
        alert(`Bravo! you're correct after ${guesses} guess(es).`);
    }
} while (number != secretNumber);
```























