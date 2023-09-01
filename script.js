// let myValue = 0;
// console.log(typeof myValue);
//Operator
const minus = document.querySelector('#dec');
const rest = document.querySelector('#res');
const plus = document.querySelector('#inc');
const screen = document.querySelector('#screen');
        // Operation
minus.addEventListener('click',function(){
    screen.innerText = screen.innerText -1;
    // screen.append(myValue-=1);
    if (screen.innerText < 0) {
        screen.style.color = 'red';
    } 
    else if (screen.innerText <= 0) {
        screen.style.color = 'black';
    }
})       
rest.addEventListener('click',function(){
    screen.innerHTML = 0;
    screen.style.color = 'black';
}) 
plus.addEventListener('click',function(){
    screen.innerText = Number(screen.innerText) +1;
    if (screen.innerText > 0) {
        screen.style.color = 'green';
    } 
    else if (screen.innerText >= 0) {
        screen.style.color = 'black';
    }
}) 