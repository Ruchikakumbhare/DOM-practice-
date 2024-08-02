

//<h1 id="one" class="two" name="three">Welcome to my practice</h1>
let id1 =document.querySelector('#one')
console.log(id1)
let li1 =document.querySelector('li')
console.log(li1)
let li11=document.querySelectorAll('li')
console.log(li11)

//<h1 id="one" class="two" name="three">Welcome to my practice</h1>
let id2 =document.getElementById('one')
console.log(id2)

let clss1=document.getElementsByClassName('two')
console.log(clss1)

id2.classList.add('five')
console.log(id2.className)

id2.classList.remove('five')
console.log(id2.className)


//<h1 id="one" class="two" name="three">Welcome to my practice</h1>
let ele =id1.getAttribute('id')
console.log(ele)

id1.setAttribute('id','four')
console.log(id1)

id1.setAttribute('idde','five')
console.log(id1)
id1.removeAttribute('id','four')
console.log(id1)
