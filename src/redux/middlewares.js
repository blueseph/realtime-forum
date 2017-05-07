import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];

const appliedMiddleware = applyMiddleware(...middlewares);

export default appliedMiddleware;
