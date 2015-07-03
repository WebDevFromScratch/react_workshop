var $ = require('jquery');
var React = require('react');
var Bootstrap = require('react-bootstrap');

var Story = React.createClass({
  render: function() {
    return(
      <Bootstrap.ListGroupItem className='story' header={this.props.title}>
        <a href={this.props.url}>{this.props.url}</a>
        <Bootstrap.Badge pullRight>{this.props.score}</Bootstrap.Badge>
      </Bootstrap.ListGroupItem>
    )
  }
});

module.exports = Story;
