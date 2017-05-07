import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const topic = {name : `new name - time ${new Date()}`};

const AddTopicButton = ({
  addTopic
}) => (
  <div>
    <FloatingActionButton>
      <ContentAdd onClick={addTopic.bind(null, topic)}/>
    </FloatingActionButton>
  </div>
)

export default AddTopicButton;
