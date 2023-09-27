var quizData=[
    {
        question:"Which of the tools is not used in Front-end Web Development?",
        a:"HTML",
        b:"CSS",
        c:"JS",
        d:"NodeJs",
        correct:'d'
    },
    {
        question:"Which of the following is a Js framework?",
        a:"React",
        b:"CSS",
        c:"HTML",
        d:"FRAMEWORK.js",
        correct:'a'
    },
    {
        question:"The tag used create a hyperlink in HTML:",
        a:"<abbr>",
        b:"<a>",
        c:"<h1>",
        d:"<hyperlink>",
        correct:'b'
    },
    {
        question:"Which selector is used to select a class in CSS?",
        a:". selector",
        b:"# selector",
        c:"* selector",
        d:"None of the above",
        correct:'a'
    }
]

var quizdiv = document.getElementById("quizdiv");
var option = document.querySelectorAll(".option");
var question = document.getElementById("question");
var optionA= document.getElementById("a_value");
var optionB= document.getElementById("b_value");
var optionC= document.getElementById("c_value");
var optionD= document.getElementById("d_value");

var submit = document.getElementById('submit');

var currentQuestion=0;
var quizScore=0;

loadQuiz()

function loadQuiz(){
    deselect()
    question.innerHTML=quizData[currentQuestion].question
    optionA.innerText=quizData[currentQuestion].a
    optionB.innerText=quizData[currentQuestion].b
    optionC.innerText=quizData[currentQuestion].c
    optionD.innerText=quizData[currentQuestion].d
}

function deselect(){
    option.forEach(option=>option.checked=false)
}

submit.addEventListener("click",()=>{
    var selectedOption;
    option.forEach(option=>{

        if(option.checked){
            selectedOption=option.id
        }
    })
    if(selectedOption==quizData[currentQuestion].correct){
        quizScore=quizScore+1;
    }
    currentQuestion = currentQuestion + 1;
    if(currentQuestion==quizData.length){
        document.getElementById('quizdiv').innerHTML=`<h1>You have answered ${quizScore}/${quizData.length} questions correctly`
    }
    else{
        loadQuiz();
    }
})
