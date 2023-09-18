import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ProjectMembersService } from '../../../src/services/projectMembers/ProjectMembers';

describe('test ProjectMembersService object', () => {
  it('should be an object', () => {
    expect(typeof ProjectMembersService).toBe('function');
  });
});

describe('test ProjectMembers', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=facere&page=2&per_page=5')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .list('facere', { page: 2, perPage: 5 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=odit&page=3&per_page=4')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=inventore&page=8&per_page=1')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.list('inventore', { page: 8, perPage: 1 }),
      ).rejects.toThrow();
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=quo')
        .reply(200, { data: {} });
      return sdk.projectMembers.add({}, 'quo').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=consequuntur')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.add()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=voluptas')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projectMembers.add({}, 'voluptas')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/eum?project=optio')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .get('optio', 'ex', 'eum')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/tempore?project=reiciendis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/porro?project=aut')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.get('aut', 'minima', 'porro'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/quo?project=fugit')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .delete('praesentium', 'quo', 'fugit')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/tempora?project=dolores')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/deserunt?project=praesentium')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.delete('aperiam', 'deserunt', 'praesentium'),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/ducimus?project=sit')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .update({}, 'architecto', 'ducimus', 'sit')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/repudiandae?project=dolor')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/maxime?project=porro')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.update({}, 'vitae', 'maxime', 'porro'),
      ).rejects.toThrow();
    });
  });
});
