// console.log("Namaste JavaScript!");
// though we can write all js,css and html code in html file itself but it makes the code more bulky and difficult to manage
// Creating seperate files for js,css ,html makes code modular,readable and it helps with browser caching


//Window object represents an open window in browser it's a browser object(not javascript's) & is automatically created when a window in 
// is open
// Window object has lot of properties and methods
// Ex console.log("msg") is a window object ,alert(),prompt() are window object
// It's a global object with lot of properties and methods


// console.log("hello");
// window.console.log("hello2");


// console.dir(obj) is used to print all properties and methods of an object
// console.log(obj) is used to print the object
// DOM document object Model
// When a web page is loaded ,the browser creates a document object model of the page
// Its nothing the html code created as object and is present in window object which is part of js and hence we can access
// the html object and it's properities and methods this object is named as document which present in window object which is 
// created by browser the document is representation of html code this is called as document object model

// it has a tree like structure as the html code is an object called  as document and the tags within it are also object and this is 
// whole presentation in a tree model structure hence called as document object model
// DOM IS  AUTOMATICALLY CREATED BY BROWSER AS SAME AS WINDOW OBJECT AND DOM IS SUBOBJECT OF WINDOW OBJECT


// accessing this html code using javascript we can make the dynamic changes in our html page

// basically accessing the object nodes and change the their property values brings change in look and feel of webpage /dynamic manipulation/change
// if script tag is written in head tag which means srcipt should be loaded first before body loads and values of body can't be acess
// hence script tag is written within body tag so that body elements can be accessed using javascript


// DOM manipulation
// Accessing the elements/tags of html code/object is by using id
// SELECTING WITH ID
// document.getElementById("id")

// Id are represented with # while class is represented with .
// document.getElementById("heading") returns the object with that particular id and then using the object and their properties can be alter
let headObj=document.getElementById("heading");
console.dir(headObj);

// id are unique across the document

// Selecting with class
// document.getElementsByClass("className") when we want multiple objects to have similar properties we group them under class
// button text,p text should be white add it in one class and make button,p tag to be its object. "." is used to represent a class
//  getElementsByClass returns a html collections as a class can have multiple child object if class name is not represent it 
// returns an empty html collection

let headings=document.getElementsByClassName("heading-class");
let headings1=document.getElementsByClassName("heading");


// Selecting using the tagNAme
// document.getElementsByTagName("tagName")

let obj=document.getElementsByTagName("h1");



