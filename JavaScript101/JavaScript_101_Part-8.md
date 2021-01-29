# JavaScript 101 Part - 08

![img](https://images.unsplash.com/photo-1598644612563-82fbfa1bf2dd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80)

# OOP (Object Oriented Programming)

**OOP(객체지향)**는 프로그래밍에서 가장 많이 사용되는 패러다임 중 하나다. 이번 수업에서 배울 내용은 다음과 같다.

1. **What is Object-Oriented Programming?**
2. **Building Blocks of OOP**
3. **Four Principles of OOP**
4. **What to learn next**

### What is Object Oriented Programming?

**OOP(객체지향)**은 **클래스(classes)**와 **객체(objects)** 개념에 의존하는 프로그래밍 패러다임이다. **OOP(객체지향)** 은 소프트웨어 프로그램을 더욱 더 간결하고, **클래스(classes)**라고 불리는 청사진을 사용해 재사용할 수 있게 만들어준다. 이 청사진을 사용해 만드는 **객체(object)**를 **인스턴스(instance)**라 칭한다.

![img](https://jamiezzhou.files.wordpress.com/2018/12/1.png)

![What Frame Damage Could Mean to You and Your Car — M3 Collision](https://images.squarespace-cdn.com/content/v1/59f36c23bce17661f702cbae/1565619455689-AH70NQNQECI2M0UWYBIQ/ke17ZwdGBToddI8pDm48kENxbPubkcOmEHfSZGTB9nZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gycmlYrUNOm5FlGNDjMZJgpqJD-0CquWH5sHQo1k4Ds8xrZpC4307mT6_2kOukQEg/image-asset.jpeg)



앞서 말한 것 처럼 **JavaScript**의 **클래스(Class)**는 **객체(object) or 인스턴스(instance)**를 생성하는데 사용할 수 있다. 앞서 배운 것 처럼 **객체(object)**는 **JavaScript**의 모든 데이터 타입을 담을 수 있다. 

#### 객체(Object) 내부에 정의할 수 있는 데이터 타입

1. `Primitive Data Type` : **number, string, boolean, undefined, null, NaN** 
2. `Object Type`: **배열(Array), 함수(Function)**

**객체(Object)** 내부에는 **JS**의 모든 데이터 타입을 담을 수 있다. 이 말은 **객체(Object) or 인스턴스(Instance)**를 생성하는 것이 목적인 **클래스(Class)** 내부에도 위 데이터 타입을 모두 정의할 수 있다는 것을 알 수 있다.

이렇게 **클래스(Class)** 내부에 값 형태로 정의되는 것을 **속성(attribute)**이라 칭하고, 내부에 함수 형태로 정의되는 것을 **메소드(method)**라 칭한다.

위 자동차 프레임 사진을 보자. 이 자동차 프레임에는 어떤 바퀴, 유리, 엔진, 전구, 시트 등을 넣으냐에 따라 다른 자동차를 만들 수 있다. 앞서 **OOP(객체지향)**에 **class(클래스)**를 **청사진(blueprint)**라 칭했다. 이처럼 class(클래스)를 이용하면 프레임은 같지만, 다른 종류의 자동차를 만들 수 있다. 코드로 확인해보자.

```javascript
class Car {
    constructor(color, wheel, engine, light, seat) {
        this.color = color;
        this.wheel = wheel;
        this.engine = engine;
        this.light = light;
        this.seat = seat;        
    }
}
```

위 코드를 보면 **Class Car**라는 키워드를 사용해 자동차를 만드는 데 사용할 수 있는 청사진을 정의했다. 이 청사진은, 자동차 **색(color)**, **바퀴 종류(wheel)**, **엔진 종류(engine)**, **라이트(light)**, **시트 종류(seat)**로 구성이 된다. 그렇다면 어떻게 이 청사진을 이용해 자동차 한 대를 만들 수 있을까?

**클래스(class)**를 이용해 자동차 한 대를 만들어 보기 전, **구조체(constructor)**와 **this**에 대해서 알아보자.

```javascript
const test = {
    name: "su",
    age: 25
}

test.name
test.age

```

 **this**는 **객체(object)**의 주소 값을 저장하고 있는 **변수 test**와 같은 역할을 해준다. **클래스(class)**를 이용해 새로 생성하는 **객체(object) or 인스턴스(instance**)의 위치를 가리키는 역할을 한다. 우리는 **이 객체(object)**의 주소 값을  담고 있는 **test라는 변수를** 이용해 해당 주소 내부에 있는 값에 접근할 수 있다. 

**구조체(constructor)**는 해당 **클래스(class)**를 이용해 새로운 자동차를 만들기 위해 함수가 인자를 받는 것처럼 전달받은 인자를 이용해 내부적으로 **객체(object) or 인스턴스(instance)**를 생성하는 역할을 한다. 쉽게 이야기하면 **구조체(constructor)**는 **클래스(class)**를 호출하면 최초로 실행되는 함수라고 생각하면 된다.

하나만 더 하면 **클래스(class)**를 최초 호출해 **객체(object) or 인스턴스(instance)**를 생성할 때는, 클래스를 이용해 새로운 **객체(object) or 인스턴스(instance)**를 생성하는 것이기 때문에 **new**라는 키워드를 꼭 붙여줘야한다.

```javascript
class Car {
    constructor(color, wheel, engine, light, seat) {
        this.color = color;
        this.wheel = wheel;
        this.engine = engine;
        this.light = light;
        this.seat = seat;
    }
}

const carModel1 = new Car('red', 'M-1', 'A-1', 'LED', 'premium'); // Model1
const carModel2 = new Car('blue', 'M-2', 'A-2', 'LED', 'normal'); // Model2
const carModel3 = new Car('white', 'M-3', 'A-3', 'LED', 'premium'); // Model3
```

**carModel1**에는 

1. **new**: `new` 키워드를 이용해 특정한 `클래스(class)`의 `객체(object)` or `인스턴스(instance)`를 생성함을 알려준다.

2. **Car**: `Car 클래스`의 `객체(object)` or `인스턴스(instance)`를 이용해 생성하고 내부에 함수를 호출하는 것처럼 자동차를 생성하는 데 필요한 인자값과 함께 `Car( ) 클래스(class)`를 호출한다.
3. **constructor**: `new Car(인자..)`를 호출하면 `Car 클래스(class)` 내부에서 `constructor(구조체)` 함수가 호출된다.
4. **this**: `this` 키워드를 이용해 생성하고 있는 `object`의 주소 값을 가리키고, 그 내부에 여러 `값(attribute)`과 `메소드(method)`를 할당한다.

결과적으로 **carModel1**에는 `클래스(class) Car`를 이용해 생성한 `객체(Object)` or `인스턴스(Instance)`의 **주소 값**이 할당된다.

#### Car class(클래스)를 이용해 생성한 객체(Object) or 인스턴스(Instance)를 이용해 값을 출력해보자

```javascript
class Car {
    constructor(color, wheel, engine, light, seat) {
        this.color = color;
        this.wheel = wheel;
        this.engine = engine;
        this.light = light;
        this.seat = seat;
    }
}

const carModel1 = new Car('red', 'M-1', 'A-1', 'LED', 'premium'); // Model1
const carModel2 = new Car('blue', 'M-2', 'A-2', 'LED', 'normal'); // Model2
const carModel3 = new Car('white', 'M-3', 'A-3', 'LED', 'premium'); // Model3

console.log(carModel1.color);
console.log(carModel1.wheel);
console.log(carModel1.engine);
```

#### 이번에는 Car class(클래스) 내부에 메소드(method)를 추가해보자

**클래스(class)** 내부에 **메소드(method)**를 추가할 때는 함수를 정의하는 것과 똑같이 할 수 있다. 한 가지 차이점이 있다면 **function 키워드**를 사용하지 않고 함수명만 정의하는 것이다.

```javascript
class Car {
    constructor(color, wheel, engine, light, seat) {
        this.color = color;
        this.wheel = wheel;
        this.engine = engine;
        this.light = light;
        this.seat = seat;
    }
    
    getEngine() {
        console.log(`${this.engine}을 사용합니다...`)
    }
    
    getCarInfo() {
        console.log(`
		바퀴: ${this.wheel},
        엔진: ${this.engine},
        시트: ${this.seat}
        빛: ${this.light}
        색: ${this.color}`)
    }
}
 
```







https://www.educative.io/blog/object-oriented-programming#four

https://jamiezzhou.wordpress.com/2018/12/24/week10%EF%BC%9Aoop-object-oriented-programming/







