const form = document.getElementById('greetings');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const name = document.getElementById('name').value;
    const greet = document.getElementById('head');
    greet.innerHTML = "Hello, "+name;
})

const red = document.getElementById('red');
red.addEventListener('click',()=>{
    red.style.backgroundColor = 'red';
    red.style.color = 'white';
})

const blue = document.getElementById('blue');
blue.addEventListener('click',()=>{
    blue.style.backgroundColor = 'blue';
    blue.style.color = 'white';
})

const green = document.getElementById('green');
green.addEventListener('click',()=>{
    green.style.backgroundColor = 'green';
    green.style.color = 'white';
})

const yellow = document.getElementById('yellow');
yellow.addEventListener('click',()=>{
    yellow.style.backgroundColor = 'yellow';
    yellow.style.color = 'black';
})