
/////////////////////
// Table of contents
/////////////////////

//1.) Global variables - I wanted to make the code for this more "dry" but i caught the covid and I just focused on functionality. 
                    // - A lot of the repeated 06,07,08 ect code should have been replaced.

//2.) Button Effects - jquery for adding css properties to the buttons, I wanted to try this instead of the hover property in css because i wanted to learn more.

//3.) Time and Date - moment.js and a set interval to refresh it on the page so the user can see the exact time without refreshing the page.

//4.) Get Local Storage - Get local storage for the time slots and render the information.

//5.) Save to Local Storage - This code could have been written more "dry", each button currently is attached to its own function to save.

//6.) Recolor time blocks - Looping through the time blocks and comparing the moment.js time to the hours allocated to the time block.
                    // N.B Liam, David (instructor David) and I worked on this during office hours.



//1.) Global variables
var currentDay = document.getElementById("currentDay");
var currentDayMJS = moment().format("dddd, MMMM Do YYYY");
var saveButton = document.getElementsByClassName("saveBtn");

var planner08 = $('textarea[name="08"]');
var planner09 = $('textarea[name="09"]');
var planner10 = $('textarea[name="10"]');
var planner11 = $('textarea[name="11"]');
var planner12 = $('textarea[name="12"]');
var planner13 = $('textarea[name="13"]');
var planner14 = $('textarea[name="14"]');
var planner15 = $('textarea[name="15"]');
var planner16 = $('textarea[name="16"]');
var planner17 = $('textarea[name="17"]');

var print08 = document.querySelector("#print08");
var print09 = document.querySelector("#print09");
var print10 = document.querySelector("#print10");
var print11 = document.querySelector("#print11");
var print12 = document.querySelector("#print12");
var print13 = document.querySelector("#print13");
var print14 = document.querySelector("#print14");
var print15 = document.querySelector("#print15");
var print16 = document.querySelector("#print16");
var print17 = document.querySelector("#print17");

//2.) Button Effects 
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

//3.) Time and Date 
setInterval(pushTime, 1000);
function pushTime() {
    var tempTimeMJS= moment().format("dddd, Do MMMM YYYY, h:mm:ss a");
    currentDay.innerHTML = ("Today is " + tempTimeMJS); 
}

//4.) Get Local Storage 
function renderLastEntry(){

    
    var entryRender = localStorage.getItem("8");
    print08.textContent = entryRender;

    var entryRender = localStorage.getItem("9");
    print09.textContent = entryRender;

    var entryRender = localStorage.getItem("10");
    print10.textContent = entryRender;

    var entryRender = localStorage.getItem("11");
    print11.textContent = entryRender;

    var entryRender = localStorage.getItem("12");
    print12.textContent = entryRender;

    var entryRender = localStorage.getItem("13");
    print13.textContent = entryRender;

    var entryRender = localStorage.getItem("14");
    print14.textContent = entryRender;

    var entryRender = localStorage.getItem("15");
    print15.textContent = entryRender;

    var entryRender = localStorage.getItem("16");
    print16.textContent = entryRender;

    var entryRender = localStorage.getItem("17");
    print17.textContent = entryRender;
    
    
}


//5.) Save to Local Storage 
function saveEntry8(){
    var entry = planner08.val();
    localStorage.setItem("8", entry); 
}

function saveEntry9(){
    var entry = planner09.val();
    localStorage.setItem("9", entry);

}

function saveEntry10(){
    var entry = planner10.val();
    localStorage.setItem("10", entry);
    
}

function saveEntry11(){
    var entry = planner11.val();
    localStorage.setItem("11", entry);
}

function saveEntry12(){
    var entry = planner12.val();
    localStorage.setItem("12", entry);
}

function saveEntry13(){
    var entry = planner13.val();
    localStorage.setItem("13", entry);
}

function saveEntry14(){
    var entry = planner14.val();
    localStorage.setItem("14", entry);
}

function saveEntry15(){
    var entry = planner15.val();
    localStorage.setItem("15", entry);
}

function saveEntry16(){
    var entry = planner16.val();
    localStorage.setItem("16", entry);
}

function saveEntry17(){
    var entry = planner17.val();
    localStorage.setItem("17", entry);
}

//6.) Recolor time blocks
function timeRecolor(){
    var timeOfDay = document.getElementsByClassName("timeOfDay");
    var currentHour = parseInt(moment().format('H')); 

Array.from(timeOfDay).forEach(hour => {
        
        if (currentHour == hour.dataset.hour) {
            $(hour).next().addClass("present");
        } else if ((currentHour < hour.dataset.hour)) {
            $(hour).next().addClass("future");
        } else { 
            $(hour).next().addClass("past");
        }
    });  
}



// Call functions on load

renderLastEntry();
timeRecolor();