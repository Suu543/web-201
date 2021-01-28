# JavaScript 101 Part-7

![FAANG+MSFT 미래 ; 돌다리 그냥 건너요. 두드리지 말고! : 네이버 포스트](https://post-phinf.pstatic.net/MjAyMDA1MDNfMTQg/MDAxNTg4NDk1MzQzMTg5.WupZrlOtknIpqrelI4k43rBOve64g2cLgTbpyaTeK-8g.WUSLdRnBxreUuRxpA5H1UCNkVH3iybcZfskYHsN6MnAg.JPEG/12312.jpg?type=w1200)

위와 같은 프로그램들은 각각 저마다 제공하는 고유의 함수가 존재한다.

절차적인 언어의 경우 함수가 프로그램에서 굉장히 중요한 기능을 담당한다. 

![Why Functional Programming Matters - DEV Community](https://res.cloudinary.com/practicaldev/image/fetch/s--iCkOfD0L--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1024/1%2A709ugF12LLkYxvb839YNlg.png)

Function = Sub Program

프로그램 안에서 각각의 다른 기능을 수행하는 것을 `함수(Function)`라 칭한다.

`함수(Function)`는 대체로 `Input`을 받아 잘 처리해 그것을 `Output`으로 리턴해주는 것이 `함수(Function`)다

## 1. Function Declaration (함수 선언)

```javascript
function name (param1, param2) {
    // body ...
    
    return;
}
```

`함수(Function)`는 크게 네 종류로 분류된다.

1. **Function Name** (함수의 이름)
2. **Function Parameters** (함수의 인자)
3. **Function Body** (함수의 바디)
4. **Function Return Value** (함수의 리턴값)

`함수(Function)`라는 키워드를 이용해 함수명을 작성하고, `param (n)`을 이용해 인자를 나열하고, `Body`부분에 기본적인 함수 로직을 작성하고, 최종적으로 연산이 끝난 값을 `return`해준다.

프로그래머들 사이에서 통용적으로 하나의 함수는 하나의 작업만을 수행하도록 만들어야 한다. 또한 함수명을 작성할 때는 명사 대신에, 동사 + 명사 조합을 이용해야 한다. 그 이유는 함수는 특정한 사람의 이름 등을 명시하는 변수명과 달리 어떤 동적인 동작을 수행하기 때문이다.

##### 함수명 예시

```javascript
// 카드를 생성하는 기능을 하는 함수
function createCard() {
    // body...
    
    return;
}
```

## 2. Function is an object in JS

`JavaScript`에서 함수는 `Object(객체)`로 간주된다. 다음 세 가지 특징을 가진다.

1. `function(함수)`는 변수에 할당이 가능하다
2. `function(함수)`는 인자로 전달이 가능하다
3. `function(함수)`는 리턴 값으로 사용될 수 있다

```javascript
function printHello() {
    console.log('Hello World')
}
```

`printHello`함수는 쓸모가 크게 없는 함수다. 왜냐하면 항상 "Hello World"만을 출력하기 때문이다.

`function(함수)`의 쓸모는 인자 값이 존재할 때 빛을 발한다.

```javascript
function printMessage(message) {
    console.log(message);
}

printMessage('Hello World');
```

`printMessage`함수는 message라는 인자 값을 입력받으면, 그것을 출력해 주는 기능을 한다. 눈여겨볼 점은 앞서 말한 함수를 구성하는 요소 중 마지막 요소인 `return`이 빠진 것을 확인할 수 있다. 위와 같이 `return`값을 생략한 경우 다음과 같이 내부적으로 간주된다 생각할 수 있다.

```javascript
function printMessage(message) {
    console.log(message);
    
    return undefined;
}

printMessage('Hello World');
```

`JavaScript`의 치명적인 단점이 하나 있다. `printMessage`함수가 받는 인자 값은 문자여야 한다. 하지만, 숫자를 인자 값으로 전달해도 문자로 인식한다. `Brenden`이 대충 만들어서 이런 상황이 발생한다. 하지만 이러한 문제를 보완해 주기 위해 `TypeScript`를 사용할 수 있다 (나중에 `JavaScript`가 익숙해졌을 때 공부하면 좋은 것). `TypeScript`는 다음과 같이 코드를 작성할 수 있다.

```typescript
// 인자 string, 리턴값 string
function printMessage(message: string): number {
    console.log(message);
    
    return 0;
}
```

- *https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAGzgcwBQFsCmBnPAQzRwC5E8oAnGMNASkQG8AoRdxCBPOZHAOlSZcBYjnosAvkA*

## 3. Parameters

##### Primitive Parameters: Passed by Value

##### Object Parameters: Passed by Reference

`Parameters(인자)`는 한 함수가 특정 연산 및 동작을 수행할 때 사용할 수 있는 값을 함수 사용자로부터 받기 위해 사용하는 것이다.

```javascript
function changeName(obj) {
    obj.name = 'sususu'
}

// su에는 참조값(Reference)가 할당되어 있다.
const su = { 
	name: 'su',
    age: 25
}

// 다음과 같이 changeName 함수에 su 객체를 인자값으로 주게되면
changeName(su);

// changeName 함수의 obj는 su가 참조하고 있는 객체와 주소와 똑같은 것이된다.
// 그러므로 obj.name = 'sususu'하면
// name: 'sususu'로 변경되는 것을 확인할 수 있다.
```

changeName 함수의 인자 obj는 변수 su가 참조하고 있는 객체의 주소와 똑같은 주소를 참조하게 된다. 결과적으로 `obj.name = 'sususu'`로 변경하게되면, `name: 'sususu'`로 변경되는 것을 확인할 수 있다. 이러한 동작이 가능한 이유는 `JavaScript`에서 `객체(object)`는 `Passed by Reference`방식으로 동작하기 때문이다.

## 3 - 1. Default Parameters (Added in ES6)

`Default Parameters`는 어떠한 값도 주지 않았을 때 값이 `undefined`이 되면 안 되는 경우를 방지하기 위해 사용한다. `Default Parameters`는 `ES6`에서 추가된 것인데 이것이 추가되기 전을 먼저 알아보고, 이것을 사용해보자

```javascript
// Before Default Parameters
function showMessage(message, from) {
    if (from === undefined) {
        from = "unknown";     
    }
    
    console.log(`${message} by ${from}`);
}
```

`Default Parameters`가 추가되기 전에는 위와 같이 `if 문`을 이용해 예외 처리를 해줘야 했다.

```javascript
// After Default Parameters
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}

// 함수 호출시, 두번째 인자를 빼고 호출한다면, from에 기본값으로 unknown이 할당된다.
showMessage('Hello');

```

## 3 - 2. Rest Parameters (Added in ES6)

`Rest Parameters`는 다수의 인자를 `배열(Array)` 방식으로 용이하게 처리하기 위한 목적으로 `ES6`에 추가되었다.

```javascript
// Rest Parameters ==> ...args
function printArgs(...args) {
    console.log(args);
}

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
    
    for (const arg of args) {
        console.log(arg);
    }
    
    args.forEach((arg) => console.log(arg));
}

printArgs("Hello", "World", "Beautiful");
printAll("Hello", "World", "Beautiful");
```

## 4. Local Scope in Function

`Local Scope`은 앞서 다뤘던 내용의 로직이 동일하게 함수에도 적용된다.

`Local Scope`과 `Global Scope`은 TV 형사 드라마에 나오는 취조실 거울을 생각하면 이해가 쉽다.

밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다. (Block { } 을 기준으로)

```javascript
let globalMessage = 'global'; // Global Variable

function printMessage () {
    let message = 'hello';
    console.log(message); // Local Variable
    console.log(globalMessage); // Global Variable
    
    // 함수안에 또 다른 함수를 선언하면
    // 똑같은 범위 로직이 적용된다
    function printAnother() {
        let childMessage = 'HelloWorld';
        console.log(message);
    }
    
    // 에러발생
    console.log(childMessage);
}

// 에러발생
console.log(message);
console.log(childMessage);
```

위 코드의 예시처럼 함수안에 다른 함수를 정의하게 되면 (편의상 함수안의 함수를 자식 함수라 부르겠다) 자식함수는 부모 함수의 모든 것에 접근이 가능하지만, 부모 함수는 자식 함수에 대한 접근이 불가능하다. 오직 할 수 있는 것은 자식 함수를 실행시키는 것 밖에 없다. 

## 5. Return a Value in Function

`Function(함수)`가 어떤 `인자 값`을 `input`으로 받고 이것에 대한 내부적 로직을 실행 후 `결과값(Output)`을 출력해야 한다. 이 출력의 역할을 해주는 것이 `return`이다.

1. `Return`은 결과를 출력해 주는 역할을 한다.
2. `Return`은 함수를 종료해 주는 역할을 한다.

```javascript
function sum(a, b) {
    return a + b;
}
```

위 `sum`함수는 인자로 받은 `a, b`의 합을 `결과값(Output)`으로 리턴해주는 역할을 한다.

##### Return을 이용한 함수 종료의 좋은 예와 나쁜 예

**나쁜 예**

아래 코드를 보면 `user.point`가 10보다 크면 로직을 실행한다. 하지만 이것은 비효율적인 방식이다. 왜냐하면 조건이 맞을 때만 특정 로직을 수행하기 때문이다.

```javascript
function upgradeUser(user) {
    if (user.point > 10) {
      // Logic
    }
}
```

**좋은 예**

조건이 맞지 않으면 `Return`을 이용해 바로 함수를 종료하고, 그렇지 않으면 특정 로직을 수행한다.

```javascript
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    
    // Logic
}
```

## 6. Advanced JavaScript Function 

##### Function Expression

1. `Function(함수)`는 `First Class Citizen`이다.
2. `Function(함수)`는 마치 변수의 값처럼 다뤄진다.
3. `Function(함수)`는 마치 변수의 값처럼 할당할 수 있다.
4. `Function(함수)`는 다른 함수의 인자로 사용할 수 있다.
5. `Function(함수)`는 다른 함수의 리턴 값으로 사용될 수 있다.



`Function(함수)`를 정의할 때 이름이 없는 경우가 있다. 이런 `Function(함수)`를 `익명 함수(Anonymous Function)` 이라 칭한다. 

#### Anonymous Function VS Named Function

```javascript
// Case 1 - Anonymous Function
const print = function() {
    console.log('This is an example of anonymous function');
}

print();

// Case 2 - Named Function
// 물론 이름있는 함수를 변수에 할당할 수 있다
const print = function doSomething() {
    console.log('Do Something...');
}
```

위의 두 경우 모두 `Function Expression` 방식으로 함수가 정의되었다. 하지만 차이가 존재한다. 첫 번째는 이름이 없는 `익명 함수(Anonymous Function)`이고 다른 하나는 이름이 있는 `Named Function`이다. 

`Named Function`은 `Anonymous Function`과 달리 재귀 (피보나치수열 등)에 유용하게 사용할 수 있다는 점이다.

```javascript
// 재귀는 한 함수가 리턴값으로 자기 자신을 호출하는 것을 의미한다.
const test = function doRecursion() {
    console.log("I am currently on the recursion state");
    doRecursion();
}
```

## 6-1. Function Declaration vs Function Expression

#### Function Declaration

```javascript
doFuncDeclaration();

function doFuncDeclaration() {
    console.log("This is a function declaration");
}

doFuncDeclaration(); // 오류 미출력
```

위와 같은 방식으로 함수를 정의하는 형태를 보고 `Function Declaration`이라 칭한다.

#### Function Expression

```javascript
firstCase(); // 오류 출력 

const firstCase = function doExpression () {
    console.log("This is a function expression");
}

firstCase();

const secondCase = function () {
    console.log("This is a function expression");
}

secondCase();
```

두 `Function(함수)` 정의 방식의 차이가 보이는가?

`Function Declaration` 방식의 경우 `Function(함수)`가 정의되기 전에 실행이 가능하다, 반면에

`Function Expression` 방식의 경우 `Function(함수)`가 정의되기 전에 실행이 불가능하다.

`Function Declaration`은 정의되기 전에 실행이 가능한 이유는 `JS 엔진이` `Function(함수)`를  코드 최상단으로 올려주는 (`var`에서 확인할 수 있는) `Hoisting`의 방식으로 동작하기 때문이다. 그래서 결과적으로 `Function(함수)` 정의보다 먼저 호출이 가능하다!



##### Function(함수)를 변수에 할당해보자

1. 변수에 `함수`를 할당 - `Case1`
2. 변수에 `함수`의 리턴 값을 할당 - `Case2`
3. `Function(함수)`의 인자 값으로 `Function(함수)`를 받는 경우 - `Case3`
4. `Function(함수)`의 리턴 값으로 `Function(함수)`를 리턴하는 경우 - `Case4`

```javascript
function print() {
    console.log("Test Case...");
}

// Case1
const printAgain = print;
printAgain();

function print() {
    return "Hello World";
}

// Case2
// 함수의 리턴값을 변수에 할당하고 싶은 경우 함수를 실행한 것을 변수에 할당한다.
const printResult = print();
console.log(printResult);

// Case3
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('Yes!');
}

const printNo = function() {
    console.log('No!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Case4
function fib(n) {
  if (n < 2){
    return n
  }
    
  return fib(n - 1) + fib (n - 2)
}
```

## Arrow Function

기존의 `Function(함수)` 정의 방식을 간결하게 만들어주는 방식이다. 이 `Function(함수)`는 항상 `익명 함수 (Anonymous Function)` 형태를 가진다.

```javascript
// 기존 함수 정의 방식
const simplePrint = function() {
    console.log('This is a simple print');
};

// Arrow 함수 정의 방식
const simplePrint = () => console.log('This is a simple print');

// 기존 함수 정의 방식
const add = function (a, b) {
    return a + b;
}

// Arrow 함수 정의 방식
const add = (a, b) => a + b;
```

`Arrow Function`에도 `Block`을 사용할 수 있다. 단, 이때는 `return` 키워드를 작성해야 한다.

```javascript
const simplyMultiply = (a, b) => {
    return a * b;
}

const simplyAdd = (a, b) => {
    return a + b;
}
```

#### IIFE: Immediately Invoked Function Expression

`IIFE`는 즉시 실행 함수를 의미한다. 이것은 `함수(Function)`를 선언함과 동시에 호출하고 싶은 경우에 사용한다.

```javascript
(function hello() {
    console.log('IIFE');
})();
```

## Quiz

```javascript
// function calculate(command, a, b)
// command: add, substract, multiply, divide, remainder
```



















 