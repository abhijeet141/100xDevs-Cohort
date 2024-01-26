//setTimeout
function greet(){
    console.log("Hello World")
}

//1 millisecond = 10^3 second = 1*1000 second

setTimeout(greet,3*1000)

function setTimeout(finalfnc,duration){
    sleep(duration)
    finalfnc()
}

setInterval(greet,1*1000)