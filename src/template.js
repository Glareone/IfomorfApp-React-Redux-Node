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
function template(title, initialState = {}, content = "") {
  // there is nothing special except window.__STATE__. All we need to do is grab the initial state from
  // window.__STATE__ and pass it to our configureStore() function as the initial state.
  let scripts = '';
  if (content) {
    scripts = `<script>window.__STATE__ = ${JSON.stringify(initialState)}</script><script src="assets/client.js"></script>`
  } else {
    scripts = `<script src="assets/bundle.js"></script>`;
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title>${title}</title>
                <link href="assets/style.css" rel="stylesheet">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->${content}
                   </div>
                </div>
                  ${scripts}
              </body>
              </html>`;
  return page;
}

module.exports = template;
