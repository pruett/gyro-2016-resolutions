import React from 'react'
import Movie from './Movie'
import * as API from './../api'

const MoviesList = ({movies}) => (
  <div>
    <h1>Listing recent movies:</h1>
    <ul>
      {movies.map( (movie, i) => (
        <Movie key={i}
          id={movie.id}
          title={movie.title}
          rating={movie.ratings.critics_rating}
          api={`${API.movie}${movie.id}${API.key}`}
          date={movie.release_dates.theater}
        />
      ))}
    </ul>
  </div>
)

export default MoviesList
