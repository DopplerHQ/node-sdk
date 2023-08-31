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
        .get('/v3/configs/config/trusted_ips?project=dolore&config=optio')
        .reply(200, { data: {} });
      return sdk.trustedIps.list('dolore', 'optio').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=laborum&config=iste')
        .reply(200, { data: {} });
      return expect(async () => await sdk.trustedIps.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=excepturi&config=sequi')
        .reply(404, { data: {} });
      return expect(async () => await sdk.trustedIps.list('excepturi', 'sequi')).rejects.toThrow();
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=quas&config=eveniet')
        .reply(200, { data: {} });
      return sdk.trustedIps.add({}, 'quas', 'eveniet').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=molestiae&config=placeat')
        .reply(200, { data: {} });
      return expect(async () => await sdk.trustedIps.add()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=id&config=repellat')
        .reply(404, { data: {} });
      return expect(async () => await sdk.trustedIps.add({}, 'id', 'repellat')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=eos&config=numquam')
        .reply(200, { data: {} });
      return sdk.trustedIps
        .delete({}, 'eos', 'numquam')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=eos&config=minima')
        .reply(200, { data: {} });
      return expect(async () => await sdk.trustedIps.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=consequuntur&config=illum')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.trustedIps.delete({}, 'consequuntur', 'illum'),
      ).rejects.toThrow();
    });
  });
});
