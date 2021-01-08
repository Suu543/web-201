# JavaScript 101 - Part - 3

### Keyword: Operator

An **operator** in a **programming** language is a symbol that tells the compiler or interpreter to perform specific mathematical, relational or logical operation and produce final result.

`조작원 or 연산자 (Operator)`는 프로그래밍 언어에서 수학적, 논리적, 관계적인 결과를 도출하기 위해 사용하는  `문자(Symbol)`를 의미한다. `문자(Symbol)`의 간단한 예시는 `+, -, *, /`를 생각할 수 있다. 

본격적으로 `JavaScript`의 `조작원(Operator)`을 알아보기 전에 전 시간에 했던 것들을 복습해보자.

### 변수 (Variable)

#### let

- `rw: (read / write)`
- 변수는 메모리에 변수를 읽고 쓸 수 있다

```javascript
let globalName = 'Global Scope and Name';

{
    let name = 'yongsu';
    name = 'susu';
    console.log(name);
}
```

#### const

- `r: (read)` 읽기만 가능하다. 다시 다른 값을 할당하는 것이 불가능하다.
- `Object(객체)`에 사용했을때는 값을 저장하는 것이 아닌 `참조(Reference)`를 저장하는 것이기 때문에 값의 변경이 가능하다. 혼동하지 말자.
- **불변성(Immutability)**
- **안정성 (Security)**
- **쓰레드 안정성 (Thread Security)**
- **인간의 실수를 줄여준다 (Reduce Human Mistakes)**

```javascript
const daysInWeek = 7;
const PI = 3.14;

const su = {
    name: 'Yongsu',
    age: 24,
    address: 'Daegu'
}

su = 'Hello'; // const를 사용해 변수를 선언했기 때문에 값의 재할당은 불가능하다.

// const에는 애초에, name, age, address 라는 변수를 담고 있는 큰 통의 주소의 참조(Reference)가 담겨있기 때문에, const로 정의되지 않은 name, age, address의 값은 변경이 가능하다.
su.name = "Yongsu Jeong"; 
su.age = 25;
su.address = 'Daegugu';
```

### variable types

#### Primitive types - single item (더 이상 쪼개질 수 없는 JS에서 가장 작은 데이터 단위)

1. number
2. string
3. boolean
4. null
5. undefined
6. symbol

#### Object type

- `객체 (object)`는 다수의 `primitive type`의 데이터를 저장할 수 있다. 즉, 메모리에 저장하기에 크기가 크기 때문에 한 번에 올라갈 수 없다. 그러므로 `참조(Reference)`값을 가진다. 



## 1. String Concatenation (문자열 연결)

`+ `를 사용해 문자를 연결할 수 있다.

- 크게 네 가지의 경우의 수가 있다. 

```javascript
// 1. 문자 + 문자
console.log("Hello " + "World!");

// 2. 숫자 + 문자 --> 숫자는 문자로 간주된다.
console.log("1" + 2);

// 3. 문자 + 특수 문자 \n은 줄 바꿈을 의미한다.
console.log("Hello \n Book");

// 4. 탬플릿 리터럴 (Template Literal)
console.log(`
String Literals:
''''
''''
줄바꿈도 인식된다.
1 + 2 = ${1 + 2}
`);
```

## 2. Numeric Operators

```javascript
// 1. Addiction
console.log(1 + 1);

// 2. Subtraction
console.log(1 - 1);

// 3. Division
console.log(1 / 1);

// 4. Multiplication
console.log(1 * 1);

// 5. Remainder
console.log(5 % 2);

// 6. Exponentiation
console.log(2 ** 3);
```

## 3. Increment and Decrement Operators

##### Increment Operators

```javascript
// 1. preIncrement
let preCounter = 2;
const preIncrement = ++preCounter;
// const preIncrement = preCounter + 1; 과 동일
console.log(`preIncrement: ${preIncrement}, preCounter: ${preCounter}`); // 3 3

// 2. postIncrement
let postCounter = 2;
const postIncrement = postCounter++;
// const postIncrement = postCounter;
// postCounter = postCounter + 1; 과 동일
console.log(`postIncrement: ${postIncrement}, postCounter: ${postCounter}`); // 2 3
```

##### Decrement Operators

```javascript
// 1. preDecrement
let preCounter = 2;
const preDecrement = --preCounter;
// const preDecrement = preCounter - 1; 과 동일
console.log(`preDecrement: ${preDecrement}, preCounter: ${preCounter}`); // 1 1 

// 2. postDecrement
let postCounter = 2;
const postDecrement = postCounter--;
// const postDecrement = postCounter;
// postCounter = postCounter + 1; 과 동일
console.log(`postDecrement: ${postDecrement}, postCounter: ${postCounter}`); // 2 1
```

## 4. Assignment Operators

```javascript
let x = 4;
let y = 5;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;
```

## 5. Comparison Operators

```javascript
console.log(10 < 6); // 미만 (Less Than)
console.log(10 <= 6); // 이하 (Less Than or Equal)
console.log(10 > 6); // 초과 (Greater Than)
console.log(10 >= 6); // 이상 (Greater Than or Equal)
```

## 6. Logical Operators 

#### || (OR), && (AND), ! (NOT)

##### || (OR)

처음으로 `True`가 나오는 곳에서 동작을 멈춘다. 

```javascript
const first_value = false;
const second_value = 4 < 2; 

function check() {
    for (let i = 0; i < 10; i++) {
        // 시간 낭비를 하다 True 리턴
        console.log("Wasting Time...")
    }
    
    return true;
}

console.log(`OR: ${first_value || second_value || check()}`);
```

만약 `first_value` 에서 true가 나오면 뒤에 것은 따로 검증하지 않고 동작을 멈춘다.

```javascript
// Check 함수가 호출되지 않는 것을 확인할 수 있다.
let first_value = true; 
```

##### && (AND) 

첫번째 `False`가 발견되면 바로 `false`를 리턴한다. (그 뒤에 것은 실행시키지 않는다)

- 무거운 동작일수록 뒤에서 체크하는 것을 원칙으로 한다. 왜냐하면 더 많은 `Computing Power`를 필요로 하기 때문이다. `check` 같은 무거운 동작을 제일 앞에 두면 욕을 많이 먹을 수 있다. 주의하자.

```javascript
const first_value = false;
const second_value = 4 < 2; 

function check() {
    for (let i = 0; i < 10; i++) {
        // 시간 낭비를 하다 True 리턴
        console.log("Wasting Time...")
    }
    
    return true;
}

console.log(`and: ${first_value && second_value && check()}`);
```

##### ! (not)

```javascript
const first_value = true;

console.log(!first_value);
```

## 7. Equality Operators

값이 같은지 확인하는 방법에는 크게 두 가지가 존재한다

- `==` (Loose Equality with type conversion)
- `===` (Strict Equality, no type conversion)

##### == (Loose Equality)

 





##### === (Strict Equality)



 





















