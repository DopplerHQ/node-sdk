import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { IntegrationsService } from '../../../src/services/integrations/Integrations';

describe('test IntegrationsService object', () => {
  it('should be an object', () => {
    expect(typeof IntegrationsService).toBe('function');
  });
});

describe('test Integrations', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

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
        .get('/v3/integrations/integration?integration=maxime')
        .reply(200, { data: {} });
      return sdk.integrations.get('maxime').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration?integration=similique')
        .reply(200, { data: {} });
      return expect(async () => await sdk.integrations.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration?integration=dicta')
        .reply(404, { data: {} });
      return expect(async () => await sdk.integrations.get('dicta')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/integrations/integration?integration=commodi')
        .reply(200, { data: {} });
      return sdk.integrations.update({}, 'commodi').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/integrations/integration?integration=quam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.integrations.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/integrations/integration?integration=temporibus')
        .reply(404, { data: {} });
      return expect(async () => await sdk.integrations.update({}, 'temporibus')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/integrations/integration?integration=enim')
        .reply(200, { data: {} });
      return sdk.integrations.delete('enim').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/integrations/integration?integration=repellendus')
        .reply(200, { data: {} });
      return expect(async () => await sdk.integrations.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/integrations/integration?integration=quia')
        .reply(404, { data: {} });
      return expect(async () => await sdk.integrations.delete('quia')).rejects.toThrow();
    });
  });
});
