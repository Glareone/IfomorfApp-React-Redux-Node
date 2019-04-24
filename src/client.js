import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import App from './components/app';
// Yeah, there is nothing special except window.__STATE__.
// All we need to do is grab the initial state from window.__STATE__ and pass it to our configureStore() function
// as the initial state.
const state = window.__STATE__;
delete window.__STATE__;
const store = configureStore(state);
// Replace render() with hydrate(). hydrate() is the same as render() but is used to hydrate elements rendered
// by ReactDOMServer. It ensures that the content is the same on the server and the client.
// Read the state from the global window object window.__STATE__. Store it in a variable and delete the window.__STATE__.
// Create a fresh store with state as initialState.
hydrate(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('#app')
);
