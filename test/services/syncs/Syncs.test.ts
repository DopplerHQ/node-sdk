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
        .post('/v3/configs/config/syncs?project=perspiciatis&config=eaque')
        .reply(200, { data: {} });
      return sdk.syncs
        .create({}, 'perspiciatis', 'eaque')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=velit&config=aspernatur')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=nam&config=placeat')
        .reply(404, { data: {} });
      return expect(async () => await sdk.syncs.create({}, 'nam', 'placeat')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=praesentium&config=error&sync=vero')
        .reply(200, { data: {} });
      return sdk.syncs
        .get('praesentium', 'error', 'vero')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=ab&config=dolorum&sync=enim')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=libero&config=sed&sync=eos')
        .reply(404, { data: {} });
      return expect(async () => await sdk.syncs.get('libero', 'sed', 'eos')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=odit&config=amet&sync=consequuntur&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return sdk.syncs
        .delete('odit', 'amet', 'consequuntur', true)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=iure&config=ratione&sync=voluptatem&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=praesentium&config=commodi&sync=sunt&delete_from_target=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.delete('praesentium', 'commodi', 'sunt', true),
      ).rejects.toThrow();
    });
  });
});
