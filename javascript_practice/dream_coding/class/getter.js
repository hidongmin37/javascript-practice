// 접근자 프로퍼티(Accessor Property)

class Student {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        // this.fullName= `${this.lastName} ${this.firstName}`;
        // 이건 업데이트가 바로 불가능
    }
    // 이름과 성이 변경이 되어도 업데이트를 바로 하고싶을때는 함수를 적용
    get fullName(){
        return `${this.lastName} ${this.firstName}`
    }
    set fullName(value){
        console.log(value)
    }

}

const student = new Student('수지','김')
student.firstName ='안나';
console.log(student.firstName)
// console.log(student.fullName()) // get 을 해줘야 괄호 안써줄 수 있음. 프로퍼티처럼
//console.log(student.fullName())
student.fullName = '김철수'

console.log(student.fullName)