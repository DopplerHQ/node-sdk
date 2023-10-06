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
        .get('/v3/workplace/groups?page=7&per_page=8')
        .reply(200, { data: {} });
      return sdk.groups.list({ page: 7, perPage: 8 }).then((r: any) => expect(r.data).toEqual({}));
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
        .get('/v3/workplace/groups/group/rerum')
        .reply(200, { data: {} });
      return sdk.groups.get('rerum').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/maiores')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/iure')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.get('iure')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/commodi')
        .reply(200, { data: {} });
      return sdk.groups.delete('commodi').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/molestias')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/nesciunt')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.delete('nesciunt')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/omnis')
        .reply(200, { data: {} });
      return sdk.groups.update({}, 'omnis').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/modi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/temporibus')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.update({}, 'temporibus')).rejects.toThrow();
    });
  });

  describe('test addMember', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/sed/members')
        .reply(200, { data: {} });
      return sdk.groups.addMember({}, 'sed').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/iusto/members')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.addMember()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/occaecati/members')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.addMember({}, 'occaecati')).rejects.toThrow();
    });
  });

  describe('test deleteMember', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/incidunt/members/%7Btype%7D/eveniet')
        .reply(200, { data: {} });
      return sdk.groups
        .deleteMember('incidunt', 'repellat', 'eveniet')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/ipsa/members/%7Btype%7D/rerum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.deleteMember()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/debitis/members/%7Btype%7D/architecto')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.groups.deleteMember('debitis', 'accusantium', 'architecto'),
      ).rejects.toThrow();
    });
  });
});
