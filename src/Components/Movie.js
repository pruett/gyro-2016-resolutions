import React from 'react'
import Rating from './Rating'
import ReleaseDate from './ReleaseDate'
import MovieInfo from './MovieInfo'

class Movie extends React.Component {
  addFavorite (id) {
    console.log('movie id: ', id)
  }

  render () {
    const {title, id, rating, api, date} = this.props
    return (
      <li>
        <h1>{title}</h1>
        <Rating rating={rating} />
        <ReleaseDate date={date}/>
        <button onClick={this.addFavorite.bind(this, id)}>Favorite this Movie!</button>
        <MovieInfo api={api} />
      </li>
    )
  }
}

Movie.propTypes =
  { title: React.PropTypes.string.isRequired
  , id: React.PropTypes.string.isRequired
  , rating: React.PropTypes.string
  , date: React.PropTypes.string
  }

export default Movie
