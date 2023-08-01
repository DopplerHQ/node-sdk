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
        .get('/v3/logs/log?log=necessitatibus')
        .reply(200, { data: {} });
      return sdk.activityLogs
        .retrieve('necessitatibus')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs/log?log=fugit')
        .reply(200, { data: {} });
      return expect(async () => await sdk.activityLogs.retrieve()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs/log?log=dolorem')
        .reply(404, { data: {} });
      return expect(async () => await sdk.activityLogs.retrieve('dolorem')).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs?page=esse&per_page=4')
        .reply(200, { data: {} });
      return sdk.activityLogs
        .list({ page: 'esse', perPage: 4 })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
