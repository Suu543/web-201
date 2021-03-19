// Primitive Types (원시형)
// - 더 이상 쪼개질 수 없느 ㄴ가장 작은 ㄷ나우니의 데이터 

// Object Types 
// - Object - Dictionary
// - Array - List
// - Function - FUnction
// object array의 짬뽕



// let result = add(1, 2);
// console.log(result);

// JavaScript의 익명함수는 어떻게 생겨먹은겨?
// arrow function = lambda function
// function add(a, b) {
//     // 함수가 종료되는 시점을 알려주는 거;
//     return a + b;
// }
// subtract, multiply, divide,
// let add = (a, b) => a + b; // 끝에 return 이 생략
// console.log(add(1, 2));

// 1. 함수는 다른 함수의 인자로 사용할 수 있다
function test(a, b) {
    let result1 = a();
    let result2 = b();

    return result1 + result2;
}

let result = test(() => "Hello", () => "World");
console.log(result);
// 2. 함수는 다른 함수의 리턴값이 될 수 있다
function onWork() {
    return (name) => `Hello ${name}`
}

let jh = onWork();
console.log(jh);
console.log(jh("재욱"));
// 3. 함수는 변수에 할당할 수 있다.
let a = (a, b) => a + b;
console.log(a(1, 2));

// 4. Higher Order Function
let onClick = (worker) => (a) => `${worker}: $Hello ${a}`;
let worker_test = onClick("용수");
console.log(worker_test("재욱"));

// function onClick () {
//     let value = "Hello";
//     function worker (worker) {
//         function name() {
//             let name = "Hello"
//             console.log(key);
//             console.log(value);
//         }
//     }
// }

console.log(onClick("재욱")("손님"));