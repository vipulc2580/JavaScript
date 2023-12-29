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

function calculateSquare(a,b){
    return a*a;
}
function calculateArea(a,b){
    return a*b;
}

// we can pass many arguments possible and have as many parameters as possible but if they are used and not passed then value
// is undefined we get NAN which indicates invalid input (NAN-not a number)


// create a function which calculates sum of two numbers
function add(a,b){
    console.log("Before Return");
    return a+b;
    // console.log("After return");
}

// here return keyWord is used to return a response after completion of task response can be object string number so om...
// to return response we return keyWord 
// Also statements/instructions written after return keyword are never executed after return statement control goes out of function
// block


// function sum(a,b){
    //    here a,b are local variable of function (within scope of function) has function block scope
    // do some work
// }


// Arrow function is a compact way of writing functions
const arrowSum=(a,b)=>{
    return a+b;
}

// here arrowSum now holds the function defintion 
console.log(arrowSum);

// to invoke arrow fuction call it with its name

// write a function to multiply two number
// arrowMul is function variable which holds the function defintion and using function variable we can call the function
// we make type variable to be const so that some other value should is not assinged but let define it with let than later the
// same function variable can hold any value after reassignemt
const arrowMul=(a,b)=>{
    return a*b;
}


console.log(`Multiplication of 3 and 5 ${arrowMul(3,5)}`);

let arrowSub=(a,b)=>{
    return a-b;
}
console.log(arrowSub(5,6));
// value of arrowSub before reassigning 
console.log(arrowSub);
// value of arrowSub after reassigning
arrowSub=5;
console.log(arrowSub);
// it prints 5 as it is reasssigned hence we make function variable to be const so that it can not be reassignmeed later


// Arrow Function are usually used for function which has less work to done ex:addition printing
// if there is just single instruction within arrowFunction we can remove curly braces as well

const printMsg=(msg)=> console.log(msg);



// q1 create a function to take string as argument and returns number of vowels in it

function countVowel(sentence){
    let counter=0;
    for(let a of sentence){
        if(a==='a' || a==='A' || a==='e' || a==='E' || a==='i'|| a==='I' || a==='o' || a==='O' || a==='u'|| a==='U') counter++;
    }
    return counter;
}



console.log("Vowel count in given sentence is : ",countVowel("bhavani plywood and hardware"));

function sum(b,a){
    console.log("i m second function with two parameters");
}
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
function sum(){
    console.log(" I m function with no parameters");
}
function sum(a){
    console.log("Im first function");
}

// JavaScript doesnt supports method overloading 

// Nan as output means Not A Number in short not valid operation
// Return statement can only return one value which can be a complex obj but only one value
// Statements after return statement are not executed as return statement just returns the value to caller function and passes the con
// trol over it

let mul=(a,b)=>{
    return a*b;
}

console.log(mul(8,9));




