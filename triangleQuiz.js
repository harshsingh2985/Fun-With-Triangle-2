const quizforms=document.querySelector(".quiz-container");

const btnsubmit=document.querySelector("#Submitans");

const output2=document.querySelector("#outputquiz");

function calculateScore(){
    const score=0;
    const index=0;
    const correctAnswers = ['90°', 'right angled'];

    const data = new FormData(quizforms);
    // console.log(data);

    for(let value of data.values()){
        console.log(value);
        
    }
    


}
btnsubmit.addEventListener("click",calculateScore)