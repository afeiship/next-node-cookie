(function () {
  var nx = require('@feizheng/next-js-core2');
  var NxNodeCookie = require('../src/next-node-cookie');

  describe('NxNodeCookie.methods', function () {
    test('parse', function () {
      expect(
        NxNodeCookie.parse([
          'a_token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTEzODQ2MjJvkFolg',
          'c_id=4adae155ab8058eb55197c2def575b6fd1731aabd91f767747d9a1171f1ecb67',
          'u_type=11',
          'login_type=01',
          'login_type=01; Domain=.10010.com; Path=/',
          'u_account=17607171608',
          'c_version=iphone_c@6.002'
        ])
      ).toEqual([
        {
          name: 'a_token',
          value: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTEzODQ2MjJvkFolg'
        },
        {
          name: 'c_id',
          value: '4adae155ab8058eb55197c2def575b6fd1731aabd91f767747d9a1171f1ecb67'
        },
        { name: 'u_type', value: '11' },
        { name: 'login_type', value: '01' },
        {
          name: 'login_type',
          value: '01',
          domain: '.10010.com',
          path: '/'
        },
        { name: 'u_account', value: '17607171608' },
        { name: 'c_version', value: 'iphone_c@6.002' }
      ]);
    });
  });
})();
