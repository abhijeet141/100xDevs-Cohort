//create a terminal clock (HH:MM:SS)
const currentDate = new Date()

function Timer(){
const utcDate = new Date();
const istTimeString = utcDate.toLocaleString("en-IN",{timeZone: "Asia/Kolkata"});
// console.log("UTC Time: " + utcDate.toISOString());
// console.log("Indian Time (IST): " + istTimeString);
const istTime = istTimeString.split(' ')[1];
console.log(istTime);
}

setInterval(Timer,1000);

// //split
// const sentence = "This is a sample sentence";
// const words = sentence.split(' ')[1]; // Split the sentence into an array of words
// console.log(words); // Output: ["This", "is", "a", "sample", "sentence"]
