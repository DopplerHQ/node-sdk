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
        .get('/v3/configs/config/logs?project=et&config=magni&page=7&per_page=4')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('et', 'magni', { page: 7, perPage: 4 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=in&config=et&page=9&per_page=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=molestiae&config=aliquid&page=3&per_page=3')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('molestiae', 'aliquid', { page: 3, perPage: 3 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=facilis&config=maiores&log=laudantium')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('facilis', 'maiores', 'laudantium')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=provident&config=tempora&log=provident')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=quos&config=itaque&log=libero')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('quos', 'itaque', 'libero'),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=culpa&config=exercitationem&log=dicta')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('culpa', 'exercitationem', 'dicta')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=cum&config=vero&log=esse')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=incidunt&config=autem&log=quaerat')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('incidunt', 'autem', 'quaerat'),
      ).rejects.toThrow();
    });
  });
});
