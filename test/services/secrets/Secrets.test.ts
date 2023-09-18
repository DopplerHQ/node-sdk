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
          '/v3/configs/config/secrets?project=dicta&config=nam&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4&secrets=enim&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('dicta', 'nam', {
          accepts: 'pariatur',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 4,
          secrets: 'enim',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=officiis&config=consectetur&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8&secrets=laboriosam&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=sequi&config=porro&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1&secrets=expedita&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('sequi', 'porro', {
            accepts: 'eligendi',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 1,
            secrets: 'expedita',
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
        .get('/v3/configs/config/secret?project=nihil&config=tempora&name=Dasia')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('nihil', 'tempora', 'Dasia')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=recusandae&config=eaque&name=Ruthie')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=ipsum&config=maxime&name=Nicklaus')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.get('ipsum', 'maxime', 'Nicklaus'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=est&config=expedita&name=Vesta')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('est', 'expedita', 'Vesta')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=qui&config=suscipit&name=Efren')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=architecto&config=eos&name=Deshawn')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('architecto', 'eos', 'Deshawn'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=eaque&config=suscipit&format=cupiditate&name_transformer=Adrien&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('eaque', 'suscipit', {
          format: 'cupiditate',
          nameTransformer: 'Adrien',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 4,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=incidunt&config=tempore&format=aperiam&name_transformer=Juwan&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=ducimus&config=ex&format=perferendis&name_transformer=Bo&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=7',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('ducimus', 'ex', {
            format: 'perferendis',
            nameTransformer: 'Bo',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 7,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test names', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=commodi&config=culpa&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('commodi', 'culpa', { includeDynamicSecrets: true, includeManagedSecrets: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=distinctio&config=blanditiis&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=est&config=vel&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('est', 'vel', {
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
