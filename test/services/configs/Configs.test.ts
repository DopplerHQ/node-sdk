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
        .get('/v3/configs?project=necessitatibus&environment=nihil&page=5&per_page=3')
        .reply(200, { data: {} });
      return sdk.configs
        .list('necessitatibus', { environment: 'nihil', page: 5, perPage: 3 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=exercitationem&environment=in&page=7&per_page=9')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=corporis&environment=corrupti&page=4&per_page=8')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.configs.list('corporis', { environment: 'corrupti', page: 4, perPage: 8 }),
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
        .get('/v3/configs/config?project=iste&config=quisquam')
        .reply(200, { data: {} });
      return sdk.configs.get('iste', 'quisquam').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=aut&config=odit')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=quo&config=inventore')
        .reply(404, { data: {} });
      return expect(async () => await sdk.configs.get('quo', 'inventore')).rejects.toThrow();
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
        .get('/v3/configs/config/trusted_ips?project=incidunt&config=vero')
        .reply(200, { data: {} });
      return sdk.configs
        .listTrustedIps('incidunt', 'vero')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=et&config=asperiores')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.listTrustedIps()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=ad&config=consequatur')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.listTrustedIps('ad', 'consequatur'),
      ).rejects.toThrow();
    });
  });

  describe('test addTrustedIp', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=ullam&config=hic')
        .reply(200, { data: {} });
      return sdk.configs
        .addTrustedIp({}, 'ullam', 'hic')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=ratione&config=pariatur')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.addTrustedIp()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=sunt&config=est')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.addTrustedIp({}, 'sunt', 'est'),
      ).rejects.toThrow();
    });
  });

  describe('test deleteTrustedIp', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=nisi&config=nostrum')
        .reply(200, { data: {} });
      return sdk.configs
        .deleteTrustedIp({}, 'nisi', 'nostrum')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=blanditiis&config=laboriosam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.deleteTrustedIp()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=voluptas&config=enim')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.deleteTrustedIp({}, 'voluptas', 'enim'),
      ).rejects.toThrow();
    });
  });
});
