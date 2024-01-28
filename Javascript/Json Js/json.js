const users1 = {
    name: "Harkirat",
    age: 24,
    gender: "Male"
}

console.log(users1["age"]);

//convert object to string
const users = '{"name": "Harkirat","age": 21}'
console.log(users["name"]);

//JSON Class
//JSON.parse
//JSON.stringify

const user = JSON.parse(users) //take the string and parse it into an object
console.log(user);
console.log(user["name"]);

const student = {
    name: "Abhijeet",
    gender: "Male"
}

const ans = JSON.stringify(student)
console.log(ans);