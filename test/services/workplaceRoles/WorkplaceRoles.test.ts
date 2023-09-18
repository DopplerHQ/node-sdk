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
        .get('/v3/workplace/roles/role/eveniet')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.get('eveniet').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/roles/role/culpa')
        .reply(200, { data: {} });
      return expect(async () => await sdk.workplaceRoles.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/roles/role/iure')
        .reply(404, { data: {} });
      return expect(async () => await sdk.workplaceRoles.get('iure')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/roles/role/sint')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.delete('sint').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/roles/role/enim')
        .reply(200, { data: {} });
      return expect(async () => await sdk.workplaceRoles.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/roles/role/in')
        .reply(404, { data: {} });
      return expect(async () => await sdk.workplaceRoles.delete('in')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/roles/role/repellendus')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.update('repellendus').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/roles/role/voluptatum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.workplaceRoles.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/roles/role/quos')
        .reply(404, { data: {} });
      return expect(async () => await sdk.workplaceRoles.update('quos')).rejects.toThrow();
    });
  });
});
