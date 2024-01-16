//Array of objectas
const questions=[
    {
    'que':'Which of the following is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'Javascript',
    'd':'PHP',
    'correct':'a'
    },
    {
        'que':'What year was JS launched',
        'a':"1996",
        'b':"1995",
        'c':"1994",
        'd':"none of the above",
        'correct':"b"
    },
    {
        'que':'What does CSS stands for?',
        'a':"HTML",
        'b':"Cascading Style Sheet",
        'c':"React",
        'd':"none of the above",
        'correct':"b"
    }
]
let index=0;
let total=questions.length;
let right=0,
    wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')  //queryselectorall because we are selectiong maNY CLASSES by same name
const loadQuestions=()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
    const data=questions[index]
    quesBox.innerText=`${index+1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}
const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){        //we get the option user selected
               answer=input.value; 
            }
        }
    )
    return answer;
}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
        <h3>Thank You For Attempting The Quiz<h3>
        <h2>${right}/${total} are Correct!<h2>
        `
}
loadQuestions();
//initial call
