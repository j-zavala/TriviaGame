let onStart = {

    combos = [
        {
            question: "How old is Johnny?",
            choices: [
                {
                    choice: "Just born",
                    value: false
                },
                {
                    choice: "23",
                    value: true
                },
                {
                    choice: "16",
                    value: false
                },
                {
                    choice: "46",
                    value: false
                }
            ]
        },
        {
            question: "How old is Johnny?",
            choices: [
                {
                    choice: "Just born",
                    value: false
                },
                {
                    choice: "23",
                    value: true
                },
                {
                    choice: "16",
                    value: true
                },
                {
                    choice: "46",
                    value: false
                }
            ]
        },
        {
            question: "How old is Johnny?",
            choices: [
                {
                    choice: "Just born",
                    value: false
                },
                {
                    choice: "23",
                    value: true
                },
                {
                    choice: "16",
                    value: true
                },
                {
                    choice: "46",
                    value: false
                }
            ]
        },
        {
            question: "How old is Johnny?",
            choices: [
                {
                    choice: "Just born",
                    value: false
                },
                {
                    choice: "23",
                    value: true
                },
                {
                    choice: "16",
                    value: true
                },
                {
                    choice: "46",
                    value: false
                }
            ]
        },
        {
            question: "How old is Johnny?",
            choices: [
                {
                    choice: "Just born",
                    value: false
                },
                {
                    choice: "23",
                    value: true
                },
                {
                    choice: "16",
                    value: true
                },
                {
                    choice: "46",
                    value: false
                }
            ]
        },
        {
            question: "How old is Johnny?",
            choices: [
                {
                    choice: "Just born",
                    value: false
                },
                {
                    choice: "23",
                    value: true
                },
                {
                    choice: "16",
                    value: true
                },
                {
                    choice: "46",
                    value: false
                }
            ]
        },
        {
            question: "How old is Johnny?",
            choices: [
                {
                    choice: "Just born",
                    value: false
                },
                {
                    choice: "23",
                    value: true
                },
                {
                    choice: "16",
                    value: true
                },
                {
                    choice: "46",
                    value: false
                }
            ]
        },
        {
            question: "How old is Johnny?",
            choices: [
                {
                    choice: "Just born",
                    value: false
                },
                {
                    choice: "23",
                    value: true
                },
                {
                    choice: "16",
                    value: true
                },
                {
                    choice: "46",
                    value: false
                }
            ]
        }
    ],

    loadAnswers: function() {
        //select each question and store in a variable

        //create 

        //
    },

    startTimer: function() {

    },

    respondToClicks: function() {
        $("input[type='radio']").click(function(){

            var radioValue = $("input[name='age']:checked").val();

            if(radioValue){

                alert("Your age is - " + radioValue);

            }

        });
    }
}



$( document ).ready(function() {
    onStart.respondToClicks();
    
});