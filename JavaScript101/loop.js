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



// console.time('test')
// let arr = [
//     { property1: 'Hello', property2: 'World'},
//     { property1: 'Hello', property2: 'World'},
//     { property1: 'Hello', property2: 'World'},
//     { property1: 'Hello', property2: 'World'},
//     { property1: 'Hello', property2: 'World'},
//     { property1: 'Hello', property2: 'World'},
// ]

// arr.forEach(function(value, index, arr) {
//     console.log('arr', arr);
//     console.log('value', value);
//     console.log('index', index);
// })

// for (let i = 0; i < arr.length; i++) {
//     console.log('element', i , arr[i]);
//     console.log(arr[i].property1 + arr[i].property2);
// }


// console.timeEnd('test')

function Person() {
    this.eyes = 2;
    this.nose = 1;
}

let kim = new Person();
let park = new Person();

console.log(kim.eyes);  // => 2
console.log(kim.nose);  // => 1
console.log(park.eyes); // => 2
console.log(park.nose); // => 1
// 위와 같이 100개를 작성하면 --> 200개의 변수가 eyes and nose에 사용된다
// 이 방법 대신에 모든 Person 이라는 함수를 사용해 인스턴스를 만드는 경우 공통적으로 기지고 있도록 할때
// 프로토타입을 사용한다
Person.prototype.eyes = 2;
Person.prototype.nose = 1;


// Prototype Object
// 객체는 언제나 함수(Function)로 생성된다
function Person() {}

let personObject = new Person(); // 함수로 객체를 생성

// 아래 object 정의도 내부적으로 함수로 시작된다
let obj = {}
let obj2 = new Object();

// 위와 마찬가지로 Function, Array도 모두 함수로 정의되어있다.
// 해당 함수에 constructor(생성자) 자격을 부여한다
// constructor 자격이 부여되면 new를 통해 객체를 만들어 낼 수 있게 된다.
// 이것이 함수만 new 키워드를 사용할 수 있는 이유다
https://miro.medium.com/max/875/1*PZe_YnLftVZwT1dNs1Iu0A.png




























