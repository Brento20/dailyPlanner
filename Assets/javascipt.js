var currentDay = document.getElementById("currentDay");
var currentDayMJS = moment().format("dddd, MMMM Do YYYY");


setInterval(pushTime, 1000);

function pushTime() {
    var tempTimeMJS= moment().format("dddd, Do MMMM YYYY, h:mm:ss a");
    currentDay.innerHTML = ("Today is " + tempTimeMJS); 
}



function timerRecolor(){
    var hourMJS = moment().format("H")
    var background = document.getElementById("plannerBox");

    console.log(hourMJS)
    console.log(background)
}

timerRecolor();