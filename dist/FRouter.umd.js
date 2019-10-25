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

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var RouterView = {
    props: {
      name: {
        type: String,
        "default": 'default'
      }
    },
    render: function render(_, _ref) {
      var parent = _ref.parent,
          data = _ref.data;

      function renderCore(_, _ref2) {
        var parent = _ref2.parent,
            data = _ref2.data;
        // router-view will be rendered as matched component 
        var h = parent.$createElement;
        var hash = this.$router.currentHash; // the x level routeMap and hash  match

        if (!parent._childrenMap) {
          var currentMap = this.$router.routeMap;
          var matched = [];
          currentMap.forEach(function (item) {
            var index = hash.indexOf(item.path);

            if (index === 0) {
              matched.push(item);
            }
          });

          if (matched[0].redirect) {
            location.href.replace(matched[0].path, matched[0].redirect);
            return renderCore(_, {
              parent: parent,
              data: data
            });
          }

          if (matched[0].children) {
            data._childrenMap = matched[0].children;
            data._hashChip = matched[0].path;
          }

          return h(matched[0].component);
        } else {
          var _currentMap = parent._childrenMap;
          var parentHashChip = parent._hashChip;
          var _matched = [];

          if (parentHashChip[-1] !== '/') {
            parentHashChip += '/';
          }

          _currentMap.forEach(function (item) {
            var index = hash.indexOf(parentHashChip + item.path);

            if (index !== -1) {
              _matched.push(item);
            }
          });

          if (_matched[0].redirect) {
            location.href.replace(_matched[0].path, _matched[0].redirect);
            return renderCore(_, {
              parent: parent,
              data: data
            });
          }

          if (_matched[0].children) {
            data._childrenMap = _matched[0].children;
            data._hashChip = _matched[0].path;
          }

          return h(_matched[0].component);
        }
      }

      renderCore(_, {
        parent: parent,
        data: data
      });
    }
  };

  var isDef = function isDef(v) {
    return v !== undefined;
  };

  var install = function install(Vue) {
    Vue.mixin({
      beforeCreate: function beforeCreate() {
        if (isDef(this.$options.router)) {
          this._routerRoot = this;
          this._router = this.$options.router;

          this._router.initHistory();
        } else {
          this._routerRoot = this.$parent || this.$parent._routerRoot;
        }
      }
    });
    Object.defineProperty(Vue.prototype, $router, {
      get: function get() {
        return this._routerRoot._router;
      }
    });
    Vue.component('RouterView', RouterView);
  };

  var History =
  /*#__PURE__*/
  function () {
    function History(router) {
      _classCallCheck(this, History);

      this.router = router;
    }

    _createClass(History, [{
      key: "initHistory",
      value: function initHistory() {
        this.Stack = [];
        this.Stack.push(this.router.currentHash);
      }
    }, {
      key: "push",
      value: function push(url) {
        location.href = url;
        this.Stack.push(this.router.currentHash);
      }
    }, {
      key: "back",
      value: function back() {
        var index = this.Stack.indexOf(this.router.currentHash);

        if (index > 0) {
          location.href = this.Stack[index - 1];
        } else {
          location.reload();
        }
      }
    }, {
      key: "forward",
      value: function forward() {
        var index = this.Stack.indexOf(this.router.currentHash);

        if (index < this.Stack.length) {
          location.href = this.Stack[index + 1];
        } else {
          location.reload();
        }
      }
    }]);

    return History;
  }();

  var FRouter =
  /*#__PURE__*/
  function () {
    function FRouter(options) {
      _classCallCheck(this, FRouter);

      this.routeMap = options.routes;
    }

    _createClass(FRouter, [{
      key: "initHistory",
      value: function initHistory() {
        this.history.initHistory();
      }
    }, {
      key: "push",
      value: function push(url) {
        this.history.push(url);
      }
    }, {
      key: "back",
      value: function back() {
        this.history.back();
      }
    }, {
      key: "forward",
      value: function forward() {
        this.history.forward();
      }
    }, {
      key: "currentHash",
      get: function get() {
        var href = window.location.href;
        var index = href.indexOf('#');

        if (index < 0) {
          return '';
        }

        return href.slice(index + 1);
      }
    }]);

    return FRouter;
  }();

  FRouter.install = install;
  FRotuer.prototype.history = new History(FRouter.prototype);

  return FRouter;

}));
//# sourceMappingURL=FRouter.umd.js.map
