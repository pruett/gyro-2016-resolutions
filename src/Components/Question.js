import React from 'react'

import styles from './Questions.css'

const Question = ({content, clickHandler}) => (
  <div className={styles.question}>
    <p className={styles.text}>{content.copy}</p>
    <div className={styles.buttons}>
      <button
        onClick={clickHandler}
        className={styles.answerYes}
      >Yes
      </button>
      <button
        onClick={clickHandler}
        className={styles.answerNo}
      >No
      </button>
    </div>
  </div>
)

export default Question
