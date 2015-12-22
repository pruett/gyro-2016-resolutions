import React from 'react'

import styles from './Questions.css'

const Question = ({content, clickHandler}) => (
  <div className={styles.question}>
    <p className={styles.text}>{content}</p>
    <div className={styles.buttons}>
      <button
        onClick={clickHandler}
        className={styles.answerYes}
      >Yes, I certainly did.
      </button>
      <button
        onClick={clickHandler}
        className={styles.answerNo}
      >No. Whoops. I forgot.
      </button>
    </div>
  </div>
)

export default Question
