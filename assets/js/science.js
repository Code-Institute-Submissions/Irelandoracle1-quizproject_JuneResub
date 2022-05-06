//first step: store questions, answers options
//in an array of obejects
var mathQuestions=[
    {
    question:"How many bones are in the human body?",
     answers:{
         a:206,
         b:80,
         c:209,
         d:399
     },
    
     rightAnswer:"a"
    
    },
    
    {
    question:"Which famous British physicist wrote A Brief History of Time?",
     answers:{
         a:"oracle john",
         b:"Stephen Hawking",
         c:"Godwin stallion",
         d:"Lucad samuel"
     },
    
     rightAnswer:"b"
    
    },
    
    {
    question:"Which Apollo moon mission was the first to carry a lunar rover?",
     answers:{
         a:"Apollo 1",
         b:"Apollo 19",
         c:"Apollo 17",
         d:"Apollo 15"
     },
    
     rightAnswer:"d"
    
    },

    {
        question:"Which oath of ethics taken by doctors is named after an Ancient Greek physician?",
        answers:{
             a:"Frank Whittle",
             b: "Sans Adams",
             C: "Hippocratic Oath",
             d: "Gaay core"
    },

    rightAnswer:"c"

},

    {
       question: "What modern day country was Marie Curie born in",
       answers:{
           a: "Poland",
           b: "France",
           c: "Norway",
           d: "Nigeria"
    },
    
    rightAnswer:"a"
},
    
];
    
    // second step: store all dom containers in a variable
    
   
    var scoreContainer=document.getElementById('score');
    var quizContainer=document.getElementById('quiz');
    var submitContainer=document.getElementById('submit');
    
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
            mathAnswers.push('<input type="radio" name="question'+i+'" value="'+letter+'">'
            +letter+" : "+questions[i].answers[letter]);
            
    
        } //this the end of the answers loop
        displayOutput.push('<div id="question">'+questions[i].question+"<br>"+'</div>'+'<div id="answers">'+mathAnswers.join('')+"<br>"+'</div>');
        quizcontainer.innerHTML=displayOutput.join('')
    } //end of main for loop
    
    }