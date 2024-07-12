/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollbarPlugin: () => (/* reexport safe */ _plugin__WEBPACK_IMPORTED_MODULE_2__.ScrollbarPlugin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(164);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(191);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(199);






/**
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */
var SmoothScrollbar = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(SmoothScrollbar, _super);
    function SmoothScrollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initializes a scrollbar on the given element.
     *
     * @param elem The DOM element that you want to initialize scrollbar to
     * @param [options] Initial options
     */
    SmoothScrollbar.init = function (elem, options) {
        if (!elem || elem.nodeType !== 1) {
            throw new TypeError("expect element to be DOM Element, but got " + elem);
        }
        // attach stylesheet
        (0,_style__WEBPACK_IMPORTED_MODULE_3__.attachStyle)();
        if (_scrollbar__WEBPACK_IMPORTED_MODULE_1__.scrollbarMap.has(elem)) {
            return _scrollbar__WEBPACK_IMPORTED_MODULE_1__.scrollbarMap.get(elem);
        }
        return new _scrollbar__WEBPACK_IMPORTED_MODULE_1__.Scrollbar(elem, options);
    };
    /**
     * Automatically init scrollbar on all elements base on the selector `[data-scrollbar]`
     *
     * @param options Initial options
     */
    SmoothScrollbar.initAll = function (options) {
        return Array.from(document.querySelectorAll('[data-scrollbar]'), function (elem) {
            return SmoothScrollbar.init(elem, options);
        });
    };
    /**
     * Check if there is a scrollbar on given element
     *
     * @param elem The DOM element that you want to check
     */
    SmoothScrollbar.has = function (elem) {
        return _scrollbar__WEBPACK_IMPORTED_MODULE_1__.scrollbarMap.has(elem);
    };
    /**
     * Gets scrollbar on the given element.
     * If no scrollbar instance exsits, returns `undefined`
     *
     * @param elem The DOM element that you want to check.
     */
    SmoothScrollbar.get = function (elem) {
        return _scrollbar__WEBPACK_IMPORTED_MODULE_1__.scrollbarMap.get(elem);
    };
    /**
     * Returns an array that contains all scrollbar instances
     */
    SmoothScrollbar.getAll = function () {
        return Array.from(_scrollbar__WEBPACK_IMPORTED_MODULE_1__.scrollbarMap.values());
    };
    /**
     * Removes scrollbar on the given element
     */
    SmoothScrollbar.destroy = function (elem) {
        var scrollbar = _scrollbar__WEBPACK_IMPORTED_MODULE_1__.scrollbarMap.get(elem);
        if (scrollbar) {
            scrollbar.destroy();
        }
    };
    /**
     * Removes all scrollbar instances from current document
     */
    SmoothScrollbar.destroyAll = function () {
        _scrollbar__WEBPACK_IMPORTED_MODULE_1__.scrollbarMap.forEach(function (scrollbar) {
            scrollbar.destroy();
        });
    };
    /**
     * Attaches plugins to scrollbars
     *
     * @param ...Plugins Scrollbar plugin classes
     */
    SmoothScrollbar.use = function () {
        var Plugins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Plugins[_i] = arguments[_i];
        }
        return _plugin__WEBPACK_IMPORTED_MODULE_2__.addPlugins.apply(void 0, Plugins);
    };
    /**
     * Attaches default style sheets to current document.
     * You don't need to call this method manually unless
     * you removed the default styles via `Scrollbar.detachStyle()`
     */
    SmoothScrollbar.attachStyle = function () {
        return (0,_style__WEBPACK_IMPORTED_MODULE_3__.attachStyle)();
    };
    /**
     * Removes default styles from current document.
     * Use this method when you want to use your own css for scrollbars.
     */
    SmoothScrollbar.detachStyle = function () {
        return (0,_style__WEBPACK_IMPORTED_MODULE_3__.detachStyle)();
    };
    SmoothScrollbar.version = "8.8.4";
    SmoothScrollbar.ScrollbarPlugin = _plugin__WEBPACK_IMPORTED_MODULE_2__.ScrollbarPlugin;
    return SmoothScrollbar;
}(_scrollbar__WEBPACK_IMPORTED_MODULE_1__.Scrollbar));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmoothScrollbar);
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_es_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(121);
/* harmony import */ var core_js_es_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es_weak_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(147);
/* harmony import */ var core_js_es_weak_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es_weak_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(156);
/* harmony import */ var core_js_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(161);
/* harmony import */ var core_js_es_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es_object_assign__WEBPACK_IMPORTED_MODULE_4__);





//# sourceMappingURL=polyfills.js.map

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


__webpack_require__(5);
__webpack_require__(88);
__webpack_require__(113);
__webpack_require__(115);
__webpack_require__(117);
var path = __webpack_require__(120);

module.exports = path.Map;


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIndexedObject = __webpack_require__(6);
var addToUnscopables = __webpack_require__(14);
var Iterators = __webpack_require__(60);
var InternalStateModule = __webpack_require__(61);
var defineProperty = (__webpack_require__(35).f);
var defineIterator = __webpack_require__(65);
var createIterResultObject = __webpack_require__(87);
var IS_PURE = __webpack_require__(19);
var DESCRIPTORS = __webpack_require__(33);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(7);
var requireObjectCoercible = __webpack_require__(12);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);
var fails = __webpack_require__(10);
var classof = __webpack_require__(11);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_BIND = __webpack_require__(9);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(10);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),
/* 10 */
/***/ ((module) => {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isNullOrUndefined = __webpack_require__(13);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 13 */
/***/ ((module) => {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(15);
var create = __webpack_require__(28);
var defineProperty = (__webpack_require__(35).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(16);
var shared = __webpack_require__(17);
var hasOwn = __webpack_require__(21);
var uid = __webpack_require__(23);
var NATIVE_SYMBOL = __webpack_require__(24);
var USE_SYMBOL_AS_UID = __webpack_require__(27);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 16 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var store = __webpack_require__(18);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var IS_PURE = __webpack_require__(19);
var globalThis = __webpack_require__(16);
var defineGlobalProperty = __webpack_require__(20);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.37.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),
/* 19 */
/***/ ((module) => {


module.exports = false;


/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(16);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);
var toObject = __webpack_require__(22);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var requireObjectCoercible = __webpack_require__(12);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(25);
var fails = __webpack_require__(10);
var global = __webpack_require__(16);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(16);
var userAgent = __webpack_require__(26);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),
/* 26 */
/***/ ((module) => {


module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(24);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(29);
var definePropertiesModule = __webpack_require__(32);
var enumBugKeys = __webpack_require__(57);
var hiddenKeys = __webpack_require__(56);
var html = __webpack_require__(58);
var documentCreateElement = __webpack_require__(37);
var sharedKey = __webpack_require__(59);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isObject = __webpack_require__(30);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(31);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 31 */
/***/ ((module) => {


// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(33);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(34);
var definePropertyModule = __webpack_require__(35);
var anObject = __webpack_require__(29);
var toIndexedObject = __webpack_require__(6);
var objectKeys = __webpack_require__(48);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(10);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(33);
var fails = __webpack_require__(10);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(33);
var IE8_DOM_DEFINE = __webpack_require__(36);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(34);
var anObject = __webpack_require__(29);
var toPropertyKey = __webpack_require__(38);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 36 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(33);
var fails = __webpack_require__(10);
var createElement = __webpack_require__(37);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),
/* 37 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(16);
var isObject = __webpack_require__(30);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 38 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toPrimitive = __webpack_require__(39);
var isSymbol = __webpack_require__(41);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 39 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(40);
var isObject = __webpack_require__(30);
var isSymbol = __webpack_require__(41);
var getMethod = __webpack_require__(44);
var ordinaryToPrimitive = __webpack_require__(47);
var wellKnownSymbol = __webpack_require__(15);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 40 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_BIND = __webpack_require__(9);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(42);
var isCallable = __webpack_require__(31);
var isPrototypeOf = __webpack_require__(43);
var USE_SYMBOL_AS_UID = __webpack_require__(27);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),
/* 42 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(16);
var isCallable = __webpack_require__(31);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 44 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aCallable = __webpack_require__(45);
var isNullOrUndefined = __webpack_require__(13);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),
/* 45 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(31);
var tryToString = __webpack_require__(46);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 46 */
/***/ ((module) => {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 47 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(40);
var isCallable = __webpack_require__(31);
var isObject = __webpack_require__(30);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 48 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var internalObjectKeys = __webpack_require__(49);
var enumBugKeys = __webpack_require__(57);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);
var hasOwn = __webpack_require__(21);
var toIndexedObject = __webpack_require__(6);
var indexOf = (__webpack_require__(50).indexOf);
var hiddenKeys = __webpack_require__(56);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),
/* 50 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIndexedObject = __webpack_require__(6);
var toAbsoluteIndex = __webpack_require__(51);
var lengthOfArrayLike = __webpack_require__(54);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 51 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIntegerOrInfinity = __webpack_require__(52);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 52 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var trunc = __webpack_require__(53);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),
/* 53 */
/***/ ((module) => {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),
/* 54 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toLength = __webpack_require__(55);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 55 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIntegerOrInfinity = __webpack_require__(52);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 56 */
/***/ ((module) => {


module.exports = {};


/***/ }),
/* 57 */
/***/ ((module) => {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 58 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(42);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 59 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var shared = __webpack_require__(17);
var uid = __webpack_require__(23);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 60 */
/***/ ((module) => {


module.exports = {};


/***/ }),
/* 61 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_WEAK_MAP = __webpack_require__(62);
var global = __webpack_require__(16);
var isObject = __webpack_require__(30);
var createNonEnumerableProperty = __webpack_require__(63);
var hasOwn = __webpack_require__(21);
var shared = __webpack_require__(18);
var sharedKey = __webpack_require__(59);
var hiddenKeys = __webpack_require__(56);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 62 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(16);
var isCallable = __webpack_require__(31);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),
/* 63 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(33);
var definePropertyModule = __webpack_require__(35);
var createPropertyDescriptor = __webpack_require__(64);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 64 */
/***/ ((module) => {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 65 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var call = __webpack_require__(40);
var IS_PURE = __webpack_require__(19);
var FunctionName = __webpack_require__(71);
var isCallable = __webpack_require__(31);
var createIteratorConstructor = __webpack_require__(78);
var getPrototypeOf = __webpack_require__(80);
var setPrototypeOf = __webpack_require__(83);
var setToStringTag = __webpack_require__(82);
var createNonEnumerableProperty = __webpack_require__(63);
var defineBuiltIn = __webpack_require__(69);
var wellKnownSymbol = __webpack_require__(15);
var Iterators = __webpack_require__(60);
var IteratorsCore = __webpack_require__(79);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),
/* 66 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(16);
var getOwnPropertyDescriptor = (__webpack_require__(67).f);
var createNonEnumerableProperty = __webpack_require__(63);
var defineBuiltIn = __webpack_require__(69);
var defineGlobalProperty = __webpack_require__(20);
var copyConstructorProperties = __webpack_require__(73);
var isForced = __webpack_require__(77);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(33);
var call = __webpack_require__(40);
var propertyIsEnumerableModule = __webpack_require__(68);
var createPropertyDescriptor = __webpack_require__(64);
var toIndexedObject = __webpack_require__(6);
var toPropertyKey = __webpack_require__(38);
var hasOwn = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(36);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports) => {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 69 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(31);
var definePropertyModule = __webpack_require__(35);
var makeBuiltIn = __webpack_require__(70);
var defineGlobalProperty = __webpack_require__(20);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),
/* 70 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);
var fails = __webpack_require__(10);
var isCallable = __webpack_require__(31);
var hasOwn = __webpack_require__(21);
var DESCRIPTORS = __webpack_require__(33);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(71).CONFIGURABLE);
var inspectSource = __webpack_require__(72);
var InternalStateModule = __webpack_require__(61);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),
/* 71 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(33);
var hasOwn = __webpack_require__(21);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),
/* 72 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);
var isCallable = __webpack_require__(31);
var store = __webpack_require__(18);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 73 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var hasOwn = __webpack_require__(21);
var ownKeys = __webpack_require__(74);
var getOwnPropertyDescriptorModule = __webpack_require__(67);
var definePropertyModule = __webpack_require__(35);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),
/* 74 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(42);
var uncurryThis = __webpack_require__(8);
var getOwnPropertyNamesModule = __webpack_require__(75);
var getOwnPropertySymbolsModule = __webpack_require__(76);
var anObject = __webpack_require__(29);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var internalObjectKeys = __webpack_require__(49);
var enumBugKeys = __webpack_require__(57);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, exports) => {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 77 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(10);
var isCallable = __webpack_require__(31);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 78 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var IteratorPrototype = (__webpack_require__(79).IteratorPrototype);
var create = __webpack_require__(28);
var createPropertyDescriptor = __webpack_require__(64);
var setToStringTag = __webpack_require__(82);
var Iterators = __webpack_require__(60);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 79 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(10);
var isCallable = __webpack_require__(31);
var isObject = __webpack_require__(30);
var create = __webpack_require__(28);
var getPrototypeOf = __webpack_require__(80);
var defineBuiltIn = __webpack_require__(69);
var wellKnownSymbol = __webpack_require__(15);
var IS_PURE = __webpack_require__(19);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 80 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var hasOwn = __webpack_require__(21);
var isCallable = __webpack_require__(31);
var toObject = __webpack_require__(22);
var sharedKey = __webpack_require__(59);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(81);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),
/* 81 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(10);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 82 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var defineProperty = (__webpack_require__(35).f);
var hasOwn = __webpack_require__(21);
var wellKnownSymbol = __webpack_require__(15);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 83 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(84);
var isObject = __webpack_require__(30);
var requireObjectCoercible = __webpack_require__(12);
var aPossiblePrototype = __webpack_require__(85);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 84 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);
var aCallable = __webpack_require__(45);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),
/* 85 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isPossiblePrototype = __webpack_require__(86);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),
/* 86 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isObject = __webpack_require__(30);

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),
/* 87 */
/***/ ((module) => {


// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(89);


/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var collection = __webpack_require__(90);
var collectionStrong = __webpack_require__(109);

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 90 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var global = __webpack_require__(16);
var uncurryThis = __webpack_require__(8);
var isForced = __webpack_require__(77);
var defineBuiltIn = __webpack_require__(69);
var InternalMetadataModule = __webpack_require__(91);
var iterate = __webpack_require__(97);
var anInstance = __webpack_require__(106);
var isCallable = __webpack_require__(31);
var isNullOrUndefined = __webpack_require__(13);
var isObject = __webpack_require__(30);
var fails = __webpack_require__(10);
var checkCorrectnessOfIteration = __webpack_require__(107);
var setToStringTag = __webpack_require__(82);
var inheritIfRequired = __webpack_require__(108);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY === 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 91 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var uncurryThis = __webpack_require__(8);
var hiddenKeys = __webpack_require__(56);
var isObject = __webpack_require__(30);
var hasOwn = __webpack_require__(21);
var defineProperty = (__webpack_require__(35).f);
var getOwnPropertyNamesModule = __webpack_require__(75);
var getOwnPropertyNamesExternalModule = __webpack_require__(92);
var isExtensible = __webpack_require__(94);
var uid = __webpack_require__(23);
var FREEZING = __webpack_require__(96);

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 92 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(11);
var toIndexedObject = __webpack_require__(6);
var $getOwnPropertyNames = (__webpack_require__(75).f);
var arraySlice = __webpack_require__(93);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 93 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);

module.exports = uncurryThis([].slice);


/***/ }),
/* 94 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(10);
var isObject = __webpack_require__(30);
var classof = __webpack_require__(11);
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(95);

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),
/* 95 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(10);

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),
/* 96 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(10);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 97 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var bind = __webpack_require__(98);
var call = __webpack_require__(40);
var anObject = __webpack_require__(29);
var tryToString = __webpack_require__(46);
var isArrayIteratorMethod = __webpack_require__(100);
var lengthOfArrayLike = __webpack_require__(54);
var isPrototypeOf = __webpack_require__(43);
var getIterator = __webpack_require__(101);
var getIteratorMethod = __webpack_require__(102);
var iteratorClose = __webpack_require__(105);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),
/* 98 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(99);
var aCallable = __webpack_require__(45);
var NATIVE_BIND = __webpack_require__(9);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 99 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classofRaw = __webpack_require__(11);
var uncurryThis = __webpack_require__(8);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),
/* 100 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(15);
var Iterators = __webpack_require__(60);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 101 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(40);
var aCallable = __webpack_require__(45);
var anObject = __webpack_require__(29);
var tryToString = __webpack_require__(46);
var getIteratorMethod = __webpack_require__(102);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),
/* 102 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classof = __webpack_require__(103);
var getMethod = __webpack_require__(44);
var isNullOrUndefined = __webpack_require__(13);
var Iterators = __webpack_require__(60);
var wellKnownSymbol = __webpack_require__(15);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),
/* 103 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var TO_STRING_TAG_SUPPORT = __webpack_require__(104);
var isCallable = __webpack_require__(31);
var classofRaw = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(15);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),
/* 104 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(15);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 105 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(40);
var anObject = __webpack_require__(29);
var getMethod = __webpack_require__(44);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),
/* 106 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isPrototypeOf = __webpack_require__(43);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),
/* 107 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(15);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 108 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(31);
var isObject = __webpack_require__(30);
var setPrototypeOf = __webpack_require__(83);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 109 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var create = __webpack_require__(28);
var defineBuiltInAccessor = __webpack_require__(110);
var defineBuiltIns = __webpack_require__(111);
var bind = __webpack_require__(98);
var anInstance = __webpack_require__(106);
var isNullOrUndefined = __webpack_require__(13);
var iterate = __webpack_require__(97);
var defineIterator = __webpack_require__(65);
var createIterResultObject = __webpack_require__(87);
var setSpecies = __webpack_require__(112);
var DESCRIPTORS = __webpack_require__(33);
var fastKey = (__webpack_require__(91).fastKey);
var InternalStateModule = __webpack_require__(61);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key === key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          entry = entry.next;
        }
        state.first = state.last = undefined;
        state.index = create(null);
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first === entry) state.first = next;
          if (state.last === entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind === 'keys') return createIterResultObject(entry.key, false);
      if (kind === 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 110 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var makeBuiltIn = __webpack_require__(70);
var defineProperty = __webpack_require__(35);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),
/* 111 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var defineBuiltIn = __webpack_require__(69);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),
/* 112 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(42);
var defineBuiltInAccessor = __webpack_require__(110);
var wellKnownSymbol = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(33);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 113 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var uncurryThis = __webpack_require__(8);
var aCallable = __webpack_require__(45);
var requireObjectCoercible = __webpack_require__(12);
var iterate = __webpack_require__(97);
var MapHelpers = __webpack_require__(114);
var IS_PURE = __webpack_require__(19);
var fails = __webpack_require__(10);

var Map = MapHelpers.Map;
var has = MapHelpers.has;
var get = MapHelpers.get;
var set = MapHelpers.set;
var push = uncurryThis([].push);

var DOES_NOT_WORK_WITH_PRIMITIVES = IS_PURE || fails(function () {
  return Map.groupBy('ab', function (it) {
    return it;
  }).get('a').length !== 1;
});

// `Map.groupBy` method
// https://github.com/tc39/proposal-array-grouping
$({ target: 'Map', stat: true, forced: IS_PURE || DOES_NOT_WORK_WITH_PRIMITIVES }, {
  groupBy: function groupBy(items, callbackfn) {
    requireObjectCoercible(items);
    aCallable(callbackfn);
    var map = new Map();
    var k = 0;
    iterate(items, function (value) {
      var key = callbackfn(value, k++);
      if (!has(map, key)) set(map, key, [value]);
      else push(get(map, key), value);
    });
    return map;
  }
});


/***/ }),
/* 114 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;

module.exports = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis(MapPrototype.set),
  get: uncurryThis(MapPrototype.get),
  has: uncurryThis(MapPrototype.has),
  remove: uncurryThis(MapPrototype['delete']),
  proto: MapPrototype
};


/***/ }),
/* 115 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var TO_STRING_TAG_SUPPORT = __webpack_require__(104);
var defineBuiltIn = __webpack_require__(69);
var toString = __webpack_require__(116);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 116 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var TO_STRING_TAG_SUPPORT = __webpack_require__(104);
var classof = __webpack_require__(103);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var charAt = (__webpack_require__(118).charAt);
var toString = __webpack_require__(119);
var InternalStateModule = __webpack_require__(61);
var defineIterator = __webpack_require__(65);
var createIterResultObject = __webpack_require__(87);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),
/* 118 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);
var toIntegerOrInfinity = __webpack_require__(52);
var toString = __webpack_require__(119);
var requireObjectCoercible = __webpack_require__(12);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 119 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classof = __webpack_require__(103);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),
/* 120 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(16);

module.exports = global;


/***/ }),
/* 121 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


__webpack_require__(5);
__webpack_require__(115);
__webpack_require__(122);
__webpack_require__(124);
__webpack_require__(135);
__webpack_require__(137);
__webpack_require__(139);
__webpack_require__(141);
__webpack_require__(143);
__webpack_require__(145);
__webpack_require__(117);
var path = __webpack_require__(120);

module.exports = path.Set;


/***/ }),
/* 122 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(123);


/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var collection = __webpack_require__(90);
var collectionStrong = __webpack_require__(109);

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var difference = __webpack_require__(125);
var setMethodAcceptSetLike = __webpack_require__(134);

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('difference') }, {
  difference: difference
});


/***/ }),
/* 125 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(126);
var SetHelpers = __webpack_require__(127);
var clone = __webpack_require__(128);
var size = __webpack_require__(131);
var getSetRecord = __webpack_require__(132);
var iterateSet = __webpack_require__(129);
var iterateSimple = __webpack_require__(130);

var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function difference(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = clone(O);
  if (size(O) <= otherRec.size) iterateSet(O, function (e) {
    if (otherRec.includes(e)) remove(result, e);
  });
  else iterateSimple(otherRec.getIterator(), function (e) {
    if (has(O, e)) remove(result, e);
  });
  return result;
};


/***/ }),
/* 126 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var has = (__webpack_require__(127).has);

// Perform ? RequireInternalSlot(M, [[SetData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),
/* 127 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);

// eslint-disable-next-line es/no-set -- safe
var SetPrototype = Set.prototype;

module.exports = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis(SetPrototype.add),
  has: uncurryThis(SetPrototype.has),
  remove: uncurryThis(SetPrototype['delete']),
  proto: SetPrototype
};


/***/ }),
/* 128 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var SetHelpers = __webpack_require__(127);
var iterate = __webpack_require__(129);

var Set = SetHelpers.Set;
var add = SetHelpers.add;

module.exports = function (set) {
  var result = new Set();
  iterate(set, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),
/* 129 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);
var iterateSimple = __webpack_require__(130);
var SetHelpers = __webpack_require__(127);

var Set = SetHelpers.Set;
var SetPrototype = SetHelpers.proto;
var forEach = uncurryThis(SetPrototype.forEach);
var keys = uncurryThis(SetPrototype.keys);
var next = keys(new Set()).next;

module.exports = function (set, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
};


/***/ }),
/* 130 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(40);

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


/***/ }),
/* 131 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThisAccessor = __webpack_require__(84);
var SetHelpers = __webpack_require__(127);

module.exports = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
  return set.size;
};


/***/ }),
/* 132 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aCallable = __webpack_require__(45);
var anObject = __webpack_require__(29);
var call = __webpack_require__(40);
var toIntegerOrInfinity = __webpack_require__(52);
var getIteratorDirect = __webpack_require__(133);

var INVALID_SIZE = 'Invalid size';
var $RangeError = RangeError;
var $TypeError = TypeError;
var max = Math.max;

var SetRecord = function (set, intSize) {
  this.set = set;
  this.size = max(intSize, 0);
  this.has = aCallable(set.has);
  this.keys = aCallable(set.keys);
};

SetRecord.prototype = {
  getIterator: function () {
    return getIteratorDirect(anObject(call(this.keys, this.set)));
  },
  includes: function (it) {
    return call(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
module.exports = function (obj) {
  anObject(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
  var intSize = toIntegerOrInfinity(numSize);
  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};


/***/ }),
/* 133 */
/***/ ((module) => {


// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),
/* 134 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(42);

var createSetLike = function (size) {
  return {
    size: size,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return { done: true };
        }
      };
    }
  };
};

module.exports = function (name) {
  var Set = getBuiltIn('Set');
  try {
    new Set()[name](createSetLike(0));
    try {
      // late spec change, early WebKit ~ Safari 17.0 beta implementation does not pass it
      // https://github.com/tc39/proposal-set-methods/pull/88
      new Set()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      return true;
    }
  } catch (error) {
    return false;
  }
};


/***/ }),
/* 135 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var fails = __webpack_require__(10);
var intersection = __webpack_require__(136);
var setMethodAcceptSetLike = __webpack_require__(134);

var INCORRECT = !setMethodAcceptSetLike('intersection') || fails(function () {
  // eslint-disable-next-line es/no-array-from, es/no-set -- testing
  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
});

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  intersection: intersection
});


/***/ }),
/* 136 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(126);
var SetHelpers = __webpack_require__(127);
var size = __webpack_require__(131);
var getSetRecord = __webpack_require__(132);
var iterateSet = __webpack_require__(129);
var iterateSimple = __webpack_require__(130);

var Set = SetHelpers.Set;
var add = SetHelpers.add;
var has = SetHelpers.has;

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
module.exports = function intersection(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = new Set();

  if (size(O) > otherRec.size) {
    iterateSimple(otherRec.getIterator(), function (e) {
      if (has(O, e)) add(result, e);
    });
  } else {
    iterateSet(O, function (e) {
      if (otherRec.includes(e)) add(result, e);
    });
  }

  return result;
};


/***/ }),
/* 137 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var isDisjointFrom = __webpack_require__(138);
var setMethodAcceptSetLike = __webpack_require__(134);

// `Set.prototype.isDisjointFrom` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isDisjointFrom') }, {
  isDisjointFrom: isDisjointFrom
});


/***/ }),
/* 138 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(126);
var has = (__webpack_require__(127).has);
var size = __webpack_require__(131);
var getSetRecord = __webpack_require__(132);
var iterateSet = __webpack_require__(129);
var iterateSimple = __webpack_require__(130);
var iteratorClose = __webpack_require__(105);

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
module.exports = function isDisjointFrom(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),
/* 139 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var isSubsetOf = __webpack_require__(140);
var setMethodAcceptSetLike = __webpack_require__(134);

// `Set.prototype.isSubsetOf` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSubsetOf') }, {
  isSubsetOf: isSubsetOf
});


/***/ }),
/* 140 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(126);
var size = __webpack_require__(131);
var iterate = __webpack_require__(129);
var getSetRecord = __webpack_require__(132);

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
module.exports = function isSubsetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) > otherRec.size) return false;
  return iterate(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};


/***/ }),
/* 141 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var isSupersetOf = __webpack_require__(142);
var setMethodAcceptSetLike = __webpack_require__(134);

// `Set.prototype.isSupersetOf` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSupersetOf') }, {
  isSupersetOf: isSupersetOf
});


/***/ }),
/* 142 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(126);
var has = (__webpack_require__(127).has);
var size = __webpack_require__(131);
var getSetRecord = __webpack_require__(132);
var iterateSimple = __webpack_require__(130);
var iteratorClose = __webpack_require__(105);

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
module.exports = function isSupersetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (!has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),
/* 143 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var symmetricDifference = __webpack_require__(144);
var setMethodAcceptSetLike = __webpack_require__(134);

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('symmetricDifference') }, {
  symmetricDifference: symmetricDifference
});


/***/ }),
/* 144 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(126);
var SetHelpers = __webpack_require__(127);
var clone = __webpack_require__(128);
var getSetRecord = __webpack_require__(132);
var iterateSimple = __webpack_require__(130);

var add = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function symmetricDifference(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (e) {
    if (has(O, e)) remove(result, e);
    else add(result, e);
  });
  return result;
};


/***/ }),
/* 145 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var union = __webpack_require__(146);
var setMethodAcceptSetLike = __webpack_require__(134);

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('union') }, {
  union: union
});


/***/ }),
/* 146 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aSet = __webpack_require__(126);
var add = (__webpack_require__(127).add);
var clone = __webpack_require__(128);
var getSetRecord = __webpack_require__(132);
var iterateSimple = __webpack_require__(130);

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
module.exports = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),
/* 147 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


__webpack_require__(5);
__webpack_require__(115);
__webpack_require__(148);
var path = __webpack_require__(120);

module.exports = path.WeakMap;


/***/ }),
/* 148 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(149);


/***/ }),
/* 149 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var FREEZING = __webpack_require__(96);
var global = __webpack_require__(16);
var uncurryThis = __webpack_require__(8);
var defineBuiltIns = __webpack_require__(111);
var InternalMetadataModule = __webpack_require__(91);
var collection = __webpack_require__(90);
var collectionWeak = __webpack_require__(150);
var isObject = __webpack_require__(30);
var enforceInternalState = (__webpack_require__(61).enforce);
var fails = __webpack_require__(10);
var NATIVE_WEAK_MAP = __webpack_require__(62);

var $Object = Object;
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray = Array.isArray;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = $Object.isExtensible;
// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = $Object.isFrozen;
// eslint-disable-next-line es/no-object-issealed -- safe
var isSealed = $Object.isSealed;
// eslint-disable-next-line es/no-object-freeze -- safe
var freeze = $Object.freeze;
// eslint-disable-next-line es/no-object-seal -- safe
var seal = $Object.seal;

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);
var WeakMapPrototype = $WeakMap.prototype;
var nativeSet = uncurryThis(WeakMapPrototype.set);

// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
var hasMSEdgeFreezingBug = function () {
  return FREEZING && fails(function () {
    var frozenArray = freeze([]);
    nativeSet(new $WeakMap(), frozenArray, 1);
    return !isFrozen(frozenArray);
  });
};

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP) if (IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
  var nativeHas = uncurryThis(WeakMapPrototype.has);
  var nativeGet = uncurryThis(WeakMapPrototype.get);
  defineBuiltIns(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen['delete'](key);
      } return nativeDelete(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      } return nativeHas(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      } return nativeGet(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else nativeSet(this, key, value);
      return this;
    }
  });
// Chakra Edge frozen keys fix
} else if (hasMSEdgeFreezingBug()) {
  defineBuiltIns(WeakMapPrototype, {
    set: function set(key, value) {
      var arrayIntegrityLevel;
      if (isArray(key)) {
        if (isFrozen(key)) arrayIntegrityLevel = freeze;
        else if (isSealed(key)) arrayIntegrityLevel = seal;
      }
      nativeSet(this, key, value);
      if (arrayIntegrityLevel) arrayIntegrityLevel(key);
      return this;
    }
  });
}


/***/ }),
/* 150 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);
var defineBuiltIns = __webpack_require__(111);
var getWeakData = (__webpack_require__(91).getWeakData);
var anInstance = __webpack_require__(106);
var anObject = __webpack_require__(29);
var isNullOrUndefined = __webpack_require__(13);
var isObject = __webpack_require__(30);
var iterate = __webpack_require__(97);
var ArrayIterationModule = __webpack_require__(151);
var hasOwn = __webpack_require__(21);
var InternalStateModule = __webpack_require__(61);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (state) {
  return state.frozen || (state.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice(this.entries, index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    defineBuiltIns(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};


/***/ }),
/* 151 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var bind = __webpack_require__(98);
var uncurryThis = __webpack_require__(8);
var IndexedObject = __webpack_require__(7);
var toObject = __webpack_require__(22);
var lengthOfArrayLike = __webpack_require__(54);
var arraySpeciesCreate = __webpack_require__(152);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),
/* 152 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var arraySpeciesConstructor = __webpack_require__(153);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),
/* 153 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isArray = __webpack_require__(154);
var isConstructor = __webpack_require__(155);
var isObject = __webpack_require__(30);
var wellKnownSymbol = __webpack_require__(15);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),
/* 154 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classof = __webpack_require__(11);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),
/* 155 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(8);
var fails = __webpack_require__(10);
var isCallable = __webpack_require__(31);
var classof = __webpack_require__(103);
var getBuiltIn = __webpack_require__(42);
var inspectSource = __webpack_require__(72);

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),
/* 156 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


__webpack_require__(117);
__webpack_require__(157);
var path = __webpack_require__(120);

module.exports = path.Array.from;


/***/ }),
/* 157 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var from = __webpack_require__(158);
var checkCorrectnessOfIteration = __webpack_require__(107);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 158 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var bind = __webpack_require__(98);
var call = __webpack_require__(40);
var toObject = __webpack_require__(22);
var callWithSafeIterationClosing = __webpack_require__(159);
var isArrayIteratorMethod = __webpack_require__(100);
var isConstructor = __webpack_require__(155);
var lengthOfArrayLike = __webpack_require__(54);
var createProperty = __webpack_require__(160);
var getIterator = __webpack_require__(101);
var getIteratorMethod = __webpack_require__(102);

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    result = IS_CONSTRUCTOR ? new this() : [];
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 159 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var anObject = __webpack_require__(29);
var iteratorClose = __webpack_require__(105);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),
/* 160 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(33);
var definePropertyModule = __webpack_require__(35);
var createPropertyDescriptor = __webpack_require__(64);

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),
/* 161 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


__webpack_require__(162);
var path = __webpack_require__(120);

module.exports = path.Object.assign;


/***/ }),
/* 162 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(66);
var assign = __webpack_require__(163);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 163 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(33);
var uncurryThis = __webpack_require__(8);
var call = __webpack_require__(40);
var fails = __webpack_require__(10);
var objectKeys = __webpack_require__(48);
var getOwnPropertySymbolsModule = __webpack_require__(76);
var propertyIsEnumerableModule = __webpack_require__(68);
var toObject = __webpack_require__(22);
var IndexedObject = __webpack_require__(7);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 164 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scrollbar: () => (/* binding */ Scrollbar),
/* harmony export */   scrollbarMap: () => (/* binding */ scrollbarMap)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174);
/* harmony import */ var _decorators___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(175);
/* harmony import */ var _track___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(179);
/* harmony import */ var _geometry___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(183);
/* harmony import */ var _scrolling___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(187);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(191);
/* harmony import */ var _events___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(192);










// DO NOT use WeakMap here
// .getAll() methods requires `scrollbarMap.values()`
var scrollbarMap = new Map();
var Scrollbar = /** @class */ (function () {
    function Scrollbar(containerEl, options) {
        var _this = this;
        /**
         * Current scrolling offsets
         */
        this.offset = {
            x: 0,
            y: 0,
        };
        /**
         * Max-allowed scrolling offsets
         */
        this.limit = {
            x: Infinity,
            y: Infinity,
        };
        /**
         * Container bounding rect
         */
        this.bounding = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        };
        // private _observer: ResizeObserver;
        this._plugins = [];
        this._momentum = { x: 0, y: 0 };
        this._listeners = new Set();
        this.containerEl = containerEl;
        var contentEl = this.contentEl = document.createElement('div');
        this.options = new _options__WEBPACK_IMPORTED_MODULE_1__.Options(options);
        // mark as a scroll element
        containerEl.setAttribute('data-scrollbar', 'true');
        // make container focusable
        containerEl.setAttribute('tabindex', '-1');
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setStyle)(containerEl, {
            overflow: 'hidden',
            outline: 'none',
        });
        // enable touch event capturing in IE, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/39
        if (window.navigator.msPointerEnabled) {
            containerEl.style.msTouchAction = 'none';
        }
        // mount content
        contentEl.className = 'scroll-content';
        Array.from(containerEl.childNodes).forEach(function (node) {
            contentEl.appendChild(node);
        });
        containerEl.appendChild(contentEl);
        // attach track
        this.track = new _track___WEBPACK_IMPORTED_MODULE_3__.TrackController(this);
        // initial measuring
        this.size = this.getSize();
        // init plugins
        this._plugins = (0,_plugin__WEBPACK_IMPORTED_MODULE_6__.initPlugins)(this, this.options.plugins);
        // preserve scroll offset
        var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
        containerEl.scrollLeft = containerEl.scrollTop = 0;
        this.setPosition(scrollLeft, scrollTop, {
            withoutCallbacks: true,
        });
        // FIXME: update typescript
        var ResizeObserver = window.ResizeObserver;
        // observe
        if (typeof ResizeObserver === 'function') {
            this._observer = new ResizeObserver(function () {
                _this.update();
            });
            this._observer.observe(contentEl);
        }
        scrollbarMap.set(containerEl, this);
        // wait for DOM ready
        requestAnimationFrame(function () {
            _this._init();
        });
    }
    Object.defineProperty(Scrollbar.prototype, "parent", {
        /**
         * Parent scrollbar
         */
        get: function () {
            var elem = this.containerEl.parentElement;
            while (elem) {
                var parentScrollbar = scrollbarMap.get(elem);
                if (parentScrollbar) {
                    return parentScrollbar;
                }
                elem = elem.parentElement;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollTop", {
        /**
         * Gets or sets `scrollbar.offset.y`
         */
        get: function () {
            return this.offset.y;
        },
        set: function (y) {
            this.setPosition(this.scrollLeft, y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollLeft", {
        /**
         * Gets or sets `scrollbar.offset.x`
         */
        get: function () {
            return this.offset.x;
        },
        set: function (x) {
            this.setPosition(x, this.scrollTop);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the size of the scrollbar container element
     * and the content wrapper element
     */
    Scrollbar.prototype.getSize = function () {
        return (0,_geometry___WEBPACK_IMPORTED_MODULE_4__.getSize)(this);
    };
    /**
     * Forces scrollbar to update geometry infomation.
     *
     * By default, scrollbars are automatically updated with `100ms` debounce (or `MutationObserver` fires).
     * You can call this method to force an update when you modified contents
     */
    Scrollbar.prototype.update = function () {
        (0,_geometry___WEBPACK_IMPORTED_MODULE_4__.update)(this);
        this._plugins.forEach(function (plugin) {
            plugin.onUpdate();
        });
    };
    /**
     * Checks if an element is visible in the current view area
     */
    Scrollbar.prototype.isVisible = function (elem) {
        return (0,_geometry___WEBPACK_IMPORTED_MODULE_4__.isVisible)(this, elem);
    };
    /**
     * Sets the scrollbar to the given offset without easing
     */
    Scrollbar.prototype.setPosition = function (x, y, options) {
        var _this = this;
        if (x === void 0) { x = this.offset.x; }
        if (y === void 0) { y = this.offset.y; }
        if (options === void 0) { options = {}; }
        var status = (0,_scrolling___WEBPACK_IMPORTED_MODULE_5__.setPosition)(this, x, y);
        if (!status || options.withoutCallbacks) {
            return;
        }
        this._listeners.forEach(function (fn) {
            fn.call(_this, status);
        });
    };
    /**
     * Scrolls to given position with easing function
     */
    Scrollbar.prototype.scrollTo = function (x, y, duration, options) {
        if (x === void 0) { x = this.offset.x; }
        if (y === void 0) { y = this.offset.y; }
        if (duration === void 0) { duration = 0; }
        if (options === void 0) { options = {}; }
        (0,_scrolling___WEBPACK_IMPORTED_MODULE_5__.scrollTo)(this, x, y, duration, options);
    };
    /**
     * Scrolls the target element into visible area of scrollbar,
     * likes the DOM method `element.scrollIntoView().
     */
    Scrollbar.prototype.scrollIntoView = function (elem, options) {
        if (options === void 0) { options = {}; }
        (0,_scrolling___WEBPACK_IMPORTED_MODULE_5__.scrollIntoView)(this, elem, options);
    };
    /**
     * Adds scrolling listener
     */
    Scrollbar.prototype.addListener = function (fn) {
        if (typeof fn !== 'function') {
            throw new TypeError('[smooth-scrollbar] scrolling listener should be a function');
        }
        this._listeners.add(fn);
    };
    /**
     * Removes listener previously registered with `scrollbar.addListener()`
     */
    Scrollbar.prototype.removeListener = function (fn) {
        this._listeners.delete(fn);
    };
    /**
     * Adds momentum and applys delta transformers.
     */
    Scrollbar.prototype.addTransformableMomentum = function (x, y, fromEvent, callback) {
        this._updateDebounced();
        var finalDelta = this._plugins.reduce(function (delta, plugin) {
            return plugin.transformDelta(delta, fromEvent) || delta;
        }, { x: x, y: y });
        var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
        if (willScroll) {
            this.addMomentum(finalDelta.x, finalDelta.y);
        }
        if (callback) {
            callback.call(this, willScroll);
        }
    };
    /**
     * Increases scrollbar's momentum
     */
    Scrollbar.prototype.addMomentum = function (x, y) {
        this.setMomentum(this._momentum.x + x, this._momentum.y + y);
    };
    /**
     * Sets scrollbar's momentum to given value
     */
    Scrollbar.prototype.setMomentum = function (x, y) {
        if (this.limit.x === 0) {
            x = 0;
        }
        if (this.limit.y === 0) {
            y = 0;
        }
        if (this.options.renderByPixels) {
            x = Math.round(x);
            y = Math.round(y);
        }
        this._momentum.x = x;
        this._momentum.y = y;
    };
    /**
     * Update options for specific plugin
     *
     * @param pluginName Name of the plugin
     * @param [options] An object includes the properties that you want to update
     */
    Scrollbar.prototype.updatePluginOptions = function (pluginName, options) {
        this._plugins.forEach(function (plugin) {
            if (plugin.name === pluginName) {
                Object.assign(plugin.options, options);
            }
        });
    };
    Scrollbar.prototype.destroy = function () {
        var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clearEventsOn)(this);
        this._listeners.clear();
        this.setMomentum(0, 0);
        cancelAnimationFrame(this._renderID);
        if (this._observer) {
            this._observer.disconnect();
        }
        scrollbarMap.delete(this.containerEl);
        // restore contents
        var childNodes = Array.from(contentEl.childNodes);
        while (containerEl.firstChild) {
            containerEl.removeChild(containerEl.firstChild);
        }
        childNodes.forEach(function (el) {
            containerEl.appendChild(el);
        });
        // reset scroll position
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setStyle)(containerEl, {
            overflow: '',
        });
        containerEl.scrollTop = this.scrollTop;
        containerEl.scrollLeft = this.scrollLeft;
        // invoke plugin.onDestroy
        this._plugins.forEach(function (plugin) {
            plugin.onDestroy();
        });
        this._plugins.length = 0;
    };
    Scrollbar.prototype._init = function () {
        var _this = this;
        this.update();
        // init evet handlers
        Object.keys(_events___WEBPACK_IMPORTED_MODULE_7__).forEach(function (prop) {
            _events___WEBPACK_IMPORTED_MODULE_7__[prop](_this);
        });
        // invoke `plugin.onInit`
        this._plugins.forEach(function (plugin) {
            plugin.onInit();
        });
        this._render();
    };
    Scrollbar.prototype._updateDebounced = function () {
        this.update();
    };
    // check whether to propagate monmentum to parent scrollbar
    // the following situations are considered as `true`:
    //         1. continuous scrolling is enabled (automatically disabled when overscroll is enabled)
    //         2. scrollbar reaches one side and is not about to scroll on the other direction
    Scrollbar.prototype._shouldPropagateMomentum = function (deltaX, deltaY) {
        if (deltaX === void 0) { deltaX = 0; }
        if (deltaY === void 0) { deltaY = 0; }
        var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
        if (!options.continuousScrolling)
            return false;
        // force an update when scrollbar is "unscrollable", see #106
        if (limit.x === 0 && limit.y === 0) {
            this._updateDebounced();
        }
        var destX = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(deltaX + offset.x, 0, limit.x);
        var destY = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(deltaY + offset.y, 0, limit.y);
        var res = true;
        // offsets are not about to change
        // `&=` operator is not allowed for boolean types
        res = res && (destX === offset.x);
        res = res && (destY === offset.y);
        // current offsets are on the edge
        res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
        return res;
    };
    Scrollbar.prototype._render = function () {
        var _momentum = this._momentum;
        if (_momentum.x || _momentum.y) {
            var nextX = this._nextTick('x');
            var nextY = this._nextTick('y');
            _momentum.x = nextX.momentum;
            _momentum.y = nextY.momentum;
            this.setPosition(nextX.position, nextY.position);
        }
        var remain = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)({}, this._momentum);
        this._plugins.forEach(function (plugin) {
            plugin.onRender(remain);
        });
        this._renderID = requestAnimationFrame(this._render.bind(this));
    };
    Scrollbar.prototype._nextTick = function (direction) {
        var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
        var current = offset[direction];
        var remain = _momentum[direction];
        if (Math.abs(remain) <= 0.1) {
            return {
                momentum: 0,
                position: current + remain,
            };
        }
        var nextMomentum = remain * (1 - options.damping);
        if (options.renderByPixels) {
            nextMomentum |= 0;
        }
        return {
            momentum: nextMomentum,
            position: current + remain - nextMomentum,
        };
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
        (0,_decorators___WEBPACK_IMPORTED_MODULE_2__.debounce)(100, true)
    ], Scrollbar.prototype, "_updateDebounced", null);
    return Scrollbar;
}());

//# sourceMappingURL=scrollbar.js.map

/***/ }),
/* 165 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TouchRecord: () => (/* reexport safe */ _touch_record__WEBPACK_IMPORTED_MODULE_5__.TouchRecord),
/* harmony export */   Tracker: () => (/* reexport safe */ _touch_record__WEBPACK_IMPORTED_MODULE_5__.Tracker),
/* harmony export */   clamp: () => (/* reexport safe */ _clamp__WEBPACK_IMPORTED_MODULE_6__.clamp),
/* harmony export */   clearEventsOn: () => (/* reexport safe */ _event_hub__WEBPACK_IMPORTED_MODULE_0__.clearEventsOn),
/* harmony export */   debounce: () => (/* reexport safe */ _debounce__WEBPACK_IMPORTED_MODULE_7__.debounce),
/* harmony export */   eventScope: () => (/* reexport safe */ _event_hub__WEBPACK_IMPORTED_MODULE_0__.eventScope),
/* harmony export */   getPointerData: () => (/* reexport safe */ _get_pointer_data__WEBPACK_IMPORTED_MODULE_1__.getPointerData),
/* harmony export */   getPosition: () => (/* reexport safe */ _get_position__WEBPACK_IMPORTED_MODULE_2__.getPosition),
/* harmony export */   isOneOf: () => (/* reexport safe */ _is_one_of__WEBPACK_IMPORTED_MODULE_3__.isOneOf),
/* harmony export */   setStyle: () => (/* reexport safe */ _set_style__WEBPACK_IMPORTED_MODULE_4__.setStyle)
/* harmony export */ });
/* harmony import */ var _event_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var _get_pointer_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(167);
/* harmony import */ var _get_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(168);
/* harmony import */ var _is_one_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(169);
/* harmony import */ var _set_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(170);
/* harmony import */ var _touch_record__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(171);
/* harmony import */ var _clamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(172);
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(173);








//# sourceMappingURL=index.js.map

/***/ }),
/* 166 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearEventsOn: () => (/* binding */ clearEventsOn),
/* harmony export */   eventScope: () => (/* binding */ eventScope)
/* harmony export */ });
var eventListenerOptions;
var eventMap = new WeakMap();
function getOptions() {
    if (eventListenerOptions !== undefined) {
        return eventListenerOptions;
    }
    var supportPassiveEvent = false;
    try {
        var noop = function () { };
        var options = Object.defineProperty({}, 'passive', {
            enumerable: true,
            get: function () {
                supportPassiveEvent = true;
                return true;
            },
        });
        window.addEventListener('testPassive', noop, options);
        window.removeEventListener('testPassive', noop, options);
    }
    catch (e) { }
    eventListenerOptions = supportPassiveEvent ? { passive: false } : false;
    return eventListenerOptions;
}
function eventScope(scrollbar) {
    var configs = eventMap.get(scrollbar) || [];
    eventMap.set(scrollbar, configs);
    return function addEvent(elem, events, fn) {
        function handler(event) {
            // ignore default prevented events
            if (event.defaultPrevented) {
                return;
            }
            fn(event);
        }
        events.split(/\s+/g).forEach(function (eventName) {
            configs.push({ elem: elem, eventName: eventName, handler: handler });
            elem.addEventListener(eventName, handler, getOptions());
        });
    };
}
function clearEventsOn(scrollbar) {
    var configs = eventMap.get(scrollbar);
    if (!configs) {
        return;
    }
    configs.forEach(function (_a) {
        var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
        elem.removeEventListener(eventName, handler, getOptions());
    });
    eventMap.delete(scrollbar);
}
//# sourceMappingURL=event-hub.js.map

/***/ }),
/* 167 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPointerData: () => (/* binding */ getPointerData)
/* harmony export */ });
/**
 * Get pointer/touch data
 */
function getPointerData(evt) {
    // if is touch event, return last item in touchList
    // else return original event
    return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
}
//# sourceMappingURL=get-pointer-data.js.map

/***/ }),
/* 168 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPosition: () => (/* binding */ getPosition)
/* harmony export */ });
/* harmony import */ var _get_pointer_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);

/**
 * Get pointer/finger position
 */
function getPosition(evt) {
    var data = (0,_get_pointer_data__WEBPACK_IMPORTED_MODULE_0__.getPointerData)(evt);
    return {
        x: data.clientX,
        y: data.clientY,
    };
}
//# sourceMappingURL=get-position.js.map

/***/ }),
/* 169 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isOneOf: () => (/* binding */ isOneOf)
/* harmony export */ });
/**
 * Check if `a` is one of `[...b]`
 */
function isOneOf(a, b) {
    if (b === void 0) { b = []; }
    return b.some(function (v) { return a === v; });
}
//# sourceMappingURL=is-one-of.js.map

/***/ }),
/* 170 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setStyle: () => (/* binding */ setStyle)
/* harmony export */ });
var VENDOR_PREFIX = [
    'webkit',
    'moz',
    'ms',
    'o',
];
var RE = new RegExp("^-(?!(?:" + VENDOR_PREFIX.join('|') + ")-)");
function autoPrefix(styles) {
    var res = {};
    Object.keys(styles).forEach(function (prop) {
        if (!RE.test(prop)) {
            res[prop] = styles[prop];
            return;
        }
        var val = styles[prop];
        prop = prop.replace(/^-/, '');
        res[prop] = val;
        VENDOR_PREFIX.forEach(function (prefix) {
            res["-" + prefix + "-" + prop] = val;
        });
    });
    return res;
}
function setStyle(elem, styles) {
    styles = autoPrefix(styles);
    Object.keys(styles).forEach(function (prop) {
        var cssProp = prop.replace(/^-/, '').replace(/-([a-z])/g, function (_, $1) { return $1.toUpperCase(); });
        elem.style[cssProp] = styles[prop];
    });
}
//# sourceMappingURL=set-style.js.map

/***/ }),
/* 171 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TouchRecord: () => (/* binding */ TouchRecord),
/* harmony export */   Tracker: () => (/* binding */ Tracker)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _get_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);


var Tracker = /** @class */ (function () {
    function Tracker(touch) {
        this.velocityMultiplier = window.devicePixelRatio;
        this.updateTime = Date.now();
        this.delta = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
        this.lastPosition = { x: 0, y: 0 };
        this.lastPosition = (0,_get_position__WEBPACK_IMPORTED_MODULE_0__.getPosition)(touch);
    }
    Tracker.prototype.update = function (touch) {
        var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
        var now = Date.now();
        var position = (0,_get_position__WEBPACK_IMPORTED_MODULE_0__.getPosition)(touch);
        var delta = {
            x: -(position.x - lastPosition.x),
            y: -(position.y - lastPosition.y),
        };
        var duration = (now - updateTime) || 16.7;
        var vx = delta.x / duration * 16.7;
        var vy = delta.y / duration * 16.7;
        velocity.x = vx * this.velocityMultiplier;
        velocity.y = vy * this.velocityMultiplier;
        this.delta = delta;
        this.updateTime = now;
        this.lastPosition = position;
    };
    return Tracker;
}());

var TouchRecord = /** @class */ (function () {
    function TouchRecord() {
        this._touchList = {};
    }
    Object.defineProperty(TouchRecord.prototype, "_primitiveValue", {
        get: function () {
            return { x: 0, y: 0 };
        },
        enumerable: true,
        configurable: true
    });
    TouchRecord.prototype.isActive = function () {
        return this._activeTouchID !== undefined;
    };
    TouchRecord.prototype.getDelta = function () {
        var tracker = this._getActiveTracker();
        if (!tracker) {
            return this._primitiveValue;
        }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, tracker.delta);
    };
    TouchRecord.prototype.getVelocity = function () {
        var tracker = this._getActiveTracker();
        if (!tracker) {
            return this._primitiveValue;
        }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, tracker.velocity);
    };
    TouchRecord.prototype.getEasingDistance = function (damping) {
        var deAcceleration = 1 - damping;
        var distance = {
            x: 0,
            y: 0,
        };
        var vel = this.getVelocity();
        Object.keys(vel).forEach(function (dir) {
            // ignore small velocity
            var v = Math.abs(vel[dir]) <= 10 ? 0 : vel[dir];
            while (v !== 0) {
                distance[dir] += v;
                v = (v * deAcceleration) | 0;
            }
        });
        return distance;
    };
    TouchRecord.prototype.track = function (evt) {
        var _this = this;
        var targetTouches = evt.targetTouches;
        Array.from(targetTouches).forEach(function (touch) {
            _this._add(touch);
        });
        return this._touchList;
    };
    TouchRecord.prototype.update = function (evt) {
        var _this = this;
        var touches = evt.touches, changedTouches = evt.changedTouches;
        Array.from(touches).forEach(function (touch) {
            _this._renew(touch);
        });
        this._setActiveID(changedTouches);
        return this._touchList;
    };
    TouchRecord.prototype.release = function (evt) {
        var _this = this;
        delete this._activeTouchID;
        Array.from(evt.changedTouches).forEach(function (touch) {
            _this._delete(touch);
        });
    };
    TouchRecord.prototype._add = function (touch) {
        if (this._has(touch)) {
            // reset tracker
            this._delete(touch);
        }
        var tracker = new Tracker(touch);
        this._touchList[touch.identifier] = tracker;
    };
    TouchRecord.prototype._renew = function (touch) {
        if (!this._has(touch)) {
            return;
        }
        var tracker = this._touchList[touch.identifier];
        tracker.update(touch);
    };
    TouchRecord.prototype._delete = function (touch) {
        delete this._touchList[touch.identifier];
    };
    TouchRecord.prototype._has = function (touch) {
        return this._touchList.hasOwnProperty(touch.identifier);
    };
    TouchRecord.prototype._setActiveID = function (touches) {
        this._activeTouchID = touches[touches.length - 1].identifier;
    };
    TouchRecord.prototype._getActiveTracker = function () {
        var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
        return _touchList[_activeTouchID];
    };
    return TouchRecord;
}());

//# sourceMappingURL=touch-record.js.map

/***/ }),
/* 172 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp)
/* harmony export */ });
function clamp(value, lower, upper) {
    return Math.max(lower, Math.min(upper, value));
}
//# sourceMappingURL=clamp.js.map

/***/ }),
/* 173 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
function debounce(fn, wait, leading) {
    if (wait === void 0) { wait = 0; }
    var timer;
    var lastCalledAt = -Infinity;
    return function debouncedFn() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (leading) {
            var now = Date.now();
            var elapsed = now - lastCalledAt;
            lastCalledAt = now;
            if (elapsed >= wait) {
                fn.apply(this, args);
            }
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(_this, args);
        }, wait);
    };
}
//# sourceMappingURL=debounce.js.map

/***/ }),
/* 174 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Options: () => (/* binding */ Options)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _decorators___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);


var Options = /** @class */ (function () {
    function Options(config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        /**
         * Momentum reduction damping factor, a float value between `(0, 1)`.
         * The lower the value is, the more smooth the scrolling will be
         * (also the more paint frames).
         */
        this.damping = 0.1;
        /**
         * Minimal size for scrollbar thumbs.
         */
        this.thumbMinSize = 20;
        /**
         * Render every frame in integer pixel values
         * set to `true` to improve scrolling performance.
         */
        this.renderByPixels = true;
        /**
         * Keep scrollbar tracks visible
         */
        this.alwaysShowTracks = false;
        /**
         * Set to `true` to allow outer scrollbars continue scrolling
         * when current scrollbar reaches edge.
         */
        this.continuousScrolling = true;
        /**
         * Delegate wheel events and touch events to the given element.
         * By default, the container element is used.
         * This option will be useful for dealing with fixed elements.
         */
        this.delegateTo = null;
        /**
         * Options for plugins. Syntax:
         *   plugins[pluginName] = pluginOptions: any
         */
        this.plugins = {};
        Object.keys(config).forEach(function (prop) {
            _this[prop] = config[prop];
        });
    }
    Object.defineProperty(Options.prototype, "wheelEventTarget", {
        get: function () {
            return this.delegateTo;
        },
        set: function (el) {
            console.warn('[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.');
            this.delegateTo = el;
        },
        enumerable: true,
        configurable: true
    });
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_decorators___WEBPACK_IMPORTED_MODULE_0__.range)(0, 1)
    ], Options.prototype, "damping", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_decorators___WEBPACK_IMPORTED_MODULE_0__.range)(0, Infinity)
    ], Options.prototype, "thumbMinSize", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        _decorators___WEBPACK_IMPORTED_MODULE_0__.boolean
    ], Options.prototype, "renderByPixels", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        _decorators___WEBPACK_IMPORTED_MODULE_0__.boolean
    ], Options.prototype, "alwaysShowTracks", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        _decorators___WEBPACK_IMPORTED_MODULE_0__.boolean
    ], Options.prototype, "continuousScrolling", void 0);
    return Options;
}());

//# sourceMappingURL=options.js.map

/***/ }),
/* 175 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boolean: () => (/* reexport safe */ _boolean__WEBPACK_IMPORTED_MODULE_1__.boolean),
/* harmony export */   debounce: () => (/* reexport safe */ _debounce__WEBPACK_IMPORTED_MODULE_2__.debounce),
/* harmony export */   range: () => (/* reexport safe */ _range__WEBPACK_IMPORTED_MODULE_0__.range)
/* harmony export */ });
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(177);
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(178);



//# sourceMappingURL=index.js.map

/***/ }),
/* 176 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   range: () => (/* binding */ range)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);

function range(min, max) {
    if (min === void 0) { min = -Infinity; }
    if (max === void 0) { max = Infinity; }
    return function (proto, key) {
        var alias = "_" + key;
        Object.defineProperty(proto, key, {
            get: function () {
                return this[alias];
            },
            set: function (val) {
                Object.defineProperty(this, alias, {
                    value: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(val, min, max),
                    enumerable: false,
                    writable: true,
                    configurable: true,
                });
            },
            enumerable: true,
            configurable: true,
        });
    };
}
//# sourceMappingURL=range.js.map

/***/ }),
/* 177 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boolean: () => (/* binding */ boolean)
/* harmony export */ });
function boolean(proto, key) {
    var alias = "_" + key;
    Object.defineProperty(proto, key, {
        get: function () {
            return this[alias];
        },
        set: function (val) {
            Object.defineProperty(this, alias, {
                value: !!val,
                enumerable: false,
                writable: true,
                configurable: true,
            });
        },
        enumerable: true,
        configurable: true,
    });
}
//# sourceMappingURL=boolean.js.map

/***/ }),
/* 178 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);


function debounce() {
    var options = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        options[_i] = arguments[_i];
    }
    return function (_proto, key, descriptor) {
        var fn = descriptor.value;
        return {
            get: function () {
                if (!this.hasOwnProperty(key)) {
                    Object.defineProperty(this, key, {
                        value: _utils__WEBPACK_IMPORTED_MODULE_0__.debounce.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArrays)([fn], options)),
                    });
                }
                return this[key];
            },
        };
    };
}
//# sourceMappingURL=debounce.js.map

/***/ }),
/* 179 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackController: () => (/* binding */ TrackController)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(182);
/* harmony import */ var _decorators___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(175);




var TrackController = /** @class */ (function () {
    function TrackController(_scrollbar) {
        this._scrollbar = _scrollbar;
        var thumbMinSize = _scrollbar.options.thumbMinSize;
        this.xAxis = new _track__WEBPACK_IMPORTED_MODULE_0__.ScrollbarTrack(_direction__WEBPACK_IMPORTED_MODULE_1__.TrackDirection.X, thumbMinSize);
        this.yAxis = new _track__WEBPACK_IMPORTED_MODULE_0__.ScrollbarTrack(_direction__WEBPACK_IMPORTED_MODULE_1__.TrackDirection.Y, thumbMinSize);
        this.xAxis.attachTo(_scrollbar.containerEl);
        this.yAxis.attachTo(_scrollbar.containerEl);
        if (_scrollbar.options.alwaysShowTracks) {
            this.xAxis.show();
            this.yAxis.show();
        }
    }
    /**
     * Updates track appearance
     */
    TrackController.prototype.update = function () {
        var _a = this._scrollbar, size = _a.size, offset = _a.offset;
        this.xAxis.update(offset.x, size.container.width, size.content.width);
        this.yAxis.update(offset.y, size.container.height, size.content.height);
    };
    /**
     * Automatically hide tracks when scrollbar is in idle state
     */
    TrackController.prototype.autoHideOnIdle = function () {
        if (this._scrollbar.options.alwaysShowTracks) {
            return;
        }
        this.xAxis.hide();
        this.yAxis.hide();
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_decorators___WEBPACK_IMPORTED_MODULE_2__.debounce)(300)
    ], TrackController.prototype, "autoHideOnIdle", null);
    return TrackController;
}());

//# sourceMappingURL=index.js.map

/***/ }),
/* 180 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollbarTrack: () => (/* binding */ ScrollbarTrack)
/* harmony export */ });
/* harmony import */ var _thumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(165);


var ScrollbarTrack = /** @class */ (function () {
    function ScrollbarTrack(direction, thumbMinSize) {
        if (thumbMinSize === void 0) { thumbMinSize = 0; }
        /**
         * Track element
         */
        this.element = document.createElement('div');
        this._isShown = false;
        this.element.className = "scrollbar-track scrollbar-track-" + direction;
        this.thumb = new _thumb__WEBPACK_IMPORTED_MODULE_0__.ScrollbarThumb(direction, thumbMinSize);
        this.thumb.attachTo(this.element);
    }
    /**
     * Attach to scrollbar container element
     *
     * @param scrollbarContainer Scrollbar container element
     */
    ScrollbarTrack.prototype.attachTo = function (scrollbarContainer) {
        scrollbarContainer.appendChild(this.element);
    };
    /**
     * Show track immediately
     */
    ScrollbarTrack.prototype.show = function () {
        if (this._isShown) {
            return;
        }
        this._isShown = true;
        this.element.classList.add('show');
    };
    /**
     * Hide track immediately
     */
    ScrollbarTrack.prototype.hide = function () {
        if (!this._isShown) {
            return;
        }
        this._isShown = false;
        this.element.classList.remove('show');
    };
    ScrollbarTrack.prototype.update = function (scrollOffset, containerSize, pageSize) {
        (0,_utils___WEBPACK_IMPORTED_MODULE_1__.setStyle)(this.element, {
            display: pageSize <= containerSize ? 'none' : 'block',
        });
        this.thumb.update(scrollOffset, containerSize, pageSize);
    };
    return ScrollbarTrack;
}());

//# sourceMappingURL=track.js.map

/***/ }),
/* 181 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollbarThumb: () => (/* binding */ ScrollbarThumb)
/* harmony export */ });
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(165);


var ScrollbarThumb = /** @class */ (function () {
    function ScrollbarThumb(_direction, _minSize) {
        if (_minSize === void 0) { _minSize = 0; }
        this._direction = _direction;
        this._minSize = _minSize;
        /**
         * Thumb element
         */
        this.element = document.createElement('div');
        /**
         * Display size of the thumb
         * will always be greater than `scrollbar.options.thumbMinSize`
         */
        this.displaySize = 0;
        /**
         * Actual size of the thumb
         */
        this.realSize = 0;
        /**
         * Thumb offset to the top
         */
        this.offset = 0;
        this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction;
    }
    /**
     * Attach to track element
     *
     * @param trackEl Track element
     */
    ScrollbarThumb.prototype.attachTo = function (trackEl) {
        trackEl.appendChild(this.element);
    };
    ScrollbarThumb.prototype.update = function (scrollOffset, containerSize, pageSize) {
        // calculate thumb size
        // pageSize > containerSize -> scrollable
        this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
        this.displaySize = Math.max(this.realSize, this._minSize);
        // calculate thumb offset
        this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
        (0,_utils___WEBPACK_IMPORTED_MODULE_1__.setStyle)(this.element, this._getStyle());
    };
    ScrollbarThumb.prototype._getStyle = function () {
        switch (this._direction) {
            case _direction__WEBPACK_IMPORTED_MODULE_0__.TrackDirection.X:
                return {
                    width: this.displaySize + "px",
                    '-transform': "translate3d(" + this.offset + "px, 0, 0)",
                };
            case _direction__WEBPACK_IMPORTED_MODULE_0__.TrackDirection.Y:
                return {
                    height: this.displaySize + "px",
                    '-transform': "translate3d(0, " + this.offset + "px, 0)",
                };
            default:
                return null;
        }
    };
    return ScrollbarThumb;
}());

//# sourceMappingURL=thumb.js.map

/***/ }),
/* 182 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackDirection: () => (/* binding */ TrackDirection)
/* harmony export */ });
var TrackDirection;
(function (TrackDirection) {
    TrackDirection["X"] = "x";
    TrackDirection["Y"] = "y";
})(TrackDirection || (TrackDirection = {}));
//# sourceMappingURL=direction.js.map

/***/ }),
/* 183 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSize: () => (/* reexport safe */ _get_size__WEBPACK_IMPORTED_MODULE_0__.getSize),
/* harmony export */   isVisible: () => (/* reexport safe */ _is_visible__WEBPACK_IMPORTED_MODULE_1__.isVisible),
/* harmony export */   update: () => (/* reexport safe */ _update__WEBPACK_IMPORTED_MODULE_2__.update)
/* harmony export */ });
/* harmony import */ var _get_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _is_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(186);



//# sourceMappingURL=index.js.map

/***/ }),
/* 184 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSize: () => (/* binding */ getSize)
/* harmony export */ });
function getSize(scrollbar) {
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var containerStyles = getComputedStyle(containerEl);
    var paddings = [
        'paddingTop',
        'paddingBottom',
        'paddingLeft',
        'paddingRight',
    ].map(function (prop) {
        return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
    });
    var verticalPadding = paddings[0] + paddings[1];
    var horizontalPadding = paddings[2] + paddings[3];
    return {
        container: {
            // requires `overflow: hidden`
            width: containerEl.clientWidth,
            height: containerEl.clientHeight,
        },
        content: {
            // border width and paddings should be included
            width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
            height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding,
        },
    };
}
//# sourceMappingURL=get-size.js.map

/***/ }),
/* 185 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVisible: () => (/* binding */ isVisible)
/* harmony export */ });
function isVisible(scrollbar, elem) {
    var bounding = scrollbar.bounding;
    var targetBounding = elem.getBoundingClientRect();
    // check overlapping
    var top = Math.max(bounding.top, targetBounding.top);
    var left = Math.max(bounding.left, targetBounding.left);
    var right = Math.min(bounding.right, targetBounding.right);
    var bottom = Math.min(bounding.bottom, targetBounding.bottom);
    return top < bottom && left < right;
}
//# sourceMappingURL=is-visible.js.map

/***/ }),
/* 186 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
function update(scrollbar) {
    var newSize = scrollbar.getSize();
    var limit = {
        x: Math.max(newSize.content.width - newSize.container.width, 0),
        y: Math.max(newSize.content.height - newSize.container.height, 0),
    };
    // metrics
    var containerBounding = scrollbar.containerEl.getBoundingClientRect();
    var bounding = {
        top: Math.max(containerBounding.top, 0),
        right: Math.min(containerBounding.right, window.innerWidth),
        bottom: Math.min(containerBounding.bottom, window.innerHeight),
        left: Math.max(containerBounding.left, 0),
    };
    // assign props
    scrollbar.size = newSize;
    scrollbar.limit = limit;
    scrollbar.bounding = bounding;
    // update tracks
    scrollbar.track.update();
    // re-positioning
    scrollbar.setPosition();
}
//# sourceMappingURL=update.js.map

/***/ }),
/* 187 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollIntoView: () => (/* reexport safe */ _scroll_into_view__WEBPACK_IMPORTED_MODULE_2__.scrollIntoView),
/* harmony export */   scrollTo: () => (/* reexport safe */ _scroll_to__WEBPACK_IMPORTED_MODULE_1__.scrollTo),
/* harmony export */   setPosition: () => (/* reexport safe */ _set_position__WEBPACK_IMPORTED_MODULE_0__.setPosition)
/* harmony export */ });
/* harmony import */ var _set_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(188);
/* harmony import */ var _scroll_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(189);
/* harmony import */ var _scroll_into_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(190);



//# sourceMappingURL=index.js.map

/***/ }),
/* 188 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setPosition: () => (/* binding */ setPosition)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);



function setPosition(scrollbar, x, y) {
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
    if (options.renderByPixels) {
        x = Math.round(x);
        y = Math.round(y);
    }
    x = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(x, 0, limit.x);
    y = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(y, 0, limit.y);
    // position changed -> show track for 300ms
    if (x !== offset.x)
        track.xAxis.show();
    if (y !== offset.y)
        track.yAxis.show();
    if (!options.alwaysShowTracks) {
        track.autoHideOnIdle();
    }
    if (x === offset.x && y === offset.y) {
        return null;
    }
    offset.x = x;
    offset.y = y;
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setStyle)(contentEl, {
        '-transform': "translate3d(" + -x + "px, " + -y + "px, 0)",
    });
    track.update();
    return {
        offset: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, offset),
        limit: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, limit),
    };
}
//# sourceMappingURL=set-position.js.map

/***/ }),
/* 189 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollTo: () => (/* binding */ scrollTo)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);

var animationIDStorage = new WeakMap();
function scrollTo(scrollbar, x, y, duration, _a) {
    if (duration === void 0) { duration = 0; }
    var _b = _a === void 0 ? {} : _a, _c = _b.easing, easing = _c === void 0 ? defaultEasing : _c, callback = _b.callback;
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
    if (options.renderByPixels) {
        // ensure resolved with integer
        x = Math.round(x);
        y = Math.round(y);
    }
    var startX = offset.x;
    var startY = offset.y;
    var disX = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(x, 0, limit.x) - startX;
    var disY = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(y, 0, limit.y) - startY;
    var start = Date.now();
    function scroll() {
        var elapse = Date.now() - start;
        var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
        scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
        if (elapse >= duration) {
            if (typeof callback === 'function') {
                callback.call(scrollbar);
            }
        }
        else {
            var animationID = requestAnimationFrame(scroll);
            animationIDStorage.set(scrollbar, animationID);
        }
    }
    cancelAnimationFrame(animationIDStorage.get(scrollbar));
    scroll();
}
/**
 * easeOutCubic
 */
function defaultEasing(t) {
    return Math.pow((t - 1), 3) + 1;
}
//# sourceMappingURL=scroll-to.js.map

/***/ }),
/* 190 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollIntoView: () => (/* binding */ scrollIntoView)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);

function scrollIntoView(scrollbar, elem, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.alignToTop, alignToTop = _c === void 0 ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = _d === void 0 ? false : _d, _e = _b.offsetTop, offsetTop = _e === void 0 ? 0 : _e, _f = _b.offsetLeft, offsetLeft = _f === void 0 ? 0 : _f, _g = _b.offsetBottom, offsetBottom = _g === void 0 ? 0 : _g;
    var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
    if (!elem || !containerEl.contains(elem))
        return;
    var targetBounding = elem.getBoundingClientRect();
    if (onlyScrollIfNeeded && scrollbar.isVisible(elem))
        return;
    var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
    scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(delta, -offset.y, limit.y - offset.y));
}
//# sourceMappingURL=scroll-into-view.js.map

/***/ }),
/* 191 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollbarPlugin: () => (/* binding */ ScrollbarPlugin),
/* harmony export */   addPlugins: () => (/* binding */ addPlugins),
/* harmony export */   globalPlugins: () => (/* binding */ globalPlugins),
/* harmony export */   initPlugins: () => (/* binding */ initPlugins)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var ScrollbarPlugin = /** @class */ (function () {
    function ScrollbarPlugin(scrollbar, options) {
        var _newTarget = this.constructor;
        this.scrollbar = scrollbar;
        this.name = _newTarget.pluginName;
        this.options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _newTarget.defaultOptions), options);
    }
    ScrollbarPlugin.prototype.onInit = function () { };
    ScrollbarPlugin.prototype.onDestroy = function () { };
    ScrollbarPlugin.prototype.onUpdate = function () { };
    ScrollbarPlugin.prototype.onRender = function (_remainMomentum) { };
    ScrollbarPlugin.prototype.transformDelta = function (delta, _evt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, delta);
    };
    ScrollbarPlugin.pluginName = '';
    ScrollbarPlugin.defaultOptions = {};
    return ScrollbarPlugin;
}());

var globalPlugins = {
    order: new Set(),
    constructors: {},
};
function addPlugins() {
    var Plugins = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Plugins[_i] = arguments[_i];
    }
    Plugins.forEach(function (P) {
        var pluginName = P.pluginName;
        if (!pluginName) {
            throw new TypeError("plugin name is required");
        }
        globalPlugins.order.add(pluginName);
        globalPlugins.constructors[pluginName] = P;
    });
}
function initPlugins(scrollbar, options) {
    return Array.from(globalPlugins.order)
        .filter(function (pluginName) {
        return options[pluginName] !== false;
    })
        .map(function (pluginName) {
        var Plugin = globalPlugins.constructors[pluginName];
        var instance = new Plugin(scrollbar, options[pluginName]);
        // bind plugin options to `scrollbar.options`
        options[pluginName] = instance.options;
        return instance;
    });
}
//# sourceMappingURL=plugin.js.map

/***/ }),
/* 192 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   keyboardHandler: () => (/* reexport safe */ _keyboard__WEBPACK_IMPORTED_MODULE_0__.keyboardHandler),
/* harmony export */   mouseHandler: () => (/* reexport safe */ _mouse__WEBPACK_IMPORTED_MODULE_1__.mouseHandler),
/* harmony export */   resizeHandler: () => (/* reexport safe */ _resize__WEBPACK_IMPORTED_MODULE_2__.resizeHandler),
/* harmony export */   selectHandler: () => (/* reexport safe */ _select__WEBPACK_IMPORTED_MODULE_3__.selectHandler),
/* harmony export */   touchHandler: () => (/* reexport safe */ _touch__WEBPACK_IMPORTED_MODULE_4__.touchHandler),
/* harmony export */   wheelHandler: () => (/* reexport safe */ _wheel__WEBPACK_IMPORTED_MODULE_5__.wheelHandler)
/* harmony export */ });
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(194);
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(195);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(196);
/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(197);
/* harmony import */ var _wheel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(198);






//# sourceMappingURL=index.js.map

/***/ }),
/* 193 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   keyboardHandler: () => (/* binding */ keyboardHandler)
/* harmony export */ });
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);

var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["TAB"] = 9] = "TAB";
    KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
    KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
    KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KEY_CODE[KEY_CODE["END"] = 35] = "END";
    KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
    KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
    KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
    KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
    KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
})(KEY_CODE || (KEY_CODE = {}));
function keyboardHandler(scrollbar) {
    var addEvent = (0,_utils___WEBPACK_IMPORTED_MODULE_0__.eventScope)(scrollbar);
    var container = scrollbar.containerEl;
    addEvent(container, 'keydown', function (evt) {
        var activeElement = document.activeElement;
        if (activeElement !== container && !container.contains(activeElement)) {
            return;
        }
        if (isEditable(activeElement)) {
            return;
        }
        var delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
        if (!delta) {
            return;
        }
        var x = delta[0], y = delta[1];
        scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
            if (willScroll) {
                evt.preventDefault();
            }
            else {
                scrollbar.containerEl.blur();
                if (scrollbar.parent) {
                    scrollbar.parent.containerEl.focus();
                }
            }
        });
    });
}
function getKeyDelta(scrollbar, keyCode) {
    var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
    switch (keyCode) {
        case KEY_CODE.TAB:
            return handleTabKey(scrollbar);
        case KEY_CODE.SPACE:
            return [0, 200];
        case KEY_CODE.PAGE_UP:
            return [0, -size.container.height + 40];
        case KEY_CODE.PAGE_DOWN:
            return [0, size.container.height - 40];
        case KEY_CODE.END:
            return [0, limit.y - offset.y];
        case KEY_CODE.HOME:
            return [0, -offset.y];
        case KEY_CODE.LEFT:
            return [-40, 0];
        case KEY_CODE.UP:
            return [0, -40];
        case KEY_CODE.RIGHT:
            return [40, 0];
        case KEY_CODE.DOWN:
            return [0, 40];
        default:
            return null;
    }
}
function handleTabKey(scrollbar) {
    // handle in next frame
    requestAnimationFrame(function () {
        scrollbar.scrollIntoView(document.activeElement, {
            offsetTop: scrollbar.size.container.height / 2,
            offsetLeft: scrollbar.size.container.width / 2,
            onlyScrollIfNeeded: true,
        });
    });
}
function isEditable(elem) {
    if (elem.tagName === 'INPUT' ||
        elem.tagName === 'SELECT' ||
        elem.tagName === 'TEXTAREA' ||
        elem.isContentEditable) {
        return !elem.disabled;
    }
    return false;
}
//# sourceMappingURL=keyboard.js.map

/***/ }),
/* 194 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mouseHandler: () => (/* binding */ mouseHandler)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);


var Direction;
(function (Direction) {
    Direction[Direction["X"] = 0] = "X";
    Direction[Direction["Y"] = 1] = "Y";
})(Direction || (Direction = {}));
function mouseHandler(scrollbar) {
    var addEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.eventScope)(scrollbar);
    var container = scrollbar.containerEl;
    var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
    function calcMomentum(direction, clickPosition) {
        var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
        if (direction === Direction.X) {
            var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
            return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(clickPosition / totalWidth * size.content.width, 0, limit.x) - offset.x;
        }
        if (direction === Direction.Y) {
            var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
            return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(clickPosition / totalHeight * size.content.height, 0, limit.y) - offset.y;
        }
        return 0;
    }
    function getTrackDirection(elem) {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isOneOf)(elem, [xAxis.element, xAxis.thumb.element])) {
            return Direction.X;
        }
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isOneOf)(elem, [yAxis.element, yAxis.thumb.element])) {
            return Direction.Y;
        }
        return void 0;
    }
    var isMouseDown;
    var isMouseMoving;
    var startOffsetToThumb;
    var trackDirection;
    var containerRect;
    addEvent(container, 'click', function (evt) {
        if (isMouseMoving || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isOneOf)(evt.target, [xAxis.element, yAxis.element])) {
            return;
        }
        var track = evt.target;
        var direction = getTrackDirection(track);
        var rect = track.getBoundingClientRect();
        var clickPos = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPosition)(evt);
        if (direction === Direction.X) {
            var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(calcMomentum(direction, offsetOnTrack), 0);
        }
        if (direction === Direction.Y) {
            var offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(0, calcMomentum(direction, offsetOnTrack));
        }
    });
    addEvent(container, 'mousedown', function (evt) {
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isOneOf)(evt.target, [xAxis.thumb.element, yAxis.thumb.element])) {
            return;
        }
        isMouseDown = true;
        var thumb = evt.target;
        var cursorPos = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPosition)(evt);
        var thumbRect = thumb.getBoundingClientRect();
        trackDirection = getTrackDirection(thumb);
        // pointer offset to thumb
        startOffsetToThumb = {
            x: cursorPos.x - thumbRect.left,
            y: cursorPos.y - thumbRect.top,
        };
        // container bounding rectangle
        containerRect = container.getBoundingClientRect();
        // prevent selection, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/48
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setStyle)(scrollbar.containerEl, {
            '-user-select': 'none',
        });
    });
    addEvent(window, 'mousemove', function (evt) {
        if (!isMouseDown)
            return;
        isMouseMoving = true;
        var cursorPos = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPosition)(evt);
        if (trackDirection === Direction.X) {
            // get percentage of pointer position in track
            // then tranform to px
            // don't need easing
            var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
            scrollbar.setMomentum(calcMomentum(trackDirection, offsetOnTrack), 0);
        }
        if (trackDirection === Direction.Y) {
            var offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
            scrollbar.setMomentum(0, calcMomentum(trackDirection, offsetOnTrack));
        }
    });
    addEvent(window, 'mouseup blur', function () {
        isMouseDown = isMouseMoving = false;
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setStyle)(scrollbar.containerEl, {
            '-user-select': '',
        });
    });
}
//# sourceMappingURL=mouse.js.map

/***/ }),
/* 195 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resizeHandler: () => (/* binding */ resizeHandler)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);


function resizeHandler(scrollbar) {
    var addEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.eventScope)(scrollbar);
    addEvent(window, 'resize', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)(scrollbar.update.bind(scrollbar), 300));
}
//# sourceMappingURL=resize.js.map

/***/ }),
/* 196 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectHandler: () => (/* binding */ selectHandler)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);


function selectHandler(scrollbar) {
    var addEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.eventScope)(scrollbar);
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var isSelected = false;
    var isContextMenuOpened = false; // flag to prevent selection when context menu is opened
    var animationID;
    function scroll(_a) {
        var x = _a.x, y = _a.y;
        if (!x && !y)
            return;
        var offset = scrollbar.offset, limit = scrollbar.limit;
        // DISALLOW delta transformation
        scrollbar.setMomentum((0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(offset.x + x, 0, limit.x) - offset.x, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(offset.y + y, 0, limit.y) - offset.y);
        animationID = requestAnimationFrame(function () {
            scroll({ x: x, y: y });
        });
    }
    addEvent(window, 'mousemove', function (evt) {
        if (!isSelected)
            return;
        cancelAnimationFrame(animationID);
        var dir = calcMomentum(scrollbar, evt);
        scroll(dir);
    });
    // prevent scrolling when context menu is opened
    // NOTE: `contextmenu` event may be fired
    //          1. BEFORE `selectstart`: when user right-clicks on the text content -> prevent future scrolling,
    //          2. AFTER `selectstart`: when user right-clicks on the blank area -> cancel current scrolling,
    //        so we need to both set the flag and cancel current scrolling
    addEvent(contentEl, 'contextmenu', function () {
        // set the flag to prevent future scrolling
        isContextMenuOpened = true;
        // stop current scrolling
        cancelAnimationFrame(animationID);
        isSelected = false;
    });
    // reset context menu flag on mouse down
    // to ensure the scrolling is allowed in the next selection
    addEvent(contentEl, 'mousedown', function () {
        isContextMenuOpened = false;
    });
    addEvent(contentEl, 'selectstart', function () {
        if (isContextMenuOpened) {
            return;
        }
        cancelAnimationFrame(animationID);
        isSelected = true;
    });
    addEvent(window, 'mouseup blur', function () {
        cancelAnimationFrame(animationID);
        isSelected = false;
        isContextMenuOpened = false;
    });
    // patch for touch devices
    addEvent(containerEl, 'scroll', function (evt) {
        evt.preventDefault();
        containerEl.scrollTop = containerEl.scrollLeft = 0;
    });
}
function calcMomentum(scrollbar, evt) {
    var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    var _b = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPosition)(evt), x = _b.x, y = _b.y;
    var res = {
        x: 0,
        y: 0,
    };
    var padding = 20;
    if (x === 0 && y === 0)
        return res;
    if (x > right - padding) {
        res.x = (x - right + padding);
    }
    else if (x < left + padding) {
        res.x = (x - left - padding);
    }
    if (y > bottom - padding) {
        res.y = (y - bottom + padding);
    }
    else if (y < top + padding) {
        res.y = (y - top - padding);
    }
    res.x *= 2;
    res.y *= 2;
    return res;
}
//# sourceMappingURL=select.js.map

/***/ }),
/* 197 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   touchHandler: () => (/* binding */ touchHandler)
/* harmony export */ });
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);

var activeScrollbar;
function touchHandler(scrollbar) {
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var touchRecord = new _utils___WEBPACK_IMPORTED_MODULE_0__.TouchRecord();
    var addEvent = (0,_utils___WEBPACK_IMPORTED_MODULE_0__.eventScope)(scrollbar);
    var damping;
    var pointerCount = 0;
    addEvent(target, 'touchstart', function (evt) {
        // start records
        touchRecord.track(evt);
        // stop scrolling
        scrollbar.setMomentum(0, 0);
        // save damping
        if (pointerCount === 0) {
            damping = scrollbar.options.damping;
            scrollbar.options.damping = Math.max(damping, 0.5); // less frames on touchmove
        }
        pointerCount++;
    });
    addEvent(target, 'touchmove', function (evt) {
        if (activeScrollbar && activeScrollbar !== scrollbar)
            return;
        touchRecord.update(evt);
        var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
            if (willScroll && evt.cancelable) {
                evt.preventDefault();
                activeScrollbar = scrollbar;
            }
        });
    });
    addEvent(target, 'touchcancel touchend', function (evt) {
        var delta = touchRecord.getEasingDistance(damping);
        scrollbar.addTransformableMomentum(delta.x, delta.y, evt);
        pointerCount--;
        // restore damping
        if (pointerCount === 0) {
            scrollbar.options.damping = damping;
        }
        touchRecord.release(evt);
        activeScrollbar = null;
    });
}
//# sourceMappingURL=touch.js.map

/***/ }),
/* 198 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wheelHandler: () => (/* binding */ wheelHandler)
/* harmony export */ });
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);

function wheelHandler(scrollbar) {
    var addEvent = (0,_utils___WEBPACK_IMPORTED_MODULE_0__.eventScope)(scrollbar);
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var eventName = ('onwheel' in window || document.implementation.hasFeature('Events.wheel', '3.0')) ? 'wheel' : 'mousewheel';
    addEvent(target, eventName, function (evt) {
        var _a = normalizeDelta(evt), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
            if (willScroll) {
                evt.preventDefault();
            }
        });
    });
}
// Normalizing wheel delta
var DELTA_SCALE = {
    STANDARD: 1,
    OTHERS: -3,
};
var DELTA_MODE = [1.0, 28.0, 500.0];
var getDeltaMode = function (mode) { return DELTA_MODE[mode] || DELTA_MODE[0]; };
function normalizeDelta(evt) {
    if ('deltaX' in evt) {
        var mode = getDeltaMode(evt.deltaMode);
        return {
            x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
            y: evt.deltaY / DELTA_SCALE.STANDARD * mode,
        };
    }
    if ('wheelDeltaX' in evt) {
        return {
            x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
            y: evt.wheelDeltaY / DELTA_SCALE.OTHERS,
        };
    }
    // ie with touchpad
    return {
        x: 0,
        y: evt.wheelDelta / DELTA_SCALE.OTHERS,
    };
}
//# sourceMappingURL=wheel.js.map

/***/ }),
/* 199 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachStyle: () => (/* binding */ attachStyle),
/* harmony export */   detachStyle: () => (/* binding */ detachStyle)
/* harmony export */ });
var TRACK_BG = 'rgba(222, 222, 222, .75)';
var THUMB_BG = 'rgba(0, 0, 0, .5)';
// sets content's display type to `flow-root` to suppress margin collapsing
var SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + THUMB_BG + ";\n  border-radius: 4px;\n}\n";
var STYLE_ID = 'smooth-scrollbar-style';
var isStyleAttached = false;
function attachStyle() {
    if (isStyleAttached || typeof window === 'undefined') {
        return;
    }
    var styleEl = document.createElement('style');
    styleEl.id = STYLE_ID;
    styleEl.textContent = SCROLLBAR_STYLE;
    if (document.head) {
        document.head.appendChild(styleEl);
    }
    isStyleAttached = true;
}
function detachStyle() {
    if (!isStyleAttached || typeof window === 'undefined') {
        return;
    }
    var styleEl = document.getElementById(STYLE_ID);
    if (!styleEl || !styleEl.parentNode) {
        return;
    }
    styleEl.parentNode.removeChild(styleEl);
    isStyleAttached = false;
}
//# sourceMappingURL=style.js.map

/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var options = {
  'damping': 0.05
};
smooth_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"].init(document.querySelector('#my-scrollbar'), options);
})();

/******/ })()
;