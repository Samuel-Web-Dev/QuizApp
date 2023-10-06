import React, { useState, useEffect } from 'react'
import './App.css'

import StartQuiz from './components/StartQuiz'
import Question from './components/Question'

const App = () => {
  // https://opentdb.com/api.php?amount=5&category=18

        const [render, setRender] = useState(<StartQuiz handleChange={() =>{
          setRender(<Question />)
        }} />)


  return (
     <div>
        {render}
      </div>
  )
}

export default App