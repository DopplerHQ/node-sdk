import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { WorkplaceService } from '../../../src/services/workplace/Workplace';

describe('test WorkplaceService object', () => {
  it('should be an object', () => {
    expect(typeof WorkplaceService).toBe('function');
  });
});

describe('test Workplace', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace?settings=true')
        .reply(200, { data: {} });
      return sdk.workplace.get({ settings: true }).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com').post('/v3/workplace').reply(200, { data: {} });
      return sdk.workplace.update({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
