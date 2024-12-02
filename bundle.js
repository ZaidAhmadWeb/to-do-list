/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: Arial, sans-serif;\n  display: flex;\n\n  margin: 0;\n  padding: 0;\n}\n\n@media (max-width:600px){\nbody{\nflex-direction: column;\n}\n}\n\n#sidecontent {\n  position: relative;\n  width: 20%;\n  background-color: #3f3737;\n  /* border-right: 1px solid #ccc; */\n  padding: 20px;\n  height: 100vh;\n}\n\n@media (max-width:600px){\n  #sidecontent{\n    height: auto;\n  }\n}\n\n.project-item {\n  padding: 10px;\n  margin-bottom: 5px;\n  background-color: #4d4242;\n  color: white;\n  font-size: 20px;\n  font-weight: bolder;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.project-item:hover {\n  background-color: #463b3b;\n}\n\n#maincontent {\n  padding-top: 20px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #161515;\n}\n\n.todo-item {\n  width: 95%;\n  padding: 15px;\n  margin-bottom: 10px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background-color: #f9f9f9;\n}\n\n.todo-item.high {\n  background-color: #dc3545; /* Red */\n}\n\n/* Priority: Medium */\n.todo-item.medium {\n  background-color: #ffc107; /* Yellow */\n  color: #000;\n}\n\n/* Priority: Low */\n.todo-item.low {\n  background-color: #28a745; /* Green */\n}\n\n.todo-item h3 {\n  margin: 0;\n  font-size: 1.6em;\n  color: #333;\n}\n\n.todo-item p {\n  margin: 5px 0;\n  color: #555;\n}\n\n.add-todo-btn {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  display: block;\n  width: 50px;\n  height: 50px;\n  margin-bottom: 20px;\n  background-color: #28a745;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  font-size: 2em;\n  text-align: center;\n  line-height: 45px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.add-todo-btn:hover {\n  background-color: #218838;\n}\n\n.add-project-btn {\n  position: fixed;\n  bottom: 20px;\n\n  left: 20px;\n  display: block;\n  width: 50px;\n  height: 50px;\n  margin-bottom: 20px;\n  background-color: #28a745;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  font-size: 2em;\n  text-align: center;\n  line-height: 45px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.add-project-btn:hover {\n  background-color: #218838;\n}\n\n\n/* Modal background */\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n/* Modal content box */\n.modal-content {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  width: 300px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n/* Form inputs and buttons */\n.modal-content input, .modal-content textarea, .modal-content select, .modal-content button {\n  display: block;\n  margin: 10px 0;\n  padding: 8px;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n}\n\n/* Save button */\n.save-btn {\n  background-color: #28a745;\n  color: white;\n  border: none;\n  cursor: pointer;\n}\n\n.save-btn:hover {\n  background-color: #218838;\n}\n\n/* Cancel button */\n.cancel-btn {\n  background-color: #dc3545;\n  color: white;\n  border: none;\n  cursor: pointer;\n}\n\n.cancel-btn:hover {\n  background-color: #c82333;\n}\n\n\n/* Edit and Delete buttons */\n.todo-item button {\n  margin-top: 10px;\n  margin-right: 5px;\n  padding: 5px 10px;\n  cursor: pointer;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n}\n\n/* Edit button style */\n.edit-btn {\n  background-color: #ffc107;\n  color: white;\n}\n\n.edit-btn:hover {\n  background-color: #e0a800;\n}\n\n/* Delete button style */\n.delete-btn {\n  background-color: #dc3545;\n  color: white;\n}\n\n.delete-project-btn {\n  color: white;\n}\n\n.delete-btn:hover {\n  background-color: #c82333;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nfunction Todo(title, description, dueDate, priority, notes = []) {\n    let completed = false;\n    function toggleComplete() {\n        completed = !completed;\n    }\n    return { title, description, dueDate, priority, notes,get completed(){ return completed; }, set completed(value) { completed = value; }, toggleComplete };\n}\n\n\n\nfunction Project(name) {\n    let todos = [];\n\n    function addTodo(todo) {\n        todos.push(todo);\n    }\n\n    function removeTodo(todoIndex) {\n        todos.splice(todoIndex, 1);\n    }\n\n    return {\n        name,\n        get todos() {\n            return todos;\n        },\n        addTodo,\n        removeTodo\n    };\n}\n\n\n\nconst newproject = Project(\"joining gym\");\n\n\nlet projects = [];\n// Utility to save projects and todos to localStorage\nfunction saveToLocalStorage() {\n    const projectsData = projects.map(project => {\n        return {\n            name: project.name,\n            todos: project.todos.map(todo => ({\n                title: todo.title,\n                description: todo.description,\n                dueDate: todo.dueDate,\n                priority: todo.priority,\n                notes: todo.notes,\n                completed: todo.completed,\n            }))\n        };\n    });\n    localStorage.setItem('projects', JSON.stringify(projectsData));\n}\n\n\n\n// Load projects from localStorage\nfunction loadFromLocalStorage() {\n    const storedProjects = localStorage.getItem('projects');\n    if (storedProjects) {\n        const parsedProjects = JSON.parse(storedProjects);\n        parsedProjects.forEach(projectData => {\n            const project = Project(projectData.name);\n            projectData.todos.forEach(todoData => {\n                const todo = Todo(todoData.title, todoData.description, todoData.dueDate, todoData.priority, todoData.notes);\n                todo.completed = todoData.completed; // Restore the completed status\n                project.addTodo(todo);\n            });\n            projects.push(project);\n        });\n    } else {\n        const initialProject = Project(\"joining gym\");\n        const todo1 = Todo(\"go to gym\", \"I am going to gym every Saturday\", \"12/12/2024\", \"High\", [\"take water\", \"take pre-gym\", \"take towel along\"]);\n        const todo2 = Todo(\"go to walk\", \"Walk every Saturday\", \"12/12/2024\", \"Medium\", [\"take water\", \"take pre-gym\", \"take towel along\"]);\n        initialProject.addTodo(todo1);\n        initialProject.addTodo(todo2);\n        projects.push(initialProject);\n        saveToLocalStorage(); // Save initial data to localStorage\n    }\n}\n\n// Initialize projects from localStorage when page loads\nloadFromLocalStorage();\n\n// Function to render todos\nfunction renderTodos(todos) {\n    const mainContent = document.getElementById('maincontent');\n    mainContent.innerHTML = '';\n\n    const addTodoButton = document.createElement('button');\n    addTodoButton.id = 'add-todo-btn';\n    addTodoButton.textContent = '+';\n    addTodoButton.title = 'Add New Todo';\n    addTodoButton.className = 'add-todo-btn';\n\n    addTodoButton.addEventListener('click', () => {\n        if (currentProject) {\n            const modal = document.createElement('div');\n            modal.className = 'modal';\n\n            const modalContent = document.createElement('div');\n            modalContent.className = 'modal-content';\n\n            const titleInput = document.createElement('input');\n            titleInput.type = 'text';\n            titleInput.placeholder = 'Enter Todo Title';\n            titleInput.required = true;\n\n            const descriptionInput = document.createElement('textarea');\n            descriptionInput.placeholder = 'Enter Todo Description';\n            descriptionInput.required = true;\n\n            const dateInput = document.createElement('input');\n            dateInput.type = 'date';\n            dateInput.required = true;\n\n            const prioritySelect = document.createElement('select');\n            const priorities = ['High', 'Medium', 'Low'];\n            priorities.forEach(priority => {\n                const option = document.createElement('option');\n                option.value = priority;\n                option.textContent = priority;\n                prioritySelect.appendChild(option);\n            });\n\n            const saveButton = document.createElement('button');\n            saveButton.textContent = 'Save';\n            saveButton.className = 'save-btn';\n\n            const cancelButton = document.createElement('button');\n            cancelButton.textContent = 'Cancel';\n            cancelButton.className = 'cancel-btn';\n\n            modalContent.appendChild(titleInput);\n            modalContent.appendChild(descriptionInput);\n            modalContent.appendChild(dateInput);\n            modalContent.appendChild(prioritySelect);\n            modalContent.appendChild(saveButton);\n            modalContent.appendChild(cancelButton);\n\n            modal.appendChild(modalContent);\n            document.body.appendChild(modal);\n\n            saveButton.addEventListener('click', () => {\n                const title = titleInput.value.trim();\n                const description = descriptionInput.value.trim();\n                const dueDate = dateInput.value.trim();\n                const priority = prioritySelect.value;\n\n                if (title && description && dueDate && priority) {\n                    const newTodo = Todo(title, description, dueDate, priority);\n                    currentProject.addTodo(newTodo);\n                    renderTodos(currentProject.todos);\n                    saveToLocalStorage();\n                    document.body.removeChild(modal);\n                } else {\n                    alert('All fields are required to create a todo item.');\n                }\n            });\n\n            cancelButton.addEventListener('click', () => {\n                document.body.removeChild(modal);\n            });\n        } else {\n            alert('No project selected!');\n        }\n    });\n\n    mainContent.appendChild(addTodoButton);\n\n    todos.forEach((todo, index) => {\n        const todoElement = document.createElement('div');\n        todoElement.className = `todo-item ${todo.priority.toLowerCase()}`;\n        todoElement.innerHTML = `\n            <h3>${todo.title}</h3>\n            <p>${todo.description}</p>\n            <p>Due Date: ${todo.dueDate}</p>\n            <p>Priority: ${todo.priority}</p>\n            <button class=\"edit-btn\">Edit</button>\n            <button class=\"delete-btn\">Delete</button>\n        `;\n\n        const editButton = todoElement.querySelector('.edit-btn');\n        editButton.addEventListener('click', () => {\n            const modal = document.createElement('div');\n            modal.className = 'modal';\n            const modalContent = document.createElement('div');\n            modalContent.className = 'modal-content';\n\n            const titleInput = document.createElement('input');\n            titleInput.type = 'text';\n            titleInput.value = todo.title;\n\n            const descriptionInput = document.createElement('textarea');\n            descriptionInput.value = todo.description;\n\n            const dateInput = document.createElement('input');\n            dateInput.type = 'date';\n            dateInput.value = todo.dueDate;\n\n            const prioritySelect = document.createElement('select');\n            const priorities = ['High', 'Medium', 'Low'];\n            priorities.forEach(priority => {\n                const option = document.createElement('option');\n                option.value = priority;\n                option.textContent = priority;\n                if (priority === todo.priority) option.selected = true;\n                prioritySelect.appendChild(option);\n            });\n\n            const saveButton = document.createElement('button');\n            saveButton.textContent = 'Save';\n\n            const cancelButton = document.createElement('button');\n            cancelButton.textContent = 'Cancel';\n\n            modalContent.appendChild(titleInput);\n            modalContent.appendChild(descriptionInput);\n            modalContent.appendChild(dateInput);\n            modalContent.appendChild(prioritySelect);\n            modalContent.appendChild(saveButton);\n            modalContent.appendChild(cancelButton);\n\n            modal.appendChild(modalContent);\n            document.body.appendChild(modal);\n\n            saveButton.addEventListener('click', () => {\n                todo.title = titleInput.value.trim();\n                todo.description = descriptionInput.value.trim();\n                todo.dueDate = dateInput.value.trim();\n                todo.priority = prioritySelect.value;\n\n                renderTodos(currentProject.todos);\n                saveToLocalStorage();\n                document.body.removeChild(modal);\n            });\n\n            cancelButton.addEventListener('click', () => {\n                document.body.removeChild(modal);\n            });\n        });\n\n        const deleteButton = todoElement.querySelector('.delete-btn');\n        deleteButton.addEventListener('click', () => {\n            currentProject.removeTodo(index);\n            renderTodos(currentProject.todos);\n            saveToLocalStorage();\n        });\n\n        mainContent.appendChild(todoElement);\n    });\n}\n\n// Render the projects and handle add/edit/delete actions\nfunction renderProjects(projects) {\n    const sideContent = document.getElementById('sidecontent');\n    sideContent.innerHTML = '';\n\n    const addProjectButton = document.createElement('button');\n    addProjectButton.id = 'add-project-btn';\n    addProjectButton.textContent = '+';\n    addProjectButton.title = 'Add New Project';\n    addProjectButton.className = 'add-project-btn';\n\n    addProjectButton.addEventListener('click', () => {\n        const modal = document.createElement('div');\n        modal.className = 'modal';\n\n        const modalContent = document.createElement('div');\n        modalContent.className = 'modal-content';\n\n        const nameInput = document.createElement('input');\n        nameInput.type = 'text';\n        nameInput.placeholder = 'Enter Project Name';\n        nameInput.required = true;\n\n        const saveButton = document.createElement('button');\n        saveButton.textContent = 'Save';\n        saveButton.className = 'save-btn';\n\n        const cancelButton = document.createElement('button');\n        cancelButton.textContent = 'Cancel';\n        cancelButton.className = 'cancel-btn';\n\n        modalContent.appendChild(nameInput);\n        modalContent.appendChild(saveButton);\n        modalContent.appendChild(cancelButton);\n\n        modal.appendChild(modalContent);\n        document.body.appendChild(modal);\n\n        saveButton.addEventListener('click', () => {\n            const name = nameInput.value.trim();\n            if (name) {\n                const newProject = Project(name);\n                projects.push(newProject);\n                renderProjects(projects);\n                saveToLocalStorage();\n                document.body.removeChild(modal);\n            } else {\n                alert('Project name is required!');\n            }\n        });\n\n        cancelButton.addEventListener('click', () => {\n            document.body.removeChild(modal);\n        });\n    });\n\n    sideContent.appendChild(addProjectButton);\n\n    projects.forEach((project, index) => {\n        const projectElement = document.createElement('div');\n        projectElement.className = 'project-item';\n\n        projectElement.innerHTML = `\n            <h3>${project.name}</h3>\n            <button class=\"delete-project-btn\">🗑️</button>\n        `;\n\n        const deleteProjectButton = projectElement.querySelector('.delete-project-btn');\n        deleteProjectButton.addEventListener('click', () => {\n            projects.splice(index, 1); // Remove project\n            renderProjects(projects);\n            saveToLocalStorage();\n        });\n\n        projectElement.addEventListener('click', () => {\n            currentProject = project;\n            renderTodos(project.todos);\n        });\n\n        sideContent.appendChild(projectElement);\n    });\n}\n\n// Variable to store the current selected project\nlet currentProject = null;\n\n// Initial render of projects\nrenderProjects(projects);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;