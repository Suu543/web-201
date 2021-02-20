// let obj = {
//     a: '가',
//     b: '나',
//     c: '다',
//     d: '라'
// }

// for (let key in obj) {
//     console.log('Key', key, 'Value', obj[key]);
// }

// let iterable = [10, 20, 30]

// for (let value of iterable) {
//     console.log(value);
// }



console.time('test')
let arr = [
    { property1: 'Hello', property2: 'World'},
    { property1: 'Hello', property2: 'World'},
    { property1: 'Hello', property2: 'World'},
    { property1: 'Hello', property2: 'World'},
    { property1: 'Hello', property2: 'World'},
    { property1: 'Hello', property2: 'World'},
]

// arr.forEach(function(value, index, arr) {
//     console.log('arr', arr);
//     console.log('value', value);
//     console.log('index', index);
// })

for (let i = 0; i < arr.length; i++) {
    console.log('element', i , arr[i]);
    console.log(arr[i].property1 + arr[i].property2);
}


console.timeEnd('test')