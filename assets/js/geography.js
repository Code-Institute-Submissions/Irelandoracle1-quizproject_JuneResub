//first step: store questions, answers options
//in an array of obejects
var mathQuestions=[
    {
    question:"What is the smallest county in the island of Ireland",
     answers:{
         a:"County Carlow",
         b:"County Dublin",
         c:"County Louth",
         d:"County Cork"
     },
    
     rightAnswer:"c"
    
    },
    
    {
    question:"Which of these is Ireland longest river",
     answers:{
         a:"River dommy",
         b:"river shannon",
         c:"River Liffey",
         d:"River Bendel"
     },
    
     rightAnswer:"b"
    
    },
    
    {
    question:"Which county in Ireland takes its name from the Vikings",
     answers:{
         a:"County cork",
         b:"County Dublin",
         c:"County Waterford",
         d:"County Sligo"
     },
    
     rightAnswer:"c"
    
    },

    {
        question:"What county is river Garavogue",
        answers:{
             a: "Drogeda",
             b: "Galway",
             C: "Dublin",
             d: "Sligo"
    },

    rightAnswer:"a"

},

    {
       question: "The majestic Mourne Mountains are an Area of Outstanding Natural Beauty Which writer was inspired by this magical landscape",
       answers:{
           a: "Seamus Heaney",
           b: "James Joyce",
           c: "CS Lewis",
           d: "WB Yeats"
    },
    
    rightAnswer:"d"
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