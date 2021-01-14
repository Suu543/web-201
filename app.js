// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculate a value

// 1. Function Declaration
// function name (param1, param2) { body... return; }
// 함수라는 키워드를 이용해 이름을 지정하고, 인자를 나열하고,
// BODY에 기본적인 함수 로직을 작성하고 리턴을 해준다.

// one function = one thing
// 하나의 함수는 한 가지 일만 하도록 만들어야한다.

// naming: doSomething, command, verb
// e.g. createCardAndPoint --> createCard, createPoint
// 함수는 무엇인가를 동작하는 것이기 때문에, 명사형태가 아닌 동사형태로
// 이름을 지정해야한다.
// 항상 함수안에서 내가 너무 많은 작업을 수행하고 있는 것이 아닌가 생각해보아야한다.

// function is object in JS
// JS에서 함수는 object로 간주하기 때문에
// 1. 함수를 변수해할당가능
// 2. 인자로 전달가능
// 3. 함수를 리턴가능

// 함수 정의
function printHello() {
    console.log('Hello');
}

// 함수 호출
printHello();

// 하지만 printHello는 쓸모가 없다 그저 Hello만 출력하니까

// 인자로 전달받은 메세지를 출력하게 만들어 쓸모있게 만들어보자
// JS는 Type이 없기 때문에 함수 자체의 인터페이스만 보았을때
// 문자를 전달해야하는지, 숫자를 전달해야하는지 알기가 쉽지않다.
function log(message) {
    console.log(message);
}

log('Hello World');
// 이 경우에는 문자로 출력되지만 타입이 중요한 경우 혼동될 수 있으니
// 잘 유의하자
log(1234);

// Typescript
// 함수의 이름, 인자의 데이터 타입, 리턴 값을 확실히 확인할 수 있기 때문에
// 협업시 TypeScript은 유리하다.
// Brenden이 대충만들어서 이런 문제가 생겨서 이거를 방지할려고 typescript나옴
// https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAGzgcwBQFsCmBnPAQzRwC5E8oAnGMNASkQG8AoRdxCBPOZHAOlSZcBYjnosAvkA
/*
function log(message: string): number {
    console.log(message);

    return 0;
}
*/

// 2. Parameters
// Primitive Parameters: passed by value
// Object Parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

// 메모리에는 객체가 생성된 참조값이
// su에는 참조값이 들어감 
const su = { name: 'su' }

// changeName을 전달하게되면
// name이 가리키고 있는 이름이 coder로 변경된 것을 확인할 수 있다.
changeName(su);
// object는 참조값으로 전달되기 떄문에 함수안에서 object의 값을 변경하면
// 이것이 그대로 메모리에 적용된다.
console.log(su);

// 3. Default Parameters (Added in ES6)
function showMessage(message, from) {
    if (from === undefined) {
        from = "unknown";
    }

    console.log(`${message} by ${from}`);
}

// 두번째 인자값을 전달해주지 않았기 때문에 from은 unknown이 된다.
showMessage('Hi');

//------------------------------------------------------
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}

// 4. Rest Parameters (Added in ES6) 
// ...args 배열 형태로 전달
function printAll(...args) {
    for (let i = 0; i < args.length, i++) {
        console.log(args[i]);
    }

    // 위와 똑같은 방식
    for (const arg of args) {
        console.log(arg);
    }

    // 위와 똑같은 방식
    args.forEach((arg) => console.log(arg));
}

printAll("Hello", "World", "Beautiful");

// 5. Local Scope
// 밖에서는 안이 보이지 않고
// 안에서만 밖을 볼 수 있다.
// Block을 기준 { } 
let globalMessage = 'global'; // Global Variable
function printMessage () {
    let message = 'hello';
    console.log(message); // Local Variable
    console.log(globalMessage);

    // 함수안에서 또 다른 함수를 선언
    // 자식 함수가 부모 함수에 정의된 변수에 접근이 가능한 것이 바로 closure다.
    function printAnother() {
        console.log(message);
        let childMessage = 'helloworld';
    }

    // 에러발생
    console.log(childMessage);

    // 리턴값이 없는 경우 아래와 똑같다 undefined
    // 이거는 생략 가능
    // return undefined;
}

printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early Return, early exit
// bad
// 조건이 맞는 경우에만 
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
// 조건이 맞지 않으면 바로 함수를 종료
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }

    // long upgrade logic
}

// Function Expression
// First-Class Function
// Functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the exection reaches it

// 이렇게 function에 이름이 없는 것을 볼 수 있는데
// 이렇게 이름이 없는 함수는 anonymous function이라 칭한다.

// Function Expression의 경우 아래와 같이 우선 변수에 할당되고 그 이후에 
// 함수를 호출할 수 있다는 특징이 있다.
const print = function() {
    console.log('print')
};

print();

// Function Declaration은 바로 호출이 가능하다.
// 함수가 정의되기 전에 Hoisting이 되기 때문에 아래와 같이
// 함수 정의보다 먼저 호출이 가능하다!
// 이것은 JS 엔진이 선언된 것을 제일 위로 올려주기 때문이다.
declartion()

function declartion() {
    console.log('I am a function declaration');
}

// printAgain은 print를 가리키고 있으니까
const printAgain = print;
// 동일하게 호출 가능하다
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

// Callback Hell  - callback function using function expression
// 정답과 정답이 맞을때 호출하는 함수, 틀릴때 호출하는 함수가 있다
// 주목할 점은 함수가 인자값으로 전달된다는 점이다.
// 두 가지 콜백함수가 인자로 전달된 것을 확인할 수 있다.
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
};

// Anonymous Function
const printYes = function() {
    console.log('yes!');
}

// 함수 이름이 지정된 것을 확인할 수 있다. - named function
// better debugging in debugger's stack traces
// Recursions
// 나중에 디버깅할때 자세히 알아보자
const printNo = function print() {
    console.log('no!');

    // Recursion 재귀
    // 피보나치수열 등
    // Call Stack Size Exceeded오류뜸
    print();
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow Function
// 함수를 넘나 간결하게 만들어주는 아이다
// 애는 항상 이름이 없는 anonymous function
const simplePrint = function () {
    console.log('simplePrint!');
}

const simplePrint = () => console.log('simplePrint');

const add = function (a, b) {
    return a + b;
}

const add = (a, b) => a + b;

// Arrow Function에도 Block을 쓸 수 있는데
// 이때는 return 키워드를 작성해야한다.
const simpleMultiply = (a, b) => {
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 함수를 호출하고 싶은 경우
(function hello() {
    console.log('IIFE');
})();

// function calculate(command, a, b)
// command: add, substract, multiply, divide, remainder