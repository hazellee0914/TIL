##  "JavaScript TypeError: Cannot read property 'style' of null" 

- 'You are running the script too early before the document has been loaded and thus this can't be found.'
- Document load 되기 전에 실행 되어서 뜨는 오류!!
- defet 추가


```
  <script src="main.js" defer></script>
```


## event.preventDefault();

- 반응협 웹에서 스크롤 & 드래그라든가 액션이 일어날때 
- 크롬 콘솔에서 위와 같은 에러가 발생할 경우

```
178[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See <URL>
```

-  passive: false 를 추가
1.true일 경우, 이 수신기 내에서 preventDefault()를 절대 호출하지 않을 것임을 나타내는 불리언 값입니다. 
이 값이 true인데 수신기가 preventDefault()를 호출하는 경우, 사용자 에이전트는 콘솔에 경고를 출력하는 것 외에 아무런 동작도 하지 않습니다. 
명시하지 않을 경우의 기본 값은 false지만, Safari와 Internet Explorer를 제외한 브라우저에서 wheel (en-US), mousewheel (en-US), touchstart, touchmove (en-US) 이벤트에서의 기본 값은 true입니다.

```
{ passive: false }
```
