const name = "Minhan",
      age = 27,
      gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`hi! ${name}, you are ${age}, you are a ${gender}`)
}

sayHi(name, age, gender);
sayHi(name, age);


export {};