import { post, get, buildJWTHeaders } from '../lib/http';
import { buildApiURL } from '../utils/url';

export const login = (username, password) =>
  post(
    buildApiURL('api/v1/token-auth'),
    { username, password }
  ).then(({ token }) => token);
