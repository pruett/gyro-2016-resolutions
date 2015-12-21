import React from 'react'
import Question from './Question'
import ResolutionList from './ResolutionList'

class App extends React.Component {
  constructor () {
    if (!!location.search) {
      this.state = { readOnly: true }
    }
  }

  componentDidMount () {
  }

  addRandomResolution () {
    this.setState({ chosenResolutions: [1, 4] })
  }

  render () {
    return (
      <div>
        <ul>
          {this.props.questions.map(q => (
            <Question
              key={q.id}
              content={q.copy}
            />
          ))}
        </ul>

        <ResolutionList
          chosenResolutions={
            this.props.resolutions.filter(resolution =>
              resolution.id === this.state.chosenResolutions.forEach(chosenId =>
                res.id === chosenId
              )
            )
          }
          addRandomResolution={this.addRandomResolution.bind(this)}
        />

      </div>
    )
  }
}

App.propTypes =
  { questions: React.PropTypes.array.isRequired
  , resolutions: React.PropTypes.array.isRequired
  }

export default App
