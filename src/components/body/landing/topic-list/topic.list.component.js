import React, { Component } from 'react';
import { database } from '../../../../utils/firebase';
import Paper from 'material-ui/Paper';

import Topic from './topic/topic.component';

class Topics extends Component {
  constructor(props){
    super(props)
    this.state = { topics: [] }
  }

  async componentDidMount() {
    const snapshot = await database.ref('topics/').once('value');

    this.setState({
      topics: snapshot.val() || [],
    });

    database.ref('topics/').on('child_added', values => {
      this.setState({
        topics: [ ... this.state.topics, values.val() ],
      })
    })
  }

  render() {
    return (
      <div>
        <Paper zDepth={2}>
          {Object.entries(this.state.topics).map( ([key, topic]) => (
            <Topic key={key} topic={topic} />
          ))}
        </Paper>
      </div>
    )
  }
}

export default Topics
