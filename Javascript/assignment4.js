const ages = [21,22,23,24]
for(let i = 0;i<ages.length;i++){
    if(ages[i]%2 == 0){
        console.log(ages[i]);
    }
    else{
        continue;
    }
}