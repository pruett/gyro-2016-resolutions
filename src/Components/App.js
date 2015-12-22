import React from 'react'
import Question from './Question'
import ResolutionList from './ResolutionList'
import QuestionList from './QuestionList'

import styles from './App.css'
import header from '../images/header-intro.png'
import logo from '../images/logo.png'
import shareIcon from '../images/icon-share.png'
import printIcon from '../images/icon-print.png'

const Header = () => (
  <div className={styles.header}>
    <img className={styles.logo} src={logo} />
    <ul className={styles.shareIcons}>
      <li className={styles.shareIcon}><img className={styles.icon} src={shareIcon} /></li>
      <li className={styles.shareIcon}><img className={styles.icon} src={printIcon} /></li>
    </ul>
  </div>
)

const IntroSection = ({showQuestions}) => (
  <div>
    <img className={styles.introLogo} src={header} />
    <button className={styles.introButton} onClick={showQuestions}>Click here to get your resolution on.</button>
  </div>
)

class App extends React.Component {
  componentWillMount () {
    this.setState({
      showIntro: true,
      showQuestions: false,
      questionId: 0,
      showResolutionGenerator: false,
      listResolutions: []
    })
  }

  nextQuestion () {
    this.setState({ questionId: this.state.questionId += 1 })
  }

  addResolution () {
    this.setState({ listResolutions: this.state.listResolutions.concat(true) })
  }

  showQuestions () {
    this.setState({ showQuestions: true, showIntro: false })
  }

  showGenerator () {
    this.setState({ showResolutionGenerator: true, showQuestions: false })
  }

  render () {
    let intro = this.state.showIntro
      ? <IntroSection showQuestions={this.showQuestions.bind(this)} />
      : <div></div>

    let questions = this.state.showQuestions
      ? <QuestionList
          questions={this.props.questions}
          questionId={this.state.questionId}
          nextQuestion={this.nextQuestion.bind(this)}
          showGenerator={this.showGenerator.bind(this)}
        />
      : <div></div>

    let resolutionGenerator = this.state.showResolutionGenerator
      ? <ResolutionList
          resolutions={this.props.resolutions}
          listResolutions={this.state.listResolutions}
          addResolution={this.addResolution.bind(this)}
        />
      : <div></div>

    return (
      <div className={styles.AppContainer}>
        <Header />
        {intro}
        {questions}
        {resolutionGenerator}
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
