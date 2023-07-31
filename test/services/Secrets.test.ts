import nock from 'nock';

import { DopplerSDK } from '../../src/';

import SecretsService from '../../src/services/Secrets';

describe('test SecretsService object', () => {
  it('should be an object', () => {
    expect(typeof SecretsService).toBe('function');
  });
});

describe('test SecretsService', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK();

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=placeat&config=at&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=9&secrets=in&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('placeat', 'at', {
          accepts: 'ut',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 9,
          secrets: 'in',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=officiis&config=repudiandae&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=2&secrets=exercitationem&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=est&config=voluptatem&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4&secrets=sint&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('est', 'voluptatem', {
            accepts: 'illum',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 4,
            secrets: 'sint',
            includeManagedSecrets: true,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/secrets')
        .reply(200, { data: {} });
      return sdk.secrets.update({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=temporibus&config=necessitatibus&name=Annabell')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('temporibus', 'necessitatibus', 'Annabell')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=suscipit&config=saepe&name=Misael')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=iste&config=optio&name=Naomi')
        .reply(404, { data: {} });
      return expect(async () => await sdk.secrets.get('iste', 'optio', 'Naomi')).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=blanditiis&config=magni&format=json&name_transformer=camel&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('blanditiis', 'magni', {
          format: 'json',
          nameTransformer: 'camel',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 4,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=non&config=repellendus&format=json&name_transformer=camel&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=officiis&config=dolore&format=json&name_transformer=camel&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=5',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('officiis', 'dolore', {
            format: 'json',
            nameTransformer: 'camel',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 5,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test listNames', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=quam&config=ipsum&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .listNames('quam', 'ipsum', { includeDynamicSecrets: true, includeManagedSecrets: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=ipsum&config=sit&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.listNames()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=molestias&config=aut&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.listNames('molestias', 'aut', {
            includeDynamicSecrets: true,
            includeManagedSecrets: true,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test updateNote', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/secrets/note')
        .reply(200, { data: {} });
      return sdk.secrets.updateNote({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
