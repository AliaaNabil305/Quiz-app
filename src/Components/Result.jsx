import React, { useContext } from 'react'
import QuizContext from '../Context/Store';

export default function Result() {
    const {score, startAgain, quiz} = useContext(QuizContext);

    return (
        <div>  
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-8 ">
                        <div className={`text-white p-5 text-center ${score > (quiz.length * 5) / 2 ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className="text-center">{score > (quiz.length * 5) / 2 ? 'Awesome' : 'Oops'}</h1>
                            <h2 className="text-center mb-5">Your Score: {score} out of {quiz.length * 5}</h2>
                            <button className='btn py-2 px-4 btn-light fw-bold d-inline ' onClick={startAgain}>Start Again</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
