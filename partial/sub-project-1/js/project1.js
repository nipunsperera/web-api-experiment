/* can add window.addEventLister */
const cursorElm = document.getElementById('cursor');

let tmrId1 = null;

addEventListener('mousemove', (eventData) => {
    // console.log(eventData.pageX, eventData.pageY);
    
    if(tmrId1){ /* tmrId1 is truthy (check MDN). since tmrID has a value. then its truthy */
        clearTimeout(tmrId1);
        tmrId1 = null;
    }
    cursorElm.style.opacity = 1;
    cursorElm.style.left = `${eventData.pageX}px`;
    cursorElm.style.top = `${eventData.pageY}px`;
    setTimeout(() =>{
        cursorElm.style.opacity =0;
    },2000);
});

document.body.addEventListener('mouseleave',() => {
    cursorElm.style.opacity = 0.0;
    cursorElm.style.transition = "opacity 0.5s";
})

document.body.addEventListener('mouseenter',() => {
    cursorElm.style.opacity = 1;
    cursorElm.style.transition = "opacity 0.5s";
})



/*Timer 01 - Repetitive time*/


// let x=0;
// const tmrId1 = setInterval(() => {
//     console.log(x++);
// },1000);

// const btnStopTimer1 = document.getElementById('btnStopTimer1');
// btnStopTimer1.addEventListener('click',() => {
//     clearInterval(tmrId1);
// })



/*Timer 02 - Start at a given time*/



// const tmrId2 = setTimeout(() => {
//     console.log("Blast!");
// },5000);

// const btnStopTimer1 = document.getElementById('btnStopTimer1');
// btnStopTimer1.addEventListener('click',() => {
//     clearTimeout(tmrId2);
//     console.log("Timer off !")
// })



