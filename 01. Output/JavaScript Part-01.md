# JavaScript Part-01

JavaScript Output에 대해 알아보자

1. HTML Element(요소)에 특정 값을 출력하고 싶은 경우

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Output</title>
</head>
<body>
    <h1>JS Output - innerHTML</h1>
    <p id="demo"></p>

    <script>
        document.getElementById("demo").innerHTML = 5 + 6;
    </script>
</body>
</html>
```

2. 테스트를 목적으로 documnet.write()을 사용할 수 있다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Output</title>
</head>
<body>
    <h1>JS Output - innerHTML</h1>
    <p id="demo"></p>

    <script>
        document.getElementById("demo").innerHTML = 5 + 6;
    </script>
</body>
</html>
```

- 주의 해야 할 것은 document.write()은 documen가 로딩되고 난 뒤에 호출하면 document 전체를 덮어쓰게 된다 (overwrite).

document 전체를 덮어쓰는 예시

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Output</title>
</head>
<body>
    <h1>JS Output - Document Overwrite 예시</h1>
    
	<button type="button" onclick="document.write(5 + 6)">
        Document Overwrite
    </button>
</body>
</html>
```

3. Document가 아닌 특정 데이터를 알림 처럼 보여주고 싶은 경우 `window.alert()`를 사용할 수 있다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Output</title>
</head>
<body>
    <h1>JS Output - window.alert()</h1>
    
	<script>
    	window.alert(5 + 6);
    </script>
</body>
</html>
```

- `window` 키워드 같은 경우는 생략가능하다. `JavaScript`에서는 `window object`는 모든 범위에서 접근할 수 있는 `object` (`the global scope object` 이라 칭한다). 이것은 variables, properties, and methods 등이 기본값(by default)로 `window`에 속함을 알 수 있고 동시에 `window`를 생략할 수 있음을 의미한다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Output</title>
</head>
<body>
    <h1>JS Output - window.alert()</h1>
    
	<script>
    	alert(5 + 6);
    </script>
</body>
</html>
```

4. 디버깅의 목적으로 `console.log` 함수를 사용할 수 있다. 이것은 다른 언어의 `print`와 같은 역할을 한다. (Debugging은 차후에 배울 것이다)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Output</title>
</head>
<body>
    <h1>JS Output - console.log()</h1>
    
	<script>
    	console(5 + 6);
    </script>
</body>
</html>
```



5. `window.print()` 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Output</title>
</head>
<body>
    <h1>JS Output - window.print()</h1>
	<button onclick="window.print()">
        Print
    </button>    
</body>
</html>
```



# JavaScript Part-02 - JavaScript Statements

`Computer Program`은 컴퓨터가 실행하는 명령어(`instructions`)의 목록을 의미한다.

프로그래밍 언어에서는 이러한 명령어 하나를 `statement`라 칭한다.

`JavaScript Program`은 다수의`statements`로 구성된다. `HTML`에서는 `JavaScript Program`은 `web browser`에 의해서 실행된다.

```javascript
var x, y, z; // statement 1
x = 5; // statement 2
y = 6; // statement 3
z = x + y; // statement 4
```

위 코드는 네 개의 `statements`로 구성된다.

#### JavaScript Statements 구성요소

- Values 
- Operators

- Expressions
- Keywords
- Comments

```javascript
document.getElementById("demo").innerHTML = "안녕하세요";
```

위 statement는 브라우저에게 id="demo"를 가지고 있는 HTML 요소에 안녕하세요를 출력하라고 명령하는 코드이다. 대부분의 프로그램의 둘 이상의 다수의 statements로 구성되고 이것은 순서대로 하나씩 실행된다. 

#### JavaScript Statement = JavaScript Code

```javascript
var a, b, c; // 세 개의 변수를 선언한다
a = 5; // 변수 a 에 숫자 5를 할당한다
b = 6; // 변수 b 에 숫자 6을 할당한다
c = a + b; // 변수 c 에 a + b의 합을 할당한다


// semicolon을 사용하면 한 줄에 위 statments를 작성할 수 있다.
a = 5; b = 6; c = a + b; 
```

semicolon은 JavaScript 언어에서는 필수가 아니다 그럼에도 적는 것을 적극 추천한다. 왜냐하면 semicolon은 하나의 statement or code가 끝났음을 명시해주기 때문이다.

#### JavaScript White Space

`JavaScript` 언어는 다수의 공백을 무시한다. 그러므로 코드를 작성할 때는 다수의 공백을 삽입해 읽기 쉽게 작성해도 용량이나 성능상에 어떠한 영향도 미치지 않는다.

```javascript
var person = "Hege";

// 위 statement or code를 해석할 때
var person="Hege"
```



#### JavaScript Code Blocks

`JavaScript Statement`는 `code blocks`으로 하나의 그룹으로 묶을 수 있다. 이때 `중괄호 (Curly Brackets)`를 사용한다. `Code Block` 사용의 목적은 한 번에 순차적으로 같이 실행되는 `statement or code`를 명시하는 것을 목적으로 하고 동시에 범위를 한정지어주는 역할을 한다. 더 자세한 내용은 `JavaScript Function`을 배울때 알아보자.

```html
<!DOCTYPE html>
<html>
	<body>
		<h2>JavaScript Statements</h2>
		<p>JavaScript code blocks are written between { and }</p>
		<button type="button" onclick="myFunction()">Click Me!</button>

        <p id="demo1"></p>
        <p id="demo2"></p>

        <script>
        function myFunction() {
          document.getElementById("demo1").innerHTML = "Hello Dolly!";
          document.getElementById("demo2").innerHTML = "How are you?";
        }
        </script>
	</body>
</html>
```



## JavaScript Syntax

JavaScript Syntax는 일렬의 규칙이라 생각할 수 있다. 이 규칙을 따르면 하나의 프로그램을 JavaScript라는 프로그래밍 언어를 이용해 생성할 수 있다.

```javascript
var a, b, c; // 변수 선언
a = 5; b = 6; // 변수에 값 할당
c = a + b; // 변수에 계산된 값 할당
```

#### JavaScript Values

`JavaScript`는 두 종류의 값이 존재한다.

1. Fixed Values (고정값)
2. Variable Values (비고정값)

- 고정값은 `Literals`이라 칭하고 - 변할 수 없는 값

- 비고정값은 `Variables`이라 칭한다 - 변할 수 있는 값 



### JavaScript Literals

1. 숫자(Numbers) - 소수점은 있어도 없어도 된다.

```javascript
100.50
1001
```

2. 문자(Strings) - Single Quote or Double Quote을 이용해 아래와 같이 작성할 수 있다.

```javascript
"Hello World"
'Hello World'
```



#### JavaScript Variables

프로그래밍 언어에서는, 변수(Variables)는 데이터의 값을 저정하는 통과 같은 존재다. `JavaScript`은 `var` 키워드를 사용해 변수를 선언한다. 다시 말해서, 데이터를 담을 통을 정의한다고 생각할 수 있다. 그리고 = (equal sign)을 사용해 생성한 통에 어떤 내용물을 담을 수 있다.

```javascript
var x; // x 라는 통을 생성한다.
x = 6; // x 라는 통에 숫자 6 이라는 내용물을 담는다
```



#### JavaScript Operators (연산자)

```javascript
var addiction = 1 + 2;
var subtraction = 3 - 4;
var multiplication = 5 * 6;
var division = 7 / 8;
var module = 9 % 10;
```



#### JavaScript Expressions

`Expression`은 아래 요소로 구성되어있다.

- values
- variables
- operators

이러한 과정을 `Evaluation`이라 부른다.

```javascript
// 5 * 10 --> 5 * 10 evalutes to 50
5 * 10;
"Hello" + " " + "World";

// expression은 변수를 포함할 수 있다
x * 10;

```



#### JavaScript Keywords

`JavaScript Keywords`는 수행되어야할 action을 명시하는데 사용된다.

`var` 키워드는 브라우저에게 변수를 선언하라고 명령할 때 사용한다.

```javascript
var x, y;
x = 5 + 6;
y = x * 10;
```



#### JavaScript Comments

```javascript
// Single Line Comment
var x = 5; // Single Line Comment

// var x = 5; // 실행되지 않습니다.

/* Multi Line Comment
var x = 5;
var y = 10;
*/
```



#### JavaScript Identifiers

1. 변수, 함수 등 첫번째 글자는 항상 문자 혹은 underscore(_) or dollar sign($)이여야 한다. (숫자는 첫번째 글자로 허용되지 않는다.)



#### JavaScript Case Sensitive

JavaScript는 대소문자를 구별한다.

```javascript
var a = 1;
// VAR or Var or vAr or vaR 등을 var로 간주하지 않는다.
```



#### Naming Convention

```javascript
// --------------------------------------
1. Hyphens
first-name, last-name, full-name

// --------------------------------------
2. Underscore
first_name, last_name, full_name

// --------------------------------------
3. Upper Camel Case (Pascal Case)
FirstName, LastName, FullName

// --------------------------------------
4. Lower Camel Case
firstName, lastName, fullName

// --------------------------------------
5. Dollar Sign
var $$$ = "Hello";
var $ = 2;
var $money = 5;

// --------------------------------------
6. underscore
var _name = "Hello";
var _x = 2;
var _100 = 5;
```



#### JavaScript Character Set (조사필요)

[Complete Unicode Reference](https://www.w3schools.com/charsets/ref_html_utf8.asp)



## JavaScript Variables

변수(variables)는 데이터 값을 저장하는 통과 같은 역할을한다. JavaScript에서는 변수 선언시 `var` 키워드를 사용해 데이터를 저장하는 통을 생성한다.

```javascript
var x = 1; // 변수 x는 1을 저장한다.
var y = 2; // 변수 y는 2를 저장한다.
var z = x + y; // 변수 z는 x + y를 저장한다.
```

## let and const (2015)

`var` 키워드는 `2015`년도 이전의 `JavaScript` 변수를 선언하는 유일한 방법이였다. `The 2015 version of JavaScript (ES6 - ECMAScript 2015)`부터는 `const` and `let`을 키워들 변수 선언에 사용할 수 있다.

#### 1. 계산

```javascript
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
```



#### 2. 식별자 (Identifiers)

- 변수명은 문자, 숫자, underscore(_), dollar sign($)을 포함할 수 있다.
- 변수명은 반드시 문자 혹은 underscore(_) or sign($)로 시작해야한다.
- 변수명은 대소문자를 구분해야한다. (`var y and var Y`는 다른 것이다).
- `var`와 같이 `JavaScript`의 내부 명령어로 사용된 단어는 변수명으로 사용할 수 없다.



#### 3. 연산자 할당 (Assignment Operator)

```javascript
var x = 2;
var y = x * 2;
```



#### 4. 데이터 타입 (Data Type)

```javascript
var x = 2;
var y = 2.5;
var z = 'Hello';
var p = "World";
```



#### 5. 변수 선언(생성) (Declaring (Creating) JavaScript Variables)

```javascript
var carName;

console.log(carName); // undefined
```

위와 같이 carName이라는 변수를 선언하고, 로그를 출력해보면 `undefined`이 출력된다. 해당 변수에는 어떠한 값이 존재하지 않습니다와 같은 오류 메세지를 출력해주는게 정상적인 동작이지만 `var`를 사용한 경우 이러한 에러가 출력되지 않고 `undefined`이 출력되기 때문에 예상치 못한 오류가 발생할 수 있다. 이러한 상황을 방지하기 위해 `let or const`로 변수를 선언할 수 있다 (물론 다음 두 새로운 변수 선언 키워드를 사용하는 이유는 더 있다).



#### 6. One statement, Many Variables

```javascript
var name = "Yongsu", age = 24, gender = "male"


var name = "Yongsu",
    age = 24,
    gender = "male"
```



### Value = undefined

컴퓨터 프로그래밍에서, 변수는 값 없이 선언될 수 있다. 이 값은 계산될 수도 있고 이후에 사용자에 의해 입력받은 값을 할당의 목적으로 `undefined`으로 설정한다.

```javascript
var name;
```



#### Re-Declaring JavaScript Variables

만약 `JavaScript` 변수를 똑같은 이름으로 재선언 한다면 그 전에 가지고 있던 값을 손실하지않고 그대로 가지고 있는다. (`var`의 경우만 이렇다)

```javascript
var car = "car";
var car;

console.log(car); // undefined
```



## JavaScript Operators

| Operator | Description                                                  |
| :------- | :----------------------------------------------------------- |
| +        | 더하기(Addition)                                             |
| -        | 빼기(Subtraction)                                            |
| *        | 곱하기(Multiplication)                                       |
| **       | 제곱(Exponentiation ([ES2016](https://www.w3schools.com/js/js_es6.asp))) |
| /        | 나누기(Division)                                             |
| %        | 나머지(Modulus (Division Remainder))                         |
| ++       | 증감(Increment)                                              |
| --       | 증감(Decrement)                                              |



## JavaScript Assignment Operators

| Operator | Example | Same As    |
| :------- | :------ | :--------- |
| =        | x = y   | x = y      |
| +=       | x += y  | x = x + y  |
| -=       | x -= y  | x = x - y  |
| *=       | x *= y  | x = x * y  |
| /=       | x /= y  | x = x / y  |
| %=       | x %= y  | x = x % y  |
| **=      | x **= y | x = x ** y |



## JavaScript String Operators

`+` 는 두 문자를 합치는데 사용한다

```javascript
var txt1 = "Hello";
var txt2 = "World";
var blank = " ";
var txt3 = txt1 + blank + txt2;


var txt4 = "Hello, ";
txt4 += "Yongsu Jeong";
```



## Adding Strings and Numbers

```javascript
// 숫자 + 숫자
var x = 5 + 5; // 10

// 문자 + 숫자
var y  = "5" + 5; // 55

// 숫자 + 문자
var z = 5 + "Hello"; // 5Hello
```

공식 ==> `문자` + `숫자` or `숫자` + `문자`는 항상 `문자` 



# 참고 - 나중에 배울부분



## JavaScript Comparison Operators 

## - 이 부분은 뒤에서 더 자세히 다룰 내용

| Operator | Description                       |
| :------- | :-------------------------------- |
| ==       | equal to                          |
| ===      | equal value and equal type        |
| !=       | not equal                         |
| !==      | not equal value or not equal type |
| >        | greater than                      |
| <        | less than                         |
| >=       | greater than or equal to          |
| <=       | less than or equal to             |
| ?        | ternary operator                  |



## JavaScript Type Operators

| Operator   | Description                                                |
| :--------- | :--------------------------------------------------------- |
| typeof     | Returns the type of a variable                             |
| instanceof | Returns true if an object is an instance of an object type |



## JavaScript Bitwise Operators

Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

| Operator | Description           | Example | Same as      | Result | Decimal |
| :------- | :-------------------- | :------ | :----------- | :----- | :------ |
| &        | AND                   | 5 & 1   | 0101 & 0001  | 0001   | 1       |
| \|       | OR                    | 5 \| 1  | 0101 \| 0001 | 0101   | 5       |
| ~        | NOT                   | ~ 5     | ~0101        | 1010   | 10      |
| ^        | XOR                   | 5 ^ 1   | 0101 ^ 0001  | 0100   | 4       |
| <<       | Zero fill left shift  | 5 << 1  | 0101 << 1    | 1010   | 10      |
| >>       | Signed right shift    | 5 >> 1  | 0101 >> 1    | 0010   | 2       |
| >>>      | Zero fill right shift | 5 >>> 1 | 0101 >>> 1   | 0010   | 2       |



## Operator Precedence

```javascript
var = 100 + 50 * 3; // 250
var = (100 + 50) * 3; // 450
```

연산 우선순위 참고표

- 괄호 내부에 있는 값은 항상 먼저 계산이 되고 그 이후에 마치 하나의 값 처럼 사용된다.

| Value | Operator   | Description             | Example          |
| :---- | :--------- | :---------------------- | :--------------- |
| 20    | ( )        | Expression grouping     | (3 + 4)          |
|       |            |                         |                  |
| 19    | .          | Member                  | person.name      |
| 19    | []         | Member                  | person["name"]   |
| 19    | ()         | Function call           | myFunction()     |
| 19    | new        | Create                  | new Date()       |
|       |            |                         |                  |
| 17    | ++         | Postfix Increment       | i++              |
| 17    | --         | Postfix Decrement       | i--              |
|       |            |                         |                  |
| 16    | ++         | Prefix Increment        | ++i              |
| 16    | --         | Prefix Decrement        | --i              |
| 16    | !          | Logical not             | !(x==y)          |
| 16    | typeof     | Type                    | typeof x         |
|       |            |                         |                  |
| 15    | **         | Exponentiation (ES2016) | 10 ** 2          |
|       |            |                         |                  |
| 14    | *          | Multiplication          | 10 * 5           |
| 14    | /          | Division                | 10 / 5           |
| 14    | %          | Division Remainder      | 10 % 5           |
|       |            |                         |                  |
| 13    | +          | Addition                | 10 + 5           |
| 13    | -          | Subtraction             | 10 - 5           |
|       |            |                         |                  |
| 12    | <<         | Shift left              | x << 2           |
| 12    | >>         | Shift right             | x >> 2           |
| 12    | >>>        | Shift right (unsigned)  | x >>> 2          |
|       |            |                         |                  |
| 11    | <          | Less than               | x < y            |
| 11    | <=         | Less than or equal      | x <= y           |
| 11    | >          | Greater than            | x > y            |
| 11    | >=         | Greater than or equal   | x >= y           |
| 11    | in         | Property in Object      | "PI" in Math     |
| 11    | instanceof | Instance of Object      | instanceof Array |
|       |            |                         |                  |
| 10    | ==         | Equal                   | x == y           |
| 10    | ===        | Strict equal            | x === y          |
| 10    | !=         | Unequal                 | x != y           |
| 10    | !==        | Strict unequal          | x !== y          |
|       |            |                         |                  |
| 9     | &          | Bitwise AND             | x & y            |
| 8     | ^          | Bitwise XOR             | x ^ y            |
| 7     | \|         | Bitwise OR              | x \| y           |
| 6     | &&         | Logical AND             | x && y           |
| 5     | \|\|       | Logical OR              | x \|\| y         |
| 4     | ? :        | Condition               | ? "Yes" : "No"   |
|       |            |                         |                  |
| 3     | +=         | Assignment              | x += y           |
| 3     | /=         | Assignment              | x /= y           |
| 3     | -=         | Assignment              | x -= y           |
| 3     | *=         | Assignment              | x *= y           |
| 3     | %=         | Assignment              | x %= y           |
| 3     | <<=        | Assignment              | x <<= y          |
| 3     | >>=        | Assignment              | x >>= y          |
| 3     | >>>=       | Assignment              | x >>>= y         |
| 3     | &=         | Assignment              | x &= y           |
| 3     | ^=         | Assignment              | x ^= y           |
| 3     | \|=        | Assignment              | x \|= y          |
|       |            |                         |                  |
| 2     | yield      | Pause Function          | yield x          |
| 1     | ,          | Comma                   | 5 , 6            |









