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
          '/v3/configs/config/secrets?project=aliquid&config=ad&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=2&secrets=quos&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('aliquid', 'ad', {
          accepts: 'repudiandae',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 2,
          secrets: 'quos',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=ad&config=voluptatum&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6&secrets=inventore&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=eaque&config=vero&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6&secrets=nisi&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('eaque', 'vero', {
            accepts: 'quidem',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 6,
            secrets: 'nisi',
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
        .get('/v3/configs/config/secret?project=possimus&config=mollitia&name=Winona')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('possimus', 'mollitia', 'Winona')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=esse&config=iure&name=Brown')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=tempore&config=ex&name=Tanner')
        .reply(404, { data: {} });
      return expect(async () => await sdk.secrets.get('tempore', 'ex', 'Tanner')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=harum&config=iusto&name=Brent')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('harum', 'iusto', 'Brent')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=tenetur&config=molestiae&name=Claudia')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=consectetur&config=maxime&name=Clarissa')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('consectetur', 'maxime', 'Clarissa'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=fugiat&config=soluta&format=vel&name_transformer=Beth&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('fugiat', 'soluta', {
          format: 'vel',
          nameTransformer: 'Beth',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 6,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=cum&config=numquam&format=deserunt&name_transformer=Peter&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=3',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=modi&config=corrupti&format=tempora&name_transformer=Lilly&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('modi', 'corrupti', {
            format: 'tempora',
            nameTransformer: 'Lilly',
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
          '/v3/configs/config/secrets/names?project=accusantium&config=provident&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('accusantium', 'provident', {
          includeDynamicSecrets: true,
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=debitis&config=explicabo&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=unde&config=non&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('unde', 'non', {
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
