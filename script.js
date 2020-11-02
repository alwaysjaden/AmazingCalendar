

// function startTime() {
//     var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
//     ];
//     var today = new Date();
//     var month = monthNames[today.getMonth()];
//     var d = today.getDate();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('text').innerHTML =
//     month + " " + d + " "+ h + ":" + m + ":" + s;
//     var t = setTimeout(startTime, 500);
//   }
//   function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
//   }


// Display current Date 
function CurrentDate() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
      ];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date ();
    var day = dayNames[today.getDay()];
    var month = monthNames[today.getMonth()];
    var date = today.getDate();
    var year = today.getFullYear();
    document.getElementById("currentDay").innerHTML =
    day + " " + month + " " + date + " " + year ;

}
CurrentDate();


// make variables of Work time table 
    // 9am 10am 11am 12am 1pm 2pm 3pm 4pm 5pm 6pm

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

