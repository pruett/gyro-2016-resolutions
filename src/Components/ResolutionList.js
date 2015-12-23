import React from 'react'
import Resolution from './Resolution'

import styles from './Resolutions.css'
import loader from '../images/loading.gif'
import share from '../images/share.png'

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
          <h3 className={styles.shareCallout}>Share your resolution</h3>
          <ul className={styles.shareList}>
            <li>
              <a className={styles.shareFb} href="https://www.facebook.com/dialog/share?app_id=876459292469114&amp;display=popup&amp;href=http%3A%2F%2Fgyro-resolutions.surge.sh&amp;redirect_uri=http%3A%2F%2Fgyro-resolutions.surge.sh">
              </a>
            </li>
            <li>
              <a className={styles.sharePin} href="https://www.pinterest.com/pin/create/button/?url=http://gyro-resolutions.surge.sh/&media=http://gyro-resolutions.surge.sh/resolutions/og-img.png">
              </a>
            </li>
            <li>
              <a className={styles.shareTwttr} href="https://twitter.com/intent/tweet?text=Check+out+The+Resolution+Imaginator+-+the+season%27s+easiest+way+to+get+resoluting&url=http%3A%2F%2Fgyro-resolutions.surge.sh%2F">
              </a>
            </li>
          </ul>

        </div>
    }
  </div>
)

class ResolutionList extends React.Component {
  componentWillMount () {
    this.setState({ loading: true })
  }

  componentDidMount () {
    setTimeout(() => this.setState({ loading: false }), 10000)
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

ResolutionList.propTypes =
  { resolutions: React.PropTypes.array.isRequired
  , listResolutions: React.PropTypes.array.isRequired
  , addResolution: React.PropTypes.func.isRequired
  , picks: React.PropTypes.array.isRequired
  }

export default ResolutionList
