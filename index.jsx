import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'
import './index.css'
import Clock from './clock.jsx'

var demo=document.querySelector(".demo")
var clock=document.querySelector(".clock")
ReactDOM.render(<App />,demo)
ReactDOM.render(<Clock />,clock)


