/// 함수를 클래스로 바꿔서 넣음

class Fruit{
    constructor(name,emoji){
        this.name=name;
        this.emoji=emoji;
  
    }
    display(){
        console.log(`${this.name}: ${this.emoji}`);
}
// 생성자함수에서는 자동으로 return이 됨
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','🍎')
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange','🍊')

console.log(apple);
console.log(orange);
orange.display();