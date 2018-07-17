//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily, that is, after we want it to stop
var clockRunning = false;

let stopwatch = {
    time: 21,

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
    1: {
        question: 'Which film won the Academy award for Best Picture?',
        choices: {
            a: {
                choice: 'The Shape of Water*',
                url: "https://images-na.ssl-images-amazon.com/images/I/91zVdTOnQFL._RI_.jpg"
            },
            b: {
                choice: 'Call Me by Your Name',
                url: 'https://img1.od-cdn.com/ImageType-100/1493-1/%7B3F1635DA-BC24-42BA-BD6C-80F5866906FF%7DImg100.jpg'
            },
            c: {
                choice: 'Three Billboards Outside Ebbing, Missouri',
                url: 'http://creativebrisbane.com.au/wp-content/uploads/2017/12/TBOEM_au_ss_600x600_creative_brisbane_static_DATE.jpg'
            },
            d: {
                choice: 'Lady Bird',
                url: 'https://images-na.ssl-images-amazon.com/images/I/A1sU+Yf+V9L._RI_.jpg'
            }
        }
    },
    2: {
        question: 'Which couple did NOT tie the knot in 2018?',
        choices: {
            a:  {
                choice: 'Prince Harry and Meghan Markle',
                url: 'https://t3.rbxcdn.com/311030e04c181b657abaac1784eed2f2'
            },
            b:  {
                choice: 'Kit Harington and Rose Leslie',
                url: 'https://t3.rbxcdn.com/311030e04c181b657abaac1784eed2f2'
            },
            c:  {
                choice: 'Amy Schumer and Chris Fischer',
                url: 'https://t3.rbxcdn.com/311030e04c181b657abaac1784eed2f2'
            },
            d:  {
                choice: 'Alicia Vikander and Michael Fassbender*',
                url: 'https://t3.rbxcdn.com/311030e04c181b657abaac1784eed2f2'
            }
        }
    },
    3: {
        question: 'Which song won the Grammy for Record of the Year?',
        choices: {
            a: {
                choice: '"Humble" by Kendrick Lamar',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/16/enhanced/buzzfeed-prod-web-06/enhanced-buzz-11713-1529960083-9.jpg?downsize=1700:*&amp;output-format=auto&amp;output-quality=auto'
            },
            b: {
                choice: '"Despacito" by Luis Fonsi & Daddy Yankee feat. Justin Bieber',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/16/enhanced/buzzfeed-prod-web-04/enhanced-buzz-22809-1529960238-2.jpg?downsize=715:*&output-format=auto&output-quality=auto'
            },
            c: {
                choice: '"24K Magic" by Bruno Mars*',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/16/enhanced/buzzfeed-prod-web-02/enhanced-buzz-32528-1529960381-10.jpg?downsize=715:*&output-format=auto&output-quality=auto'
            },
            d: {
                choice: '"The Story of O.J." by Jay-Z',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/17/enhanced/buzzfeed-prod-web-05/enhanced-buzz-7331-1529960768-0.jpg?downsize=715:*&output-format=auto&output-quality=auto'
            }
        }
    },
    4: {
        question: 'Who performed at the Superbowl Halftime Show?',
        choices: {
            a: {
                choice: 'Bruno Mars',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/17/enhanced/buzzfeed-prod-web-03/enhanced-buzz-7347-1529962589-0.jpg?downsize=715:*&output-format=auto&output-quality=auto'
            },
            b: {
                choice: 'Justin Timberlake*',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/17/enhanced/buzzfeed-prod-web-04/enhanced-buzz-404-1529962287-2.jpg?downsize=715:*&output-format=auto&output-quality=auto'
            },
            c: {
                choice: 'Beyoncé',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/17/enhanced/buzzfeed-prod-web-03/enhanced-buzz-7398-1529962535-0.jpg?downsize=715:*&output-format=auto&output-quality=auto'
            },
            d: {
                choice: 'Lady Gaga',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/17/enhanced/buzzfeed-prod-web-02/enhanced-buzz-10038-1529962443-1.jpg?downsize=715:*&output-format=auto&output-quality=auto'
            }
        }
    },
    5: {
        question: 'Which album came out this year?',
        choices: {
            a: {
                choice: 'Ctrl by SZA',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/27/13/enhanced/buzzfeed-prod-web-03/enhanced-buzz-14893-1530121104-12.jpg?downsize=715:*&output-format=auto&output-quality=auto'
            },
            b: {
                choice: 'Invasion of Privacy by Cardi B*',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/27/13/enhanced/buzzfeed-prod-web-01/enhanced-buzz-26886-1530120970-12.jpg?downsize=715:*&output-format=auto&output-quality=auto'
            },
            c: {
                choice: 'Reputation by Taylor Swift',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/27/13/enhanced/buzzfeed-prod-web-05/enhanced-buzz-25057-1530121033-6.jpg?downsize=715:*&output-format=auto&output-quality=auto'
            },
            d: {
                choice: 'Tell Me You Love Me by Demi Lovato',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/27/13/enhanced/buzzfeed-prod-web-02/enhanced-buzz-18506-1530121229-0.jpg?downsize=715:*&output-format=auto&output-quality=auto'
            }
        }
    },
    6: {
        question: 'Finally, which news event did not happen this year?',
        choices: {
            a: {
                choice: "Hawaii's Kilauea volcano erupted",
                url: ''
            },
            b: {
                choice: 'President Trump and Kim Jong Un met',
                url: ''
            },
            c: {
                choice: "Austrialia voted yes to same-sex marriage*",
                url: ''
            },
            d: {
                choice: "Rex Tillerson got fired from the State Department",
                url: ''
            }
        }
    }
}


$( document ).ready(function() 
{
    stopwatch.start();
    onStart.loadQuestion();
    $(".ans").on("click", stopwatch.stop);

    

    // setInterval(stopwatch.stop(), 5000);
});
