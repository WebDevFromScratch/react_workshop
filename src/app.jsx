var $ = require('jquery');
var React = require('react');
window.React = React;
var StoriesList = require('./stories_list.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className='storiesContainer'>
        <h1>Stories:</h1>
        <br/>
        <StoriesList source='https://fierce-gorge-1132.herokuapp.com/stories' />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('content')
);
