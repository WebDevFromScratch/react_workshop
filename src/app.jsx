var $ = require('jquery');
var React = require('react');
window.React = React;
var Bootstrap = require('react-bootstrap');
var StoriesList = require('./stories_list.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Bootstrap.Navbar brand='React Workshop'>
          <Bootstrap.Nav>
            <Bootstrap.NavItem eventKey={1} href='/popular' source='https://fierce-gorge-1132.herokuapp.com/stories'>Popular</Bootstrap.NavItem>
            <Bootstrap.NavItem eventKey={2} href='/recent' source='https://fierce-gorge-1132.herokuapp.com/recent'>Recent</Bootstrap.NavItem>
          </Bootstrap.Nav>
        </Bootstrap.Navbar>
        <div className='storiesContainer'>
          <h1 className='text-center'>Stories:</h1>
          <br/>
          <StoriesList source='https://fierce-gorge-1132.herokuapp.com/stories' />
        </div>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('content')
);
