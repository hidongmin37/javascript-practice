const nums = [1,2,3,4,5,6];
result = nums.map((item)=>{

    if (item%2===0){return item*2}
    if (item%2===1){return item*2+1}

});

console.log(result);

//
console.clear()

result = nums.map(item => [1,2]);
console.log(result);

result = nums.flatMap(item => [1,2]);
console.log(result);

console.clear()
result= ['dream','coding'].flatMap((text)=>text.split(''));
console.log(result);

console.clear()
const text = ['hi','abc'];
text.sort()
console.log(text)

console.clear()
let numbers = [1,20,3,14,5,41];
numbers.sort((a,b)=>{
    return a-b
})



// numbers.sort((a,b)=>{
//     return b-a
// })
console.log(numbers)

console.clear();

numbers = [1,20,3,14,5,41];
result = numbers.reduce((sum,value)=>{
    sum += value;
    return sum;
},0)

console.log(result);

