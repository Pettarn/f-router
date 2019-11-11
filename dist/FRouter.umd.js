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
    name: 'RouterView',
    functional: true,
    props: {
      name: {
        type: String,
        "default": 'default'
      }
    },
    render: function render(_, _ref) {
      var parent = _ref.parent,
          data = _ref.data;
      console.log('router-view is normal.');

      var renderCore = function renderCore() {
        // router-view will be rendered as matched component 
        var h = parent.$createElement;
        var hash = parent.$router.currentHash; // the x level routeMap and hash  match

        if (!parent._childrenMap) {
          var currentMap = parent.$router.routeMap;
          console.log(createElement);
          console.log(h);
          console.log(hash);
          console.log(currentMap);
          var matched = [];
          currentMap.forEach(function (item) {
            var index = hash.indexOf(item.path);

            if (index === 0) {
              matched.push(item);
            }
          });
          console.log(matched); // matched nothing

          if (!matched[0]) {
            console.log('rendered nothing.');
            return h();
          }

          if (matched[0].redirect) {
            location.href.replace(matched[0].path, matched[0].redirect);
            return renderCore();
          }

          if (matched[0].children) {
            data._childrenMap = matched[0].children;
            data._hashChip = matched[0].path;
          }

          console.log('rendered something.'); // return h(matched[0].component)

          return h('div', null, "Hello, you're seccessing.");
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
            return renderCore();
          }

          if (_matched[0].children) {
            data._childrenMap = _matched[0].children;
            data._hashChip = _matched[0].path;
          }

          console.log('rendered something.');
          return h(_matched[0].component);
        }
      };

      renderCore();
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
          this._routerRoot = this.$parent && this.$parent._routerRoot || this;
        }
      }
    });
    Object.defineProperty(Vue.prototype, '$router', {
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
    } // get href () {
    // }


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
        console.log('The method currentHash is executed.');
        var hash = window.location.hash;
        var index = hash.indexOf('#');
        console.log(hash);
        console.log(index);

        if (index < 0) {
          return '/';
        }

        return hash.slice(index + 1);
      }
    }]);

    return FRouter;
  }();

  FRouter.install = install;
  FRouter.prototype.history = new History(FRouter.prototype);

  return FRouter;

}));
//# sourceMappingURL=FRouter.umd.js.map
