$(document).ready(function() {
    $("button").hover(function(){
        $(this).css("background-color", "green");
    },

    function(){
        $(this).css("background-color", "#06aed5");
    });

    $("button").click(function(){
        $(this).css("background-color", "gold");
    })
});


setInterval(pushTime, 1000);
function pushTime() {
    var tempTimeMJS= moment().format("dddd, Do MMMM YYYY, h:mm:ss a");
    currentDay.innerHTML = ("Today is " + tempTimeMJS); 
}

var currentDay = document.getElementById("currentDay");
var currentDayMJS = moment().format("dddd, MMMM Do YYYY");
var saveButton = document.getElementsByClassName("saveBtn");
var plannerEl = $('input[name="08"]');


//Storage 
var entries = {
    "08": [],
    "09": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": [],
};




function timerRecolor(){
    var hourMJS = moment().format("H");
    
}

function writeEntry(){
    event.preventDefault();
    console.log(plannerEl.val());

}
