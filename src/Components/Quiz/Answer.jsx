import React  from 'react'


const Answer = ({Option1,Option2,Option3,Option4,question,checkAnswer}) => {

  return (
    <>
      <li ref={Option1} onClick={(e)=>{checkAnswer(e,1)}}>{question.option1}</li>
           <li ref={Option2} onClick={(e)=>{checkAnswer(e,2)}}>{question.option2}</li>
           <li ref={Option3} onClick={(e)=>{checkAnswer(e,3)}}>{question.option3}</li>
           <li ref={Option4} onClick={(e)=>{checkAnswer(e,4)}}>{question.option4}</li>   
    </>
  )
}

export default Answer