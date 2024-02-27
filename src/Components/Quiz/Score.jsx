import React  from 'react'


const Score = ({score,data}) => {
  return (
    <>
     <h2>You scored {score} out of {data.length}</h2>
    </>
  )
}

export default Score