어떤 프로그래밍 언어를 배우던 가장 먼저 해야 할 것은 `"Hello World!"`를 화면에 출력해 보는 것이다.

1. `JavaScript`에 필요한 환경설정
2. 효율적으로 `script` 파일을 `HTML`에 삽입하는 법



큰 그림을 바라보고, 전반적인 것을 이해해보자

## Hello World를 출력해보자!

1. 원하는 폴더에 `JavaScript`이라는 이름의 폴더를 하나 생성한다.
2. `main.js`라는 파일을 하나 생성한다.
3. `main.js` 파일에 `console.log("Hello World");` 출력한다.
4. `nodejs`에는` JavaScript V8` 엔진이 있기 때문에 `JS` 코드를 브라우저 없이 실행할 수 있다.
5. 우리는 브라우저를 이용해 출력해보자.



**Web API (Application Programming Interface)**

- 이것은 `JS` 언어 그 자체에 포함된 것이 아닌 브라우저가 제공하는, 브라우저가 이해할 수 있는 함수다. 
- `NodeJS`와 `Web API`는 동일한 `console`함수를 가지고 있기 때문에 양쪽에서 모두 `Hello World!`를 출력할 수 있다.

https://developer.mozilla.org/ko/docs/Web/API/Console_API



### Dev Tools

개발자 도구에서 `Console`을 이용하면 공부할 때, 일할 때 유용하게 사용할 수 있다.

- 동작으로 요소를 검사하고, 붙여넣기 등 간단한 작업을 할 수 있다.



### Sources Tab

나중에 `Debugging`을 할 때 유용하게 사용할 수 있다.

나중에 차근히 하나씩 배워가보자



### JavaScript 공식사이트 = ecma-international.org

위 사이트는 다소 읽기 힘들어서 `developer.mozilla.org (called MDN)` 를 통해 공부하는 것이 좋다.



### async vs defer

`HTML`에서 `JS`를 포함할 때 어떻게 포함된 것이 효율적인지 알아보자.

현재 아래 코드는 `head`안에` script`가 포함되어 있는 것을 볼 수 있다. 이렇게 했을 때 어떤 순서대로 사용자에게 페이지가 보이게 될까?

![image-20201230213227510](C:\Users\jos50\AppData\Roaming\Typora\typora-user-images\image-20201230213227510.png)

1. `head` 내부에 `script`를 포함한 경우
2. `browser`가 `html`코드를 한 줄씩 분석한다
3. 이후 `css`를 이용해 `DOM` 요소와 병합한다
4. `HTML`을 `Parsing`하면서 `script` 태그를 보고 `main.js`를 다운받아야하네 이해한다
5. `HTML Parsing`을 잠시 멈추고 필요한 `JS` 파일을 서버에서 다운받은후
6. 다시 `HTML Parsing` 단계로 넘어간다

이 방법의 문제는 `JS` 파일이 크고, 인터넷이 느리다면 사용자가 페이지를 보는데 오래 걸린다. 이런 방법 대신에 많이 사용하는 방법이 아래와 같이 `body `내부에 `script` 태그를 이용한 방법이다.



![image-20201230213515223](C:\Users\jos50\AppData\Roaming\Typora\typora-user-images\image-20201230213515223.png)

1. 모든 `HTML` 파일을 `Parsing` 한다
2. 마지막에 `main.js`를 보고 이 시점에 `main.js` 파일을 해석한다
3. 사용자가 기본적인 `HTML` 컨텐츠를 빨리 본다는 장점이 있지만, 웹사이트다 JS에 의존적이라면 사용자가 정상적인 페이지를 보기 전 까지는 `fetching + executing` 시간이 오래 걸린다.

이 방법 대신에 사용할 수 있는 방법은 `async` 방식을 사용하는 것이다.

![image-20201230213739954](C:\Users\jos50\AppData\Roaming\Typora\typora-user-images\image-20201230213739954.png)

1. `async`는 `boolean type`의 속성이다.
2. 이는 `Parsing HTML` 하는 동안에 병렬적으로 `Fetching`을 할 수 있다.
3. `main.js`가 다운로드가 다 되면 `parsing HTML`을 멈추고 실행한다.
4. 이 장점은 `body` 끝에 사용하는 것보다 다운로드 시간을 절약할 수 있다.
5. 조작하는 시점에 `HTML`에 우리가 원하는 요소가 정의되어있지 않은 경우 위험할 수 있다.

![image-20201230214012172](C:\Users\jos50\AppData\Roaming\Typora\typora-user-images\image-20201230214012172.png)



1. `Parsing HTML`을 하다가 `script defer`를 보고 애를 다운로드 받아두고,
2. `Parsing HTML`을 끝마치고 다운한 `JS` 파일을 실행한다.

![image-20201230214143317](C:\Users\jos50\AppData\Roaming\Typora\typora-user-images\image-20201230214143317.png)

다수의 `async`를 사용하면 정의된 순서에 상관없이 준비된 순서대로 먼저 되기 때문에 순서가 중요한 경우 문제가 될 수 있다.

![image-20201230214224521](C:\Users\jos50\AppData\Roaming\Typora\typora-user-images\image-20201230214224521.png)

defer는 미리 다 준비해두고 정의한 순서대로 실행하기 때문에 defer가 가장 좋다는 것을 알 수 있다.

```javascript
// Whole-script strict mode syntax
// JavaScript 언어를 만들 때 빨리 만들어야했다. 하지만 유연하다는 것은 때로는 위험하다는 것을 의미한다. 
// 예를 들면, 선언되지 않은 변수를 사용하거나, 프로토타입을 변경하는 등. 이러한 비상식적인 것을 사용하지 못하게 방지해주는 역할을 한다.
// Added ECMAScript 5
'use strict';

a = 6;
console.log('Hello World!');
```











