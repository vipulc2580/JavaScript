// String is a sequence of characters used to represent text
// let varName="input/string"
// strings can be created in two ways let str="vipul" or let str='vipul' single quotes or within double quotes
// all Strings in javaScript have properties/attributes which stores some information regarding string and functions/method
// length property is used to find out size of string _ is also counted as character


// String length
let str="Pooja Seervi";  
//       01234567891011  indices are from [0-n-1] where n is length of string
console.log(str.length);


// String indices as strings are sequence of characters we can access this characters using indices 0-str.length-1
for(let i=0;i<str.length;i++){
    console.log("ith pos character is : ",str[i]);
}
console.log("string traversal completed!");

