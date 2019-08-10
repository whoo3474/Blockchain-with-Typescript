// interface Human {
//   name: string;
//   age: number;
//   gender :string;
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age:number, gender:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const minhan = new Human("minhan", 27, "male")

const person = {
  name : "Minhan",
  age : 27,
  gender : "male"
}


const sayHi = (person: Human):string => {
 return `hi! ${person.name}, you are ${person.age}, you are a ${person.gender}`
}

console.log(sayHi(minhan));


export {};