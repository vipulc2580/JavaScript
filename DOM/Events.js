console.log("i Will Learning Events in JavaScript");
// The change in the state of object is known as Event
// when we deal with Events in DOM it is called Event Handling
// Events are fired to notify code of "interesting changes" that may affect code execution
// Mouse events (click ,double click) etc...
// KeyBoard events (keyPress, keyUp, keyDown)
// Form events (submit etc..)
// Print event & many more

// each element has properities whose change in state can execute the code to see dynamic changes
// for button we have onClick property we set this to change to be made
// similarly we have ondblClick property we set this to change to be made when we click twice on the button
// onmouseover when is hover on a element the the change which is set to property takes place
// setting values /handling code as attributes in HTML is called InLine Event Handling

// to handle the event which setting value for properities and executing when state change in JS
// node.event= ()=>{
    // someCode;
    // handle here

// }

// let btn1=document.querySelector("#btn1");
// // console.log(btn1);
// btn1.onclick= () => console.log("Button was clicked");

// let box=document.querySelector(".box");
// box.onmouseover= ()=> console.log("you are inside the div");


// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=> console.log("i was clicked");
// let btn2=document.querySelector("#btn2");
// btn2.ondblclick=()=> console.log(" i was double clicked");

// If a event for a particular state is handled using inLine and as well in JS JS eventHandler has higher priority than 
// InLine Event Handler
// IF an same type of event for a particular element is handled many times the last written handler is executed ,event handling overiding
// is not possible it is drawback basically the event is overwritten by last event handler

// btn1.onclick=()=> console.log("Handler2");
// btn1.onclick=()=> console.log("Handler3");


// Event Object : It is a special object that has details about the event
// All event handlers/properities has access to the event Object's properities and methods
// node.event=(e)=>{ handler}
// properties : type of event, target:which element where the event occured, clientX,clientY= excatly where the mouse
// was hovered from x-position, y-position
// event Object is accessed by them we have to pass it as parameter
// let divObj=document.querySelector("div");
// divObj.onmouseover=(e)=>{
//     console.log(e.clientX, e.clientY);
//     console.log(e.target);
//     console.log(e.type);
// }

// As we have seen above for a particular event we can only define one function which is being called in order
// to call multiple functions when an event is occured we add is to eventListener list such when event is occured
// all functions within event listener are executed

function print(){
    console.log("Hello");
}
function alert1(){
    alert("U have clicked on button");
}

// node .addEventListener(event,callBack);
let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("Hello");
});
btn1.addEventListener("click",alert1);

// since we adding event handlers for an event for a given element but if we want to remove an event handler 
// node.removeEventListener(event,callback reference)
// note : the callback reference should be same to remove; 
btn1.removeEventListener("click",alert1);