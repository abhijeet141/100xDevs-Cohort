function log1(){
    console.log("Hello World 1");
}

function log2(){
    console.log("Hello World 2");
}

function logIt(fn){
    fn();
}

logIt(log2)