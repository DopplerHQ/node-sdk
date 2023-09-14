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

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=possimus')
        .reply(200, { data: {} });
      return sdk.environments.list('possimus').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=nemo')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=officia')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.list('officia')).rejects.toThrow();
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=deleniti')
        .reply(200, { data: {} });
      return sdk.environments.create({}, 'deleniti').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=iure')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=tempora')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.create({}, 'tempora')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=dolorum&environment=voluptas')
        .reply(200, { data: {} });
      return sdk.environments
        .get('dolorum', 'voluptas')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=dolorum&environment=esse')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=iusto&environment=nesciunt')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.get('iusto', 'nesciunt')).rejects.toThrow();
    });
  });

  describe('test rename', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=voluptatibus&environment=blanditiis')
        .reply(200, { data: {} });
      return sdk.environments
        .rename({}, 'voluptatibus', 'blanditiis')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=dicta&environment=reiciendis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.rename()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=pariatur&environment=maxime')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.environments.rename({}, 'pariatur', 'maxime'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=sunt&environment=rem')
        .reply(200, { data: {} });
      return sdk.environments.delete('sunt', 'rem').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=mollitia&environment=at')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=veniam&environment=facere')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.environments.delete('veniam', 'facere'),
      ).rejects.toThrow();
    });
  });
});
