import React from 'react'
import fetchJsonp from 'fetch-jsonp'

class MovieInfo extends React.Component {
  constructor () {
    super()
    this.state = { info: null, fetching: true }
  }

  componentDidMount () {
    fetchJsonp(this.props.api)
      .then(res => {
        return res.json()
      }).then(json => {
        this.setState({ info: json, fetching: false })
      }).catch( (err) => {
        console.error(err)
      })
  }

  render () {
    return (
      <div>
        {(() => {
          if (this.state.fetching) {
            return <h3>fetching movie info...</h3>
          } else {
            return (
              <div>
                <img src={this.state.info.posters.thumbnail} />
                <ul>
                  {this.state.info.abridged_cast.map((cast, i) => {
                    <li>{cast.name}</li>
                  })}
                </ul>
              </div>
            )
          }
        })()}
      </div>
    )
  }
}

MovieInfo.propTypes = {
  api: React.PropTypes.string.isRequired
}

export default MovieInfo
