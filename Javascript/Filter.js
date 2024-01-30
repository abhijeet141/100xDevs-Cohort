// filter()
function filterExample(arr) {
    console.log(arr);
    let newArr = arr.filter(function(item) {
        return item>3;
    })
    console.log(newArr);
}

filterExample([1,2,3,4,5])