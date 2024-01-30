function mapExample(arr){
    console.log(arr);
    let newArr = arr.map(function (item){
        return item*2;
    })
    console.log(newArr);
}

mapExample([1,2,3,4])