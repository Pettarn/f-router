(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.FRouter = factory());
}(this, function () { 'use strict';

    var getRoute = function getRoute(currentHash, routePool) {
      var currentRoute;
      routePool.forEach(function (item) {
        if ('#' + item.path === currentHash) {
          currentRoute = item;
        }
      });
      return currentRoute;
    };

    var push = function push(currentHash) {};

    var getHash = function getHash() {
      var currentHash = location.hash;
      return currentHash;
    };

    var _this = undefined;

    function FRouter(options) {
      this.routes = options.routes || [];
    } // return currentRoute


    FRouter.prototype.getRoute = function () {
      return getRoute(_this.currentHash, _this.routes);
    };

    FRouter.prototype.push = function () {
      return push(_this.currentHash);
    }; // return currentHash


    FRouter.prototype.getHash = function () {
      return getHash();
    }; // return this.router.route  new FRouter的时候


    FRouter.prototype.route = getRoute(undefined.getHash(), undefined.routes);

    return FRouter;

}));
//# sourceMappingURL=FRouter.umd.js.map
