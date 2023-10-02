import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { UsersService } from '../../../src/services/users/Users';

describe('test UsersService object', () => {
  it('should be an object', () => {
    expect(typeof UsersService).toBe('function');
  });
});

describe('test Users', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/users?page=8')
        .reply(200, { data: {} });
      return sdk.users.list({ page: 8 }).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/users/earum')
        .reply(200, { data: {} });
      return sdk.users.get('earum').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/users/consectetur')
        .reply(200, { data: {} });
      return expect(async () => await sdk.users.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/users/dolores')
        .reply(404, { data: {} });
      return expect(async () => await sdk.users.get('dolores')).rejects.toThrow();
    });
  });
});
