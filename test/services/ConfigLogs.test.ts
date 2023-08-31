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
        .get('/v3/configs/config/logs?project=est&config=veritatis&page=4&per_page=5')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('est', 'veritatis', { page: 4, perPage: 5 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=in&config=enim&page=8&per_page=1')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=laboriosam&config=tempora&page=7&per_page=9')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('laboriosam', 'tempora', { page: 7, perPage: 9 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=optio&config=officiis&log=quasi')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('optio', 'officiis', 'quasi')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=accusamus&config=ipsam&log=occaecati')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=ipsum&config=similique&log=voluptate')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('ipsum', 'similique', 'voluptate'),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=sit&config=ut&log=voluptates')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('sit', 'ut', 'voluptates')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=corrupti&config=dolorum&log=eius')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=cupiditate&config=omnis&log=totam')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('cupiditate', 'omnis', 'totam'),
      ).rejects.toThrow();
    });
  });
});
