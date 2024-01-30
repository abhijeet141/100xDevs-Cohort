//ForEach()
function forEachExample(arr){
    console.log(arr);
    arr.forEach(function(item,index){
      console.log(index);
    })
  }
  forEachExample([10,23,31])