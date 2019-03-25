import ActionTypes from './ActionTypes';
import { fetchData } from '../utility/actionHelper';
import { IModule, IError } from '../interfaces';

function moduleRequest() {
  return {
    type: ActionTypes.API_NAME_REQUEST_STATUS,
  };
}

function moduleReceived(json: IModule) {
  return {
    type: ActionTypes.API_NAME_RECEIVE_STATUS,
    result: json,
  };
}

function moduleFailed(error: IError) {
  return {
    type: ActionTypes.API_NAME_ERROR_STATUS,
    error,
  };
}

export function getModules() {
  const callbacks = {
    request: moduleRequest,
    receive: moduleReceived,
    fail: moduleFailed,
  };
  const fetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetchData('apiUrl' ,
                   callbacks, fetchOptions);
}
