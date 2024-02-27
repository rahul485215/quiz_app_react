import React  from 'react'


const QuestionsLength = ({index,data} ) => {
   
  return (
    <>
      <div className="index">{index+1} of {data.length} questions</div>
    </>
  )
}

export default QuestionsLength