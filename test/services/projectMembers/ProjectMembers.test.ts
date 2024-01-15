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
        .get('/v3/projects/project/members?project=ex&page=2&per_page=1')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .list('ex', { page: 2, perPage: 1 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=error&page=9&per_page=4')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=suscipit&page=3&per_page=8')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.list('suscipit', { page: 3, perPage: 8 }),
      ).rejects.toThrow();
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=repudiandae')
        .reply(200, { data: {} });
      return sdk.projectMembers.add({}, 'repudiandae').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=ut')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.add()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=nulla')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projectMembers.add({}, 'nulla')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/molestias/officia?project=eligendi')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .get('eligendi', 'molestias', 'officia')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/recusandae?project=nemo')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/esse/eaque?project=cumque')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.get('cumque', 'esse', 'eaque'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/est/quam?project=sunt')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .delete('est', 'quam', 'sunt')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/minima?project=ipsum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/repellat/incidunt?project=quidem')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.delete('repellat', 'incidunt', 'quidem'),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/at/molestias?project=magni')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .update({}, 'at', 'molestias', 'magni')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/accusantium?project=corporis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/pariatur/esse?project=harum')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.update({}, 'pariatur', 'esse', 'harum'),
      ).rejects.toThrow();
    });
  });
});
