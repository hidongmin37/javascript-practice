const text = 'Hello World!'
for (let i of text){
    console.log(i)
}

const ids = 'user1,user2,user3,user4';
const idArr = ids.split(',')
console.log(idArr);

console.clear();

setInterval(()=>{
    const time = new Date ()
    console.log(time.toLocaleString('kr-KR'))
},1000)