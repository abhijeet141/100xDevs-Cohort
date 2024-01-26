const allUsers = [{
    firstName: "Abhijeet",
    gender: "Male",
    metadata:{
        age:22,
        address:"DLW"
    }
},
{
    firstName: "Apurva",
    gender: "Female"
},{
    firstName: "Alok",
    gender: "Male"
},{
    firstName: "Kumud",
    gender: "Female"
}]

for(let i = 0;i<allUsers.length;i++){
    if(allUsers[i]["gender"] == "Male"){
        console.log(allUsers[i]["firstName"]);
    }
}

console.log(allUsers[0]["metadata"]["age"])