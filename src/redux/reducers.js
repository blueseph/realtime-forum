import { combineReducers } from 'redux';

const fakeReducer = () => ({ hi: 'hello' });

const reducer = combineReducers({
  fakeReducer,
});

export default reducer;
