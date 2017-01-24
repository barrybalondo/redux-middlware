export default function({ dispatch }) {
  return next => action => {
    // if action does not have a payload
    // or, the payload does not have a .then property
    // we don't care about it, send it on
    if(!action.payload || !action.payload.then) {
      return next(action);
    }

    // Make sure the action's promise resolves
    action.payload
      .then(function(response){
        // create new action with the old type, but
        // replace the promise with the response data
        const newAction = { ...action, payload: response } // add the response to the existing data ...action + response, 
        dispatch(newAction);
      });
  };
}