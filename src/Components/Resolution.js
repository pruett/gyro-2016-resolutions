import React from 'react'

const Resolution = ({content, number}) => (
  <li>
    <h2>Resolution #{number + 1}</h2>
    {content}
  </li>
)

export default Resolution
