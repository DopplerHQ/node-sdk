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
        .get('/v3/workplace/groups?page=9&per_page=5')
        .reply(200, { data: {} });
      return sdk.groups.list({ page: 9, perPage: 5 }).then((r: any) => expect(r.data).toEqual({}));
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
        .get('/v3/workplace/groups/group/impedit')
        .reply(200, { data: {} });
      return sdk.groups.get('impedit').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/fuga')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/exercitationem')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.get('exercitationem')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/expedita')
        .reply(200, { data: {} });
      return sdk.groups.delete('expedita').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/excepturi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/placeat')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.delete('placeat')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/qui')
        .reply(200, { data: {} });
      return sdk.groups.update({}, 'qui').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/explicabo')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/veritatis')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.update({}, 'veritatis')).rejects.toThrow();
    });
  });

  describe('test addMember', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/quam/members')
        .reply(200, { data: {} });
      return sdk.groups.addMember({}, 'quam').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/architecto/members')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.addMember()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/fugit/members')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.addMember({}, 'fugit')).rejects.toThrow();
    });
  });

  describe('test deleteMember', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/totam/members/%7Btype%7D/laboriosam')
        .reply(200, { data: {} });
      return sdk.groups
        .deleteMember('totam', 'suscipit', 'laboriosam')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/perferendis/members/%7Btype%7D/quos')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.deleteMember()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/voluptates/members/%7Btype%7D/animi')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.groups.deleteMember('voluptates', 'necessitatibus', 'animi'),
      ).rejects.toThrow();
    });
  });
});
