import nock from 'nock';

import { DopplerSDK } from '../../src/';

import InvitesService from '../../src/services/Invites';

describe('test InvitesService object', () => {
  it('should be an object', () => {
    expect(typeof InvitesService).toBe('function');
  });
});

describe('test InvitesService', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK();

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/invites?page=6&per_page=1')
        .reply(200, { data: {} });
      return sdk.invites.list({ page: 6, perPage: 1 }).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
