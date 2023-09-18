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
          '/v3/configs/config/secrets?project=asperiores&config=architecto&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6&secrets=vero&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('asperiores', 'architecto', {
          accepts: 'ad',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 6,
          secrets: 'vero',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=corporis&config=alias&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1&secrets=nulla&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=quibusdam&config=ut&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=9&secrets=officia&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('quibusdam', 'ut', {
            accepts: 'dicta',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 9,
            secrets: 'officia',
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
        .get('/v3/configs/config/secret?project=eveniet&config=quaerat&name=Misty')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('eveniet', 'quaerat', 'Misty')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=earum&config=ad&name=Carolina')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=et&config=rem&name=Myra')
        .reply(404, { data: {} });
      return expect(async () => await sdk.secrets.get('et', 'rem', 'Myra')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=reiciendis&config=eius&name=Demarcus')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('reiciendis', 'eius', 'Demarcus')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=porro&config=ducimus&name=Patience')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=expedita&config=facere&name=Cyril')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('expedita', 'facere', 'Cyril'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=blanditiis&config=voluptatibus&format=commodi&name_transformer=Evan&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=3',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('blanditiis', 'voluptatibus', {
          format: 'commodi',
          nameTransformer: 'Evan',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 3,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=aut&config=vitae&format=adipisci&name_transformer=Paxton&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=quia&config=voluptatum&format=sit&name_transformer=Justen&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('quia', 'voluptatum', {
            format: 'sit',
            nameTransformer: 'Justen',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 1,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test names', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=dignissimos&config=soluta&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('dignissimos', 'soluta', {
          includeDynamicSecrets: true,
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=et&config=occaecati&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=reiciendis&config=voluptas&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('reiciendis', 'voluptas', {
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
