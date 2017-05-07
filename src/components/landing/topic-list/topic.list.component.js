import React, { Component } from 'react';
import { database } from '../../../utils/firebase';
import Paper from 'material-ui/Paper';

import Topic from './topic/topic.component';

class Topics extends Component {

  async componentDidMount() {
    const { loadNewTopics } = this.props;

    database.ref('topics/').on('child_added', loadNewTopics);
  }

  render() {

    return (
      <div>
        <Paper zDepth={2}>
          {Object.entries(this.props.topics).map( ([key, topic]) => (
            <Topic key={key} topic={topic} />
          ))}
        </Paper>
      </div>
    )
  }
}

export default Topics
