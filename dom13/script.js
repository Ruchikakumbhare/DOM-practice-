
//<h1 id="one" class="two" name="nm">COLOR</h1>

let head =document.querySelector('h1')
let ulist=document.querySelector('ul')
let input1=document.querySelector('input')
let button1=document.querySelector('button')
let byAttr = document.querySelector('h1[name="nm"]')
let byid =document.querySelector('#one')
let byclass=document.querySelector('.two')
let lilist=document.querySelector('li')

let allist=document.querySelectorAll('li')


console.log(head)
console.log(ulist)
console.log(input1)
console.log(button1)
console.log(byAttr)
console.log(lilist)
console.log(allist)





button1.addEventListener('click',function(){
    let my=input1.value
    let newl=document.createElement('li')
    newl.textContent=my
    ulist.appendChild(newl)
    input1.value = ""
})


// for(let i=0;i<allist.length;i++){
//       console.log(allist[i].textContent)
//       allist[i].style.color="red"
// }    

ulist.addEventListener('click',function(){
    for(let i=0;i<allist.length;i++){
        console.log(allist[i].textContent)
        allist[i].style.color="red"
  }    
  
})

for(let i = 0 ; i < allist.length ; i++){

        if(i % 2 == 0){
            allist[i].style.color = "blue"
        }
        else {
            allist[i].style.color = "green"
        }
    
    }





// for(let i = 0 ; i < allLiElement.length ;i++){
// //     //console.log(i)
// //     console.log(allLiElement[i].textContent)
// //     allLiElement[i].style.color = "red"
// // }

// ulList.addEventListener('click',function(){
//     for(let i = 0 ; i < allLiElement.length ;i++){
//     //console.log(i)
//     console.log(allLiElement[i].textContent)
//     allLiElement[i].style.color = "red"
// }
// })



// // //program 2
// // for(let i = 0 ; i < allLiElements.length ; i++){

// //     if(i % 2 == 0){
// //         allLiElements[i].style.color = "pink"
// //     }
// //     else {
// //         allLiElements[i].style.color = "green"
// //     }

// // }

