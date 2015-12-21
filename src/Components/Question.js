import React from 'react'

const Question = ({content, nextQuestion, finalQuestion, showGenerator}) => (
  <div>
    {content}
    { finalQuestion
      ?
        <div>
          <button onClick={showGenerator}>Yes</button>
          <button onClick={showGenerator}>No</button>
        </div>
      :
        <div>
          <button onClick={nextQuestion}>Yes</button>
          <button onClick={nextQuestion}>No</button>
        </div>
    }
  </div>
)

export default Question
