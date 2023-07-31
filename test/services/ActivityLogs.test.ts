import nock from 'nock';

import { DopplerSDK } from '../../src/';

import ActivityLogsService from '../../src/services/ActivityLogs';

describe('test ActivityLogsService object', () => {
  it('should be an object', () => {
    expect(typeof ActivityLogsService).toBe('function');
  });
});

describe('test ActivityLogsService', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK();

    nock.cleanAll();
  });

  describe('test retrieve', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs/log?log=ea')
        .reply(200, { data: {} });
      return sdk.activityLogs.retrieve('ea').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs/log?log=minima')
        .reply(200, { data: {} });
      return expect(async () => await sdk.activityLogs.retrieve()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs/log?log=quae')
        .reply(404, { data: {} });
      return expect(async () => await sdk.activityLogs.retrieve('quae')).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs?page=illum&per_page=5')
        .reply(200, { data: {} });
      return sdk.activityLogs
        .list({ page: 'illum', perPage: 5 })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
