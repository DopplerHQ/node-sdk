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
        .post('/v3/configs/config/syncs?project=sint&config=repellat')
        .reply(200, { data: {} });
      return sdk.syncs.create({}, 'sint', 'repellat').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=quos&config=cupiditate')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=necessitatibus&config=harum')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.create({}, 'necessitatibus', 'harum'),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=veritatis&config=adipisci&sync=aspernatur')
        .reply(200, { data: {} });
      return sdk.syncs
        .get('veritatis', 'adipisci', 'aspernatur')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=voluptas&config=animi&sync=deleniti')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=maxime&config=inventore&sync=voluptatum')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.get('maxime', 'inventore', 'voluptatum'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=magni&config=aperiam&sync=suscipit&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return sdk.syncs
        .delete('magni', 'aperiam', 'suscipit', true)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=autem&config=quidem&sync=eum&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=quidem&config=dolore&sync=molestiae&delete_from_target=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.delete('quidem', 'dolore', 'molestiae', true),
      ).rejects.toThrow();
    });
  });
});
