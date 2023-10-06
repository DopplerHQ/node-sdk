import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { AuditService } from '../../../src/services/audit/Audit';

describe('test AuditService object', () => {
  it('should be an object', () => {
    expect(typeof AuditService).toBe('function');
  });
});

describe('test Audit', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test getUser', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/users/4763505626?settings=true')
        .reply(200, { data: {} });
      return sdk.audit
        .getUser('4763505626', { settings: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/users/9800394114?settings=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.audit.getUser()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/users/4559984941?settings=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.audit.getUser('4559984941', { settings: true }),
      ).rejects.toThrow();
    });
  });
});
