//<h1  id="one" class="two" name="nn">NAmes</h1>
//<p class="pp">This is paragraph</p>
    // javascript element create
    // javascript element update 
    // javascript element - retrive
    // javascript element delete
    
    // javascript attribute create
    // javascript attribute update 
    // javascript attribute delete 
    // javascript attribute value retrive
    
//.................................attribute...........................
//<h1  id="one" class="two" name="nn">NAmes</h1>
//<p class="pp">This is paragraph</p>
let para=document.querySelector('p')
console.log(para)
console.log(para.className) //.....................direct class mil gya -pp
para.classList.add('rr')
console.log(para)            //<p class="pp rr">This is paragraph</p>---------------> rr is add by classList.add()

para.classList.remove('pp')
console.log(para)            //<p class="rr">This is paragraph</p> ----------->pp is removed by classList.remove()


para.classList.toggle("rr")
para.classList.toggle("pp")
console.log(para)

//<h1  id="one" class="two" name="nn">NAmes</h1>

let idE = document.querySelector('#one')
console.log(idE)            //------------------------> css selector

//retrive the value of attribute  [getAttribute]
let aaa=idE.getAttribute('id')
console.log(aaa)                  //----->one      [beacause id s vvalue is one ]

let bbb=idE.getAttribute('class')
console.log(bbb)                 //----->two

let ccc=idE.getAttribute('name')
console.log(ccc)                 //----->nn

//update                       [setAttribute]
idE.setAttribute('id',"five")
console.log(idE)             //<h1 id="five" class="two" name="nn">NAmes</h1> update id is five

idE.setAttribute('class',"six")
console.log(idE)

idE.setAttribute('name',"seven")
console.log(idE)                 //<h1 id="five" class="six" name="seven">NAmes</h1> update


//add [setAttribute]
idE.setAttribute('rk','ruchi')
console.log(idE)         //<h1 id="five" class="six" name="seven" rk="ruchi">NAmes</h1> rk attribute and value is add 

//remove [removeAttributr]
idE.removeAttribute('class')
console.log(idE)            //<h1 id="five" name="seven" rk="ruchi">NAmes</h1>   clss is remove

 