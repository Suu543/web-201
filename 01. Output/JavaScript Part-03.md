 # JavaScript Strings

```javascript
var singleQuote = 'Hello World';
var doubleQuote = "Hello World";

var both = "Hello's World";
```

`singleQuote` and `doubleQuote`를 동시에 사용하지 않고 하나의 `Quote` 방식으로 `어퍼스트로피(Apostrophe)`를 출력하는 방법은 없을까?

이런게 있구나 하고 넘어가면 된다.

| Code | Result | Description  |
| :--- | :----- | :----------- |
| \'   | '      | Single quote |
| \"   | "      | Double quote |
| \\   | \      | Backslash    |

```javascript
var x = 'It\'s such a beautiful night';

var x = "The character \\ is called backslash.";
```

| Code | Result               |
| :--- | :------------------- |
| \b   | Backspace            |
| \f   | Form Feed            |
| \n   | New Line             |
| \r   | Carriage Return      |
| \t   | Horizontal Tabulator |
| \v   | Vertical Tabulator   |

#### 1. String Length

```javascript
var txt = 'Hello World This is beautiful';
var txtLength = txt.length;
```

#### 2. String Object

```javascript
var x = "Hello"; // typeof x --> string
var y = new String("Hello"); // typeof y --> y
x == y // true 값은 동일하기 때문이다
x === y // false 값은 동일하지만 자료형이 다르다
```

`y`와 같이 `string`을 생성하면, 실행속도가 느려지기 때문에 `y` 처럼 `string`을 선언하지 않는 것이 좋다.

#### 3. String Index

`indexOf`라는 함수를 사용하면 이 함수의 인자로 받은 text가 처음으로 발생하는 위치를 리턴해준다.

한 string의 첫번째 글자는 0번이다.

```javascript
var str = "This is a sentence used for test";
var used = str.indexOf("used"); // 19
var T = str.indexOf("T"); // 0
var t = str.indexOf("t"); // 13
str[0]; // T
str[1]; // h
```

#### 4. String Slice

`slice`라는 함수는 두 개의 인자를 받는다. (start position, end position (마지막은 포함되지 않는다)).

(7, 13) --> 실제 출력 결과는 (7, 12)

- 만약 두번째 인자를 제공하지 않는다면 자르려는 `string`의 시작점 부터 끝까지 자른다. 

```javascript
var str = "Apple, Banana, Apple";
var banana = str.slice(7, 13);  // Banana

// 만약 `slice` 함수에 양수 대신 음수를 주면 거꾸로 세주면된다.
var bananaReversed = str.slice(-12, -6); // Banana

var startBanana = str.slice(7); // Banana, Kiwi
```

`slice` 함수와 동일한 기능을 하는 `substring` 함수가 존재하는데 이 함수는 `slice`와 달리 음수의 값을 인자로 받지 않는다.

```javascript
var str = "Apple, Banana, Apple";
var subStringBanana = str.substring(7, 13);

// 이때 시작점만 인자로 주고 두번째 인자에는 시작점 기준으로 자르고 싶은 글자의 길이를 제공하는 함수도 존재한다. substr
// 7번째 글자에서 시작 총 6글자
var subStrBanana = str.substr(7, 6); // Banana
```

#### 5. String Replace

`replace` 함수는 처음으로 일치하는 글자를 대체한다. (대소문자는 엄격히 구분해야한다)

```javascript
var str = "Hello World I am from KOREA";
var usa = str.replace("KOREA", "USA"); // Hello World I am from USA
```

만약 대소문자를 무시하고 싶은 경우 `정규 표현식(regular expression)`을 사용할 수 있다. `/i = insensitive`

```javascript
var str = "Hello World I am from KOREA";
var n = str.replace(/korea/i, "USA");
```

#### 6. String Upper and Lower Case

`String`을 대문자로: `toUpperCase()`

`String`을 소문자로: `toLowerCase()`

```javascript
var txt = "hello world";
var upperTxt = txt.toUpperCase(); // HELLO WORLD
var lowerCase = upperTxt.toLowerCase();
```

#### 7. String Concat

서로 다른 `string`을 특정 문자와 함께 합치고 싶을때, `concat` 함수를 사용할 수 있다.

```javascript
var txt1 = 'Hello';
var txt2 = 'World!';
var txt3 = txt1.concat(" ", txt2);

// concat 함수는 아래와 동일하다 생각할 수 있다.
var text = "Hello" + " " + "World!"
```

 ####  8. String Trim

`string`의 양쪽 여백(whitespace)을 제거하는 역할을 한다.

```javascript
var str ="             Hello World!           ";
console.log(str.trim()); // Hello World!
```

#### 9. String Extraction

`string`을 구성하는 특정 문자의 위치를 찾는데 사용하는 함수이다.

1. `charAt`
2. `charCodeAt` - Unicode 방식으로 변환해 리턴해준다.
3. `[ ]`

```javascript
var str = "Hello World";
str.charAt(0); // H
str.charCodeAt(0); // 72
str[0]; // H
```

#### 10. String to Array

`string`을 특정 문자를 기준으로 쪼개서 그것을 순서대로 `array`에 담아준다.

```javascript
var txt = "a,b,c,d,e";
// 콤마를 기준으로 string을 쪼개서 그것을 순서대로 배열에 담는다.
txt.split(","); // ["a", "b", "c", "d", "e"];
txt.split(" "); // ["a,b,c,d,e"];
txt.split("|"); // ["a,b,c,d,e"];
// 이 경우 string 전체를 쪼개서 리턴한다
txt.split(""); // ["a", ",", "b", ",", "c", ",", "d", "," , "e"];
```



# JavaScript Number

#### 1. Number to String

`toString` 함수는 숫자를 문자로 리턴한다.

```javascript
var x = 123;
x.toString(); // 123
(123).toString(); // 123
(100 + 23).toString(); // 123
```

#### 2. Number toFixed

`toFixed` 함수는 반올림을 해주고, 소숫점 몇 번째 자리까지  반올림 할지를 첫번째 인자값으로 받는다.

```javascript
var x = 9.656;
x.toFixed(0); // 10
x.toFixed(2); // 9.66
x.toFixed(4); // 9.6560
```

#### 3. String to number

`parseInt`함수는 문자를 숫자로 변환해주는 역할을 한다.

```javascript
parseInt("10"); // 10
parseInt("10.33"); // 10
parseInt("10 20 30"); // 10
parseInt("years"); // NaN (Not a Number);
parseInt("10 years 20"); // 10 (첫 번째 숫자만 중간에 문자 혹은 공백을 만나면 더 이상 변환 하지 않느다)
```

## Number Properties

| Property          | Description                                         |
| :---------------- | :-------------------------------------------------- |
| MAX_VALUE         | Returns the largest number possible in JavaScript   |
| MIN_VALUE         | Returns the smallest number possible in JavaScript  |
| POSITIVE_INFINITY | Represents infinity (returned on overflow)          |
| NEGATIVE_INFINITY | Represents negative infinity (returned on overflow) |
| NaN               | Represents a "Not-a-Number" value                   |

```javascript
var max = Number.MAX_VALUE;
var min = Number.MIN_VALUE;
var positive_infinite = Number.POSITIVE_INFINITY;
var negative_infinite = Number.NEGATIVE_INFINITY;
var not_a_number = Number.NaN;

var x = 100 / "Hello"; // NaN
```



# JavaScript Arrays

`array`는 key가 필요없고 공통된 특성을 가진 값들을 저장하는 방식이다. 예를 들면, `car`이라는 `array`가 있고 다수의 자동차 이름을 저장하고 싶은 경우 아래와 같이 정의할 수 있다.

```javascript
var car = ["Hyundai", 'KIA', "Benz", "BMW"];
```

위 car라는 변수에 저장된 `array`의 값은 공통적으로 자동차이다. 그러므로 따로 별도의 key가 필요없기 때문에 위와 같이 값만을 `, comma`로 구분해 나열하는 방식으로 위와 같이 작성할 수 있다.

이후에 배울 반복분 부분에서 배울 내용이지만 간단히 알아보자면 car라는 변수에 저장된 `array` 에 수백개의 자동차 이름의 값이 있고 이것을 한 번에 출력하고 싶은 경우를 생각해보면 `array`가 없을때는 아래와 같이 300번 반복해야하지만 `array`를 이용하면 아래와 같이 짧은 코드로 모든 값을 출력할 수 있다.

```javascript
// 배열이 없을때
var car1 = "a", car2 = "b" ..... car300 = "aa";
console.log(car1) 
.
.
.
console.log(car300)

// 배열이 있을때
var car = ["...300개"]
for(var i = 0; i < car.length; i++) {
    console.log(i);
}
```

## 배열의 요소에 접근하기

`array`는 0번 부터 시작한다.

```javascript
var cars = ["a", "b", "c"];
console.log(cars[0]); // 배열의 첫번째 요소
console.log(cars[1]); // 배열의 두번째 요소
```



## 정의한 배열의 특정 요소의 값을 변경하고 싶을때

```javascript
var cars = ["a", "b", "c"];
cars[0] = "Hello";

console.log(cars); // ["Hello", "b", "c"]
```



## 배열은 다양한 자료형을 값으로 받을 수 있다

`array`의 자료형은 `object`이다.

```javascript
var person = ["Hello", 43, { firstName: "Hello"}]
```



## 기존 배열에 값을 추가하는 방법

1. 기존 배열의 제일 끝에 값을 추가하는 방법

`push` 함수를 사용할 수 있다.

```javascript
var alphabet = ["a", "b", "c", "d"];
alphabet.push("e"); 
console.log(alphabet); // ["a","b","c","d","e"]

// 현재 alphabet 배열의 길이는 5이다, index의 경우 끝 index는 4이다. 만약 끝 index 보다 더 큰 index 값에 값을 추가한다면 그 중간은 undefined이 할당된다.
alphabet[6] = "f";
console.log(alphabet); // ["a", "b", "c", "d", "e", undefined, "f"];
```



# Array vs Object

`array`의 자료형은 `object`이다. 그렇다면 `object`와 `array`는 어떤 차이가 있을까?

`array`는 숫자로(index)로 요소에 접근한다.

`object`는 이름(key or name)로 요소에 접근한다.



## 해당 변수가 array인지 확인하는 방법

```javascript
var fruits = ["a", "b", "c"];
var x = "Hello"

// 첫번째 방법
Array.isArray(fruits); // true
Array.isArray(x); // false

// 두번째 방법
fruits instanceof Array; // true
```



# JavaScript Array Methods

`join` method 또한 array에 아래와 같이 사용될 수 있다.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * ")); // Banana * Orange * Apple * Mango
```

#### 1. 배열의 마지막 요소를 제거하고 싶은 경우 - pop

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits); // ["Banana", "Orange", "Apple"];
```

#### 2. 배열의 마지막 위치에 요소를 추가하고 싶은 경우 - push

`push` method의 경우 요소를 추가하고 변화된 배열의 길이를 리턴한다.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
```

#### 3. 배열의 첫번째 위치의 요소를 제거하고 싶은 경우 - shift

`shift` method의 경우 제거한 첫번째 요소를 리턴한다.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits); // ["Orange", "Apple", "Mango"]
```

#### 4. 배열의 첫번째 위치에 요소를 추가하고 싶은 경우 - unshift

````javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Kiwi");
console.log(fruits); // ["Kiwi", "Banana" , Orange", "Apple", "Mango"]
````

#### 5. 이미 배열에 할당된 요소의 값을 변화시키고 싶은 경우

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";   
console.log(fruits); // ["kiwi", "Orange", "Apple", "Mango"]
```

#### 6. 배열의 요소를 인덱스 값으로 제거하고 싶은 경우 - delete

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log(fruits); // ["Orange", "Apple", "Mango"]
```

`pop` and `unshift`와의 차이점은 `delete`로 제거한 요소는 `undefined`으로 채워진다. 다시 말해서 배열의 본래 길이 자체에는 변화가 없다. 다만 그 자리를 `undefined`으로 채운다.

#### 7. 다수의 요소를 배열의 특정 위치에 추가하고 싶은 경우 - splice

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
```

1. `splice` method의 첫번째 숫자 2의 경우 어느 `index`에 요소를 추가할 것인가를 의미한다.
2. `splice` method의 두번째 숫자는 추가하는 과정에서 몇 개의 요소를 삭제할 것인가를 의미한다.
3. `splice` method의 세번째 ~ 나오는 인자는 순서대로 첫번째 인자로 준 `index`이후에 추가된다.

#### 8. 다수의 요소를 배열의 특정 위치에 추가하면서 추가하는 위치의 기존의 요소를 제거하고 싶은 경우 - splice

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi"); // ["Apple", "Mango"]
```

1. `splice` method의 첫번째 숫자 2의 경우 어느 `index`에 요소를 추가할 것인가를 의미한다.
2. `splice` method의 두번째 숫자 2의 경우  세번째 ~ 나오는 값을 추가하기 전 `index` 의 기존 요소를 몇 개를 제거할 것인가를 의미한다.
3. `splice` method의 세번째 ~ 나오는 인자는 순서대로 첫번째 인자로 준 `index`이후에 추가된다.

#### 9. 다수의 요소의 추가없이 제거만 하고 싶은 경우에도 - splice

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // Orange,Apple,Mango
```

첫번째 `index 0` 을 포함한 몇 개의 요소를 삭제할 것인가를 두번째 인자에 할당한다.

위 예시는 `index 0` 을 포함해 총 1개의 요소를 삭제하는 코드다

#### 10. 두 개의 배열을 병합하고 싶은 경우 - concat

```javascript
var abc = ["a", "b", "c"];
var def = ["d", "e", "f"];
var abcdef = abc.concat(def);
console.log(abcdef); // ["a", "b", "c", "d", "e", "f"]
```

#### 11. 두 개 이상의 배열의 병합하고 싶은 경우 - concat

```javascript
var abc = ["a", "b", "c"];
var def = ["d", "e", "f"];
var ghi = ["g", "h", "i"];
var jkl = ["j", "k", "l"];
var abcdefghi = abc.concat(def, ghi, jkl);
console.log(abcdefghi); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
```

#### 12. 인자(start, end)를 기준으로 배열의 값을 추출할 때 본래의 배열의 값 손상 없이 새로운 배열을 만드는 경우 - slice

```;javascript
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(fruits); // ["Banana", "Orange", "Lemon", "Apple", "Mango"]
console.log(citrus); // ["Orange", "Lemon"]
```

`slice(start, end)` , 단 `end` 인덱스는 포함하지 않는다.

#### 13. 인자(start) 값만을 slice method에 준 경우

```javascript
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var noBanana = fruits.slice(1);
console.log(noBanana); // ["Orange", "Lemon", "Apple", "Mango"]
```

`slice(start)` 인 경우 start 부터 해당 배열의 끝까지 자른다.



# Sorting an Array

1. 알파벳 순으로 배열 정렬하기 - `sort`

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Apple, Banana, Mango, Orange
```

2. 배열 순서 역순으로 정렬하기 - `reverse`

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Apple, Banana, Mango, Orange
fruits.reverse(); // Orange,Mango,Banana,Apple
```

3. 배열 내부의 요소가 숫자일 때 오름차순 정렬

```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return a - b });
// 1, 5, 10, 25, 40, 100
// 최대값 찾기
points[0]
// 최소값 찾기
points[points.length - 1]
```

4. 배열 내부의 요소가 숫자일 때 내림차순 정렬

```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return b - a });
// 100, 40, 25, 10, 5, 1
// 최대값 찾기
points[points.length - 1]
// 최소값 찾기
points[0]
```

### Compare Function

`compare function`의 목적은 대안의 정렬 순서를 정의하기 위함이다. 

`compare function`은 `negative, zero, or positive value`를 리턴해준다.

```javascript
function(a, b) { return a - b}
```

`sort`함수는 두 개의 값을 비교하고 `compare function`에 값을 전달한다. 그리고 전달 받은 값이 `negative, zero, or positive`인지에 따라 정렬 방식을 결정한다.

`a` and `b` 두개의 숫자가 있다고 생각해보자.

1. 만약 리턴 결과가 `음수`라면 `a`는 `b` 전으로 정렬된다.
2. 만약 리턴 결과가 `양수`라면 `b`는 `a` 전으로 정렬된다.

3. 만약 리턴 결과가 `0`이라면 어떠한 변화도 발생하지 않는다.

```javascript
(a, b)
(40, 100)

1. 40 < 100 --> 40, 100
(a - b) = -60
```



## 무작위로 정렬하는 방법

```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return 0.5 - Math.random() });
```



## The Fisher Yates Method

`array.sort()` 함수를 이용한 무작위 정렬은 완전한 무작위가 아닐 수 있다. 완전한 무작위를 구현하려면 1938년도에 데이터 사이언스 분야에서 나온 `The Fisher Yates Method`를 사용할 수 있다.

```javascript
var points = [40, 100, 1, 5, 25, 10];

for (i = points.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = points[i];
    points[i] = points[j];
    points[j] = k;
}
```



#### Math.max() and Math.min()

배열의 최대값과 최소값을 찾는 또다른 방식이 존재한다.

```javascript
Math.max.apply(null, [1, 2, 3]);
Math.max(1, 2, 3);

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

Math.min.apply(null, [1, 2, 3]);
Math.min(1, 2, 3);

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}
```



### Min, Max 값을 찾는 가장 빠른 해결책은 다음과 같이 직접 구현할 수 있다.

```javascript
function myArrayMax(arr) {
    var len = arr.length;
    var max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    
    return max;
}


function myArrayMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    
    return min;
}
```



## Sorting Object Arrays

```javascript
var cars = [
    { type: "HYUNDAI", year: 2016 },
    { type: "KIA", year: 2001 },
    { type: "SAMSUNG", year: 2010}
];

cars.sort(function(a, b) { return a.year - b.year});

// type값 정렬
cars.sort(function(a, b) {
    var x = a.type.toLowerCase();
    var y = a.type.toLowerCase();
    if (x < y) { return - 1;}
    if (x > y) { return 1;}
    return 0;
});
```





















