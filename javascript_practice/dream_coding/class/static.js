/// static 정적 프로퍼티, 메서드

class Fruit{
    static MAX_FRUITS =4;
    constructor(name,emoji){
        this.name=name;
        this.emoji=emoji;
  
    }
    // 클래스 레벨의 메서드
    static makeRandomFruit(){
        return new Fruit('banana','🍌');
    }
    //인스턴스 레벨의 메서드
    display(){
        console.log(`${this.name}: ${this.emoji}`);
}
// 생성자함수에서는 자동으로 return이 됨
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','🍎')
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange','🍊')
// banana 
const banana = Fruit.makeRandomFruit();
console.log(apple);
console.log(orange);
orange.display();

