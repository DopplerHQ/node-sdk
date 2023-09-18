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
        .get('/v3/configs/config/logs?project=esse&config=quaerat&page=4&per_page=6')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('esse', 'quaerat', { page: 4, perPage: 6 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=ullam&config=nulla&page=9&per_page=8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=vitae&config=dolor&page=5&per_page=2')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('vitae', 'dolor', { page: 5, perPage: 2 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=modi&config=architecto&log=porro')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('modi', 'architecto', 'porro')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=ut&config=perspiciatis&log=perferendis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=vel&config=in&log=sunt')
        .reply(404, { data: {} });
      return expect(async () => await sdk.configLogs.get('vel', 'in', 'sunt')).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=iusto&config=assumenda&log=incidunt')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('iusto', 'assumenda', 'incidunt')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=mollitia&config=unde&log=occaecati')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=ad&config=veritatis&log=molestias')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('ad', 'veritatis', 'molestias'),
      ).rejects.toThrow();
    });
  });
});
