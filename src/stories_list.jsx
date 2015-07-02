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
      <div className='storiesList'>
        <Bootstrap.Badge>hi!</Bootstrap.Badge>

        <ul>
          {stories.map(function(story) {
            return(
              <li key={story.id}>
                <Story title={story.title} url={story.url} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
});

module.exports = StoriesList;
