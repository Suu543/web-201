// const foodArray = [
//     { name: 'Burrito', ingredients: ['onion', 'tomato', 'cheese']},
//     { name: 'Pizza', ingredients: ['onion', 'tomato', 'cheese'] },
//     { name: 'Burger', ingredients: ['onion', 'tomato', 'cheese'] },
//     { name: 'Pasta', ingredients: ['onion', 'tomato', 'cheese'] }
// ];
// // Key: Value
// // Chaining
// foodArray.forEach((food) => {
//     food.ingredients.forEach((ingredient) => {
//         console.log(ingredient);
//     });
// });

// // 치명적인 단점 리턴값을 받을 수가 없다

// for (let i = 0; i < foodArray.length; i++) {
//     let food = foodArray[i]
//     for (let j = 0; j < foodArray[i].ingredients; j++) {
//         let ingredient = food.ingredients[j];
//         console.log(ingredient);
//     }
// }

// // for (let i = 0; i < 10; i++) {
// //     if (i === 5) {
// //         break;
// //     } 

// //     console.log(i);
// // }

// let a = [1, 2, 3, 4, 5];
// a.forEach((a) => {
//     if (a === 5) {
//         break;
//     }
//     console.log(a);
// })

// class Animal {
//     constructor(다리, 뇌무게) {
//         this.다리 = 다리;
//         this.뇌무게 = 뇌무게;
//     }

//     walk() {
//         console.log('네 발로 걷기');
//     }
// }

// // For instance = For example = Such as 
// const Human = new Animal(4, 150); // Instance를 하나 생성한다
// console.log(Human);

// 상속하겠다
// class aaa extends Animal {
//     walk() {
//         console.log("두 발로 걷기")
//     }
// } 

// let person = new Human();
// person.walk();
// prototype
// aaa.prototype.walk = function ()  { console.log('Hello')}

let arr = [1, 2, 3, 4, 5];

let result = arr.map(function(value, index, originalArray) {
    return value * value;
});
// // map은 리턴할 때 새로운 배열을 리턴한다
console.log(arr);
console.log(result);

// 인자로 함수를 줄거야
Array.prototype.jsj_map = function(callback) {
    const resultArray = [];

    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }

    // 1 4 9 16 25
    return resultArray;
} 

// let result = test.jsj_map((value) => {
//     return value * value
// });
// console.log(result);

// 콜백함수의 리턴값을 담고있는 새로운 배열을 리턴하다
// true or false 를 출력하는 콜백의 조건에만 자동화 할 수 있다
// filter
// let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = test.filter(function(value) {
//     return value !== 4;
// })

// Array.prototype.jsj_filter = function(callback) {
//     const filteredArray = [];

//     for (let index = 0; index < this.length; index++) {
//         if (callback(this[index], index, this)) {
//             filteredArray.push(this[index]);
//         }
//     }

//     return filteredArray.length > 0 ? filteredArray : undefined;
// } 

// let test_result = test.jsj_filter((value) => value > 15);
// console.log(test_result);

// let a = [
//     <h1>Hello</h1>,
//     <h2>World</h2>,
//     <h1>Hello</h1>,
//     <h2>World</h2>    <h1>Hello</h1>,
//     <h2>World</h2>    <h1>Hello</h1>,
//     <h2>World</h2>    <h1>Hello</h1>,
//     <h2>World</h2>    <h1>Hello</h1>,
//     <h2>World</h2>    <h1>Hello</h1>,
//     <h2>World</h2>    <h1>Hello</h1>,
//     <h2>World</h2>
// ]
// element 요소
{/* <div>
    {a.map(el => el)}
</div> */}