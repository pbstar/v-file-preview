/******/ (function () { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function () {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function (exports, definition) {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
}
        /******/
}
      /******/
};
    /******/
}();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function () {
/******/ 		__webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
    /******/
}();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function () {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function (exports) {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
    /******/
}();
/******/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function () {
/******/ 		__webpack_require__.p = "";
    /******/
}();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // ESM COMPAT FLAG
  __webpack_require__.r(__webpack_exports__);

  // EXPORTS
  __webpack_require__.d(__webpack_exports__, {
    "default": function () { return /* binding */ entry_lib; }
  });

  ;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
  /* eslint-disable no-var */
  // This file is imported into lib/wc client bundles.

  if (typeof window !== 'undefined') {
    var currentScript = window.document.currentScript
    if (false) { var getCurrentScript; }

    var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
    if (src) {
      __webpack_require__.p = src[1] // eslint-disable-line
    }
  }

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

  ;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
  /* globals __VUE_SSR_CONTEXT__ */

  // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
  // This module is a runtime utility for cleaner component module output and will
  // be included in the final webpack user bundle.

  function normalizeComponent(
    scriptExports,
    render,
    staticRenderFns,
    functionalTemplate,
    injectStyles,
    scopeId,
    moduleIdentifier /* server only */,
    shadowMode /* vue-cli only */
  ) {
    // Vue.extend constructor export interop
    var options =
      typeof scriptExports === 'function' ? scriptExports.options : scriptExports

    // render functions
    if (render) {
      options.render = render
      options.staticRenderFns = staticRenderFns
      options._compiled = true
    }

    // functional template
    if (functionalTemplate) {
      options.functional = true
    }

    // scopedId
    if (scopeId) {
      options._scopeId = 'data-v-' + scopeId
    }

    var hook
    if (moduleIdentifier) {
      // server build
      hook = function (context) {
        // 2.3 injection
        context =
          context || // cached call
          (this.$vnode && this.$vnode.ssrContext) || // stateful
          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
        // 2.2 with runInNewContext: true
        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__
        }
        // inject component styles
        if (injectStyles) {
          injectStyles.call(this, context)
        }
        // register component module identifier for async chunk inferrence
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier)
        }
      }
      // used by ssr in case component is cached and beforeCreate
      // never gets called
      options._ssrRegister = hook
    } else if (injectStyles) {
      hook = shadowMode
        ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
        : injectStyles
    }

    if (hook) {
      if (options.functional) {
        // for template-only hot-reload because in that case the render fn doesn't
        // go through the normalizer
        options._injectStyles = hook
        // register for functional component in vue file
        var originalRender = options.render
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context)
          return originalRender(h, context)
        }
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
      }
    }

    return {
      exports: scriptExports,
      options: options
    }
  }

  ;// CONCATENATED MODULE: ./src/package/v-file-preview.vue
  var render, staticRenderFns
  var script = {}


    /* normalize component */
    ;
  var component = normalizeComponent(
    script,
    render,
    staticRenderFns,
    false,
    null,
    null,
    null

  )

/* harmony default export */ var vue_file_preview = (component.exports);
  ;// CONCATENATED MODULE: ./src/package/index.js

  const components = {
    install(Vue) {
      Vue.component('vueFilePreview', vue_file_preview);
    }
  };
/* harmony default export */ var src_package = (components);
  ;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


  module.exports = __webpack_exports__;
  /******/
})()
  ;