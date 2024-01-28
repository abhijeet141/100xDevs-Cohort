function objectMethod(obj) {
    console.log(obj);
    let keys = Object.keys(obj)
    console.log(keys);
    let values = Object.values(obj)
    console.log(values);
    let entries = Object.entries(obj)
    console.log(entries);
    let hasProp = obj.hasOwnProperty("key1")//true or false
    console.log(hasProp);
    let newObj = Object.assign({},obj,{key4: "Value4"})
    console.log(newObj);
}


const sampleObject = {
    key1: "Value 1",
    key2: "Value 2",
    key3: "Value 3"
};

objectMethod(sampleObject);