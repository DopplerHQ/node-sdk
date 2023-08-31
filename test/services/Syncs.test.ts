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
        .post('/v3/configs/config/syncs?project=ratione&config=cupiditate')
        .reply(200, { data: {} });
      return sdk.syncs
        .create({}, 'ratione', 'cupiditate')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=cum&config=animi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=esse&config=harum')
        .reply(404, { data: {} });
      return expect(async () => await sdk.syncs.create({}, 'esse', 'harum')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=occaecati&config=maxime&sync=vero')
        .reply(200, { data: {} });
      return sdk.syncs
        .get('occaecati', 'maxime', 'vero')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=distinctio&config=atque&sync=commodi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=magni&config=exercitationem&sync=perferendis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.get('magni', 'exercitationem', 'perferendis'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=sunt&config=quaerat&sync=asperiores&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return sdk.syncs
        .delete('sunt', 'quaerat', 'asperiores', true)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=praesentium&config=officia&sync=assumenda&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=voluptate&config=perferendis&sync=pariatur&delete_from_target=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.delete('voluptate', 'perferendis', 'pariatur', true),
      ).rejects.toThrow();
    });
  });
});
