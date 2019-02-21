# next-node-cookie
> Node cookie for next

## install:
```bash
npm install -S afeiship/next-node-cookie --registry=https://registry.npm.taobao.org
```

## apis:
| api       | params         | description                                      |
|-----------|----------------|--------------------------------------------------|
| parse     | inSetCookies[] | parse response set-cookie headers to JSON        |
| stringify | parseResults[] | stringify JSON to Cookie string for next request |

## usage:
```js
import NxNodeCookie from 'next-node-cookie';

// code goes here:
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

## resources:
- https://github.com/afeiship
