let ulist =document.querySelector('ul')
let input1 = document.querySelector('input')
let but = document.querySelector('#one')

but.addEventListener('click',function(){
    let my =input1.value
    let newl =document.createElement('li')
    newl.textContent=my
    ulist.appendChild(newl)
    input1.value = ""
    createButton(newl)
})

function createButton(li){
    let r =document.createElement('button')
    r.textContent ='Remove'
    r.classList.add('remove')
    li.appendChild(r)

    let u =document.createElement('button')
    u.textContent ='Up'
    u.classList.add('up')
    li.appendChild(u)

    let d =document.createElement('button')
    d.textContent ='Down'
    d.classList.add('down')
    li.appendChild(d)
}


ulist.addEventListener('click',function(event){
    if(event.target.tagName == "BUTTON"){
        if(event.target.className == "remove"){
            let li= event.target.parentElement
            let ulist=li.parentElement
            ulist.removeChild(li)
        }
    else if(event.target.className =="up"){
       let li = event.target.parentElement
       let previ= li.previousElementSibling
       let ulist=li.parentElement
       if(previ){
        ulist.insertBefore(li,previ)
       }
    }
    else if(event.target.className == "down"){
        let li =event.target.parentElement
         let nextl =li.nextElementSibling
         let ulist =li.parentElement
         if(nextl){
            ulist.insertBefore(nextl,li)
         }
    }



    }
})

