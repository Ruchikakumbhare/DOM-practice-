let ulist =document.querySelector('ul')
let input1 =document.querySelector('input')
let but =document.querySelector('#one')

console.log(ulist)
console.log(input1)
console.log(but)

but.addEventListener('click',function(){
    let name = input1.value 
    let newli = document.createElement('li')
    newli.textContent = name
    createButtons(newli)
    ulist.appendChild(newli)
    input1.value = ""
})

ulist.addEventListener('click',function(event){
  if(event.target.tagName== "BUTTON"){
    if(event.target.className == "remove"){
        let li = event.target.parentElement
        let  ulist = li.parentElement
        ulist.removeChild(li)
    }
   else if (event.target.className == "up"){
    let li = event.target.parentElement
    let prevLi = li.previousElementSibling
    let ulist=li.parentElement
    if(prevLi){
        ulist.insertBefore(li,prevLi)
    }
   }
   else if(event.target.className == "down"){
    let li = event.target.parentElement
    let nextLi = li.nextlisibling
    let ulist =li.parentElement
    if(nextLi){
   ulist.insertBefore(nextLi,li)
    }
   }
  }
})

function createButtons(li){
    let r =document.createElement('button')
    r.textContent="Remove"
    r.classList.add("remove")
    li.appendChild(r)

    let u =document.createElement('button')
    u.textContent="Up"
    u.classList.add("up")
    li.appendChild(u)

    let d =document.createElement('button')
    d.textContent="Down"
    d.classList.add("down")
    li.appendChild(d)
}