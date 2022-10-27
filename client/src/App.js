import React from 'react'
import './App.css'

import { Provider } from 'react-redux'
import store from './state/_config/store'

import Home from './components/pages/Home'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  )
}

export default App
