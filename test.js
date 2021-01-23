// 모든 사물과 물체를 클래스로 정의할 수 있다.
// class나 object가 없다면?
// 정의한 변수가 여기저기 떠다니면서 규모있는 프로젝트 만들기 힘듬

// 클래스는 연관있는 데이터를 한곳에 묶어두는 컨테이너 같은 아이
class person {
    name; // 속성 field
    age;  // field
    speak() // 행동 (method)
}

// class는 fields and methods로 구성됨
// fields만 있는 경우도 있음
// 관련있는 변수와 함수를 묶어둔 것
// 클래스 내부에도 내부적으로 보일 수 있는 변수와 밖에서 보일 수 있는 변수를 구분한다 - Encapsulation (캡슐화)

// 우리가 실제로 살아가는 이 세상에도 수많은 물체와 사물이 존재한다.
// 프로그래밍을 할때도 사물과 물체를 클래스로 정의해서 프로그래밍 하는 것이 조금 더 자연스럽다
// 객체지향적으로 개발을 잘 하는 사람은 풀어야하는 문제나
// 구현해야하는 것을 객체로 잘 만들 수 있다.

// 쇼핑몰, 수강신청 프로그램등을 어떻게 클래스로 만들 수 있을까?

// 클래스는 붕어빵을 만들 수 있는 틀, 청사진, 탬플릿 이라 불린다.
// 클래스 자체에는 데이터는 없다. 대신에 클래스에는 요런요런 데이터가 들어올 수 있어 정의만하고 한 번만 선언한다

// class
// - template
// - declare once
// - no data in

// object
// 위 클래스르 이용해서 만드는 데이터가 바로 object다.
// 클래스를 이용해 새로운 instance를 생성하면 그것이 object가 된다.
// class는 정의만 한 것이라 실제로 메모리에 올라가지는 않는다
// 크림 넣으면 크림 붕어빵, 피자 넣으면 피자 붕어빵
// 이렇게 만들어진 붕어빵이 object
// 붕어빵을 만들때 사용한 틀이 class

// 'use strict'
// Object-Oriented Programming
// class: template
// object: instance of a class
// JavaScript Classes
//   - introducted in ES6
//   - Syntactical Sugar Over prototype-based inheritance

// 클래스가 없었을때는 어떻게 만들었노?
// 클래스가 없을때는 클래스를 사용하지 않고
// 바로 object, object를 만들때 function을 이용해 template을 만드는 방법이 있다.
// 이 방법위에 간단하게 문법만 추가해준 것이다.
// prototype-based는 나중에 확인해보자 - 언어 구현상 디테일

// class 선언
// 1. Class Declaration
class Person {
    // 생성자를 이용해서 나중에 object를 만들때 필요한 데이터를 전달한다.
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const su = new Person('su', 25); // 새로운 object 생성
console.log(su.name);
console.log(su.age);
su.speak();

// this는 생성된 object.name이라 speak 가 동작함

// 2. getter and setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        // getter를 호출 this.age
        // setter 호출 = age
        this.age = age;
    }

    // getter를 정의하는 순간 위의 this.age는 메모리에 올라가있는 데이터를
    // 읽어오는 것이 아닌 바로 getter를 호출한다.
    get age() {
        // 여기에는 기호가 들어간 _age가 있음에도
        // user1.age로 호출이 가능한 이유는 
        // 내부적으로 getter와 setter를 사용하기 때문이다.
        return this._age;
    }

    // 우리가 setter를 정의하는 순간 = 사인이, 바로 메모리에 값을 할당하는 것이
    // 아니라 setter를 호출한다. 우리가 setter안에서 전달된 값을
    // this.age에 할당할때 메모리에 값을 할당하는 것이아니라 setter를 호출한다.
    // 즉, setter로 다시 돌아와서 이 문장은 또 다시 setter를 호출한다.\
    // this.age = value에서 다시 setter를 호출하고 재귀 방식으로 계속 호출된다.
    // 이를 방지하기 위해서 다음과 같이 이름을 변경해준다.
    set age(value) {
        // if (value < 0) {
        //     throw Error('age cannot be negative');
        // }
        // this.age = value;
        this._age = value < 0 ? 0 : value;
    }
}

// 사람의 나이가 -1 인 것은 말이 안된다
// 이런 사용자의 실수를 방지해주는 기능을 하는 것이
// getter and setter다
const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age)

// 3. Fields (public, private)
// 많은 개발자가 사용하지는 않는 비교적 최근에 추가된 기능
// 지금은 쓰기에는 너무 이르다
class Experiment {
    publicField = 2;
    // class 외부에서는 이 값을 읽을 수도 변경할 수도 없다.
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);  // 2
console.log(experiment.privateField); // undefined

// 4. static
// 이것도 쓰기에도 이르다
// class 중 데이터에 상관없이, 동일하게 반복적으로 사용되는 매소드를 static
// 키워드를 이용해 사용하면, object가 아닌 Article 이라는 클래스 자체에 붙어있는 것이다.
// static은 object마다 할당되는 것이 아닌, 클래스 자체에 붙어 있는 것

class Article {
    static publisher = 'su';
    constructor(articleNum) {
        this.articleNum = articleNum;
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // su
Article.printPublisher();

// 언제 사용할까?
// 들어오는 데이터에 상관없이 공통적으로 static에서 사용할 수 있는 경우에
// 메모리의 사용을 줄여줄 수 있다.

// 상속과 다양성
// 사각형, 삼각형, 동그라미를 그린다고 생각해보자
// 애들을 나타낼때 사용하는게 너비, 높이, 색상등이 있다
// 애들을 보니 너비, 높이, 색상이 반복되는 것을 알 수 있다.
// 애들의 공통점이 도형이라는 것을 알 수 있다. Shape
// Shape의 공통 속성을 재사용하면 더 좋지 않을까?
// 이때 상속과 다양성을 사용한다.
// 5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());
// 다양성 Polymorphism
// 삼각형은 공식이 다르다, 삼각형 만의 공식을 overriding 해보자
// triangle의 draw 함수도 overriding 해보자

class Pentagon extends Shape {
    // draw overriding
    draw() {
        // 부모인 shape의 draw를 사용하고 싶은 경우
        super.draw();
        console.log('overriding pentagon')
    }

    getArea() {
        return "나는야 오각형 넓이"
    }
}

const pentagon = new Pentagon(20, 20, 'brown');
pentagon.draw();
console.log(pentagon.getArea())

// 6. instanceOf
// Class Checking: instanceOf
// 오른쪽의 클래스를 이용해서 만들어진 object or instance 인지 아닌지 확인
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
// Definition 보면 알 수 있음
// JS에서 만든 모든 Object 클래스는 JS Object를 상속한다.
console.log(triangle.toString()); // 요것도 Definition에서 확인가능
// toString 또한 Overriding 할 수 있음
class Hexagon extends Shape {
    
    toString() {
        return `Hexagon: color: ${this.color}`
    }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// JS 내부에 포함된 Object가 어떤 것이 있는지 확인할 수 있다
// Value Properties, Indexed Collections, Error Objects, Keyed Collections
// Promise, JSON 등등 다 확인해볼 수 있다.
// function calculate(command, a, b);
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command')
    }
}

console.log(calculate('add', 2, 3));