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

  describe('test retrieve', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs/log?log=natus')
        .reply(200, { data: {} });
      return sdk.activityLogs.retrieve('natus').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs/log?log=quibusdam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.activityLogs.retrieve()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs/log?log=exercitationem')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.activityLogs.retrieve('exercitationem'),
      ).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/logs?page=aliquam&per_page=3')
        .reply(200, { data: {} });
      return sdk.activityLogs
        .list({ page: 'aliquam', perPage: 3 })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
