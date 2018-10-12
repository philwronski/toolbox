import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(
  rootReducer, 
  applyMiddleware(thunkMiddleware)
)

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)