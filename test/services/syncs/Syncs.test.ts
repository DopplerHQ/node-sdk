import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { SyncsService } from '../../../src/services/syncs/Syncs';

describe('test SyncsService object', () => {
  it('should be an object', () => {
    expect(typeof SyncsService).toBe('function');
  });
});

describe('test Syncs', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=fuga&config=dolorum')
        .reply(200, { data: {} });
      return sdk.syncs.create({}, 'fuga', 'dolorum').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=pariatur&config=optio')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=cupiditate&config=iure')
        .reply(404, { data: {} });
      return expect(async () => await sdk.syncs.create({}, 'cupiditate', 'iure')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=molestiae&config=alias&sync=in')
        .reply(200, { data: {} });
      return sdk.syncs.get('molestiae', 'alias', 'in').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=quisquam&config=occaecati&sync=dignissimos')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=accusamus&config=unde&sync=mollitia')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.get('accusamus', 'unde', 'mollitia'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=aut&config=numquam&sync=mollitia&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return sdk.syncs
        .delete('aut', 'numquam', 'mollitia', true)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=tempore&config=dicta&sync=perferendis&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=recusandae&config=sit&sync=quaerat&delete_from_target=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.delete('recusandae', 'sit', 'quaerat', true),
      ).rejects.toThrow();
    });
  });
});
