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
        .post('/v3/configs/config/syncs?project=vel&config=non')
        .reply(200, { data: {} });
      return sdk.syncs.create({}, 'vel', 'non').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=distinctio&config=reiciendis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=delectus&config=consequatur')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.create({}, 'delectus', 'consequatur'),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=harum&config=iusto&sync=ducimus')
        .reply(200, { data: {} });
      return sdk.syncs
        .get('harum', 'iusto', 'ducimus')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=accusantium&config=impedit&sync=saepe')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=commodi&config=ullam&sync=consequuntur')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.get('commodi', 'ullam', 'consequuntur'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=beatae&config=quis&sync=nihil&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return sdk.syncs
        .delete('beatae', 'quis', 'nihil', true)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=quae&config=accusamus&sync=aut&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=alias&config=iste&sync=dolore&delete_from_target=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.delete('alias', 'iste', 'dolore', true),
      ).rejects.toThrow();
    });
  });
});
