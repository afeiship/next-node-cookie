/*!
 * name: @jswork/next-node-cookie
 * description: Node cookie for next.
 * homepage: https://github.com/afeiship/next-node-cookie
 * version: 1.0.0
 * date: 2020-11-21 09:54:07
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var cookieParser = require('set-cookie-parser');
  var SEMI = ';';

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
