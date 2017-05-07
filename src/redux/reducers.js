import { combineReducers } from 'redux';

import topics from '../components/landing/topic-list/topic-list.redux';

const reducer = combineReducers({
  topics,
});

export default reducer;
