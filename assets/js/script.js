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

var timeLeft = 61
var displayTime = document.createElement("div");
var show = document.getElementById("question-container");


var displayQuestions = function (currentQuestion) {
    var questionsEl = document.getElementById("questions");
    var choicesEl = document.getElementsByClassName("choices");
    console.log(currentQuestion);
    
    questionsEl.textContent = quizQuestions[currentQuestion].question;
    for (var i = 0; i < choicesEl.length; i++) {
        choicesEl[i].innerHTML = quizQuestions[currentQuestion].choices[i];
        
        choicesEl[i].addEventListener("click", function(event) {
            // User chooses their answer
            var clicked = event.target.innerHTML;
            // If the answer is correct, then display 'correct' and show next question  
            if (clicked != quizQuestions[currentQuestion].answer && currentQuestion < (quizQuestions.length -1)) {
                console.log("wrong");
                timeLeft = timeLeft - 10;
                currentQuestion++;
                displayQuestions(currentQuestion);
            } 
            
        });
    };
};

// Start quiz function
var startQuiz = function () {
    // The landing page should hide
    var hiddenEl = document.getElementById("to-hide");
    hiddenEl.classList.add("hide");
    var currentQuestion = 0
    
    show.classList.toggle("hide");
    displayQuestions(currentQuestion);
 
};

 // Timer will display and start counting down from 60 seconds
 var timer = setInterval(function(){ 
    timeLeft--;
    displayTime.textContent = "Time Left: " + timeLeft;
    show.appendChild(displayTime);
    
    // console.log(timeLeft);
    if (timeLeft === 0) {
        clearInterval(timer);
        // show.classList.toggle("hide");
    } 
}, 1000);

// Click the start button
var startButton = document.getElementById("startButton");
startButton.addEventListener("click", startQuiz);

