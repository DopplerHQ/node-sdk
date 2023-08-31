import nock from 'nock';

import { DopplerSDK } from '../../src/';

import TrustedIpsService from '../../src/services/TrustedIps';

describe('test TrustedIpsService object', () => {
  it('should be an object', () => {
    expect(typeof TrustedIpsService).toBe('function');
  });
});

describe('test TrustedIpsService', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK();

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=dignissimos&config=dolores')
        .reply(200, { data: {} });
      return sdk.trustedIps
        .list('dignissimos', 'dolores')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=laboriosam&config=magni')
        .reply(200, { data: {} });
      return expect(async () => await sdk.trustedIps.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=impedit&config=rerum')
        .reply(404, { data: {} });
      return expect(async () => await sdk.trustedIps.list('impedit', 'rerum')).rejects.toThrow();
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=inventore&config=eveniet')
        .reply(200, { data: {} });
      return sdk.trustedIps
        .add({}, 'inventore', 'eveniet')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=impedit&config=laboriosam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.trustedIps.add()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=officiis&config=odio')
        .reply(404, { data: {} });
      return expect(async () => await sdk.trustedIps.add({}, 'officiis', 'odio')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=illo&config=repudiandae')
        .reply(200, { data: {} });
      return sdk.trustedIps
        .delete({}, 'illo', 'repudiandae')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=esse&config=assumenda')
        .reply(200, { data: {} });
      return expect(async () => await sdk.trustedIps.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=illum&config=ab')
        .reply(404, { data: {} });
      return expect(async () => await sdk.trustedIps.delete({}, 'illum', 'ab')).rejects.toThrow();
    });
  });
});
