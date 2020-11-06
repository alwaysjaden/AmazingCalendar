

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
        if ( timeValue[i] == currentHour)
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
console.log(inputEl.length);

    // Save input Value to local storage funtion
    function saveToLocal(){
        // forloop here !! lets Try
        var scheduleList = {
            schedule9am: inputEl[0].value,
            schedule10am: inputEl[1].value,
            schedule11am: inputEl[2].value,
            schedule12pm: inputEl[3].value, 
            schedule1pm: inputEl[4].value, 
            schedule2pm: inputEl[5].value, 
            schedule3pm: inputEl[6].value, 
            schedule4pm: inputEl[7].value,
            schedule5pm: inputEl[8].value, 
            schedule6pm: inputEl[9].value,  
             // need to set Value from input Value
            // inputEl[0].value.trim()
        };
    localStorage.setItem("schedule", JSON.stringify(scheduleList));
    
    };

    // display local storage value function
    function SavedSchedule () {
        var allSchedules = localStorage.getItem("schedule"); 

        // if (allSchedules===null)
        // display "" as empty value

        console.log(allSchedules)
        allSchedules = JSON.parse(allSchedules);
        inputEl[0].setAttribute("value", allSchedules.schedule9am);
        inputEl[1].setAttribute("value", allSchedules.schedule10am);
        inputEl[2].setAttribute("value", allSchedules.schedule11am);
        inputEl[3].setAttribute("value", allSchedules.schedule12pm);
        inputEl[4].setAttribute("value", allSchedules.schedule1pm);
        inputEl[5].setAttribute("value", allSchedules.schedule2pm);
        inputEl[6].setAttribute("value", allSchedules.schedule3pm);
        inputEl[7].setAttribute("value", allSchedules.schedule4pm);
        inputEl[8].setAttribute("value", allSchedules.schedule5pm);
        inputEl[9].setAttribute("value", allSchedules.schedule6pm);

    }


    
       



   
   
    
  

  


    




