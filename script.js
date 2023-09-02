// let myValue = 0;
// console.log(typeof myValue);
//Operator
const minus = document.querySelector('#dec');
const rest = document.querySelector('#res');
const plus = document.querySelector('#inc');
const screen = document.querySelector('#screen');
        // Operation
minus.addEventListener('click',function(){
    screen.innerText = Math.floor(screen.innerText) - 1;
    // screen.append(myValue-=1);
    if (screen.innerText < 0) {
        // screen.style.color = 'red';
        screen.classList.add('add1');
        screen.classList.remove('add2');
        screen.classList.remove('add3');
    } 
    else if (screen.innerText <= 0) {
        // screen.style.color = 'black';
        screen.classList.add('add2');
        screen.classList.remove('add3');

    }
})       
rest.addEventListener('click',function(){
    screen.innerHTML = 0;
    // screen.style.color = 'black';
    screen.classList.add('add2');
    // screen.classList.remove('add1');
    screen.classList.remove('add3');

}) 
plus.addEventListener('click',function(){
    screen.innerText = Math.floor(screen.innerText) + 1;
    if (screen.innerText > 0) {
        // screen.style.color = 'green';
        screen.classList.remove('add1');
        screen.classList.add('add3');

    } 
    else if (screen.innerText >= 0) {
        // screen.style.color = 'black';
        screen.classList.remove('add3');
        screen.classList.add('add2');
    }
}) 