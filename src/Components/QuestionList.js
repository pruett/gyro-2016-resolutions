import React from 'react'
import Question from './Question'

const QuestionList = ({questions, questionId, nextQuestion, showGenerator}) => (
  <div>
    <Question
      content={questions[questionId].copy}
      nextQuestion={nextQuestion}
      finalQuestion={questionId === questions.length - 1 ? true : false }
      showGenerator={showGenerator}
    />
  </div>
)

export default QuestionList
