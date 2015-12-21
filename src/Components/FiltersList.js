import React from 'react'
import Filter from './Filter'

const FiltersList = (props) => (
  <div>
    <h3>filter by:</h3>
    <ul>
      <Filter
        criteria="release_date"
        asc={props.release_date_asc}
        desc={props.release_date_desc}
      />
      <Filter
        criteria="rating"
        asc={props.rating_asc}
        desc={props.rating_desc}
      />
    </ul>
  </div>
)

export default FiltersList
