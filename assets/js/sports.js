//first step: store questions, answers options
//in an array of obejects
var mathQuestions = [
    {
        question: "Jurgen Klopp began his manegeral career ayt which German club",
        answer: {
            a: "Mainz 05",
            b: "Mainz 07",
            c: "Main 10",
            d: "Main 08"
        },

        rightAnswer: "a"

    },

    {
        question: "Which England footballer was famously never given a yellow card",
        answer: {
            a: "Paul Sholes",
            b: "Gary Lineker",
            c: "David Beckham",
            d: "lukaka kalu"
        },

        rightAnswer: "b"

    },

    {
        question: "After retiring from professional cycling what other sport did Bradley Wiggins briefly attempt to make a career in",
        answer: {
            a: "Soccer",
            b: "Basketball",
            c: "Volley ball",
            d: "Rowing"
        },

        rightAnswer: "d"

    },

    {
        question: "The Chicago Cubs and Boston Red Sox play which sport",
        answer: {
            a: "Rugby",
            b: "Soccer",
            C: "Basketball",
            d: "Baseball"
        },

        rightAnswer: "d"

    },

    {
        question: "England won the 2003 Rugby World Cup thanks to an iconic drop goal from Jonny Wilkinson. How many points did England score in the match",
        answer: {
            a: "20",
            b: "22",
            c: "29",
            d: "30"
        },

        rightAnswer: "a"
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

    for(let letter in questions[i].answer){
        mathAnswers.push(
            '<div>'
           
        +'<input type="radio" class="radio-button" name="question'+i+'" value="'+letter+'">'
        +'<span>'
        +letter+" : "+questions[i].answer[letter]
        
        +'</span>'
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
 
 //track users answers
 var userAnswer="";
 //initilize the right answers
 let numberOfCorrectAnswers=0;

 for(var v=0; v<=questions.length - 1; v++){
    
  userAnswer=(userAnswerContainers[v].querySelector('input[name=question'+v+']:checked')).value;
 if(userAnswer===questions[v].rightAnswer){
    numberOfCorrectAnswers++;
     //add correct answer image
     userAnswerContainers[v].innerHTML="<img src='assets/images/img/right.jpg'>"

 }else{
    userAnswerContainers[v].innerHTML="<img src='assets/images/img/wrong.png'>"
 }

 }
 scorecontainer.innerHTML=numberOfCorrectAnswers + "/" +questions.length
 }





submitButton.onclick=function(){

    displayResults(mathQuestions, quizContainer, scoreContainer)
}


