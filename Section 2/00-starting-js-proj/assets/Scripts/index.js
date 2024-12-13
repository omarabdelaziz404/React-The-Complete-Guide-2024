/* #1-import / export
import { apiKey } from "./util.js"; //import one thing
import anyName from "./util.js"; //import default
import { apiKey ,abc as anyNameYou } from "./util.js"; //import multiple things
import * as anyNameYouWant from "./util.js"; //import multiple things
console.log(apiKey); 
console.log(name); 
console.log(anyNameYouWant); 

console.log("");
*/

/* #2-Variables & values
let userMessage = "Hello World!!"; //creating var
const userMessage2 ="Hello"; //creating var
//userMessage2 = "new value"; //error can't re assign to constant variable
console.log("Hello World");
console.log(userMessage);
*/

/* #3-operators 
+ - * /
console.log(10 + 5); 
console.log("hello" + " world"); //concatenation
*/ 

/* #4-Comparisons
=== is equal to + same data type
==  is equal to + diffrent data type
!== is not equal to 
>   is greater than
<   is lower than 
>=  is greater or equal to
<=  is lower or equal to 
&&  AND
||  OR
!   NOT
*/

/* #5-functions
function greet1() { //define
    console.log("hello");
}
greet1(); //call

function greet2(userName, message) { //parameter
    console.log(userName);
    console.log(message);
}
greet2("omar", "hello");
greet2("7amda", "what's up");

function greet3(userName, message="hello") { //providing default parameter
    console.log(userName);
    console.log(message);
}
greet3("omar");
greet3("7amda", "what's up"); //u can override this default parameter

function creatGreeting(userName, message="hello") { 
    return "Hi I am " + userName + ". " + message;
}
const greeting1 = creatGreeting("omar");
console.log(greeting1);

const greeting2 = creatGreeting("7amda", "what's up");
console.log(greeting2);
*/

/* #EX 1
function combine(a , b , c){
    const result = a * b / c ;
    return result;
 } 
*/    

/* #6-Arrow function
number => number * 3;
(userName, userAge) => {
}
number => ({ age: number });//return a JavaScript object
*/

/* #7-object
const user = { 
    name: "omar",
    age: 21,
    greet(){ //store functions
        console.log("hello");
        console.log(this.age);
    }
}
console.log(user.name);
user.greet();
*/

/* #8-class
class User{
    constructor(name, age){
        this.name = name;
        this,age = age;
    }
    
    greet(){ 
        console.log("hi");
    }
 }

 const user1 = new User("omar",21);
 console.log(user1);
 user1.greet();
*/

/* #9-array is a object
const array = ["sports", "cooking","reeading"];
console.log(array[0]);
array.push("Working"); //insert at last index

const index = array.findIndex((item)=> item === "cooking");
console.log(index);

const editedArray = array.map((item) => item+"!"); //returns an new array that contains the results
console.log(editedArray);

function transformToObjects(numberArray) {
    return numberArray.map(number => {
     return {val: number}
    });
 };
 const x = transformToObjects([1,2,3]);
 console.log(x);
*/

/* #10-Destructuring
const [firstName,lastName] = ["Omar", "Abdelaziz"];
console.log(firstName);
console.log(lastName);

const {name: userName, age} = { 
    name: "omar",
    age: 21,
}
console.log(userName);
console.log(age);

function storeOrder({id, currency}) { // destructuring
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
  }
*/

/* #11-Spread operator...
const hobbies = ["sports", "cooking"];
const newHobbies = ["reeading"];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const user = { 
    name: "omar",
    age: 21
};

const extendedUser = {
    isAdmin: true,
    ...user
}
console.log(extendedUser);
*/

/* #12-control structure
IF:
const password = prompt("Your password:");
if(password === "Hello" ){
    console.log("Hello works");
}else if (password === "hello") {
    console.log("hello works");
}else{
    console.log("Access not granted");
}

FOR:
const hobbies = ["sports", "cooking","reeading"];
for (const hobby of hobbies) {
    console.log(hobby);
}
*/

/* #13-function as input for other function
function handelTimeout1(){ 
    console.log("Timed out!");
}

const handelTimeout2 = () => { 
    console.log("Timed out....2");
};

setTimeout(handelTimeout1, 2000); //function without()
setTimeout(handelTimeout2, 3000); 
setTimeout(() => { 
    console.log("Timed out....3");
}, 4000); 

function greeter(greetFn){
    greetFn();
}
greeter(() => console.log("hi"));
 */

/* #14-defining functions inside of functions
function init(){
    function greet(){
        console.log("hi");
    }

    greet();
}
//greet(); //can't call greet out of init
init();
 */


const hobbies = ["sports", "cooking"]; 
//hobbies=[]; //error
hobbies.push("Working");
console.log(hobbies);
