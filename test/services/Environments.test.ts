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
        .get('/v3/environments/environment?project=consequuntur&environment=voluptate')
        .reply(200, { data: {} });
      return sdk.environments
        .get('consequuntur', 'voluptate')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=repellat&environment=totam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=maxime&environment=rem')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.get('maxime', 'rem')).rejects.toThrow();
    });
  });

  describe('test rename', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=veritatis&environment=aut')
        .reply(200, { data: {} });
      return sdk.environments
        .rename({}, 'veritatis', 'aut')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=repudiandae&environment=debitis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.rename()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=ratione&environment=ducimus')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.environments.rename({}, 'ratione', 'ducimus'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=quas&environment=quibusdam')
        .reply(200, { data: {} });
      return sdk.environments
        .delete('quas', 'quibusdam')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=ut&environment=magnam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=cupiditate&environment=sunt')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.environments.delete('cupiditate', 'sunt'),
      ).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=minus')
        .reply(200, { data: {} });
      return sdk.environments.list('minus').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=et')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=voluptatibus')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.list('voluptatibus')).rejects.toThrow();
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=occaecati')
        .reply(200, { data: {} });
      return sdk.environments.create({}, 'occaecati').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=nobis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=pariatur')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.create({}, 'pariatur')).rejects.toThrow();
    });
  });
});
