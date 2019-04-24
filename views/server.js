"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRedux = require("react-redux");

var _configureStore = _interopRequireDefault(require("./redux/configureStore"));

var _app = _interopRequireDefault(require("./components/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function render(initialState) {
  // Model the initial state
  var store = (0, _configureStore["default"])(initialState); // Magic happens here. This is the code you’ve been searching for.
  // Instead of rendering our app, we need to wrap it into a function and export it.
  // The function accepts the initial state of the application.

  var content = (0, _server.renderToString)(_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, _react["default"].createElement(_app["default"], null)));
  var preloadedState = store.getState();
  return {
    content: content,
    preloadedState: preloadedState
  };
};