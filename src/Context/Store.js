import { createContext, useEffect, useState } from "react";

const QuizContext=createContext({})

export const QuizProvider = (props) =>{
    let [quiz,setQuiz]=useState([]);
    let [questionIndex,setQuestionIndex]=useState(0);
    let [question,setQuestion]=useState({});
    let [correctAnswer,setCorrectAnswer]=useState('')
    let [selectedAnswer,setSelectedAnswer]=useState('')
    let [score,setScore]=useState(0);
    let [startOver,setStartOver]=useState(false)
    let [showScore,setShowScore]=useState(false)



    useEffect(()=>{
        let quizData=fetch('quiz.json').then(res=>res.json()).then(data=>setQuiz(data))
    },[])

    useEffect(()=>{
        if(quiz.length>questionIndex){
            setQuestion(quiz[questionIndex])
        }
    },[quiz,questionIndex])

    function checkAnswer(e,selected){
        if(!selectedAnswer){
            setCorrectAnswer(question.answer)
            setSelectedAnswer(selected)
        }
        if(question.answer===selected){
            setScore(score+5)
            e.target.classList.add('bg-success')
        }
        else{
            e.target.classList.add('bg-danger')
        }

    }

    function nextQuestion(){
        setCorrectAnswer('')
        setSelectedAnswer('')
        const wrongBtn=document.querySelector('button.bg-danger');
        if(wrongBtn){
            wrongBtn.classList.remove('bg-danger')
        }
        const rightBtn=document.querySelector('button.bg-success');
        if(rightBtn){
            rightBtn.classList.remove('bg-success')
        }
        setQuestionIndex(questionIndex+1)
    }
    function showResult() {
        setShowScore(true);  // This should update the state to trigger result view
    }
    

    function startAgain(){
        setShowScore(false)
        setScore(0)
        setStartOver(true)
        setCorrectAnswer('')
        setSelectedAnswer('')
        setQuestionIndex(0)
        setQuestion('')
        const wrongBtn=document.querySelector('button.bg-danger');
        if(wrongBtn){
            wrongBtn.classList.remove('bg-danger')
        }
        const rightBtn=document.querySelector('button.bg-success');
        if(rightBtn){
            rightBtn.classList.remove('bg-success')
        }

    }





    return(
        <QuizContext.Provider value={{checkAnswer,showResult,correctAnswer,score,selectedAnswer,startAgain,
        showScore,question,quiz,questionIndex,nextQuestion}}>
            {props.children}
        </QuizContext.Provider>
    )
}
export default QuizContext;
