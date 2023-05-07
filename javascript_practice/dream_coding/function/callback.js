const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function calculator(a,b,action){
    if (a<0||b<0){
        return;
    }
    let result = action(a,b);
    console.log(result);
    return result;
}
// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨.
calculator(-1,-2,add);
calculator(1,2,add);
calculator(1,2,multiply);
console.clear()

//주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 순회하는 숫자의 두배값을 다 출력하고 싶음
function double(num){
    num = num * 2;
    console.log(num);
}
function iterate(max,action){
    for(let i=0;i<max+1;i++){
        console.log(i);
        action(i);
    }
}
iterate(5,double);