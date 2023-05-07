// class Tiger {
//     constructor(color){
//         this.color = color;
//     }

//     eat(){
//         console.log('먹는 중')
//     }
//     sleep(){
//         console.log('자는 중')
//     }
// }

// class Dog {
//     constructor(color){
//         this.color = color;
//     }

//     eat(){
//         console.log('먹는 중');
//     }
//     sleep(){
//         console.log('자는 중');
//     }
//     play(){
//         console.log('노는 중');
//     }
//     walking(){
//         console.log('산책 중');
//     }
// }

class Animal{
    constructor(color){
        this.color = color;
    }

    eat(){
        console.log('먹는 중');
    }
    sleep(){
        console.log('자는 중');
    }
}

class Tiger extends Animal {}

const tiger = new Tiger('백색');
console.log(tiger);
console.log(tiger.color);
tiger.sleep();
tiger.eat();


class Dog extends Animal {

    // 주의할 점은 Animal에 대해서 기존 받아온 color도 한번 더 써줘야 한다.
    constructor(color,ownerName){
        super(color); //부모 생성자의 컬러를 전달
        // 내가 상속하고 있는 부모 클래스를 가리킴
        //Animal에 있는 생성자(부모클래스에 있는 생성자)의 컬러를 전달해서 자식클래스에 생성자에 전달
        this.ownerName = ownerName;
    }
    eat(){
        super.eat(); // 부모에 있는 것을 유지하고 나서 
        console.log('허겁지겁 냠냠 먹는 중') // 필요한 기능 구현
    } //자식 클래스에서 부모 클래스에 있는 것을 덮어씌운다.
    play(){
        console.log('노는 중');
    }
    walking(){
        console.log('산책 중');
    }

}

const dog = new Dog('코코색','동민');
console.log(dog);
console.log(dog.color);
dog.sleep();
dog.eat();
dog.walking();
dog.play();
