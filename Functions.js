// console.log("We will learn fuctions today");
// Function is JS - It is a block code that performs a specific task,can be invoked whenever needed
// functions help you achieve Dry(dont repeat yourself) write once and use whenever we want
// Functions helps remove redundancy from our code


// console.log("hello World".toUpperCase());
// here to UpperCase() is nothing but a function whose task to convert given string to UpperCase by creating a new one and returning new
// Uppercase string
// Infact console.log() log() it self is a function
// After function name we use parenthesis which is to invoke the fuction with/without parameters  input->[block of code]()->output


// Function Definition
// functions without any parameters
// function functionName(){
    // this is a block of code

    // do some work
// }
// Functions with parameters
// function functionName(param1,param....)


// Function Call
// pass in arguments based on parameters demanded to provide
// functionName();

// Take user Input and print his userName using a function which takes the name as input

// function displayUserId (name){
//     //  parameter is nothing but input to our function
//     console.log(`Welcome ${name} your UserId is ${'@'+name+name.length}`);
// }

// let name =prompt("Enter your name : ");
// displayUserId(name);
// name passed to function is called argument which acts as parameter for the called function
// variable used in function definition is called parameter and variable passed in function call is called parameter

// write a function to find square of two numbers

// function calculateSquare(a,b){
    // return a*a;
// }
// function calculateArea(a,b){
    // return a*b;
// }

// we can pass many arguments possible and have as many parameters as possible but if they are used and not passed then value
// is undefined we get NAN which indicates invalid input (NAN-not a number)


// create a function which calculates sum of two numbers
// function add(a,b){
    // console.log("Before Return");
    // return a+b;
    // console.log("After return");
// }

// here return keyWord is used to return a response after completion of task response can be object string number so om...
// to return response we return keyWord 
// Also statements/instructions written after return keyword are never executed after return statement control goes out of function
// block


// function sum(a,b){
    //    here a,b are local variable of function (within scope of function) has function block scope
    // do some work
// }


// Arrow function is a compact way of writing functions
// const arrowSum=(a,b)=>{
    // return a+b;
// }

// here arrowSum now holds the function defintion 
// console.log(arrowSum);

// to invoke arrow fuction call it with its name

// write a function to multiply two number
// arrowMul is function variable which holds the function defintion and using function variable we can call the function
// we make type variable to be const so that some other value should is not assinged but let define it with let than later the
// same function variable can hold any value after reassignemt
// const arrowMul=(a,b)=>{
    // return a*b;
// }


// console.log(`Multiplication of 3 and 5 ${arrowMul(3,5)}`);

// let arrowSub=(a,b)=>{
    // return a-b;
// }
// console.log(arrowSub(5,6));
// value of arrowSub before reassigning 
// console.log(arrowSub);
// value of arrowSub after reassigning
// arrowSub=5;
// console.log(arrowSub);
// it prints 5 as it is reasssigned hence we make function variable to be const so that it can not be reassignmeed later


// Arrow Function are usually used for function which has less work to done ex:addition printing
// if there is just single instruction within arrowFunction we can remove curly braces as well

// const printMsg=(msg)=> console.log(msg);



// q1 create a function to take string as argument and returns number of vowels in it

// function countVowel(sentence){
    // let counter=0;
    // for(let a of sentence){
        // if(a==='a' || a==='A' || a==='e' || a==='E' || a==='i'|| a==='I' || a==='o' || a==='O' || a==='u'|| a==='U') counter++;
    // }
    // return counter;
// }



// console.log("Vowel count in given sentence is : ",countVowel("bhavani plywood and hardware"));

// function sum(b,a){
    // console.log("i m second function with two parameters");
// }
// doing the same using arrow function

// const countVowel=(msg)=>{
//     let counter=0;
//     for(let a of sentence){
//         if(a==='a' || a==='A' || a==='e' || a==='E' || a==='i'|| a==='I' || a==='o' || a==='O' || a==='u'|| a==='U') counter++;
//     }
//     return counter;
// }

// const countVowel=(msg,n)=>{
//     console.log("It works");
// }
// function sum(){
    // console.log(" I m function with no parameters");
// }
// function sum(a){
    // console.log("Im first function");
// }

// JavaScript doesnt supports method overloading 

// Nan as output means Not A Number in short not valid operation
// Return statement can only return one value which can be a complex obj but only one value
// Statements after return statement are not executed as return statement just returns the value to caller function and passes the con
// trol over it
// The parameters of function are  local variables of function and has block scope within the function only

// Arrow Function is a compact way of writing function usual the function with one/two lines are written as arrow function
// syntax variable name=()=>{ code  }
// here the variable hold the code usually we prefer variable type to be const so that it cannot be modified and to invoke function
// we call varaibleName(arg1,arg2,arg3.......)


// Arrow function function name and variable name can never be same in javascript has it is hard to identify which is variable
// and which function 
// Variable which stores the function are called function variable as javascript is loosely coupled we modified the value
// if variable type is not const

// const mul=(a,b)=>{
//     return a*b;
// }
// console.log(mul);
// Arrow function are part of modern JavaScript

// we can aviod curly braces for arrow function of block code is single line

// const arrowAdd=(a,b)=> console.log(a+b);
// console.log(arrowAdd(6,7));


// ForEach loop in Arrays
// ARR.FOREACH(CALLBACK FUNCTION)
// callBack Function:here ,it is function to execute for each element in the array
// * A callBack is a function passed as an argument to another function
// ForEach is method/function both means the same method are function which are associated with specific type of object
// for example UpperCase() can be used only by string object ....
// Functions in Javascript can be passed as an arguments and can be returned as well
// 
// const abc= ()=>{
    // console.log("Hello");
// }
// function myFunc(abc){
    // console.log(abc);
    // abc();
// }
// myFunc(abc);


// let arr=[1,2,3,4];
// let cities=["pune","delhi","mumbai"];
// here the val is being passed for Each method of array it usually passes current element and ints index and array
// cities.forEach((val,idx,arr)=>{
    // console.log(val+" "+idx+" "+arr);

// });

// For Each method passes three arguments to callBack function (value ,index, array itself)

// higher Order function /Higher Order Method are those function which accepts an another function as argument or returns a function
// as return value

// Q1 for a given array of numbers ,print the square of each value using forEach Loop
// let a=[34,5,78,90];

// a.forEach((val)=>{
//     // console.log(`square of ${val} is ${val*val}`);
//     // here we can use exponention operator as well
//     console.log(val**2);

// });
// const calSquare=(a)=>{
    // console.log(a*a);
// }

// a.forEach(calSquare);

// Some More Array Methods
// Map: Creates a new array with results of some operation.The value its callBack returns are used to form new Array
// arr.map(callBackFnx(value,index,array))

// const isEven=(a)=>{
//     return a%2==0?"even":"odd";
// }
const print=(num)=>{
    console.log(num);
}
// console.log(arr);
// let arr=[2,4,5,2,3]
// console.log(arr);
// let result=arr.map(print);
// console.log(result);
// if callBack function doesn't returns any value and map function adds undefined palceholder in new array

// Filter : creates a new array of elements that give true for a condition which is return in callBack Function it returns copy of
// filtered out elements
// Get All Even Elements from the array
// const isEven=(n)=>{
//     return n%2==0;
// }
// let res=arr.filter(isEven);
// console.log("All even number of arr are : ",res);


// Performs some operations & reduces the array to a single value .It returns that single value

// const array1=[1];
// we here are trying to sum the values of array into a single variable 
// here the callBack takes two values prevVal, current Val and returns a value which is again assign to prevValue for next iterations
// at last prevValue is returned by reduce method
// callback function starts with first two elements then moves the current value to next index and resultant is stored in prevValuue

// const myfunc=(a,b)=>{
//     console.log(a,b);
//     return a+b;
// }
// const SumWithInitail=array1.reduce(myfunc);
// console.log(SumWithInitail);

// Given an array find out the max element of array using reduce Method
// No matter how big the input is if we want one single value output after performing some operations on array we can use reduce 
// method
// let a=[3,4,5,7,42];
// let max=a.reduce((prev,cur)=>{
//     return Math.max(prev,cur);
// });
// console.log(a+" Maximum Element of  following Array ",max);

// Q1 we are given array of marks of students Filter out the marks of students that scored 90 with names
// let marks=[45,67,90,23,97,98,94];
// // we can use filter method 
// let resArray=marks.filter((val)=>{
//     return val>=90;
// });
// console.log("List of marks with 90+ marks : ",resArray);

// Q2 Take an input from user ,create a array of number from 1 to n and find sum and product of array elements 
// here we can use reduce method
// using Number function to convert string to number
let n=Number(prompt("enter a number : "));
let a=[];
for(let i=1;i<=n;i++) a.push(i);
let totalSum=a.reduce((prev,cur)=>{
    return prev+cur;
});

let totalProduct=a.reduce((prev,cur)=>{
     return prev*cur;
});
console.log(a);
// console.log((n*(n+1)/2));
console.log("Addition of array elements : ",totalSum);
console.log("Multiplication of array elements : ",totalProduct);









