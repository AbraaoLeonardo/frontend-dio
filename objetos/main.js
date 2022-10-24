class Person{
    name;
    age;
    constructor(tamandua, age){
        this.age = age;
        this.name = tamandua;
        this.birthyear = 2022-age;
    };
    introduce_yourself(){
        console.log(`My name is ${this.name} i have ${this.age} years i birth in ${this.birthyear}`)
    };
}

const vitor =  new Person("Julia Cataria Batista",64);
const gabriel = new Person('Gabriel Gameplay', 35);

gabriel.introduce_yourself();
vitor.introduce_yourself();