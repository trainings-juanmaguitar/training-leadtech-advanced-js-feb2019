import React, { Component } from "react"
import Header from '../Header/'
import Sidebar from '../Sidebar/'
import Main from '../Main/'

import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Main />
      </div>
    )
  }
}

export default App
