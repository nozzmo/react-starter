import isEmptyObject from 'is-empty-object';

import { API_BASE_URL, MEDIA_BASE_URL } from '../settings';


export const buildMediaURL = url =>
  typeof(url) === 'undefined' ||
  url.includes(MEDIA_BASE_URL)? url: `${MEDIA_BASE_URL}${url}`;


const toQuery = params => Object.keys(
  params).map(
    value => `${value}=${params[value]}`)
  .join("&");

export const buildApiURL = (route, params = {}) => {
  if(!isEmptyObject(params)){
    const query = toQuery(params);
    return `${API_BASE_URL}/${route}/?${query}`;
  }

  return `${API_BASE_URL}/${route}/`;
};