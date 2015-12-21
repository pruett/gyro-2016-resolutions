import React from 'react'
import Resolution from './Resolution'

const ResolutionList = (
  { allResolutions
  , chosenResolutions
  , addRandomResolution
  }) => (
    <ul>
      {chosenResolutions.map(res => (
        <Resolution
          key={res.id}
          content={res.copy}
        />
      ))}
    </ul>
    <button onClick={addRandomResolution}>add res</button>
  )

export default ResolutionList
