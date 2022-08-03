// display present date
var date = moment();
// set current date to default format of Javascript
var dateNow = date.format('YYYY-MM-DD');
var dateEl = $("#currentDay");
dateEl.text(date.format("dddd[,] Do MMMM YYYY"));

//hide reminder initially
$('#storeRemind').hide();

// put daytime hours in terms of hour-format and display in the left column 
var am9El = $("#9amTime");
var am9Hour = moment(dateNow + " 09:00").format('hA');
// store daytime hour again in default JS format to faciliate compare with current moment
var hour9 = moment(dateNow + " 09:00").format('YYYY-MM-DD HH:mm');
am9El.text(am9Hour);

var am10El = $("#10amTime");
var am10Hour = moment(dateNow + " 10:00").format('hA');
var hour10 = moment(dateNow + " 10:00").format('YYYY-MM-DD HH:mm');
am10El.text(am10Hour);

var am11El = $("#11amTime");
var am11Hour = moment(dateNow + " 11:00").format('hA');
var hour11 = moment(dateNow + " 11:00").format('YYYY-MM-DD HH:mm');
am11El.text(am11Hour);

var pm12El = $("#12pmTime");
var pm12Hour = moment(dateNow + " 12:00").format('hA');
var hour12 = moment(dateNow + " 12:00").format('YYYY-MM-DD HH:mm');
pm12El.text(pm12Hour);

var pm01El = $("#1pmTime");
var pm01Hour = moment(dateNow + " 13:00").format('hA');
var hour13 = moment(dateNow + " 13:00").format('YYYY-MM-DD HH:mm');
pm01El.text(pm01Hour);

var pm02El = $("#2pmTime");
var pm02Hour = moment(dateNow + " 14:00").format('hA');
var hour14 = moment(dateNow + " 14:00").format('YYYY-MM-DD HH:mm');
pm02El.text(pm02Hour);

var pm03El = $("#3pmTime");
var pm03Hour = moment(dateNow + " 15:00").format('hA');
var hour15 = moment(dateNow + " 15:00").format('YYYY-MM-DD HH:mm');
pm03El.text(pm03Hour);

var pm04El = $("#4pmTime");
var pm04Hour = moment(dateNow + " 16:00").format('hA');
var hour16 = moment(dateNow + " 16:00").format('YYYY-MM-DD HH:mm');
pm04El.text(pm04Hour);

var pm05El = $("#5pmTime");
var pm05Hour = moment(dateNow + " 17:00").format('hA');
var hour17 = moment(dateNow + " 17:00").format('YYYY-MM-DD HH:mm');
pm05El.text(pm05Hour);

// create master array holding 9 daytime hourMarks in default date format of JS
var hourMark = [hour9, hour10, hour11, hour12, hour13, hour14,hour15, hour16,hour17];


// compare hourMark with current hour and set the right background color
for (var i=0; i<hourMark.length; i++) {
    
    if (moment(hourMark[i]).isBefore(date,'hour')) {
        var key= "hour"+ (i+9);
        var taskEl = $("#"+ key);
        taskEl.css('background-color', '#C8C4C4');
    } else if (moment(hourMark[i]).isSame(date,'hour')) {
        var key= "hour"+ (i+9);
        var taskEl = $("#"+ key);
        taskEl.css('background-color', '#F05B5B');
    } else if (moment(hourMark[i]).isAfter(date,'hour')) {
        var key= "hour"+ (i+9);
        var taskEl = $("#"+ key);
        taskEl.css('background-color', '#F2F527');
    }
}

// fetch stored tasks from localStorage by specified key string only if present
for (var i=0; i<hourMark.length; i++) {
    var key= "hour"+ (i+9);
    var taskEl = $("#"+ key);

    if (localStorage.getItem(key)) {
    taskEl.val(localStorage.getItem(key));
    }
}

//event listener when a button's clicked, save text to Storage by specified key string
//validate if textarea is empty or prompt the user to fill in the textarea
$("#timeBlock").on("click", function(event) {
    // locate the element being clicked
    var element = event.target;

      // Check if the clicked element was a button
    if (element.matches("button")) {
        var hourChoice = element.getAttribute("data-timeMark");
        var taskChoiceEl = $("#"+ hourChoice);

        if (!taskChoiceEl.val()) {
            alert('Your task box is empty, please enter a task and then press SAVE 💾');                        
        } else if (taskChoiceEl.val()) {
            localStorage.setItem(hourChoice, taskChoiceEl.val());
            // display store message to the page after each SAVE action
            $('#storeRemind').show();    
        }
  }
});

// event listener to hide a store message when textarea is clicked again
$("#timeBlock").on("click", function(event) {
    // locate the element being clicked
    var element = event.target;

      // Check if the clicked element was a button
    if (element.matches("textarea")) {
        $('#storeRemind').hide();        
  }
});


