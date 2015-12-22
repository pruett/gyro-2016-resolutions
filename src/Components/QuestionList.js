import React from 'react'
import Question from './Question'

import styles from './Questions.css'
import header from '../images/header-questions.png'

const QuestionList = ({questions, questionId, nextQuestion, showGenerator}) => (
  <div>
    <img className={styles.header} src={header} />
    <div className={styles.dots}></div>

    <Question
      content={questions[questionId]}
      clickHandler={questionId === questions.length - 1 ? showGenerator : nextQuestion}
    />

  </div>
)

export default QuestionList
