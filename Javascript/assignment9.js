//create a counter in javascript

let count = 30
function counter(){
    console.log(count);
    if(count == 0){
        clearInterval(timer)
        console.log("countdown completed");
    }
    else{
        count--;
    }
}

const timer = setInterval(counter,1*1000)