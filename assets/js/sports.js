//first step: store questions, answers options
//in an array of obejects
var mathQuestions = [
    {
        question: "Jurgen Klopp began his manegeral career ayt which German club",
        answers: {
            a: "Mainz 05",
            b: "Mainz 07",
            c: "Main 10",
            d: "Main 08"
        },

        rightAnswer: "a"

    },

    {
        question: "Which England footballer was famously never given a yellow card",
        answers: {
            a: "Paul Sholes",
            b: "Gary Lineker",
            c: "David Beckham",
            d: "lukaka kalu"
        },

        rightAnswer: "b"

    },

    {
        question: "After retiring from professional cycling what other sport did Bradley Wiggins briefly attempt to make a career in",
        answers: {
            a: "Soccer",
            b: "Basketball",
            c: "Volley ball",
            d: "Rowing"
        },

        rightAnswer: "d"

    },

    {
        question: "The Chicago Cubs and Boston Red Sox play which sport",
        answers: {
            a: "Rugby",
            b: "Soccer",
            C: "Basketball",
            d: "Baseball"
        },

        rightAnswer: "d"

    },

    {
        question: "England won the 2003 Rugby World Cup thanks to an iconic drop goal from Jonny Wilkinson. How many points did England score in the match",
        answers: {
            a: "20",
            b: "22",
            c: "29",
            d: "30"
        },

        rightAnswer: "a"
    },

];

// second step: store all dom containers in a variable

var imageContainer = document.getElementById('img');
var scoreContainer = document.getElementById('score');
var quizContainer = document.getElementById('quiz');
var submitContainer = document.getElementById('submit');

displayQuestions(mathQuestions, quizContainer)

//step three: create  a quiz display function

//this function diplays questions and answers
//from a loop
function displayQuestions(questions, quizcontainer) {
    var displayOutput = [];
    var mathAnswers;

    for (var i = 0; i <= questions.length; i++) {

        mathAnswers = [];

        for (letter in questions[i].answers) {
            mathAnswers.push('<input type="radio" name="question' + i + '" value="' + letter + '">'
                + letter + " : " + questions[i].answers[letter]);


        } //this the end of the answers loop
        displayOutput.push('<div id="question">' + questions[i].question + "<br>" + '</div>' + '<div id="answers">' + mathAnswers.join('') + "<br>" + '</div>');
        quizcontainer.innerHTML = displayOutput.join('')
    } //end of main for loop

}
