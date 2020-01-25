import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import asyncMiddleware from 'middlewares/async';
import stateValidatorMiddleware from 'middlewares/stateValidator';

import reducers from 'reducers';

/** Made `ROOT` component with Providers */
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(asyncMiddleware, stateValidatorMiddleware)
  );

  return <Provider store={store}>{children}</Provider>;
};
