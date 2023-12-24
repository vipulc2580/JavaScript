// Pratice of If Else Statement

// write a program to take user input and find whether the given input is even or odd
// alert("hi this is your first javaScript program,Keep Going");   
// alert is a one time pop up once 
// Prompt func takes a message and sends a pop but also takes a input which can be stored returns input in string format
// let name=prompt("Hello!");
// console.log("Hello ",name," !");
// let a=prompt("enter a number");
// if(a%5==0){
//     console.log(a, " is a multiple of 5");
// }
// else{
//     console.log(a, " is not a multiple of 5");
// }


// Pratice of if else if statement
// write a program to assign grade to student according the given input
// 90-100 -A,  70-89-B, 60-69-C, 50-59-D,0-49-F
let a=prompt("Enter the marks of Student :");
let grade;
if(a<0 || a>100){
    console.log("Invalid Input");
}
else if(a>=90){
    grade='A';
}
else if(a>=70 && a<89){
    // console.log("Grade : B");
    grade='B';
}
else if(a>=60 && a<70){
    // console.log("Grade : C");
    grade='C';
}
else if(a>=50 && a<60){
    // console.log("Grade : D");
    grade='D';
}
else{
    // console.log("Grade : F");
    grade='F';
}
console.log("Grade : ",grade);