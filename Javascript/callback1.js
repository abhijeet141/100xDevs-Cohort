//Only allow to call one function and I have to display result of a sum

function sum(num1, num2,fnToCall){
    let result = num1 + num2
    //return result;
    fnToCall(result)
   // displayResult(result);

}

function displayResult(data){
    console.log("Result of sum is " + data)
}

function displayResultPassive(data){
    console.log("Sum's result is " + data);
}

//one way
const ans = sum(1,2,displayResult);
//displayResult(ans);
//function goes in argument to a function




//----------------------------------------

//----------------------------------------------
