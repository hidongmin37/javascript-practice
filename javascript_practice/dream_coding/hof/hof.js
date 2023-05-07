const fruits = ['🍌','🍎','🍊','🍓','🍇']

for(let i = 0; i <fruits.length; i++){
    console.log(i)
}

fruits.forEach(function(value,index,array){
    console.log('--------------------------------')
    console.log(value)
    console.log(index)
    console.log(array)

})
fruits.forEach((value,index,array)=>{
    console.log('--------------------------------')
    console.log(value)
    console.log(index)
    console.log(array)

})

console.clear();

const item1 = {name:'🥛' ,price: 2}
const item2 = {name:'🍪' ,price: 3}
const item3 = {name:'🍙' ,price: 1}


// 제일 먼저 조건에 맞는 아이템을 찾을 때 반환(콜백함수)
const products = [item1,item2,item3,item2]
let result = products.find((value)=>{
    return value.name === '🍪';
})

console.log(result);

result = products.findIndex((value)=>{
    return value.name === '🍪';
})

console.log(result);

//some을 통해서 하나라도 있으면, 불리언값으로 나오게 함.
result = products.some((value)=>{
    return value.name === '🍪';
})

console.log(result);

// 전부를 확인할 때
result = products.every((value)=>{
    return value.name === '🍪';
})

console.log(result);

//조건에 맞는 아이템들을 새로운 배열로

result = products.filter((value)=>{
    return value.name === '🍪';
})

console.log(result);

