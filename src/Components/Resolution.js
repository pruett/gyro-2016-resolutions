import React from 'react'

import styles from './Resolutions.css'

const Resolution = ({content, number, picks}) => (
  <li className={styles.resolution}>
    <img className={styles.resolutionImage} src={`resolutions/${number+1}-${picks[number]+1}.png`} />
    <div className={styles.content}>
      <p className={styles.num}>Resolution #{number + 1}</p>
      <p className={styles.text}>This year, I will {content}</p>
    </div>
  </li>
)

export default Resolution
