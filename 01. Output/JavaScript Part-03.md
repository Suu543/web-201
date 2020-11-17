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





















