import React from 'react'

const Rating = ({rating}) => (
  <div>
    {rating ? <span>Rating: {rating}</span> : <span>No rating yet</span>}
  </div>
)

export default Rating
