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
          '/v3/configs/config/secrets?project=deserunt&config=tempora&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=2&secrets=illum&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('deserunt', 'tempora', {
          accepts: 'quia',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 2,
          secrets: 'illum',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=adipisci&config=illum&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1&secrets=totam&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=nemo&config=recusandae&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1&secrets=error&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('nemo', 'recusandae', {
            accepts: 'cumque',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 1,
            secrets: 'error',
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
        .get('/v3/configs/config/secret?project=temporibus&config=eaque&name=Jimmie')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('temporibus', 'eaque', 'Jimmie')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=amet&config=expedita&name=Cristopher')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=quibusdam&config=labore&name=Newell')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.get('quibusdam', 'labore', 'Newell'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=occaecati&config=enim&format=json&name_transformer=camel&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=7',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('occaecati', 'enim', {
          format: 'json',
          nameTransformer: 'camel',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 7,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=explicabo&config=nam&format=json&name_transformer=camel&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=assumenda&config=quidem&format=json&name_transformer=camel&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=3',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('assumenda', 'quidem', {
            format: 'json',
            nameTransformer: 'camel',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 3,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test listNames', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=exercitationem&config=corporis&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .listNames('exercitationem', 'corporis', {
          includeDynamicSecrets: true,
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=porro&config=dicta&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.listNames()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=suscipit&config=quas&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.listNames('suscipit', 'quas', {
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
