exports.id = 0;
exports.modules = {

/***/ "./src/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_css__ = __webpack_require__("./src/App.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__App_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Paper__ = __webpack_require__("material-ui/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Paper__);
var _jsxFileName = '/home/phuyghe/Work/mc2/marvel-mern-ssr/src/App.js';






var styles = function styles(theme) {
  return {
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      margin: theme.spacing.unit * 3
    })
  };
};

var App = function App(_ref) {
  var classes = _ref.classes;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Paper___default.a, { className: classes.root, elevation: 4, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    })
  );
};

App.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(App));

/***/ }),

/***/ "./src/components/characters/Character.jsx":
false,

/***/ "./src/components/characters/CharactersContainer.jsx":
false,

/***/ "./src/components/characters/CharactersList.jsx":
false,

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_weak_map__ = __webpack_require__("babel-runtime/core-js/weak-map");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_weak_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_weak_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("./src/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__("mongoose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cors__ = __webpack_require__("cors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_cookie_parser__ = __webpack_require__("cookie-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__server_api_routes_index_routes__ = __webpack_require__("./src/server/api/routes/index.routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme__ = __webpack_require__("./src/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles__ = __webpack_require__("./src/styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_jss__ = __webpack_require__("react-jss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config__ = __webpack_require__("./src/config.js");

var _jsxFileName = '/home/phuyghe/Work/mc2/marvel-mern-ssr/src/server.js';


//Server






//SSR









// Set native promises as mongoose promise
__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.Promise = global.Promise;

// MongoDB Connection
__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_14__config__["a" /* default */].mongoURL, function (error) {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

var assets = __webpack_require__("./build/assets.json");

var server = __WEBPACK_IMPORTED_MODULE_3_express___default()();

server.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_5_cors___default()({ origin: true })).use(__WEBPACK_IMPORTED_MODULE_6_body_parser___default.a.json()).use(__WEBPACK_IMPORTED_MODULE_6_body_parser___default.a.urlencoded({ extended: true })).use(__WEBPACK_IMPORTED_MODULE_7_cookie_parser___default()()).use('/api', __WEBPACK_IMPORTED_MODULE_8__server_api_routes_index_routes__["a" /* default */]).use(__WEBPACK_IMPORTED_MODULE_3_express___default.a.static("/home/phuyghe/Work/mc2/marvel-mern-ssr/public")).get('/*', function (req, res) {
  // This is needed in order to deduplicate the injection of CSS in the page.
  var sheetsManager = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_weak_map___default.a();
  // This is needed in order to inject the critical CSS.
  var sheetsRegistry = new __WEBPACK_IMPORTED_MODULE_11_react_jss__["SheetsRegistry"]();
  var markup = Object(__WEBPACK_IMPORTED_MODULE_13_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_11_react_jss__["JssProvider"],
    { registry: sheetsRegistry, jss: __WEBPACK_IMPORTED_MODULE_10__styles__["a" /* default */], __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_12_material_ui_styles__["MuiThemeProvider"],
      { sheetsManager: sheetsManager, theme: __WEBPACK_IMPORTED_MODULE_9__theme__["a" /* default */], __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })
    )
  ));
  var css = sheetsRegistry.toString();
  res.send('<!doctype html>\n    <html lang="en">\n    <head>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta charSet=\'utf-8\' />\n        <title>Marvel Test</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500">\n        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">\n        ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n        ' + (css ? '<style id=\'jss-ssr\'>' + css + '</style>' : '') + '\n         ' + ( false ? '<script src="' + assets.client.js + '" defer></script>' : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n    </head>\n    <body>\n        <div id="root">' + markup + '</div>\n    </body>\n</html>');
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/services/MarvelAPI.js":
false,

/***/ "./src/services/callAPI.js":
false,

/***/ "axios":
false,

/***/ "babel-runtime/core-js/object/get-prototype-of":
false,

/***/ "babel-runtime/core-js/object/values":
false,

/***/ "babel-runtime/helpers/inherits":
false,

/***/ "babel-runtime/helpers/possibleConstructorReturn":
false,

/***/ "material-ui/Avatar":
false,

/***/ "material-ui/Icon":
false,

/***/ "material-ui/IconButton":
false,

/***/ "material-ui/List":
false,

/***/ "material-ui/Progress":
false,

/***/ "material-ui/Tabs":
false,

/***/ "material-ui/Typography":
false,

/***/ "md5":
false,

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

};
//# sourceMappingURL=0.c48834adb0ed2ca163b4.hot-update.js.map