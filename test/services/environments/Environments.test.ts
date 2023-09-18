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
        .get('/v3/environments/environment?project=culpa&environment=cupiditate')
        .reply(200, { data: {} });
      return sdk.environments
        .get('culpa', 'cupiditate')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=sunt&environment=repellat')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments/environment?project=quis&environment=perspiciatis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.environments.get('quis', 'perspiciatis'),
      ).rejects.toThrow();
    });
  });

  describe('test rename', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=totam&environment=error')
        .reply(200, { data: {} });
      return sdk.environments
        .rename({}, 'totam', 'error')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=aut&environment=fugiat')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.rename()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/environments/environment?project=dignissimos&environment=debitis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.environments.rename({}, 'dignissimos', 'debitis'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=accusamus&environment=iusto')
        .reply(200, { data: {} });
      return sdk.environments
        .delete('accusamus', 'iusto')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=natus&environment=ipsam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/environments/environment?project=labore&environment=magni')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.delete('labore', 'magni')).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=eum')
        .reply(200, { data: {} });
      return sdk.environments.list('eum').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=quaerat')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/environments?project=nihil')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.list('nihil')).rejects.toThrow();
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=architecto')
        .reply(200, { data: {} });
      return sdk.environments.create({}, 'architecto').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=molestiae')
        .reply(200, { data: {} });
      return expect(async () => await sdk.environments.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/environments?project=impedit')
        .reply(404, { data: {} });
      return expect(async () => await sdk.environments.create({}, 'impedit')).rejects.toThrow();
    });
  });
});
