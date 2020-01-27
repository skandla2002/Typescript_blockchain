const name = "Nicolas",
        age = 24,
        gender = "male";

const sayHi = (name: string, age:number, gender:string):string => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

console.log(sayHi("Nicolas", 24, "male"));

export {};