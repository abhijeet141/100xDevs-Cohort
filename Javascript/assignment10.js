//calculate the time it takes between settimeout call and the inner function actually running
function timer(){
    const startTime = performance.now();
    console.log("Hello")
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(elapsedTime)
}
setTimeout(timer,1*1000)

const milliseconds = 19.92740000784397;
const seconds = milliseconds / 1000;

console.log(seconds);