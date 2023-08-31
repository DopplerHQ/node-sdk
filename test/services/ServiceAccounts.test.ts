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
        .get('/v3/workplace/service_accounts?page=8&per_page=4')
        .reply(200, { data: {} });
      return sdk.serviceAccounts
        .list({ page: 8, perPage: 4 })
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
        .get('/v3/workplace/service_accounts/service_account/rem')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.get('rem').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/quos')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/iure')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.get('iure')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/sit')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.delete('sit').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/impedit')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/atque')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.delete('atque')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/pariatur')
        .reply(200, { data: {} });
      return sdk.serviceAccounts
        .update({}, 'pariatur')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/suscipit')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/aut')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.update({}, 'aut')).rejects.toThrow();
    });
  });
});
