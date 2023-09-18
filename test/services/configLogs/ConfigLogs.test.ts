import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ConfigLogsService } from '../../../src/services/configLogs/ConfigLogs';

describe('test ConfigLogsService object', () => {
  it('should be an object', () => {
    expect(typeof ConfigLogsService).toBe('function');
  });
});

describe('test ConfigLogs', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=nesciunt&config=tempora&page=7&per_page=6')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('nesciunt', 'tempora', { page: 7, perPage: 6 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=exercitationem&config=molestiae&page=2&per_page=8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=eaque&config=totam&page=5&per_page=1')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('eaque', 'totam', { page: 5, perPage: 1 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=dolor&config=aliquid&log=fuga')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('dolor', 'aliquid', 'fuga')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=unde&config=sapiente&log=quis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=odit&config=vel&log=ipsum')
        .reply(404, { data: {} });
      return expect(async () => await sdk.configLogs.get('odit', 'vel', 'ipsum')).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=minima&config=unde&log=non')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('minima', 'unde', 'non')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=porro&config=doloribus&log=sed')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=fuga&config=dicta&log=at')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('fuga', 'dicta', 'at'),
      ).rejects.toThrow();
    });
  });
});
