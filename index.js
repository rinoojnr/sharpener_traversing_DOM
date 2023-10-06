// var itemList = document.querySelector('#items');

// //parentNode
// // itemList.parentNode.style.backgroundColor ='red';
// // console.log(itemList.parentNode.parentNode.parentNode)


// //parentElements
// // itemList.parentElement.style.backgroundColor='green';//same as parentNode

// // //childNodes
// // console.log(itemList.childNodes)//nodeList


// // //children
// // console.log(itemList.children)
// // console.log(itemList.children[0].style.backgroundColor='red') //html collection

// // //firstChild
// // console.log(itemList.firstChild,"===============firstchild==========")

// // //firstElementChild
// // console.log(itemList.firstElementChild,"=================firstelementChild==============");
// // itemList.firstElementChild.textContent='helooo';

// //lastChild
// // console.log(itemList.lastChild)

// // //lastElementChild

// // console.log(itemList.lastElementChild,"===================lastElementchild====================")
// // itemList.lastElementChild.style.backgroundColor='red'

// //nextSibling
// console.log(itemList.nextSibling)

// //nextElementSibling
// console.log(itemList.nextElementSibling,"==========================nextElementSibling=================")

// //previousSibling
// console.log(itemList.previousSibling,"===================previousSibling==================================")

// //previousElementSibling
// console.log(itemList.previousElementSibling,"======================previousElementSibling================")
// itemList.previousElementSibling.style.color='red';


//createElement

//create div
var newDiv = document.createElement('div')
console.log(newDiv)

//Add class
newDiv.className='main-class';

//Add id
newDiv.id ='main-class-id'

//Add attribute
newDiv.setAttribute('title','hello div');

//Create newText node
var newDivText =document.createTextNode("Hello world")

//Added text node into a div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 =document.querySelector('header h1');
newDiv.style.backgroundColor='red'
container.insertBefore(newDiv,h1)



