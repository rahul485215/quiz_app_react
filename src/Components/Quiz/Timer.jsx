import React  from 'react'


const Timer = ( {timer}) => {
   
  return (
   <>
     <div className="timer">Time Left: <span>{timer}s</span></div>
   </>
  )
}

export default Timer