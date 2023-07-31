import nock from 'nock';

import { DopplerSDK } from '../../src/';

import IntegrationsService from '../../src/services/Integrations';

describe('test IntegrationsService object', () => {
  it('should be an object', () => {
    expect(typeof IntegrationsService).toBe('function');
  });
});

describe('test IntegrationsService', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK();

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations')
        .reply(200, { data: {} });
      return sdk.integrations.list().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/integrations')
        .reply(200, { data: {} });
      return sdk.integrations.create({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration?integration=necessitatibus')
        .reply(200, { data: {} });
      return sdk.integrations.get('necessitatibus').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration?integration=ab')
        .reply(200, { data: {} });
      return expect(async () => await sdk.integrations.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration?integration=suscipit')
        .reply(404, { data: {} });
      return expect(async () => await sdk.integrations.get('suscipit')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/integrations/integration?integration=dolor')
        .reply(200, { data: {} });
      return sdk.integrations.update({}, 'dolor').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/integrations/integration?integration=voluptate')
        .reply(200, { data: {} });
      return expect(async () => await sdk.integrations.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/integrations/integration?integration=cumque')
        .reply(404, { data: {} });
      return expect(async () => await sdk.integrations.update({}, 'cumque')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/integrations/integration?integration=dolor')
        .reply(200, { data: {} });
      return sdk.integrations.delete('dolor').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/integrations/integration?integration=amet')
        .reply(200, { data: {} });
      return expect(async () => await sdk.integrations.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/integrations/integration?integration=ducimus')
        .reply(404, { data: {} });
      return expect(async () => await sdk.integrations.delete('ducimus')).rejects.toThrow();
    });
  });
});
