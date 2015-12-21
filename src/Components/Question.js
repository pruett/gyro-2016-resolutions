import React from 'react'

const Question = ({content}) => (
  <li>
    {content}
    <button>Yes</button>
    <button>No</button>
  </li>
)

export default Question
