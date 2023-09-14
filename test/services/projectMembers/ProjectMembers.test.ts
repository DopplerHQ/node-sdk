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
        .get('/v3/projects/project/members?project=ducimus&page=7&per_page=9')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .list('ducimus', { page: 7, perPage: 9 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=at&page=7&per_page=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=deleniti&page=1&per_page=5')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.list('deleniti', { page: 1, perPage: 5 }),
      ).rejects.toThrow();
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=accusantium')
        .reply(200, { data: {} });
      return sdk.projectMembers.add({}, 'accusantium').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=natus')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.add()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=recusandae')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projectMembers.add({}, 'recusandae')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/veniam?project=dolores')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .get('dolores', 'quibusdam', 'veniam')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/quibusdam?project=delectus')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/incidunt?project=explicabo')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.get('explicabo', 'eligendi', 'incidunt'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/incidunt?project=non')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .delete('quos', 'incidunt', 'non')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/ullam?project=ipsum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/nam?project=quod')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.delete('doloribus', 'nam', 'quod'),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/cupiditate?project=blanditiis')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .update({}, 'nulla', 'cupiditate', 'blanditiis')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/officiis?project=ea')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/nesciunt?project=libero')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.update({}, 'asperiores', 'nesciunt', 'libero'),
      ).rejects.toThrow();
    });
  });
});
