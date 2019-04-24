"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _configureStore = _interopRequireDefault(require("./redux/configureStore"));

var _app = _interopRequireDefault(require("./components/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Yeah, there is nothing special except window.__STATE__.
// All we need to do is grab the initial state from window.__STATE__ and pass it to our configureStore() function
// as the initial state.
var state = window.__STATE__;
delete window.__STATE__;
var store = (0, _configureStore["default"])(state); // Replace render() with hydrate(). hydrate() is the same as render() but is used to hydrate elements rendered
// by ReactDOMServer. It ensures that the content is the same on the server and the client.
// Read the state from the global window object window.__STATE__. Store it in a variable and delete the window.__STATE__.
// Create a fresh store with state as initialState.

(0, _reactDom.hydrate)(_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, _react["default"].createElement(_app["default"], null)), document.querySelector('#app'));