# DOM (Document Object Model)
웹 페이지가 로드될 때 브라우저는 페이지의 Document Object Model을 생성한다. HTML DOM 모델은 Key: Value 형태의 객체구조로 구성된다. 아래 사진과 같은 형태를 `Tree of Nodes/Elements`라 칭한다. 

<img src="https://www.w3schools.com/js/pic_htmltree.gif" alt="DOM" />

해당 Object Model을 이용해서 JavaScript은 동적인(Dynamic) HTML을 조작할 수 있다. 조작은 크게 세 종류로 분류된다.

1. read (읽기 or 읽어오기)
2. write (쓰기 or 생성하기)
3. manipulate (조작하기 or 변경하기)

**The HTML DOM is a standard for how to get, change, add, or delete HTML elements.**

## HTML DOM Methods

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
    crossorigin="anonymous">
  <title>Task List</title>
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col s12">
        <div id="main" class="card">
          <div class="card-content">
            <span class="card-title">Task List</span>
            <div class="row">
              <form id="task-form">
                <div class="input-field col s12">
                  <input type="text" name="task" id="task" value="Walk the dog">
                  <label for="task">New Task</label>
                </div>
            </div>
            <input type="submit" value="Add Task" class="btn">
            </form>
          </div>
          <div class="card-action">
            <h5 id="task-title">Tasks</h5>
            <ul class="collection">
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li> 
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li> 
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
            </ul>
            <a class="clear-tasks btn black" href="">Clear Tasks</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
  <script src="app.js"></script>
</body>

</html>

```

### Vanilla JavaScript를 이용해 DOM Manipulation을 구현해보자.

```javascript
window // window object를 보면 document object가 window의 object 중 하나인 것을 확인할 수 있다.

let val;
val = document;
document; 

/*
<html lang="en">
    <head>...</head>
	<body>...</body>
</html>
*/

val = document.all;
[html, head, ...]
 
// index를 이용하면 접근할 수 있다. -
val = document.all[0];
val = document.all[1];
val = document.all[2];
val = document.all.length; // 43개의 요소 in DOM

// 키워드만 안다면 DOM의 모든 프로퍼티에 접근할 수 있다.
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Selectors를 사용하지 않고 요소를 선택할 수 있다. 
val = document.forms; // HTML Collection
val = document.forms[0]; // <form></form>
val = document.forms[1]; // undefined
val = document.forms[0].id;
val = document.forms[0].method;

// links
val = document.links;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

// images
val = document.images; // []

// script
val = document.scripts; 
val = document.scripts[2].getAttribute('src'); // app.js

// Array Conversion
let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
})
```

## HTMLCollection vs NodeList vs Array

#### HTMLCollection

`HTMLCollection`과 `NodeList`는 `DOM`조작시 자주 만나게 된다. 둘 다 출력된 결과는 배열처럼 생겨서 종종 배열의 메소드인 `forEach, map, 등`을 이용할 때 `Uncaught TypeError: scripts.forEach is not a function`를 마주하게된다. 그 이유는 `HTMLCollection`과 `NodeList`는 유사 배열이기 때문이다. 이것이 무엇인지 자세히 알아보자.

```javascript
// HTMLCollection을 Array로 변경할 수 있다.
let scripts = document.scripts;

// 현재 scripts는 HTMLCollection이기 때문에 Array에만 사용할 수 있는 forEach 메소드 사용이 불가하다
scripts.forEach(function(script) {
    console.log(script);
})

```

`HTMLCollection`은 `Document` 내에 순서대로 정렬된 노드의 컬렉션으로 `유사 배열`이다. `HTMLCollection`은 아래와 같이 `document.body.children or document.scripts`등을 이용해 얻을 수 있다.

```javascript
const HTMLCollection = document.scripts;
console.log(HTMLCollection); // [script, script, script]

// 아래와 같이 배열에서 제공하는 메소드를 사용하면 Uncaught TypeError가 발생한다. 그 이유는 HTMLCollection을 유사 배열이기 때문에 배열의 메소드에 접근할 수 없기 때문이다.
HTMLCollection.map(item => console.log(item));
HTMLCollection.forEach(item => console.log(item));
```

`HTMLCollection`과 같은 유사 배열을 두 가지 방법을 이용해 배열의 메소드에 접근하게 할 수 있다.

1. Array Destructuring
2. Array.from()

```javascript
const collection = document.scripts;

// Array Destructuring
[...collection].forEach(node => console.log(node));

// Array.from
Array.from(collection).map(node => console.log(node));
```

아래 HTML 페이지는 `document.body.children`에는 아래와 같이 각 `div` 태그는 고유한 `name`프로퍼티를 가지고 있습니다. `HTMLCollection`은 인덱스와 속성명으로 접근이 가능합니다. `collection[0`]` 외에도 ` `item()` 메소드를 사용할 수 있다.

```html
<body>
    <div name="first"></div>
    <div name="second"></div>
    <div name="third"></div>
</body>


<script>
   const collection = document.body.children;
   console.log(collection.first);
   console.log(collection.second);
   console.log(collection.third);
   console.log(collection[0]);
   console.log(collection[1]);
   console.log(collection[2]);
   console.log(collection.item(0));
   console.log(collection.item(1));
   console.log(collection.item(2));
</script>
```

#### NodeList

`element.childNodes` 혹은 `document.querySelectorAll` 메소드로 반환되는 `Node or element`의 모음이다. `NodeList` 또한 `HTMLCollection`처럼 유사 배열이다. 하지만 `forEach` 메소드를 사용할 수 있습니다. 단, `map, filter` 등의 메소드를 사용하려면 위에서 보여준 방법을 이용해 배열로 변화해 주어야합니다. 

#### childNodes vs querySelectorAll()

`element.childNodes`와 `querySelectorAll`은 둘 다 `NodeList`를 반환합니다. `Node.childNodes`의 경우 `DOM`의 변경사항을 실시간으로 반영하지만, `document.querySelectorAll`의 `NodeList`는 정적 콜렉션임으로, `DOM`이 변경되어도 `collection`의 내용에는 영향을 주지 않습니다.

```javascript
const staticNodeList = document.querySelectorAll('div');
const dynamicNodeList = document.body.childNodes;

console.log(staticNodeList);
console.log(dynamicNodeList);

const div = document.createElement('div');
document.body.appendChild(div);

console.log(staticNodeList);
console.log(dynamicNodeList);
```

# DOM Selectors For Single Elements

DOM에는 크게 단일 요소를 가져오는 방법과 다수의 요소를 가져오는 방법이 존재한다. 이번에는 단일 요소를 가져오는 방법에 대해서 알아보자.

### 1. document.getElementById

```javascript
// app.js

// document.getElementById() - Id를 이용해 특정 요소 하나를 가져오는 방법
console.log(document.getElementById('task-title'));

// 가져온 위 요소로 부터 데이터 추출하기
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className); // 없으면 추가해서 테스트

// 스타일 변경하기
document.getElementById('task-title').style.background = "#333";
document.getElementById('task-title').style.color = "#fff";
document.getElementById('task-title').style.display = "none";

// 내용 변경하기
document.getElementById("task-title").textContent = "Hello";
document.getElementById("task-title").innerText = "World";
// HTML을 추가하고 싶은 경우
document.getElementById("task-title").innerText = '<span style="color:red">Hello World</span>'

```

위와 같이 매번 `document.getElementById`를 사용하는 것은 번거롭다. 이 경우 변수에 `document.getElementById`를 담아서 수고를 덜 수 있다.

```javascript
const taskTitle = document.getElementById("task-title");
      
// 스타일 변경하기
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.display = "none";

// 내용 변경하기
taskTitle.textContent = "Hello";
taskTitle.innerText = "World";
// HTML을 추가하고 싶은 경우
taskTitle.innerText = '<span style="color:red">Hello World</span>'
```

### 2. document.querySelector

`document.querySelector`는 `document.getElementById` 보다 훨씬 더 강략한 기능을 제공한다. `document.querySelector`는 Id, class, tagName 등을 이용해 단일 요소에 접근할 수 있다.

```javascript
// app.js
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-titke'));
// 둘 이상의 h5가 존재한다면 첫번째 h5를 리턴한다.
console.log(document.querySelector('h5'));

// 첫번째로 발견되 li 태그에만 스타일이 적용된다.
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// 이 경우도 첫번째 odd 번째의 요소에만 스타일이 적용된다.
document.querySelector('li:nth-child(odd)').style.background = "purple";
```

# DOM Selectors For Multiple Elements

DOM에서 다수의 요소를 가져오는 방법에 대해 알아보자.

### 1. document.getElementsByClassName

```javascript
// app.js
const items = document.getElementsByClassName('collection-item');
console.log(items); // HTMLCollection
// 특정 요소에 접근하고 싶다면 배열의 인덱스를 이용할 수 있다.
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello World';

// 메소드를 chaining 할 수 있다.
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);
```

### 2. document.getElementsByTagName

```javascript
const lis = document.getElementsByTagName("li");

console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// lis는 유사 배열이기 때문에 오류 발생
// lis.reverse();

// Convert HTMLCollection into Array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index) {
    console.log(li.className);
    li.textContent = `${index}: Hello`
})

console.log(lis);
```

### 3. document.querySelectorAll()

`document.querySelectorAll`은 Id, class, tagName 등을 모두 이용해 다수의 요소에 접근할 수 있다. 대신 `document.querySelectorsAll`은 `NodeList`를 리턴하기 때문에 `forEach`메소드를 사용할 수 있다.

```javascript
const items = document.querySelectorAll("ul.collection li.collection-item");
console.log(items);

items.forEach(function(item, index) {
    item.textContent = `${index}: Hello`;
})

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

// 방법 1
liOdd.forEach(function(li, index) {
    li.style.background = "#ccc";
})

// 방법 2
for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';
}
```

# Traversing The DOM

DOM을 순회하는(up and down) 방법을 알아보자. 

```javascript
let val;

// Select First One
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get Child Nodes
// NodeList - 모든 자식 Node가 NodeList에 담긴다. text = line break를 의미한다. 
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// nodeType
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

// Get Children Element Nodes
// NodeList 대신에 HTMLCollection을 리턴한다. Text 없이 Element만 리턴
val = list.children;
val = list.children[1];
list.children[1].textContent = "Hello!";

// Children of Children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children;
val = list.children[3].children[0];

// text 포함해 출력
val = list.firstChild;
val = list.lastChild;
// text 포함하지않고 출력
val = list.firstElementChild;
val = list.lastElementChild;

// Count child elements - 자식요소 숫자 세기
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;

// Parent of Parent
val = listItem.parentElement.parentElement;

// Get Next Sibling
// text 포함
val = listItem.nextSibling;
// text 미포함
val = listItem.nextElementSibling;

// Get Previous Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling; // 없으면 null

// Mix next with previous sibling
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);
```

# Creating Elements

#### HTML 요소 생성하기

```javascript
// Create Element - 요소 생성
const li = document.createElement('li');

// Add Class - 클래스 추가
li.className = 'collection-item';

// Add Id - 아이디 추가
li.id = 'new-item';

// Add Attribute
li.setAttribute('title', 'New Item');

// Create Text Node and Append
li.appendChild(document.createTextNode('Hello World!'));

// Create New Link Element
const link = document.createElement('a');
// Add classes
link.className = "delete-item secondary-content";
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
```

# Removing & Replacing Elements

HTML 요소를 추가하고 변경하는 방법에 대해 알아보자.

```javascript
// Replace Element

// Create Element
const newHeading = document.querySelector('h2');
// Add ID
newHeading.id = 'task-title';
// Add New Text Node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element 
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// string
val = link.className;

// array
val = link.classList;
val = link.classList[0];

// test class가 추가됨
link.classList.add('test');

val = link;

// test class 제거됨
link.classList.remove('test');


// Attributes
val = link.getAttribute('href');

// Set Attribute 
link.setAttribute('href', 'http://google.com');

// Check if it has an attribute
val = link.hasAttribute('href');
val = link.hasAttribute('title');

link.setAttribute('title', 'Google');

val = link.hasAttribute('title');
val = link;

// Remove a specific Attribute
link.removeAttribute('title');
val = link;

console.log(val);
```

# Event Listeners & The Event Object

```javascript
// a 태그 이기때문에 기본 동작이 정의해둔 href로 넘어간다. 이것이 기본 동작인데 e.preventDefualt를 이용해 이 기본 동작을 방지할 수 있다. 결과적으로 console.log 결과를 출력할 수 있다.

document.querySelector('.clear-tasks').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Hello World');
});

// 함수를 정의해 두번째 인자로 줄 수 있다.
function onClick(e) {
    let val;
    
    val = e;
    
    // Event Target Element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;  // HTMLCollection 방식으로
    val = e.target.value;
    
    // 해당 요소에 click 이벤트가 발생했을때 아래와 같이 우리가 원하는 동작을 정의할 수 있다.
    e.target.innerText = "Hello";
    
    // Event Type
    val = e.type
    
    // Timestamp
    val = e.timeStamp;
    
    // Coordinates event relative to the window - 윈도우 기준
    val = e.clientY;
    val = e.clientX;
    
    // Coordinates event relative to the element - 요소 기준
    val = e.offsetY;
    val = e.offsetX;
    
    console.log(val);
}

document.querySelector('.clear-tasks').addEventListener('click', onClick);
```

# Mouse Events

```javascript
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
}

function runMouseMove(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    
    heading.innerHTML = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

// Click
clearBtn.addEventListener('click', runEvent);

// DoubleCLick
clearBtn.addEventListener('dbclick', runEvent);

// Mousedown
clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter
card.addEventListener('mouseenter', runEvent);

// Mouseleave
card.addEventListener('mouseleave', runEvent);

// Mouseover - 한 요소에 들어왔을때
card.addEventListener('mouseover', runEvent);

// Mouseout - over된 요소에서 다른 요소로 갔을때
card.addEventListener('mouseout', runEvent);

// Mousemove - 해당 요소에서 발생하는 어떤 mousemove에서든지 다 발동
card.addEventListener('mousemove', runMouseMove);


```

# Keyboad & Input Events

```javascript
const form = document.querySelector('form');
const taskInput = document.getElementById('task'); 
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear Input
taskInput.value = '';

function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
 	
    // Get Input Value
    console.log(taskInput.value);
    
    // Redirection 방지
    e.preventDefault();
}

form.addEventListener('submit', runEvent);

// input에 값을 입력할 때마다 발생

function runInputEvent(e) {
    console.log(`Event Type: ${e.type}`);
    
    console.log(e.target.value);
    
    heading.innerText = e.target.value;
}
taskInput.addEventListener('keydown', runInputEvent);
taskInput.addEventListener('keyup', runInputEvent);
taskInput.addEventListener('keypress', runInputEvent);

// Input에 값 입력하려고 클릭했을때
taskInput.addEventListener('focus', runInputEvent);

// Input에 값 입력끝나고 벗어날 때
taskInput.addEventListener('blur', runInputEvent);

// 오른쪽 마우스 CUT OR Ctrl + x 눌렀을때
taskInput.addEventListener('cut', runInputEvent);

// Ctrl + V 눌렀을 때
taskInput.addEventListener('paste', runInputEvent);

// Input과 관련된 Generalized Version
taskInput.addEventListener('input', runInputEvent);

// Change
// materialize link 잠시 주석처리
function runSelectEvent(e) {
    console.log(`Event Type: ${e.type}`);    
}
select.addEventListener('change', runSelectEvent);
```

# Event Bubbling & Event Delegation

이벤트를 관리하는 것은 modern web application 에서 굉장히 중요한 요소 중 하나다. 브라우저에서 자바스크립트를 이용해 개발하는 모든 개발자들은 어떻게 이벤트가 동작하고 Event Bubbling과 Event Delegation이 어떻게 동작하는지 이해함으로써 이벤트 관리를 최적화 할 수 있다.

### Event

Event Bubbling and Delegation에 대해 알아보기 전에, Events가 무엇인지 먼저 알아보자. 자바스크립트에서 사용자가 페이지와 상호작용한다. 이때 사용자가 페이지 위에서 하는 모든 행동은 이벤트라는 형태로 브라우저에게 인식된다. 이미 사용했을 경험이 있을지도 모르지만 각 이벤트에 응답하기 위해서는 각 이벤트에 대한 listener (or handler)를 설정해줘야한다. 아래 코드를 한 번 보자.

https://programmingwithmosh.com/javascript/javascript-event-bubbling-and-event-delegation/

```javascript
// Version #1
const resultPanel = document.getElementById('result');
const undoButton = document.getElementById('undo');
let undoClickCount = 0;
undoButton.addEventListener('click', () => {
     undoClickCount++;
     updateClickCount();
});
updateClickCount();
function updateClickCount() {
     resultPanel.innerText = `undo button click count: ${undoClickCount}`;
}
// 더 짧은 버전
document.querySelector('#undo').addEventListener('click', (e) => {
  console.log('This is the button id:', e.target.id);
});
```

### Event Bubbling

![img](https://cdn-images-1.medium.com/max/800/0*ricmcg8oi0BxgAbs.jpg)

한 요소에서 한 이벤트가 발생했을 때, 이 이벤트는 첫번째로 해당 listener or handler에서 실행되고 그리고 그 요소의 부모 그리고 최상위 부모의 listener or handler를 실행.

#### Form > DIV > P

```html
<style>
   body * {
      margin: 10px;
      border: 1px solid blue;
   }
</style>
<form onclick="alert('form')">Form
  <div onclick="alert('div')">DIV
     <p onclick="alert('p')">P</p>
  </div>
</form>
```

#### p 태그 부분 클릭

**alert p → alert div → alert form**

1. <p> 클릭 → 해당 요소의 listener or handler 실행
2. Event Bubbling때문에 <div> 클릭 → 해당 요소의 listener or handler 실행
3. 이후 부모 요소인<form> 클릭 → 해당 요소의 listener or handler 실행
4. 최종적으로 document object로 직행.

요약: <p> 태그 클릭시, p → div → form

이런 흐름을 ‘이벤트 버블링’이라고 부릅니다. 이벤트가 제일 깊은 곳에 있는 요소에서 시작해 부모 요소를 거슬러 올라가며 발생하는 모양이 마치 물속 거품(bubble)과 닮았기 때문입니다.

**모든 이벤트가 “bubbling” 되는 것은 아니다.**

- 예를 들면, **‘focus’ event**는 버블되지않는다.

#### Event Bubbling Practice

```javascript
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" type="text/css" href="./src//styles.css">
</head>
<body>
     <header id="header">
         <div id="account_links">
             <a href="#" id="signup">Sign Up</a>
             <a href="#" id="signin">Sign In</a>
         </div>
     </header>
     <script src="src/index.js"></script>
</body>
</html>
// index.js
document.getElementById('header').addEventListener('click', () => {
    console.log('This is header!');
});
document.getElementById('account_links').addEventListener('click', () => {
    console.log('This is account_links!');
});
document.getElementById('signup').addEventListener('click', () => {
    console.log('This is signup!');
});
document.getElementById('signin').addEventListener('click', () => {
    console.log('This is signin!');
});
```

![img](https://cdn-images-1.medium.com/max/800/1*uUadijc6-HBUS4SmO7GZrw.png)

**a > div > header**

#### signin click

**a > div > header**

- whitespace 부분을 클릭했을 때 어떠한 이벤트도 발생하지않는다.
- 초록색 부분을 클릭했을 때, 오직 header click event만 발생한다.
- 노란색 부분을 클릭했을 때, account_links div and header 두 곳 모두에 클릭 이벤트가 발생한다.
- 만약 signin or signup 두 링크 중 하나를 클릭했을 때, account_links div and header and link itselt의 클릭 이벤트가 발생한다.

### event.target

부모 요소의 핸들러는 이벤트가 정확히 어디서 발생했는지 등에 대한 자세한 정보를 얻을 수 있습니다.

이벤트가 발생한 가장 안쪽의 요소는 *타깃(target)* 요소라고 불리고, `event.target`을 사용해 접근할 수 있습니다.

`event.target`과 `this`(=`event.currentTarget`)는 다음과 같은 차이점이 있습니다.

- `event.target`은 실제 이벤트가 시작된 ‘타깃’ 요소입니다. 버블링이 진행되어도 변하지 않습니다.
- `this`는 ‘현재’ 요소로, 현재 실행 중인 핸들러가 할당된 요소를 참조합니다.

예시를 보면, handler or listener 는 `form.onclick` 하나밖에 없지만 이 handler or listener에서 폼 안의 모든 요소에서 발생하는 클릭이벤트를 ‘잡아내고(catch)’ 있습니다. 클릭 이벤트가 어디서 발생했든 상관없이 `<form>` 요소까지 이벤트가 버블링 되어 핸들러를 실행시키기 때문입니다.

`form.onclick` 핸들러 내의 `this`와 `event.target`은 다음과 같습니다.

- `this`(`event.currentTarget`) – `<form>` 요소에 있는 핸들러가 동작했기 때문에 `<form>` 요소를 가리킵니다.
- `event.target` – 폼 안쪽에 실제 클릭한 요소를 가리킵니다.

```html
// index.html
<body>
   <code>클릭하면 event.target과 this 정보를 볼 수 있습니다.</code>
   <form id="form">FORM
      <div> DIV
          <p> P
          </p>
      </div>
   </form>
</body>
// index.js
form.onclick = function(event) {
     event.target.style.backgroundColor = 'yellow';
     setTimeout(() => {
         alert('target = ' + event.target.tagName + ', this=' + this.tagName);
         event.target.style.backgroundColor = '';
     }, 0);
};
```

![img](https://cdn-images-1.medium.com/max/800/1*RCN0rVcMD3qTLkCp1OS_Eg.png)

#### p 태그 클릭시 아래와 같이 출력

**target = P, this=FORM**

#### div 태그 클릭시 아래와 같이 출력

target = DIV, this=FORM

#### Form 태그 클릭시 아래와 같이 출력

target = FORM, this=FORM

`<form>` 요소를 정확히 클릭했을 때는 `event.target`과 `this`가 같습니다.

### Stopping Bubbling

이벤트 버블링은 타깃 이벤트에서 시작해서 `<html>` 요소를 거쳐 `document` 객체를 만날 때까지 각 노드에서 모두 발생합니다. 몇몇 이벤트는 `window` 객체까지 거슬러 올라가기도 합니다. 이 때도 모든 핸들러가 호출됩니다.

그런데 핸들러에게 이벤트를 완전히 처리하고 난 후 버블링을 중단하도록 명령할 수도 있습니다.

이벤트 객체의 메서드인 `event.stopPropagation()`를 사용하면 됩니다.

아래 예시에서 `<button>`을 클릭해도 `body.onclick`은 동작하지 않습니다.

```html
<body onclick="alert(`버블링은 여기까지 도달하지 못합니다.`)">
  <button onclick="event.stopPropagation()">클릭해 주세요.</button>
</body>
```

[https://ko.javascript.info/bubbling-and-capturing](https://medium.com/r/?url=https%3A%2F%2Fko.javascript.info%2Fbubbling-and-capturing)

이벤트 버블링: DIV → FORM → BODY → HTML

이벤트 캡쳐링: HTML → BODY → FORM → DIV

## Event Capturing

`Event`에는 `Bubbling` 방식 이외에도 `캡쳐링(Capturing)`의 흐름이 존재한다. 실제 코드에서 자주 사용되지는 않는다. 하지만 종종 유용한 경우가 있다.

#### DOM Event Flow

1. `캡쳐링(Capturing)` - 이벤트가 하위 요소로 전파되는 단계
2. `타깃(Target)` - 이벤트가 실제 타깃 요소에 전달되는 단계
3. `버블링(Bubbling)` - 이벤트가 상위 요소로 전파되는 단계



#### Capturing 적용법

**캡처링 단계를 이용해야 하는 경우는 흔치 않기 때문에, 이전까진 주로 버블링만 설명했다. 캡처링에 관한 코드를 발견하는 일은 거의 없다.** `on<event>` 프로퍼티나 HTML 속성, `addEventListener(event, handler)`를 이용해 할당된 핸들러는 캡처링에 대해 전혀 알 수 없습니다. 이 핸들러들은 두 번째 혹은 세 번째 단계의 이벤트 흐름(타깃 단계와 버블링 단계)에서만 동작합니다.

캡처링 단계에서 이벤트를 잡아내려면 `addEventListener`의 `capture` 옵션을 `true`로 설정해야 합니다.

`capture` 옵션은 두 가지 값을 가질 수 있습니다.

- `false`이면(default 값) 핸들러는 버블링 단계에서 동작합니다.
- `true`이면 핸들러는 캡처링 단계에서 동작합니다.

공식적으론 총 3개의 이벤트 흐름이 있지만, 이벤트가 실제 타깃 요소에 전달되는 단계인 ‘타깃 단계’(두 번째 단계)는 별도로 처리되지 않습니다. 캡처링과 버블링 단계의 핸들러는 타깃 단계에서 트리거됩니다.

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>

  // elem.addEventListener(..., {capture: true})
  // 아니면, 아래 같이 {capture: true} 대신, true를 써줘도 됩니다.
  // elem.addEventListener(..., true)
    
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`캡쳐링: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`버블링: ${elem.tagName}`));
  }
</script>
```

이 예시는 문서 내 요소 '전체’에 핸들러를 할당해서 어떤 핸들러가 동작하는지를 보여줍니다.

<p>를 클릭하면 다음과 같은 순서로 이벤트가 전달됩니다.

1. `HTML` → `BODY` → `FORM` → `DIV` (캡처링 단계, 첫 번째 리스너)
2. `P` (타깃 단계, 캡쳐링과 버블링 둘 다에 리스너를 설정했기 때문에 두 번 호출됩니다.)
3. `DIV` → `FORM` → `BODY` → `HTML` (버블링 단계, 두 번째 리스너)

`event.eventPhase` 프로퍼티를 이용하면 현재 발생 중인 이벤트 흐름의 단계를 알 수 있습니다. 반환되는 정숫값에 따라 이벤트 흐름의 현재 실행 단계를 구분할 수 있죠. 하지만 핸들러를 통해 흐름 단계를 알 수 있기 때문에 이 프로퍼티는 자주 사용되지 않습니다.



**핸들러를 제거할 때 `removeEventListener`가 같은 단계에 있어야 합니다.**

`addEventListener(..., true)`로 핸들러를 할당해 줬다면, 핸들러를 지울 때, `removeEventListener(..., true)`를 사용해 지워야 합니다. 같은 단계에 있어야 핸들러가 지워집니다



**같은 요소와 같은 단계에 설정한 리스너는 설정한 순서대로 동작합니다.**

특정 요소에 `addEventListener`를 사용해 한 단계에 이벤트 핸들러를 여러개 설정했다면 이 핸들러들은 설정한 순서대로 동작합니다.

```javascript
elem.addEventListener("click", e => alert(1)); // 첫 번째로 트리거됩니다.
elem.addEventListener("click", e => alert(2));
```


이벤트가 발생하면 이벤트가 발생한 가장 안쪽 요소가 '타깃 요소(`event.target`)'가 됩니다.

- 이벤트는 document에서 시작해 DOM 트리를 따라 `event.target`까지 내려갑니다. 이벤트는 트리를 따라 내려가면서 `addEventListener(..., true)`로 할당한 핸들러를 동작시킵니다. `addEventListener(..., true)`의 `true`는 `{capture: true}`의 축약형입니다.
- 이후 타깃 요소에 설정된 핸들러가 호출됩니다.
- 이후엔 이벤트가 `event.target`부터 시작해서 다시 최상위 노드까지 전달되면서 각 요소에 `on<event>`로 할당한 핸들러와 `addEventListener`로 할당한 핸들러를 동작시킵니다. `addEventListener`로 할당한 핸들러 중, 세 번째 인수가 없거나 `false`, `{capture: false}`인 핸들러만 호출됩니다.

각 핸들러는 아래와 같은 `event` 객체의 프로퍼티에 접근할 수 있습니다.

- `event.target` – 이벤트가 발생한 가장 안쪽의 요소
- `event.currentTarget` (=`this`) – 이벤트를 핸들링 하는 현재 요소 (핸들러가 실제 할당된 요소)
- `event.eventPhase` – 현재 이벤트 흐름 단계(캡처링=1, 타깃=2, 버블링=3)

핸들러에서 `event.stopPropagation()`을 사용해 이벤트 버블링을 멈출 수 있습니다. 다만, 이 방법은 추천하지 않습니다. 지금은 상위 요소에서 이벤트가 어떻게 쓰일지 확실치 않더라도, 추후에 버블링이 필요한 경우가 생기기 때문입니다.

캡처링 단계는 거의 쓰이지 않고, 주로 버블링 단계의 이벤트만 다뤄집니다. 이렇게 된 데는 논리적 배경이 있습니다.

현실에서 사고가 발생하면 지역 경찰이 먼저 사고를 조사합니다. 그 지역에 대해 가장 잘 아는 기관은 지역 경찰이기 때문입니다. 추가 조사가 필요하다면 그 이후에 상위 기관이 사건을 넘겨받습니다.

이벤트 핸들러도 이와 같은 논리로 만들어졌습니다. 특정 요소에 할당된 핸들러는 그 요소에 대한 자세한 사항과 무슨 일을 해야 할지 가장 잘 알고 있습니다. `<td>`에 할당된 핸들러는 `<td>`에 대한 모든 것을 알고 있기 때문에 `<td>`를 다루는데 가장 적합합니다. 따라서 `<td>`를 다룰 기회를 이 요소에 할당된 핸들러에게 가장 먼저 주는 것입니다.

버블링과 캡처링은 '이벤트 위임(event delegation)'의 토대가 됩니다. 이벤트 위임은 강력한 이벤트 핸들링 패턴입니다. 다음 챕터에서 이를 다루도록 하겠습니다.

# Traversy Bubbling & Delegation

1. Bubbling

```javascript
// Event Bubbling - 부모 요소가 있고 그 부모 요소에 Event Handler가 있을때
document.querySelector('.card-title').addEventListener('click', function() {
    console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function() {
    console.log('card content');
});

document.querySelector('.card').addEventListener('click', function() {
    console.log('card');
});

document.querySelector('.col').addEventListener('click', function() {
    console.log('col');
});
```



2. Delegation

```javascript
// Delegation
const delItem = document.querySelector('.delete-item');

// Only The First Element Working
delItem.addEventListener('click', deleteItem);

function deleteItem() {
    console.log('delete Item');
}

// 문제는 이러한 상황에 새로운 요소를 추가해도 x 버튼을 눌러 요소를 삭제해도 첫번째 요소를 제외하고는 click 이벤트에 대한 어떠한 동작도 하지 않는 문제가 발생한다.

document.body.addEventListener('click', deleteItem);

function deleteItem() {
//     방법1
//     if (e.target.className === 'fa fa-remove') {
//  	   console.log('delete Item');    
//     }
    
//     방법2
//       if (e.target.parentElement.className === 'delete-item secondary-content') {
//           console.log('delete Item')
//       }
    
//     방법3
//         if (e.target.parentElement.classList.contains('delete-item')) {
//             console.log('delete Item');
//         }
    
//     방법4
    // Event Delegation은 li 태그와 같이 둘 이상의 요소가 공통된 클래스를 가지고 있고 동시에 공통의 부모를 가진경우 Event Listener를 부모에게 할당하고 내부에 조건문 등을 이용해 처리하는 기법이다.
           if (e.target.parentElement.classList.contains('delete-item')) {
               console.log('delete Item');
               // x를 클릭하면 i 태그인데 지우고 싶은 요소는 li 태그
               // i --> a --> li
               e.target.parentElement.parentElement.remove();
           }
}

```

# Local & Session Storage

1. 설명필요

```javascript
window

// localStorage & session 찾아보기

// LocalStorage vs Session
// 어떤 데이터 타입이든 String 변경해 위의 두 저장소에 저장하고 나중에 parse 하면된다.
// LocalStorage: 브라우저 닫아도 안사라진다.
// Session: 브라우저 닫으면 사라진다.

// Set LocalStorage Item
localStorage.setItem('name', 'John'); // LocalStorage 확인해보기
localStorage.setItem('age', '30');

// Set SessionStorage Item
sessionStorage.setItem('name', 'Su'); // 브라우저 닫았다 열으면 사라져있는 걸 확인할 수 있다

// Remove from storage
localStorage.removeItem('name');
localStorage.removeItem('age');

// Get From LocalStorage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
localStorage.setItem('name', 'John'); // LocalStorage 확인해보기
localStorage.setItem('age', '30');

// Clear LocalStorage
localStorage.clear(); // 따로 테스트 해보기

```

2. LocalStorage 활용하기

```javascript
// 아래 코드의 문제는 task가 쌓이지 않고 매번 새롭게 설정되는 것이다.
document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.getElementById('task').value;
    localStorage.setItem('task', task);
    alert('Task Saved!');
    
    e.preventDefault();
});

// 문제 해결 - 배열 이용하기
document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.getElementById('task').value;
    
    let tasks;
    
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.push(task);
    
    localStorage.setItem('task', JSON.stringify(tasks));
    alert('Task Saved!');
    
    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
    console.log(task);
});
```



















































