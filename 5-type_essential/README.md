# 타입 단언

## 1
아무 장치 없이 div를 선택할 경우 null 일 경우를 처리해야한다.
```javascript
  let div = document.querySelector('div')
```

```javascript
  if(div){
    div.innerHTML;
  }

  div?.innerHTML;
```

## 2
타입 단언을 할 경우 null이 아니라고 가정한다.
```javascript
  let div2 = document.querySelector('div') as HTMLDivElement;
  div2.innerHTML;
```