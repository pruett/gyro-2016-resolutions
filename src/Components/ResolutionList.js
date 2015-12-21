import React from 'react'
import Resolution from './Resolution'

const ResolutionList = ({resolutions, uniqueOrder, userResolutions, addResolution}) => (
  <div>
    <h1>Resolution Generator</h1>
    <ul>
      {userResolutions.map((x, i)  => (
        <Resolution
          key={resolutions[uniqueOrder[i]].id}
          content={resolutions[uniqueOrder[i]].content}
        />
      ))}
    </ul>

    {userResolutions.length < uniqueOrder.length
      ?
        <button onClick={addResolution}>add res</button>
      :
        <span>Happy Holidays!</span>
    }
  </div>
)

export default ResolutionList
