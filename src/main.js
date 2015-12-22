import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import * as content from './content'

const picks = content.resolutions.map(subArray =>
  Math.floor(Math.random() * subArray.length)
)

const resolutions = picks.map((pick, i) =>
  content.resolutions[i][pick]
)

ReactDOM.render(
  <App
    questions={content.questions}
    resolutions={resolutions}
    picks={picks}
  />, document.getElementById('app')
)
