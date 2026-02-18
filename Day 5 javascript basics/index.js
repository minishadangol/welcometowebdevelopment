//variables in javascript

var fullName = "Minisha dangol";
let addresss="Kathmandu, Nepal";
const bloodGroup="B+";

console.log(fullName);
console.log(addresss);
console.log(bloodGroup);

//datatype

let name='minisha';
let age=20;
let isStudent=true;
let hobbies=['sewing','travelling','vlogger'];//array

let user={
    name:'minisha',
    age:16,
isStudent:true,
hobbies:['sewing','travelling','vlogger'],
};

console.log(user['name']);
console.log(user.age);
console.log(hobbies[0]);


//functiom
function greet(name){
    console.log('Hello',name);
}
greet('minisha');

let headingElementById=document.getElementById('heading-2');
console.log(headingElementById);

const headingElementByQuery=document.querySelector('#heading-2');
const paragraphElement=document.querySelector('.para');

paragraphElement.textContent="This is updated paragraph";
paragraphElement.style.color="blue";
const buttonelement=document.querySelector('.btn');
buttonElement.addEventListener('click',function(){// click event
alert("Button Clicked!");
console.log("button clicked");
});



