// let arr = [...Array(1000).keys()];

// console.time('test');

// for (let value of arr) {

// }

// console.timeEnd('test');

const foodArray = [
    { name: 'Burrito', ingredients: ['onion', 'tomato', 'cheese']},
    { name: 'Pizza', ingredients: ['onion', 'tomato', 'cheese'] },
    { name: 'Burger', ingredients: ['onion', 'tomato', 'cheese'] },
    { name: 'Pasta', ingredients: ['onion', 'tomato', 'cheese'] }
];

// for (let i = 0; i < foodArray.length; i++) {
//     console.log(`i value: ${i} | Food Name: `, foodArray[i]);
// }

// 위 코드를 forEach를 이용해 구현해보자
// (value, index, array)

// foodArray.forEach((food, index) => {
//     console.log(`i value: ${index} | Food Name: `, food);
// })

// forEach는 변수의 범위를 block 단위로 유지한다
// const num = 4;
// const arr = [0, 1, 2];

// arr.forEach(num => {
//     console.log(num);
// });

// console.log(num);

// // forEach가 더 읽기 쉽다
// for (let i = 0; i < foodArray.length; i++) {
//     let food = foodArray[i];
//     console.log(food);

//     for (let j = 0; j < food.ingredients.length; j++) {
//         let ingredient = food.ingredients[j];
//         console.log(ingredient);
//     }
// };

// foodArray.forEach(food => {
//     console.log(food);
//     food.ingredients.forEach(ingredient => {
//         console.log(ingredient);
//     });
// });

// Array.prototype.mymap = function(callback) {
//     for (let index = 0; index < this.length; index++) {
//         // 1. The current element
//         // 2. Current Element's index
//         // 3. Entire Array
//         callback(this[index], index, this);
//     }
// }

// Array.prototype.mymap = function(callback) {
//     const resultArray = [];

//     for (let index = 0; index < this.length; index++) {
//         resultArray.push(callback(this[index], index, this));
//     }

//     return resultArray;
// }

// const sample = [1, 2, 3];
// let output = sample.mymap((val, index, array) => {
//     console.log('val: ', val, 'index: ', index, 'array: ', array);
//     return val*2;
// })

// console.log(output);

// Array.prototype.myFilter = function(callback) {
//     const filteredArr = [];

//     for (let index = 0; index < this.length; index++) {
//         if (callback(this[index], index, this)) {
//             filteredArr.push(this[index]);
//         }
//     }

//     return filteredArr;
// }

// const filterNames = names.myFilter(name => name !== 'Zakir');
// console.log(filterNames)

const names = ['Zakir', 'Rashid', 'Harish'];
Array.prototype.myReduce = function (callback, accumulator) {
    if (this.length < 1) {
        throw new Error("Array is Empty");
    }

    if(!accumulator) {
        if (typeof this[0] === 'string') {
            accumulator = '';
        } else if (typeof this[0] === 'number') {
            accumulator = 0;
        }
    }

    for (let index = 0; index < this.length; index++) {
        accumulator = callback(accumulator, this[index]);
    }

    return accumulator;
}

const statement = names.myReduce((acc, element) => acc + element);
console.log(statement);

const numbers = [1, 2, 3, 4, 5];
const numbersResult = numbers.myReduce((acc, element) => acc + element);
console.log(numbersResult);