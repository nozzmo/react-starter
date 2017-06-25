import deepFreeze from 'deep-freeze';

import { buildApiURL } from './url';

describe('api utils', () => {
  it('should build an api URL with query params.', () => {

    const queryParams = {
      abc: '123',
      def: '456'
    };

    const expectedURL = 'http://localhost:8000/example/?abc=123&def=456';

    expect(buildApiURL(
      'example',
      queryParams)).toEqual(expectedURL);
  });

  it('should build an api URL without query params.', () => {
    const expectedURL = 'http://localhost:8000/example/';

    expect(buildApiURL('example')).toEqual(expectedURL);
  });
});
