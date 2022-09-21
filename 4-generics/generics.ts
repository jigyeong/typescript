// 문제점
function loggingOnlyTwoType(text: string | number){
    console.log(text);
    return text;
}
//loggingOnlyTwoType(text).split(''); // number type 일 수도 있어 Error 발생

// generics
function logging<T>(text: T):T {
    console.log(text);
    return text;
}

logging<string>("Hello");
logging<number>(1);
logging<boolean>(true);