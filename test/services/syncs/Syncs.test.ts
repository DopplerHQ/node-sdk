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
        .post('/v3/configs/config/syncs?project=fugit&config=ipsa')
        .reply(200, { data: {} });
      return sdk.syncs.create({}, 'fugit', 'ipsa').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=enim&config=eius')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=deserunt&config=impedit')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.create({}, 'deserunt', 'impedit'),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=optio&config=asperiores&sync=consectetur')
        .reply(200, { data: {} });
      return sdk.syncs
        .get('optio', 'asperiores', 'consectetur')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=inventore&config=vero&sync=ex')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=sapiente&config=rerum&sync=repudiandae')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.get('sapiente', 'rerum', 'repudiandae'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=modi&config=perspiciatis&sync=culpa&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return sdk.syncs
        .delete('modi', 'perspiciatis', 'culpa', true)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=optio&config=illo&sync=voluptate&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=a&config=amet&sync=harum&delete_from_target=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.delete('a', 'amet', 'harum', true),
      ).rejects.toThrow();
    });
  });
});
