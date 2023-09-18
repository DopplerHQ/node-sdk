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
          '/v3/configs/config/secrets?project=laudantium&config=quisquam&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4&secrets=tenetur&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('laudantium', 'quisquam', {
          accepts: 'ipsum',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 4,
          secrets: 'tenetur',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=illo&config=distinctio&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=9&secrets=nostrum&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=ab&config=consectetur&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4&secrets=deserunt&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('ab', 'consectetur', {
            accepts: 'unde',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 4,
            secrets: 'deserunt',
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
        .get('/v3/configs/config/secret?project=sequi&config=magni&name=Cleve')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('sequi', 'magni', 'Cleve')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=nostrum&config=modi&name=Elta')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=earum&config=a&name=Maia')
        .reply(404, { data: {} });
      return expect(async () => await sdk.secrets.get('earum', 'a', 'Maia')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=voluptate&config=esse&name=Jessie')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('voluptate', 'esse', 'Jessie')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=delectus&config=amet&name=Cynthia')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=nulla&config=illo&name=Alexis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('nulla', 'illo', 'Alexis'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=maxime&config=rerum&format=ad&name_transformer=Claudie&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=5',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('maxime', 'rerum', {
          format: 'ad',
          nameTransformer: 'Claudie',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 5,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=odio&config=accusamus&format=unde&name_transformer=Shania&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=temporibus&config=sint&format=magnam&name_transformer=Giuseppe&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('temporibus', 'sint', {
            format: 'magnam',
            nameTransformer: 'Giuseppe',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 4,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test names', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=tempore&config=architecto&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('tempore', 'architecto', {
          includeDynamicSecrets: true,
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=voluptatem&config=cupiditate&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=reiciendis&config=voluptates&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('reiciendis', 'voluptates', {
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
