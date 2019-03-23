import * as fetch from 'isomorphic-fetch';
import { Dispatch, Action } from 'redux';

// tslint:disable-next-line:no-any
export function fetchData(endpoint: string, callbacks: any, options = {}) {
  const optional = { ...{ credentials: 'include' }, ...options };
  const {
    request, receive, fail,
  } = callbacks;
  return (dispatch: Dispatch<Action>) => {
    dispatch(request());
    return fetch(endpoint, optional)
      // tslint:disable-next-line:no-any
      .then((response: any) => {
        if (!response.ok) {
          throw new Error(`Server responded with error status: ${response.status}`);
        }
        return response.json();
      })
      // tslint:disable-next-line:no-any
      .then((json: any) => {
        if (!json.errorDetails) {
          dispatch(receive(json));
        } else {
          dispatch(fail(json.errorDetails));
        }
      })
      // tslint:disable-next-line:no-any
      .catch((error: any) => dispatch(fail(error.message)));
  };
}
