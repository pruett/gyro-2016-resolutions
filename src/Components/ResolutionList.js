import React from 'react'
import Resolution from './Resolution'

import styles from './Resolutions.css'
import loader from '../images/loading.png'

const Loader = () => (
  <img className={styles.loader} src={loader} />
)

const ListResolutions = ({resolutions, listResolutions, addResolution, picks}) => (
  <div>
    <h1 className={styles.headline}>Here are your 2016 Resolutions&hellip;</h1>
    <ul className={styles.list}>
      {listResolutions.map((_, i)  => (
        <Resolution
          key={i}
          content={resolutions[i]}
          number={i}
          picks={picks}
        />
      ))}
    </ul>

    {listResolutions.length < resolutions.length
      ?
        <button className={styles.button} onClick={addResolution}>Create more resolutions</button>
      :
        <div>
          <h1 className={styles.headline}>Happy Holidays!</h1>
          <a href="/" className={styles.button}>Play again</a>
        </div>
    }
  </div>
)

class ResolutionList extends React.Component {
  componentWillMount () {
    this.setState({ loading: true })
  }

  componentDidMount () {
    setTimeout(() => this.setState({ loading: false }), 3500)
  }

  render () {
    return (
      <div>
        {this.state.loading
          ? <Loader />
          : <ListResolutions
              resolutions={this.props.resolutions}
              listResolutions={this.props.listResolutions}
              addResolution={this.props.addResolution}
              picks={this.props.picks}
            />
        }
      </div>
    )
  }
}

// const ResolutionList = ({resolutions, listResolutions, addResolution}) => (
//   <div>
//     <img className={styles.header} src={header} />
//     <ul className={styles.list}>
//       {listResolutions.map((_, i)  => (
//         <Resolution
//           key={i}
//           content={resolutions[i]}
//           number={i}
//         />
//       ))}
//     </ul>

//     {listResolutions.length < resolutions.length
//       ?
//         <button className={styles.button} onClick={addResolution}>Create more resolutions</button>
//       :
//         <button className={styles.button}>Play again</button>
//     }
//   </div>
// )

ResolutionList.propTypes =
  { resolutions: React.PropTypes.array.isRequired
  , listResolutions: React.PropTypes.array.isRequired
  , addResolution: React.PropTypes.func.isRequired
  , picks: React.PropTypes.array.isRequired
  }

export default ResolutionList
