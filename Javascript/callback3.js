
function calculateArithmetic(a,b,type){
    if(type == "sum"){
    //    return a +b;
    const value = sum(a,b)
    return value;
    }
    else if(type == "minus"){
     //   return a - b;
     const value = minus(a,b)
     return value;
    }
}

function sum(a,b){
    return a + b;
}

function minus(a,b){
    return a - b;
}

const value = calculateArithmetic(3,2,"sum")
console.log(value);