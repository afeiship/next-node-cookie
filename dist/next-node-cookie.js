/*!
 * name: @feizheng/next-node-cookie
 * description: Node cookie for next.
 * homepage: https://github.com/afeiship/next-node-cookie
 * version: 1.0.2
 * date: 2020-06-05T06:05:46.654Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var cookieParser = require('set-cookie-parser');
  var SEMI = ';'

  var NxNodeCookie = nx.declare('nx.NodeCookie', {
    statics: {
      parse: function (inSetCookies) {
        var setCookie = typeof inSetCookies === 'string' ? inSetCookies.split(SEMI) : inSetCookies;
        return cookieParser.parse({
          headers: { 'set-cookie': setCookie }
        });
      },
      stringify: function (inItems) {
        return inItems
          .map(function (item) {
            return item.name + '=' + item.value;
          })
          .join(SEMI);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxNodeCookie;
  }
})();

//# sourceMappingURL=next-node-cookie.js.map
