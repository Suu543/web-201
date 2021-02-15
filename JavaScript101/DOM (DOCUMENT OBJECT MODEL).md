# DOM (DOCUMENT OBJECT MODEL)

DOM을 이해하기 위해서는, Browser에 나타나는 모든 것은 `object`로 나타난다는 것을 명심해야한다.

`Object`는 `object, array, and function` 이 세 부류가 모두 될 수 있지만, 이 중 첫 번째 분류인 `object`를 의미한다. 

#### Document  + Object - (Properties + Methods) + Model

### DOM Hierarchy

DOM은 HTML을 계층(Hierarchy) 구조에 따라 그린다.

예를 들면,

회사의 조직도가 좋은 예시가 될 수 있다.

테슬라의 회장은 일론 머스크다

그 밑에 다양한 부서의 장이 나올 것이고, 이것을 어떤 표로 표현하면 계층구조가 쉽게 이해될 것이다.

![조직계층구조 이미지 검색결과](https://imgscf.slidemembers.com/docs/1/1/339/organization_hierarchy_chart_338150.png)

```html
<html>
    <head>What is DOM</head>
    <body>
        <h1>DOM Hierarchy</h1>
        <p>Did you know what the default width of an input box is...</p>
        <!-- First Form -->
        <form>
            First Name: <br />
            <input type="text" />
            <br />
        </form>

        <!-- Second Form -->
        <form>
            <input type="checkbox" name="happy" checked> Happy <br />
            <input type="checkbox" name="sad" /> Sad <br />
            <input type="submit" value="submit">
        </form>
    </body>
</html>
```

##### 위 HTML을 계층 구조로 표현하면 다음과 같다

```javascript
// window는 모든 것의 신이라 생각할 수 있다 웹에서
window 
```

(각 탭은 자기만의 window instance를 가지고 있다.)

- window가 무엇인지 알아보려면 Chrome DevTools의 console에서 window를 검색해보면 된다.
  // 엄청나게 많은 수의 프로퍼티와 메소드를 확인할 수 있을 것이다.

```javascript
// history method를 찾아보자
window.history;
// 이 안에 back 이라는 메소드를 실행해보자
window.history.back();
```

- window 는 closed, frames, history, document 등 웹의 제공하는 수많은 기능에 이용되는 프로퍼티로 구성된다. 이 중 가장 중요한 것은 document 프로퍼티다.

```javascript
window 
  |
  |
  v
document 

// 이것은 그냥 object 전체를 간략하게 보여주는 것이고, 실제로는 여기에 수많은 프로퍼티와 메소드가 존재한다.
window.document

console.log() // 무엇이든 간에 string으로 출력한다
console.dir(document) // object로서 결과를 출력한다 - 이용할 수 있는 수많은 프로퍼티와 메소드를 확인할 수 있다.
```

여기서 다음과 같은 의문이 생길 수 있다. 

`window`를 그냥 입력하면 모든 `method`와 `properties`가 존재하는데, 왜 `document`는 `console.dir(document)`와 같은 방식으로 입력을 해야하는가?

`window`는 web에서 모든 것의 신과 같은 존재다. 그렇기 때문에 `window`를 입력하든 `console.dir(window)`를 입력하든 똑같은 결과를 얻을 수 있다는 것을 알 수 있다. 모든 것을 표현하는 것이 `window` 그 자체이기 때문에 달리 표현될 방법이 없다.

반면에, `document`의 경우 `window object` 중 하나이다. 또한 `document`는 크게 두 가지로 표현된다

- Actual DOM
- Document의 properties와 methods

이 상황에서 `document` 만을 입력했을때 `browser`는 둘 중 어느 방식으로 `document`를 이해해야하는지 결정해야한다. 그래서 `browser`는 내부적으로 가정을 하고 `document`를 `console.log(document)`를 실행한다. 결과 적으로 첫 번째 경우이 `Actual DOM`이 출력되는 것을 확인할 수 있다. 

여기서 하나 더 추가하자면, `console` 또한 `window object` 의 프로퍼티 중 하나이다. 이것은 `window.console`  프로퍼티가 `Console object`의 `reference`를 리턴한다는 것을 알 수 있다. 이것은 

`window`는 `browser`에서 유일한 것이기 때문에 어떤 방식으로 작성하던 `window object`가 가지고 있는 모든 프로퍼티와 메소드를 리턴한다.

### DOM 계층 구조 요약

```javascript
                                        window
                                          |
                                          |
                                          v
                                        document
                                          |
                                          |
                                          v
                                         html 
                                          |
                                          |
                                          v
                             -----------------------------
                             |                           |  
                             v                           v
                            head                        body
                             |                           |
                             |                           |
                             v                           v
                            title                  h1, p , form, form



// HTML Collection 형태의 배열안에 두 개의 form 태그를 확인할 수 있다
document.forms

// 기존에 생성한 HTML을 확인하면 두 개의 form을 확인할 수 있다.
// 이 결과 값을 확장해보면, form 태그 내부의 input 태그 등에 접근할 수 있다.
```

DOM API를 사용해서 브라우저에게 무엇을 페이지에 보여줘야하는지 전달할 수 있다.

### BOM (Browser Object Model)

BOM(Browser Object Model 의 약자)

 \- 브라우저에 대한 모든 내용을 담고있는 객체. 브라우저에 관련 된 내용 모두

 \- 뒤로가기, 북마크, 즐겨찾기, 히스토리, URL정보 등..

 \- 브라우저가 가지고 있는 정보를 따로 객체화 시켜서 관리함

모든 내용은 https://www.w3schools.com/js/ 을 바탕으로 작성하였다.

`console object`는 `browser console`에 접근할 수 있게 해준다. 

`Console`은 `window object`의 일부 중 하나이다. `window object`는 `Browser Object Model`에 의해서 제공된다.   

`BOM`은 `JavaScript`를 이용해 페이지 내용 이외의 것에 대해 `browser`와 소통할 수 있게 해준다.

```javascript
                              window (entire browser)
                                        |
                   |                                        |
                   v       									v
	 			document							navigator (info about browser)
                   |								location (current URL)
                   v								screen (info about user's screen)
				Your Website						history (info about user's history)
```



## DOM 

`DOM`은 `document object`로 계층 구조를 가지고 있다. 모든 웹사이트는 `DOM` 이라 불리는 `HTML Document`로 구성되어있다. 이 모델은 `JS (and other languages)`가 `elements & text`에 접근할 수 있게 해준다.

`DOM`은 프로그래밍 언어가 아니다.

물론 `DOM`에는 `JavaScript`만 접근할 수 있는 것은 아니다. 왜냐하면 애초에 `DOM`은 프로그래밍 언어에 독립적으로 구성되었기 때문이다. 하지만 일반적으로 `JavaScript`를 이용해 `DOM`에 접근해 `HTML`을 변경하기 때문에 `JavaScript`만 가능한 줄 안다. `Python`과 같은 언어로도 접근할 수 있다. 예를 들면 XML을 이용해 접근할 수 있다. 

```python
import xml.dom.minidom as m
doc = m.parse("c:\test\example.xml")
p_list = document.getElementsByTagName('paragraph')
```

그냥 가능하다고만 알자. 사용 할 일이 없으니 따로 테스트 하지는 않겠다.

### DOM은 HTML과 똑같지 않다

무엇이 `DOM`인지 알아보는 것보다, 무엇이 `DOM`이 아닌지 알아보는게 더 쉬울 것이다.

1. `HTML`은 `DOM`이 아니다

   - Errors: DOM은 제대로 작성된(valid) 한 document에 대한 인터페이스 역할을 한다. DOM을 생성하는 과정에서 브라우저는 자동으로 적절한 형태로 HTML을 고친다 물론 실제 HTML에는 반영되지 않는다.

   ```html
   <html>
       Hello
   </html>
   ```

    `html`태그 내부에 위와 같이 hello를 작성하면 잘못된 방식의 정의법이다. 그럼에도 `DOM`에는 `body` 부분에 `#text Hello`가 정의되어 있는 것을 확인할 수 있다.

   ```html
   Hello
   ```

   만약 HTML 태그없이 그냥 Hello를 적었다고 생각해보자. 그럼에도 불구하고 브라우저는 이것을 <body>Hello</body>에 등록한 것을 알 수 있다. 또한 DOM은 이 형태를 기준으로 구성된다.

   ```html
   <p>Hello
   <li>Coke
   ```

   위와 같이 `Closing Tag`없이 HTML을 작성해도 브라우저는 알아서 `Closing Tag`를 붙여 완성하고, 이것을 기준으로 DOM이 구성된다.

   ```html
   <table>
       <tr>
       	<td>One</td>
       </tr>
   </table>
   ```

   위 HTML은 올바른 방식으로 정의되었다 (다만, `thead`와 `tbody`)를 별도로 명시해주지 않았다. 이 경우 브라우저는 DOM을 구성할 때 `tbody`를 생성하고 그곳에 `tr`과 `td`를 붙인다.

   이러한 것들을 간주했을때 `dom`은 HTML과 같지 않다는 것을 알 수 있다.

   - JavaScript

   ```html
   Hello.
   <script>
   	let newPara = document.createElement('p');
       newPara.innerHTML = "I'm new";
       let body = document.querySelector('body');
       body.appendChild(newPara);
   </script>
   ```

   위와 같이 코드를 작성하고 DOM을 확인하면, body 태그에 script, p 태그가 있고 p 태그의 content에는 I'm new가 담겨 있는 것을 확인할 수 있다. 이러한 이유에서 HTML은 DOM이 아닌 것을 알 수 있다.

   2. `Browser`에서 당신이 보는 것은 `DOM`이 아니다

   ```html
   <html>
       <head></head>
       <body>
           <h1>
               Its not what it seems!
           </h1>
           <p style="display: none;">
               I'm still in the DOM
           </p>
       </body>
   </html>
   ```

   비록 브라우저 화면에는 I'm still in the DOM이 보이지 않음에도, DOM에는 p 태그가 있는 것을 확인할 수 있다.

   3. `DevTools`에서 당신이 보는 것도 DOM이 아니다

   `DevTools`은 DOM과 가장 비슷하게 보이지만 DOM이랑 완전히 똑같은 것으로 볼 수없다

   ex) `CSS pseudo-elements` `::before ::after`

   ### Pseudo Elements

   ```html
   <html>
       <head></head>
       <body>
           <h1 class="heading">
               /* 여기에 asterisk를 삽입해보자 pseudo element를 이용해서 */
               Pseudo Elemts Are Weired
           </h1>
           <p>
               lorem....
           </p>
       </body>
   </html>
   ```

   - **::first-letter**
   - **::first-line**
   - **::before**
   - **::after**
   - **A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of an element(s)**

   ```css
   ::first-letter
   ::first-line
   ::before
   ::after
   
   selector::pseudo-element {
       property: value;
   }
   
   / * 
   FYI: a pseudo class consists of one : and is usually CSS that is applied dynamically (e.g. :first-child)
   */
   ```

   ```html
   <html>
       <head>
       	<style>
               h1.heading::before {
                   content: '*';
               }
               
               p::first-line {
                   color: red;
               }
           </style>
       </head>
       <body>
           <h1 class="heading">
               /* 여기에 asterisk를 삽입해보자 pseudo element를 이용해서 */
               Pseudo Elemts Are Weired
           </h1>
           <p>
               lorem....
           </p>
       </body>
   </html>
   ```

   - `DOM`은 `pseudo elements`를 가지고 있지 않다.  `DOM`은 엄격하게 말해서 `HTML`로만 구성되어있다. 그러므로 CSS를 제외한다. 단, 유일한 예외는 개발자 도구의 Elements에서 `::before ::after`중 사용한 것이 처음에 나온 경우를 제외하고는 반영하지 않는다.

























