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
        .get('/v3/configs/config/logs?project=vitae&config=voluptatum&page=7&per_page=6')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('vitae', 'voluptatum', { page: 7, perPage: 6 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=excepturi&config=officiis&page=7&per_page=1')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=mollitia&config=voluptatibus&page=8&per_page=6')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('mollitia', 'voluptatibus', { page: 8, perPage: 6 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=laudantium&config=perspiciatis&log=earum')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('laudantium', 'perspiciatis', 'earum')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=fuga&config=molestias&log=ab')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=aut&config=voluptatum&log=rem')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('aut', 'voluptatum', 'rem'),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=quasi&config=amet&log=occaecati')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('quasi', 'amet', 'occaecati')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=neque&config=deleniti&log=tempora')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=iure&config=magnam&log=labore')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('iure', 'magnam', 'labore'),
      ).rejects.toThrow();
    });
  });
});
