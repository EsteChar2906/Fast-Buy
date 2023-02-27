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

/***/ "./src/server/app.js":
/*!***************************!*\
  !*** ./src/server/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shared_App_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/App.js */ \"./src/shared/App.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config.js */ \"./src/server/config.js\");\n/* harmony import */ var _routes_produtcs_routes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/produtcs.routes.js */ \"./src/server/routes/produtcs.routes.js\");\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.set('port', _config_js__WEBPACK_IMPORTED_MODULE_7__.PORT);\napp.use(morgan__WEBPACK_IMPORTED_MODULE_5___default()(\"dev\"));\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('public'));\napp.use(function (req, res, next) {\n  res.header('Access-Control-Allow-Origin', _config_js__WEBPACK_IMPORTED_MODULE_7__.DOMINIO);\n  res.header('Access-Control-Allow-Credentials', 'true');\n  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');\n  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');\n  next();\n});\napp.get(\"/\", function (req, res, next) {\n  if (req.url !== \"/api/*\") {\n    var data = \"Estefy\";\n    var html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n      location: req.url,\n      context: {}\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_shared_App_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n    res.send(\"\\n\\t\\t<!DOCTYPE html>\\n\\t\\t<html>\\n\\t\\t    <head>\\n\\t\\t    \\t<meta charset=\\\"utf-8\\\">\\n    \\t\\t\\t<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n\\t\\t       \\t<title>Fast Buy</title>\\n\\t\\t       \\t<link href=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css\\\" rel=\\\"stylesheet\\\" integrity=\\\"sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD\\\" crossorigin=\\\"anonymous\\\">\\n\\t\\t    </head>\\n\\t\\t    <body>\\n\\t\\t       \\t<script src=\\\"/bundle.js\\\" defer></script>\\n\\t\\t    \\t<script src=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js\\\" integrity=\\\"sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN\\\" crossorigin=\\\"anonymous\\\"></script>\\n\\t\\t    \\t<div id=\\\"root\\\" >\".concat(html, \"</div>\\n\\t\\t    </body>\\n\\t\\t</html>\\n\\t\\t\"));\n  } else {\n    next();\n  }\n});\napp.use(\"/api\", _routes_produtcs_routes_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://react-ssr/./src/server/app.js?");

/***/ }),

/***/ "./src/server/config.js":
/*!******************************!*\
  !*** ./src/server/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMINIO\": () => (/* binding */ DOMINIO),\n/* harmony export */   \"MONGO_URL\": () => (/* binding */ MONGO_URL),\n/* harmony export */   \"PORT\": () => (/* binding */ PORT)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)();\nvar PORT = process.env.PORT;\nvar MONGO_URL = process.env.MONGO_URL;\nvar DOMINIO = process.env.DOMINIO;\n\n//# sourceURL=webpack://react-ssr/./src/server/config.js?");

/***/ }),

/***/ "./src/server/controllers/products.controllers.js":
/*!********************************************************!*\
  !*** ./src/server/controllers/products.controllers.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProducts\": () => (/* binding */ getProducts)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_products_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/products.js */ \"./src/server/models/products.js\");\n\n\n\nvar getProducts = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var page, limit, title, category, brand, sort, findProducts, allCategories, allBrands, categories, brands, sortBy, productss, products, total, result;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          page = parseInt(req.query.page) - 1 || 0;\n          limit = parseInt(req.query.limit) || 10;\n          title = req.query.title || \"\";\n          category = req.query.category || \"\";\n          brand = req.query.brand || \"\";\n          sort = req.query.sort || \"\";\n          _context.next = 9;\n          return _models_products_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n        case 9:\n          findProducts = _context.sent;\n          allCategories = findProducts.map(function (e) {\n            return e.category;\n          });\n          allBrands = findProducts.map(function (e) {\n            return e.brand;\n          });\n          categories = allCategories.filter(function (c, index) {\n            return allCategories.indexOf(c) === index;\n          });\n          brands = allBrands.filter(function (b, index) {\n            return allBrands.indexOf(b) === index;\n          });\n          sortBy = {};\n          if (sort === \"asc\") {\n            sortBy[\"price\"] = 1;\n          }\n          if (sort === \"desc\") {\n            sortBy[\"price\"] = -1;\n          }\n          _context.next = 19;\n          return _models_products_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n        case 19:\n          productss = _context.sent;\n          _context.next = 22;\n          return _models_products_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n            title: {\n              $regex: title,\n              $options: \"i\"\n            },\n            brand: {\n              $regex: brand,\n              $options: \"i\"\n            },\n            category: {\n              $regex: category,\n              $options: \"i\"\n            }\n          }).sort(sortBy).skip(page * limit).limit(limit);\n        case 22:\n          products = _context.sent;\n          _context.next = 25;\n          return _models_products_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].countDocuments({\n            title: {\n              $regex: title,\n              $options: \"i\"\n            },\n            category: {\n              $regex: category,\n              $options: \"i\"\n            },\n            brand: {\n              $regex: brand,\n              $options: \"i\"\n            }\n          });\n        case 25:\n          total = _context.sent;\n          result = {\n            total: total,\n            page: page + 1,\n            limit: limit,\n            categories: categories,\n            brands: brands,\n            products: products\n          };\n          res.status(200).json(result);\n          _context.next = 33;\n          break;\n        case 30:\n          _context.prev = 30;\n          _context.t0 = _context[\"catch\"](0);\n          res.status(500).json({\n            message: _context.t0.message\n          });\n        case 33:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 30]]);\n  }));\n  return function getProducts(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://react-ssr/./src/server/controllers/products.controllers.js?");

/***/ }),

/***/ "./src/server/db.js":
/*!**************************!*\
  !*** ./src/server/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.js */ \"./src/server/config.js\");\n\n\n\n\nvar dbConnection = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var db;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return mongoose__WEBPACK_IMPORTED_MODULE_2___default().set('strictQuery', false);\n        case 2:\n          _context.next = 4;\n          return mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_config_js__WEBPACK_IMPORTED_MODULE_3__.MONGO_URL);\n        case 4:\n          db = _context.sent;\n          console.log(\"Using Mongo DB version \".concat(db.version, \" in the port \").concat(db.connection.port));\n        case 6:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function dbConnection() {\n    return _ref.apply(this, arguments);\n  };\n}();\ndbConnection();\n\n//# sourceURL=webpack://react-ssr/./src/server/db.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/server/app.js\");\n/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db.js */ \"./src/server/db.js\");\n\n\nvar main = function main() {\n  _app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('port'), function () {\n    console.log(\"Server is listening on port: \".concat(_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('port')));\n  });\n};\nmain();\n\n//# sourceURL=webpack://react-ssr/./src/server/index.js?");

/***/ }),

/***/ "./src/server/models/products.js":
/*!***************************************!*\
  !*** ./src/server/models/products.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar produtcSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  title: {\n    type: String,\n    trim: true,\n    required: true\n  },\n  image: {\n    type: String,\n    trim: true,\n    required: true\n  },\n  category: {\n    type: String,\n    trim: true,\n    required: true\n  },\n  brand: {\n    type: String,\n    trim: true,\n    required: true\n  },\n  stock: {\n    type: Number,\n    trim: true,\n    required: true\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Products', produtcSchema));\n\n//# sourceURL=webpack://react-ssr/./src/server/models/products.js?");

/***/ }),

/***/ "./src/server/routes/produtcs.routes.js":
/*!**********************************************!*\
  !*** ./src/server/routes/produtcs.routes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_products_controllers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/products.controllers.js */ \"./src/server/controllers/products.controllers.js\");\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/products', _controllers_products_controllers_js__WEBPACK_IMPORTED_MODULE_1__.getProducts);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://react-ssr/./src/server/routes/produtcs.routes.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home.js */ \"./src/shared/pages/Home.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar App = function App(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://react-ssr/./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/components/filters/filterBrand.js":
/*!******************************************************!*\
  !*** ./src/shared/components/filters/filterBrand.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_products_productsContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/products/productsContext.js */ \"./src/shared/context/products/productsContext.js\");\n\n\nvar FilterBrand = function FilterBrand() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_products_productsContext_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    setBrand = _useContext.setBrand,\n    products = _useContext.products;\n  var brands = products.brands;\n  var handleBrand = function handleBrand(e) {\n    e.preventDefault();\n    var brand = e.target.value;\n    setBrand(brand);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-floating-sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"brand\"\n  }, \"Filtrar por marca: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    className: \"form-select-sm\",\n    name: \"brand\",\n    id: \"brand\",\n    onChange: handleBrand\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"\"\n  }, \"All\"), brands && brands.map(function (b, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: b,\n      key: i,\n      name: b\n    }, b);\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterBrand);\n\n//# sourceURL=webpack://react-ssr/./src/shared/components/filters/filterBrand.js?");

/***/ }),

/***/ "./src/shared/components/filters/filterCategory.js":
/*!*********************************************************!*\
  !*** ./src/shared/components/filters/filterCategory.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_products_productsContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/products/productsContext.js */ \"./src/shared/context/products/productsContext.js\");\n\n\nvar FilterCategory = function FilterCategory() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_products_productsContext_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    setCategory = _useContext.setCategory,\n    products = _useContext.products;\n  var categories = products.categories;\n  var handleCategory = function handleCategory(e) {\n    e.preventDefault();\n    var category = e.target.value;\n    setCategory(category);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-floating-sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"categoty\"\n  }, \"Filtrar por categoria: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    className: \"form-select-sm\",\n    name: \"category\",\n    id: \"category\",\n    onChange: handleCategory\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: \"\"\n  }, \"All\"), categories && categories.map(function (c, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      value: c,\n      name: \"category\",\n      key: i\n    }, c);\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterCategory);\n\n//# sourceURL=webpack://react-ssr/./src/shared/components/filters/filterCategory.js?");

/***/ }),

/***/ "./src/shared/components/header/header.js":
/*!************************************************!*\
  !*** ./src/shared/components/header/header.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_products_productsContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/products/productsContext.js */ \"./src/shared/context/products/productsContext.js\");\n/* harmony import */ var _filters_filterCategory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filters/filterCategory.js */ \"./src/shared/components/filters/filterCategory.js\");\n/* harmony import */ var _filters_filterBrand_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filters/filterBrand.js */ \"./src/shared/components/filters/filterBrand.js\");\n\n\n\n\n\nvar Header = function Header() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_products_productsContext_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    setTitle = _useContext.setTitle;\n  var handleSearch = function handleSearch(e) {\n    setTitle(e.target.value);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", {\n    className: \"navbar bg-body-tertiary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container-fluid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\",\n    className: \"navbar-brand\"\n  }, \"Fast Buy\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"d-flex\",\n    role: \"search\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \"form-control me-2\",\n    type: \"search\",\n    placeholder: \"Search\",\n    \"aria-label\": \"Search\",\n    onChange: handleSearch\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    className: \"container p-4 text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row gx-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_filters_filterCategory_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_filters_filterBrand_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://react-ssr/./src/shared/components/header/header.js?");

/***/ }),

/***/ "./src/shared/components/pagination/pagination.js":
/*!********************************************************!*\
  !*** ./src/shared/components/pagination/pagination.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_products_productsContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/products/productsContext.js */ \"./src/shared/context/products/productsContext.js\");\n\n\n\nvar Pagination = function Pagination() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_products_productsContext_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    page = _useContext.page,\n    setPage = _useContext.setPage,\n    products = _useContext.products;\n  var total = products.total;\n  var limit = products.limit;\n  var totalPages = Math.ceil(total / limit);\n  var handlePage = function handlePage(newPage) {\n    setPage(newPage + 1);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"nav\", {\n    \"aria-label\": \"Page navigation example\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"ul\", {\n    className: \"pagination justify-content-center\"\n  }, totalPages > 0 && _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Array(totalPages)).map(function (val, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", {\n      key: index,\n      className: \"page-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n      className: \"page-link\",\n      type: \"button\",\n      onClick: function onClick() {\n        return handlePage(index);\n      }\n    }, index + 1));\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);\n\n//# sourceURL=webpack://react-ssr/./src/shared/components/pagination/pagination.js?");

/***/ }),

/***/ "./src/shared/components/products/Products.js":
/*!****************************************************!*\
  !*** ./src/shared/components/products/Products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_products_productsContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/products/productsContext.js */ \"./src/shared/context/products/productsContext.js\");\n/* harmony import */ var _product_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.js */ \"./src/shared/components/products/product.js\");\n\n\n\nvar Products = function Products() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_products_productsContext_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    products = _useContext.products;\n  var productsRender = products.products;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row row-cols-1 row-cols-md-3 g-4\"\n  }, productsRender && productsRender.map(function (p) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: p._id,\n      className: \"col\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_product_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: p.title,\n      category: p.category,\n      brand: p.brand,\n      image: p.image,\n      price: p.price\n    }));\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);\n\n//# sourceURL=webpack://react-ssr/./src/shared/components/products/Products.js?");

/***/ }),

/***/ "./src/shared/components/products/product.js":
/*!***************************************************!*\
  !*** ./src/shared/components/products/product.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Product = function Product(_ref) {\n  var title = _ref.title,\n    image = _ref.image,\n    category = _ref.category,\n    brand = _ref.brand,\n    price = _ref.price;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card mb-3 text-center h-100\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: image,\n    alt: title,\n    className: \"card-image-top\",\n    width: \"80\",\n    height: \"100\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    className: \"card-title\"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"card-text\"\n  }, \"category: \", category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"card-text\"\n  }, \"brand: \", brand))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"d-grid gap-2 col-6 mx-auto mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"buton\",\n    className: \"btn btn-outline-success\"\n  }, \" \", price, \"$ Comprar\")));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n\n//# sourceURL=webpack://react-ssr/./src/shared/components/products/product.js?");

/***/ }),

/***/ "./src/shared/context/products/productsContext.js":
/*!********************************************************!*\
  !*** ./src/shared/context/products/productsContext.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ProductsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsContext);\n\n//# sourceURL=webpack://react-ssr/./src/shared/context/products/productsContext.js?");

/***/ }),

/***/ "./src/shared/context/products/productsReducer.js":
/*!********************************************************!*\
  !*** ./src/shared/context/products/productsReducer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, action) {\n  var payload = action.payload,\n    type = action.type;\n  switch (type) {\n    case \"GET_PRODUCTS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        products: payload\n      });\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack://react-ssr/./src/shared/context/products/productsReducer.js?");

/***/ }),

/***/ "./src/shared/context/products/productsState.js":
/*!******************************************************!*\
  !*** ./src/shared/context/products/productsState.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _productsContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productsContext.js */ \"./src/shared/context/products/productsContext.js\");\n/* harmony import */ var _productsReducer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productsReducer.js */ \"./src/shared/context/products/productsReducer.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar ProductsState = function ProductsState(_ref) {\n  var children = _ref.children;\n  var initialState = {\n    products: []\n  };\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_productsReducer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], initialState),\n    _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useReducer, 2),\n    state = _useReducer2[0],\n    dispatch = _useReducer2[1];\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n    category = _useState2[0],\n    setCategory = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n    _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n    brand = _useState4[0],\n    setBrand = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n    _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),\n    title = _useState6[0],\n    setTitle = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),\n    _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),\n    page = _useState8[0],\n    setPage = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n    _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),\n    sort = _useState10[0],\n    setSort = _useState10[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    getProducts(category, brand, title, page, sort);\n  }, [category, brand, title, page, sort]);\n  var getProducts = /*#__PURE__*/function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_6___default()(\"/api/products?category=\".concat(category, \"&brand=\").concat(brand, \"&title=\").concat(title, \"&page=\").concat(page, \"&sort=\").concat(sort)).then(function (res) {\n              dispatch({\n                type: \"GET_PRODUCTS\",\n                payload: res.data\n              });\n            })[\"catch\"](function (err) {\n              console.log(err);\n            });\n          case 2:\n            response = _context.sent;\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return function getProducts() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_productsContext_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Provider, {\n    value: {\n      products: state.products,\n      page: page,\n      setCategory: setCategory,\n      setBrand: setBrand,\n      setTitle: setTitle,\n      setPage: setPage,\n      setSort: setSort\n    }\n  }, children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsState);\n\n//# sourceURL=webpack://react-ssr/./src/shared/context/products/productsState.js?");

/***/ }),

/***/ "./src/shared/pages/Home.js":
/*!**********************************!*\
  !*** ./src/shared/pages/Home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_products_productsState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/products/productsState.js */ \"./src/shared/context/products/productsState.js\");\n/* harmony import */ var _components_products_Products_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/products/Products.js */ \"./src/shared/components/products/Products.js\");\n/* harmony import */ var _components_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pagination/pagination.js */ \"./src/shared/components/pagination/pagination.js\");\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header/header.js */ \"./src/shared/components/header/header.js\");\n\n\n\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_products_productsState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_header_header_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_products_Products_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://react-ssr/./src/shared/pages/Home.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;