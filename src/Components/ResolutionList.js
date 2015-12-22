import React from 'react'
import Resolution from './Resolution'

const ResolutionList = ({resolutions, listResolutions, addResolution}) => (
  <div>
    <h1>Resolution Generator</h1>
    <h3>This year I will...</h3>
    <ul>
      {listResolutions.map((_, i)  => (
        <Resolution
          key={i}
          content={resolutions[i]}
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
