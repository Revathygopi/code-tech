const startBtn = document.querySelector('.start-btn'); 
const popupInfo = document.querySelector('.popup-info'); 
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn'); 
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
startBtn.onclick= () => {
popupInfo.classList.add('active'); 
main.classList.add('active');
}
exitBtn.onclick=() => {
popupInfo.classList.remove('active');
main.classList.remove('active');
}

continueBtn.onclick = () => {
quizSection.classList.add('active');
popupInfo.classList.remove('active');
main.classList.remove('active');
quizBox.classList.add('active');
showQuestions(0);
questionCounter(1);
headerscore();
}
let questionCount=0;
let questionNumb=1;
let userScore=0;
const nextBtn=document.querySelector('.next-btn');
nextBtn.onclick=()=>
{
  if(questionCount<questions.length-1)
  {
  questionCount++;
  showQuestions(questionCount);
  questionNumb++;
  questionCounter(questionNumb);
  nextBtn.classList.remove('active')
  }
  else{
   
    showresultbox();
  }

}
const optionlist=document.querySelector('.option-list');
function showQuestions(x)
{
  const questionText=document.querySelector('.question-text');
  questionText.textContent=`${questions[x].numb}.${questions[x].question}`;
  let optionTag=`<div class="option"><span>${questions[x].options[0]}</span></div>
  <div class="option"><span>${questions[x].options[1]}</span></div>
  <div class="option"><span>${questions[x].options[2]}</span></div>
  <div class="option"><span>${questions[x].options[3]}</span></div>`;
  optionlist.innerHTML=optionTag;
  const option=document.querySelectorAll('.option');
  for(let i=0;i<option.length;i++)
  {
    option[i].setAttribute('onclick','optionSelected(this)');
  }
}
function optionSelected(answer)
{
  let useranswer=answer.textContent;
  let correctanswer=questions[questionCount].answer;
  let allOptions=optionlist.children.length;

  if(useranswer==correctanswer)
{
  answer.classList.add('correct');
  userScore+=1;
  headerscore();
}
else{
  answer.classList.add('incorrect')
  for(let i=0;i<allOptions;i++)
  {
    if(optionlist.children[i].textContent==correctanswer)
    {
      optionlist.children[i].setAttribute('class','option correct')
    }
  }

}
for(let i=0;i<allOptions;i++)
{
  optionlist.children[i].classList.add('disabled');
}
nextBtn.classList.add('active');
}
function questionCounter(x)
{
  const questionTotal=document.querySelector('.question-total');
  questionTotal.textContent=`${x}of ${questions.length} Questions`;
}
function headerscore()
{
const headerscoretext=document.querySelector('.header-score');
headerscoretext.textContent=`Score: ${userScore} / ${questions.length}`;
}
function showresultbox(){
quizBox.classList.remove('active');
resultBox.classList.add('active');
const scoretext=document.querySelector('.score-text');
scoretext.textContent=`Your Score ${userScore} out of ${questions.length}`;
}