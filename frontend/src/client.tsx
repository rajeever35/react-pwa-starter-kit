import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {App} from './components/App/App'

const domContainer = document.getElementById('app')
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  domContainer
)
