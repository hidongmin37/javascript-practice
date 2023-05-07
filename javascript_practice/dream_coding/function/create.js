// const apple ={
//     name: 'apple',
//     display: function(){
//         console.log(`${this.name}: 🍎`);
//     }
// }

// apple.display();


// const orange ={
//     name: 'orange',
//     display: function(){
//         console.log(`${this.name}: 🍊`);
//     }
// }


// 생성자 함수
function Fruit(name,emoji){
    this.name=name;
    this.emoji=emoji;
    this.display = ()=>{
        console.log(`${this.name}: ${this.emoji}`);
}
// 생성자함수에서는 자동으로 return이 됨
}
const apple = new Fruit('apple','🍎')
const orange = new Fruit('orange','🍊')

// console.log(apple);
// console.log(orange);
orange.display();