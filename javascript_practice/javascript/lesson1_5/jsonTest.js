//프로퍼티에 ""(쌍따옴표)가 있으면 JSON이고,
// 프로퍼티에 어떠한 따옴표도 없으면 JS Object이다.
// JSON.stringfy() : JS Object를 JSON형식으로 변환
// JSON.parse(): JSON을 JS Object로 변환

var user = { name: '한동석', age: 20 };
var userJson = JSON.stringify(user);
console.log(userJson);
console.log(JSON.parse(userJson));

//상품명과 가격을 JSON으로 만든다.
// 위 JSON을 JS객체로 변환한다.
// 각각의 프로퍼티를 출력한다.
// JSON으로 변환한 뒤 출력한다.

var product = `{ "product": "dish", "price": 20000 }`;
var productNjson = JSON.parse(product);

console.log(product);
console.log(productNjson);
