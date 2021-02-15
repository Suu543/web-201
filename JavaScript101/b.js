// 1. 재사용성
// 2. 메모리 절약
// 1. 함수 선언 방법
    // - 함수의 이름
    // - 함수의 인자
    // - 함수의 바디
    // - 함수의 리턴값
// function name (a, b) {
//     const result = a + b;
//     return result;
// }
// // 2. 함수 호출 방법
// name(1, 2);
// 3. Parameters vs Arguments
// parameters: 매개변수
// function a (b, c) {

// }

// // argument: 전달인자
// a(1, 2);
// 4. Parameters
// 5. Default Parameters
// function sendMessage(message, from = 'unknown') {
//     // if (from === undefined) {
//     //     from = 'unknown';
//     // }

//     console.log(`${message} to ${from}`);
// }

// sendMessage('adasd');


// 6. Rest Parameters
// function printName(a, b, c, d, e) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     [a, b, c, d, e]
// }

// function printName(...args) {
//     console.log('args', args);
// }

// printName('a', 'b', 'c', 'd', 'e', 'f', 'g');

// 7. Local Scope
// let globalVar1 = 5;
// let aaa = 5;
// function first() {
//     let firstVar = 5;
//     let aaa = 8;

//     function second() {
//         let secondVar = 6;
//         console.log(aaa);
//     }
// }

// if (a) {
//     return a;
// }

// node b.js
// ==> b.js는 하나의 함수라고 생각해보자
// node b.js ==> b.js라는 함수를 실행시키겠습니다.

// 7. Return
// function test () {
//     console.log('hello world');
//     // return undefined;
//     // return;
// }

// test();

// 8. 좋은 함수와 나쁜 함수의 차이
// function bad (a, b) {
//     console.log('hello wrold');
// }

// function good (a, b) {
//     const result = a + b;
//     return result;
// }

// Data Types in JS
// 1. Primitive Data Type
// - Number, String, Boolean, Null, Undefined, Symbol
// 2. Object
// - Object, Array, Function

// let arrExample = [1, 2, 3, 4, 5, 6];
// let objExample = {
//     name: 'su',
//     age: 25
// }

// 1. 마치 변수 처럼 할당할 수 있다.
// [{}, {}, {}, {}]
// 2. 마치 값인 것 처럼 할당할 수 있다.
// {
//     name: ['a', 'b', 'c']
// }
// 3. 객체는 함수의 매개변수로 사용될 수 있다
// function test(a, b) {
//     a();
//     console.log(b);
// }

// test(function () {
//     console.log('hello');
// }, 'yongsu')

// function changeName(obj) {
//     obj.name = 'hello world'
// }

// const su = {
//     name: "yongsu"
// };

// changeName(su);
// console.log(su.name); //

// function a () {
//     return function () {
//         console.log('Hello World')
//     }
// }

// let testFunc = a();
// testFunc();

// 우리는 왜 익명함수를 사용할까?
// 이거는 그냥 모양으로 표현해줄려고
// let testFunc = function () {
//     console.log('this is test function');
// }

// 왜 굳이 위와 같이 사용해야할까?
// function testFunc() {

// }

// testFunc();

// 1. 함수는 리턴 값으로 사용된다.
// 리턴 값은 있는데 리턴 값을 어디에 담아야하는데 어디에 담을까?
// function returnFunc() {
//     return function () {
//         console.log('hello world');
//     }
// }

// let testResult = returnFunc();
// testResult();

// beforeFunc();

// function beforeFunc() {
//     console.log('hello world');
// }

// 애초에 아래와 같이 함수를 정의하는 목적자체가
// 리턴값을 받고 싶어서 그런거니까
// const beforeFunc = function () {
//     console.log('hello wrold');
// }

// beforeFunc();

// Function Expression vs Function Declaration

// b();

// function b () {
//     console.log("Function Declaration")
// }

// const a = function () {
//     console.log('Function Expression')
// }

// a();

// function print() {
//     console.log("Test Case...");
// }

// const printAgain = print;
// printAgain();

// function randomQuiz(answer, printYes, printNo) {
//     if (answer === 'yes') {
//         printYes();
//     } else {
//         printNo();
//     }
// }

// const printYes = function() {
//     console.log('yes');   
// }

// const printNo = function() {
//     console.log('no')
// }

// randomQuiz('yes', printYes, printNo);
// // 근데 만약에 Function Expression 방식이 싫다면
// randomQuiz('yes', 
//     function() { console.log('yes') }, 
//     function() { console.log('no')}
//     );

// 간결하게 적자는 의미에서 고안한게
// arrow function

// const simplePrint = function () {
//     console.log('simple print');
// }

// const simplePrint = () => console.log('simple print');

// const add = function (a, b) {
//     return a + b;
// }

// const add = (a, b) => a + b;

// // 꼭 리턴을 적고 싶다면
// const add = (a, b) => {
//     return a + b
// }

// 1. 함수가 함수를 리턴한다
// 2. 피보나치 수열은 n이 무조건 2이상일때 점화식 사용이 가능하다
// Fn = Fn-1 + Fn-2;
// 0 1 1 2 3 5 8

// function fibonacci(n) {
//     let pre = 0;
//     let cur = 1;
//     let post = 0;

//     for (let i = 1; i < n; i++) {
//         post = pre + cur;
//         pre = cur;
//         cur = post;
//     }

//     return post;
// }

// function fibonacci(num) {
//     if (num < 2) return num;
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(6));

// Function은 object
// 1. 함수는 변수처럼 다룰 수 있다
const a = function() {}
// 2. 함수는 값처럼 다룰 수 있다
// 3. 함수는 다른 함수의 인자로 사용할 수 있다
// function a (b) {
//  b();
// }
// a(function () { console.log('heelo')})

// const b = function () { console.log('e')}
// a(b);
// 4. 함수는 다른 함수의 리턴 값으로 사용할 수 있다
// function test() {
//     return function () {
//         console.log('hello wolrd')
//     }
// }

// const aa = test();
// aa();
// 익명함수: 함수의 이름없이 정의만 있는 경우
// Function Declartion vs Function Expression
// a();
// function a () {
    
// }
// a(); 없다
// const a = function () {

// }

// 5. 간단히 작성하게 도와주는 함수
// function add(a, b) {
//     return a + b;
// }

// const add = (a, b) => a + b;
// const test = (a, b) => {
//     console.log('a', a);
//     return a + b;
// }