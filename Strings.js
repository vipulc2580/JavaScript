// String is a sequence of characters used to represent text
// let varName="input/string"
// strings can be created in two ways let str="vipul" or let str='vipul' single quotes or within double quotes
// all Strings in javaScript have properties/attributes which stores some information regarding string and functions/method
// length property is used to find out size of string _ is also counted as character


// String length
// let str="Pooja Seervi";  
// //       01234567891011  indices are from [0-n-1] where n is length of string
// console.log(str.length);


// // String indices as strings are sequence of characters we can access this characters using indices 0-str.length-1
// for(let i=0;i<str.length;i++){
//     console.log("ith pos character is : ",str[i]);
// }
// console.log("string traversal completed!");

// Template literal it is a special string in javscript which allows to embed expression within it the value of expression 
// taken during the runtime basically to avoid normal way of creating a  string which as ,var so 

// let a="ApnaCollege";
// let tutor="Shradhha Didi"
// console.log("I m learning Javasrcipt from ",a," taught by ",tutor);
// to aviod adding comma's for getting value of var/expression we can use template literal to achieve the same
// expression are embedded into ${expression/var}-this way of placing exp/var is called String interpolation the value is taken during the runTime

// let str=`I m learning Javascript from ${a} taught by ${tutor}`;
// console.log(str);
// console.log(typeof str);

// let obj={
    // item: "pen",
    // price: 10,
// };
// normal way to print the item and price
// console.log("This ",obj.item," cost is ",obj.price," rupees");
// here the obj.price is number 

// Using template literal it can be done
// console.log(`this ${obj.item} cost is ${obj.price} rupees`);
// but here since obj.price is embedded hence it is string
// console.log(`a+b = ${1+2}`);

// String Interpolation : to create strings by doing subsitution of placeholders
// inOrder to add escape character in string we use backSlash then escape character
// \t to give a scape tab
// \n to move to new line
// to get Apna in one line and college in next line using brute force way

// console.log("Apna");
// console.log("College");

// using escape character
// console.log("Apna\nCollege");
// console.log("Apna\tCollege");
// let a1="Apna\nCollege";
// though we are very adding two extra characters \t but its counted as one 
// console.log(a1.length);

// String in javascript is an object and they are immutable (can't be modified)
// Here are some common string methods/buit-in fuction methods are a way to perform a task on object

// 1.obj.toUpperCase(); -converting all characters of string to UpperCase(A-Z)
// let a="ApNA College";
// console.log(a.toUpperCase());
// console.log(a);
// here a is not modified toUppercase creates a new string and returns it
// a=a.toUpperCase();
// console.log(a);

// 1.obj.lowercase()-converting all characters a of String tolowercase(a-z) by creating a new string and returns it
// console.log(a.toLowerCase());


// 3.obj.trim() removes all leading and trailing spaces from string by creating the new string and returns it
// let b="    hi i m learning javascript    ";
// console.log(b.length);
// console.log(b.trim());

// 4. obj.slice(st,en) -method used to slice the string from given start index to end index excluding end index by creating the new string
// returns it
//  obj.slice(st) -in this case en is consider as length of string hence all characters from st to end of string whole string is returned
// obj.slice()-st=0,en=n same string is returned

// let a="Hello"
// console.log(a.slice(1,3));
// console.log(a.slice(1));
// console.log(a.slice());

// 5.obj1.concat(obj2) -this method is  join obj2 to obj1 and returns new string

let a="Apna";
let b=" College";
let c="is a good channel"
console.log(a.concat(b));
// another way to concat is using + operator obj1+ obj2
let d="hello"+123;
// 123 is internally converted to string then concatenated
console.log(d);
console.log(a+b+c);

// replace(old_val,new_val)-finds first occurence of old_val replaces that with new_val by creating a new string returns it
// relpaceAll(old_val,new_val) replaces all occurences of old_val with new_val

let e="hellololo";
console.log(e.replace("lo","p"));
console.log(e.replaceAll("lo","p"));

// charAt(index) - used to get access to value a given index
let f="Hello";
console.log(f.charAt(0));
f[0]='k';
// though we are alter 0th character but it doesn't changes because string is immutable
console.log(f);
// same string gets printed 


// Q1 take Name from user using prompt and display his userName @Name(name.length)
let name=prompt("Enter the your Name");
userName='@'+name+name.length;
console.log("Your userName is ",userName);