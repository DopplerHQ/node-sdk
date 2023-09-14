import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { WorkplaceRolesService } from '../../../src/services/workplaceRoles/WorkplaceRoles';

describe('test WorkplaceRolesService object', () => {
  it('should be an object', () => {
    expect(typeof WorkplaceRolesService).toBe('function');
  });
});

describe('test WorkplaceRoles', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/roles')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.list().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/roles')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.create().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test listPermissions', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/permissions')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.listPermissions().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/roles/role/eaque')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.get('eaque').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/roles/role/consectetur')
        .reply(200, { data: {} });
      return expect(async () => await sdk.workplaceRoles.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/roles/role/culpa')
        .reply(404, { data: {} });
      return expect(async () => await sdk.workplaceRoles.get('culpa')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/roles/role/quae')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.delete('quae').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/roles/role/similique')
        .reply(200, { data: {} });
      return expect(async () => await sdk.workplaceRoles.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/roles/role/consequuntur')
        .reply(404, { data: {} });
      return expect(async () => await sdk.workplaceRoles.delete('consequuntur')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/roles/role/aut')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.update('aut').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/roles/role/soluta')
        .reply(200, { data: {} });
      return expect(async () => await sdk.workplaceRoles.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/roles/role/nisi')
        .reply(404, { data: {} });
      return expect(async () => await sdk.workplaceRoles.update('nisi')).rejects.toThrow();
    });
  });
});
