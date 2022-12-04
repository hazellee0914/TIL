##  "JavaScript TypeError: Cannot read property 'style' of null" 

- 'You are running the script too early before the document has been loaded and thus this can't be found.'
- Documentrk load 되기 전에 실행 되어서 뜨는 오류!!
- defet 추가


```
  <script src="main.js" defer></script>
```
