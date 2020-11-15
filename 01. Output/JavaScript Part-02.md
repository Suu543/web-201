# JavaScript Data Types

`JavaScript`에는 크게 세 종류의 자료형이 존재한다.

1. Number
2. String
3. Object

```javascript
var num = 16; // Number
var str = "I am String"; // String
var obj = { firstName: "Yongsu", lastName: "Jeong"}; // Object
```

프로그래밍에서 자료형은 정말 중요한 개념이다. 변수를 잘 활용하기 위해서는 반드시 자료형의 개념을 잘 이해하고 있어야한다.  자료형에 대한 이해없이 프로그램을 만들수는 있지만 안전하고 예측가능한 프로그램을 만들기는 힘들다.

```javascript
var x = 16 + "KIA";
```

위와 코드 처럼 연산은 가능하다. 하지만 숫자 16에 브랜드 KIA를 더하는 것이 말이 될까? 결과는 `16KIA`로 출력되지만 의도한 16은 문자로 간주 될 것이기 때문에 아래와 같이 작성해야 예측 가능하다.

```javascript
var x = "16" + "KIA";
```



# JavaScript Types are Dynamic 

`JavaScript`의 자료형은 `동적인 자료형이다 (Dynamic Typing)`. 이것의 의미는 하나의 변수가 다양한 자료형의 데이터를 포함할 수 있다는 의미이다.

```javascript
var x; // x는 undefined
x = 5; // x는 숫자
x = "Hello"; // x는 문자
```



# JavaScript Strings

만약 문자에 쌍따옴표를 포함하고 싶다고 생각해보자. 이러한 경우 아래와 같이 코드를 작성할 수 있다.

```javascript
var greetings = 'Hello "Yongsu Jeong" Welcome';

var greetings = "It's alright";
```



# JavaScript Booleans

```javascript
var x = 5;
var y = 5;
var z = 7;
(x == y) // true
(x == z) // false
```



# JavaScript Arrays

`JavaScript`에서 `배열 array` 은 `[ ] (square bracket)`을 이용해 작성할 수 있다. 배열은 `, comma`를 이용해 항목을 분리한다.  `fruits` 이라는 변수는 배열의 자료형을 가지고, 세 개의 항목을 가지고 있다.

```javascript
var fruits = ['apple', 'orange', 'kiwi'];
```



# JavaScript Objects

`JavaScript`에서 `객체 object`는 `key: value` 로 한 항목을 구성하고, 배열과 유사하게 `, comma`로 구분한다. 

```javascript
var person = {
    firstName: "Yongsu",
    lastName: "Jenong",
    age: 24
};
```



특정한 변수 혹은 값이 어떤 자료형을 가지고 있는지 확인하고 싶을때 `typeof` 함수를 사용할 수 있다.

```javascript
typeof "" // string
typeof "Yongsu" // string
typeof 4 // number
typeof (3) // number
typeof (3 + 5) // number
```



# Undefined

`JavaScript`에서 변수에 어떤 값도 할당하지 않으면 `undefined`을 값으로 가진다. 이것의 자료형은 `undefined`이다.

```javascript
var car;
typeof car; // undefined

car = undefined;
typeof car; // undefined
```



# Empty Values

```javascript
var name = "";
typeof name; // string
```



# Null

`JavaScript`에는 `null`이라는 값이 존재한다. 이것은 `nothing` 을 의미한다. 다시 말해서 존재하지 않는 어떤 것이라 생각할 수 있다. 하지만 `JavaScript`에서는 이상하게도 `null`의 자료형을 `object`로 간주한다. 이것은 하나의 버그로 생각해도된다. 왜냐하면 `typeof null`은 `null`이 나와야 정상이기 때문이다.



`null`은 아래와 같이 `object`값을 비우는데 사용할 수 있다. (버그를 역이용한 경우) 물론 `undefined`을 사용해도된다.

```javascript
var person = {
    firstName: "Yongsu",
    lastName: "Jeong",
    age: 20
};

person = null;
typeof person; // object
```



# Undefined vs Null

```javascript
typeof undefined; // undefined
typeof null; // object

null === undefined; // false
null == undefined; // true
```



# Primitive Data (기본 자료형)

기본 자료형(Primitive Data)는 어떠한 프로퍼티(properties) or 메소드(methods)가 없는 단일한 값이다.

`JavaScript`의 기본 자료형은 다음과 같다

- string
- number
- boolean
- undefined

```javascript
typeof "John"; // string
typeof 3.14; // number
typeof true; // boolean
typeof false; // boolean
typeof x; // undefined (변수 x에 어떠한 값도 할당되지 않은 경우)
```



# Complex Data (복합 자료형)

이 자료형의 경우 typeof 메소드를 이용한 경우 두 종류의 자료형을 리턴한다.

`JavaScript`은 두 종류의 복합 자료형이 있다

- function
- object (`array`, `null` 는 여기에 포함된다)

```javascript
typeof { firstName: "Yongsu", lastName: "Jeong" }; // object
typeof [1, 2, 3, 4]; // object
typeof null; // object
typeof function myFunc() {}; // function
```



# JavaScript Functions

`JavaScript function`은 특정한 동작 혹은 목적의 기능/임무 등을 수행하기 위해 설계된 한 코드 블럭이라 생각할 수 있다. 

### Block Scope vs Global Scope에 대해서 이해해보자

아파트 단지를 생각해보자. 아파트 단지에 거주하는 사람들은 모두 놀이터와, 주차장을 이용할 수 있다. 하지만 나의 집에 대한 접근 권한은 오직 나에게만 있고 나 또한 다른 사람의 집에 접근 할 수 없다. 이렇듯 Global Scope은 아파트 단지의 놀이터를 포함한 공유된 장소를 의미하고, Block Scope은 각자의 집을 의미한다. 함수를 선언하면 해당 함수 내의 모든 정보는 Block Scope에 포함되기 때문에 함수 내부에 있지 않은이상 함수 외부에서는 접근할 수 없다. 하지만 함수 내부에서는 놀이터 등 공유된 장소에 접근할 수 있다.

```javascript
function name(parameter1, parameter2, parameter3, ...) {
    // code to be executed...
}
```

parameter의 경우 함수가 내부적으로 특정 동작을 수행하기 위해 함수 사용자로 부터 받아오는 값이다.

예를 들면, 예시만 봐도 parameter가 어떤 역할을 하는지 알 수 있다. 일종의 함수 사용자로 부터 받는 모든 값의 임시로 이름을 부여한 것이라 생각할 수 있다.

```javascript
function multiply(x, y) {
    return x * y;
}

multiply(1, 2); // 2
multiply(2, 3); // 6
```

# Function Invocation

함수를 실행시키는 방법

1. click 등과 같은 이벤트는 함수를 호출해 실행하는 것과 똑같은 기능을 한다. (나중에 배울 것)
2. ( ) 를 이용해 함수를 실행시킬때
3. IFFE 방식을 이용해 즉시 실행시키는 경우 (나중에 배울 것)



## Function Return

`return statement`를 만나면 함수는 동작 수행을 멈춘다. 일종의 브레이크 같은 존재라 생각할 수 있다. `return`의 경우 보통 한 함수가 동작을 수행하고 최종적으로 산출한 결과값을 함수 종료와 함께 사용한다.

```javascript
// multiply 함수는 x, y 값을 인자로 받고, 두 x, y 값의 곱을 함수 종료와 함께 return 한다.
function multiply(x, y) {
    return x * y;
}


var x = multiply(2, 4); // x 에는 multiply 함수가 리턴하는 값이 할당된다.
```



## Why Functions?

왜 함수를 사용할까? 함수 사용의 주된 목적은 재사용성 때문이다. 예를 들면, 화씨 온도를 섭씨 온도로 변환해야 한다고 생각해보자 섭씨 변환 함수를 생성하면 아래와 같이 여러번 재사용 할 수 있다.

```javascript
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}

var x = toCelsius(80);
var y = toCelsius(70);
```

만약 위와 같이 섭씨 변환 함수가 없다면 아래와 같이 일일이 반복적인 공식을 여러번 작성해야한다. 만약 공식이 길어지고 수행하는 동작이 복잡해진다면 엄청난 시간 낭비가 되고 또한 코드 유지보수가 엄청 힘들어진다.

```javascript
var x = (5 / 9) * (88 - 32);
var y = (5 / 9) * (80 - 32);
var z = (5 / 9) * (78 - 32);
```



## Functions Used as Variable Values

함수의 리턴 값을 변수에 할당할 수 있다.

```javascript
var x = toCelsius(80);
var text = "The temperature is " + x + " Celsius";

// 변수에 함수를 할당하지 않고 아래와 같이 함수를 바로 사용할 수 있다.
var text = "The temperature is " + toCelsius(80) + " Celsius"; 
```



## Local Variables

함수 내부에 선언된 변수는 모두 `Local Variables`이라 칭한다. `Local Variables`은 오직 해당 함수 내부에서만 접근할 수 있다.

```javascript
// name은 myFunction은 local variable 이기 때문에 이 위치에서 접근이 불가하다.

function myFunction() {
    var name = "Hello";
    
  // 이 위치에서는 myFunction 함수 내부에 있기 때문에 local variable인 변수 name에 접근 할 수 있다.
}

// name은 myFunction은 local variable 이기 때문에 이 위치에서 접근이 불가하다.


```

`Local Variable`은 함수 시작 동시에 생성되고 `return`등 함수가 종료되는 시점에 사라진다.





























