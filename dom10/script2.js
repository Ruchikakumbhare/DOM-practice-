let inputT =document.querySelector('input')
let ulist =document.querySelector('ul')
let button =document.querySelector('#one')

button.addEventListener('click',function(){
    let my = inputT.value
    let newl = document.createElement('li')
    newl.textContent = my
    createButtons(newl)
    ulist.appendChild(newl)
    inputT.value = ""
})

function createButtons(li){
    let r = document.createElement('button')
    r.textContent = "remove"
    r.classList.add("remove")
    li.appendChild(r)

    let u =document.createElement('button')
    u.textContent = "Up"
    u.classList.add("up")
    li.appendChild(u)

    let d =document.createElement('button')
    d.textContent = "Down"
    d.classList.add("down")
    li.appendChild(d)
}

ulist.addEventListener('click',function(event){
    if(event.target.tagName == "BUTTON"){
        if(event.target.className == "remove"){
           let li = event.target.parentElement
           let ulist =li.parentElement
           ulist.removeChild(li)
        }
   else if(event.target.className == "up"){
        let li =event.target.parentElement
        let previ=li.previousElementSibling
        let ulist =li.parentElement
        if(previ){
            ulist.insertBefore(li,previ)
        }
    }
    else if(event.target.className == "down"){
        let li = event.target.parentElement
        let nextLi = li.nextElementSibling
        let ulist =li.parentElement
        if(nextLi){
            ulist.insertBefore(nextLi,li)
        }
       }


    }
})


