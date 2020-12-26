## JavaScript
#### 프로그래밍에서 가장 중요한 것이 무엇일까?
<ul>
    <li>입력</li>
    <li>연산</li>
    <li>출력</li>
</ul>
사용자에게 데이터를 입력받고 --> 입력받은 데이터를 잘 처리하고 연산해서 --> 알맞게 다시 사용자에게 출력한다

(물론 데이터를 전송을 이용해서 서버로 전송해 다시 받아오는 것도 포함한다)

이런 연산을 하면서 `CPU`에 최적화된 연산을 작성하는 것도 중요하고, 메모리 사용의 최소화도 중요하다.

```javascript
// 1. Use Strict
// Added in ES 5
// Use this for Vanilla JavaScript
'use strict';

// 2. Variable (변수 = 변경될 수 있는 값)
// ES6는 전세계 JS 공용, 이전 버전은 거의 사용하지 않음
// let (added in ES6) JS에서 변수를 만들 때 사용하는 Keyword --> 현대판 (Hoisting 나중에)

// Declaration
let name = "Yongsu";
console.log(name);

name = "Jeong";
console.log(name);
```

<img src="https://cdn-images-1.medium.com/max/800/1*ZJ7fXeLURx3kK1cqdi1Vbg.png" />

`let` 키워드를 사용해 변수를 생성하면, 메모리 (빈 박스를 생각하면된다)가 할당되는데 앱마다 사용할 수 있는 메모리 (박스)의 개수는 제한된다. 

사용할 메모리의 위치가 할당되고 그곳에 접근할 수 있는 이름이 필요한데 그것이 바로 변수 이름이다. 

```javascript
// Block Scope - 코드를 다음과 같이 블럭 { } 안에 정의하면 해당 블럭 외부에서는 블럭 내부의 코드에 접근할 수 없다.
{
   let name = "Yongsu";
   console.log(name);

   name = "Jeong";
   console.log(name);    
}

console.log(name); // 아무값도 출력되지 않는 것을 확인할 수 있다.

// 다음과 같이 블럭 { } 내부가 아닌 그냥 바로 작성하는 경우를 Global Variable이라 칭한다. 이 경우 범위는 Global Scope이라 생각할 수 있다.

// Global Variable은 프로그램이 실행되는 순간 부터 끝나는 순간까지 메모리에 탑재되어 있기 때문에 최소한으로 쓰는 것이 좋다. 가능하면, Class, Function 혹은 For loop 내부 범위에 사용하는 것이 좋다.
let globalName = "Global Scope";
console.log(globalName);
```

`ES5` 기준으로 `JavaScript`에서 변수를 선언할 수 있는 키워드는 단 하나 `let`이 존재한다. 그전에는 무엇을 사용했을까?

```javascript
// var (절대 사용하지 마세요) - 버그
console.log(age); // 변수 선언하기 전에 값 출력 - undefined
age = 4; // 변수 선언하기 전에 값 할당 - 4
var age; // 값 없이 변수 선언 

// let 을 사용하면 바로 에러 출력
name = 4;
let name; // Uncaught ReferenceError: Cannot access 'name' before initialization at ...
```

`var`는 절대 사용하지 말자

```javascript
// var (절대 사용하지 마세요) - 버그
console.log(age); // 변수 선언하기 전에 값 출력 - undefined
age = 4; // 변수 선언하기 전에 값 할당 - 4
var age; // 값 없이 변수 선언 

// var는 block scope을 무시한다
{
    age = 4;
    var age;
}

console.log(age); // 4

// 아무리 저 깊은 곳에 block을 이용해 선언해도 어떤 곳에서든 접근이 가능하다. 처음에는 자유도가 좋네 하고 생각할 수 있지만, 규모가 커지면 그때부터 선언하지 않은 값이 할당되고, 메모리 누수가 발생하고 등등 쉽게 말하면 예측하지 못하는 결과가 많이 발생한다.
```

위와 같은 문제를 `var hoisting`이라 칭한다. (**Move Declaration from bottom to top**). 

`hoisting`이란 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올려 주는 것을 의미한다.

```javascript
// 3. Constants - 한 번 할당하면 값이 절대 변경되지 않는 것을 의미함
// 변수를 이용하면 할당된 메모리를 포인터가 가리키고 있는데, constant의 경우 할당과 동시에 그 포인터에 잠금 장치를 건다. 그래서 constant로 생성한 변수는 다른 메모리를 가리킬 수 없게 된다.
// Favor Mutable (값이 변경될 수 있는 데이터)
// Favor Immutable Data Type Always for a few reasons: (값이 변경될 수 없는 데이터)
// - Security 
- 한 번 작성한 값을 다른 해커들이 이상한 값을 삽입에 값을 변경하는게 가능한데 이 경우 불가하다
// - Thread Safety 
- 어플리케이션이 실행되면 한 가지의 프로세스가 할당되고 이 안에는 다양한 쓰레드가 동시에 돌아가면서 어플이 효과적으로 빠르게 동작하도록 도와준다. 다양한 쓰레드가 동시에 변수에 접근해서 값을 변경할 수 있는데, 동시에 접근에 값을 변경하는 것은 조금 위험하다. 그래서 가능하면 값이 변하지 않는 것을 사용하는 것이 좋다. (변경되어야 할 좋은 이유가 없다면 왠만하면 const를 사용하는 것이 좋다)
// - Reduce Human Mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variables Types
- Primitive, single item (더 이상 작은 단위로 나눠질 수 없는 한가지 단위): 
	- number, string, boolean, null, undefined, symbol

- Object, box container (single item을 여러개 묶어서 한 단위로, 한 박스로 관리할 수 있게 해주는 것)

- Function, first-class citizens, 
    	- JavaScript의 경우 function 이라는 데이터 타입이 하나 더 존재한다. 이것의 의미는 변수에 할당이 가능하고, 함수의 인자로, 함수의 리턴값으로 다 함수를 사용할 수 있음을 의미한다.
     
      
// C는 아래와 같은 Data Type이 존재한다.        
int main {
    short a = 12; // 2 bytes
    int a = 12; // 4 bytes
    long b = 1234; // 8 bytes 
    float d = 1.2f; // 4 bytes
    double e = 8.2; // 16 bytes
    return 0;
}


// Java는 아래와 같이 숫자를 표현하는 다양한 Data Type이 존재한다.
class Main {
	public static void main(String[] args) {
        byte a = 12;
        short b = 12;
        long c = 12;
        int d = 12;
        float e = 1.2f;
        double f = 1.2;
    }  
}

다행이도 JavaScript은 Number 하나면 숫자는 끝난다. 얼마나 큰 숫자를 할당할지 생각 할 필요가 없다.
JavaScript은 동적으로 타입이 결정되기 때문에 
let a = 12;
let b = 1.2;

// TypeScript도
let a: number = 12;
let b: number = 12;

const count = 18; // Integer
const size = 17.1; // Decimal Number

// Number -Special Numeric Values:
// 숫자에도 약속된 숫자가 존재한다.
// 다양한 계산을 할 때 나눌려고 하는 값이 0 인지 혹은 숫자인지 명확히 확인하지 않으면 에러가 발생할 수 있기 때문에 아래 요소를 잘 고려해야한다.
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // - Infinity
console.log(nAn); // NaN

// BigInt (Farely New, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // Over (-2**53 ~ 2**53) 
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
console.log(`value: ${bigInt}`);

// String
const char = 'c';
const name = 'Yongsu Jeong';
const greeting = 'Hello ' + name;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloName = `hi ${name}!`; // Template Literals (String)
// 구버전(No Template Literals)
console.log('Value: ' + name + ' type: ' + typeof helloName);
// 신버전(Template Literals)
console.log(`Value: ${name}, type: ${typeof helloName}`)


// Boolean
// false: 0, null, undefined, NaN, '',
// true: any other value
const canRead = true;
const test 3 < 1; // false
console.log(`Value: ${canRead}, type: ${typeof canRead}`);
console.log(`Value: ${test}, type: ${typeof test}`);

// null - 너는 텅텅비어 있는 값이야, 너는 아무것도 아니야 지정하는 것
let nothing = null;
console.log(`Value: ${nothing}, type: ${typeof nothing}`)

// undefined - 아무것도 아니야라고 조차 지정하지 않은 것 저게 아무것도 아닌걸 아는거랑 아무것도 아닌걸 모르는 것 천지차이다. 잘 구분해서 사용하자. (텅 비었는지, 값이 없는지)
let x;
let x = undefined;
console.log(`Value: ${x}, type: ${typeof x}`);

// Symbol, Create Unique Identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
console.log(`Value ${symbol1.description}, type: ${typeof symbol1}`);

// 변수를 선언할 때 어떤 타입인지 선언하는 반면에, JS는 프로그래밍 (Runtime)에 타입이 변경될 수 있음을 의미한다. 빠르게 테스트하는 경우에는 유용하지만, 대규모 프로젝트에는 다소 불편할 수 있다.
// 5. Dynamic Typing: Dynamically Typed Language
let text = 'hello';
console.log(`Value: ${text}, type: ${typeof text}`); hello string
text = 1;
console.log(`Value: ${text}, type: ${typeof text}`); 1 number
text = '7' + 5;
console.log(`Value ${text}, type: ${typeof text}`); // 75 String
text = '8' / '2';
console.log(`Value ${text}, type: ${typeof text}`);
```





















