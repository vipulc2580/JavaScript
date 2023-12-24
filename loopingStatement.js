// Loops in JavaScript
// loops are used to do some tasks repeatedly till a condition is met
// for loop for(three statements are involved)   syntax : for(initialization ; conditional check:updation)
// initialization happens once and then conditional check and updation (conditional check->updations->conditional check)
// in this way the code within for block is executed till conditional check doesn't becomes false
// to print message 5 times brute force way if its 100000 times we can't copy it hence use loop
// console.log("Hi Pooja");
// console.log("Hi Pooja");
// console.log("Hi Pooja");
// console.log("Hi Pooja");
// console.log("Hi Pooja");

// print hi loser 1000 times using for loop
// for(let i=1;i<=1000;i++){
//     console.log("Hi Loser!");
// }

// find sum of first 100 numbers
// let sum=0;
// for(let i=1;i<=100;i++){
//     sum+=i;
// }
// console.log("Sum : ",sum);

// print Multiplication table of 197 till 20
// for(let i=1;i<=20;i++){
//     console.log("197 x ",i," = ",(197*i));
// }
// also variable type define within for matters if its let then its scope is within for loop only
// if variable type is var then its scope is global we can access it later as well
// for(var i=1;i<=5;i++){
//     console.log(i);
// }
// console.log(i); here i is out of scope if its let type variable

// console.log(i);  since i is var type its scope is global we can it outside the block as well
// var i=10;
// console.log(typeof i, i);


// Infinite Loop
// loops which never ends basically conditional check always returns true
// for(let i=1;i>=0;i++){
    // console.log("i = ",i);
// }
// since above loop updation will always lead to true conditional check falling into infinite loop never write such loops in your code


// while loop 
// while(cond){ /code } runs till the condition is true 
// print  numbers from 1 to 10
// initialization is done outside while loop where in updation is done within while loop
// let i=1;
// while(i<=10){
//     console.log("i = ",i);
//     // updation dont forget this else loop becomes infinite loop
//     i++;
// }
// console.log("while loop ends");


// do while loop 
/* syntax :  do{
    // some work
   }while(condition);
   */
// difference between while and do while loop is do while does work once and then checks the conditions
// in while loop condition is checked first 

// print multiplication table of 88 till 20 
// let i=1;
// do{
//     console.log("88 x ",i," = ",(88*i));
//     i++;
// }while(i<1);   
// though in above case 1 is not less than 1 but do does the work of printing 88*1 =88
// console.log("do while loop is ended");


// for of loop is used to iterate over ARRAYS value or characters in STRING 
/* syntax : for(let a for variableName){ // code }   DO NOT USE IT FOR ITERATION OF OBJECTS*/   
// count the length /size of string using for of loop
// let name="PoojaSeervi",size=0;
// for(let c of name){
//     // iterator -> characters (will traverse all characters one by one
//     console.log("ascii val: ",name.charCodeAt(size));
//     size++;
// }    
// console.log("name's size : ",size);
// console.log("for of is completed now");


// for in loop is used to iterate over OBJECTS/ARRAYS for objects it iterates over keys
/* syntax : for (let key in obj){ // code } we get only keys of object*/
// try to print key val of an object using for in loop

// const student={
//     name:"Pooja Seervi",
//     age:23,
//     cgpa:9.6,
//     isPass:true,
// };

// for(let key in student){
//     // two ways to access values of keys in objects 
//     // 1. obj.keyName 
//     // 2. obj["keyName"]
//     // but here obj.key is not working as key is not holding the value is just holds value of key which is string rather than variable key
//     console.log(key,": ",student[key]);
// }
// console.log("for in loop ended");


// Print all even numbers in between 0-100
// for(let i=0;i<=100;i++){
//     if((i&1)!==0){
//         console.log("i : ",i);
//     }
// }

// Math.random generates any random numbers from 0- to a limit which can be expcitly mentioned
// Math random generates a float value less than 0 to convert it to required range multiply it with required range and floor it to nearest integer
let num=Math.floor(Math.random()*100+1);
// console.log("num : ",num);
let userGuess;
while(num!=userGuess){
    userGuess=prompt("Enter the number : ");
    if(userGuess==num){
        console.log("Hurrah!, You've guessed the right Number");
    }
    else if(userGuess>num){
        console.log(userGuess, " too high");
    }
    else{
        console.log(userGuess," too low");
    }
}






