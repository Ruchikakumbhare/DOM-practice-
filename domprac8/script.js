//<h1 id="aa" class="bb" name="cc">Heading</h1>

let head =document.querySelector('h1')
console.log(head)

let byclass = document.querySelector('.bb')
console.log(byclass)                            //node list


let byclass1=document.getElementsByClassName('bb')
console.log(byclass1)                             //html coll


let one =document.getElementById('aa')
console.log(one)

one.classList.add('rr')
console.log(one.className)

one.classList.remove('bb')
console.log(one.className)







//<h1 id="aa" class="bb" name="cc">Heading</h1>

let byid =document.querySelector('#aa')
console.log(byid)

//byattribute
let a1=byid.getAttribute('id')
console.log(a1)

byid.setAttribute('ruchi','rk')
console.log(byid)


byid.setAttribute('ruchi','rr')
console.log(byid)

byid.removeAttribute('ruchi','rr')
console.log(byid)