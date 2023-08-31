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
          '/v3/configs/config/secrets?project=nobis&config=possimus&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8&secrets=suscipit&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('nobis', 'possimus', {
          accepts: 'consequatur',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 8,
          secrets: 'suscipit',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=voluptatem&config=doloremque&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=2&secrets=iusto&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=illo&config=dolor&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6&secrets=architecto&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('illo', 'dolor', {
            accepts: 'harum',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 6,
            secrets: 'architecto',
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
        .get('/v3/configs/config/secret?project=nesciunt&config=perspiciatis&name=Taylor')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('nesciunt', 'perspiciatis', 'Taylor')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=nobis&config=vero&name=Yasmeen')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=blanditiis&config=deleniti&name=Lauren')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.get('blanditiis', 'deleniti', 'Lauren'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=ratione&config=dolor&name=Keon')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('ratione', 'dolor', 'Keon')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=dicta&config=voluptatum&name=Agnes')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=eum&config=reprehenderit&name=Bobbie')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('eum', 'reprehenderit', 'Bobbie'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=explicabo&config=culpa&format=minus&name_transformer=Wilfrid&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=3',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('explicabo', 'culpa', {
          format: 'minus',
          nameTransformer: 'Wilfrid',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 3,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=illo&config=possimus&format=quam&name_transformer=Alia&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=2',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=cumque&config=inventore&format=cumque&name_transformer=Kaylie&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('cumque', 'inventore', {
            format: 'cumque',
            nameTransformer: 'Kaylie',
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
          '/v3/configs/config/secrets/names?project=ipsam&config=tempora&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('ipsam', 'tempora', { includeDynamicSecrets: true, includeManagedSecrets: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=ex&config=sunt&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=sint&config=reiciendis&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('sint', 'reiciendis', {
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
