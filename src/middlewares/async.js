/** `Middleware that handles `async` actions` */
const asyncMiddleware = ({ dispatch }) => next => action => {
  // check if action has a promise in a payload property
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

export default asyncMiddleware;
