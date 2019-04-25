// THE SERVER SIDE
// Instead of rendering our app, we need to wrap it into a function and export it.
// The function accepts the initial state of the application.
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './components/app';
module.exports = function render(initialState) {
  // Pass initialState to configureStore(). configureStore()returns a new Store instance. Hold it inside the store variable.
  const store = configureStore(initialState);
  // Call renderToString() method, providing our App as input.
  // It renders our app on the server and returns the HTML produced. Now, the variable content stores the HTML.
  let content = renderToString(
    <Provider store={store} >
    <App />
    </Provider>
  );
  // Get the state out of Redux Store by calling getState() on store.
  // Keep it in a variable preloadedState.
  const preloadedState = store.getState();
  // Return the content and preloadedState. We will pass these to our template to get the final HTML page.
  return {content, preloadedState};
};
