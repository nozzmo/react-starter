import { normalize } from 'normalizr';
import { push } from 'react-router-redux';
import { actions as authActions } from 'nozzmo-redux-jwt';

import * as api from '../api';
import * as types from '../types';
import * as selectors from '../reducers';
import * as schemas from '../schemas';

export const login = authActions.login(api.login);
