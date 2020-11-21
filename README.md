# next-node-cookie
> Node cookie for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-node-cookie
```

## apis
| api       | params                | description                                      |
| --------- | --------------------- | ------------------------------------------------ |
| parse     | inSetCookies[]/String | parse response set-cookie headers to JSON        |
| stringify | parseResults[]        | stringify JSON to Cookie string for next request |

## usage
```js
import NxNodeCookie from '@jswork/next-node-cookie';

NxNodeCookie.parse(
  [
    'a_token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTEzODQ2MjJvkFolg',
    'c_id=4adae155ab8058eb55197c2def575b6fd1731aabd91f767747d9a1171f1ecb67',
    'u_type=11',
    'login_type=01',
    'login_type=01; Domain=.10010.com; Path=/',
    'u_account=17607171608',
    'c_version=iphone_c@6.002'
  ]
)
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-node-cookie/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-node-cookie
[version-url]: https://npmjs.org/package/@jswork/next-node-cookie

[license-image]: https://img.shields.io/npm/l/@jswork/next-node-cookie
[license-url]: https://github.com/afeiship/next-node-cookie/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-node-cookie
[size-url]: https://github.com/afeiship/next-node-cookie/blob/master/dist/next-node-cookie.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-node-cookie
[download-url]: https://www.npmjs.com/package/@jswork/next-node-cookie
