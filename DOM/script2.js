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
// let headObj=document.getElementById("heading");
// console.dir(headObj);

// id are unique across the document

// Selecting with class
// document.getElementsByClass("className") when we want multiple objects to have similar properties we group them under class
// button text,p text should be white add it in one class and make button,p tag to be its object. "." is used to represent a class
//  getElementsByClass returns a html collections as a class can have multiple child object if class name is not represent it 
// returns an empty html collection

// let headings=document.getElementsByClassName("heading-class");
// let headings1=document.getElementsByClassName("heading");


// Selecting using the tagNAme
// document.getElementsByTagName("tagName")

// let obj=document.getElementsByTagName("h1");


// another way to access particular tag by class,tag,id name is using 
// querySelector method
// query selector method gives the first object which matches our argument
// be it class/tag/id
// let firstObj=document.querySelectorAll("h1");
// console.log(firstObj.innerHTML);

// querySelectorAll() method gives a list of elementNodes which matches our arguments

// let objList=document.querySelectorAll("h1");
// console.log(objList);
// console.log(obj.length);
// console.log(obj[0].innerHTML);
// console.log(obj[1].innerHTML);

// in case our search argument is class pass .className as argument
// in case our seatch argument is id pass #idName as argument
// though it doesn't makes any sense to use queryAll in case of id
// as we keep the id for each tag unique
// let idObj=document.querySelector("#myId");
// console.log(idObj.innerHTML);

// let classObj=document.querySelectorAll(".headingclass");
// console.log(classObj.length);
// console.log(classObj[0].innerHTML);
// console.dir(classObj[0]);


// Dom Manipulation Properties we can set,get and update the properities values of this element
// tagName : returns tagName for element nodes
// let classObj=document.querySelectorAll(".headingclass");
// console.log(classObj.length);
// console.log(classObj[2].tagName);

// if we console.log(elementNode) the code within it printed
// console.log(classObj[2]);


// innerText : returns the text content of the element and all its children
// let obj=document.getElementsByTagName("body");
// console.dir(document.body);

// in DOM each element has three nodes text,comment,childElement nodes
// hence the firstChild node of body is textNOde
// let obj=document.body;
// console.log(obj);

// children property returns HTML collection/array of all children nodes
// let childNodes=document.body.children;
// we can access this element nodes using indices this helps in nagivation
// console.log(childNodes[0].innerHTML);



// LEARN CHILDREN,FRISTCHILD,LASTCHILD PROPERTY,ALSO ABOUT THREE NODES i.e TEXT,COMMENT,ElEMENTS

// innerText : returns the plain text content of the element and all its children
// let div=document.querySelector("div");
// console.log(div.innerText);


// innerHTML :returns the plain text with HTML contents in the elements
// console.log(div.innerHTML);
// and we can change  the content and html dynamically during runTime

// let heading=document.querySelector("h1");
// heading.innerText="new Heading";
// heading.innerHTML="<i>new Heading<i>";
// textContent : returns textual content even for hidden elements content of 
// hidden of elements can also printed over here


// Create a H2 heading element with text -"Hello JavaScript".Append "from Apna College Students"
// to this text using JS
// let element=document.querySelector("h2");
// element.innerText=element.innerText.concat(" from Apna College Students");

// Create 3 Divs with common class Name=".box" Acess them and add some unique
// text to each of them
// let textObj=["I love you Pooja","Please love me Pooja","I m loosing my mind"];

// let objEle=document.querySelectorAll(".box");
// // for(let i=0;i<objEle.length;i++){
// //       objEle[i].innerHTML=`<p>${textObj[i]}</p>`;
// // }
// let uniqueVal=1;
//   for(let divs of objEle){
//       divs.innerText="hi this vipul "+uniqueVal;
//       uniqueVal++;
//   }



// DOM Manipulation 
// ATTRIBUTES
// getAttribute(attr) : to get the attribute value
// attributes the additional info for an element of dom to get attributes
// for a particular element of particular type we can use getAttribute(attribute)


// setAttribute(attr,value)
// we use to change style by changing the value of attribute i.e className, idName
function changeId(){
    let ele1=document.querySelector("h1");
    let val=ele1.getAttribute("id");
    ele1.setAttribute("id","chId");
    // ele1.style.backgroundColor="green";
}

// console.log(val);

// STYLE
// .node Style we can access all style attributes and can alter it accordingly
// inLine CSS has higher Priority when compare css file style
function changeId(){
    let ele1=document.querySelector("h1");
    // let val=ele1.getAttribute("id");
    // ele1.setAttribute("id","chId");
    ele1.style.backgroundColor="green";
    ele1.style.textAlign="center";
}




// Property is css are converted to camelCase in JavaScript while accessing them
// color=color background-color=backgroundColor text-align=textAlign


// Insert Elements IN DOM
// node.append(el)-adds at the end of node(inside)
// Adding element works in two steps 1.create the element and then append to node
function addBottom(){
    let task=prompt("Enter the Task : ");
    let obj=document.querySelector("div");
    let p=document.createElement("p");
    p.innerText=task;
    obj.append(p);
}

// node.prepend(el) -adds at the start of the node(inside)
function addTop(){
    let task=prompt("Enter the task : ");
    let obj=document.querySelector("div");
    let p=document.createElement("p");
    p.innerText=task;
    obj.prepend(p);
}

// node.before(el) : adds before the node (outside)
// let obj=document.querySelector("div");
// let btn=document.createElement("button");
// btn.innerText="Add Me";
// obj.before(btn);


// node.after(el) : adds after the node (outside)
// let obj1=document.querySelector("div");
// let btn1=document.createElement("button");
// btn1.innerHTML="Add me Last";
// obj1.after(btn1);

// node.remove() : use to remove the element
// let heading1=document.querySelector("h1");
// heading1.remove();

// HOME WORK APPENDCHILD() REMOVECHILD()


// q1 Create a new Button element. Give it a text "click Me",backgroundColor:red , textColor=white


// let btn1=document.createElement("button");
// btn1.innerText="Click Me";
// btn1.style.backgroundColor="Red";
// btn1.style.color="White";
// document.body.prepend(btn1);

// when to add style to an element using Javascript it is not css but it is added as inline css

// Q2 create a p tag in html ,give it a class & some styling Now create a new class in CSS and try 
// to append this class to the p element
let firstPElement=document.querySelector("p");
let classList1=firstPElement.classList;
// using set attribute method existing class is overriden new class design is applied
// but to just append new class to element rather than overriding previous class we use classList and add new class which holds
// design which preserves class design and adds appended class design
// to remove a particular we use remove method
// console.log(classList.length);
console.dir(classList1);
classList1.add("myClass2");





 












