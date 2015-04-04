var React  = require('react')
  , Router = require('react-router')

  , entry =

(routes) =>
  document.addEventListener('DOMContentLoaded', e => {
    Router.run(routes, Router.HistoryLocation, (Handler, state) => {
      React.render(<Handler/>, document.body);
    });
  });

module.exports = entry;

