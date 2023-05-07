const array = [1,2,3];

// iterable 하다는 건 순회가 가능하다는 것을 알 수 있음.
// 순회가 가능하면 for,...of ,spread연산자 사용 가능
// [symbol.iterator():Iterator]
for (const item of array){
    console.log(item)
}
for (const item of array.keys()){
    console.log(item)
}
for (const item of array.values()){
    console.log(item)
}
for (const item of array.entries()){
    console.log(item)
}
const obj = {0:1,1:2}

for (const item in obj){  // for in은 객체의 키 값을 출력
    console.log(item)
}
// for (const obj )

console.clear()

const iterator = array.values();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().done)
