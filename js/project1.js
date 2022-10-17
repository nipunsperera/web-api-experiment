/* can add window.addEventLister */
const cursorElm = document.getElementById('cursor');
let tmrId = null;

addEventListener('mousemove', (eventData)=>{
    if (tmrId){
        clearTimeout(tmrId);
        tmrId = null;
    }
    cursorElm.style.opacity = 1;
    cursorElm.style.left = `${eventData.pageX}px`;
    cursorElm.style.top = `${eventData.pageY}px`;
    tmrId = setTimeout(()=>{
        cursorElm.style.opacity = 0;
    }, 2000);
});



document.body.addEventListener('mouseleave',() => {
    cursorElm.style.opacity = 0.0; 
})

document.body.addEventListener('mouseenter',() => {
    cursorElm.style.opacity = 1;
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
