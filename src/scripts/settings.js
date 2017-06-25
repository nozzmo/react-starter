export let API_BASE_URL;
export let MEDIA_BASE_URL;

if(process.env.NODE_ENV !== 'production') {
  API_BASE_URL = 'http://localhost:8000';
  MEDIA_BASE_URL = 'http://localhost:8000';
}
else {
  API_BASE_URL = 'http://ec2-107-21-67-193.compute-1.amazonaws.com:8000';
  MEDIA_BASE_URL = 'http://ec2-107-21-67-193.compute-1.amazonaws.com:8000';
}

export const PAGE_SIZE = 15;
