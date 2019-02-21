(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
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
