//--------------------------------------------------------------------
//Old variables from previous tries
// var times = ["8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"]
//time-blocks refers to a table element in the html
//--------------------------------------------------------------------
var tableBody = document.getElementById("time-blocks")
var inputBody = document.getElementById("input-blocks")
var currentDay = document.getElementById("currentDay")
var nineClock = document.getElementById("nine")
var getNine = document.getElementById("nine-input")


function currentTime(){
    
var pullTime = moment().format('MMMM Do YYYY, h:mm:ss a')
var currentTime = document.createElement('h4')

currentTime.textContent = pullTime
currentDay.appendChild(currentTime)
}

function clickNine() {
    
    var appNine = prompt("Please enter an event for this time block")
    var postNine = confirm("Are you sure you want to create this event for 9:00am?")
    getNine.textContent = appNine
    
    if (postNine) {
        localStorage.setItem("event", getNine.value);
    }
}

























//----------------------------------------------------------------------
//for loop to go through the times array and append the items to a table
//I hope to go back through and consolidate everything with jquery
//NO LONGER BEING USED - SAVING FOR REFERENCE
//---------------------------------------------------------------------- 
// for (var i = 0; i < times.length; i++) {
//     var createTableRow = document.createElement('tr');
//     var createTableHeader = document.createElement('th')
//     var tableData = document.createElement('td')

//     tableData.textContent = times[i];
//     createTableHeader.appendChild(tableData);
//     createTableRow.appendChild(createTableHeader);
//     tableBody.appendChild(createTableRow);

// }

nineClock.addEventListener('click', clickNine);
currentTime();
// setInterval(currentTime, 1000);