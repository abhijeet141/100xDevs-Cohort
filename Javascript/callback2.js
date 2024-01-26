function calculateArithmetic(a,b,type){
    if(type == "sum"){
        return a +b;
    }
    else if(type == "minus"){
        return a - b;
    }
}

const value = calculateArithmetic(3,2,"sum")
console.log(value);