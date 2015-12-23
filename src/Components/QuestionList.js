import React from 'react'
import Question from './Question'

import styles from './Questions.css'

const QuestionList = ({questions, questionId, nextQuestion, showGenerator}) => (
  <div>
    <h1 className={styles.headline}>Please answer a few questions so we can better tailor resolutions for you</h1>
    <div className={styles.dots}></div>

    <Question
      content={questions[questionId]}
      clickHandler={questionId === questions.length - 1 ? showGenerator : nextQuestion}
    />

  </div>
)

export default QuestionList
