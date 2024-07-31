
//......................css selector.............................

let head =document.querySelector('h1')
console.log(head)        

let cll1 = document.querySelector('.two')
console.log(cll1)           //node list



//className
//<h1 id="one" class="two" name="ee">List</h1>
let clssN = document.getElementsByClassName('two')
console.log(clssN)      //HTMLCollection [h1#one.two, one: h1#one.two, ee: h1#one.two]

//classId
let id = document.getElementById('one')
console.log('one')


//bytagName
let allEle = document.getElementsByTagName('li')
console.log(allEle)       // html collections

let allEle1 =document.querySelectorAll('li')
console.log(allEle1)       //node list


//byname
let byName1 = document.querySelectorAll('[name = "ee"]')
console.log(byName1)

let byName2= document.getElementsByName('nm')
console.log(byName2)

//.............................
let ele  = document.getElementById('one')
console.log(ele.className)

ele.classList.add('three')
console.log(ele.className)

ele.classList.remove('two')
console.log(ele.className)

ele.classList.add('four')
console.log(ele.classList)         //DOMTokenList(2) ['three', 'four', value: 'three four']


// toggle 
ele.classList.toggle('three')
ele.classList.toggle('three')
console.log(ele.className)

