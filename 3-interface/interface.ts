interface SumFunction {
    (a:number, b: number): number
}

let sum: SumFunction;

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

/*
obj['css'] = 'c' // error
*/

interface Person {
    name : string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

interface User {
    name : string;
    type: string;
}

let user: Developer = {
    name : 'jigyeong',
    age: 30,
    language: 'ts'
}

function F(someone: Developer | User){
    //someone.type // (error)공통파라미터가 아니면 사용 불가
}

function F2(someone: Developer & User){
    someone.type // 공통파라미터가 아니어도 사용 가능
}

enum Answer{
    Yes ='Y',
    No='N'
}

function askQuestion(answer: Answer){
    if(answer===Answer.Yes){

    }
    if(answer===Answer.No){

    }
}
askQuestion(Answer.No)