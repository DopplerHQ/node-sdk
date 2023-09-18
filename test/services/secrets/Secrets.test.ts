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
          '/v3/configs/config/secrets?project=sapiente&config=suscipit&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=7&secrets=distinctio&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('sapiente', 'suscipit', {
          accepts: 'sunt',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 7,
          secrets: 'distinctio',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=deleniti&config=adipisci&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=9&secrets=molestiae&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=eveniet&config=pariatur&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8&secrets=quia&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('eveniet', 'pariatur', {
            accepts: 'repellat',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 8,
            secrets: 'quia',
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
        .get('/v3/configs/config/secret?project=ipsum&config=iste&name=Roselyn')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('ipsum', 'iste', 'Roselyn')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=hic&config=in&name=Assunta')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=quas&config=recusandae&name=Odell')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.get('quas', 'recusandae', 'Odell'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=repellendus&config=libero&name=Mack')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('repellendus', 'libero', 'Mack')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=deserunt&config=soluta&name=Coralie')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=corrupti&config=nisi&name=Andres')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('corrupti', 'nisi', 'Andres'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=iusto&config=ullam&format=deleniti&name_transformer=Emory&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=3',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('iusto', 'ullam', {
          format: 'deleniti',
          nameTransformer: 'Emory',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 3,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=voluptate&config=consequuntur&format=culpa&name_transformer=Rhea&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=7',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=eveniet&config=aliquam&format=consequuntur&name_transformer=Luciano&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('eveniet', 'aliquam', {
            format: 'consequuntur',
            nameTransformer: 'Luciano',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 8,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test names', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=quibusdam&config=ullam&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('quibusdam', 'ullam', { includeDynamicSecrets: true, includeManagedSecrets: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=facilis&config=beatae&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=magni&config=voluptatem&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('magni', 'voluptatem', {
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
