import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { DynamicSecretsService } from '../../../src/services/dynamicSecrets/DynamicSecrets';

describe('test DynamicSecretsService object', () => {
  it('should be an object', () => {
    expect(typeof DynamicSecretsService).toBe('function');
  });
});

describe('test DynamicSecrets', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test issueLease', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/dynamic_secrets/dynamic_secret/leases')
        .reply(200, { data: {} });
      return sdk.dynamicSecrets.issueLease({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test revokeLease', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/dynamic_secrets/dynamic_secret/leases/lease')
        .reply(200, { data: {} });
      return sdk.dynamicSecrets.revokeLease({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
