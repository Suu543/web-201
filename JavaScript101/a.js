// 1. 함수 선언 방식
// 2. Parameter vs Argument
// // 3. Parameters
// 4. Default Parameters
// 5. Rest Parameters
// 6. Local Scope in Function
// Parameter vs Argument
// Parameter: 매개변수:
// Argument: 전달인자
// 매개는 어떤 것과 어떤 것을 연결한다
// function a(a, b) {

// }

// a(1, 2);

// function useleseFunc(a, b, c, d) {
//     console.log('Hello World')
// }

// function usefulFunc(a, b) {
//     const result = a + b;
//     const result2 = a * b;
//     return { 첫번째: result, 두번째: result2}
// }

// Parameters
// Data Types in JS
// 1. Primitive Data Types
// - Passed by Value
// - Number, Boolean, String. Null, undefined, NaN,

// 2. Object - Array, Object, Function
// - Passed by Object (참조값 reference)

// function changeName(obj) {
//     obj.name = 'Hello World'
//     obj.age = 50
// }

// const test = {
//     name: 'su',
//     age: 22
// }
// console.log(test.name); // su
// changeName(test);
// console.log(test.name); // Hello World

// Default Parameter
// function showMessage(message, from = 'unknown') {
//     console.log(`${message} by ${from}`)
// }

// showMessage('oehawoehj');

// Rest Parameterr
// function printArgs(...args) {
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }
// }

// printArgs('a', 'b', 'c' ,'d', 'e');

// Local Scope in Function

// let global = 'global';

// function a () {
//     // 우리집
//     let message = 'aaaa';
//     console.log(global);
//     console.log(age);

//     // 내방
//     function b () {
//         let age = 25;
//         console.log(global);
//         console.log(message);
//     }
// }

// function a (aaa) {
//     console.log(aaa);
//     // return undefined;
//     // return;
// }


// let a = 2;
// let b = 3;

// // 나는 a.js라는 함수를 실행시킬래
// // node a.js

// function hello() {
//     let age = 5;
//     let name = 4;
//     let a = 10;

//     function p() {
//         let m = 5;
//         console.log(a);
//     }
// }

// a를 출력하세요
// a를 탐색하겠습니다 
// if 문을 이용해서 처음 a가 나오면 return a;

// 함수는 object입니다.
// obj는 어떤 의미를 가질까?
// 1. object는 변수에 할당이 가능하다
// let a = { name: 'hello'};
// // 2. object는 인자로 전달이 가능하다
// // 3. object는 함수의 리턴 값으로 사용이 가능하다.
// function a (obj) {
//     obj.name = 'hello';

//     return obj;
// }
// 함수는 객체다
// 함수는 객체의 부분집합이다 아니다?
// 함수는 객체의 원소야 아니야?
// 1. 함수는 First Class Citizen 이다
// 2. 함수는 마치 변수의 값 처럼 다뤄진다
// 3. 함수는 마치 변수의 값 처럼 할당이 가능하다
// const a = function () {
//     // 익명함수
//     console.log('함수에 이름이 없어요');
// }

// a();

// // 4. 함수는 다른 함수의 인자로 사용이 가능하다
// function hello (a, b) {
//     a();
//     console.log(b);
// }

// hello(function hi() {
//     console.log('hello world')
// }, 'hello')
// // 5. 함수는 다른 함수의 리턴 값으로 사용될 수 있다
// function a() {

//     function helloWorld() {
//         console.log('hello world')
//     }

//     return helloWorld;
// }

// const aa = a();
// aa();
// 6. 함수는 객체나 배열의 요소로 사용될 수 있다.
// const a = [
//     function() { console.log('a')},
//     function() { console.log('b')},
//     function() { console.log('c')}
// ]
// a[0]();
// a[1]();
// a[2]();

// const aa = {
//     name: function () { console.log('aa')},
//     age: function () { console.log('bb')}
// }

// aa.name();
// aa.age();

// function a (a, b) {}
// const a = function (a, b) {};

// Hoisting: 제일 위로 올린다. 최상단으로 올린다

// a();

// function a (a, b) {
//     console.log('hello');
// }
// a();

// function a() {
//     console.log('heelo');
// }
// const a = function() { console.log('hello');}
// a();

// Function Declaration
// doFuncClaration();

// function doFuncClaration() {
//     console.log('This is a function declaration');
// }

// Function Expression
// const funcExpress = function () {

// }

// const funcExpression = function a () {
//     // 자기 자신을 호출할 때
//     if(조건1) return 0;
//     else if (조건2) return a();
// };

// 

// // 1. 변수에 함수를 할당하는 경우
// function print() {
//     console.log('Hello World');
// }

// const printAgain = print;
// printAgain();

// // 2. 변수에 함수의 리턴값을 할당하는 경우
// function print2() {
//     return "print2 result";
// }
// const print2Result = print2();

// // 3. 함수의 인자값으로 함수를 받는 경우
// const printYes = function () {
//     console.log('Yes!')
// };

// const printNo = function () {
//     console.log('No!');
// }

// function randomQuiz(answer, printYes, printNo) {
//     if (answer === 'love you') {
//         printYes();
//     } else {
//         printNo();
//     }
// }

// randomQuiz('love you', printYes, printNo);
// randomQuiz('Wrong', printYes, printNo);

// 함수를 간결하게 작성하게 해줌
// Arrow Function
// 1. 기존 함수 정의 방식
// const simplePrint = function() {
//     console.log('simple print')
// }

// // 2. Arrow Function
// const simplePrint = () => console.log('hello world');

// const add = function(a, b) {
//     return a + b;
// }

// const add = (a, b) => a + b;

// // 만약에 인자를 받자마자 한 줄로 작성하지 못하고, 여러줄이 요구 되는 경우에는
// const multipleLines = (a, b) => {
//     // arrow function두 block을 사용하는 경우 return 꼭 사용
//     return a + b;
// }

// Hint1: 함수가 함수를 리턴한다
// F1 = F2 = 1
// F3 = F2 + F1
// F4 = F3 + F2
//...

// function fibonacci(n) {
//     let pre = 0;
//     let cur = 1;
//     let post = 0;

//     for (let i = 1; i < n; i++) {
//         // post는 sum 이라 생각하면되고 현재꺼 + 전꺼
//         post = pre + cur;
//         // 현재꺼가 전꺼가
//         pre = cur;
//         // sum이 현재꺼가 되니까
//         cur = post;
//     }

//     return post;
// }

// function fibonacci(num) {
//     if (num < 2) return num;
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

// 1. 함수는 First Class Citizen (1등급 퍼스트 클래스)
// 2. 함수는 변수처럼
// 3. 함수는 리턴값으로
// 4. 함수는 인자값
// 5. 함수는 object나 배열의 인자로 쓸 수도 있고

// 익명함수
// Function Expression
// const print = function() {
//     console.log('익명함수')
// }

// print();
// Function Declaration
// a();
// function a () {
//     console.log('hello')
// }

// function add(a, b) {
//     return a + b;
// }

// const add = (a, b) => a + b;

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
// 재귀 (점화법, 점화식) Recursion
function fib(n) {
  if (n < 2){
    return n
  }
    
  return fib(n - 1) + fib (n - 2);
}