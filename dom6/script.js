let inputT = document.querySelector('input')
let buttonT =document.querySelector('button')
let liT = document.querySelector('ol')

buttonT.addEventListener('click',function(){
    let headings =inputT.value
    let newlist = document.createElement('li')
    newlist.textContent = headings
    liT.appendChild(newlist)
})