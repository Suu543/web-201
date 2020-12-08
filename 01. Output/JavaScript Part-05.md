# JavaScript Math Object

1. 파이값

```javascript
Math.PI;  
```

2. 반올림

```javascript
Math.round(4.7); // 5
Math.round(4.4); // 4
```

3. 제곱

```javascript
Math.pow(8, 2); // 64
```

4. 제곱근

```javascript
Math.sqrt(64); // 8
```

5. 절대값

```javascript
Math.abs(-4.7); // 4.7
```

6. 올림

```javascript
Math.ceil(4.4); // 5
```

7. 내림

```javascript
Math.floor(4.7); // 4
```

8. 코싸인

```javascript
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
```

9. 싸인

```javascript
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
```

# JavaScript Random

1. 0과 1 (1은 미포함)사이의 값을 리턴한다.

```javascript
Math.random();
```

2. 0과 9(포함)사이의 값

```javascript
Math.random(Math.random() * 10);
```

3. 0과 10(포함)사이의 값

```javascript
Math.random(Math.random() * 11);
```

4. 0과 99(포함)사이의 값

```javascript
Math.random(Math.random() * 100);
```

5. 0과 100(포함)사이의 값

```javascript
Math.random(Math.random() * 101);
```

6. 1과 10(포함)사이의 값

```javascript
Math.random(Math.random() * 10) + 1; 
```

7. 1과 100(포함)사이의 값

```javascript
Math.random(Math.random() * 100) + 1;
```

8. min(포함) and max(포함)

```javascript
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```



# JavaScript Booleans

- TRUE / FALSE

- YES / NO
- ON / OFF

```javascript
Boolean(10 > 9); // true
(10 > 9); // true
10 > 9; // true

== equal to 
> greater than
< less than
```

1. 값이 있으면 무조건 True

```javascript
100; // true
3.14; // true
-15; // true
"Hello"; // true
"false"; // true
```

2. 값이 없거나 0 or -0, "", null, NaN은 무조건 False

```javascript
var x = 0;
Boolean(x); // false

var x = -0;
Boolean(x); // false

var x = "";
Boolean(x); // false

var x;
Boolean(x); // false

var x = null;
Boolean(x); // false

var x = false;
Boolean(x); // false

var x = 10 / "H";
Boolean(x); // false
```

3. new Boolean(false)의 경우 typeof가 object이다.

```javascript
var x = false;
var y = new Boolean(false);

// typeof x --> boolean
// typeof y --> object

(x == y); // true
(x === y); // false

var z = new Boolean(false);
(y == z); // Object는 비교가 불가하다.
```



# Comparison and Logical Operators

### Comparison Operator

```javascript
var x = 5;
x == 8; // false
x == 5; // true
x === 5; //true
x == "5"; // true
x === "5"; // true

x != 8; // true
x !== 5; // false
x !== "5" // true
x !== 8; // true

x > 8; // false
x < 8; // true
x >= 8; // false
x <= 8; // true

```

### Logical Operator

```javascript
(x < 10 && y > 1); // true
(x == 5 || y == 5); // false
!(x == y); // true
```



### Conditional (Ternary) Operator

```javascript
// 변수이름 = (조건) ? 조건이 참일 때 : 조건이 거짓일 때

var age = 10;
var voteable = (age < 18) ? "어리다" : "늙었다";
```



다른 데이터 타입을 비교하면 예상치 못한 결과가 출력될 수 있다.

```javascript
2 < 12; // true
2 < "12"; // true
2 < "John": // false
2 > "John"; // false
2 == "John"; // false
"2" < "12"; // false
"2" > "12"; // true - 알파벳 순서로는 1이 2보다 작아서 

var age = Number(age);
var voteable = "";
if (isNaN(age)) {
    voteable = "Input is not a number";
} else {
    voteable = (age < 18) ? "어리다" : "늙었다";
}
```



# JavaScript if else and else if

1. if

```javascript
if (조건) {}

var age = 15;
var greeting = "";
if (age < 18) {
    greeting = "Hello World";
}
```

2. else

```javascript
if (조건) { }
else { }

var age = 15;
var greeting = "";
if (age < 18) {
    greeting = "Hello World";
} else {
    greeting = "Bye World";
}
```

3. else if

```javascript
if (조건1) { }
else if (조건2) { }
else { }

var age = 15;
var greeting = "";
if (age < 18 && age > 13) {
    greeting = "Hello World";
} else if (age < 10) {
    greeting = "Just World";  
} else {
    greeting = "Bye World";
}
```

4. multiple else if

```javascript
if (조건1) { }
else if (조건2) { }
else if (조건3) { }
else if (조건4) { }
else if (조건5) { }
else { }

var age = 11;
var greeting = "";
if (age < 18 && age > 16) {
    greeting = "Hello World";
} else if (age < 16 && age > 14) {
    greeting = "Just World";  
} else if (age < 13 && age > 10) {
    greeting = "World";
} else if (age < 10 && age > 4) {
    greeting = "...";
} else {
    greeting = "Bye World";
}
```

# Switch Statement

```javascript
switch(expression) {
    case x:
        break;
    case y:
        break;
    default:
}

var day = "";

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}




switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
```



## Strict Comparison

`strict comparsion` 에서는 타입이 중요하다 (===).

```javascript
var x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
```



# For Loop

```javascript
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";


var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
```







