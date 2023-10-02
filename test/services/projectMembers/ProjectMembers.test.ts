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
        .get('/v3/projects/project/members?project=quibusdam&page=1&per_page=2')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .list('quibusdam', { page: 1, perPage: 2 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=ratione&page=6&per_page=2')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=expedita&page=7&per_page=1')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.list('expedita', { page: 7, perPage: 1 }),
      ).rejects.toThrow();
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=rem')
        .reply(200, { data: {} });
      return sdk.projectMembers.add({}, 'rem').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=eos')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.add()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=et')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projectMembers.add({}, 'et')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/amet?project=repellat')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .get('repellat', 'culpa', 'amet')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/totam?project=quibusdam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/%7Btype%7D/rerum?project=omnis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.get('omnis', 'minus', 'rerum'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/eos?project=blanditiis')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .delete('hic', 'eos', 'blanditiis')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/fugit?project=rem')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/%7Btype%7D/nesciunt?project=aut')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.delete('corporis', 'nesciunt', 'aut'),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/debitis?project=odit')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .update({}, 'sit', 'debitis', 'odit')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/dolore?project=non')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/%7Btype%7D/ut?project=sint')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.update({}, 'alias', 'ut', 'sint'),
      ).rejects.toThrow();
    });
  });
});
