// The Client Side
// This is how you write the React and Redux Provider wrap. It is our pure client-side app.
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'

const store = configureStore();
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app')
);
