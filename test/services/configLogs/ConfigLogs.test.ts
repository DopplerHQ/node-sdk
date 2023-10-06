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
        .get('/v3/configs/config/logs?project=ipsam&config=quam&page=2&per_page=3')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('ipsam', 'quam', { page: 2, perPage: 3 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=facilis&config=cumque&page=1&per_page=4')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=eligendi&config=quis&page=3&per_page=1')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('eligendi', 'quis', { page: 3, perPage: 1 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=et&config=dicta&log=eum')
        .reply(200, { data: {} });
      return sdk.configLogs.get('et', 'dicta', 'eum').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=neque&config=nulla&log=recusandae')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=sequi&config=consectetur&log=tempore')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('sequi', 'consectetur', 'tempore'),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post(
          '/v3/configs/config/logs/log/rollback?project=recusandae&config=molestias&log=temporibus',
        )
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('recusandae', 'molestias', 'temporibus')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=quod&config=excepturi&log=hic')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=assumenda&config=nemo&log=soluta')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('assumenda', 'nemo', 'soluta'),
      ).rejects.toThrow();
    });
  });
});
