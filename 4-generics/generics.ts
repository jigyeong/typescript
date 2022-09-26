// 문제점
function loggingOnlyTwoType(text: string | number){
    console.log(text);
    return text;
}
//loggingOnlyTwoType(text).split(''); // number type 일 수도 있어 Error 발생

// generics
function logging<T>(text: T):T {
    // 어떤 타입이 들어올지 현재는 알  수 없음
    // console.log(text.length); // 그래서 length 를 사용할 수 없음
    return text;
}

logging<string>("Hello");
logging<number>(1);
logging<boolean>(true);

interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T):T{
    text.length;
    return text;
}

// logTextLength(10) // 사용못함
logTextLength({length:10}) // 이렇게 사용함

// 제네릭 타입 제한 keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T):T{
    // ShoppingItem 인자 (name, price, stock) 중 한가지 키만 T 로 사용 가능
    return itemOption;
}

getShoppingItemOption("name")