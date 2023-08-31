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
          '/v3/configs/config/secrets?project=atque&config=necessitatibus&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4&secrets=vero&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('atque', 'necessitatibus', {
          accepts: 'ipsam',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 4,
          secrets: 'vero',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=iure&config=laboriosam&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=2&secrets=aspernatur&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=at&config=expedita&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=5&secrets=repellat&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('at', 'expedita', {
            accepts: 'commodi',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 5,
            secrets: 'repellat',
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
        .get('/v3/configs/config/secret?project=at&config=qui&name=Jefferey')
        .reply(200, { data: {} });
      return sdk.secrets.get('at', 'qui', 'Jefferey').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=assumenda&config=ut&name=Clark')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=ipsum&config=impedit&name=Evalyn')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.get('ipsum', 'impedit', 'Evalyn'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=vero&config=ipsa&name=Ericka')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('vero', 'ipsa', 'Ericka')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=recusandae&config=commodi&name=Krystal')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=laudantium&config=commodi&name=Maxwell')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('laudantium', 'commodi', 'Maxwell'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=repellat&config=iure&format=qui&name_transformer=Janiya&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('repellat', 'iure', {
          format: 'qui',
          nameTransformer: 'Janiya',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 8,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=nihil&config=eos&format=doloremque&name_transformer=Robb&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=distinctio&config=similique&format=sit&name_transformer=Abdul&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('distinctio', 'similique', {
            format: 'sit',
            nameTransformer: 'Abdul',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 6,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test names', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=ab&config=accusamus&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('ab', 'accusamus', { includeDynamicSecrets: true, includeManagedSecrets: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=exercitationem&config=qui&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=libero&config=id&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('libero', 'id', {
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
