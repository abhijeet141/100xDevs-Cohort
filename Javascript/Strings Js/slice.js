function getSlice(str,start,end){
    console.log(str)
    console.log(str.slice(start,end))
}

getSlice("Hello World",0,4)

//substr is depreciated

function cutIt(str, start,end){
    let newStr = "";
    for(let i = 0;i<str.length;i++){
        if(i>= start && i<=end){
            newStr += str[i]
        }
    }
    return newStr;
}

const ans = cutIt("Hello",0,2)
console.log(ans);