let input2 =document.querySelector('input')
let ulist=document.querySelector('ul')
let button = document.querySelector('#one')

button.addEventListener('click',function(){
    let my = input2.value
    let newli =document.createElement('li')
    newli.textContent = my 
    createButtons(newli)
    ulist.appendChild(newli)
    input2.value = " "
})

function createButtons(li){
    let r =document.createElement('BUTTON')
    r.textContent = "Remove"
    r.classList.add("remove")
    li.appendChild(r)
 
    let u =document.createElement('BUTTON')
    u.textContent = "Up"
    u.classList.add("up")
    li.appendChild(u)

    let d =document.createElement('BUTTON')
    d.textContent = "Down"
    d.classList.add("down")
    li.appendChild(d)


}

ulist.addEventListener('click',function(event){
    if(event.target.tagName == "BUTTON"){
        if(event.target.className == "remove"){
            let li=event.target.parentElement
            let ulist =li.parentElement
            ulist.removeChild(li)

        }
    
    else if(event.target.className == "up"){
        let li =event.target.parentElement
        let previ =li.previousElementSibling
        let ulist= li.parentElement
        if(previ){
           ulist.insertBefore(li,previ)
       }
    }

     else if(event.target.classList == "down"){
        let li =event.target.parentElement
        let nextli= li.nextElementSibling
        let ulist=li.parentElement
        if(nextli){
            ulist.insertBefore(nextli,li)
        }
     }




    
    }
})
