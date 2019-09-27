(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.FRouter = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // routes = [
  //     {
  //         path: '',
  //         component: someobject,
  //         redirect: ''
  //     },
  //     {
  //         path: '',
  //         children: [
  //             {
  //                 path: '',
  //                 component: someobject,
  //                 redirect: ''
  //             }
  //         ]
  //     }
  // ]
  var FRouter = function FRouter(options) {
    _classCallCheck(this, FRouter);

    this.routes = options.routes || [];
  };

  return FRouter;

}));
//# sourceMappingURL=FRouter.umd.js.map
