import nock from 'nock';

import { DopplerSDK } from '../../src/';

import ConfigLogsService from '../../src/services/ConfigLogs';

describe('test ConfigLogsService object', () => {
  it('should be an object', () => {
    expect(typeof ConfigLogsService).toBe('function');
  });
});

describe('test ConfigLogsService', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK();

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=quasi&config=quia&page=3&per_page=1')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('quasi', 'quia', { page: 3, perPage: 1 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=adipisci&config=blanditiis&page=1&per_page=3')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=quae&config=vero&page=9&per_page=6')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('quae', 'vero', { page: 9, perPage: 6 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=repudiandae&config=nemo&log=quas')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('repudiandae', 'nemo', 'quas')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=quae&config=ex&log=praesentium')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=laboriosam&config=mollitia&log=quis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('laboriosam', 'mollitia', 'quis'),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=ratione&config=corporis&log=minus')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('ratione', 'corporis', 'minus')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=repellendus&config=adipisci&log=ex')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=doloribus&config=occaecati&log=quod')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('doloribus', 'occaecati', 'quod'),
      ).rejects.toThrow();
    });
  });
});
