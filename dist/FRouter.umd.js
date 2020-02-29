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
    data: function data() {
      return {};
    },
    render: function render(_, _ref) {
      var parent = _ref.parent,
          data = _ref.data;
      // router-view will be rendered as matched component 
      var hash = parent.$router.currentHash;

      if (hash[0] === '#') {
        hash = hash.split('');
        hash.shift();
        hash = hash.join('');
      }

      var options = {};

      var renderCore = function renderCore() {
        if (typeof parent.$vnode.data._childrenMap === 'undefined') {
          var currentMap = parent.$router.routeMap;
          var matched = [];
          currentMap.forEach(function (item) {
            var index = hash.indexOf(item.path);

            if (index === 0) {
              matched.push(item);
            }
          }); // matched nothing

          if (matched.length === 0) {
            return;
          }

          if (matched[matched.length - 1].redirect) {
            hash = hash.replace(matched[matched.length - 1].path, matched[matched.length - 1].redirect);
            location.hash = '#' + hash;
            return renderCore();
          }

          if (typeof matched[matched.length - 1].children !== 'undefined') {
            data._childrenMap = matched[matched.length - 1].children;
            data._hashChip = matched[matched.length - 1].path;
          }

          options.data = data;
          options.component = matched[matched.length - 1].component;
        } else {
          var _currentMap = parent.$vnode.data._childrenMap;
          var parentHashChip = parent.$vnode.data._hashChip;
          var _matched = [];

          if (parentHashChip[parentHashChip.length - 1] !== '/') {
            parentHashChip += '/';
          }

          _currentMap.forEach(function (item) {
            var index = hash.indexOf(parentHashChip + item.path);

            if (index !== -1) {
              _matched.push(item);
            }
          });

          if (_matched.length === 0) {
            return;
          }

          if (_matched[_matched.length - 1].redirect) {
            hash = hash.replace(_matched[_matched.length - 1].path, _matched[_matched.length - 1].redirect);
            location.hash = '#' + hash;
            return renderCore();
          }

          if (_matched[_matched.length - 1].children) {
            data._childrenMap = _matched[_matched.length - 1].children;
            data._hashChip = _matched[_matched.length - 1].path;
          }

          options.data = data;
          options.component = _matched[_matched.length - 1].component;
        }
      };

      renderCore();
      return _(options.component, options.data);
    }
  };

  var RouterLink = {
    name: 'RouterLink',
    functional: true,
    props: {
      to: {
        type: String,
        required: true
      },
      tag: {
        type: String,
        "default": 'a'
      }
    },
    render: function render(h, _ref) {
      var props = _ref.props,
          data = _ref.data,
          children = _ref.children;
      data.on = {
        click: function click() {
          location.hash = props.to;
        }
      };
      return h(props.tag, data, children);
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
    Vue.component('RouterLink', RouterLink);
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

  window.onhashchange = function () {
    location.reload();
  };

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
        var hash = window.location.hash; // let index = hash.indexOf('#')

        return hash;
      }
    }]);

    return FRouter;
  }();

  FRouter.install = install;
  FRouter.prototype.history = new History(FRouter.prototype);

  return FRouter;

}));
//# sourceMappingURL=FRouter.umd.js.map
