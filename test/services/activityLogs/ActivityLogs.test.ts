import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ActivityLogsService } from '../../../src/services/activityLogs/ActivityLogs';

describe('test ActivityLogsService object', () => {
  it('should be an object', () => {
    expect(typeof ActivityLogsService).toBe('function');
  });
});

describe('test ActivityLogs', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs?page=ullam&per_page=7')
        .reply(200, { data: {} });
      return sdk.activityLogs
        .list({ page: 'ullam', perPage: 7 })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test retrieve', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs/log?log=ab')
        .reply(200, { data: {} });
      return sdk.activityLogs.retrieve('ab').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs/log?log=quas')
        .reply(200, { data: {} });
      return expect(async () => await sdk.activityLogs.retrieve()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs/log?log=veritatis')
        .reply(404, { data: {} });
      return expect(async () => await sdk.activityLogs.retrieve('veritatis')).rejects.toThrow();
    });
  });
});
