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
        .get('/v3/configs/config/logs?project=incidunt&config=adipisci&page=8&per_page=3')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('incidunt', 'adipisci', { page: 8, perPage: 3 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=omnis&config=laborum&page=9&per_page=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=consequatur&config=eaque&page=3&per_page=1')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('consequatur', 'eaque', { page: 3, perPage: 1 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=natus&config=libero&log=distinctio')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('natus', 'libero', 'distinctio')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=amet&config=aliquam&log=animi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=veritatis&config=mollitia&log=animi')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('veritatis', 'mollitia', 'animi'),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=fugit&config=praesentium&log=fugiat')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('fugit', 'praesentium', 'fugiat')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=molestias&config=tempore&log=aut')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post(
          '/v3/configs/config/logs/log/rollback?project=laborum&config=possimus&log=perferendis',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('laborum', 'possimus', 'perferendis'),
      ).rejects.toThrow();
    });
  });
});
