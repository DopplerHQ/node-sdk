import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { EnvironmentsService } from '../../../src/services/environments/Environments';

describe('test EnvironmentsService object', () => {
  it('should be an object', () => {
    expect(typeof EnvironmentsService).toBe('function');
  });
});

describe('test Environments', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=quibusdam&environment=possimus')
        .reply(200, { data: {} });
      return sdk.environments
        .get('quibusdam', 'possimus')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=quaerat&environment=consectetur')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=aliquam&environment=dolores')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.get('aliquam', 'dolores')).rejects.toThrow();
    });
  });

  describe('test rename', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=officiis&environment=incidunt')
        .reply(200, { data: {} });
      return sdk.environments
        .rename({}, 'officiis', 'incidunt')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=atque&environment=iusto')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.rename()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=nulla&environment=commodi')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.environments.rename({}, 'nulla', 'commodi'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=perspiciatis&environment=sapiente')
        .reply(200, { data: {} });
      return sdk.environments
        .delete('perspiciatis', 'sapiente')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=veritatis&environment=ex')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=veniam&environment=sint')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.delete('veniam', 'sint')).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=maxime')
        .reply(200, { data: {} });
      return sdk.environments.list('maxime').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=deleniti')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=ex')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.list('ex')).rejects.toThrow();
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=exercitationem')
        .reply(200, { data: {} });
      return sdk.environments
        .create({}, 'exercitationem')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=amet')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=eveniet')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.create({}, 'eveniet')).rejects.toThrow();
    });
  });
});
