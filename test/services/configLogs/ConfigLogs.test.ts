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
        .get('/v3/configs/config/logs?project=ad&config=provident&page=6&per_page=2')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('ad', 'provident', { page: 6, perPage: 2 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=suscipit&config=iure&page=4&per_page=6')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=dolorem&config=blanditiis&page=4&per_page=3')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('dolorem', 'blanditiis', { page: 4, perPage: 3 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=modi&config=itaque&log=facilis')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('modi', 'itaque', 'facilis')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=cupiditate&config=perspiciatis&log=animi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=accusamus&config=qui&log=dicta')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('accusamus', 'qui', 'dicta'),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=explicabo&config=dolore&log=atque')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('explicabo', 'dolore', 'atque')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=quis&config=repellat&log=officiis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=fugit&config=non&log=at')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('fugit', 'non', 'at'),
      ).rejects.toThrow();
    });
  });
});
