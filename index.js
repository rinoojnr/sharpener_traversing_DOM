var itemList = document.querySelector('#items');

//parentNode
// itemList.parentNode.style.backgroundColor ='red';
// console.log(itemList.parentNode.parentNode.parentNode)


//parentElements
// itemList.parentElement.style.backgroundColor='green';//same as parentNode

//childNodes
console.log(itemList.childNodes)//nodeList


//children
console.log(itemList.children)
console.log(itemList.children[0].style.backgroundColor='red') //html collection

//firstChild
console.log(itemList.firstChild,"===============firstchild==========")

//firstElementChild
console.log(itemList.firstElementChild,"=================firstelementChild==============");
itemList.firstElementChild.textContent='helooo';