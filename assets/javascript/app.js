//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily, that is, after we want it to stop
var clockRunning = false;

let stopwatch = {
    time: 20,

    reset: function()
    {

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
    questionArr: ['Which film won the Academy award for Best Picture?',
                  'Which couple did NOT tie the knot in 2018?',
                  'Which song won the Grammy for Record of the Year?', 
                  'Who performed at the Superbowl Halftime Show?',
                  'Which meme is NOT from this year?',
                  'Which album came out this year?',
                  'Finally, which news event did not happen this year?'],

    loadQuestion: function() {
        for (let i = 0; i < onStart.questionArr.length; i++)
        {
            setTimeout(function() {
                $(".question").text(onStart.questionArr[i]);
            }, 5000);
        }
    },

    loadAnswers: function()
    {
        
    },

    // Checks if right or wrong answer was picked
    checkIfRight: function()
    {
        
    }
}

let combos = {
    'Which film won the Academy award for Best Picture?': ''
                //   'Which couple did NOT tie the knot in 2018?'
                //   'Which song won the Grammy for Record of the Year?'
                //   'Who performed at the Superbowl Halftime Show?'
                //   'Which meme is NOT from this year?'
                //   'Which album came out this year?'
                //   'Finally, which news event did not happen this year?'
}





$( document ).ready(function() 
{
    stopwatch.start();
    onStart.loadQuestion();
    $(".ans").on("click", stopwatch.stop);

    

    // setInterval(stopwatch.stop(), 5000);
});
