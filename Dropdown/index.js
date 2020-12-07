// forEach - 한 개씩 돌면서 무엇인가 하기
let firstArr = ["a", "b", "c"];

firstArr.forEach(function(x) {
    console.log(x);
})

firstArr.forEach((x) => {
    console.log(x);
})


// filter - 특정 조건에 맞는 것만 담아 새로운 배열만들어 리턴하기
let secondArr = [1, 2, 3, 4, 5];

let filterSecondArr = secondArr.filter(function(x) {
    return x % 2 == 0;
})

console.log("filterSecondArr", filterSecondArr);

let filterSecondArrArrow = secondArr.filter((x) => {
    return x % 2 == 0;
})

console.log("filterSecondArrArrow", filterSecondArrArrow);

let filterSecondArrArrowNoReturn = secondArr.filter(x => x % 2 == 0);

console.log("filterSecondArrArrowNoReturn", filterSecondArrArrowNoReturn);

// filter + forEach - 조건에 맞는 배열로 만들고, 한 개씩 돌면서 무엇인가 처리하기
let thirdArr = [1, 2, 3, 4, 5];

thirdArr
    .filter(function(x) { return x % 2 == 0; })
    .forEach(function(y) { console.log("filter + forEach", y)});

thirdArr
    .filter((x) => { return x % 2 == 0; })
    .forEach((y) => { console.log("filter + forEach", y)});

thirdArr
    .filter((x) => x % 2 == 0)
    .forEach((y) => console.log("filter + forEach", y));

// map - 배열의 각 요소가 변환된 값을 가진 새 배열을 반환한다
let fourthArr = [1, 2, 3, 4, 5];

let fourthResult1 = fourthArr.map(function(x) { return x + 2; });
console.log("fourthResult1", fourthResult1);

let fourthResult2 = fourthArr.map((x) => { return x + 2 });
console.log("fourthResult2", fourthResult2);

let fourthResult3 = fourthArr.map(x => x + 2);
console.log("fourthResult3", fourthResult3);

// map + forEach - 배열의 각 요소가 변환된 값을 가진 새 배열을 반환하고, 이 새 배열을 가지고 무슨 짓 하기
let fifthArr = [1, 2, 3, 4, 5];

fifthArr.map(function(x) { 
    return x + 2; 
}).forEach(function(y) {
     console.log("fifthArrFirst", y); 
});

fifthArr.map((x) => { 
    return x + 2
}).forEach((y) => { 
    console.log("fifthArrSecond", y)
});

fifthArr.map(x => x + 2).forEach(y => console.log("fifthArrThird", y));

// filter + map + forEach - 배열에서 원 하는 요소만 뽑아 새 배열을 반환, 그 후 새 배열의 요소를 이용해 연산 후 그 결과를 모은 새 배열 리턴, 그리고 이 새로운 배열을 이용해 무슨 짓하기
let sixthArr = [1, 2, 3, 4, 5];

sixthArr.filter(function(x) { 
    return x % 2 == 0;
}).map(function(y) {
    return y + 2;
}).forEach(function(z) {
    console.log('sixthArrFirst', z);
})

sixthArr.filter((x) => {
    return x % 2 == 0;
}).map((y) => {
    return y + 2;
}).forEach((z) => {
    console.log('sixthArrSecond', z);
})

sixthArr.filter((x) => x % 2 == 0).map(y => y + 2).forEach(z => console.log('sixthArrThird', z));

// reduce
/*
- forEach, filter, map 과 같이 reduce도 내부에서 함수를 1개 받는다, 단 parameter에 여러 정보가 들어온다.
- reduce의 함수는 4 개의 파라미터를 받는다 (ac, current, index, array)
    - acc(accumulator): reduce 호출할 때 넘긴 함수의 결과를 보관한다. 최초 호출시 reduce를 호출할 때 두번째 넘긴 파라미터 값
    - current: 배열의 0 번 부터 배열의 마지막까지 순차적으로 전달
    - index: 현재 배열이 몇번째 loop를 도는지 알려주는 값
    - array: reduce 함수를 호출한 배열
    - 이 4 개의 파라미터를 이용하면 filter, map, forEach를 모두 구현할 수 있다.
*/
let reduceArr = [1, 2, 3, 4, 5];

reduceArr.reduce(function(acc, current, index, array) {
    console.log('1. acc', acc);
    console.log('1. current', current);
    console.log('1. index', index);
    console.log('1. array', array);
    acc = acc + current;
    return acc;
}, 0);

reduceArr.reduce((acc, current, index, array) => {
    console.log('2. acc', acc);
    console.log('2. current', current);
    console.log('2. index', index);
    console.log('2. array', array);
    acc = acc + current;
    return acc;
}, 0);

reduceArr.reduce((acc, current, index, array) => acc = acc + current, 0);

// reduce - string 배열 순환하면서 한개의 string으로 합치기
[ "안녕", "하세요" ].reduce(
    function ( ac, current, index, array ) {
          // 최초 호출될때, ac는 reduce의 두번째 파라미터인 아래에서 넘긴 "" 값을 가지고, current는 배열의 0 번째 "안녕"의 값이 들어 있을 것이다.
          // 그러므로 최초 호출 될 때는 return 값이 "" + "안녕" 이므로, "안녕"이 return 될 것이다.
          // 두번째 호출 될 때는 ac는 첫번째 호출 되었을때, return한 값인 "안녕" 값을 가지고, current는 배열의 1번째 "하세요"가 들어 있을 것이다.
          // 그리고 두번째 호출 될 때는 return 값이 "안녕"+"하세요"가 될 것이다.
          // 더 이상 돌 item이 없으므로, 결과적으로 해당 함수의 return 값은 "안녕하세요"가 될 것이다.
        return ac + current; 
    }
, "" ) // reduce 함수의 두번째 파라미터인 "" 은, 위 익명 함수의 ac에 최초 할당 된다.

let reduceStr = ["안", "녕", "하", "세", "요"];

let result = reduceStr.reduce(function(acc, current, index, array) {
    console.log('acc', acc);
    console.log('current', current);
    console.log('index', index);
    console.log('array', array);
    acc = acc + current;
    return acc;
}, "");

console.log('result', result);

// 응? reduce 대신 forEach만 써도 되는거 아닌가?
// forEach 버전
let sumStr = "";
reduceStr.forEach(function(x) {
    sumStr += x;
});

console.log('forEachVer', sumStr);

let forEachReduce = reduceStr.reduce(function(acc, current, index, array) {
    return acc + current;
}, "")

console.log('forEachReduce', forEachReduce);

// reduce - 배열에서 string type만 Set으로 만들기
// https://blog.ggaman.com/1012
