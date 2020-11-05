

// using moment.js display current date / day / year in Jumbotron
var timeFrame = [ "9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm"];
var timeValue = [9,10,11,12,13,14,15,16,17,18]; 
var contSec = document.getElementsByClassName("container");
var rowSec = document.getElementsByClassName("timeSec");
var divSec = document.querySelector("div");
var timeSecValue = document.getElementsByClassName("time-block");
var descriptionBox = document.getElementsByClassName("description");
var currentHour= moment().format('HH');

console.log(currentHour);

function CurrentDate() {
    var d = new Date();
    var fmt1 = 'dddd MMMM Do ';
    var now = moment(d).format(fmt1); 
    var currentHour= moment().format('h');
    document.getElementById("currentDay").innerHTML = now ;
    
    

}



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

        // Create Schedule Message Board 
        var inputSec = document.createElement("input");
        inputSec.setAttribute("class", "col-lg-8 description textarea");
        inputSec.setAttribute("type", "text");
        inputSec.setAttribute("name", "today-Schedule");
        inputSec.setAttribute("id", "input");
        inputSec.setAttribute("value", "");
        timeRow[i].appendChild(inputSec);
        
        // Change Color of text box based on Current Time [ past ] [ present ] [ future ]
            // if ID < timeValue = past
            // if ID = timeValue = current
            // if ID > timeValue = future 
        if ( timeValue[i] === currentHour)
        { inputSec.setAttribute("class","present col-lg-8 description textarea");
        } else if (timeValue[i] <= currentHour) {
            inputSec.setAttribute("class","past col-lg-8 description textarea");
        } else { 
            inputSec.setAttribute("class","future col-lg-8 description textarea");
        }

        //Create Save Button
        var inputEl = document.querySelectorAll("input");
        var saveBtn = document.createElement("button");
        saveBtn.textContent= "Save";
        saveBtn.setAttribute("class", "saveBtn ");
        saveBtn.setAttribute("onclick", "saveToLocal()");
        saveBtn.setAttribute("style", "id = Btn"+[i]);
        timeRow[i].appendChild(saveBtn);   

        
        
        };

        var savebtn = document.querySelectorAll("button");
        var inputEl = document.querySelectorAll("input");
       
        console.log(inputEl.value)
    
    SavedSchedule ()

    function saveToLocal(){
       
        var scheduleList = {
            Time: "9am", // need to set value for the TIME
            Schedules : inputEl[0].value.trim() // need to set Value from input Value
            // inputEl[0].value.trim()
        };
    
        console.log(scheduleList);
    
    localStorage.setItem("schedule", JSON.stringify(scheduleList));
    };


    function SavedSchedule () {
        var allSchedules = localStorage.getItem("schedule"); 

        console.log(allSchedules)
        allSchedules = JSON.parse(allSchedules);
        inputEl[0].setAttribute("value", allSchedules.Schedules);
    }

    // get input value to be set as object's value in schedule
    // get ID Value to be entered as TIME value

       
    //    savebtn.addEventListener("click",function(){
    //         var scheduleList = {
                
    //             TIME : timeFrame[0],
    //             Schedules : inputEl0.value.trim()
    //         };
        
    //         console.log("1222");
        
    //     localStorage.setItem("schedule1", JSON.stringify(scheduleList));
    //     });
    
       



   
   
    
  

  


    





// create time based 
    // time section + Input box + Click Function Box


    
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


