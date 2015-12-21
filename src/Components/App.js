import React from 'react'
import Question from './Question'
import ResolutionList from './ResolutionList'
import QuestionList from './QuestionList'

class App extends React.Component {
  componentWillMount () {
    this.setState({ userResolutions: [], questionId: 0, showResolutionGenerator: false })
  }

  nextQuestion () {
    this.setState({ questionId: this.state.questionId += 1 })
  }

  addResolution () {
    this.setState({ userResolutions: this.state.userResolutions.concat(true) })
  }

  showGenerator () {
    this.setState({ showResolutionGenerator: true })
  }

  render () {
    return (
      <div>
        { this.state.showResolutionGenerator
          ?
            <div></div>
          :
            <QuestionList
              questions={this.props.questions}
              questionId={this.state.questionId}
              nextQuestion={this.nextQuestion.bind(this)}
              showGenerator={this.showGenerator.bind(this)}
            />
        }

        { this.state.showResolutionGenerator
          ?
            <ResolutionList
              resolutions={this.props.resolutions}
              addResolution={this.addResolution.bind(this)}
            />
          :
            <div></div>
        }
      </div>
    )
  }
}

App.propTypes =
  { questions: React.PropTypes.array.isRequired
  , resolutions: React.PropTypes.array.isRequired
  , picks: React.PropTypes.array.isRequired
  }

export default App
