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
        .get('/v3/configs/config/logs?project=unde&config=perspiciatis&page=3&per_page=1')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('unde', 'perspiciatis', { page: 3, perPage: 1 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=nulla&config=eos&page=2&per_page=1')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=fugit&config=excepturi&page=4&per_page=4')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('fugit', 'excepturi', { page: 4, perPage: 4 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=qui&config=est&log=facere')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('qui', 'est', 'facere')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=provident&config=nisi&log=aliquid')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=laboriosam&config=nesciunt&log=consequatur')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('laboriosam', 'nesciunt', 'consequatur'),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post(
          '/v3/configs/config/logs/log/rollback?project=quia&config=accusantium&log=consequuntur',
        )
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('quia', 'accusantium', 'consequuntur')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=aspernatur&config=rem&log=alias')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=eos&config=quidem&log=similique')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('eos', 'quidem', 'similique'),
      ).rejects.toThrow();
    });
  });
});
