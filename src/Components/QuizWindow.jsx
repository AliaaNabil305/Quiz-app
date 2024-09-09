import React, { useContext } from 'react'
import QuizContext  from '../Context/Store';
import Result from '../Components/Result'
export default function QuizWindow() {
    const {checkAnswer,showResult,correctAnswer,selectedAnswer,
        question,quiz,questionIndex,nextQuestion,showScore} = useContext(QuizContext);
        if (showScore) {
            return <Result />;
        }
        
  return (
    <div className='section '>
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="col-lg-8 ">
                    <div className="card text-white p-3">
                    <div className="d-flex justify-content-between gap-md-3">
                                <h5 className='mb-2 fs-normal lh-base'>{question?.question}</h5>
                                <h5 style={{ color: '#60d600', width: '100px', textAlign: 'right' }}>{quiz.indexOf(question) + 1} / {quiz?.length}</h5>
                    </div>
                    <div className="choices m-3">
                       {question?.options?.map((choice,idx)=> <button key={idx} 
                       className={`btn btn-transperent text-white border w-100 mt-3 text-center option ${correctAnswer===choice && 'bg-success'}`} onClick={(e)=>checkAnswer(e,choice)}>{choice}</button>
                       )}
                    </div>
                    {(questionIndex+1) !=quiz.length?
                        <button className='btn btn-primary'onClick={nextQuestion} disabled={!selectedAnswer}>Next Question</button>:
                        <button className='btn btn-primary'onClick={showResult} disabled={!selectedAnswer}>Show Result</button>
                }
                    
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
