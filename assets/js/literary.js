//first step: store questions, answers options
//in an array of obejects
var mathQuestions = [
    {
        question: "What is the occupation of the protagonist Guy Montag in Ray Bradburys Fahrenheit 451",
        answers: {
            a: "Fisherman",
            b: "Fireman",
            c: "Dentist",
            d: "Doctor"
        },

        rightAnswer: "b"

    },

    {
        question: "In what year was Of Mice and Men published",
        answers: {
            a: "1922",
            b: "1935",
            c: "1807",
            d: "1937"
        },

        rightAnswer: "d"

    },

    {
        question: "What classic written by Homer relates the adventures and life of Odysseus",
        answers: {
            a: "The Odyssey",
            b: "The Wagos",
            c: "The Beetles",
            d: "The Ark"
        },

        rightAnswer: "a"

    },

    {
        question: "How many of Ernest Hemingways ten novels were published posthumously",
        answers: {
            a: "Five",
            b: "Seven",
            C: "Three",
            d: "Twenty"
        },

        rightAnswer: "c"

    },

    {
        question: "John Keats wrote what poem to a singing bird",
        answers: {
            a: "The Kaftans",
            b: "Ode to A Nightingale",
            c: "Ode to A Night",
            d: "Ode to A gale"
        },

        rightAnswer: "b"
    },

];

// second step: store all dom containers in a variable


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
