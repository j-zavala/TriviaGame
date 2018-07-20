let stopwatch = {
    time: 31,

    reset: function()
    {
        stopwatch.time = 20;

        // DONE: Change the "display" div to "00:00."
        $(".display").text("20:00");
    },

    start: function() {
        // Use setInterval to start the count here and set the clock to running.
        if (!clockRunning)
        {
            console.log("In start");
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },

    stop: function() {
        console.log("In stop");
        // Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;

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