import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import { reducer as auth, selectors as fromAuth } from 'nozzmo-redux-jwt';


const reducer = combineReducers({
  routing: routerReducer,
  form,
  auth
});

export default reducer;

export const getToken = state => fromAuth.getToken(state.auth);
export const getIsAuth = state => fromAuth.getIsAuth(state.auth);
export const getLoginError = state => {
  const { non_field_errors } = fromAuth.getErrorExtra(state.auth);

    if(non_field_errors && non_field_errors.length > 0)
      return non_field_errors[0];

  return undefined;
}
export const getUsername = state => fromAuth.getDecoded(state.auth).username;
export const getUserId = state => fromAuth.getDecoded(state.auth).user_id;
export const getUserEmail = state => fromAuth.getDecoded(state.auth).email;
export const getUser = state => fromAuth.getDecoded(state.auth);