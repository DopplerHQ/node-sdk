import nock from 'nock';

import { DopplerSDK } from '../../src/';

import V3Service from '../../src/services/V3';

describe('test V3Service object', () => {
  it('should be an object', () => {
    expect(typeof V3Service).toBe('function');
  });
});

describe('test V3Service', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK();

    nock.cleanAll();
  });

  describe('test me', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com').get('/v3/me').reply(200, { data: {} });
      return sdk.v3.me().then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
