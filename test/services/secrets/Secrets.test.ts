import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { SecretsService } from '../../../src/services/secrets/Secrets';

describe('test SecretsService object', () => {
  it('should be an object', () => {
    expect(typeof SecretsService).toBe('function');
  });
});

describe('test Secrets', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=ab&config=nisi&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8&secrets=sit&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('ab', 'nisi', {
          accepts: 'consectetur',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 8,
          secrets: 'sit',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=consequatur&config=earum&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=7&secrets=non&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=vero&config=delectus&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4&secrets=accusantium&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('vero', 'delectus', {
            accepts: 'quidem',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 4,
            secrets: 'accusantium',
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
        .get('/v3/configs/config/secret?project=ex&config=optio&name=Brain')
        .reply(200, { data: {} });
      return sdk.secrets.get('ex', 'optio', 'Brain').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=atque&config=error&name=Kaylin')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=distinctio&config=cumque&name=Caroline')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.get('distinctio', 'cumque', 'Caroline'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=perferendis&config=maiores&name=Arden')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('perferendis', 'maiores', 'Arden')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=iure&config=nulla&name=Jabari')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=assumenda&config=ullam&name=Ramona')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('assumenda', 'ullam', 'Ramona'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=dolores&config=reiciendis&format=explicabo&name_transformer=Alanis&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('dolores', 'reiciendis', {
          format: 'explicabo',
          nameTransformer: 'Alanis',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 4,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=repellendus&config=voluptas&format=dolorum&name_transformer=Kian&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=2',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=illo&config=neque&format=ut&name_transformer=Leopold&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=5',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('illo', 'neque', {
            format: 'ut',
            nameTransformer: 'Leopold',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 5,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test names', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=ea&config=repellat&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('ea', 'repellat', { includeDynamicSecrets: true, includeManagedSecrets: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=quaerat&config=voluptatum&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=sit&config=doloribus&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('sit', 'doloribus', {
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
