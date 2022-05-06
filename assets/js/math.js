//first step: store questions, answers options
//in an array of obejects
var mathQuestions=[
    {
    question:"What is the value of 45/9",
     answers:{
         a:6,
         b:8,
         c:5,
         d:3
     },
    
     rightAnswer:"c"
    
    },
    
    {
    question:"What is the value of 50/5",
     answers:{
         a:2,
         b:10,
         c:4,
         d:1
     },
    
     rightAnswer:"b"
    
    },
    
    {
    question:"What is the value of 60/3",
     answers:{
         a:30,
         b:10,
         c:9,
         d:38
     },
    
     rightAnswer:"a"
    
    },

    {
        question:"Which is greater than 4",
        answers:{
             a:5,
             b: -5,
             C: -1/2,
             d: -25.
    },

    rightAnswer:"a"

},

    {
       question: "Simplify: (4 – 5) – (13 – 18 + 2)",
       answers:{
           a: 22,
           b: 30,
           c: 22,
           d: 2
    },
    
    rightAnswer:"d"
},
    
];
    
    // second step: store all dom containers in a variable
    
    var scoreContainer=document.getElementById('score');
    var quizContainer=document.getElementById('quiz');
    var submitButton=document.getElementById('submit');

    //call to the dsiplay question function
    
    displayQuestions(mathQuestions, quizContainer)
    
    //step three: create  a quiz display function
    
    //this function diplays questions and answers
    //from a loop
    function displayQuestions(questions, quizcontainer){
      var displayOutput=[];
      var mathAnswers;
    
    for(var i=0; i<=questions.length; i++){
    
        mathAnswers=[];
    
        for(letter in questions[i].answers){
            mathAnswers.push('<div>'
            +'<input type="radio" name="question'+i+'" value="'+letter+'">'
            +letter+" : "+questions[i].answers[letter]
            +'</div>'
            );
            
    
        } //this the end of the answers loop
        displayOutput.push(
            '<div class="question">'
        +questions[i].question
        +'</div>'
        +'<div class="answers">'+mathAnswers.join('')+'</div>'
        );
        quizcontainer.innerHTML=displayOutput.join('')
    } //end of main for loop
    
    }
// this function helps us to display answers
//once the get quiz result button is clicked
    function displayResults(questions, quizcontainer, scorecontainer){
      //grab all the answers div
     var userAnswerContainers=quizcontainer.querySelectorAll('.answers')
    



    }

    submitButton.onclick=function(){

        displayResults(mathQuestions, quizContainer, scoreContainer)
    }
    
  