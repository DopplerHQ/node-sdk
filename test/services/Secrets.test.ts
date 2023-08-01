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
          '/v3/configs/config/secrets?project=consequatur&config=facilis&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=9&secrets=repellendus&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('consequatur', 'facilis', {
          accepts: 'corporis',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 9,
          secrets: 'repellendus',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=tenetur&config=pariatur&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6&secrets=atque&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=odit&config=eius&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6&secrets=blanditiis&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('odit', 'eius', {
            accepts: 'sed',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 6,
            secrets: 'blanditiis',
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
        .get('/v3/configs/config/secret?project=nesciunt&config=voluptatem&name=Linda')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('nesciunt', 'voluptatem', 'Linda')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=quas&config=consequatur&name=Darrion')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=delectus&config=quidem&name=Kristofer')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.get('delectus', 'quidem', 'Kristofer'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=nisi&config=quia&format=json&name_transformer=camel&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('nisi', 'quia', {
          format: 'json',
          nameTransformer: 'camel',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 8,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=quisquam&config=quibusdam&format=json&name_transformer=camel&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=ullam&config=amet&format=json&name_transformer=camel&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=7',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('ullam', 'amet', {
            format: 'json',
            nameTransformer: 'camel',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 7,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test listNames', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=corrupti&config=explicabo&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .listNames('corrupti', 'explicabo', {
          includeDynamicSecrets: true,
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=dolor&config=tenetur&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.listNames()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=quia&config=eveniet&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.listNames('quia', 'eveniet', {
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
