import { createStore, compose } from 'redux';

import rootReducer from './reducers';
import middlewares from './middlewares';

const createStoreWithMiddleware = compose(middlewares)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
                rootReducer,
                initialState,
                window.devToolsExtension && window.devToolsExtension(),
              );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
