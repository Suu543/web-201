// let feb_sixth_income = [];

// function beginDelivery(rider) {
//     console.log(`${rider}님이 배달을 시작했습니다.`);
// }

// function finishDelivery(rider, store, dest) {

//     console.log("성공적으로 배달을 완료했습니다.");
//     return {
//         rider: rider,
//         store: store,
//         dest: dest
//     };
// }

// feb_sixth_income.push(finishDelivery('a', 'mcdonald', 'daegu'));
// console.log
// Parameter(패러미터) vs Argument(얼규먼트)
// Parameter: 매개(A <--> B)변수 

// 함수를 사용하는 사람과, 함수 내부를 연결해준다, 매개해준다
// function func(a, b) {
//     return a + b;
// }

// Argumeen전달인자

// 1. 쓸모있는 함수 VS 쓸모없는 함수
// 매개변수가 존재하고, 이 매개변수의 값에따라 리턴값이 변한다는 특징이있다.
// function usefulFunc(a, b) {
//     return a + b;
// }

// 매개변수가 존재하지 않고, 리턴하는 값도 없고, 어떤 경우에도 항상 같은 결과를 출력한다.
// function uselessFunc() {
//     console.log('Hello...')
// }

// 쓸모있는 함수와 쓸모없는 함수는 다음과 같은 조건을 확인해서 검증할 수 있습니다.
// 1. 인자값의 존재유뮤
// 2. 인자값의 존재하는데, 이 값에 따라 리턴값이 달라지는가?
// 3. 인자값의 존재유무에 상관없이 항상 똑같은 값을 리턴하는가?
// 4. 함수의 이름이 내부적으로 동작하는 로직과 연관성이 있는가?

// Parameters
// Data Types in js
// Passed by value
// let a = 5;
// 1. Primitive Data Types 
//     - Number, string, undefined, null, symobol, boolean
// let obj = {
//     name: 'a',
//     age: 15
// }
// 2. Object
// 참조 = reference
// passed by reference

// 1. 함수 안에서는 예외 가능
// 2. 아니닙다 논리적려면 어디서든 똑같이 적용

// function changeNmae(obj) {
//     obj.name = 'sususu'
// }

// const su = {
//     name: "Hello World"
// }

// console.log(su.name); // Hello World
// changeNmae(su);
// console.log(su.name); // sususu

// Default Parameter
// 메세지를 보내고 싶었어
// 이 메세지를 자동으로 완성해주는 함수가 필요합니다
// 저는 이 함수에 메세지와 수신자를 넣고 싶습니다.
// 하지만 수신자를 작성하지 않은경우 ukknown이라는 이름으로 전달하고 싶습니다
// function sendMessage(message, from) {
//     if (from === undefined) {
//         from = "unknown";
//     }

//     console.log(`${message} by ${from}`);
// }
// 위와 같은 기능을 조금 더 간결하게 하자는 의미
// function sendMessage(message, from = "unknown") {
//     console.log(`${message} by ${from}`);
// }

// function isParameter(param) {
//     if (param === undefined) {
//         param = 'unknown'
//     } 

//     return param;
// }

// default parameter ES6
// function printArgs(a, b, c, d, e, f, g,d2d2d2,d d,2d,2d,) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d)
// }
// 내가 몇개의 인자를 넣을지는 모르겠지만
// 내가 넣는 모든 인자를 어떤 배열에 담아서 이용할 수 있게
// ...args
// function printArgs(...args) {
//     // console.log(args);
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }
// }

// printArgs('a', 'b', 'c', 'e', 'f', 'g', 'b', 'g', 'h');

// Rest Parameter

// scope
// let globalVar = 2;
// function printMessage() {
//     // Local VS Global
//     let message = 'hello';

//     function 은밀한폴더() {
//         let 은밀한영상 = 'a';
//         let 은밀한사진 = 'b';
//         console.log(message);
//     }
// }
// console.log(은밀한영상);

// return 사용방법
// 1. return은 함수의 결과를 출력해주는 역할
// 2. return은 함수를 종료해주는 역할
// function doAddition(a, b) {
//     return a + b;
// }
// function printAdd() {
//     console.log('aa');
//     return; // return undefined;
// }

// printAdd();
// console.log('aaaa');
// 4 + 3 + 2 + 1 = 10
// let a = [1, 2, 3, 4, 5]

// let result = solution(a);
// console.log(result);

// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
// 1번 문제
// function solution(numbers) {
//     // Passed by Reference
//     const answer = [];
//     const paramLength = numbers.length;
//     for (let i = 0; i <= paramLength - 1; i++) {
//         for (let j = i + 1; j <= paramLength - 1; j++) {
//             const sum = numbers[i] + numbers[j];
//             answer.push(sum);
//         }
//     }

//     return answer;
// }

// // 2번 문제
// function solution(a, b) {
//     let sum = 0;

//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }

//     return sum;
// }

// solution(5, 10) ==> 5 + 6 + 7 + 8 + 9 + 10
// Parameter vs Argument
// Parameter: 매개변수
// Argument: 전달인자

// function a (a, b) {
//     return a + b;    
// }

// Argument 전달인자
// a(5, 10);

// 1. 쓸모있는 함수 vs 쓸모없는 함수
// 2. Parameters (매개변수)
// 3. Default Parameters
// 4. Rest Parameters
// 5. Return의 사용방법
// 쓸모없는 함수
// function aaa() {
//     console.log('나는 쓸모없는 함수');
// }
// // 쓸모있는 함수
// function abc(a, b, c) {
//     return a + b + c;
// }

// 함수의 유용성을 구분하는 법
// 1. 함수가 사용자로 부터 인자값을 받는지 여부
// 2. 함수가 사용자로 부터 받는 인자값에 따라 값이 변경되는지 여부
// 3. 함수가 재사용성이 가능한지 여부
// 4. 함수가 단순 출력인지 여부

// 1. Primitive Data Types
// - string, number, boolean, null, undefined, symbol
// Passed by Value
// 2. Object
// Passed by reference
// - object, array
// function changeName(obj) {
//     obj.name = "sususu";
// }

// const su = {
//     name: 'yongsu',
//     age: 10
// }
// console.log(su.name);
// changeName(su);
// console.log(su.name);
// Default Parameter
// function sendMessage(message, from, a, b, c, d, e) {
//     if (from === undefined) {
//         from = 'unknown';
//     }

//     if (a === undefined)
//     if (b === undefined)

//     console.log(`${message} by ${from}`);
// }

// sendMessage('hellowolrd');
// function sendMessage(message, from = 'unknown') {

// }

// function getMessage(message, to) {

// }
// getMessage('message');
// message는 unknown입니다.
// Rest Parameter
// function print(a, b, c, d, e, f, g) {
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }
// function print(a, b, c, d, e) {
//     let result = [];
//     result.push(a);
//     result.push(b);
//     result.push(e);
// }
// ...args
// function printArgs(...args) {
//     console.log('args', args);
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }
// }

// printArgs('hello', 'world', 'this',' is0');

// Local Scope
// function grandParent() {
//     let a = 2;

//     function parent() {
//         let b = 2;
//         console.log(a);

//         function child() {
//             let c = 2;
//             console.log(c);
//             console.log(b);
//             console.log(a);
//         }
//     }

//     console.log(b);

// }

// Return 값 함수에서
// 1. return은 결과를 출력해주는 역할
// 2. return은 함수를 종료해주는 역할
// function sum(a, b) {
//     return a + b;
// }

// function a() {
//     console.log('heelo');
//     // return undefined;
//     return;
// }

// a();
// console.log('aaa');



// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.
let a = [1, 2, 3, 4, 5];
// [3, 4 ,5, 6, 5, 6, 7, 7, 8, 9]
// function solution(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length -1; j++ ) {
//             let sum = arr[i] + arr[j];
//             result.push(sum);
//         }
//     }

//     return result;
// }

// [1, 2, 3, 4, 5]
// a ~ b 를 포함한 a ~ b 사이의 모든 숫자의 합을 리턴해주는 함수가
// function solution(a, b) {
//     let sum = 0;
//     for (let i = a; a <= b; i++) {
//         sum += i;
//     }

//     return sum;
// }
// [1, 2, 3, 4, 5]
//  0  1  2  3  4

// (0, 1) (0, 2) (0, 3) (0, 4)
// (1, 2) (1, 3) (1, 4)
// (2, 3) (2, 4)
// (3, 4)