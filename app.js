let timerDisplay=document.querySelector(`.timerDisplay`);
let STOPbtn=document.getElementsByClassName("STOPbtn");
let STARTbtn=document.getElementsByClassName("STARTbtn");
let RESETbtn=document.getElementsByClassName("RESETbtn");

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

Array.from(STARTbtn).forEach(b => {
    b.addEventListener("click", function() {
        if(timerId !== null){
            clearInterval(timerId);
        
        }
        timerId = setInterval(statrTimer, 10);
    });
});


Array.from(STOPbtn).forEach(b => {
    b.addEventListener("click", function() {
        clearInterval(timerId);
    });
});


Array.from(RESETbtn).forEach(b => {
    b.addEventListener("click", function() {
        clearInterval(timerId);
            timerDisplay.innerHTML= `00 : 00 : 00`;
            msec=secs=mins =0;
        
    });
});


function statrTimer(){
    msec++;
    if(msec ==100){
        msec=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;
        }
    }

    
let msecstring = msec < 10 ? `0${msec}` : msec;
let secsstring = secs < 10 ? `0${secs}` : secs;
let minsstring = mins < 10 ? `0${mins}` : mins;

timerDisplay.innerHTML = `${minsstring} : ${secsstring} : ${msecstring}`;

   
}
