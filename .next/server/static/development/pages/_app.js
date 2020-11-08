module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var styles_global_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/global.styles */ \"./src/styles/global.styles.ts\");\nvar _jsxFileName = \"/home/guga/React-avancado/landing-page/src/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"theme-color\",\n    content: \"#06092B\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"/img/icon-512.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n    rel: \"apple-touch-icon\",\n    href: \"/img/icon-512.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_2__[\"NextSeo\"], {\n    title: \"React Turbinado - Crie aplica\\xE7\\xF5es reais com NextJS, GraphQL e mais.\",\n    description: \"Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!\",\n    canonical: \"https://reactavancado.com.br/\",\n    openGraph: {\n      url: 'https://reactavancado.com.br/',\n      title: 'React Avançado - Crie aplicações reais com NextJS, GraphQL e mais.',\n      description: 'Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!',\n      images: [{\n        url: 'https://reactavancado.com.br/img/cover.png'\n      }],\n      site_name: 'React Avançado',\n      locale: 'pt_BR'\n    },\n    twitter: {\n      handle: '@Willian_justen',\n      site: '@site',\n      cardType: 'summary_large_image'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styles_global_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJzaXRlX25hbWUiLCJsb2NhbGUiLCJoYW5kbGUiLCJzaXRlIiwiY2FyZFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBd0M7QUFDbEQsc0JBQ0UsMkRBQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUVDLG9EQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0U7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUMsU0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLGVBRUU7QUFBTSxPQUFHLEVBQUMsZUFBVjtBQUEwQixRQUFJLEVBQUMsbUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixlQUdFO0FBQU0sT0FBRyxFQUFDLGtCQUFWO0FBQTZCLFFBQUksRUFBQyxtQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsZUFNRSwyREFBQyxnREFBRDtBQUNFLFNBQUssRUFBQywyRUFEUjtBQUVFLGVBQVcsRUFBQyx1SkFGZDtBQUdFLGFBQVMsRUFBQywrQkFIWjtBQUlFLGFBQVMsRUFBRTtBQUNUQyxTQUFHLEVBQUUsK0JBREk7QUFFVEMsV0FBSyxFQUNILG9FQUhPO0FBSVRDLGlCQUFXLEVBQ1QsdUpBTE87QUFNVEMsWUFBTSxFQUFFLENBQUM7QUFBRUgsV0FBRyxFQUFFO0FBQVAsT0FBRCxDQU5DO0FBT1RJLGVBQVMsRUFBRSxnQkFQRjtBQVFUQyxZQUFNLEVBQUU7QUFSQyxLQUpiO0FBY0UsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxpQkFERDtBQUVQQyxVQUFJLEVBQUUsT0FGQztBQUdQQyxjQUFRLEVBQUU7QUFISCxLQWRYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixlQTBCRSwyREFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJGLGVBMkJFLDJEQUFDLFNBQUQsZUFBZVYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBM0JGLENBREY7QUErQkQsQ0FoQ0Q7O0FBa0NlRixrRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbydcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB0aGVtZSBmcm9tICdzdHlsZXMvdGhlbWUnXG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSAnc3R5bGVzL2dsb2JhbC5zdHlsZXMnXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzA2MDkyQlwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2ltZy9pY29uLTUxMi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9pbWcvaWNvbi01MTIucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOZXh0U2VvXG4gICAgICAgIHRpdGxlPVwiUmVhY3QgVHVyYmluYWRvIC0gQ3JpZSBhcGxpY2HDp8O1ZXMgcmVhaXMgY29tIE5leHRKUywgR3JhcGhRTCBlIG1haXMuXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJBcHJlbmRhIGEgY3JpYXIgdW0gRWNvbW1lcmNlIGNvbXBsZXRvLCBpbmRvIGRvIEJhY2tlbmQgYW8gRnJvbnRlbmQgdXRpbGl6YW5kbyB0ZWNub2xvZ2lhcyBjb21vIFJlYWN0SlMsIE5leHRKUywgU3RyYXBpLCBHcmFwaFFMLCBBcG9sbG8gZSBtdWl0byBtYWlzIVwiXG4gICAgICAgIGNhbm9uaWNhbD1cImh0dHBzOi8vcmVhY3RhdmFuY2Fkby5jb20uYnIvXCJcbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9yZWFjdGF2YW5jYWRvLmNvbS5ici8nLFxuICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgJ1JlYWN0IEF2YW7Dp2FkbyAtIENyaWUgYXBsaWNhw6fDtWVzIHJlYWlzIGNvbSBOZXh0SlMsIEdyYXBoUUwgZSBtYWlzLicsXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnQXByZW5kYSBhIGNyaWFyIHVtIEVjb21tZXJjZSBjb21wbGV0bywgaW5kbyBkbyBCYWNrZW5kIGFvIEZyb250ZW5kIHV0aWxpemFuZG8gdGVjbm9sb2dpYXMgY29tbyBSZWFjdEpTLCBOZXh0SlMsIFN0cmFwaSwgR3JhcGhRTCwgQXBvbGxvIGUgbXVpdG8gbWFpcyEnLFxuICAgICAgICAgIGltYWdlczogW3sgdXJsOiAnaHR0cHM6Ly9yZWFjdGF2YW5jYWRvLmNvbS5ici9pbWcvY292ZXIucG5nJyB9XSxcbiAgICAgICAgICBzaXRlX25hbWU6ICdSZWFjdCBBdmFuw6dhZG8nLFxuICAgICAgICAgIGxvY2FsZTogJ3B0X0JSJ1xuICAgICAgICB9fVxuICAgICAgICB0d2l0dGVyPXt7XG4gICAgICAgICAgaGFuZGxlOiAnQFdpbGxpYW5fanVzdGVuJyxcbiAgICAgICAgICBzaXRlOiAnQHNpdGUnLFxuICAgICAgICAgIGNhcmRUeXBlOiAnc3VtbWFyeV9sYXJnZV9pbWFnZSdcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.styles.ts":
/*!*************************************!*\
  !*** ./src/styles/global.styles.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  @font-face {\n    font-family: 'Poppins';\n    src: url('/fonts/poppins-v9-latin-regular.woff2');\n    font-weight: 400;\n    font-style: normal;\n    font-display: swap;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n    vertical-align: baseline;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  ${({\n  theme\n}) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"html{font-family:\", \";font-size:62.5%;scroll-behavior:smooth;}body{background-color:\", \";color:\", \";font-size:\", \";}\"], theme.font.family, theme.colors.mainBg, theme.colors.white, theme.font.sizes.small)}\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zdHlsZXMudHM/N2EyNCJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJjc3MiLCJmb250IiwiZmFtaWx5IiwiY29sb3JzIiwibWFpbkJnIiwid2hpdGUiLCJzaXplcyIsInNtYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJsQyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQyw2REFBZiwySEFFaUJELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxNQUY1QixFQVFzQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLE1BUm5DLEVBU1dMLEtBQUssQ0FBQ0ksTUFBTixDQUFhRSxLQVR4QixFQVVlTixLQUFLLENBQUNFLElBQU4sQ0FBV0ssS0FBWCxDQUFpQkMsS0FWaEMsQ0FZQTtDQS9CSjtBQWtDZVYsMEVBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC5zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSwgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgc3JjOiB1cmwoJy9mb250cy9wb3BwaW5zLXY5LWxhdGluLXJlZ3VsYXIud29mZjInKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIH1cblxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuXG4gICR7KHsgdGhlbWUgfSkgPT4gY3NzYFxuICAgIGh0bWwge1xuICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udC5mYW1pbHl9O1xuICAgICAgZm9udC1zaXplOiA2Mi41JTtcbiAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgIH1cblxuICAgIGJvZHkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubWFpbkJnfTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5zbWFsbH07XG4gICAgfVxuICBgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/global.styles.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  grid: {\n    container: '130rem',\n    gutter: '3.2rem'\n  },\n  border: {\n    radius: '0.4rem'\n  },\n  font: {\n    family: \"Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\",\n    bold: 600,\n    sizes: {\n      xxsmall: '1.4rem',\n      xsmall: '1.6rem',\n      small: '1.8rem',\n      medium: '2.2rem',\n      large: '2.6rem',\n      xlarge: '3.4rem',\n      xxlarge: '5.2rem'\n    }\n  },\n  colors: {\n    primary: '#F231A5',\n    primaryHover: '#E20E8D',\n    secondary: '#3CD3C1',\n    mainBg: '#030518',\n    boxBg: '#FAFAFA',\n    texts: '#030517',\n    white: '#FFFFFF',\n    black: '#000000',\n    gray: '#7B7373'\n  },\n  spacings: {\n    xxsmall: '0.8rem',\n    xsmall: '1.6rem',\n    small: '2.4rem',\n    medium: '3.2rem',\n    large: '6.0rem',\n    xlarge: '6.4rem',\n    xxlarge: '12.8rem'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzk0Y2UiXSwibmFtZXMiOlsiZ3JpZCIsImNvbnRhaW5lciIsImd1dHRlciIsImJvcmRlciIsInJhZGl1cyIsImZvbnQiLCJmYW1pbHkiLCJib2xkIiwic2l6ZXMiLCJ4eHNtYWxsIiwieHNtYWxsIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsInhsYXJnZSIsInh4bGFyZ2UiLCJjb2xvcnMiLCJwcmltYXJ5IiwicHJpbWFyeUhvdmVyIiwic2Vjb25kYXJ5IiwibWFpbkJnIiwiYm94QmciLCJ0ZXh0cyIsIndoaXRlIiwiYmxhY2siLCJncmF5Iiwic3BhY2luZ3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDYkEsTUFBSSxFQUFFO0FBQ0pDLGFBQVMsRUFBRSxRQURQO0FBRUpDLFVBQU0sRUFBRTtBQUZKLEdBRE87QUFLYkMsUUFBTSxFQUFFO0FBQ05DLFVBQU0sRUFBRTtBQURGLEdBTEs7QUFRYkMsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFDSixzSUFGRTtBQUdKQyxRQUFJLEVBQUUsR0FIRjtBQUlKQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLFFBREo7QUFFTEMsWUFBTSxFQUFFLFFBRkg7QUFHTEMsV0FBSyxFQUFFLFFBSEY7QUFJTEMsWUFBTSxFQUFFLFFBSkg7QUFLTEMsV0FBSyxFQUFFLFFBTEY7QUFNTEMsWUFBTSxFQUFFLFFBTkg7QUFPTEMsYUFBTyxFQUFFO0FBUEo7QUFKSCxHQVJPO0FBc0JiQyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLFNBREg7QUFFTkMsZ0JBQVksRUFBRSxTQUZSO0FBR05DLGFBQVMsRUFBRSxTQUhMO0FBSU5DLFVBQU0sRUFBRSxTQUpGO0FBS05DLFNBQUssRUFBRSxTQUxEO0FBTU5DLFNBQUssRUFBRSxTQU5EO0FBT05DLFNBQUssRUFBRSxTQVBEO0FBUU5DLFNBQUssRUFBRSxTQVJEO0FBU05DLFFBQUksRUFBRTtBQVRBLEdBdEJLO0FBaUNiQyxVQUFRLEVBQUU7QUFDUmpCLFdBQU8sRUFBRSxRQUREO0FBRVJDLFVBQU0sRUFBRSxRQUZBO0FBR1JDLFNBQUssRUFBRSxRQUhDO0FBSVJDLFVBQU0sRUFBRSxRQUpBO0FBS1JDLFNBQUssRUFBRSxRQUxDO0FBTVJDLFVBQU0sRUFBRSxRQU5BO0FBT1JDLFdBQU8sRUFBRTtBQVBEO0FBakNHLENBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBncmlkOiB7XG4gICAgY29udGFpbmVyOiAnMTMwcmVtJyxcbiAgICBndXR0ZXI6ICczLjJyZW0nXG4gIH0sXG4gIGJvcmRlcjoge1xuICAgIHJhZGl1czogJzAuNHJlbSdcbiAgfSxcbiAgZm9udDoge1xuICAgIGZhbWlseTpcbiAgICAgIFwiUG9wcGlucywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXCIsXG4gICAgYm9sZDogNjAwLFxuICAgIHNpemVzOiB7XG4gICAgICB4eHNtYWxsOiAnMS40cmVtJyxcbiAgICAgIHhzbWFsbDogJzEuNnJlbScsXG4gICAgICBzbWFsbDogJzEuOHJlbScsXG4gICAgICBtZWRpdW06ICcyLjJyZW0nLFxuICAgICAgbGFyZ2U6ICcyLjZyZW0nLFxuICAgICAgeGxhcmdlOiAnMy40cmVtJyxcbiAgICAgIHh4bGFyZ2U6ICc1LjJyZW0nXG4gICAgfVxuICB9LFxuICBjb2xvcnM6IHtcbiAgICBwcmltYXJ5OiAnI0YyMzFBNScsXG4gICAgcHJpbWFyeUhvdmVyOiAnI0UyMEU4RCcsXG4gICAgc2Vjb25kYXJ5OiAnIzNDRDNDMScsXG4gICAgbWFpbkJnOiAnIzAzMDUxOCcsXG4gICAgYm94Qmc6ICcjRkFGQUZBJyxcbiAgICB0ZXh0czogJyMwMzA1MTcnLFxuICAgIHdoaXRlOiAnI0ZGRkZGRicsXG4gICAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgICBncmF5OiAnIzdCNzM3MydcbiAgfSxcbiAgc3BhY2luZ3M6IHtcbiAgICB4eHNtYWxsOiAnMC44cmVtJyxcbiAgICB4c21hbGw6ICcxLjZyZW0nLFxuICAgIHNtYWxsOiAnMi40cmVtJyxcbiAgICBtZWRpdW06ICczLjJyZW0nLFxuICAgIGxhcmdlOiAnNi4wcmVtJyxcbiAgICB4bGFyZ2U6ICc2LjRyZW0nLFxuICAgIHh4bGFyZ2U6ICcxMi44cmVtJ1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-seo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiPzJjYmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1zZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-seo\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });