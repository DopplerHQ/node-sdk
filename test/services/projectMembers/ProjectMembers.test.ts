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
        .get('/v3/projects/project/members?project=culpa&page=9&per_page=4')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .list('culpa', { page: 9, perPage: 4 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=nostrum&page=7&per_page=4')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=officia&page=6&per_page=3')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.list('officia', { page: 6, perPage: 3 }),
      ).rejects.toThrow();
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=sed')
        .reply(200, { data: {} });
      return sdk.projectMembers.add({}, 'sed').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=fugiat')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.add()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=odio')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projectMembers.add({}, 'odio')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/rerum?project=ipsum')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .get('ipsum', 'in', 'rerum')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/corporis?project=veritatis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/provident?project=natus')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.get('natus', 'vitae', 'provident'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/ea?project=ipsa')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .delete('enim', 'ea', 'ipsa')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/ad?project=nisi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/quaerat?project=laboriosam')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.delete('nam', 'quaerat', 'laboriosam'),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/eaque?project=debitis')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .update({}, 'optio', 'eaque', 'debitis')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/sit?project=iste')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/numquam?project=culpa')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.update({}, 'labore', 'numquam', 'culpa'),
      ).rejects.toThrow();
    });
  });
});
