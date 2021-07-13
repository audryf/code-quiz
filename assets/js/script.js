var currentQuestion = 0
var timeLeft = 60


var displayQuestions = function () {
    var questionsEl = document.getElementById("questions");
    var choicesEl = document.getElementsByClassName("choices");

    questionsEl.textContent = quizQuestions[currentQuestion].question;

    for (var i = 0; i < choicesEl.length; i++) {
        choicesEl[i].innerHTML = quizQuestions[currentQuestion].choices[i];
        choicesEl[i].addEventListener("click", function(event) {
            var clicked = event.target.innerHTML;

            if (clicked === quizQuestions[currentQuestion].answer) {
                alert("Correct");
                currentQuestion++;
                
                displayQuestions();
            } else {
                alert("Incorrect!!!!!!");
                currentQuestion++;
                displayQuestions();
            }
        });
    };

    
};


// Start quiz function
var startQuiz = function () {
    // The landing page should hide
    var hiddenEl = document.getElementById("to-hide");
    hiddenEl.classList.add("hide");

    var show = document.getElementById("question-container");
    show.classList.toggle("hide");

    displayQuestions();

    var timer = setInterval(function(){ 
        timeLeft--;
        // console.log(timeLeft);
        if (timeLeft === 0) {
            clearInterval(timer);
            show.classList.toggle("hide");
        } 
    }, 1000);
};


// Click the start button
var startButton = document.getElementById("startButton");
startButton.addEventListener("click", startQuiz);


// Timer will display and start counting down from 60 seconds (function for timer?)




// User chooses their answer
// If the answer is correct, then display 'correct' and show next question



// If the answer is incorrect, then display 'incorrect', deduct 10 seconds from timer, redisplay time, and show next question



// After all questions are answered, user will enter their initials



// Once they enter thier initials, they will be taken to the highscores page





// Questions array
var quizQuestions = [
    // [0]
    {
        question: "Which of the following is not a Javascript data type?",
        choices: ["number", "boolean", "object", "string"],
        answer: "object"
    },
    // [1]
    {
        question: "What is an event listener?",
        choices: ["User behavior, such as a click", "Observation of an event, such as a click", "Set of statements that performs a task", "None of the above"],
        answer: "Observation of an event, such as a click"
    },
    // [2]
    {
        question: "What is a code block?",
        choices: ["Data in an application at a specific point in time", "A list of data", "Info that a user enters into a program", "The code between curly braces"],
        answer: "The code between curly braces"
    }
]
