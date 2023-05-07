// 정직원과 파트타임직원을 나눌 수 있는 클래스를 만들어보자.
// 직원들의 정보: 이름, 부서이름,한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원


class Employee{
    constructor(name,partName,workHourPerMonth,payRate){
        this.name =name;
        this.partName=partName;
        this.workHourPerMonth = workHourPerMonth;
        this.payRate = payRate;
    }

    calculatePay(){
        return this.workHourPerMonth*this.payRate
    }
}

class PrtEmp extends Employee{
    static #PAY_Per_Time = 8000

    constructor(name,partName,workHourPerMonth){
        super(name,partName,workHourPerMonth, PrtEmp.#PAY_Per_Time)
        }
}

class FltEmp extends Employee{
    static #PAY_Per_Time = 10000

    constructor(name,partName,workHourPerMonth){
        super(name,partName,workHourPerMonth, FltEmp.#PAY_Per_Time)
    }
}
//정직원 시간당 10000원
const ellie = new FltEmp('엘리','s/w',30);
const bob = new PrtEmp('밥','s/w',20);

console.log(ellie.calculatePay())
console.log(bob.calculatePay())