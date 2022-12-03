## Element.getBoundingClientRect()

- 반환 값은 padding과 border-width를 포함해 전체 엘리먼트가 들어 있는 가장 작은 사각형인 DOMRect 객체입니다.
- left, top, right, bottom, x, y, width, height 프로퍼티는 전반적인 사각형의 위치와 크기를 픽셀 단위로 나타냅니다. 
- width와 height가 아닌 다른 프로퍼티는 뷰포트의 top-left에 상대적입니다.


```
const special = document.querySelector('.special');
 special.addEventListener('click', (event) => {
  const rect = special.getBoundingClientRect();
      console.log(rect);
      console.log(`client: ${event.clientX}, ${event.clientY}`);
      console.log(`page: ${event.pageX}, ${event.pageY}`);
```

```
    const scrollBy = document.querySelector('.scroll-by');
    const scrollTo = document.querySelector('.scroll-to');
    const scrollInto = document.querySelector('.scroll-into');

    scrollBy.addEventListener('click',() => {
      window.scrollBy({top: 100, left: 0, behavior: "smooth"});
      // window.scrollBy(0,100);
    });
    scrollTo.addEventListener('click',() => {
      window.scrollTo(0, 100);
    });
    scrollInto.addEventListener('click',() => {
      special.scrollIntoView();
    });
```
