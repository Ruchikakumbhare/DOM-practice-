let input1 = document.querySelector('input')
let ulist =  document.querySelector('ul')
let but =    document.querySelector('#one')

but.addEventListener('click',function(){
   let myl = input1.value
   let newl =document.createElement('li')
   newl.textContent=myl
   ulist.appendChild(newl)
   createButtons(newl)
   input1.value = ""
})

function createButtons(li){
    let r = document.createElement("BUTTON")
    r.textContent = "Remove"
    r.classList.add("remove")
    li.appendChild(r)


    let u =document.createElement('BUTTON')
    u.textContent ="Up"
    u.classList.add("up")
    li.appendChild(u)

    let d =document.createElement("button")
    d.textContent ="Down"
    d.classList.add("down")
    li.appendChild(d)
}


ulist.addEventListener('click',function(event){
    if(event.target.tagName == "BUTTON"){
        if(event.target.className == "remove"){
            let li =event.target.parentElement
            let ulist =li.parentElement
            ulist.removeChild(li)
        }
    else if(event.target.className =="up"){
        let li =event.target.parentElement
        let ulist= li.parentElement
        let prev=li.previousElementSibling
        if(prev){
            ulist.insertBefore(li,prev)
        }
    }
    else if(event.target.className =="down"){
        let li =event.target.parentElement
        let ulist=li.parentElement
        let next =li.nextElementSibling
        if(next){
            ulist.insertBefore(next,li)
        }
    }



    }
})