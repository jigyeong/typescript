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

let user: Developer = {
    name : 'jigyeong',
    age: 30,
    language: 'ts'
}