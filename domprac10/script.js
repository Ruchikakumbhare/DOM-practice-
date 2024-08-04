//<h1 id="qq" class="rr" name="ee">HEADING</h1>

let byid =document.querySelector('#qq')
let byclass=document.querySelector('.rr')
let list=document.querySelector('li')
let list1=document.querySelectorAll('li')
console.log(byid)
console.log(byclass)
console.log(list)
console.log(list1)


let id1 =document.getElementById('qq')
let class1 =document.getElementsByClassName('rr')
let li1 =document.getElementsByTagName('li')
console.log(id1)
console.log(class1)
console.log(li1)
id1.classList.add('pp')
console.log(id1.className)

let a=id1.getAttribute('id')
console.log(a)


id1.setAttribute('id1','mm')
console.log(id1)

id1.removeAttribute('id1','mm')
console.log(id1)