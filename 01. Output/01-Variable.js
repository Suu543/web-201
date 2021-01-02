// 가장 작은 데이터 타임: Primitive Data Types
// number, string, boolean, null, undefined, symbol
// 변수명은 logic과 연관된 이름을 이용해 지어야한다.
let num = 2;
let number = 2;

// 서로 다른 메모리 공간에 저장된다.
console.log(num);
console.log(number);

number = 3;

console.log(num);
console.log(number);

// Primitive Data Types을 제외한 나머지는 모두 Object다.
// 함수도 결국 object
// 적어도 한 가지 이상의 Primitive Type Data를 포함할 수 있다.

// 아래와 같이 정의하면 object를 정의하면 key: value로 구성되어있다.
// 각 key에 해당하는 메모리가 따로 할당된다.
// name이라는 메모리 공간에 yongsu, age라는 공간에 20
// 두 종류의 다른 메모리 공간을 묶은 위치를 나타내는 메모리 위치를 나타내는
// 주소가 존재한다. 이 주소를 123이라 생각했을 때
// obj라는 메모리 공간에는 123이 들어가있다.
let obj = {
    name: 'Yongsu',
    age: 20   
}

// obj를 가리키고 있는 123에 있는 name이라는 이름을 가진 메모리를 찾고있구나!
console.log(obj.name);

// 만약 아래와 같이 object를 할당하면
// obj2에 해당하는 새로운 메모리가 생성되고, 
// 이 메모리에는 obj가 가지고 있는 주소 123이 그대로 obj2에 할당된다.
let obj2 = obj;
// 똑같이 yongsu가 출력되는 것을 확인할 수 있다.
console.log(obj2.name);

// 요약하면 
// Primitive Data Type은 그 값 자체가 메모리에 할당되고
// Object는 해당 메모리의 주소값이 할당된다

// 여기서 흥미로운 일이 발생한다.
obj.name = 'WhatThe';

console.log("---------");
console.log(obj.name); // WhatThe
console.log(obj2.name);  // WhatThe

// 위오 같은 결과가 발생하는 이유는
// obj나 obj2가 가리키고 있는 object가 동일하기 때문에
// 어떤 곳을 통해 이름을 업데이트해도 둘 다 변경된 것을 확인할 수 있다.

// 이렇게 값 대신 object의 주소를 reference가 복사되어 저장된다.
// 그러면 값만 복사할 수 없을까?
// 가능하다 shallow copy vs deep copy

// let은 값 변형이 가능 
let a = 2;
a = 5;

// const는 한 번 정의시 값 변경 불가
const num = 2;
num = 4;

// 여기서 질문 아래와 같이 const로 object를 선언했는데
// 어떻게 값 내부의 프로퍼티의 값 변화가 가능한가?

// obj 에는 object reference 주소가 할당되어 있다.
// 더 이상 여기에는 다른 값의 할당이 불가능하다.
const obj = {
    name: 'yongsu',
    age: 5
}

// 아래와 같이 불가하다 왜냐하면 object reference 주소가 할당된
// 변수가 잠겨있기 때문이다.
obj = {
    name: "su",
    age: 10
}

// reference 자체를 다른 reference로 변경하는 것은 불가능하다
// 대신에 obj가 가리키고 있는 name을 다른 것으로 변경하는 것은 가능하다
// 왜냐하면 이 obj 공간은 잠겨있어 변경이 불가하지만,
// reference가 가리키고 있는 것을 이용해서 프로퍼티의 변경이 가능하다
// const를 사용한다는 것은 상수 변수가 담겨있는 통 자체의 변경이 불가하다를 의미한다.
// obj에는 변경 불가한 주소값이 있지만, obj가 담고있는 reference가 가리키고 있는 주소에 있는 값은 변경이 가능하다

// 집 주소는 변경이 불가능하지만, 
obj.name = 'JavaScript';
