"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var latestItemFrom = function latestItemFrom(array) {
  return array[array.length - 1];
};

var _default = {
  created: function created() {
    var _this = this;

    var importAndUse = this.$options.importAndUse;

    if (importAndUse) {
      importAndUse.forEach(function (path) {
        var pathArray = path.split('/');
        var componentName = latestItemFrom(pathArray);
        componentName = componentName.replace(/.vue/gi, '');
        path = path[0] !== '/' ? '/' + path : path;
        var promise = import('@/components' + path + '.vue');

        _this.$options.components[componentName] = function () {
          return promise;
        };
      });
    }
  }
};
exports["default"] = _default;