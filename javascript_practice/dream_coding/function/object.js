// Object literal {key: value}
// new Object()
// Object.create()
// key - 문자,숫자,문자열, 심볼
// value - 원시값,객체(함수)

let apple = {
    name: 'apple',
    hello: '✋',
    0:1,
    ['hello-bye1']:2
}

apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

//속성, 데이터에 접근하기 위해서는  객체이름.key 하면 왼쪽 값 접근 가능

//속성 삿ㄱ제 delete
delete apple.hello;
console.log(apple);