(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var cookieParser = require('set-cookie-parser');
  var SEMI = ';';
  var JSON_RE = /\{.*\}/;

  var NxNodeCookie = nx.declare('nx.NodeCookie', {
    statics: {
      parse: function (inSetCookies) {
        var setCookie = typeof inSetCookies === 'string' ? inSetCookies.split(SEMI) : inSetCookies;
        var items = cookieParser.parse({
          headers: { 'set-cookie': setCookie }
        });

        items.forEach(function (item) {
          item.name = item.name.trim();
          item.value = item.value.trim();
        });

        return items;
      },
      stringify: function (inItems) {
        return inItems
          .map(function (item) {
            return item.name + '=' + item.value;
          })
          .join(SEMI + ' ');
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxNodeCookie;
  }
})();
