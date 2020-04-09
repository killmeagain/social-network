import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './scss/main.scss'
import state from './redux/state'

ReactDOM.render(<App state={state} /> , document.querySelector("#root"));
