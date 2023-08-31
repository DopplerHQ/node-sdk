import nock from 'nock';

import { DopplerSDK } from '../../src/';

import ConfigsService from '../../src/services/Configs';

describe('test ConfigsService object', () => {
  it('should be an object', () => {
    expect(typeof ConfigsService).toBe('function');
  });
});

describe('test ConfigsService', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK();

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=debitis&environment=et&page=8&per_page=7')
        .reply(200, { data: {} });
      return sdk.configs
        .list('debitis', { environment: 'et', page: 8, perPage: 7 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=consequatur&environment=animi&page=2&per_page=8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=consectetur&environment=illum&page=6&per_page=8')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.configs.list('consectetur', { environment: 'illum', page: 6, perPage: 8 }),
      ).rejects.toThrow();
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com').post('/v3/configs').reply(200, { data: {} });
      return sdk.configs.create({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=quibusdam&config=necessitatibus')
        .reply(200, { data: {} });
      return sdk.configs
        .get('quibusdam', 'necessitatibus')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=blanditiis&config=sunt')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=labore&config=libero')
        .reply(404, { data: {} });
      return expect(async () => await sdk.configs.get('labore', 'libero')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config')
        .reply(200, { data: {} });
      return sdk.configs.update({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config')
        .reply(200, { data: {} });
      return sdk.configs.delete({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test clone', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/clone')
        .reply(200, { data: {} });
      return sdk.configs.clone({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test lock', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/lock')
        .reply(200, { data: {} });
      return sdk.configs.lock({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test unlock', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/unlock')
        .reply(200, { data: {} });
      return sdk.configs.unlock({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
