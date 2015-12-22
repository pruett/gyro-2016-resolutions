import React from 'react'
import Resolution from './Resolution'

import styles from './Resolutions.css'
import header from '../images/header-resolution.png'

const ResolutionList = ({resolutions, listResolutions, addResolution}) => (
  <div>
    <img className={styles.header} src={header} />
    <ul>
      {listResolutions.map((_, i)  => (
        <Resolution
          key={i}
          content={resolutions[i]}
          number={i}
        />
      ))}
    </ul>

    {listResolutions.length < resolutions.length
      ?
        <button onClick={addResolution}>add res</button>
      :
        <span>Happy Holidays!</span>
    }
  </div>
)

export default ResolutionList
