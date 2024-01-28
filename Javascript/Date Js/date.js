const currentDate = new Date()
console.log(currentDate);
console.log(currentDate.getMonth() + 1);//0 index based
console.log(currentDate.getDate())
console.log(currentDate.getFullYear())

const isst = currentDate.toLocaleString("en-In",{timestamp: "Asia/Kolkata"})
console.log(isst);

console.log(isst.split(',')[1]);
console.log(currentDate.getYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
currentDate.setFullYear(2023);

const currentDate1 = new Date()
console.log("Time in milliseconds: ", currentDate1.getTime()); //how much seconds passed till 1970

function calculateSum(){
    let a = 0
    for(let i = 0;i<1000000000;i++){
        a = a + i
    }
    return a;
}

const beforeDate = new Date()
const beforeTimeinMs = beforeDate.getTime()
calculateSum()
const afterDate = new Date()
const afterTimeinMs = afterDate.getTime()
const finalTimeInSec = (afterTimeinMs - beforeTimeinMs)/1000;
console.log(finalTimeInSec)