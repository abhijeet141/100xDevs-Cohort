const initial = [1,2,3]
// for(let i = 0;i<initial.length;i++){
//     console.log(initial[i]);
// }

//call the function for each element in the array

function logIt(str){
    console.log(str)
}

initial.forEach(logIt)