import React from 'react'
import Answer from './Answer'



const Question = ({index,question,Option1,Option2,Option3,Option4,checkAnswer} ) => {
    
  return (
   <>
     <h2>{index+1}. {question.question}</h2>
        <ul>
          <Answer
            Option1={Option1}  
            Option2={Option2}  
            Option3={Option3}  
            Option4={Option4}  
            question={question}
            checkAnswer={checkAnswer}
          />
        </ul>
   </>
  )
}

export default Question