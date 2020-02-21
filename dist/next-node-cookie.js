/*!
 * name: @feizheng/next-node-cookie
 * description: Node cookie for next.
 * url: https://github.com/afeiship/next-node-cookie
 * version: 1.0.0
 * date: 2020-02-22 03:40:01
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var cookieParser = require('set-cookie-parser');

  var NxNodeCookie = nx.declare('nx.NodeCookie', {
    statics: {
      parse: function(inSetCookies) {
        return cookieParser.parse({
          headers: {
            'set-cookie': inSetCookies
          }
        });
      },
      stringify: function(inItems) {
        return inItems
          .map(function(item) {
            return item.name + '=' + item.value;
          })
          .join(';');
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxNodeCookie;
  }
})();

//# sourceMappingURL=next-node-cookie.js.map
