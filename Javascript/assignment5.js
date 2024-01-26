const array = [10,12,25,13,16]
let max = array[0]
for(let i = 0;i<array.length;i++){
    if(max<array[i]){
        max = array[i];
    }
}

console.log(max);