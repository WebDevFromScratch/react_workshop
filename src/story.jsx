var $ = require('jquery');
var React = require('react');

var Story = React.createClass({
  render: function() {
    return(
      <div className='story'>
        <h2>
          {this.props.title}
        </h2>
        {this.props.url}
        <hr/>
      </div>
    )
  }
});

module.exports = Story;
