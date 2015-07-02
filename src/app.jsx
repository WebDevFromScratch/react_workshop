var React = require('react');
window.React = React;

var App = React.createClass({
  render: function() {
    return (
      <div>
        Hello World
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('content')
);
