// 2. Variable, rw (read / write)
// 변수는 메모리에 변수를 읽고 쓸 수 있다.
let globalName = 'global name';

{
    let name = 'yongsu';
    name = 'hello';
    console.log(name);
}

// 3. Constant, r (읽기만 가능하다), 다시 다른 값을 쓰는 것이 불가능하다
// Use const whenever possible 
// only use let if variable needs to change
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;

// 4. Variable Types
// primitive type vs object type에 따라 메모리에 저장되는 방식이 다르다.
// object는 너무 커서 메모리에 한 번에 올라갈 수 없기 때문에
// reference 값을 가진다.

// Note!
// Immutable Data Types: primitive types, frozon objects (i.e. object.freeze)
// Mutalble data types: all objects by default are mutable in JS
// class와 함수할 때 한번 더 할 것이기 때문에 이해못하는 것은 걱정하지 않아도 된다.

// Primitive, single item
// number, string, boolean, null, undefined, symbol
// object, box container
// function - first-class function

// operators
// 1. string concatenation
console.log('my' + 'cat');
// 숫자가 문자로 변환
console.log('1' + 2);
console.log("Hello's \n book");
// Template Literals
console.log(`
String Literals: 
''''
줄바꿈도 인식이 되용
1 + 2 = ${1 + 2}`);


// Numeric Operators
console.log(1 + 1); // add;
console.log(1 - 1); // substract;
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // Remainder
console.log(2 ** 3); // exponentiation

// Increment and Decrement Operators
let counter = 2;
// const preIncrement = counter + 1; 과 동일
const preIncrement = ++counter; 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// postIncrement = counter; 변수를 먼저 할당하고 3 
// counter = counter + 1; 4
let counter2 = 2;
const postIncrement = counter2++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter2}`)

// --도 동일
let counter3 = 2;
const preDecrement = --counter3;
console.log(`preDecrement: ${preDecrement}, counter3: ${counter3}`);
let counter4 = 2;
const postDecrement = counter4--;
console.log(`postDecrement: ${postDecrement}, counter4: ${counter4}`);

// 4. Assignment Operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison Operators
console.log(10 < 6); // lESS THAN
console.log(10 <= 6); // LESS THAN or Equal
console.log(10 > 6); // Greater THAN
console.log(10 >= 6); // Greater Than or Equal

// 6. Logical Operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or)  --> True를 리턴 이 친구는 처음으로 True나오는 곳에서 멈춘다.
// 만약 value1에서 true 나오면 뒤에가 무엇이든 바로 멈춘다.
// 이것을 확인하는 방법은 value1을 true로 변경하고 출력해보면,
// check 함수가 호출되지 않는 것을 알 수 있다.
// 만약 check() 같은 것을 제일 앞에두게되면 욕 디지게 먹는다.
// 왜냐하면 computing power가 많이 들기 때문이다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds thr first falsy value
// 거짓이 발견되는 즉시 false를 리턴한다. 그 뒤에 것은 실행시키지 않는다.
// Heavy 한 Operation일 수록 뒤에서 체크하는 것을 원칙으로 하낟.
console.log(`and: ${value1 && value2 && check()}`)

function check() {
    for(let i = 0; i < 10; i++) {
        // Wasting Time
        // 쓸데없이 시간을 낭비하다 True를 리턴
        console.log('Oh My God');
    }

    return true;
}

// && is often used to compress long if-statement
// nullableObject && nullableObject.something
// null object가 null이 아닐때만 something 이란 것을 받아온다.
// if (nullableObject != null) {
//     nullableObject.something
// }

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// type을 변경해서 검사를 한다. 문자열이기는한데 안에 들어있는건 숫자 5니까 똑같해 하는 거라 생각할 수 있다.
console.log(stringFive == numberFive);

// === strict equality, no type conversion
// type이 다르면 다른 것이다 간주한다.
// 왠만하면 이것을 사용
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object eqaulity by reference
const a1 = { name: 'a1'};
const a2 = { name: 'a1'};
const a3 = a1;
console.log(a1 == a2); // False - 다른 reference가 저장되어있으니 false
console.log(a1 === a2); // False - 타입을 떠나서 reference 값 자체가 다르기 때문에 false
console.log(a1 === a3); // True - 같은 reference를 가지고 있으니 true

// equality - puzzler
console.log(0 == false); // true - 둘 다 false로 간주되니까 true
console.log(0 === false); // false - 타입 비교시 false
console.log('' == false); // true - 둘 다 false로 간주
console.log('' === false); // false - 타입 비교시 false
console.log(null == undefined); // true - 애는 같은 것으로 간주
console.log(null === undefined); // false - 다른 type이니까 false

// 8. Conditional Operators: if
// if, else if, else
const nickname = 'su';

if (nickname === 'su') {
    console.log('Welcome Su');
} else if (nickname === 'coder') {
    console.log("Welcome Code");
} else {
    console.log('Welcome Unknown');
}

// 9. Ternary Operator: ?
// Condition ? value1 : value2
// nesting에서 계속 사용하면 가독성이 떨어지는 그 당시에는 if, switch를 추천
console.log(nickname === 'su' ? 'yes' : 'no');

// 10. Switch Statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in JS
const browser = "IE";

switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log("Love you!");
        break;
    case 'Firefox':
        console.log("Love You!");
        break;
    default: 
        console.log("Same...");
        break;
}

// Chrome, Firefox 같으니까 붙여서 아래와 같이 사용가능
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log("Love You!");
        break;
    default: 
        console.log("Same...");
        break;
}


// 11. Loops
// while loop, while the condition is truthy
// body code is executed
// statement가 false가 되기 전까지 계속 돔
let i = 3;
while (i > 0) {
    console.log(`While: ${i}`);
    i--;
}


// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


// for loop, for (begin; condition; step)
// begin은 딱 한 번만 실행
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loop
// Big O(n^2) CPU Intensive 가능한 피하자
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break (완전히 loop를 끝내는 것 ), continue (지금 껏만 skip)
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    
    console.log(i);
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 10; i++) {
    if (i === 8) {
        break;
    }

    console.log(`index: ${i}`)
}





















