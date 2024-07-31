let ulist=document.querySelector('ul')
let button =document.querySelector('#one')
let input1=document.querySelector('input')

button.addEventListener('click',function(){
   let fruit= input1.value
   let newl=document.createElement('li')
   newl.textContent=fruit
   ulist.appendChild(newl)
   input1.value = ""
   createButtons(newl)
})

function createButtons(li){
    let rr =document.createElement('BUTTON')
    rr.textContent="Remove"
    rr.classList.add('remove')
    li.appendChild(rr)

    let uu =document.createElement('BUTTON')
    uu.textContent="Up"
    uu.classList.add('up')
    li.appendChild(uu)

    let dd =document.createElement('BUTTON')
    dd.textContent="Down"
    dd.classList.add('down')
    li.appendChild(dd)
}

ulist.addEventListener('click' ,function(event){
    if(event.target.tagName == 'BUTTON'){
        if(event.target.className == "remove"){
            let li=event.target.parentElement
            let ulist=li.parentElement
            ulist.removeChild(li)
        }
        else if(event.target.className == "up"){
            let li=event.target.parentElement
            let ulist=li.parentElement
           let prev= li.previousElementSibling
           if(prev){
            ulist.insertBefore(li,prev)
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


 
