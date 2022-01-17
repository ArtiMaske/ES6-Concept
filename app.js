import { hello, data as da } from "./sell.js";
import person from "./customer.js";
//1. Let and Const
const name1 = "const example";
// name1 = "pooja";
console.log(name1);
//Uncaught TypeError: Assignment to constant variable.

//2.Arrow function

let myName = (name) => {
  console.log(name);
};
myName("arrow function");

let double = (num) => num * 2;
console.log(double(20));

//3. Export and Import(Modules)

hello();
console.log(da);
console.log(person);

//4. class and object

class Customer {
  constructor(n) {
    this.name = n;
  }
  age = 26;

  buy = () => {
    console.log("class example");
  };
}
class GuestCustomer extends Customer {
  hello() {
    console.log("hello arti");
  }
}
let customet1 = new GuestCustomer("kishor");
console.log(customet1);
customet1.buy();
customet1.hello();

//5. spread and rest operator (...)

//spread operator

let list = ["Audi", "Honda", "BMW", "MB"];

let newList = [...list, "Ferari"];

console.log(newList);

let person1 = {
  name: "kishor",
  age: 32,
};

let newPerson = {
  ...person1,
  city: "Beed",
};
console.log(newPerson);

//rest operator (used in function argument)

function restOpe(...all) {
  console.log(all);
}
restOpe(1, 2, 4, 6, 7, "arti");

//6. Destructuring
// Array des

let list1 = ["pooja", "arti", "swati", "swap"];

let [n1, , n2, n3, n4] = list1;

console.log(n3);

//object des

const person2 = {
  name: "rupali",
  age: 33,
};

let { name, age } = person2;
console.log(age);

//reference (array,object) and primitive type (string,number)

let num1 = 100;
let num2 = num1;
num2 = 50;
console.log(num1);
console.log(num2);

let person3 = {
  name: "ganesh",
};

let person4 = {
  ...person3,
};
person4.name = "geeta";
console.log(person3);
console.log(person4);

//7.  map() and filter()

//map()

let array1 = [2, 3, 4, 5, 6];

let array2 = array1.map((x) => {
  return x * 2;
});
console.log(array2);

// filter()

let arr = [2, 5, 7, 10, 20];

let arr2 = arr.filter((i) => i % 2 == 0);

console.log(arr2);

//output

/* const example
app.js:12 arrow function
app.js:17 40
sell.js:2 hello arti
app.js:22 100
app.js:23 {name: 'arti', age: 26}
app.js:43 GuestCustomer {age: 26, name: 'kishor', buy: ƒ}
app.js:34 class example
app.js:39 hello arti
app.js:55 (5) ['Audi', 'Honda', 'BMW', 'MB', 'Ferari']
app.js:66 {name: 'kishor', age: 32, city: 'Beed'}
app.js:71 (6) [1, 2, 4, 6, 7, 'arti']
app.js:82 swap
app.js:92 33
app.js:99 100
app.js:100 50
app.js:110 {name: 'ganesh'}
app.js:111 {name: 'geeta'}
app.js:122 (5) [4, 6, 8, 10, 12]
app.js:130 (3) [2, 10, 20] 
*/
