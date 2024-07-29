let head1 =document.querySelector('h1')
let button1 =document.querySelector('button')
let input1=document.querySelector('input')

console.log(head1)
console.log(button1)
console.log(input1)

button1.addEventListener('click',function(){
    let colorText = input1.value
        head1.style.color = colorText

        //input1.value = ""
})

