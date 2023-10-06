import React from 'react'

const StartQuiz = (props) => {
  return (
  <div className='startquiz_container'>
    <h1>Quizzical</h1>
    <p>Some description if needed</p>
    <button onClick={props.handleChange}>Start quiz</button>
</div>
  )
}

export default StartQuiz