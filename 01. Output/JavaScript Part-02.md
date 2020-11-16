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



# JavaScript Objects

`object(객체)`는 현실 세계에서 자동차를 생각하면 이해할 수 있다. 예를 들면,

자동차의 `프로퍼티(Properties)`:

- 이름(name)
- 모델명(model)
- 자체무게(weight)
- 차 색깔(color)

자동차의 `메소드(기능) (methods)`:

- 시동(start())
- 출발(drive())
- 멈춤(brake())
- 시동끔(stop())



모든 차는 동일한 `프로퍼티(properties)`를 가질 수 있지만 차마다 해당 프로퍼티의 `값(values)`은 다르다. 

모든 차는 동일한 `메소드(기능)(methods)`를 가질 수 있지만 이 기능이 수행되는 시점은 차마다 다르다.

```javascript
var carName = "K5";
var carModel = "2020 K5";
var carWeight = 500;
var carColor = "white";

// JavaScript Object는 아래와 같이 정의할 수 있다.
// Key: Value 형태로 작성된다. 줄 바꿈은 해도되고 안해도된다.

// 줄바꿈 o
var car = {
    name: "K5",
    model: "2020 K5",
    weight: 500,
    color: "white"
}

// 줄바꿈 x
var car = { name: "k5", model: "2020 k5", weight: 500, color: "white"};
```

## name: values => key: values

| Property | Property Value |
| :------- | :------------- |
| name     | k5             |
| model    | 2020 k5        |
| weight   | 500            |
| color    | white          |



## Accessing Object Properties

```javascript
var car = {
    name: "K5",
    model: "2020 K5",
    weight: 500,
    color: "white"
}
```

#### 첫번째 방법

```javascript
car.name; // k5
```

#### 두번째 방법

```javascript
car['name']; // k5
```



## Object Methods

Objects는 methods or functions을 프로퍼티로 가질 수 있다.

```javascript
var car = {
    name: "K5",
    model: "2020 K5",
    weight: 500,
    color: "white",
    carStart: function() {
        return this.name + " " + "시동걸겠습니다.";
    },
    carDrive: function() {
        return this.name + " " + "출발하겠습니다.";
    },
    carBreak: function() {
        return this.name + " " + "멈추겠습니다.";
    },
    carStop: function() {
        return this.name + " " + "시동끄겠습니다.";
    }
}
```

 

## this keyword

`this keyword`는 함수의 `owner`라 생각할 수 있다.

위 `car` 예시를 보면 `this`는 `name, model, weight, carStart, carDrive, carBreak, carStop` 를 소유한 소유자라고 생각할 수 있다. 다시 말해서, `this keyword`는 한 `객체(object)`의 `Curly Bracket { }`내부에 있는 모든 프로퍼티에 `this`를 이용해 접근할 수 있다. `car object`의 경우 자신의 프로퍼티에 this를 이용해 접근할 수 있다.  `this`는 차후에 더 다룰 것이기 때문에 지금은 이정도만 알고 있으면 된다.

```javascript
var car = {
    name: "K5",
    model: "2020 K5",
    weight: 500,
    color: "white",
    carStart: function() {
        return this.name + " " + "시동걸겠습니다.";
    },
    carDrive: function() {
        return this.name + " " + "출발하겠습니다.";
    },
    carBreak: function() {
        return this.name + " " + "멈추겠습니다.";
    },
    carStop: function() {
        return this.name + " " + "시동끄겠습니다.";
    }
}

car.name; // K5
car.model; // 2002 k5
car.weight; // 500
car.color; // white
car.carStart(); // k5 시동걸겠습니다.
car.carDrive(); // k5 출발하겠습니다.
car.carBreak(); // k5 멈추겠습니다.
car.carStop(); // k5 시동끄겠습니다.

// 만약 함수 실행없이 아래와 같이 할당을 하면 함수 정의를 리턴한다.
var name = car.carStart;
console.log(name); // function() { return this.name + " " + "시동걸겠습니다.";}
```



## JavaScript Events

`HTML Events`는 HTML 요소에서 일어나는 `어떠한 것(things)` 이다. `JavaScript`는 HTML 요소에서 일어나는 이벤트에 반응하는 도구라 생각할 수 있다. 그렇다면 `HTML Events`에 대해서 알아봐야한다. 

#### HTML Events 예시

- HTML Website가 로딩을 끝냈을 시점
- HTML Webiste의 input 태그의 값이 변경되었을 때
- HTML Wesite의 button 태그가 클릭되었을 때

JavaScript는 위와 같은 예시의 이벤트를 포착해 특정 동작을 수행하게 해준다.

```html
// 예시 1
<button onclick="this.innerHTML = Date()">
    What time is it now?
</button>

// 예시 2
<!DOCTYPE html>
<html>
    <body>
        <p>현재 날짜를 확인하기 위해 버튼을 클릭해주세요!</p>
        <button onclick="displayDate()">몇 시인가요?</button>
        <p id="demo"></p>
    </body>
    <script>
        function displayDate() {
            document.getElementById("demo").innerHTML = Date();
        }
    </script>
</html>
```

### 가장 흔하게 사용하는 HTML Events

| Event       | Description                                          |
| :---------- | :--------------------------------------------------- |
| onchange    | - HTML 요소에 변화가 발생했을때                      |
| onclick     | - HTML 요소에 클릭 이벤트가 발생해                   |
| onmouseover | - HTML 요소에 마우스 포인터가 올라갔을때             |
| onmouseout  | - HTML 요소에 마우스 포인터가 요소 밖으러 벗어났을때 |
| onkeydown   | - 특정 키를 눌렀을때                                 |
| onload      | - HTML 요소가 로딩되었을때                           |



### 자바스크립트 이벤트 종류

#### 마우스 이벤트

- click : 마우스 버튼 클릭하고 버튼에서 손을 뗌
- dbclick : 마우스 버튼을 두 번 연속 더블클릭함
- mousedown : 마우스 클릭의 앞 절반(버튼을 누름)
- mouseup : 마우스 클릭의 뒤 절반 ( 버튼을 땜)
  .드래그 앤 드롭 이벤트 : 위 두 이벤트(mousedoen, mouseup)로써 구현
- mouseover : 마우스 포인터가 요소 위에 올라감
- mouseout : 마우스 포인터가 요소 밖으로 벗어남
- mousemove : 마우스 포인터가 움직임
  .마우스 커서가 해당 요소내를 움직일 때 또는 커서의 위치 확인에 유용함
- 마우스 휠 이벤트 등이있음

#### 키보드 이벤트

- keydown : 키를 누르는 순간
- keyup : 키를 눌렀다 떼는 순간
- keypress : 키를 눌러 문자가 연결되었을 때
  .즉, 화면에 글자가 완성되는 경우만 해당
  .한편, 누르고 있는 동안 화면에 해당 키가 연이어 나타나듯이 해당 이벤트도 계속 발생됨

#### 폼 이벤트

- submit : 전송 버튼을 누름 또는 텍스트 필등에서 엔터키를 누름
- reset : 폼을 포기화하기 위함
- change : 폼 필드에서 변경이 일어남 (텍스트 변동, 라디오 버튼의 클릭 등)
- focus : 웹브라우저가 특정 요소에 집중함 (해당 요소를 클릭, 마우스 커서를 놓을때 등)
- blur : focus의 반대 (탭 누름, 필드 밖을 클릭하는 등)

#### 문서 (document)/창 (window) 이벤트

- load : 문서 및 추가 자원(이미지 등)들을 모두 불러왔을 때 발생
- readystatechange
- resize : 창의 최대화 버튼 또는 창의 크기를 조절
- scroll : 스크롤 바를 드래그 하거나 또는 키보드 (위/아래/home/end등) 또는 마우스 휠 사용
- unload : 해당 페이지를 벗어남(링크를 클릭, 브라우저 탭/ 창을 닫음 등)

#### 기타 이벤트

- 텍스트 입력 이벤트, 시간 경과, 에러발생 등

### 이벤트 종류2

- onabort 이미지 로딩에서 이탈하였을 때(다른 연결로 이동)
- onactivate 개체의 activeElement 속성을 설정하였을 때
- onafterprint 관련된 문서를 인쇄하거나 인쇄 미리보기를 후 즉시
- onafterupdate 데이터 원본이 있는 개체가 성공적으로 업데이트되면
- onbeforeactivate 개체의 activeElement 속성이 설정되기 바로 전에
- onbeforecopy 선택된 내용이 시스템 클립보드(clipboard)로 복사하기 바로 전에
- onbeforecut 선택된 내용이 시스템 클립보드(clipboard)로 잘라내기 바로 전에
- onbeforedeactivate activeElement가 다른 개체로 이동하기 바로 전에
- onbeforeeditfocus 편집할 수 있는 용기 개체의 제어가 선택되기 바로 전에
- onbeforepaste 시스템 클립보드로부터 데이터를 붙여넣기하기 바로 전에
- onbeforeprint 관련된 문서를 인쇄하거나 인쇄 미리보기하기 바로 전에
- onbeforeunload 페이지가 언로드되기 바로 전에
- onbeforeupdate 연관된 데이터가 업데이트되기 바로 전에
- onbegin 이벤트에서 시간이 시작되면 엘레멘트에 발생된다.
- onblur 마우스나 탭에 의한 항해로 개체가 초점(포커스)을 상실 했을 때
- onbounce 내용이 개체의 한쪽 한계선에 도달하였을 때
- oncellchange 데이터 제공자에서 데이터의 내용이 변경되었을 때
- onchange 입력폼의 필드 내용이 변경되고 초점을 상실했을 때 발생
- onchange colorpick 비헤이버에서 색상이 변경되면 발생된다.
- onclick 왼쪽 마우스가 개체 위를 클릭하였을 때
- oncontentready 비헤이버 첨부된 엘레멘트의 내용이 파싱(parse) 완료되면 발생
- oncontentsave 비헤이버 첨부된 엘레멘트의 내용이 저장이나 복사되기 전에 발생
- oncontextmenu 사용자 지역에서 오른쪽 마우스를 클릭하였을 때
- oncontrolselect 사용자가 개체의 제어(control) 선택들 하려고 할 때
- oncopy 선택된 내용이 시스템 클립보드(clipboard)로 복사하기 하였을 때
- oncut 선택된 내용이 시스템 클립보드(clipboard)로 잘라내기 하였을 때
- ondataavailable 데이터 원천 개체로 부터 데이터가 도착하면 주기적으로 발생
- ondatasetchanged 데이터 원천 개체의 변경에 의한 감지가 있을 때
- ondatasetcomplete 데이터 원천 개체로부터 모든 데이터를 받아 사용할 수 있을 때
- ondatasetcomplete dataselect 비헤이버가 select의 내용을 차지하였을 때 발행
- ondblclick 마우스가 개체 위를 두번 클릭하였을 때
- ondeactivate activeElement가 현재의 개체에서 다른 개체로 이동하였을 때
- ondetach 엘레멘트에서 첨부된 비헤이버가 제거되기 바로전에 발생
- ondocumentready 비헤이버를 포함하는 문서가 파싱(parse)을 완료되었을 때 발생
- ondrag 마우스를 눌러 끄는 동안 계속해서 원본 개체에 발생
- ondragdrop NS 화일등의 개체를 창에 드롭다운 시켰을 때
- ondragend 마우스를 눌러 끄는 동안 계속해서 원본 개체에 발생
- ondragenter 사용자가 드래그하는 개체를 유효한 목표 드롭에서 놓았을 때
- ondragleave 드래그하는 마우스를 유효한 목표에서 놓지 않고 이탈했을 때
- ondragover 유효한 목표 위에서 드래그하는 동안 연속적으로 발생
- ondragstart 개체를 왼쪽 마우스를 누른 상태에서 드래그를 시작하면
- ondrop 드래그드롭 작업 중 마우스단추를 놓았을 때
- onend 엘레멘트에서 시간이 중지되면 발생
- onerror 런다임 오류가 발생하였을 때
- onerror 무효한 속성값을 할당하거나 읽기전용에 할당하면 발생
- onerror 무효한 속성값을 할당하거나 읽기전용에 할당하면 발생
- onerror 속성에 무효한 값을 할당하거나 읽기전용에 할당할 때 발생
- onerrorupdate 관련된 데이터가 업데이트되는 동안에 오류가 발생되면 발생
- onfilterchange 스타일 필터가 변경되거나 변환을 완료하면 발생
- onfinish 마퀴(MARQUEE)의 루프가 완료되면 발생
- onfocus 마우스나 탭에 의한 항해로개체에 초점(포커스)이 주어 졌을 때
- onfocusin 엘레멘트가 초점을 받았을 때
- onfocusout 엘레멘트가 초점을 잃었을 때
- onhelp 활성 윈도우에서 도움말을 위하여 F1 키를 누르면 발생
- onhide 메디어 플레이어가 감춰지면 발생된다.
- onkeydown 키를 개체 위에서 눌렀을 때 발생
- onkeypress 키(key)를 개체 위에서 눌렀다 놓았을 때 발생
- onkeyup 키를 개체 위에서 놓았을 때 발생
- onlayoutcomplete 채워넣기가 끝나고 인쇄하거나 인쇄미리보기를 실행하면 발생
- onload 개체를 로딩이 다 되었을 때
- onload 문서를 다시 로딩할 때 원래의 엘레멘트에서 발생
- onlosecapture 마우스에 의한 캡쳐(capture)가 상실되었을 때 발생
- onmediacomplete 메디어와 연관된 엘레멘트의 로딩이 완료되면 발생
- onmediaerror 엘레멘트의 메디어 파일의 로딩이 실패되었을 때 발생
- onmedialoadfailed (불량)엘레멘트의 메디어 파일의 로딩이 실패되었을 때 발생
- onmousedown 마우스가 개체 위를 눌렀을 때 발생
- onmouseenter 사용자가 마우스포인터로 개체 위에 들어갔을 때 발생
- onmouseleave 마우스포인터가 개체의 범위 밖으로 이동하면 발생
- onmousemove 마우스가 개체 위에서 이동하였을 때
- onmouseout 마우스가 개체 위에서 이탈하였을 때
- onmouseover 마우스가 개체 위로 이동하였을 때
- onmouseup 마우스가 개체 위 누른 것을 해제하였을 때
- onmousewheel 마우스 굴림단추가 개체 위에서 회전할 때 발생
- onmove 사용자나 스크립트로 창의 위치를 이동하였을 때
- onmoveend 편집할 수 있는 개체의 이동이 중지되었을 때 발생
- onmovestart 개체를 이동하기 시작하면 발생
- onopenstatechange 메디어바 플레이어의 열린 상태가 변경될 때 발생
- onoutofsync 엘레렌트가 연관된 시간과의 동기성을 상실하면 발생
- onpaste 시스템 클립보드(clipboard)로부터 데이터를 붙여넣기하였을 때
- onpause 엘레멘트의 시간이 일시중지(pause)하면 발생
- onplaystatechange 메디어바 플레이어에서 그 연주 상태가 변경되었을 때 발생
- onpropertychange 개체의 속성을 변경하면 그 개체에 발생
- onreadystatechange 개체의 상태(state)가 변경되면 발생된다.
- onrepeat 시간이 엘레멘트에서 반복되거나 다음번 작동이 시작될 때 발생
- onreset 입력폼이 리셋트(reset) 되었을 때
- onreset 시간이 begin 값이 되거나 resetElement가 호출되면 발생
- onresize 사용자나 스크립트로 창의 크기를 조절하였을 때
- onresizeend 사용자가 제어 선택된 개체의 크기 변경을 완료하면 발생
- onresizestart 사용자가 제어 선택된 개체의 크기를 변경하기 시작하면 발생
- onresume 시간개체가 일시중지에서 다시시작으로 회복되면 발생
- onreverse 엘레멘트에서 시간 개체가 뒤로 플레이되면 발생
- onrowclick rowover 비헤이버에서 마우스 커서가 줄을 선택하면 발생
- onrowenter 줄이 변경되고 개체에 새로운 값이 있음을 나타내기 위하여 발생
- onrowexit 현재 줄을 변경하기의 위한 데이터 원천 제어 바로 전에 발생
- onrowout rowover 비헤이버에서 마우스 커서가 줄에서 나가면 발생
- onrowover rowover 비헤이버에서 마우스 커서가 줄에 들어오면 발생
- onrowsdelete 리코드세트(recordset)에서 줄들이 삭제될 상황이 되면 발생
- onrowsinserted 현재의 리코드세트에 새로운 줄들이 삽입된 직후에 발생
- onsave 웹페이지가 저장, 북마크되거나 다른 페이지로 항해해 가면 발생
- onscroll 스크롤되는 개체에서 스크롤 바의 위치를 변경하였을 때 발생
- onseek 엘레멘트에서 탐색(seek) 작업이 수행되면 발생
- onselect 입력폼에서 입력 필드에서 문자열을 선택(select)하였을 때
- onselectionchange 문서의 선택된 부분의 상태가 변경되었을 때 발생
- onselectstart 개체가 선택되기 시작하면 발생
- onshow 메디어바 플레이어가 보이게 되면 발생된다.
- onstart MARQUEE 개체에서 반복하는 각 루프가 시작될 때 발생
- onstop 사용자가 중지 단추를 클릭하거나 웹 페이지를 닫을 때 발생한다
- onsubmit 입력폼(form)이 송신(submit) 되었을 때
- onsyncrestored 엘레멘트와 그 관련 시간 사이의 동기화가 회복되면 발생
- ontimeerror 시간을 지정하는 오류가 일어나면 발생
- ontrackchange ASX 파일에서 정의한 playList에서 트랙이 변경되면 발생된다.
- onunload 사용자가 페이지에서 이탈했을 때
- onurlflip +time t:MEDIA 태그에 의해 ASF 파일이 플레이되면 발생




















