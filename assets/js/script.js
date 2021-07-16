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
    },
    {
        question: "How do you think you did?",
        choices: ["Great", "Not so great", "I don't know", "This is the end!"],
        answer: "This is the end!"
    }
]

var timeLeft = 61
var displayTime = document.createElement("div")
var showQuestions = document.getElementById("question-container")
var showScores = document.getElementById("highscores-container")
var initials = document.getElementById("initials")
var scoresContainer = document.getElementById("scores-container")
var gameScore = document.getElementById("game-score")
var startButton = document.getElementById("startButton")
var submitButton = document.getElementById("submit")
var highscores = document.getElementById("highscores");

localStorage.getItem("initials");

var displayQuestions = function (currentQuestion) {
    var questionsEl = document.getElementById("questions");
    var choicesEl = document.getElementsByClassName("choices");
    console.log(currentQuestion);

    questionsEl.textContent = quizQuestions[currentQuestion].question;
    for (var i = 0; i < choicesEl.length; i++) {
        choicesEl[i].innerHTML = quizQuestions[currentQuestion].choices[i];

        choicesEl[i].addEventListener("click", function (event) {
            // User chooses their answer
            var clicked = event.target.innerHTML;
            
            if (currentQuestion < (quizQuestions.length - 1)) {
                if (clicked === quizQuestions[currentQuestion].answer) {
                    console.log("correct");
                    currentQuestion++;
                    displayQuestions(currentQuestion);
                };
            };

            if (currentQuestion === (quizQuestions.length - 1)) {
                showQuestions.classList.toggle("hide");
                var score = document.createElement("div");
                // score.setAttribute(timeLeft);
                score.textContent = "Your score is " + timeLeft;
                gameScore.appendChild(score);
                scoresContainer.classList.toggle("hide");
                clearInterval(timer);
            };


            
        });
    };
};

// Start quiz function
var startQuiz = function () {
    // The landing page should hide
    var hiddenEl = document.getElementById("to-hide");
    hiddenEl.classList.add("hide");
    var currentQuestion = 0

    showQuestions.classList.toggle("hide");
    displayQuestions(currentQuestion);

};

// Timer will display and start counting down from 60 seconds
var timer = setInterval(function () {
    timeLeft--;
    displayTime.textContent = "Time Left: " + timeLeft;
    showQuestions.appendChild(displayTime);

    // console.log(timeLeft);
    if (timeLeft === 0) {
        clearInterval(timer);
        // show.classList.toggle("hide");
    }
}, 1000);

// Click the start button
startButton.addEventListener("click", startQuiz);

// Submit highscore
submitButton.addEventListener("click", function() {
    localStorage.setItem(JSON.stringify(initials.value), timeLeft);
    var scoreList = localStorage.getItem(JSON,parse(initials.value), timeLeft);
    scoreList = document.createElement("<div>");
    highscores.appendChild(scoreList);
    showScores.classList.toggle("hide");
});
