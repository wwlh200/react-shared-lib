import ActionTypesa from '../actions/ActionTypes';

function moduleReducer(state = {}, action) {
  switch (action.type) {

    case ActionTypesa.API_NAME_REQUEST_STATUS:
      return Object.assign({}, state, {
        fetchState: 'REQUESTED',
      });

    case ActionTypesa.API_NAME_RECEIVE_STATUS:
      return Object.assign({}, state, {
        fetchState: 'RECEIVED',
        data: action.result,
      });

    case ActionTypesa.API_NAME_ERROR_STATUS:
      return Object.assign({}, state, {
        fetchState: 'FAILED',
      });

    default:
      return state;
  }
}

export { moduleReducer };
