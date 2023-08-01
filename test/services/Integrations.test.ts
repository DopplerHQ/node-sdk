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
        .get('/v3/integrations/integration?integration=iure')
        .reply(200, { data: {} });
      return sdk.integrations.get('iure').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration?integration=ipsum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.integrations.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration?integration=doloribus')
        .reply(404, { data: {} });
      return expect(async () => await sdk.integrations.get('doloribus')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/integrations/integration?integration=quasi')
        .reply(200, { data: {} });
      return sdk.integrations.update({}, 'quasi').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/integrations/integration?integration=dolor')
        .reply(200, { data: {} });
      return expect(async () => await sdk.integrations.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/integrations/integration?integration=praesentium')
        .reply(404, { data: {} });
      return expect(async () => await sdk.integrations.update({}, 'praesentium')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/integrations/integration?integration=aliquid')
        .reply(200, { data: {} });
      return sdk.integrations.delete('aliquid').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/integrations/integration?integration=culpa')
        .reply(200, { data: {} });
      return expect(async () => await sdk.integrations.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/integrations/integration?integration=rerum')
        .reply(404, { data: {} });
      return expect(async () => await sdk.integrations.delete('rerum')).rejects.toThrow();
    });
  });
});
