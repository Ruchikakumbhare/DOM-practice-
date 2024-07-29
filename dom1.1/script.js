
//<h2 id = "one" class = "three" name = "four">Minskole</h2>

// selecting the element -- css selector

// let byTagName=document.querySelector('h1')
// console.log(byTagName)

// let byClassName = document.querySelector('.three')
// console.log(byClassName)

// let byId = document.querySelector('#two')
// console.log(byId)

// tagName[att='val']


let byAttr = document.querySelector('h2[name= "four"]')
console.log(byAttr)