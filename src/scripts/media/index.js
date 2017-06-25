import { MEDIA_BASE_URL } from '../config';

export const buildMediaURL = url =>
  typeof(url) === 'undefined' ||
  url.includes(MEDIA_BASE_URL)? url: `${MEDIA_BASE_URL}${url}`;