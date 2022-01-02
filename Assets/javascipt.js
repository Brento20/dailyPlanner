var currentDay = document.getElementById("currentDay");
var currentDayMJS = moment().format("dddd, MMMM Do YYYY");


setInterval(pushTime, 1000);

function pushTime() {
    var tempTimeMJS= moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDay.innerHTML = ("Today is " + tempTimeMJS); 
}



