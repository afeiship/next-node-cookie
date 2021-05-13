(function () {
  const NxNodeCookie = require('../src');

  describe('NxNodeCookie static parse should worked', function () {
    test('api: parse string', () => {
      var str = `_ga=GA1.2.729997516.1607231707; __yadk_uid=mzVWjNrFUF2DhH0hOsBozQQ6Do3Buatn; UM_distinctid=17891f84c8822a-0d20b047766908-1632685d-232800-17891f84c8961d; read_mode=day; default_font=font2; locale=zh-CN; Hm_lvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1620700070,1620700663,1620702484,1620807738; CNZZDATA1279807957=1905319660-1617352675-https%253A%252F%252Fwww.baidu.com%252F%7C1620894092; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2217636799764109-0f8eb33d45637b-18356153-2304000-17636799765a14%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2217636799764109-0f8eb33d45637b-18356153-2304000-17636799765a14%22%7D; _gid=GA1.2.455120968.1620898684; Hm_lpvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1620898744`;

      var res = NxNodeCookie.parse(str);

      expect(res).toEqual([
        { name: '_ga', value: 'GA1.2.729997516.1607231707' },
        { name: '__yadk_uid', value: 'mzVWjNrFUF2DhH0hOsBozQQ6Do3Buatn' },
        {
          name: 'UM_distinctid',
          value: '17891f84c8822a-0d20b047766908-1632685d-232800-17891f84c8961d'
        },
        { name: 'read_mode', value: 'day' },
        { name: 'default_font', value: 'font2' },
        { name: 'locale', value: 'zh-CN' },
        {
          name: 'Hm_lvt_0c0e9d9b1e7d617b3e6842e85b9fb068',
          value: '1620700070,1620700663,1620702484,1620807738'
        },
        {
          name: 'CNZZDATA1279807957',
          value: '1905319660-1617352675-https%3A%2F%2Fwww.baidu.com%2F|1620894092'
        },
        {
          name: 'sensorsdata2015jssdkcross',
          value:
            '{"distinct_id":"17636799764109-0f8eb33d45637b-18356153-2304000-17636799765a14","first_id":"","props":{"$latest_traffic_source_type":"直接流量","$latest_search_keyword":"未取到值_直接打开","$latest_referrer":""},"$device_id":"17636799764109-0f8eb33d45637b-18356153-2304000-17636799765a14"}'
        },
        { name: '_gid', value: 'GA1.2.455120968.1620898684' },
        {
          name: 'Hm_lpvt_0c0e9d9b1e7d617b3e6842e85b9fb068',
          value: '1620898744'
        }
      ]);
    });

    test('api: stringify', function () {
      const items = [
        { name: '_ga', value: 'GA1.2.729997516.1607231707' },
        { name: '__yadk_uid', value: 'mzVWjNrFUF2DhH0hOsBozQQ6Do3Buatn' },
        {
          name: 'UM_distinctid',
          value: '17891f84c8822a-0d20b047766908-1632685d-232800-17891f84c8961d'
        }
      ];

      var res = NxNodeCookie.stringify(items);
      expect(res).toBe(
        '_ga=GA1.2.729997516.1607231707; __yadk_uid=mzVWjNrFUF2DhH0hOsBozQQ6Do3Buatn; UM_distinctid=17891f84c8822a-0d20b047766908-1632685d-232800-17891f84c8961d'
      );
    });
  });
})();
