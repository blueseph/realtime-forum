import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { database } from '../../../../../utils/firebase';

const makeTopic = async () => {
  await database.ref('topics/').push({ name: `new name - time ${new Date()}`});
}

const AddTopicButton = () => (
  <div>
    <FloatingActionButton>
      <ContentAdd onClick={makeTopic}/>
    </FloatingActionButton>
  </div>
)

export default AddTopicButton;
