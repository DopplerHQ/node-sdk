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
        .get('/v3/configs/config/logs?project=esse&config=dolorem&page=1&per_page=1')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('esse', 'dolorem', { page: 1, perPage: 1 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=magni&config=fuga&page=1&per_page=4')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=necessitatibus&config=accusantium&page=2&per_page=7')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.configLogs.list('necessitatibus', 'accusantium', { page: 2, perPage: 7 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=recusandae&config=fugiat&log=est')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('recusandae', 'fugiat', 'est')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=sapiente&config=voluptatem&log=animi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=laboriosam&config=neque&log=corrupti')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('laboriosam', 'neque', 'corrupti'),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=dicta&config=beatae&log=ab')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('dicta', 'beatae', 'ab')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=cumque&config=fuga&log=deserunt')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=doloremque&config=sunt&log=voluptatem')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('doloremque', 'sunt', 'voluptatem'),
      ).rejects.toThrow();
    });
  });
});
