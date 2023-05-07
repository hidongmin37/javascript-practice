//상품명, 가격,재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array객체에 모두 담는다.
//JSON으로 변경시킨다.

function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
}

let products = new Array();
products.push(new Product('빵', 1500, 5));
products.push(new Product('담배', 4500, 2));
products.push(new Product('핫도그', 3000, 5));

let productsJSON = JSON.stringify(products);
console.log(productsJSON);

let file = require('fs');
file.writeFile('product.json', productsJSON, 'utf-8', function (e) {
  console.log(e ? e : '출력 성공');
});
file.readFile('product.json', 'utf-8', function (e, content) {
  if (e) {
    console.log(e);
  } else {
    JSON.parse(content).forEach((v) => {
      console.log(v.name);
      console.log(v.price);
      console.log(v.stock);
    });
  }
});
