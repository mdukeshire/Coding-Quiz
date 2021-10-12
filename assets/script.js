

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
       
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 

 
function showScores() {
   initials = prompt("Enter initials.");

    var gameOver = "<h1>SCORE</h1>";
    gameOver += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    gameOver += (initials + ":" + quiz.score);
    var element = document.getElementById("quiz");
    element.innerHTML = gameOver;
   
};
 
// create questions here
var questions = [
    new Question("Commonly used data types DO NOT include?", ["string", "boolean","alerts", "numbers"], "alerts"),
    new Question("The condition in an if/else statment is enclosed within ___.", ["quotes", "curly brackets", "parentheses", "square brackets"], "parentheses"),
    new Question("Arrays in JavaScript can be used to store___.", ["numbers and strings", "other arrays","booleans", "all"], "booleans"),
    new Question("String values must be enclosed within ___ when being assigned to variables.", ["commas", "curly brackets", "quotes", "parentheses"], "curly brackets"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is:", ["JavaScript", "terminal/bash", "for loops", "console.log"], "console.log")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();