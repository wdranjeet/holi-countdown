//Gets the HTML Elements
var head = document.getElementById('head');
var subhead = document.getElementById('subhead');
var counterDays = document.getElementById('days');
var counterHours = document.getElementById('hours');
var counterMinutes = document.getElementById('minutes');
var counterSeconds = document.getElementById('seconds');
//finds Holi
var Holi = new Date('March 29, 2021 00:00:00');

//Updates Timer
function updateTimer(Holi) {
    
    var time = Holi - new Date();
    //Gives what to find on update
    return {
        'days': Math.floor(time / (1000 * 60 * 60 * 24)),
        'hours': Math.floor((time/(1000 * 60 * 60)) % 24),
        'minutes': Math.floor((time / 1000 / 60) % 60),
        'seconds': Math.floor((time / 1000) % 60),
        'total': time
    };
};

//Starts the timer
function startTimer(counterDays, counterHours, counterMinutes, counterSeconds, Holi) {
    
    var timerInterval = setInterval(function() {
        var timer = updateTimer(Holi);
        
        //Changes the text of the 'counter'
        counterDays.innerHTML = timer.days;
        counterHours.innerHTML = timer.hours;
        counterMinutes.innerHTML = timer.minutes;
        counterSeconds.innerHTML = timer.seconds;
        
        //if MahaShivRatri
        if(timer.total < 1) {
            clearInterval(timerInterval);
            counterDays.innerHTML = 0;
            counterHours.innerHTML = 0;
            counterMinutes.innerHTML = 0;
            counterSeconds.innerHTML = 0;
            
            head.innerHTML = "It's Holi Festival!!";
            subhead.innerHTML = "Happy Holi to all!!!";
        }
        
        //if MahaShivRatri eve
        else if (timer.days < 1){
            subhead.innerHTML = "It is currently Holi Eve! How much longer until Holi Festival???";
        }
   
    }, 1000); //timer updates every second
};

window.onload = function() {
    
    startTimer(counterDays, counterHours, counterMinutes, counterSeconds, Holi);
    
    //Below is the code for the audio control; may move to own script.
    var button = document.getElementById('mute');
    var music = document.getElementById('music');
    
    button.onclick = function() {
        if(music.paused) {
        music.play();
        button.innerHTML = "Mute";
        }
        
        else {
        music.pause();
        button.innerHTML = "Unmute";
        }

    };
  
};
