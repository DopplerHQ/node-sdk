import nock from 'nock';

import { DopplerSDK } from '../../src/';

import GroupsService from '../../src/services/Groups';

describe('test GroupsService object', () => {
  it('should be an object', () => {
    expect(typeof GroupsService).toBe('function');
  });
});

describe('test GroupsService', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK();

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups?page=8&per_page=7')
        .reply(200, { data: {} });
      return sdk.groups.list({ page: 8, perPage: 7 }).then((r: any) => expect(r.data).toEqual({}));
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
        .get('/v3/workplace/groups/group/voluptatem')
        .reply(200, { data: {} });
      return sdk.groups.get('voluptatem').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/commodi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/mollitia')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.get('mollitia')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/atque')
        .reply(200, { data: {} });
      return sdk.groups.delete('atque').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/aliquid')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/impedit')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.delete('impedit')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/voluptatibus')
        .reply(200, { data: {} });
      return sdk.groups.update({}, 'voluptatibus').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/rerum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/necessitatibus')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.update({}, 'necessitatibus')).rejects.toThrow();
    });
  });

  describe('test addMember', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/est/members')
        .reply(200, { data: {} });
      return sdk.groups.addMember({}, 'est').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/exercitationem/members')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.addMember()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/quam/members')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.addMember({}, 'quam')).rejects.toThrow();
    });
  });

  describe('test deleteMember', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/rem/members/%7Btype%7D/maiores')
        .reply(200, { data: {} });
      return sdk.groups
        .deleteMember('rem', 'eos', 'maiores')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/consequuntur/members/%7Btype%7D/in')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.deleteMember()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/officiis/members/%7Btype%7D/consequatur')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.groups.deleteMember('officiis', 'eaque', 'consequatur'),
      ).rejects.toThrow();
    });
  });
});
