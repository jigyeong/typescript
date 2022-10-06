let a = 'abc';

function getB(b=10){
    var c = 'hi';
    return b+c;
}

interface Dropdown<T>{
    value: T;
    title: string;
}

let shoppingItem: Dropdown<string> = {
    value: 'val',
    title: 'tit'
}

interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}


let detailedItem:DetailedDropdown<number> = {
    description: "",
    tag: 0,
    value: 0,
    title: ""
}

// (string | number | boolean)[]
let arr = [1,2,true,'string']

/** 
 * 
 * ## type assertion 
 * 
 * */
// arr2 = arr 
// <- arr2 type = arr type
let arr2 = arr as string[];

let div = document.querySelector('div')
if(div) {
    
}