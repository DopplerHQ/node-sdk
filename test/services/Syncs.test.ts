import nock from 'nock';

import { DopplerSDK } from '../../src/';

import SyncsService from '../../src/services/Syncs';

describe('test SyncsService object', () => {
  it('should be an object', () => {
    expect(typeof SyncsService).toBe('function');
  });
});

describe('test SyncsService', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK();

    nock.cleanAll();
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=culpa&config=ratione')
        .reply(200, { data: {} });
      return sdk.syncs.create({}, 'culpa', 'ratione').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=cumque&config=laborum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=dignissimos&config=aliquid')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.create({}, 'dignissimos', 'aliquid'),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=laborum&config=assumenda&sync=maxime')
        .reply(200, { data: {} });
      return sdk.syncs
        .get('laborum', 'assumenda', 'maxime')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=laborum&config=eaque&sync=corporis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=nesciunt&config=deleniti&sync=beatae')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.get('nesciunt', 'deleniti', 'beatae'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=iste&config=ad&sync=rem&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return sdk.syncs
        .delete('iste', 'ad', 'rem', true)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=accusantium&config=eligendi&sync=exercitationem&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=non&config=deleniti&sync=beatae&delete_from_target=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.delete('non', 'deleniti', 'beatae', true),
      ).rejects.toThrow();
    });
  });
});
