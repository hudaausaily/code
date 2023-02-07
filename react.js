//QUESTION 1

class Car{
    constructor(model,make,year,cost){
        this.model=model,
        this.make=make,
        this.age=this.carAge(year),
        this.cost = this.carCost(cost.min, cost.max);

        

    }

    getCarInfo(){
        return `A ${this.model} ,made by ${this.make} at ${this.age} and costs ${this.cost}`
    }
    carAge(year){
        return 2023-year;
    }
    carCost(min, max) {
        return Math.floor(Math.random() * (max - min ) + min);
      }
    
}
const car1= new Car("camry", "toyota", 2010, { min: 20000, max: 30000 });
console.log(car1.getCarInfo());

//QUESTION 2
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getGreeting() {
      return `Hi, I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`;
    }
  }

  const person1= new Person("Huda", "Ausaily", 24);
console.log(person1.getGreeting());

//QUESTION 3


const counterFunc = (counter) => (counter > 100) ? 0 : ++counter;
console.log(counterFunc(120));

const nameAge = (name, age) => { console.log(`Hello ${name}`); console.log(`You are ${age} years old`); }
nameAge("John", 30);




const createFullName = (firstName, lastName) => firstName + " " + lastName;
console.log(createFullName('Huda','Ausaily'))

const doubleNumber = (number) => number * 2;
console.log(doubleNumber(18))



const getEvenNumbers = (array) => {
    let evenNumbers = array.filter(i => i % 2 === 0);
    return evenNumbers;
  };
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));




(1 < 2) ? (() => {
    for (let index = 0; index < 5; index++) {
    console.log("hi");
    }
    })() : console.log("bye");



//Array Method


// task1

let nums = [2, 4, 5];

const numTotal =nums.reduce((acc,curr)=> acc+curr**2,0)


console.log(numTotal)

// task2

multiply = (list) => {
    const array =list.map(e => e *10) 
    return array;
}

console.log(multiply([1,2,3,4,5,6,7,8]));

// task3
// map

makeStrings=[
    {  name: "Angelina Jolie",
    age: 80   },
    {   name: "Eric Jones",
       age: 2
    },
    {   name: "Paris Hilton",
    age: 5
},
{   name: "Kayne West",
age: 16
},
{   name: "Bob Ziroll",
age: 100
}
];

Matrix = (array)=>{
    const MatrixList=array.map(ele => ele.age>10 ? `${ele.name} can go to The Matrix`:`${ele.name} is under age!!`  )
    
    return MatrixList;
}


console.log(Matrix(makeStrings));

// task4
// reduce

var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

avgAge = (list) =>{
    const array = list.reduce((acc,curr)=> (acc+curr.age),0)/list.length;
    
    return array;
    
}
console.log(avgAge(persons));


// task5
// filter

evenOnly= (list)=>{
    const array=list.filter(ele => ele%2 == 0 )
    return array;
}
console.log(evenOnly([1,8,6,4,5,10]));

// task6
// filter

multiFour = (list)=>{
    const array=list.filter(ele => ele%4 == 0 )
    return array;
}
console.log(multiFour([1,8,6,4]));





