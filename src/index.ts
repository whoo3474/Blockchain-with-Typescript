interface Human {
  name: string;
  age: number;
  gender :string;
}

const person = {
  name : "Minhan",
  age : 27,
  gender : "male"
}


const sayHi = (person: Human):string => {
 return `hi! ${person.name}, you are ${person.age}, you are a ${person.gender}`
}

console.log(sayHi("Minhan", 27, "male"));


export {};