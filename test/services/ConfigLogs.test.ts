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
        .get('/v3/configs/config/logs?project=corporis&config=quaerat&page=8&per_page=7')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('corporis', 'quaerat', { page: 8, perPage: 7 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=consequuntur&config=nostrum&page=9&per_page=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=doloremque&config=nobis&page=6&per_page=6')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('doloremque', 'nobis', { page: 6, perPage: 6 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=quaerat&config=omnis&log=architecto')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('quaerat', 'omnis', 'architecto')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=fugiat&config=corrupti&log=sed')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=eum&config=maiores&log=unde')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('eum', 'maiores', 'unde'),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=laboriosam&config=a&log=magni')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('laboriosam', 'a', 'magni')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=impedit&config=vel&log=sapiente')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=commodi&config=sit&log=consectetur')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('commodi', 'sit', 'consectetur'),
      ).rejects.toThrow();
    });
  });
});
