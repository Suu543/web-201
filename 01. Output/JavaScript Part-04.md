# JavaScript Array Iteration (배열순회)

각 배열 요소에 대해 한 번씩 함수를 호출한다. 즉, 아래 예시의 경우 다섯 번의 함수 호출이 발생한다.

```html
<!DOCTYPE html>
<html>
    <body>
        <h2>forEach</h2>
        <p>각 배열 요소에 대해 한 번씩 함수를 호출한다.</p>
        <p id="demo"></p>
    </body>
    <script>
       var txt = "";
       var numbers = [45, 4, 9, 16, 25];
       numbers.forEach(myFunction);
       document.getElementById("demo").innerHTML = txt;
        
       function myFunction(value, index, array) {
           txt = txt + value + "<br />";
       }
    </script>
</html>
```



