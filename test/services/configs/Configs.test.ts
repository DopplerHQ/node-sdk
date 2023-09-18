import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ConfigsService } from '../../../src/services/configs/Configs';

describe('test ConfigsService object', () => {
  it('should be an object', () => {
    expect(typeof ConfigsService).toBe('function');
  });
});

describe('test Configs', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=assumenda&environment=quibusdam&page=6&per_page=1')
        .reply(200, { data: {} });
      return sdk.configs
        .list('assumenda', { environment: 'quibusdam', page: 6, perPage: 1 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=cum&environment=placeat&page=2&per_page=8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=beatae&environment=aliquid&page=8&per_page=4')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.configs.list('beatae', { environment: 'aliquid', page: 8, perPage: 4 }),
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
        .get('/v3/configs/config?project=alias&config=quod')
        .reply(200, { data: {} });
      return sdk.configs.get('alias', 'quod').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=impedit&config=maxime')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=ipsa&config=temporibus')
        .reply(404, { data: {} });
      return expect(async () => await sdk.configs.get('ipsa', 'temporibus')).rejects.toThrow();
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

  describe('test listTrustedIps', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=iure&config=quaerat')
        .reply(200, { data: {} });
      return sdk.configs
        .listTrustedIps('iure', 'quaerat')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=possimus&config=itaque')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.listTrustedIps()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=laboriosam&config=porro')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.listTrustedIps('laboriosam', 'porro'),
      ).rejects.toThrow();
    });
  });

  describe('test addTrustedIp', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=nisi&config=reprehenderit')
        .reply(200, { data: {} });
      return sdk.configs
        .addTrustedIp({}, 'nisi', 'reprehenderit')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=consectetur&config=alias')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.addTrustedIp()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=perferendis&config=modi')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.addTrustedIp({}, 'perferendis', 'modi'),
      ).rejects.toThrow();
    });
  });

  describe('test deleteTrustedIp', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=fuga&config=explicabo')
        .reply(200, { data: {} });
      return sdk.configs
        .deleteTrustedIp({}, 'fuga', 'explicabo')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=minus&config=odit')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.deleteTrustedIp()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=maxime&config=possimus')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.deleteTrustedIp({}, 'maxime', 'possimus'),
      ).rejects.toThrow();
    });
  });
});
