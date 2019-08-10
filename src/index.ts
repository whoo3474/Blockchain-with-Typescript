const name = "Minhan",
      age = 27,
      gender = "male";

const sayHi = (name:string, age:number, gender?:string):string => {
 return `hi! ${name}, you are ${age}, you are a ${gender}`
}

console.log(sayHi("Minhan", 27, "male"));


export {};