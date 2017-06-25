import 'whatwg-fetch';

const primaryResponseHandler = response => {
  if (response.status >= 200 && response.status < 300)
    return response.json();

  let error = new Error(response.statusText);
  error.status = response.status;
  error.promise = response.json();
  throw error;
}

const call = (url, method, data, headers = {}) => {
  let request = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    }
  };

  if(data)
    request.body = JSON.stringify(data);

  if(headers)
    request.headers = { ...request.headers, ...headers };

  return fetch(url, request).then(primaryResponseHandler);
}

export const post = (url, data = {}, headers = {}) =>
  call(url, 'POST', data, headers);

export const get = (url, headers = {}) =>
  call(url, 'GET', undefined, headers);

export const buildJWTHeaders = token => ({
  Authorization: `JWT ${token}`
});
