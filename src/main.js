import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import * as content from './content'

// function shuffle(array) {
//   let counter = array.length, temp, index

//   // While there are elements in the array
//   while (counter > 0) {
//     // Pick a random index
//     index = Math.floor(Math.random() * counter)

//     // Decrease counter by 1
//     counter--

//     // And swap the last element with it
//     temp = array[counter]
//     array[counter] = array[index]
//     array[index] = temp
//   }

//   return array
// }

// let randomizedIndices = shuffle([...Array.from(content.resolutions).keys()])

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
