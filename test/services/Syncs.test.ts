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
        .post('/v3/configs/config/syncs?project=ducimus&config=odio')
        .reply(200, { data: {} });
      return sdk.syncs.create({}, 'ducimus', 'odio').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=alias&config=atque')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=exercitationem&config=exercitationem')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.create({}, 'exercitationem', 'exercitationem'),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=at&config=quidem&sync=illo')
        .reply(200, { data: {} });
      return sdk.syncs.get('at', 'quidem', 'illo').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=maiores&config=enim&sync=molestias')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=nobis&config=aliquid&sync=quod')
        .reply(404, { data: {} });
      return expect(async () => await sdk.syncs.get('nobis', 'aliquid', 'quod')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=corporis&config=veritatis&sync=officia&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return sdk.syncs
        .delete('corporis', 'veritatis', 'officia', true)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=aspernatur&config=eaque&sync=sint&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=quaerat&config=libero&sync=vitae&delete_from_target=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.delete('quaerat', 'libero', 'vitae', true),
      ).rejects.toThrow();
    });
  });
});
