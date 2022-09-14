# Type Basic

#### 1. 문자열 선언
```javascript
let str:string = 'hello';
```

#### 2. 숫자 선언
```javascript
let n:number = 10;
```

#### 3. 배열 선언
```javascript
let arr:Array<number> = [1,2,3];
let heros:Array<string> = ['A','S'];
let items:number[] = [1,2,3];
```

#### 4. 튜플 ( 배열 인덱스의 타입까지 정의 가능 )
```javascript
let address:[string, number] = ['str', 100];
```

#### 5. 객체
```javascript
let obj: object = {};

let person: {name: string, age: number} ={
    name: 'jigyeong',
    age: 1000
}
```

#### 6. 진위값
```javascript
let show: boolean = true;
```


# Function 

#### 기본적인 사용 방법
```javascript
function sum(a: number, b: number) : number{
    return a+b;
}

sum(3,4);
sum(3,4,5); // [Error] 'Expected 2 arguments, but got 3.'

```


#### 파라미터를 옵션으로 두고 싶을 때
```javascript
function log(a: string, b?: string, c?: string) {
    // b,c 는 옵션
}

log('aa'); // 사용 가능
log('aa', 'bb');
```