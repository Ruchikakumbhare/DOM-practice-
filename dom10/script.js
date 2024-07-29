let ulist = document.querySelector('ul')
let input1 =document.querySelector('input')
let button =document.querySelector("#one")

button.addEventListener('click',function(){
   let my=  input1.value
  let newe= document.createElement('li')
  newe.textContent=my
  createButtons(newe)
  ulist.appendChild(newe)
  input1.value = ""
})

function createButtons(li){
    let r = document.createElement('button')
       r.textContent="Rmove"
       r.classList.add("remove")
       li.appendChild(r)


    let u =document.createElement('button')
    u.textContent="Up"
    u.classList.add('up')
    li.appendChild(u)


    let d =document.createElement('button')
    d.textContent="Down"
    d.classList.add('Down')
    li.appendChild(d)

}
ulist.addEventListener('click',function(event){
   if(event.target.tagName == "BUTTON"){
      if(event.target.classList =="remove"){
         let li =event.target.parentElement
         let ulist =li.parentElement
         ulist.removeChild(li)
      }
   
   else if(event.target.classList =="up"){
    let li=  event.target.parentElement
   let previli = li.previousElementSibling
   let ulist=li.parentElement
   if(previli){
      ulist.insertBefore(li,previli)
    }
   }
 else if(event.target.className =="down"){
      let li = event.target.parentElement
      let nextLi =li.nextElementSibling
      let ulist= li.parentElement
    if(nextLi){
      ulist.insertBefore(nextLi,li)
     }
 } 
}
})

