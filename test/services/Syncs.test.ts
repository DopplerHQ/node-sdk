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
        .post('/v3/configs/config/syncs?project=veniam&config=excepturi')
        .reply(200, { data: {} });
      return sdk.syncs
        .create({}, 'veniam', 'excepturi')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=assumenda&config=reprehenderit')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=mollitia&config=quam')
        .reply(404, { data: {} });
      return expect(async () => await sdk.syncs.create({}, 'mollitia', 'quam')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=libero&config=omnis&sync=esse')
        .reply(200, { data: {} });
      return sdk.syncs.get('libero', 'omnis', 'esse').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=quod&config=ullam&sync=ipsa')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=veritatis&config=consequatur&sync=iure')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.get('veritatis', 'consequatur', 'iure'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=eius&config=voluptate&sync=ipsum&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return sdk.syncs
        .delete('eius', 'voluptate', 'ipsum', true)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=id&config=doloremque&sync=sunt&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=enim&config=earum&sync=laudantium&delete_from_target=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.delete('enim', 'earum', 'laudantium', true),
      ).rejects.toThrow();
    });
  });
});
