

// using moment.js display current date / day / year in Jumbotron

var contSec = document.getElementsByClassName("container");
var rowSec = document.getElementsByClassName("timeSec");
var divSec = document.querySelector("div");
var timeSecValue = document.getElementsByClassName("time-block");
var descriptionBox = document.getElementsByClassName("description");
var currentHour= moment().format('HH');
var inputBox= document.querySelectorAll("input");

console.log(currentHour)

function CurrentDate() {
    var d = new Date();
    var fmt1 = 'dddd MMMM Do ';
    var now = moment(d).format(fmt1); 
    var currentHour= moment().format('h');
    document.getElementById("currentDay").innerHTML = now ;
    
    

}
CurrentDate();

function schedule() {
var timeFrame = [ "9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm"];
var timeValue = [9,10,11,12,13,14,15,16,17,18]; 

// if < class = past
// if = class = current
// if > class = future 


for ( var i=0; i<timeFrame.length; i++) {
    var rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row")
    rowDiv.setAttribute("ID", "timeRow");
    divSec.appendChild(rowDiv);
    var timeRow = document.querySelectorAll("#timeRow");
    //left
    var colDateDiv = document.createElement("div");
    colDateDiv.textContent= timeFrame[i];
    colDateDiv.setAttribute("class", "hour time-block col-lg-2" );
    colDateDiv.setAttribute("id", timeValue[i]);
    timeRow[i].appendChild(colDateDiv);

    // current timeValue = currentHour 

    // middle 
    var inputSec = document.createElement("input");
    inputSec.setAttribute("class", "col-lg-8 description textarea");
    inputSec.setAttribute("type", "text");
    inputSec.setAttribute("id", timeValue[i]);
    inputSec.textContent = "";
    timeRow[i].appendChild(inputSec);

    console.log(inputSec.textContent);

    if ( timeValue[i] === currentHour)
    { inputSec.setAttribute("class","present");
    } else if (timeValue[i] <= currentHour) {
        inputSec.setAttribute("class","past");
    } else { 
        inputSec.setAttribute("class","future");
    }

    //right
    var lockSec = document.createElement("button");
    lockSec.textContent= "Save";
    lockSec.setAttribute("class", "saveBtn ");
    lockSec.setAttribute("style", "border = solid black");
    timeRow[i].appendChild(lockSec);  
   

    lockSec.addEventListener("click",function(){
        var scheduleTime = inputBox.id;
        var schedule = inputSec.value;
            //check of error 
        
        var schedules = {
            time: scheduleTime,
            Schedule: schedule
            }
            console.log(schedules);
        }
        
        // // // store value to local storage.
        // localStorage.setItem("schedule", JSON.stringify(allSchedules));
        // //Get
        // var allScores = localStorage.getItem("allScores");
        // if (allScores ===null){
        //     allScores = [];
        // } else {
        //     allScores = JSON.parse(allScores);          
        // }

        // //Set
        // allSchedules.push(schedules);
        //     localStorage.setItem("allScores", allSchedules);
    
        );

}
};

schedule() 




// color change attribut based on current time 

// var timeValue = document.getElementById('').id






// function ColorChange() {

//     var timeSecValue = 
    
//  }

// lockSec.onclick =function (){

// }

// make variables of Work time table 
    //  Parsing time into object


// create time based 
    // time section + Input box + Click Function Box


    // time : list of time from 9am - 6pm
    // input Box: basic input box
        // start with pulling stored data from local storage 
        // color changes based on current time 
            // passed = gray
            // Current = Red
            // Future = Green
    // Click Function Box
        // on-click event to store input box's context
        // on-click icon shape change 



    //     // This line of jQuery selects the div with the matching id (#drink-options)
    // var drinkDiv = $("#drink-options");

    // // For Loop then loops through our total drink list...
    // for (var i = 0; i < drinkList.length; i++) {

    //   // It then creates a new div for each drink. Note we create divs and add the content in the same line.
    //   var newDrinkDiv = $("<div>" + drinkList[i] + "</div>");

    //   // It then adds this new div to the drinkList div.
    //   drinkDiv.append(newDrinkDiv);
    // }


//     var mode = "dark";

// themeSwitcher.addEventListener("click", function() {
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   }
//   else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//   }
// });