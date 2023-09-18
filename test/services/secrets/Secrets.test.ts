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
          '/v3/configs/config/secrets?project=praesentium&config=quis&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=5&secrets=unde&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('praesentium', 'quis', {
          accepts: 'labore',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 5,
          secrets: 'unde',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=tenetur&config=eos&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=9&secrets=accusamus&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=officiis&config=sapiente&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=7&secrets=fugit&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('officiis', 'sapiente', {
            accepts: 'a',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 7,
            secrets: 'fugit',
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
        .get('/v3/configs/config/secret?project=quis&config=quod&name=Shaylee')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('quis', 'quod', 'Shaylee')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=voluptatem&config=autem&name=Augusta')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=sed&config=quidem&name=Doug')
        .reply(404, { data: {} });
      return expect(async () => await sdk.secrets.get('sed', 'quidem', 'Doug')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=quae&config=animi&name=Evalyn')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('quae', 'animi', 'Evalyn')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=sequi&config=maxime&name=Orlando')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=temporibus&config=ut&name=Ena')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('temporibus', 'ut', 'Ena'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=repellat&config=reiciendis&format=porro&name_transformer=Joaquin&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('repellat', 'reiciendis', {
          format: 'porro',
          nameTransformer: 'Joaquin',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 8,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=debitis&config=minima&format=necessitatibus&name_transformer=Brendon&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=eaque&config=impedit&format=incidunt&name_transformer=Malachi&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('eaque', 'impedit', {
            format: 'incidunt',
            nameTransformer: 'Malachi',
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
          '/v3/configs/config/secrets/names?project=saepe&config=deserunt&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('saepe', 'deserunt', { includeDynamicSecrets: true, includeManagedSecrets: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=deserunt&config=facere&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=saepe&config=saepe&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('saepe', 'saepe', {
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
