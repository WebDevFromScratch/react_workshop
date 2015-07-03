var $ = require('jquery');
var React = require('react');
window.React = React;
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Bootstrap = require('react-bootstrap');
var StoriesList = require('./stories_list.jsx');

var Popular = React.createClass({
  render: function() {
    return(
      <StoriesList source='https://fierce-gorge-1132.herokuapp.com/stories' />
    )
  }
});

var Recent = React.createClass({
  render: function() {
    return(
      <StoriesList source='https://fierce-gorge-1132.herokuapp.com/stories/recent' />
    )
  }
});

var App = React.createClass({
  mixins: [ Router.State ],

  render: function() {
    var activeKey = this.getPathname();
    return (
      <div>
        <Bootstrap.Navbar brand='React Workshop'>
          <Bootstrap.Nav activeKey={activeKey}>
            <Bootstrap.NavItem eventKey={'/popular'} href='#/popular' source='https://fierce-gorge-1132.herokuapp.com/stories'>Popular</Bootstrap.NavItem>
            <Bootstrap.NavItem eventKey={'/recent'} href='#/recent' source='https://fierce-gorge-1132.herokuapp.com/recent'>Recent</Bootstrap.NavItem>
          </Bootstrap.Nav>
        </Bootstrap.Navbar>

        <Bootstrap.Grid>
          <Bootstrap.Row className='show-grid'>
            <Bootstrap.Col xs={12}>
              <h1 className='text-center'>Stories:</h1>
              <br/>
              <RouteHandler />
            </Bootstrap.Col>
          </Bootstrap.Row>
        </Bootstrap.Grid>
      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <Route path='popular' handler={Popular} />
    <Route path='recent' handler={Recent} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
