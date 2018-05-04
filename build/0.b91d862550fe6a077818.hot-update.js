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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_characters_CharactersContainer__ = __webpack_require__("./src/components/characters/CharactersContainer.jsx");
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
        lineNumber: 17
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_material_ui_Paper___default.a,
      { className: classes.root, elevation: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_characters_CharactersContainer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })
    )
  );
};

App.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(App));

/***/ }),

/***/ "./src/components/characters/CharactersContainer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Paper__ = __webpack_require__("material-ui/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Tabs__ = __webpack_require__("material-ui/Tabs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_colors_blue__ = __webpack_require__("material-ui/colors/blue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_colors_blue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_colors_blue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Progress__ = __webpack_require__("material-ui/Progress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CharactersList__ = __webpack_require__("./src/components/characters/CharactersList.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_MarvelAPI__ = __webpack_require__("./src/services/MarvelAPI.js");





var _jsxFileName = "/home/phuyghe/Work/mc2/marvel-mern-ssr/src/components/characters/CharactersContainer.jsx";














function TabContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_7_material_ui_Paper___default.a,
    { elevation: 4, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    },
    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default.a,
      { component: "div", style: { padding: 8 * 3 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      props.children
    )
  );
}

TabContainer.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node.isRequired
};

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      width: "50%",
      margin: "0 auto",
      marginTop: theme.spacing.unit * 3,
      textAlign: 'center'
    },
    tabs: {
      backgroundColor: __WEBPACK_IMPORTED_MODULE_10_material_ui_colors_blue___default.a[400]
    },
    loader: {}
  };
};

var CharactersContainer = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(CharactersContainer, _Component);

  function CharactersContainer(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, CharactersContainer);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CharactersContainer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(CharactersContainer)).call(this, props));

    _this.handleChange = function (event, tabIndex) {
      _this.setState({ tabIndex: tabIndex });
    };

    _this.state = {
      tabIndex: 0,
      characters: []
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(CharactersContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      return this.state.characters.length > 0 ? function () {
        return;
      } : this.setCharactersData();
    }
  }, {
    key: "setCharactersData",
    value: function setCharactersData() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_14__services_MarvelAPI__["a" /* default */].getEntity("characters").then(function (response) {
        return _this2.setState({ characters: response.data.data.results });
      }).catch(function (err) {
        return alert(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          tabIndex = _state.tabIndex,
          characters = _state.characters;


      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        "div",
        { className: classes.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_material_ui_Tabs___default.a,
          {
            className: classes.tabs,
            value: tabIndex,
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Tabs__["Tab"], { label: "All", __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Tabs__["Tab"], { label: "Favorites", __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          })
        ),
        tabIndex === 0 && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          TabContainer,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            }
          },
          characters.length > 0 ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__CharactersList__["a" /* default */], { data: { characters: characters }, __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          }) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Progress__["CircularProgress"], { className: classes.loader, __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          })
        ),
        tabIndex === 1 && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          TabContainer,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            }
          },
          characters.length > 0 ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__CharactersList__["a" /* default */], { data: { characters: characters }, __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          }) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_Progress__["CircularProgress"], { className: classes.loader, __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            }
          })
        )
      );
    }
  }]);

  return CharactersContainer;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

CharactersContainer.PropTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_12_material_ui_styles__["withStyles"])(styles)(CharactersContainer));

/***/ })

};
//# sourceMappingURL=0.b91d862550fe6a077818.hot-update.js.map