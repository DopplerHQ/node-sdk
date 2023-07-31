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
        .get('/v3/configs?project=quasi&environment=animi&page=5&per_page=1')
        .reply(200, { data: {} });
      return sdk.configs
        .list('quasi', { environment: 'animi', page: 5, perPage: 1 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=impedit&environment=quisquam&page=8&per_page=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=facere&environment=velit&page=4&per_page=3')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.list('facere', { environment: 'velit', page: 4, perPage: 3 }),
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
        .get('/v3/configs/config?project=eligendi&config=omnis')
        .reply(200, { data: {} });
      return sdk.configs.get('eligendi', 'omnis').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=repudiandae&config=nostrum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=alias&config=veniam')
        .reply(404, { data: {} });
      return expect(async () => await sdk.configs.get('alias', 'veniam')).rejects.toThrow();
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
