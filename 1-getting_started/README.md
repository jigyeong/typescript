1. typescript 설치

```
npm i typescript -g
```

2. compile : ts->js 
```
tsc index.ts
```

3. make tsconfig.json
```javascript
{
    "compilerOptions": {
        "allowJs": true, // 자바스크립트 허용
        "checkJs": true, // js 파일 오류검사
        "noImplicitAny": true // 최소 'any' 타입이라도 필요
    }
}
```