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
        .get('/v3/configs/config/logs?project=in&config=unde&page=7&per_page=2')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('in', 'unde', { page: 7, perPage: 2 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=harum&config=ratione&page=3&per_page=8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=ducimus&config=quod&page=9&per_page=8')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('ducimus', 'quod', { page: 9, perPage: 8 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=at&config=quisquam&log=illum')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('at', 'quisquam', 'illum')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=perspiciatis&config=beatae&log=architecto')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=ratione&config=omnis&log=vitae')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('ratione', 'omnis', 'vitae'),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=debitis&config=culpa&log=iste')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('debitis', 'culpa', 'iste')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=saepe&config=dolore&log=corporis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=sapiente&config=minima&log=nobis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('sapiente', 'minima', 'nobis'),
      ).rejects.toThrow();
    });
  });
});
