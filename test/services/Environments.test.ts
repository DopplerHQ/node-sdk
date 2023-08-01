import nock from 'nock';

import { DopplerSDK } from '../../src/';

import EnvironmentsService from '../../src/services/Environments';

describe('test EnvironmentsService object', () => {
  it('should be an object', () => {
    expect(typeof EnvironmentsService).toBe('function');
  });
});

describe('test EnvironmentsService', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK();

    nock.cleanAll();
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=minima&environment=ut')
        .reply(200, { data: {} });
      return sdk.environments.get('minima', 'ut').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=quo&environment=cum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=exercitationem&environment=maiores')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.environments.get('exercitationem', 'maiores'),
      ).rejects.toThrow();
    });
  });

  describe('test rename', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=ad&environment=aut')
        .reply(200, { data: {} });
      return sdk.environments.rename({}, 'ad', 'aut').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=voluptatem&environment=explicabo')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.rename()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=cupiditate&environment=praesentium')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.environments.rename({}, 'cupiditate', 'praesentium'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=dignissimos&environment=consequuntur')
        .reply(200, { data: {} });
      return sdk.environments
        .delete('dignissimos', 'consequuntur')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=asperiores&environment=possimus')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=laudantium&environment=molestiae')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.environments.delete('laudantium', 'molestiae'),
      ).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=eaque')
        .reply(200, { data: {} });
      return sdk.environments.list('eaque').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=nisi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=quisquam')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.list('quisquam')).rejects.toThrow();
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=sint')
        .reply(200, { data: {} });
      return sdk.environments.create({}, 'sint').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=nam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=rerum')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.create({}, 'rerum')).rejects.toThrow();
    });
  });
});
