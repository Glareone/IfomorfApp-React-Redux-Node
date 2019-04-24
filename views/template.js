"use strict";

// template.js exports a function. It takes title, state and content as input.
// It injects them into the template and returns the final HTML document.
//
// To pass along the state, the template attaches state to window.__STATE__ inside a <script> tag.
//
// Now you can read state on the client side by accessing window.__STATE__.
//
// We also include the SSR companion assets/client.js client-side application in another script tag.
//
// If you request the pure client version, it only puts assets/bundle.js inside the script tag.
function template(title) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  // there is nothing special except window.__STATE__. All we need to do is grab the initial state from
  // window.__STATE__ and pass it to our configureStore() function as the initial state.
  var scripts = '';

  if (content) {
    scripts = "<script>window.__STATE__ = ".concat(JSON.stringify(initialState), "</script><script src=\"assets/client.js\"></script>");
  } else {
    scripts = "<script src=\"assets/bundle.js\"></script>";
  }

  var page = "<!DOCTYPE html>\n              <html lang=\"en\">\n              <head>\n                <meta charset=\"utf-8\">\n                <title>".concat(title, "</title>\n                <link href=\"assets/style.css\" rel=\"stylesheet\">\n              </head>\n              <body>\n                <div class=\"content\">\n                   <div id=\"app\" class=\"wrap-inner\">\n                      <!--- magic happens here -->").concat(content, "\n                   </div>\n                </div>\n                  ").concat(scripts, "\n              </body>\n              </html>");
  return page;
}

module.exports = template;