console.log("I m learning class and Objects and ProtoType");
// A javaScript objects is an entity which has state/properities and behaviours/methods
// JS Objects have a special property called as prototype(this holds an object reference which has generic methods like add,toString etc)
// Javascript bydefault adds this prototype obj in every obj  basically obj inherits all methods/properties from prototype object in it
// current object can access all those properities and methods

const student={
    fullName : "Vipul Choudhary",
    marks: 95,
    // printMarks: function(){
    //     // here we use this keyword which points  to current object itself if only marks is return is search marks in lexical context
    //     // which is not present hence  to access object properities within methods we use this keyword
    //     console.log("Marks is ",this.marks);
    // },
    // we can define a method in this way as well 
    // if same name function is written twice while memory allocation last function definition is assigned as value(code) to function
    // in memory
    printMarks(){
        console.log("I love Pooja");
    }
}
// now we set custom prototype as well to an object obj.__proto__=obj
// here __proto__ holds reference to obj/null
// here protyping the object forms a chaining like strucutre
// which first current object methods/properities are given priority else search in done within prototype object
// if didn't found than search is again done in prototype.prototype object it keeps going till the prototype object
// becomes null
// Ex arr.__proto__=Array.__proto__=Obj.__proto__=null
// const obj1={
//     firstName:"Vipul",
//     lastName:"Choudhary",
//     printName: function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }
// const obj2={
//     name:"Aditya",
// }
// const obj3={
//     id:2,
//     marks:30,
// }

// NOTE IF object as well as protoType object both has same name function/property then 
// current object's method/property is given preference
const obj1={
    name:"vipul",
    lastName:"Choudhary",
    // toString: function(){
    //     console.log(this.name," ",this.lastName);
    // }
}
obj1.toString();



// CLASS is a program code template for creating objects
// Those objects will have some properties/state & some behaviours/methods inside it
// All forturner car will have same set of functionality and specification apart from few details
// though the value of state can be different but the object will have that state in it

class Car{
    start(){
        console.log("I m starting the car");
    }
    stop(){
        console.log("I m stopping the car");
    }
    accelerate(){
        console.log("Increasing the car spped");
    }
    deccelerate(){
        console.log("Decreasing the car speed");
    }
}

// to create a object of an class (template) we use new keyword

let car1=new Car();
car1.accelerate();























































































































// Q1 you are creating a website for your college.Create a class user with 2 properities,name& email.It also
// has a method called viewData() that allows user to view website Data

let data="secret Information";
class User{
    constructor(name,email){
           this.name=name;
           this.email=email;
    }
    viewData(){
        console.log(data);
    }
}
let user1=new User("vipul","vipulc2580@gmail.com");
// user1.__proto__=window;
// user2.__proto__=this;
user1.viewData();
// user2.viewData();

// Q2. create a new class Admin which inherits from User.Add a new method called editData to admin that allows it to edit website data

class Admin extends User{
    constructor(name,email){
          super(name,email);
    }
    editData(msg){
      data=msg;
    }
}

let admin1=new Admin("Vijay","vijay45@gmail.com");
admin1.editData("Hi guys this is coding website");
admin1.viewData();
user1.viewData();