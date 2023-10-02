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
        .get('/v3/configs?project=laborum&environment=possimus&page=4&per_page=6')
        .reply(200, { data: {} });
      return sdk.configs
        .list('laborum', { environment: 'possimus', page: 4, perPage: 6 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=suscipit&environment=architecto&page=7&per_page=6')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=cum&environment=enim&page=9&per_page=4')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.list('cum', { environment: 'enim', page: 9, perPage: 4 }),
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
        .get('/v3/configs/config?project=totam&config=harum')
        .reply(200, { data: {} });
      return sdk.configs.get('totam', 'harum').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=beatae&config=nemo')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=veniam&config=ad')
        .reply(404, { data: {} });
      return expect(async () => await sdk.configs.get('veniam', 'ad')).rejects.toThrow();
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
        .get('/v3/configs/config/trusted_ips?project=in&config=quia')
        .reply(200, { data: {} });
      return sdk.configs.listTrustedIps('in', 'quia').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=necessitatibus&config=commodi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.listTrustedIps()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=dolores&config=reprehenderit')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.listTrustedIps('dolores', 'reprehenderit'),
      ).rejects.toThrow();
    });
  });

  describe('test addTrustedIp', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=accusantium&config=culpa')
        .reply(200, { data: {} });
      return sdk.configs
        .addTrustedIp({}, 'accusantium', 'culpa')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=ipsa&config=corrupti')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.addTrustedIp()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=sunt&config=nisi')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.addTrustedIp({}, 'sunt', 'nisi'),
      ).rejects.toThrow();
    });
  });

  describe('test deleteTrustedIp', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=minus&config=quam')
        .reply(200, { data: {} });
      return sdk.configs
        .deleteTrustedIp({}, 'minus', 'quam')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=quo&config=asperiores')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.deleteTrustedIp()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=error&config=ipsam')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.deleteTrustedIp({}, 'error', 'ipsam'),
      ).rejects.toThrow();
    });
  });
});
