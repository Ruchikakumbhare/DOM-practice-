 let ulist = document.querySelector('ul')
 let input1 =document.querySelector('input')
 let but1 = document.querySelector('#one')
 console.log(ulist)
 console.log(input1)
 console.log(but1)

but1.addEventListener('click',function(){

    let fruit = input1.value
    let newel = document.createElement('li')
    newel.textContent = fruit
    createButtons(newel)                            // isse buttons create honge
    ulist.appendChild(newel)
    input1.value = " "
})

function createButtons(li){
    let r =document.createElement('button')
    r.textContent ="Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u =document.createElement('button')        // <button></button>
    u.textContent = "Up"                          //  <button>Remove</button>
    u.classList.add('up')                         // <button class = "remove">Remove</button>
    li.appendChild(u)


   let d = document.createElement('button')
   d.textContent = "Down"
   d.classList.add('down')
   li.appendChild(d)
}
    // event - object ---- properties and method
    //console.log(event.target)
    //console.log(event.target.tagName)
    //console.log(event.target.className)

ulist.addEventListener('click',function(event){
    if(event.target.tagName == "BUTTON"){
        if(event.target.className == "remove"){
            //
        }
    else if(event.target.className == "up"){
        //
    }
    else if(event.target.className == "down"){

    }
 }
})







