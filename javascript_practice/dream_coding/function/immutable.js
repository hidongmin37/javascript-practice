// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 정말 좋지 않습니다.
// 상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트,값)만들어서 반환해야한다.
//원시값 -값에 의한 복사
// 객체값 - 참조에 의한 복사(메모리 주소)
function display(number){
    console.log(number);
}

const value = 4 ;
display(value);

function displayObj(obj){
    obj.name = 'Mark' // ❌❌❌❌❌❌❌❌❌ 외부로부터 주어진 인자(object)를 내부에서 변경하면 안된다.
    console.log(obj);
}
function chgName(obj){ // 이름부터 변경하는 느낌이 들도록
    return {...obj, name: 'Mark'}; 
}
const ellie = {name: 'Ellie'};
displayObj(ellie);
console.log(ellie.name);