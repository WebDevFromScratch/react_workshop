var $ = require('jquery');
var React = require('react');
var Story = require('./story.jsx');
var Bootstrap = require('react-bootstrap');

var StoriesList = React.createClass({
  getInitialState: function() {
    return {
      stories: []
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(stories) {
      if (this.isMounted()) {
        this.setState({
          stories: stories
        });
      }
    }.bind(this));
  },

  render: function() {
    var stories = this.state.stories;
    return(
      <Bootstrap.ListGroup className='storiesList'>
        {stories.map(function(story) {
          return(
            <Story key={story.id} title={story.title} url={story.url} score={story.score} />
          )
        })}
      </Bootstrap.ListGroup>
    )
  }
});

module.exports = StoriesList;
