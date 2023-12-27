// console.log("Hi welcome to Arrays class");
// Arrays is a data structure which stores collections of items(primitive type data mostly data is homogeneous)
// let aasume we need store marks 5 students brute force create 5 variable
let stu1=97;
let stu2=98;
let stu3=78;
let stu4=35;
let stu5=56;
// but this approach fails when we need to store more student marks we need to access inidividual student marks with its 
// specific name also its tightly coupled (hard coding)
// Another way is to create a object of marks and key will be stu1,stu2.... issue with this approach accessing data still requires us
// to enter name as key to access value  what if instead of key as string we have it as integer 0-val,1-val... ie is array
// let student={
//     stu1:97,
//     stu2:78,
//     stu3:87,
// };
// console.log(student);

// now all student marks  are under the same umbrella(can be accessed using same variable name ) and val can be accessed using position
// Hence arrays is linear data structure info is stored in sequential way mostly but can be randomly access using indices

// let marks=[97,56,78,88,95];
// let heroes=["ironman","spiderman","thor","hulk","captainAmerica"];
// console.log(marks);
// console.log(heroes);

// // though we can store collections of non homogeneous data type as well but not preferred
// let arr=["Hello", 97,true];
// console.log(arr);

// // array is a object type in javascript hence keys can be dynamically typed values where keys are nothing but indices 
// // length is a property of array to know the size of array
// console.log(arr.length);
// console.log(typeof arr);


// looping over an array
// brute force way  print each index element 
// loops are used for iterables(collections of characters,integer,object etc)
// as we are doing the same task again till a specific condition why not use loops which does the same only indcies are change
// Print all elements of an Array


// let heores=["batMan","spiderMan","IronMan","Thor","Shaktiman","Hulk"];
// for(let i=0;i<heores.length;i++){
//     console.log(heores[i]);
// }
// console.log("Printing array elements using while loop")
// let i=0;
// while(i<heores.length){
//     console.log(heores[i++]);
// }
// console.log("Printed array elements");
// What if we try to access array index which >=array length
// As there is no such index or element javascript says i dont know(UNDEFINED)
// ARRAY IS A OBJECT WHICH IS MUTABLE WHERE AS STRINGS ARE IMMUTABLE
// console.log(heores[heores.length+10]);

// Print elements using for of,for in loop
// for(let x of heores){
//     console.log(x);
// }
// for(let x in heores){
//     console.log(heores[x].toUpperCase());
// }


// Q1 Given an array of class student marks find out the average and print it
// let arr=[85,97,44,37,76,60];
// let TotalMarks=0;
// for(let marks of arr){
//     TotalMarks+=marks;
// }
// console.log(`Average marks of class is ${(TotalMarks/arr.length)}`);

// Given an array of prices of length n apply 10% off on prices and modifiy the prices to their original prices after discount
// as Array as mutable we can modifiy the value at each index
// let price=[250,645,300,900,50];

// for(let idx=0;idx<price.length;idx++){
//     price[idx]=price[idx]-(price[idx]*10)/100;
//     console.log(price[idx]);
// }


// In javascript we have dynamic arrays 
// push()- method adds an item at end of the same array and returns the updated length of array

// let arr=[1,2,3];
// const obj={
//     name:"vipul",
//     age:23,
//     tag:":loser",
// };
// console.log("Length before adding element : ",arr.length);
// console.log("Length after adding element : ",arr.push(4));
// console.log(arr);

// pop()-this method removes an element from the end of array and returns the deleted element 
// let deletedVal=arr.pop();
// console.log("Pop item is : ",deletedVal);

// toString()- create a new String by adding all elements of array seperated by comma and returns the string

// console.log(arr.toString());

// concat(array obj1,array obj2....) -joins the elements to end of array which is calling concat method and returns and new array
// if obj is same type add indiivdual elements else treats whole object as single elements and adds it
// let arr1=[4,5,6];
// let arr2=[7,8,9];
// console.log(arr.concat(arr1,arr2));
// // arr and arr1 and arr2 doesn't change as it creates as new array and returns the address without modifiying calling array objecy
// console.log(arr, arr1, arr2);

// unshift(obj)- adds the element at front of original array thus modifying the original array and returns updated length of array
// console.log(arr.unshift(0));
// console.log(arr);

// console.log(arr.unshift(obj));
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// shift()-removes an elements from front of original array this modifying the original array and returns the removed obj

// console.log(arr.shift());


// slice(start index,end index)- returns a peice of array containing elements from start index till end Index-1 by creating a 
// new array and storing in it and doesn't changes the original array
// slice() -this method can be used to make the copy of array as well
// default value of start index and end index are 0 ,arr.length
// console.log(arr.slice(1));
// console.log(arr.slice());
// console.log(arr);

// splice():change original array(add,remove,replace)
// splice(startIndex,delCount,newEl1,newEle2,newEle3,......)- basically it takes action of deleting elements from start index which is represented by
// delCount and newElement after deletion any elements to be added if deletion count is 0 then addition starts from there and shifts
// the previous elements ahead by positions equal to number of newly added elements
// here if array object is passed it treats it as single element
// returns the array of deleted elements and modifies the original array while deleted elements are added in new array and returned

// console.log(arr);

// let arr1=[8,9,9];
// console.log(arr.splice(2,2,8,9,9));
// adding elements at end of array
// console.log(arr.splice(arr.length,0,8,9,9,9));
// console.log(arr);

// way to replace an element is say delCount 1 and add the new Element
// if delCount and newElements are not passed is acts as slice(startIndex) and removes all elements from given index
// console.log(arr.splice(2,1,90));
// console.log(arr);
// console.log(arr.splice(3));
// console.log("Splice after only passing startIndex : ",arr);

// Create an array to Store companies ->"bloomberg","Microsoft","Uber","Google","IBM","Netflix"

// let companies=["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // a.Remove the first company from the array -use shift() method which removes first element and returns removed element;
// // console.log(companies.shift());
// console.log("After removing first Element arr is : ",companies);
// // Remove Uber and Add Ola in its place here we will use splice(uber index,1,"Ola")
// console.log(companies.splice(2,1,"Ola"));
// console.log("After replacing Uber with Ola : ",companies);

// // Add Amazon at last -use splice(arr.length,0,new Element) or push method which adds element at end of array

// // companies.push("Amazon");
// // console.log("After adding Amazon at End of Array : ",companies);
// // Another Way
// companies.splice(companies.length,0,"Amazon");
// console.log("Array after adding Amazon at End:  ",companies);





