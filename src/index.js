import React from 'react'
import ReactDOM from 'react-dom'
import { persistStore } from 'redux-persist'

import './index.css'
import App from './App'
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'

import { configureStore } from './store'

const store = configureStore()
persistStore(store)

/* ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
) */
ReactDOM.render(
  <Provider loading={<div>Loading...</div>} store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
/* 
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
) */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
