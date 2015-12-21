import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import * as content from './content'

ReactDOM.render(
  <App
    questions={content.questions}
    resolutions={content.resolutions}
  />, document.getElementById('app')
)
