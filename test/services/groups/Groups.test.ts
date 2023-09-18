import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { GroupsService } from '../../../src/services/groups/Groups';

describe('test GroupsService object', () => {
  it('should be an object', () => {
    expect(typeof GroupsService).toBe('function');
  });
});

describe('test Groups', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups?page=3&per_page=7')
        .reply(200, { data: {} });
      return sdk.groups.list({ page: 3, perPage: 7 }).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups')
        .reply(200, { data: {} });
      return sdk.groups.create({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/consequuntur')
        .reply(200, { data: {} });
      return sdk.groups.get('consequuntur').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/assumenda')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/id')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.get('id')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/reiciendis')
        .reply(200, { data: {} });
      return sdk.groups.delete('reiciendis').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/velit')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/laboriosam')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.delete('laboriosam')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/laborum')
        .reply(200, { data: {} });
      return sdk.groups.update({}, 'laborum').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/perspiciatis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/eveniet')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.update({}, 'eveniet')).rejects.toThrow();
    });
  });

  describe('test addMember', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/id/members')
        .reply(200, { data: {} });
      return sdk.groups.addMember({}, 'id').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/cupiditate/members')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.addMember()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/voluptates/members')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.addMember({}, 'voluptates')).rejects.toThrow();
    });
  });

  describe('test deleteMember', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/incidunt/members/%7Btype%7D/ad')
        .reply(200, { data: {} });
      return sdk.groups
        .deleteMember('incidunt', 'ut', 'ad')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/distinctio/members/%7Btype%7D/facere')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.deleteMember()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/natus/members/%7Btype%7D/qui')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.groups.deleteMember('natus', 'magni', 'qui'),
      ).rejects.toThrow();
    });
  });
});
