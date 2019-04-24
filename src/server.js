import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './components/app';
module.exports = function render(initialState) {
  // Model the initial state
  const store = configureStore(initialState);
  // Magic happens here. This is the code you’ve been searching for.
  // Instead of rendering our app, we need to wrap it into a function and export it.
  // The function accepts the initial state of the application.
  let content = renderToString(
    <Provider store={store} >
    <App />
    </Provider>
  );
  const preloadedState = store.getState();
  return {content, preloadedState};
};
