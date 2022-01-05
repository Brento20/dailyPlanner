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
var planner08 = $('input[name="08"]');
var testZone = document.getElementById("testZone");

renderLastEntry();

function renderLastEntry(){
    var entryRender = localStorage.getItem("8AM");
    testZone.textContent = entryRender;
}

function saveEntry(){
var entry = planner08.val();
localStorage.setItem("8AM", entry);
renderLastEntry();

}


function timerRecolor(){

    
}

