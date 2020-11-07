

// using moment.js display current date / day / year in Jumbotron
var timeFrame = [ "9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm"];
var timeValue = [9,10,11,12,13,14,15,16,17,18]; 
var contSec = document.getElementsByClassName("container");
var rowSec = document.getElementsByClassName("timeSec");
var divSec = document.querySelector("div");
var divSec = $(".container")
var timeSecValue = document.getElementsByClassName("time-block");
var descriptionBox = document.getElementsByClassName("description");
var currentHour= moment().format('HH');

console.log(currentHour);

 // current timeValue = currentHour 
function CurrentDate() {
    var d = new Date();
    var fmt1 = 'dddd MMMM Do ';
    var now = moment(d).format(fmt1); 
    // var currentHour= moment().format('HH');
    $("#currentDay").text(now);
    console.log(now);

    SavedSchedule ()

}


// need to convert theses to jQuey
    for ( var i=0; i<timeFrame.length; i++) {
        var rowDiv = $("<div class = 'row' id = timeRow>"+"</div>");
        divSec.append(rowDiv);
        // ser variable to select nth divs
        var timeblock = $(divSec).children('div').eq(i);
        
        //Schedule Time  Display
        var colDateDiv = $("<div class ='hour time-block col-lg-2'>").text(timeFrame[i])
       
        //  Create Schedule input Section  
        var inputSec = $("<input class ='col-lg-8 description textArea' type ='text' placeholder = 'No Schedule'>")
        inputSec.attr("id","schedule"+[i])
        
        // Change calss attribute of input box based on Current Time [ past ] [ present ] [ future ]
            // if ID < timeValue = past if ID = timeValue = current if ID > timeValue = future 
      
        //Create Save Button
        var inputEl = document.querySelectorAll("input");
        var saveBtn = $("<button class ='saveBtn' onclick='saveToLocal()'>").text("save");
        saveBtn.attr("style", "id = Btn"+[i]);
        // Append button to each row divs
        timeblock.append(colDateDiv,inputSec,saveBtn);   

        if ( timeValue[i] == currentHour)
        { $(".textArea").attr("class","present col-lg-8 description textarea");
        } else if (timeValue[i] <= currentHour) {
            $(".textArea").attr("class","past col-lg-8 description textarea");
        } else { 
            $(".textArea").attr("class","future col-lg-8 description textarea");
        }
        };    


    // Save input Value to local storage funtion
    function saveToLocal(){
        // forloop here !! lets Try
        // var timeblock = $(divSec).children('div').eq(i);
        var scheduleList = {
            schedule9am: $("#schedule0").val(),
            schedule10am: $("#schedule1").val(),
            schedule11am: $("#schedule2").val(),
            schedule12pm: $("#schedule3").val(),
            schedule1pm: $("#schedule4").val(),
            schedule2pm: $("#schedule5").val(),
            schedule3pm: $("#schedule6").val(),
            schedule4pm: $("#schedule7").val(),
            schedule5pm: $("#schedule8").val(),
            schedule6pm: $("#schedule9").val(),
        }
       
    localStorage.setItem("schedule", JSON.stringify(scheduleList));

    };

    // display local storage value function
    function SavedSchedule () {
        var allSchedules = localStorage.getItem("schedule"); 

        // for (var i = 0 ; i<allSchedules.length; i++){
        // var allSchedules = localStorage.getItem("schedule"); 
       // get schedule from Local Storeage to display saved schedule
       allSchedules = JSON.parse(allSchedules);
       $("#schedule0").attr("value", allSchedules.schedule9am);
       $("#schedule1").attr("value", allSchedules.schedule10am);
       $("#schedule2").attr("value", allSchedules.schedule11am);
       $("#schedule3").attr("value", allSchedules.schedule12pm);
       $("#schedule4").attr("value", allSchedules.schedule1pm);
       $("#schedule5").attr("value", allSchedules.schedule2pm);
       $("#schedule6").attr("value", allSchedules.schedule3pm);
       $("#schedule7").attr("value", allSchedules.schedule4pm);
       $("#schedule8").attr("value", allSchedules.schedule5pm);
       $("#schedule9").attr("value", allSchedules.schedule6pm);
        // allSchedules = JSON.parse(allSchedules);
        // inputEl[0].setAttribute("value", allSchedules.schedule9am);
        // inputEl[1].setAttribute("value", allSchedules.schedule10am);
        // inputEl[2].setAttribute("value", allSchedules.schedule11am);
        // inputEl[3].setAttribute("value", allSchedules.schedule12pm);
        // inputEl[4].setAttribute("value", allSchedules.schedule1pm);
        // inputEl[5].setAttribute("value", allSchedules.schedule2pm);
        // inputEl[6].setAttribute("value", allSchedules.schedule3pm);
        // inputEl[7].setAttribute("value", allSchedules.schedule4pm);
        // inputEl[8].setAttribute("value", allSchedules.schedule5pm);
        // inputEl[9].setAttribute("value", allSchedules.schedule6pm);
     

    // }
};
    CurrentDate()
    // SavedSchedule ()
    
       



   
   
    
  

  


    




