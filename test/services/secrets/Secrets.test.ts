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
          '/v3/configs/config/secrets?project=sunt&config=hic&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1&secrets=dolorem&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('sunt', 'hic', {
          accepts: 'harum',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 1,
          secrets: 'dolorem',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=distinctio&config=fugit&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1&secrets=aut&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=facere&config=laborum&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=7&secrets=aliquid&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('facere', 'laborum', {
            accepts: 'sunt',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 7,
            secrets: 'aliquid',
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
        .get('/v3/configs/config/secret?project=perferendis&config=praesentium&name=Heloise')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('perferendis', 'praesentium', 'Heloise')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=in&config=exercitationem&name=Beth')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=accusantium&config=sint&name=Norma')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.get('accusantium', 'sint', 'Norma'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=quia&config=dolore&name=Reggie')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('quia', 'dolore', 'Reggie')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=voluptatem&config=illum&name=Terence')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=eum&config=libero&name=Dina')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('eum', 'libero', 'Dina'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=cumque&config=cumque&format=ullam&name_transformer=Tina&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('cumque', 'cumque', {
          format: 'ullam',
          nameTransformer: 'Tina',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 1,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=unde&config=officia&format=aliquid&name_transformer=Ardith&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=labore&config=nisi&format=non&name_transformer=Hildegard&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('labore', 'nisi', {
            format: 'non',
            nameTransformer: 'Hildegard',
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
          '/v3/configs/config/secrets/names?project=modi&config=veniam&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('modi', 'veniam', { includeDynamicSecrets: true, includeManagedSecrets: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=est&config=dolores&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=ipsum&config=natus&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('ipsum', 'natus', {
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
