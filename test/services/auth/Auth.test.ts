import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { AuthService } from '../../../src/services/auth/Auth';

describe('test AuthService object', () => {
  it('should be an object', () => {
    expect(typeof AuthService).toBe('function');
  });
});

describe('test Auth', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test revoke', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/auth/revoke')
        .reply(200, { data: {} });
      return sdk.auth.revoke({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test me', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com').get('/v3/me').reply(200, { data: {} });
      return sdk.auth.me().then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
