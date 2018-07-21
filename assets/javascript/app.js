//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily, that is, after we want it to stop
var clockRunning = false;

let stopwatch = {
    time: 31,

    reset: function()
    {
        stopwatch.time = 31;

        // Change the "display" div to "00:00."
        $(".display").text("30:00");
    },

    start: function() {
        // Use setInterval to start the count here and set the clock to running.
        if (!clockRunning)
        {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },

    stop: function(time) {
        
        // Use clearInterval to stop the count here and set the clock to not be running.
        if (stopwatch.time === 0)
        {
            clearInterval(intervalId);
            clockRunning = false;
        }

        // Change the "display" div to "00:00."
        // $("#display").text(stopwatch.count());
        

    },

    count: function() 
    {
        // increment time by 1, remember we cant use "this" here.

        if (stopwatch.time <= 0) {
            stopwatch.stop();
        }
        stopwatch.time--;

        // Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.
        var converted = stopwatch.timeConverter(stopwatch.time);
        console.log(converted);

        // Use the variable we just created to show the converted time in the "display" div.
        $(".display").text(converted);
    },

    timeConverter: function(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
    
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
      }
}

let onStart = {

    loadAnswers: function() {
        //select each question and store in a variable

        //create 

        //
    },

    startTimer: function() {

    },

    respondToClicks: function() {

        let correctChoices = ['23', 'blue', 'Frontend development', 'pretty awesome', 'Ecuador', 'road bike', '1 hour 30 min'];
        let selectedChoices = [];
        $("button[type='submit']").click(function() {

            //On submit, store id of checked radio input into selectedChoices array


        });
    }
}



$( document ).ready(function() {
    onStart.respondToClicks();
    stopwatch.start();
});