//접근 제어자

// private(#) -> 외부에서 접근이 불가능,(내부에서는 사용가능 외부에서는 사용불가)
// public (기본) -> 외부에서 볼 수 있고, 접근이 가능하고
// protected -> 외부에서 볼 수 없지만,상속된 자식 클래스에서만 접근이 가능
class Fruit{
    #name;
    #emoji;
    #type ='과일';
    constructor(name,emoji){
        this.#name=name;
        this.#emoji=emoji;
  
    }
    //인스턴스 레벨의 메서드
    display= ()=>{
        console.log(`${this.#name}: ${this.#emoji}`);
} // #filed는 외부에서 접근일 불가능하다.
// 생성자함수에서는 자동으로 return이 됨
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','🍎')
// apple.name ='orange'//=>말이 안돼
console.log(apple);

