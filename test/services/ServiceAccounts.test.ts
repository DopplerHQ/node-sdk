import nock from 'nock';

import { DopplerSDK } from '../../src/';

import ServiceAccountsService from '../../src/services/ServiceAccounts';

describe('test ServiceAccountsService object', () => {
  it('should be an object', () => {
    expect(typeof ServiceAccountsService).toBe('function');
  });
});

describe('test ServiceAccountsService', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK();

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts?page=3&per_page=5')
        .reply(200, { data: {} });
      return sdk.serviceAccounts
        .list({ page: 3, perPage: 5 })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.create({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/est')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.get('est').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/consequuntur')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/deserunt')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.get('deserunt')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/cum')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.delete('cum').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/similique')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/ipsum')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.delete('ipsum')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/doloremque')
        .reply(200, { data: {} });
      return sdk.serviceAccounts
        .update({}, 'doloremque')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/assumenda')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/sequi')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.update({}, 'sequi')).rejects.toThrow();
    });
  });
});
