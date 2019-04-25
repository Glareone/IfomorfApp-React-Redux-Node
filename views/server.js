"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRedux = require("react-redux");

var _configureStore = _interopRequireDefault(require("./redux/configureStore"));

var _app = _interopRequireDefault(require("./components/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// THE SERVER SIDE
// Instead of rendering our app, we need to wrap it into a function and export it.
// The function accepts the initial state of the application.
module.exports = function render(initialState) {
  // Pass initialState to configureStore(). configureStore()returns a new Store instance. Hold it inside the store variable.
  var store = (0, _configureStore["default"])(initialState); // Call renderToString() method, providing our App as input.
  // It renders our app on the server and returns the HTML produced. Now, the variable content stores the HTML.

  var content = (0, _server.renderToString)(_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, _react["default"].createElement(_app["default"], null))); // Get the state out of Redux Store by calling getState() on store.
  // Keep it in a variable preloadedState.

  var preloadedState = store.getState(); // Return the content and preloadedState. We will pass these to our template to get the final HTML page.

  return {
    content: content,
    preloadedState: preloadedState
  };
};