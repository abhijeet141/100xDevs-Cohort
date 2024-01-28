class Animal{
    constructor(name,legcount,speaks){
        this.name = name
        this.legcount = legcount
        this.speaks = speaks
    }

    //static function - associated to the class itself can be called without initialising object
    static myType(){
        console.log("Animal");
    }

   display(){
        console.log(this.name);
        console.log(this.legcount);
        console.log(this.speaks);
    }
}



let dog = new Animal("dog",4,"bhow bhow")
let cat = new Animal("Cat",4,"Aww meow")

dog.display()
cat.display()

Animal.myType()