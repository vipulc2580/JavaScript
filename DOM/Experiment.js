console.log("I love you pooja");
// way to access the methods of other objects is by using call which allows us to pass in another this object whose methods,properties
// can be acess

// const obj={
//     name : "Vipul",
//     printName : function (){
//         console.log(this.name);
//     },
// }
// const obj2={
//     name : "Pooja",
// }
// obj.printName.call(obj2);


const obj={
    firstName:"Pooja",
    lastName:"Seervi",
    // printFullName : function (){
    //     console.log(`${this.firstName} ${this.lastName}`);
    // }
}
const obj2={
    firstName:"Vipul",
    lastName:"Choudhary",
}
// obj.printFullName();
// obj.printFullName.call(obj2);
// call method is used to borrow the function of other object to 
// support code reuseability function borrowing
// each function in javascript has access to call method which takes
// an object as argument and then that object's properities and methods 
// can use within the same function 

// But most of times we don't keep generic methods associated to an object
// rather we make function in global space so that it can be reused wheneve
// needed
let printFullName= function (homeTown) {
    console.log(`${this.firstName} ${this.lastName} from ${homeTown}`);
}
printFullName.call(obj,"SangaReddy");
printFullName.call(obj2,"Ecil");

// call method is applicable for functions only not arrow functions

// The only difference between call() and apply() is the way we pass 
// arguments
// apply(object ref, [arguments to be passed to function]) the arguments
// to be passed to function are passed in form of Arraylist

printFullName.apply(obj,["Sangareddy"]);
printFullName.apply(obj2,["Ecil"]);


// bind method is similar to call method what it does is bind the method
// with the obj creating a obj method with given function and returns
// reference to that function which can be later called/invoked

const printName=printFullName.bind(obj,"SangaReddy");
console.log(printName);
printName();


