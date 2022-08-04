
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class Student extends Person{
    constructor(name,age){
        super(name,age)
    }
}

var p=new Person("aman",28)
console.log(p);

var s=new Student("anuragh",26)