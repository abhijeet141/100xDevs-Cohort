function square(a){
    return a*a;
}

function sumOfSomething(a,b,fn){
    console.log(fn);
    const val1 = fn(a)
    const val2 = fn(b)
    return val1 + val2;
}

const ans = sumOfSomething(2,2,function(a){
    return a*a*a;
})
console.log(ans);