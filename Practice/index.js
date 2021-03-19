// // // for
// // let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // for (let i = 0; i < a.length; i++) {
// //     console.log(a[i]);
// // }
// // // for in
// // let obj = {
// //     a: '가',
// //     b: '나',
// //     c: '다'
// // }
// // for (let key in obj) {
// //     console.log(obj[key]);
// // }
// // // for of - Symbol, Array
// // let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // for (let value of b) {
// //     console.log(value);
// // }
// // // forEach
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // arr.forEach(function(value, index, originalArray) {
// //     console.log(value);
// //     console.log(index);
// //     console.log(originalArray);
// // });

// // const foodArray = [
// //     { name: 'Burrito', ingredients: ['onion', 'tomato', 'cheese']},
// //     { name: 'Pizza', ingredients: ['onion', 'tomato', 'cheese'] },
// //     { name: 'Burger', ingredients: ['onion', 'tomato', 'cheese'] },
// //     { name: 'Pasta', ingredients: ['onion', 'tomato', 'cheese'] }
// // ];

// // for (let i = 0; i < foodArray.length; i++) {
// //     let ingredients = foodArray[i]["ingredients"];

// //     for (let j = 0; j < ingredients.length; j++) {
// //         console.log(ingredients[j]);
// //     }
// // }

// // foodArray.forEach((food) => {
// //     food.ingredients.forEach((ingredient) => {
// //         console.log(ingredient);
// //     });
// // });

// // foodArray.forEach(function(food) {
// //     food.ingredients.forEach(function(ingredient) {
// //         console.log(ingredient);
// //     });
// // });

// // // map
// let a = [1, 2, 3, 4, 5];
// let b = a.map(function(value, index, originalArray) {
//     return value + 1;
// });

// // console.log(a);
// // console.log(b);

Array.prototype.용수_map = function (callback) {
    let resultArray = [];

    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }

    return resultArray;
}

// // let test = [1, 2, 3, 4, 5];
// let bb = test.용수_map((value, index, array) => value + 1);
// // // reduce
// // // filter
// // // some
// // // every

// let Horray = {
//     map: function () {
//        console.log("Hello"); 
//     } 
// }

// a = [태그1, 태그2, 태그3, 태그4, 태그5]
// 태그1 = {
//     color: 'red';
// }

// for (let i = 0; i < a.length; i++) {
//     if (a[i].color == "red") {
//         a[i].color = "blue"
//     }
// }

// b = [태그1, 태그2, 태그3, 태그4, 태그5]



// Horray.map();


// distance가 9999 < x < 40000
// 100000 미만의 거리는 모두 A 등급이고, 
// 100000 부터 20만 전까니는 B등급으로 변경해줘
let destinations = [   
    {name: "a",  distance: 10000, rank: "A"},
    {name: "b",  distance: 20000, rank: "A"},
    {name: "c",  distance: 30000, rank: "A"},
    {name: "d",  distance: 40000, rank: "B"},
    {name: "e",  distance: 50000, rank: "B"},
    {name: "f",  distance: 60000, rank: "B"},
    {name: "g",  distance: 70000, rank: "C"},
    {name: "h",  distance: 80000, rank: "C"},
    {name: "i",  distance: 90000, rank: "C"},
    {name: "j",  distance: 100000, rank: "D"} 
]


let result = destinations.filter((dest) => dest.distance > 50000);
console.log(result);

Array.prototype.용수_filter = function (callback) {
    let resultArray = [];

    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            resultArray.push(this[index]);
        }
    }

    return resultArray;
}