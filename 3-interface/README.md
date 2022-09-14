# Interface

> 정의
```javascript
interface User {
    age: number;
    name: string;
}
```

> 사용
```javascript
let user: User = {
    age: 30,
    name: "jigyeong"
}

function getUser(user: User){}
```


> age 만 정의 된 파라미터가 들어올 경우 에러 발생
```javascript
getUser({
    age: 31
})
```

> 함수 스펙에 활용
```javascript
interface SumFunction {
    (a:number, b: number): number
}

let sum: SumFunction;

sum = function(a: number, b: number){
    return a+b;
}
```

> 딕셔너리 패턴
```javascript
interface StringRegexDictionary{
    [key: string] : RegExp;
}

let obj: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/
}

Object.keys(obj).forEach(value=>{
    // type 추론 가능
})
```

> 인터페이스 확장
```javascript
interface Person {
    name : string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

let user: Developer = {
    name : 'jigyeong',
    age: 30,
    language: 'ts'
}
```