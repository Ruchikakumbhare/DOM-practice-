let head1 =document.querySelector('h1')
console.log(head1)

let b = document.querySelector('button')
console.log(b)


b.addEventListener('click',function(){
    head1.textContent = "THIS IS NEHA"
    head1.style.color = "blue"
    head1.style.backgroundColor = "pink"
})