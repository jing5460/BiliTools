'use strict';

var zlib = require('zlib');
var crypto = require('crypto');
var path = require('path');
var fs = require('fs');
var got = require('got');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n["default"] = e;
	return Object.freeze(n);
}

var crypto__namespace = /*#__PURE__*/_interopNamespace(crypto);
var path__namespace = /*#__PURE__*/_interopNamespace(path);
var fs__namespace = /*#__PURE__*/_interopNamespace(fs);
var got__default = /*#__PURE__*/_interopDefaultLegacy(got);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$b =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$a = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$9 = fails$a;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$9(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$8 = fails$a;

var functionBindNative = !fails$8(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$2 = functionBindNative;

var call$5 = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$5.bind(call$5) : function () {
  return call$5.apply(call$5, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var bind = FunctionPrototype$2.bind;
var call$4 = FunctionPrototype$2.call;
var uncurryThis$c = NATIVE_BIND$1 && bind.bind(call$4, call$4);

var functionUncurryThis = NATIVE_BIND$1 ? function (fn) {
  return fn && uncurryThis$c(fn);
} : function (fn) {
  return fn && function () {
    return call$4.apply(fn, arguments);
  };
};

var uncurryThis$b = functionUncurryThis;

var toString$5 = uncurryThis$b({}.toString);
var stringSlice = uncurryThis$b(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice(toString$5(it), 8, -1);
};

var uncurryThis$a = functionUncurryThis;
var fails$7 = fails$a;
var classof$2 = classofRaw$1;

var $Object$3 = Object;
var split = uncurryThis$a(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$7(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$2(it) == 'String' ? split(it, '') : $Object$3(it);
} : $Object$3;

var $TypeError$6 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$3 = function (it) {
  if (it == undefined) throw $TypeError$6("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$3;

var toIndexedObject$4 = function (it) {
  return IndexedObject(requireObjectCoercible$2(it));
};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$d = function (argument) {
  return typeof argument == 'function';
};

var isCallable$c = isCallable$d;

var isObject$8 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$c(it);
};

var global$a = global$b;
var isCallable$b = isCallable$d;

var aFunction = function (argument) {
  return isCallable$b(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$a[namespace]) : global$a[namespace] && global$a[namespace][method];
};

var uncurryThis$9 = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$9({}.isPrototypeOf);

var getBuiltIn$4 = getBuiltIn$5;

var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

var global$9 = global$b;
var userAgent = engineUserAgent;

var process$1 = global$9.process;
var Deno = global$9.Deno;
var versions = process$1 && process$1.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$1;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version$1 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$1 = +match[1];
  }
}

var engineV8Version = version$1;

/* eslint-disable es-x/no-symbol -- required for testing */

var V8_VERSION = engineV8Version;
var fails$6 = fails$a;

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$6(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es-x/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = nativeSymbol;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$3 = getBuiltIn$5;
var isCallable$a = isCallable$d;
var isPrototypeOf$1 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$a($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$2(it));
};

var $String$3 = String;

var tryToString$1 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$9 = isCallable$d;
var tryToString = tryToString$1;

var $TypeError$5 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$1 = function (argument) {
  if (isCallable$9(argument)) return argument;
  throw $TypeError$5(tryToString(argument) + ' is not a function');
};

var aCallable = aCallable$1;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$1 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var call$3 = functionCall;
var isCallable$8 = isCallable$d;
var isObject$7 = isObject$8;

var $TypeError$4 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$8(fn = input.toString) && !isObject$7(val = call$3(fn, input))) return val;
  if (isCallable$8(fn = input.valueOf) && !isObject$7(val = call$3(fn, input))) return val;
  if (pref !== 'string' && isCallable$8(fn = input.toString) && !isObject$7(val = call$3(fn, input))) return val;
  throw $TypeError$4("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$8 = global$b;

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty$3 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$3(global$8, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$8[key] = value;
  } return value;
};

var global$7 = global$b;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$7[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.23.1',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.23.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$1 = requireObjectCoercible$3;

var $Object$1 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$2 = function (argument) {
  return $Object$1(requireObjectCoercible$1(argument));
};

var uncurryThis$8 = functionUncurryThis;
var toObject$1 = toObject$2;

var hasOwnProperty = uncurryThis$8({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$1(it), key);
};

var uncurryThis$7 = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$4 = uncurryThis$7(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$4(++id + postfix, 36);
};

var global$6 = global$b;
var shared$2 = shared$3.exports;
var hasOwn$7 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$6.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$4 = function (name) {
  if (!hasOwn$7(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$7(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var call$2 = functionCall;
var isObject$6 = isObject$8;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$3 = wellKnownSymbol$4;

var $TypeError$3 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$3('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$6(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$2(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$1(result)) return result;
    throw $TypeError$3("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$5 = global$b;
var isObject$5 = isObject$8;

var document$1 = global$5.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$8 = descriptors;
var fails$5 = fails$a;
var createElement = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$8 && !fails$5(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$7 = descriptors;
var call$1 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$3 = toIndexedObject$4;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$6 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$3(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$6(O, P)) return createPropertyDescriptor$2(!call$1(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$6 = descriptors;
var fails$4 = fails$a;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$4(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$4 = isObject$8;

var $String$2 = String;
var $TypeError$2 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$5 = function (argument) {
  if (isObject$4(argument)) return argument;
  throw $TypeError$2($String$2(argument) + ' is not an object');
};

var DESCRIPTORS$5 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$4 = anObject$5;
var toPropertyKey = toPropertyKey$2;

var $TypeError$1 = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$4(O);
  P = toPropertyKey(P);
  anObject$4(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$4(O);
  P = toPropertyKey(P);
  anObject$4(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$1('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$4 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;

var createNonEnumerableProperty$4 = DESCRIPTORS$4 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$2 = {exports: {}};

var DESCRIPTORS$3 = descriptors;
var hasOwn$5 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$5(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$6 = functionUncurryThis;
var isCallable$7 = isCallable$d;
var store$1 = sharedStore;

var functionToString = uncurryThis$6(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$7(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$2 = store$1.inspectSource;

var global$4 = global$b;
var isCallable$6 = isCallable$d;
var inspectSource$1 = inspectSource$2;

var WeakMap$1 = global$4.WeakMap;

var nativeWeakMap = isCallable$6(WeakMap$1) && /native code/.test(inspectSource$1(WeakMap$1));

var shared$1 = shared$3.exports;
var uid = uid$2;

var keys = shared$1('keys');

var sharedKey$2 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$3 = global$b;
var uncurryThis$5 = functionUncurryThis;
var isObject$3 = isObject$8;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$4 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey$1 = sharedKey$2;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$3.TypeError;
var WeakMap = global$3.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis$5(store.get);
  var wmhas = uncurryThis$5(store.has);
  var wmset = uncurryThis$5(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$3[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$4(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$4(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var fails$3 = fails$a;
var isCallable$5 = isCallable$d;
var hasOwn$3 = hasOwnProperty_1;
var DESCRIPTORS$2 = descriptors;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var inspectSource = inspectSource$2;
var InternalStateModule = internalState;

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty$2 = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$3(function () {
  return defineProperty$2(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$3(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    defineProperty$2(value, 'name', { value: name, configurable: true });
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$3(options, 'arity') && value.length !== options.arity) {
    defineProperty$2(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$3(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$2) defineProperty$2(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$3(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$5(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

var isCallable$4 = isCallable$d;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$1 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$4(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    if (!options.unsafe) delete O[key];
    else if (O[key]) simple = true;
    if (simple) O[key] = value;
    else definePropertyModule$2.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$2 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$2 = toIndexedObject$4;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$2($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var uncurryThis$4 = functionUncurryThis;
var hasOwn$2 = hasOwnProperty_1;
var toIndexedObject$1 = toIndexedObject$4;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$1 = uncurryThis$4([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$2(hiddenKeys$2, key) && hasOwn$2(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$2(O, key = names[i++])) {
    ~indexOf(result, key) || push$1(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$2 = getBuiltIn$5;
var uncurryThis$3 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$3 = anObject$5;

var concat = uncurryThis$3([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$3(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$1 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$2 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$1(target, key) && !(exceptions && hasOwn$1(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$2 = fails$a;
var isCallable$3 = isCallable$d;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$3(detection) ? fails$2(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$2 = global$b;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var defineBuiltIn = defineBuiltIn$1;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties$1 = copyConstructorProperties$2;
var isForced = isForced_1;

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
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$2;
  } else if (STATIC) {
    target = global$2[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$2[TARGET] || {}).prototype;
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
      copyConstructorProperties$1(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$2(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$1 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule = objectDefineProperty;
var anObject$2 = anObject$5;
var toIndexedObject = toIndexedObject$4;
var objectKeys = objectKeys$1;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$2(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$1 = getBuiltIn$5;

var html$1 = getBuiltIn$1('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$1 = anObject$5;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey = sharedKey$2;

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
// eslint-disable-next-line es-x/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$1(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$2 = wellKnownSymbol$4;
var create = objectCreate;
var defineProperty$1 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$2('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty$1(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $$2 = _export;
var toObject = toObject$2;
var lengthOfArrayLike = lengthOfArrayLike$2;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var addToUnscopables = addToUnscopables$1;

// `Array.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
$$2({ target: 'Array', proto: true }, {
  at: function at(index) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var relativeIndex = toIntegerOrInfinity$1(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : O[k];
  }
});

addToUnscopables('at');

var wellKnownSymbol$1 = wellKnownSymbol$4;

var TO_STRING_TAG$1 = wellKnownSymbol$1('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$2 = isCallable$d;
var classofRaw = classofRaw$1;
var wellKnownSymbol = wellKnownSymbol$4;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
};

var classof = classof$1;

var $String$1 = String;

var toString$3 = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var $$1 = _export;
var uncurryThis$2 = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$3;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toString$2 = toString$3;
var fails$1 = fails$a;

var charAt = uncurryThis$2(''.charAt);

var FORCED$1 = fails$1(function () {
  // eslint-disable-next-line es-x/no-array-string-prototype-at -- safe
  return '𠮷'.at(-2) !== '\uD842';
});

// `String.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
$$1({ target: 'String', proto: true, forced: FORCED$1 }, {
  at: function at(index) {
    var S = toString$2(requireObjectCoercible(this));
    var len = S.length;
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : charAt(S, k);
  }
});

function isArg(arg, short) {
  const args = process.argv.slice(2);
  short = short || arg.at(0);
  return Boolean(args.indexOf(`--${arg}`) !== -1 || args.find(str => str.startsWith(`--${arg}=`)) || args.indexOf(`-${short}`) !== -1 || args.find(str => str.startsWith(`-${short}=`)));
}

var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply$1) : function () {
  return call.apply(apply$1, arguments);
});

var isCallable$1 = isCallable$d;

var $String = String;
var $TypeError = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$1(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$1 = functionUncurryThis;
var anObject = anObject$5;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$1(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var defineProperty = objectDefineProperty.f;

var proxyAccessor$1 = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

var isCallable = isCallable$d;
var isObject$2 = isObject$8;
var setPrototypeOf$1 = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf$1 &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$2(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf$1($this, NewTargetPrototype);
  return $this;
};

var toString$1 = toString$3;

var normalizeStringArgument$1 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$1(argument);
};

var isObject$1 = isObject$8;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
var installErrorCause$1 = function (O, options) {
  if (isObject$1(options) && 'cause' in options) {
    createNonEnumerableProperty$1(O, 'cause', options.cause);
  }
};

var uncurryThis = functionUncurryThis;

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

var clearErrorStack$1 = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};

var fails = fails$a;
var createPropertyDescriptor = createPropertyDescriptor$3;

var errorStackInstallable = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});

var getBuiltIn = getBuiltIn$5;
var hasOwn = hasOwnProperty_1;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var isPrototypeOf = objectIsPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var copyConstructorProperties = copyConstructorProperties$2;
var proxyAccessor = proxyAccessor$1;
var inheritIfRequired = inheritIfRequired$1;
var normalizeStringArgument = normalizeStringArgument$1;
var installErrorCause = installErrorCause$1;
var clearErrorStack = clearErrorStack$1;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;
var DESCRIPTORS = descriptors;

var wrapErrorConstructorWithCause$1 = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(result, 'stack', clearErrorStack(result.stack, 2));
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};

/* eslint-disable no-unused-vars -- required for functions `.length` */

var $ = _export;
var global$1 = global$b;
var apply = functionApply;
var wrapErrorConstructorWithCause = wrapErrorConstructorWithCause$1;

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global$1[WEB_ASSEMBLY];

var FORCED = Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://github.com/tc39/proposal-error-cause
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});

async function runTask(configs) {
  const {
    logger
  } = await Promise.resolve().then(function () { return log; });
  const length = configs.length;

  if (length === 0) {
    return Promise.reject(new Error('配置为空或者 cookie 不合法！'));
  }

  const {
    initialize
  } = await Promise.resolve().then(function () { return globalVar; });
  initialize(configs[0]);
  const task = await Promise.resolve().then(function () { return dailyTask; });

  for (let index = 0; index < configs.length; index++) {
    logger.info(`正在执行第${index + 1}/${length}个配置`);
    initialize(configs[index]);
    await task.dailyTasks();
    logger.info('执行完毕\n');
  }
}

(async () => {
  const {
    getConfig
  } = await Promise.resolve().then(function () { return setConfig$1; });

  if (isArg('item') || isArg('I')) {
    return oldItemArgTask(getConfig(false));
  }

  const configs = getConfig(true);
  return await runTask(configs);
})();

async function oldItemArgTask(config) {
  const {
    initialize
  } = await Promise.resolve().then(function () { return globalVar; });
  initialize(config);
  const {
    dailyTasks
  } = await Promise.resolve().then(function () { return dailyTask; });
  return await dailyTasks();
}

const isQingLongPanel = () => {
  return 'true' === 'true' ;
};
function isCFC() {
  return global.IS_CFC || '__IS_CFC__' === 'true';
}
function isAGC() {
  return global.IS_CFC || '__IS_AGC__' === 'true';
}
function setConfigFileName() {
  const defaultConfigFileName = 'cat_bili_config' ,
        ext = '.json';
  const {
    BILITOOLS_FILE_NAME
  } = process.env;

  if (BILITOOLS_FILE_NAME) {
    if (BILITOOLS_FILE_NAME.endsWith(ext)) {
      return BILITOOLS_FILE_NAME;
    }

    return `${BILITOOLS_FILE_NAME}${ext}`;
  }

  return defaultConfigFileName + ext;
}
function isFC() {
  const keys = Object.keys(process.env);
  const tags = ['securityToken', 'accessKeyID', 'accessKeySecret', 'FC_FUNCTION_MEMORY_SIZE', 'FC_FUNC_CODE_PATH', 'FC_RUNTIME_VERSION'];
  return keys.filter(key => tags.includes(key)).length >= 3 || '__IS_FC__' === 'true';
}
function isSCF() {
  const keys = Object.keys(process.env);
  const isSCF = keys.filter(key => key.startsWith('SCF_')).length >= 10;
  const isTENCENTCLOUD = keys.filter(key => key.startsWith('TENCENTCLOUD_')).length >= 3;
  return isSCF && isTENCENTCLOUD || '__IS_SCF__' === 'true';
}
function isServerless() {
  return isSCF() || isFC() || isAGC() || isCFC();
}

const defaultComments = ['棒', '棒唉', '棒耶', '加油~', 'UP加油!', '支持~', '支持支持！', '催更啦', '顶顶', '留下脚印~', '干杯', 'bilibili干杯', 'o(*￣▽￣*)o', '(｡･∀･)ﾉﾞ嗨', '(●ˇ∀ˇ●)', '( •̀ ω •́ )y', '(ง •_•)ง', '>.<', '^_~'];
const kaomoji = ['(⌒▽⌒)', '（￣▽￣）', '(=・ω・=)', '(｀・ω・´)', '(〜￣△￣)〜', '(･∀･)', '(°∀°)ﾉ', '(￣3￣)', '╮(￣▽￣)╭', '_(:3」∠)_', '( ´_ゝ｀)', '←_←', '→_→', '(<_<)', '(>_>)', '(;¬_¬)', '(ﾟДﾟ≡ﾟдﾟ)!?', 'Σ(ﾟдﾟ;)', 'Σ( ￣□￣||)', '(´；ω；`)', '（/TДT)/', '(^・ω・^ )', '(｡･ω･｡)', '(●￣(ｴ)￣●)', 'ε=ε=(ノ≧∇≦)ノ', '(´･_･`)', '(-_-#)', '（￣へ￣）', '(￣ε(#￣) Σ', 'ヽ(`Д´)ﾉ', '（#-_-)┯━┯', '(╯°口°)╯(┴—┴', '←◡←', '( ♥д♥)', 'Σ>―(〃°ω°〃)♡→', '⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄', '(╬ﾟдﾟ)▄︻┻┳═一', '･*･:≡(　ε:)', '(汗)', '(苦笑)'];
const DAILY_RUN_TIME = '17:30:00-23:40:00';
const MS2DATE = 86_400_000;
const MS2HOUR = 3_600_000;
const LOTTERY_EXCLUDE = ['舰', '船', '航海', '代金券', '优惠券', '自拍', '照', '写真', '图', '提督', '车车一局', '再来一局', '游戏道具'];
const LOTTERY_INCLUDE = ['谢'];
const LOTTERY_UP_BLACKLIST = [65566781, 1277481241, 1643654862, 603676925];

const toString = Object.prototype.toString;
function is(val, type) {
  return toString.call(val) === `[object ${type}]`;
}
function isDef(val) {
  return typeof val !== 'undefined';
}
function isUnDef(val) {
  return !isDef(val);
}
function isObject(val) {
  return val !== null && is(val, 'Object');
}
function isEmpty(val) {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
}
function isDate(val) {
  return is(val, 'Date');
}
function isNull(val) {
  return val === null;
}
function isNullAndUnDef(val) {
  return isUnDef(val) && isNull(val);
}
function isNullOrUnDef(val) {
  return isUnDef(val) || isNull(val);
}
function isNumber(val) {
  return is(val, 'Number');
}
function isPromise(val) {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function isString(val) {
  return is(val, 'String');
}
function isFunction(val) {
  return typeof val === 'function';
}
function isBoolean(val) {
  return is(val, 'Boolean');
}
function isRegExp(val) {
  return is(val, 'RegExp');
}
function isArray(val) {
  return val && Array.isArray(val);
}
function isWindow(val) {
  return typeof window !== 'undefined' && is(val, 'Window');
}
function isElement(val) {
  return isObject(val) && !!val.tagName;
}
function isMap(val) {
  return is(val, 'Map');
}
const isServer = typeof window === 'undefined';
const isClient = !isServer;
function isUrl(path) {
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}
function isEmail(val) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(val);
}

const MAX_MINUTES = 59,
      MAX_HOURS = 23,
      DAILY_MIN_HOURS = 19;
function getMonthHasDays(now) {
  const nowTime = now || getPRCDate(),
        year = nowTime.getFullYear(),
        month = nowTime.getMonth() + 1,
        smallMonth = [4, 6, 9, 11];
  const isLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;

  if (month === 2) {
    return isLeapYear ? 29 : 28;
  } else if (smallMonth.includes(month)) {
    return 30;
  } else {
    return 31;
  }
}
function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, t => {
    const e = crypto__namespace.randomBytes(1)[0] % 16;
    return (t === 'x' ? e : 3 & e | 8).toString(16);
  });
}
function getPRCDate() {
  const now = new Date(),
        nowTime = now.getTime(),
        timezone = now.getTimezoneOffset() / 60;
  return new Date(nowTime + (timezone + 8) * MS2HOUR);
}
function jsonp2Object(jsonp) {
  const jsonpData = jsonp.replace(/^\w+\(/, '').replace(/\)$/, '');
  return JSON.parse(jsonpData);
}
function getPageNum(n, m) {
  return Math.ceil(m / n);
}
function setCron(time = 60_000, slsType) {
  time = time || 60_000;
  const pre = getPRCDate().getTime() + time;
  const next = new Date(pre);
  const seconds = next.getSeconds(),
        minutes = next.getMinutes(),
        hours = next.getHours();
  return formatCron({
    hours,
    minutes,
    seconds
  }, slsType);
}
function random(lower, upper, floating) {
  if (floating && typeof floating !== 'boolean') {
    upper = floating = undefined;
  }

  if (floating === undefined) {
    if (typeof upper === 'boolean') {
      floating = upper;
      upper = undefined;
    } else if (typeof lower === 'boolean') {
      floating = lower;
      lower = undefined;
    }
  }

  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  } else if (upper === undefined) {
    upper = lower;
    lower = 0;
  }

  if (lower > upper) {
    const temp = lower;
    lower = upper;
    upper = temp;
  }

  if (floating || lower % 1 || upper % 1) {
    const rand = Math.random();
    return Math.min(lower + rand * (upper - lower + parseFloat('1e-' + ((rand + '').length - 1))), upper);
  }

  return lower + Math.floor(Math.random() * (upper - lower + 1));
}
function randomDailyRunTime(dailyRunTime = DAILY_RUN_TIME, slsType) {
  const taskTime = dailyRunTime.split('-');
  const startTime = taskTime[0].split(':').map(str => +str);
  const endTime = taskTime[1].split(':').map(str => +str);
  const hours = random(startTime[0] ?? DAILY_MIN_HOURS, endTime[0] ?? MAX_HOURS);
  let minutes = 0;

  if (hours == startTime[0]) {
    minutes = random(startTime[1], MAX_MINUTES);
  } else if (hours == endTime[0]) {
    minutes = random(endTime[1]);
  } else {
    minutes = random(MAX_MINUTES);
  }

  let seconds = 0;

  if (hours == startTime[0]) {
    seconds = random(startTime[2], MAX_MINUTES);
  } else if (hours == endTime[0]) {
    seconds = random(endTime[2]);
  } else {
    seconds = random(MAX_MINUTES);
  }

  return formatCron({
    seconds,
    hours,
    minutes
  }, slsType);
}
function formatCron({
  hours,
  minutes,
  seconds
}, type) {
  seconds = seconds || 0;
  let value;

  switch (type) {
    case 'scf':
      value = `${seconds} ${minutes} ${hours} * * * *`;
      break;

    case 'fc':
      value = `${seconds} ${minutes} ${hours} * * *`;
      break;

    case 'cfc':
      value = `corn(${minutes} ${hours} * * *)`;
      break;

    default:
      value = `${seconds} ${minutes} ${hours} * * * *`;
  }

  return {
    value,
    string: `${hours}:${minutes}:${seconds}`
  };
}
function randomString(length, lower) {
  const chars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += getRandomItem(chars);
  }

  if (lower) {
    return result.toLowerCase();
  }

  return result;
}
function getVisitId() {
  const randomNum = random(1, 9);
  const randomStr = randomString(10, true);
  return `${randomNum}${randomStr}0`;
}
function pushIfNotExist(array, item) {
  if (!array.includes(item)) {
    array.push(item);
  }
}
function getNewObject(object) {
  return object || {};
}
function cloneObject(object, deep = false) {
  if (!isObject(object)) {
    return object;
  }

  if (Array.isArray(object)) {
    return object.map(item => cloneObject(item, deep));
  }

  if (deep) {
    return Object.keys(object).reduce((result, key) => {
      result[key] = cloneObject(object[key], deep);
      return result;
    }, {});
  }

  return Object.assign({}, object);
}
function deepMergeObject(target, source) {
  if (target === undefined || source === undefined) {
    return target || source;
  }

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  if (Array.isArray(target) && Array.isArray(source)) {
    return target.concat(source);
  }

  return Object.keys(source).reduce((result, key) => {
    result[key] = deepMergeObject(target[key], source[key]);
    return result;
  }, target);
}
function stringify$1(entries) {
  if (!isObject(entries) && !isArray(entries)) {
    return entries;
  }

  const searchParams = new URLSearchParams();

  if (!Array.isArray(entries)) {
    entries = Object.entries(entries);
  }

  entries.forEach(([key, value]) => {
    if (isObject(value)) {
      searchParams.append(key, JSON.stringify(value));
      return;
    }

    searchParams.append(key, String(value));
  });
  return searchParams.toString();
}
function getRandomItem(indexable) {
  return indexable[random(indexable.length - 1)];
}
function md5(str, uppercase = false) {
  const hash = crypto__namespace.createHash('md5');
  hash.update(str);
  return uppercase ? hash.digest('hex').toUpperCase() : hash.digest('hex');
}
function mergeHeaders(headers = {}, headersToMerge = {}) {
  function toLowerCase(object) {
    return Object.keys(object).reduce((result, key) => {
      result[key.toLowerCase()] = object[key];
      return result;
    }, {});
  }

  return Object.assign({}, toLowerCase(headers), toLowerCase(headersToMerge));
}
function arr2numArr(strArr) {
  return strArr && strArr.map(str => Number(str)).filter(num => num > 0 && num % 1 === 0);
}
function base64Encode(str) {
  return Buffer.from(str).toString('base64');
}
function isTodayInTimeArr(timeArr) {
  if (!timeArr || !timeArr.length) {
    return true;
  }

  const today = new Date().getDate();
  return timeArr.includes(today);
}

function formatTime(date, hasDate = true) {
  if (hasDate) {
    return date.toLocaleString('zh-CN', {
      hour12: false
    });
  }

  return date.toLocaleString('zh-CN', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });
}

function getLevelValues(level = 'info') {
  const LEVEL_VALUE = ['error', 'warn', 'info', 'verbose', 'debug'];
  const levelIndex = LEVEL_VALUE.indexOf(level);
  return levelIndex !== -1 ? LEVEL_VALUE.slice(0, levelIndex + 1) : LEVEL_VALUE;
}

function resolvePath(str) {
  return path__namespace.resolve(process.cwd(), str);
}

class Logger {
  static pushValue = '';
  static brChar = '\n';
  month = getPRCDate().getMonth() + 1;
  errorFile = resolvePath(`./logs/bt_error-${this.month}.log`);
  logFile = resolvePath(`./logs/bt_combined-${this.month}.log`);
  noFile = false;

  constructor(options = {
    console: 'info',
    file: 'info',
    push: 'info'
  }, name = 'default') {
    this.options = options;
    this.name = name;
    this.consoleLeval = getLevelValues(this.options.console);
    this.fileLeval = getLevelValues(this.options.file);
    this.pushLeval = getLevelValues(this.options.push);
    this.noFile = isQingLongPanel() ;

    if (!this.noFile) {
      this.createLogFile();
    }
  }

  log({
    level
  }, message, emoji) {
    emoji = emoji || emojis[level];
    const prcTime = getPRCDate(),
          messageStr = `\u005b${emoji} ${formatTime(prcTime, false)}\u005d ${message}\n`,
          stderr = ['error', 'warn'].includes(level);

    if (this.consoleLeval.includes(level)) {
      this.Conslole(messageStr, stderr);
    }

    if (!this.noFile && this.fileLeval.includes(level)) {
      this.File(`\u005b${emoji} ${formatTime(prcTime, true)}\u005d ${message}\n`, stderr);
    }

    if (this.pushLeval.includes(level)) {
      this.Push(`\u005b${emoji} ${formatTime(prcTime, false)}\u005d ${message}${Logger.brChar}`);
    }
  }

  error(message) {
    this.log({
      level: 'error'
    }, message);
  }

  warn(message) {
    this.log({
      level: 'warn'
    }, message);
  }

  info(message, emoji) {
    this.log({
      level: 'info'
    }, message, emoji);
  }

  verbose(message) {
    this.log({
      level: 'verbose'
    }, message);
  }

  debug(message) {
    this.log({
      level: 'debug'
    }, message);
  }

  Conslole(message, stderr) {
    if (stderr) {
      process.stderr.write(message);
      return;
    }

    process.stdout.write(message);
  }

  File(message, stderr) {
    if (stderr) {
      fs__namespace.appendFileSync(this.errorFile, message, 'utf-8');
    }

    fs__namespace.appendFileSync(this.logFile, message, 'utf-8');
  }

  Push(message) {
    Logger.pushValue += message;
  }

  createLogFile() {
    const logsPath = resolvePath('./logs');

    if (!fs__namespace.existsSync(logsPath)) {
      fs__namespace.mkdirSync(logsPath);
    }
  }

  static async init() {
    Logger.pushValue = '';

    try {
      const {
        TaskConfig
      } = await Promise.resolve().then(function () { return globalVar; });
      Logger.brChar = TaskConfig.message.br || '\n';
    } catch {}
  }

}
const logger = new Logger({
  console: 'debug',
  file: 'debug',
  push: 'debug'
});
const emojis = {
  error: '❓',
  warn: '❔',
  info: '👻',
  verbose: '💬',
  debug: '🐛'
};

var log = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Logger: Logger,
	logger: logger
});

function gzipEncode(str) {
  try {
    return zlib.gzipSync(encodeURIComponent(str)).toString('base64');
  } catch (e) {
    return 'Error: 当前字符串不能被Gzip压缩';
  }
}
function gzipDecode(str) {
  try {
    const result = zlib.unzipSync(Buffer.from(str, 'base64')).toString();

    try {
      return decodeURIComponent(unicode2str(result));
    } catch (error) {
      return unescape(result);
    }
  } catch (e) {
    throw new Error('Error: 当前字符串不能被Gzip解压');
  }
}
function unicode2str(str) {
  return str.replace(/\\u([\d\w]{4})/gi, (_match, grp) => String.fromCodePoint(parseInt(grp, 16)));
}

class SystemConfig {
  static configFileName = setConfigFileName();
  static isQingLongPanel = isQingLongPanel();
}

// This is a generated file. Do not edit.
var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;

var unicode = {
	Space_Separator: Space_Separator,
	ID_Start: ID_Start,
	ID_Continue: ID_Continue
};

var util = {
    isSpaceSeparator (c) {
        return typeof c === 'string' && unicode.Space_Separator.test(c)
    },

    isIdStartChar (c) {
        return typeof c === 'string' && (
            (c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c === '$') || (c === '_') ||
        unicode.ID_Start.test(c)
        )
    },

    isIdContinueChar (c) {
        return typeof c === 'string' && (
            (c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c >= '0' && c <= '9') ||
        (c === '$') || (c === '_') ||
        (c === '\u200C') || (c === '\u200D') ||
        unicode.ID_Continue.test(c)
        )
    },

    isDigit (c) {
        return typeof c === 'string' && /[0-9]/.test(c)
    },

    isHexDigit (c) {
        return typeof c === 'string' && /[0-9A-Fa-f]/.test(c)
    },
};

let source;
let parseState;
let stack;
let pos;
let line;
let column;
let token;
let key;
let root;

var parse = function parse (text, reviver) {
    source = String(text);
    parseState = 'start';
    stack = [];
    pos = 0;
    line = 1;
    column = 0;
    token = undefined;
    key = undefined;
    root = undefined;

    do {
        token = lex();

        // This code is unreachable.
        // if (!parseStates[parseState]) {
        //     throw invalidParseState()
        // }

        parseStates[parseState]();
    } while (token.type !== 'eof')

    if (typeof reviver === 'function') {
        return internalize({'': root}, '', reviver)
    }

    return root
};

function internalize (holder, name, reviver) {
    const value = holder[name];
    if (value != null && typeof value === 'object') {
        for (const key in value) {
            const replacement = internalize(value, key, reviver);
            if (replacement === undefined) {
                delete value[key];
            } else {
                value[key] = replacement;
            }
        }
    }

    return reviver.call(holder, name, value)
}

let lexState;
let buffer;
let doubleQuote;
let sign;
let c;

function lex () {
    lexState = 'default';
    buffer = '';
    doubleQuote = false;
    sign = 1;

    for (;;) {
        c = peek();

        // This code is unreachable.
        // if (!lexStates[lexState]) {
        //     throw invalidLexState(lexState)
        // }

        const token = lexStates[lexState]();
        if (token) {
            return token
        }
    }
}

function peek () {
    if (source[pos]) {
        return String.fromCodePoint(source.codePointAt(pos))
    }
}

function read () {
    const c = peek();

    if (c === '\n') {
        line++;
        column = 0;
    } else if (c) {
        column += c.length;
    } else {
        column++;
    }

    if (c) {
        pos += c.length;
    }

    return c
}

const lexStates = {
    default () {
        switch (c) {
        case '\t':
        case '\v':
        case '\f':
        case ' ':
        case '\u00A0':
        case '\uFEFF':
        case '\n':
        case '\r':
        case '\u2028':
        case '\u2029':
            read();
            return

        case '/':
            read();
            lexState = 'comment';
            return

        case undefined:
            read();
            return newToken('eof')
        }

        if (util.isSpaceSeparator(c)) {
            read();
            return
        }

        // This code is unreachable.
        // if (!lexStates[parseState]) {
        //     throw invalidLexState(parseState)
        // }

        return lexStates[parseState]()
    },

    comment () {
        switch (c) {
        case '*':
            read();
            lexState = 'multiLineComment';
            return

        case '/':
            read();
            lexState = 'singleLineComment';
            return
        }

        throw invalidChar(read())
    },

    multiLineComment () {
        switch (c) {
        case '*':
            read();
            lexState = 'multiLineCommentAsterisk';
            return

        case undefined:
            throw invalidChar(read())
        }

        read();
    },

    multiLineCommentAsterisk () {
        switch (c) {
        case '*':
            read();
            return

        case '/':
            read();
            lexState = 'default';
            return

        case undefined:
            throw invalidChar(read())
        }

        read();
        lexState = 'multiLineComment';
    },

    singleLineComment () {
        switch (c) {
        case '\n':
        case '\r':
        case '\u2028':
        case '\u2029':
            read();
            lexState = 'default';
            return

        case undefined:
            read();
            return newToken('eof')
        }

        read();
    },

    value () {
        switch (c) {
        case '{':
        case '[':
            return newToken('punctuator', read())

        case 'n':
            read();
            literal('ull');
            return newToken('null', null)

        case 't':
            read();
            literal('rue');
            return newToken('boolean', true)

        case 'f':
            read();
            literal('alse');
            return newToken('boolean', false)

        case '-':
        case '+':
            if (read() === '-') {
                sign = -1;
            }

            lexState = 'sign';
            return

        case '.':
            buffer = read();
            lexState = 'decimalPointLeading';
            return

        case '0':
            buffer = read();
            lexState = 'zero';
            return

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            buffer = read();
            lexState = 'decimalInteger';
            return

        case 'I':
            read();
            literal('nfinity');
            return newToken('numeric', Infinity)

        case 'N':
            read();
            literal('aN');
            return newToken('numeric', NaN)

        case '"':
        case "'":
            doubleQuote = (read() === '"');
            buffer = '';
            lexState = 'string';
            return
        }

        throw invalidChar(read())
    },

    identifierNameStartEscape () {
        if (c !== 'u') {
            throw invalidChar(read())
        }

        read();
        const u = unicodeEscape();
        switch (u) {
        case '$':
        case '_':
            break

        default:
            if (!util.isIdStartChar(u)) {
                throw invalidIdentifier()
            }

            break
        }

        buffer += u;
        lexState = 'identifierName';
    },

    identifierName () {
        switch (c) {
        case '$':
        case '_':
        case '\u200C':
        case '\u200D':
            buffer += read();
            return

        case '\\':
            read();
            lexState = 'identifierNameEscape';
            return
        }

        if (util.isIdContinueChar(c)) {
            buffer += read();
            return
        }

        return newToken('identifier', buffer)
    },

    identifierNameEscape () {
        if (c !== 'u') {
            throw invalidChar(read())
        }

        read();
        const u = unicodeEscape();
        switch (u) {
        case '$':
        case '_':
        case '\u200C':
        case '\u200D':
            break

        default:
            if (!util.isIdContinueChar(u)) {
                throw invalidIdentifier()
            }

            break
        }

        buffer += u;
        lexState = 'identifierName';
    },

    sign () {
        switch (c) {
        case '.':
            buffer = read();
            lexState = 'decimalPointLeading';
            return

        case '0':
            buffer = read();
            lexState = 'zero';
            return

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            buffer = read();
            lexState = 'decimalInteger';
            return

        case 'I':
            read();
            literal('nfinity');
            return newToken('numeric', sign * Infinity)

        case 'N':
            read();
            literal('aN');
            return newToken('numeric', NaN)
        }

        throw invalidChar(read())
    },

    zero () {
        switch (c) {
        case '.':
            buffer += read();
            lexState = 'decimalPoint';
            return

        case 'e':
        case 'E':
            buffer += read();
            lexState = 'decimalExponent';
            return

        case 'x':
        case 'X':
            buffer += read();
            lexState = 'hexadecimal';
            return
        }

        return newToken('numeric', sign * 0)
    },

    decimalInteger () {
        switch (c) {
        case '.':
            buffer += read();
            lexState = 'decimalPoint';
            return

        case 'e':
        case 'E':
            buffer += read();
            lexState = 'decimalExponent';
            return
        }

        if (util.isDigit(c)) {
            buffer += read();
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    decimalPointLeading () {
        if (util.isDigit(c)) {
            buffer += read();
            lexState = 'decimalFraction';
            return
        }

        throw invalidChar(read())
    },

    decimalPoint () {
        switch (c) {
        case 'e':
        case 'E':
            buffer += read();
            lexState = 'decimalExponent';
            return
        }

        if (util.isDigit(c)) {
            buffer += read();
            lexState = 'decimalFraction';
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    decimalFraction () {
        switch (c) {
        case 'e':
        case 'E':
            buffer += read();
            lexState = 'decimalExponent';
            return
        }

        if (util.isDigit(c)) {
            buffer += read();
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    decimalExponent () {
        switch (c) {
        case '+':
        case '-':
            buffer += read();
            lexState = 'decimalExponentSign';
            return
        }

        if (util.isDigit(c)) {
            buffer += read();
            lexState = 'decimalExponentInteger';
            return
        }

        throw invalidChar(read())
    },

    decimalExponentSign () {
        if (util.isDigit(c)) {
            buffer += read();
            lexState = 'decimalExponentInteger';
            return
        }

        throw invalidChar(read())
    },

    decimalExponentInteger () {
        if (util.isDigit(c)) {
            buffer += read();
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    hexadecimal () {
        if (util.isHexDigit(c)) {
            buffer += read();
            lexState = 'hexadecimalInteger';
            return
        }

        throw invalidChar(read())
    },

    hexadecimalInteger () {
        if (util.isHexDigit(c)) {
            buffer += read();
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    string () {
        switch (c) {
        case '\\':
            read();
            buffer += escape();
            return

        case '"':
            if (doubleQuote) {
                read();
                return newToken('string', buffer)
            }

            buffer += read();
            return

        case "'":
            if (!doubleQuote) {
                read();
                return newToken('string', buffer)
            }

            buffer += read();
            return

        case '\n':
        case '\r':
            throw invalidChar(read())

        case '\u2028':
        case '\u2029':
            separatorChar(c);
            break

        case undefined:
            throw invalidChar(read())
        }

        buffer += read();
    },

    start () {
        switch (c) {
        case '{':
        case '[':
            return newToken('punctuator', read())

        // This code is unreachable since the default lexState handles eof.
        // case undefined:
        //     return newToken('eof')
        }

        lexState = 'value';
    },

    beforePropertyName () {
        switch (c) {
        case '$':
        case '_':
            buffer = read();
            lexState = 'identifierName';
            return

        case '\\':
            read();
            lexState = 'identifierNameStartEscape';
            return

        case '}':
            return newToken('punctuator', read())

        case '"':
        case "'":
            doubleQuote = (read() === '"');
            lexState = 'string';
            return
        }

        if (util.isIdStartChar(c)) {
            buffer += read();
            lexState = 'identifierName';
            return
        }

        throw invalidChar(read())
    },

    afterPropertyName () {
        if (c === ':') {
            return newToken('punctuator', read())
        }

        throw invalidChar(read())
    },

    beforePropertyValue () {
        lexState = 'value';
    },

    afterPropertyValue () {
        switch (c) {
        case ',':
        case '}':
            return newToken('punctuator', read())
        }

        throw invalidChar(read())
    },

    beforeArrayValue () {
        if (c === ']') {
            return newToken('punctuator', read())
        }

        lexState = 'value';
    },

    afterArrayValue () {
        switch (c) {
        case ',':
        case ']':
            return newToken('punctuator', read())
        }

        throw invalidChar(read())
    },

    end () {
        // This code is unreachable since it's handled by the default lexState.
        // if (c === undefined) {
        //     read()
        //     return newToken('eof')
        // }

        throw invalidChar(read())
    },
};

function newToken (type, value) {
    return {
        type,
        value,
        line,
        column,
    }
}

function literal (s) {
    for (const c of s) {
        const p = peek();

        if (p !== c) {
            throw invalidChar(read())
        }

        read();
    }
}

function escape () {
    const c = peek();
    switch (c) {
    case 'b':
        read();
        return '\b'

    case 'f':
        read();
        return '\f'

    case 'n':
        read();
        return '\n'

    case 'r':
        read();
        return '\r'

    case 't':
        read();
        return '\t'

    case 'v':
        read();
        return '\v'

    case '0':
        read();
        if (util.isDigit(peek())) {
            throw invalidChar(read())
        }

        return '\0'

    case 'x':
        read();
        return hexEscape()

    case 'u':
        read();
        return unicodeEscape()

    case '\n':
    case '\u2028':
    case '\u2029':
        read();
        return ''

    case '\r':
        read();
        if (peek() === '\n') {
            read();
        }

        return ''

    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        throw invalidChar(read())

    case undefined:
        throw invalidChar(read())
    }

    return read()
}

function hexEscape () {
    let buffer = '';
    let c = peek();

    if (!util.isHexDigit(c)) {
        throw invalidChar(read())
    }

    buffer += read();

    c = peek();
    if (!util.isHexDigit(c)) {
        throw invalidChar(read())
    }

    buffer += read();

    return String.fromCodePoint(parseInt(buffer, 16))
}

function unicodeEscape () {
    let buffer = '';
    let count = 4;

    while (count-- > 0) {
        const c = peek();
        if (!util.isHexDigit(c)) {
            throw invalidChar(read())
        }

        buffer += read();
    }

    return String.fromCodePoint(parseInt(buffer, 16))
}

const parseStates = {
    start () {
        if (token.type === 'eof') {
            throw invalidEOF()
        }

        push();
    },

    beforePropertyName () {
        switch (token.type) {
        case 'identifier':
        case 'string':
            key = token.value;
            parseState = 'afterPropertyName';
            return

        case 'punctuator':
            // This code is unreachable since it's handled by the lexState.
            // if (token.value !== '}') {
            //     throw invalidToken()
            // }

            pop();
            return

        case 'eof':
            throw invalidEOF()
        }

        // This code is unreachable since it's handled by the lexState.
        // throw invalidToken()
    },

    afterPropertyName () {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'punctuator' || token.value !== ':') {
        //     throw invalidToken()
        // }

        if (token.type === 'eof') {
            throw invalidEOF()
        }

        parseState = 'beforePropertyValue';
    },

    beforePropertyValue () {
        if (token.type === 'eof') {
            throw invalidEOF()
        }

        push();
    },

    beforeArrayValue () {
        if (token.type === 'eof') {
            throw invalidEOF()
        }

        if (token.type === 'punctuator' && token.value === ']') {
            pop();
            return
        }

        push();
    },

    afterPropertyValue () {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'punctuator') {
        //     throw invalidToken()
        // }

        if (token.type === 'eof') {
            throw invalidEOF()
        }

        switch (token.value) {
        case ',':
            parseState = 'beforePropertyName';
            return

        case '}':
            pop();
        }

        // This code is unreachable since it's handled by the lexState.
        // throw invalidToken()
    },

    afterArrayValue () {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'punctuator') {
        //     throw invalidToken()
        // }

        if (token.type === 'eof') {
            throw invalidEOF()
        }

        switch (token.value) {
        case ',':
            parseState = 'beforeArrayValue';
            return

        case ']':
            pop();
        }

        // This code is unreachable since it's handled by the lexState.
        // throw invalidToken()
    },

    end () {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'eof') {
        //     throw invalidToken()
        // }
    },
};

function push () {
    let value;

    switch (token.type) {
    case 'punctuator':
        switch (token.value) {
        case '{':
            value = {};
            break

        case '[':
            value = [];
            break
        }

        break

    case 'null':
    case 'boolean':
    case 'numeric':
    case 'string':
        value = token.value;
        break

    // This code is unreachable.
    // default:
    //     throw invalidToken()
    }

    if (root === undefined) {
        root = value;
    } else {
        const parent = stack[stack.length - 1];
        if (Array.isArray(parent)) {
            parent.push(value);
        } else {
            parent[key] = value;
        }
    }

    if (value !== null && typeof value === 'object') {
        stack.push(value);

        if (Array.isArray(value)) {
            parseState = 'beforeArrayValue';
        } else {
            parseState = 'beforePropertyName';
        }
    } else {
        const current = stack[stack.length - 1];
        if (current == null) {
            parseState = 'end';
        } else if (Array.isArray(current)) {
            parseState = 'afterArrayValue';
        } else {
            parseState = 'afterPropertyValue';
        }
    }
}

function pop () {
    stack.pop();

    const current = stack[stack.length - 1];
    if (current == null) {
        parseState = 'end';
    } else if (Array.isArray(current)) {
        parseState = 'afterArrayValue';
    } else {
        parseState = 'afterPropertyValue';
    }
}

// This code is unreachable.
// function invalidParseState () {
//     return new Error(`JSON5: invalid parse state '${parseState}'`)
// }

// This code is unreachable.
// function invalidLexState (state) {
//     return new Error(`JSON5: invalid lex state '${state}'`)
// }

function invalidChar (c) {
    if (c === undefined) {
        return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
    }

    return syntaxError(`JSON5: invalid character '${formatChar(c)}' at ${line}:${column}`)
}

function invalidEOF () {
    return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
}

// This code is unreachable.
// function invalidToken () {
//     if (token.type === 'eof') {
//         return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
//     }

//     const c = String.fromCodePoint(token.value.codePointAt(0))
//     return syntaxError(`JSON5: invalid character '${formatChar(c)}' at ${line}:${column}`)
// }

function invalidIdentifier () {
    column -= 5;
    return syntaxError(`JSON5: invalid identifier character at ${line}:${column}`)
}

function separatorChar (c) {
    console.warn(`JSON5: '${formatChar(c)}' in strings is not valid ECMAScript; consider escaping`);
}

function formatChar (c) {
    const replacements = {
        "'": "\\'",
        '"': '\\"',
        '\\': '\\\\',
        '\b': '\\b',
        '\f': '\\f',
        '\n': '\\n',
        '\r': '\\r',
        '\t': '\\t',
        '\v': '\\v',
        '\0': '\\0',
        '\u2028': '\\u2028',
        '\u2029': '\\u2029',
    };

    if (replacements[c]) {
        return replacements[c]
    }

    if (c < ' ') {
        const hexString = c.charCodeAt(0).toString(16);
        return '\\x' + ('00' + hexString).substring(hexString.length)
    }

    return c
}

function syntaxError (message) {
    const err = new SyntaxError(message);
    err.lineNumber = line;
    err.columnNumber = column;
    return err
}

var stringify = function stringify (value, replacer, space) {
    const stack = [];
    let indent = '';
    let propertyList;
    let replacerFunc;
    let gap = '';
    let quote;

    if (
        replacer != null &&
        typeof replacer === 'object' &&
        !Array.isArray(replacer)
    ) {
        space = replacer.space;
        quote = replacer.quote;
        replacer = replacer.replacer;
    }

    if (typeof replacer === 'function') {
        replacerFunc = replacer;
    } else if (Array.isArray(replacer)) {
        propertyList = [];
        for (const v of replacer) {
            let item;

            if (typeof v === 'string') {
                item = v;
            } else if (
                typeof v === 'number' ||
                v instanceof String ||
                v instanceof Number
            ) {
                item = String(v);
            }

            if (item !== undefined && propertyList.indexOf(item) < 0) {
                propertyList.push(item);
            }
        }
    }

    if (space instanceof Number) {
        space = Number(space);
    } else if (space instanceof String) {
        space = String(space);
    }

    if (typeof space === 'number') {
        if (space > 0) {
            space = Math.min(10, Math.floor(space));
            gap = '          '.substr(0, space);
        }
    } else if (typeof space === 'string') {
        gap = space.substr(0, 10);
    }

    return serializeProperty('', {'': value})

    function serializeProperty (key, holder) {
        let value = holder[key];
        if (value != null) {
            if (typeof value.toJSON5 === 'function') {
                value = value.toJSON5(key);
            } else if (typeof value.toJSON === 'function') {
                value = value.toJSON(key);
            }
        }

        if (replacerFunc) {
            value = replacerFunc.call(holder, key, value);
        }

        if (value instanceof Number) {
            value = Number(value);
        } else if (value instanceof String) {
            value = String(value);
        } else if (value instanceof Boolean) {
            value = value.valueOf();
        }

        switch (value) {
        case null: return 'null'
        case true: return 'true'
        case false: return 'false'
        }

        if (typeof value === 'string') {
            return quoteString(value)
        }

        if (typeof value === 'number') {
            return String(value)
        }

        if (typeof value === 'object') {
            return Array.isArray(value) ? serializeArray(value) : serializeObject(value)
        }

        return undefined
    }

    function quoteString (value) {
        const quotes = {
            "'": 0.1,
            '"': 0.2,
        };

        const replacements = {
            "'": "\\'",
            '"': '\\"',
            '\\': '\\\\',
            '\b': '\\b',
            '\f': '\\f',
            '\n': '\\n',
            '\r': '\\r',
            '\t': '\\t',
            '\v': '\\v',
            '\0': '\\0',
            '\u2028': '\\u2028',
            '\u2029': '\\u2029',
        };

        let product = '';

        for (let i = 0; i < value.length; i++) {
            const c = value[i];
            switch (c) {
            case "'":
            case '"':
                quotes[c]++;
                product += c;
                continue

            case '\0':
                if (util.isDigit(value[i + 1])) {
                    product += '\\x00';
                    continue
                }
            }

            if (replacements[c]) {
                product += replacements[c];
                continue
            }

            if (c < ' ') {
                let hexString = c.charCodeAt(0).toString(16);
                product += '\\x' + ('00' + hexString).substring(hexString.length);
                continue
            }

            product += c;
        }

        const quoteChar = quote || Object.keys(quotes).reduce((a, b) => (quotes[a] < quotes[b]) ? a : b);

        product = product.replace(new RegExp(quoteChar, 'g'), replacements[quoteChar]);

        return quoteChar + product + quoteChar
    }

    function serializeObject (value) {
        if (stack.indexOf(value) >= 0) {
            throw TypeError('Converting circular structure to JSON5')
        }

        stack.push(value);

        let stepback = indent;
        indent = indent + gap;

        let keys = propertyList || Object.keys(value);
        let partial = [];
        for (const key of keys) {
            const propertyString = serializeProperty(key, value);
            if (propertyString !== undefined) {
                let member = serializeKey(key) + ':';
                if (gap !== '') {
                    member += ' ';
                }
                member += propertyString;
                partial.push(member);
            }
        }

        let final;
        if (partial.length === 0) {
            final = '{}';
        } else {
            let properties;
            if (gap === '') {
                properties = partial.join(',');
                final = '{' + properties + '}';
            } else {
                let separator = ',\n' + indent;
                properties = partial.join(separator);
                final = '{\n' + indent + properties + ',\n' + stepback + '}';
            }
        }

        stack.pop();
        indent = stepback;
        return final
    }

    function serializeKey (key) {
        if (key.length === 0) {
            return quoteString(key)
        }

        const firstChar = String.fromCodePoint(key.codePointAt(0));
        if (!util.isIdStartChar(firstChar)) {
            return quoteString(key)
        }

        for (let i = firstChar.length; i < key.length; i++) {
            if (!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) {
                return quoteString(key)
            }
        }

        return key
    }

    function serializeArray (value) {
        if (stack.indexOf(value) >= 0) {
            throw TypeError('Converting circular structure to JSON5')
        }

        stack.push(value);

        let stepback = indent;
        indent = indent + gap;

        let partial = [];
        for (let i = 0; i < value.length; i++) {
            const propertyString = serializeProperty(String(i), value);
            partial.push((propertyString !== undefined) ? propertyString : 'null');
        }

        let final;
        if (partial.length === 0) {
            final = '[]';
        } else {
            if (gap === '') {
                let properties = partial.join(',');
                final = '[' + properties + ']';
            } else {
                let separator = ',\n' + indent;
                let properties = partial.join(separator);
                final = '[\n' + indent + properties + ',\n' + stepback + ']';
            }
        }

        stack.pop();
        indent = stepback;
        return final
    }
};

const JSON5$1 = {
    parse,
    stringify,
};

var lib = JSON5$1;

var json5 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': lib
});

const JSON5 = lib ? lib : json5;

function readJsonFile(filePath) {
  try {
    let content;

    if (fs.existsSync(filePath)) {
      content = fs.readFileSync(filePath, 'utf-8');
    } else if (fs.existsSync(filePath += '5')) {
      content = fs.readFileSync(filePath, 'utf-8');
    }

    if (!content) {
      return;
    }

    return JSON5.parse(content);
  } catch (error) {
    logger.error(error);
    jsonErrorHandle$1(error.message);
  }
}
function jsonErrorHandle$1(message) {
  if (!isString(message)) {
    return;
  }

  if (message.includes('SyntaxError: JSON5')) {
    throw new SyntaxError('配置文件存在，但是无法解析！可能 JSON5 格式不正确！');
  }

  throw new Error(message);
}

const resolveCWD = str => path__namespace.resolve(process.cwd(), str);

const resolveDir = str => path__namespace.resolve(__dirname, '../', str);

function jsonErrorHandle(message) {
  if (message.includes && message.includes('in JSON at position')) {
    throw new Error('配置文件存在，但是无法解析！可能 JSON 格式不正确！');
  }
}

const configPathArr = Array.from(new Set([resolveCWD('./config/config.dev.json'), resolveCWD(`./config/${SystemConfig.configFileName}`), resolveCWD(`./${SystemConfig.configFileName}`), resolveDir(`./config/${SystemConfig.configFileName}`), resolveDir(`./${SystemConfig.configFileName}`)]));
const qlOldConfigArr = ['./config.json', resolveCWD('./config/config.json')];

const getEnvConfig = () => {
  const {
    BILITOOLS_CONFIG,
    BILI_SCF_CONFIG,
    BILI_CONFIG
  } = process.env;
  const config = BILITOOLS_CONFIG || BILI_SCF_CONFIG || BILI_CONFIG;

  if (!config) {
    return undefined;
  }

  try {
    return JSON5.parse(gzipDecode(config));
  } catch (error) {
    logger.error(error);
    throw new Error('环境中的配置不是有效的 JSON 字符串！');
  }
};

function handleQLPanel(configArr) {
  const arg2 = process.argv.find(arg => arg.includes('--item') || arg.includes('-i') || arg.includes('-I'));

  if (!arg2) {
    return configArr[0];
  }

  const index = Number(arg2.split('=')[1]) - 1;

  if (!index || index >= configArr.length || index < 0) {
    logger.warn('似乎想要指定一个不存在的用户，我们将指定第一个用户');
    return configArr[0];
  }

  return configArr[index];
}

function handleMultiUserConfig(config) {
  let newConfig;
  const isArray = Array.isArray(config);

  if (isArray) {
    newConfig = config;
  } else {
    newConfig = config.account.filter(conf => conf.cookie);
  }

  if (newConfig.length === 0) {
    return undefined;
  }

  {
    return handleQLPanel(newConfig);
  }
}

function getConfigPathFile(filepath) {
  try {
    const config = readJsonFile(filepath);

    if (!config) {
      logger.error('配置文件为空，或配置内容缺失！');
      throw new Error('配置文件为空，或配置内容缺失！');
    }

    logger.verbose(`读取配置文件 ${filepath}`);

    if (isMultiUserConfig(config)) {
      return filterMultiUserConfig(config);
    }

    return [config];
  } catch (error) {
    logger.error(error);
    jsonErrorHandle(error.message);
    throw new Error(error.message || '配置文件不存在！');
  }
}

function setConfig() {
  if (globalThis.BILITOOLS_CONFIG) {
    return globalThis.BILITOOLS_CONFIG;
  }

  {
    configPathArr.splice(0, 1, ...qlOldConfigArr);
  }

  for (let index = 0; index < configPathArr.length; index++) {
    const config = readJsonFile(configPathArr[index]);

    if (config) {
      logger.verbose(`读取配置文件 ${configPathArr[index]}`);
      return config;
    }
  }

  return getEnvConfig();
}

function getConfig(more) {
  return checkConfig(setConfig(), more);
}
function checkConfig(config, more = false) {
  if (!config) {
    throw new Error('获取配置失败！未找到配置文件！');
  }

  if (more) {
    return filterMultiUserConfig(isMultiUserConfig(config) ? config : [config]);
  }

  if (isMultiUserConfig(config)) {
    const multiUserConfig = handleMultiUserConfig(config);

    if (multiUserConfig) {
      return multiUserConfig;
    }
  }

  if (!config.cookie) {
    throw new Error('配置文件中没有 cookie！');
  }

  return config;
}

function isMultiUserConfig(config) {
  if (Array.isArray(config)) {
    return true;
  }

  return Boolean(config.account && config.account.length);
}

function filterMultiUserConfig(config) {
  const filter = conf => conf.cookie && conf.cookie.length > 90 && ['bili_jct', 'SESSDATA', 'DedeUserID'].every(str => conf.cookie.includes(str));

  if (Array.isArray(config)) {
    return config.filter(filter);
  }

  return config.account.filter(filter);
}

var setConfig$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	getConfigPathFile: getConfigPathFile,
	getConfig: getConfig,
	checkConfig: checkConfig
});

function getCookieArray(cookie) {
  if (!cookie) return [];
  return cookie.split('; ').map(el => el.split('='));
}

function cookie2Obj(cookie, setCookie) {
  const setCookieArr = getCookieArray(setCookie === null || setCookie === void 0 ? void 0 : setCookie[0]).filter(el => el.length === 2);
  const arr = getCookieArray(cookie).concat(setCookieArr).filter(el => el.length === 2);
  const obj = {};

  for (const it of arr) {
    if (obj[it[0]]) {
      obj[it[0]] = it[1];
    } else {
      Object.defineProperty(obj, it[0], {
        value: it[1],
        enumerable: true,
        writable: true
      });
    }
  }

  return obj;
}

function getCookieString(obj) {
  const string = Object.keys(obj).reduce((pre, cur) => {
    return pre + `${cur}=${obj[cur]}; `;
  }, '');
  return string.substring(0, string.length - 2 || 0);
}

function getCookie (cookie, setCookie) {
  if (!cookie) return '';
  if (!setCookie || setCookie.length === 0) return cookie;
  return getCookieString(cookie2Obj(cookie, setCookie));
}
function getCookieItem(cookie, key) {
  if (!cookie) return null;
  const reg = `(?:^|)${key}=([^;]*)(?:;|$)`;
  const r = cookie.match(reg);
  return r ? r[1] : null;
}
function getUserId(cookie) {
  return Number(getCookieItem(cookie, 'DedeUserID')) || 0;
}
function getBiliJct(cookie) {
  return getCookieItem(cookie, 'bili_jct') || '';
}
function getLIVE_BUVID(cookie) {
  return getCookieItem(cookie, 'LIVE_BUVID') || '';
}

const defaultConfig = {
  cookie: '',
  message: {
    br: '\n',
    email: {
      host: 'smtp.163.com',
      port: 465
    },
    pushplusToken: process.env.PUSHPLUS_TOKEN,
    api: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 5000,
      url: '',
      proxy: {
        host: '',
        port: 443,
        auth: ''
      },
      data: {}
    }
  },
  function: {
    silver2Coin: true,
    liveSignTask: true,
    addCoins: true,
    mangaSign: false,
    shareAndWatch: true,
    supGroupSign: false,
    liveSendMessage: false,
    taskReward: true,
    charging: false,
    getVipPrivilege: false,
    giveGift: false,
    matchGame: false,
    liveLottery: false,
    liveRedPack: false,
    liveIntimacy: false,
    mangaTask: false
  },
  apiDelay: [2, 6],
  userAgent: '',
  dailyRunTime: DAILY_RUN_TIME,
  targetLevel: undefined,
  stayCoins: undefined,
  targetCoins: undefined,
  customizeUp: undefined,
  giftUp: undefined,
  coinRetryNum: undefined,
  chargeUpId: undefined,
  chargePresetTime: undefined,
  matchCoins: undefined,
  matchSelection: undefined,
  matchDiff: undefined,
  match: {
    coins: 5,
    selection: 1,
    diff: 0
  },
  charge: {
    mid: 0,
    presetTime: [10, 20]
  },
  gift: {
    mids: []
  },
  coin: {
    customizeUp: [],
    retryNum: 4,
    targetLevel: 6,
    stayCoins: 0,
    targetCoins: 5
  },
  sls: {
    name: '',
    description: '',
    region: 'ap-chengdu',
    dailyRunTime: DAILY_RUN_TIME
  },
  lottery: {
    excludeAward: LOTTERY_EXCLUDE,
    includeAward: LOTTERY_INCLUDE,
    blackUid: LOTTERY_UP_BLACKLIST,
    isMoveTag: true,
    moveTag: '天选时刻',
    pageNum: 2,
    actFollowMsg: 'read',
    scanFollow: undefined,
    skipNeedFollow: false
  },
  redPack: {},
  intimacy: {
    liveSendMessage: true,
    liveShare: true,
    liveLike: true,
    liveHeart: false,
    whiteList: [],
    blackList: []
  },
  manga: {
    sign: true,
    buy: false,
    mc: [],
    name: [],
    love: true,
    buyInterval: 6,
    buyWeek: [3]
  },
  BILIJCT: '',
  USERID: 0
};
function getDefaultConfig() {
  return cloneObject(defaultConfig, true);
}
function mergeConfig(config) {
  return configValueHandle(oldConfigHandle(deepMergeObject(getDefaultConfig(), beforeMergeConfig(config))));
}
const compatibleMap = {
  targetLevel: ['coin', 'targetLevel'],
  stayCoins: ['coin', 'stayCoins'],
  targetCoins: ['coin', 'targetCoins'],
  customizeUp: ['coin', 'customizeUp'],
  coinRetryNum: ['coin', 'retryNum'],
  giftUp: ['gift', 'mids'],
  chargeUpId: ['charge', 'mid'],
  chargePresetTime: ['charge', 'presetTime'],
  matchCoins: ['match', 'coins'],
  matchSelection: ['match', 'selection'],
  matchDiff: ['match', 'diff']
};

function oldConfigHandle(config) {
  Object.keys(compatibleMap).forEach(oldKey => {
    if (config[oldKey] !== undefined) {
      const [newKey, newKey2] = compatibleMap[oldKey];
      config[newKey] = getNewObject(config[newKey]);
      config[newKey][newKey2] = config[oldKey];
    }

    delete config[oldKey];
  });
  return config;
}

function configValueHandle(config) {
  setConstValue(config);
  const {
    coin,
    gift,
    charge
  } = config;

  if (!isArray(config.apiDelay)) {
    config.apiDelay = [Number(config.apiDelay)];
  } else {
    config.apiDelay = arr2numArr(config.apiDelay);
  }

  coin.customizeUp = arr2numArr(coin.customizeUp);
  gift.mids = arr2numArr(gift.mids);

  if (gift.mids.length === 0) {
    gift.mids = coin.customizeUp;
  }

  if (!charge.mid) {
    charge.mid = config.USERID;
  }

  return config;
}

function setConstValue(config) {
  config.BILIJCT = getBiliJct(config.cookie);
  config.USERID = getUserId(config.cookie);
  return config;
}

function beforeMergeConfig(config) {
  const {
    message
  } = config;

  if (message && isString(message.api)) {
    const url = message.api;
    message.api = cloneObject(defaultConfig.message.api, true);
    message.api.url = url;
    message.api.method = 'GET';
  }

  return config;
}

class TaskConfigTemplate {
  constructor(config) {
    this.COOKIE = config.cookie;
    this.BILIJCT = config.BILIJCT;
    this.USERID = config.USERID;
    this.USER_AGENT = config.userAgent;
    this.BILI_API_DELAY = config.apiDelay;
    const message = config.message;
    this.PUSHPLUS_TOKEN = message.pushplusToken;
    const coin = config.coin;
    this.BILI_CUSTOMIZE_UP = coin.customizeUp;
    this.BILI_COIN_RETRY_NUM = coin.retryNum;
    this.BILI_TARGET_LEVEL = coin.targetLevel;
    this.BILI_STAY_COINS = coin.stayCoins;
    this.BILI_TARGET_COINS = coin.targetCoins;
    const gift = config.gift;
    this.BILI_GIFT_UP = gift.mids;
    const match = config.match;
    this.MATCH_COINS = match.coins;
    this.MATCH_SELECTION = match.selection;
    this.MATCH_DIFF = match.diff;
  }

}

let _taskConfig;

const TaskConfig = new Proxy({}, {
  get(_target, key) {
    if (!_taskConfig) {
      initialize();
    }

    return Reflect.get(_taskConfig, key);
  },

  set(_target, key, value) {
    if (key === 'config' && value) {
      initialize(value);
      return true;
    }

    return Reflect.set(_taskConfig, key, value);
  }

});

class TaskModuleTemplate {
  static money = 0;
  static coinsTask = 5;
  static share = false;
  static watch = false;
  static currentStartFun = 0;
  static bCoinCouponBalance = 0;
  static vipType = 0;
  static vipStatus = 0;
  static userLevel = 0;
}

let TaskModule = null;
function initialize(config) {
  if (!config) {
    config = getConfig(false);
  }

  const userConfig = mergeConfig(config);
  _taskConfig = { ...new TaskConfigTemplate(checkConfig(userConfig)),
    ...userConfig
  };
  TaskModule = class extends TaskModuleTemplate {};
  TaskModule.coinsTask = _taskConfig.BILI_TARGET_COINS;
}
function changeConfig(index) {
  const config = getConfig();

  if (config[index]) {
    initialize(config[index]);
  }
}

var globalVar = /*#__PURE__*/Object.freeze({
	__proto__: null,
	TaskConfig: TaskConfig,
	get TaskModule () { return TaskModule; },
	initialize: initialize,
	changeConfig: changeConfig
});

async function dailyTasks(cb, ...cbArg) {
  const {
    apiDelay,
    logger,
    Logger
  } = await Promise.resolve().then(function () { return index$2; });
  const {
    offFunctions
  } = await Promise.resolve().then(function () { return configOffFun; });
  const {
    sendMessage
  } = await Promise.resolve().then(function () { return sendNotify$1; });
  const {
    loginTask,
    default: bili
  } = await Promise.resolve().then(function () { return index$1; });
  const {
    printVersion
  } = await Promise.resolve().then(function () { return version; });
  await Logger.init();
  await printVersion();

  try {
    await loginTask();
  } catch (error) {
    logger.error(`登录失败: ${error}`);
    await sendMessage('登录失败', Logger.pushValue);
    return '未完成';
  }

  const biliArr = offFunctions([...Object.values(bili)]);

  for (const asyncFun of biliArr) {
    try {
      await asyncFun();
    } catch (error) {
      logger.error(`${asyncFun.name}失败: ${error}`);
    } finally {
      await apiDelay();
    }
  }

  cb && (await cb(...cbArg));
  await sendMessage('每日完成', Logger.pushValue);
  return '完成';
}

var dailyTask = /*#__PURE__*/Object.freeze({
	__proto__: null,
	dailyTasks: dailyTasks
});

function apiDelay(delayTime, delayTime2) {
  const delay = getDelay(delayTime, delayTime2);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
}
function apiDelaySync(delayTime, delayTime2) {
  getDelay(delayTime, delayTime2);
}

function getDelay(delayTime, delayTime2) {
  if (delayTime && delayTime2) {
    return random(delayTime, delayTime2);
  }

  if (delayTime) {
    return delayTime;
  }

  const API_DELAY = TaskConfig.BILI_API_DELAY;

  if (API_DELAY.length === 1) {
    return API_DELAY[0] * 1000;
  }

  return random(API_DELAY[0] || 2, API_DELAY[1] || 6) * 1000;
}

var index$2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	gzipEncode: gzipEncode,
	gzipDecode: gzipDecode,
	unicode2str: unicode2str,
	apiDelay: apiDelay,
	apiDelaySync: apiDelaySync,
	getCookieItem: getCookieItem,
	getUserId: getUserId,
	getBiliJct: getBiliJct,
	getLIVE_BUVID: getLIVE_BUVID,
	isQingLongPanel: isQingLongPanel,
	isCFC: isCFC,
	isAGC: isAGC,
	setConfigFileName: setConfigFileName,
	isFC: isFC,
	isSCF: isSCF,
	isServerless: isServerless,
	Logger: Logger,
	logger: logger,
	getMonthHasDays: getMonthHasDays,
	createUUID: createUUID,
	getPRCDate: getPRCDate,
	jsonp2Object: jsonp2Object,
	getPageNum: getPageNum,
	setCron: setCron,
	random: random,
	randomDailyRunTime: randomDailyRunTime,
	formatCron: formatCron,
	randomString: randomString,
	getVisitId: getVisitId,
	pushIfNotExist: pushIfNotExist,
	getNewObject: getNewObject,
	cloneObject: cloneObject,
	deepMergeObject: deepMergeObject,
	stringify: stringify$1,
	getRandomItem: getRandomItem,
	md5: md5,
	mergeHeaders: mergeHeaders,
	arr2numArr: arr2numArr,
	base64Encode: base64Encode,
	isTodayInTimeArr: isTodayInTimeArr,
	is: is,
	isDef: isDef,
	isUnDef: isUnDef,
	isObject: isObject,
	isEmpty: isEmpty,
	isDate: isDate,
	isNull: isNull,
	isNullAndUnDef: isNullAndUnDef,
	isNullOrUnDef: isNullOrUnDef,
	isNumber: isNumber,
	isPromise: isPromise,
	isString: isString,
	isFunction: isFunction,
	isBoolean: isBoolean,
	isRegExp: isRegExp,
	isArray: isArray,
	isWindow: isWindow,
	isElement: isElement,
	isMap: isMap,
	isServer: isServer,
	isClient: isClient,
	isUrl: isUrl,
	isEmail: isEmail
});

function funHandle() {
  const functionConfig = TaskConfig.function;

  if (!functionConfig.addCoins && !functionConfig.shareAndWatch) {
    functionConfig.taskReward = false;
  }

  if (functionConfig.liveIntimacy && TaskConfig.intimacy.liveSendMessage) {
    functionConfig.liveSendMessage = false;
  }

  if (functionConfig.mangaTask && TaskConfig.manga.sign) {
    functionConfig.mangaSign = false;
  }

  return functionConfig;
}

function offFunctions(funArr) {
  const functionConfig = funHandle();
  return funArr.map(el => functionConfig[el.name] ? el : null).filter(el => el);
}

var configOffFun = /*#__PURE__*/Object.freeze({
	__proto__: null,
	offFunctions: offFunctions
});

const ContentTypeEnum = {
  FORM_URLENCODED: 'application/x-www-form-urlencoded; charset=UTF-8'
};

const OriginURLs = {
  account: 'https://account.bilibili.com',
  live: 'https://live.bilibili.com',
  space: 'https://space.bilibili.com',
  message: 'https://message.bilibili.com',
  www: 'https://www.bilibili.com',
  manga: 'https://manga.bilibili.com'
};
const RefererURLs = {
  www: 'https://www.bilibili.com/'
};
const baseURLs = {
  account: 'https://account.bilibili.com',
  live: 'https://api.live.bilibili.com',
  api: 'https://api.bilibili.com',
  manga: 'https://manga.bilibili.com',
  vc: 'https://api.vc.bilibili.com',
  liveTrace: 'https://live-trace.bilibili.com'
};
const defaultHeaders = {
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36 Edg/101.0.1210.32',
  'content-type': ContentTypeEnum.FORM_URLENCODED,
  'accept-language': 'zh-CN,zh;q=0.9',
  'accept-encoding': 'gzip, deflate, br'
};
function getAndroidUA({
  version = '6.74.0',
  phone = 'MI 10 Pro',
  build = '6740400',
  channel = 'xiaomi',
  os = '10'
} = {}) {
  return `Mozilla/5.0 BiliDroid/${version} (bbcallen@gmail.com) os/android model/${phone} mobi_app/android build/${build} channel/${channel} innerVer/${channel} osVer/${os} network/2`;
}

const transformRequestHook = (res, options) => {
  const {
    isTransformResponse,
    isReturnNativeResponse
  } = options;

  if (isReturnNativeResponse) {
    return res;
  }

  if (isTransformResponse === false) {
    return res.body;
  }

  const {
    body
  } = res;

  if (options.isJsonp && isString(body)) {
    return jsonp2Object(body);
  }

  try {
    if (isString(body) && body.startsWith('{')) {
      return JSON.parse(body);
    }
  } catch {}

  return body;
};

function axiosHandle(options) {
  if (!isString(options.url)) {
    options.url = options.url.toString();
  }

  if (isObject(options.params) && !isString(options.searchParams)) {
    options.searchParams = { ...options.searchParams,
      ...options.params
    };
  }

  const contentType = options.headers['content-type'],
        isFormUrlencoded = contentType === null || contentType === void 0 ? void 0 : contentType.startsWith('application/x-www-form-urlencoded');

  if (isObject(options.data)) {
    if (isFormUrlencoded) {
      options.body = stringify$1(options.data);
    } else {
      options.json = options.data;
    }
  }

  if (isString(options.data) && isFormUrlencoded) {
    options.body = options.data;
  }

  function setAgent(pro) {
    if (!options.agent) {
      options.agent = {};
    }

    options.agent[pro] = options[`${pro}Agent`];
  }

  if (options.httpAgent) {
    setAgent('http');
  }

  if (options.httpsAgent) {
    setAgent('https');
  }

  if (options.url && options.url.startsWith('/')) {
    options.url = options.url.substring(1);
  }

  return options;
}

class VGot {
  name = 'VGot';

  constructor(options) {
    if (options.baseURL) {
      options.prefixUrl = options.baseURL;
    }

    this.options = options;
    this.gotInstance = got__default["default"].extend(options, {
      hooks: {
        afterResponse: [response => {
          const {
            requestOptions
          } = response.request.options;

          if (requestOptions !== null && requestOptions !== void 0 && requestOptions.withBiliCookie) {
            var _response$headers;

            TaskConfig.COOKIE = getCookie(TaskConfig.COOKIE, ((_response$headers = response.headers) === null || _response$headers === void 0 ? void 0 : _response$headers['set-cookie']) || []);
          }

          return response;
        }]
      }
    });
  }

  request(options) {
    const {
      requestOptions = {},
      headers = {}
    } = this.options;
    options.requestOptions = Object.assign({}, requestOptions, options.requestOptions);
    options.headers = mergeHeaders(headers, options.headers);

    if (requestOptions.withBiliCookie) {
      options.headers['Cookie'] = TaskConfig.COOKIE;
    }

    if (requestOptions.retry) {
      options.retry = requestOptions.retry;
    }

    options = axiosHandle(options);
    return new Promise((resolve, reject) => {
      this.gotInstance(options).then(res => {
        if (isFunction(transformRequestHook)) {
          try {
            const ret = transformRequestHook(res, options.requestOptions);
            resolve(ret);
          } catch (error) {
            reject(error || new Error('请求错误!'));
          }

          return;
        }

        resolve(res);
      }).catch(error => {
        if (error.response) {
          error.response.status = error.response.statusCode;
        }

        reject(error);
      });
    });
  }

  get(options, config) {
    if (isString(options)) {
      return this.request({ ...config,
        method: 'GET',
        url: options
      });
    }

    return this.request({ ...options,
      method: 'GET'
    });
  }

  post(options, data, config) {
    if (isString(options)) {
      return this.request({ ...config,
        method: 'POST',
        url: options,
        data
      });
    }

    return this.request({ ...options,
      method: 'POST'
    });
  }

  put(url, data, config) {
    return this.request({ ...config,
      method: 'PUT',
      url,
      data
    });
  }

  delete(url, data, config) {
    return this.request({ ...config,
      method: 'DELETE',
      url,
      data
    });
  }

  patch(url, data, config) {
    return this.request({ ...config,
      method: 'PATCH',
      url,
      data
    });
  }

}

function createRequest(opt) {
  return new VGot(deepMergeObject({
    timeout: 10000,
    headers: {
      'content-type': defaultHeaders['content-type'],
      'user-agent': defaultHeaders['user-agent'],
      'accept-language': defaultHeaders['accept-language'],
      'accept-encoding': defaultHeaders['accept-encoding']
    },
    requestOptions: {
      isTransformResponse: true,
      ignoreCancelToken: true,
      withBiliCookie: true
    }
  }, opt || {}));
}
const defHttp = createRequest({
  requestOptions: {
    withBiliCookie: false
  }
});
const biliHttp = createRequest();

let MyProcessEnv = {};

function initEnv() {
  function upperCaseToHump(str) {
    return str.toLowerCase().replace(/_(\w)/g, (_match, t) => t.toUpperCase());
  }

  const envName = ['GOBOT_URL', 'GOBOT_TOKEN', 'GOBOT_QQ', 'SCKEY', 'QQ_SKEY', 'QQ_MODE', 'BARK_PUSH', 'BARK_SOUND', 'BARK_GROUP', 'TG_BOT_TOKEN', 'TG_USER_ID', 'TG_PROXY_AUTH', 'TG_PROXY_HOST', 'TG_PROXY_PORT', 'TG_API_HOST', 'DD_BOT_TOKEN', 'DD_BOT_SECRET', 'QYWX_KEY', 'QYWX_AM', 'IGOT_PUSH_KEY', 'PUSH_PLUS_TOKEN', 'PUSH_PLUS_USER'];
  const message = TaskConfig.message || {};
  MyProcessEnv = initProcessEnv(MyProcessEnv);
  envName.forEach(name => {
    const value = message[upperCaseToHump(name)] || message[name] || process.env[name];

    if (value) {
      MyProcessEnv[name] = value;
    }
  });

  if (TaskConfig.PUSHPLUS_TOKEN) {
    MyProcessEnv.PUSH_PLUS_TOKEN = TaskConfig.PUSHPLUS_TOKEN;
  }
}

const timeout = 15000;

function initProcessEnv(processEnv = {}) {
  MyProcessEnv.SCKEY = '';
  MyProcessEnv.BARK_PUSH = '';
  MyProcessEnv.BARK_SOUND = '';
  MyProcessEnv.BARK_GROUP = 'QingLong';
  MyProcessEnv.TG_BOT_TOKEN = '';
  MyProcessEnv.TG_USER_ID = '';
  MyProcessEnv.TG_PROXY_HOST = '';
  MyProcessEnv.TG_PROXY_PORT = '';
  MyProcessEnv.TG_PROXY_AUTH = '';
  MyProcessEnv.TG_API_HOST = 'api.telegram.org';
  MyProcessEnv.DD_BOT_TOKEN = '';
  MyProcessEnv.DD_BOT_SECRET = '';
  MyProcessEnv.QYWX_KEY = '';
  MyProcessEnv.QYWX_AM = '';
  MyProcessEnv.IGOT_PUSH_KEY = '';
  MyProcessEnv.PUSH_PLUS_TOKEN = '';
  MyProcessEnv.PUSH_PLUS_USER = '';
  MyProcessEnv.QQ_SKEY = '';
  MyProcessEnv.QQ_MODE = '';
  return processEnv;
}

async function sendNotify(text, desp, params = {}, author = '\n\n本通知 By：https://github.com/KudouRan/BiliTools') {
  initEnv();
  desp += author;
  await Promise.all([serverNotify(text, desp), pushPlusNotify(text, desp)]);
  await Promise.all([BarkNotify(text, desp, params), tgBotNotify(text, desp), ddBotNotify(text, desp), qywxBotNotify(text, desp), qywxamNotify(text, desp), iGotNotify(text, desp, params), sendMail(text, desp), customApi(text, desp), CoolPush(text, desp)]);
}

async function sendMail(title, text) {
  var _TaskConfig$message;

  const user = (_TaskConfig$message = TaskConfig.message) === null || _TaskConfig$message === void 0 ? void 0 : _TaskConfig$message.email;
  if (!user || !user.pass || !user.from || !user.host) return;
  const {
    createTransport
  } = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('nodemailer')); });
  const port = Number(user.port) || 465;
  const transporter = createTransport({
    host: user.host,
    port: port,
    secure: port === 465,
    auth: {
      user: user.from,
      pass: user.pass
    }
  });
  const info = await transporter.sendMail({
    from: `${title} <${user.from}>`,
    to: user.to,
    subject: title,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    },
    text: text.replace(/\n/g, '\r\n')
  });
  logger.info(`邮件消息已发送: ${info.messageId}`);
}

async function customApi(title, text) {
  try {
    const apiTemplate = TaskConfig.message.api;
    if (!apiTemplate || !apiTemplate.url) return;
    const {
      data,
      proxy,
      timeout,
      headers
    } = apiTemplate;
    const method = apiTemplate.method.toUpperCase() || 'POST';
    const options = {
      method: method,
      timeout,
      headers,
      url: ''
    };
    options.url = apiTemplate.url.replace('{title}', encodeURIComponent(title)).replace('{text}', encodeURIComponent(text));

    if (proxy.host) {
      const tunnel = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('tunnel')); });
      const httpsAgent = tunnel.httpsOverHttp({
        proxy: {
          host: proxy.host,
          port: +proxy.port,
          proxyAuth: proxy.auth
        },
        maxSockets: 1
      });
      Object.assign(options, {
        httpsAgent
      });
    }

    const keys = Object.keys(data);

    if (keys.length) {
      keys.forEach(key => {
        if (data[key] === '{text}') {
          data[key] = text;
        }

        if (data[key] === '{title}') {
          data[key] = title;
        }
      });
      Object.assign(options, {
        data
      });
    }

    await defHttp.request(options);
    logger.info(`自定义接口消息已发送！`);
  } catch (error) {
    logger.info(`自定义接口消息发送失败: ${error}`);
    logger.error(error);
  }
}

function serverNotify(text, desp, time = 2100) {
  return new Promise(resolve => {
    const SCKEY = MyProcessEnv.SCKEY;

    if (SCKEY) {
      desp = desp.replace(/[\n\r]/g, '\n\n');
      const options = {
        url: SCKEY.includes('SCT') ? `https://sctapi.ftqq.com/${SCKEY}.send` : `https://sc.ftqq.com/${SCKEY}.send`,
        data: `text=${text}&desp=${desp}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout
      };
      setTimeout(() => {
        defHttp.post(options).then(data => {
          if (data.errno === 0 || data.data.errno === 0) {
            logger.info('server酱发送通知消息成功🎉');
          } else if (data.errno === 1024) {
            logger.info(`server酱发送通知消息异常: ${data.errmsg}`);
          } else {
            logger.info(`server酱发送通知消息异常\n${JSON.stringify(data)}`);
          }
        }).catch(err => {
          logger.info('server酱发送通知调用API失败！！');
          logger.info(err);
        }).finally(() => {
          resolve('');
        });
      }, time);
    } else {
      resolve('');
    }
  });
}

function CoolPush(text, desp) {
  return new Promise(resolve => {
    const {
      QQ_SKEY,
      QQ_MODE
    } = MyProcessEnv;

    if (QQ_SKEY) {
      const options = {
        url: `https://push.xuthus.cc/${QQ_MODE}/${QQ_SKEY}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {},
        params: {}
      };
      text = text.replace(/京豆/g, '豆豆');
      desp = desp.replace(/京豆/g, '');
      desp = desp.replace(/🐶/g, '');
      desp = desp.replace(/红包/g, 'H包');

      if (QQ_MODE === 'email') {
        options.data = {
          t: text,
          c: desp
        };
      } else {
        options.data = `${text}\n\n${desp}`;
      }

      const pushMode = function (t) {
        switch (t) {
          case 'send':
            return '个人';

          case 'group':
            return 'QQ群';

          case 'wx':
            return '微信';

          case 'ww':
            return '企业微信';

          case 'email':
            return '邮件';

          default:
            return '未知方式';
        }
      };

      defHttp.post(options).then(data => {
        if (data.code === 200) {
          logger.info(`酷推发送${pushMode(QQ_MODE)}通知消息成功🎉`);
        } else if (data.code === 400) {
          logger.info(`QQ酷推(Cool Push)发送${pushMode(QQ_MODE)}推送失败：${data.msg}`);
        } else if (data.code === 503) {
          logger.info(`QQ酷推出错，${data.message}：${data.data}`);
        } else {
          logger.info(`酷推推送异常: ${JSON.stringify(data)}`);
        }
      }).catch(err => {
        logger.info(`发送${pushMode(QQ_MODE)}通知调用API失败！！`);
        logger.info(err);
      }).finally(() => {
        resolve('');
      });
    } else {
      resolve('');
    }
  });
}

function BarkNotify(text, desp, params = {}) {
  return new Promise(resolve => {
    const {
      BARK_PUSH,
      BARK_SOUND,
      BARK_GROUP
    } = MyProcessEnv;

    if (BARK_PUSH) {
      const options = {
        url: `${BARK_PUSH}/${encodeURIComponent(text)}/${encodeURIComponent(desp)}?sound=${BARK_SOUND}&group=${BARK_GROUP}&${stringify$1(params)}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout
      };
      defHttp.get(options).then(data => {
        if (data.code === 200) {
          logger.info('Bark APP发送通知消息成功🎉');
        } else {
          logger.info(`Bark APP发送通失败：${data.message}`);
        }
      }).catch(err => {
        logger.info('Bark APP发送通知调用API失败！！');
        logger.error(err);
      }).finally(() => {
        resolve('');
      });
    }

    resolve('');
  });
}

function tgBotNotify(text, desp) {
  return new Promise(async resolve => {
    const {
      TG_BOT_TOKEN,
      TG_USER_ID,
      TG_API_HOST,
      TG_PROXY_HOST,
      TG_PROXY_PORT,
      TG_PROXY_AUTH
    } = MyProcessEnv;

    if (TG_BOT_TOKEN && TG_USER_ID) {
      const options = {
        url: `https://${TG_API_HOST}/bot${TG_BOT_TOKEN}/sendMessage`,
        data: `chat_id=${TG_USER_ID}&text=${text}\n\n${desp}&disable_web_page_preview=true`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout
      };

      if (TG_PROXY_HOST && TG_PROXY_PORT) {
        const tunnel = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('tunnel')); });
        const httpsAgent = tunnel.httpsOverHttp({
          proxy: {
            host: TG_PROXY_HOST,
            port: +TG_PROXY_PORT,
            proxyAuth: TG_PROXY_AUTH
          },
          maxSockets: 1
        });
        Object.assign(options, {
          httpsAgent
        });
      }

      defHttp.post(options).then(data => {
        if (data.ok) {
          logger.info('Telegram发送通知消息成功🎉。');
        } else if (data.error_code === 400) {
          logger.info('请主动给bot发送一条消息并检查接收用户ID是否正确。');
        } else if (data.error_code === 401) {
          logger.info('Telegram bot token 填写错误。');
        }
      }).catch(err => {
        logger.info('telegram发送通知消息失败！！');
        logger.info(err);
      }).finally(() => {
        resolve('');
      });
    } else {
      resolve('');
    }
  });
}

function ddBotNotify(text, desp) {
  return new Promise(resolve => {
    const {
      DD_BOT_TOKEN,
      DD_BOT_SECRET
    } = MyProcessEnv;
    const options = {
      url: `https://oapi.dingtalk.com/robot/send?access_token=${DD_BOT_TOKEN}`,
      data: {
        msgtype: 'text',
        text: {
          content: ` ${text}\n\n${desp}`
        }
      },
      headers: {
        'Content-Type': 'application/json'
      },
      timeout
    };

    if (!DD_BOT_TOKEN) {
      resolve('');
      return;
    }

    if (DD_BOT_SECRET) {
      const crypto = require('crypto');

      const dateNow = Date.now();
      const hmac = crypto.createHmac('sha256', DD_BOT_SECRET);
      hmac.update(`${dateNow}\n${DD_BOT_SECRET}`);
      const result = encodeURIComponent(hmac.digest('base64'));
      options.url = `${options.url}&timestamp=${dateNow}&sign=${result}`;
    }

    defHttp.post(options).then(data => {
      if (data.errcode === 0) {
        logger.info('钉钉发送通知消息成功🎉。');
      } else {
        logger.info(`钉钉发送通知失败：${data.errmsg}`);
      }
    }).catch(err => {
      logger.info('钉钉发送通知消息失败！！');
      logger.info(err);
    });
    resolve('');
  });
}

function qywxBotNotify(text, desp) {
  return new Promise(resolve => {
    const {
      QYWX_KEY
    } = MyProcessEnv;
    const options = {
      url: `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${QYWX_KEY}`,
      data: {
        msgtype: 'text',
        text: {
          content: ` ${text}\n\n${desp}`
        }
      },
      headers: {
        'Content-Type': 'application/json'
      },
      timeout
    };

    if (QYWX_KEY) {
      defHttp.post(options).then(data => {
        if (data.errcode === 0) {
          logger.info('企业微信发送通知消息成功🎉。');
        } else {
          logger.info(`企业微信发送通知失败：${data.errmsg}`);
        }
      }).catch(err => {
        logger.info('企业微信发送通知消息失败！！');
        logger.info(err);
      }).finally(() => {
        resolve('');
      });
    }

    resolve('');
  });
}

function ChangeUserId(desp) {
  const {
    QYWX_AM
  } = MyProcessEnv;
  const QYWX_AM_AY = QYWX_AM === null || QYWX_AM === void 0 ? void 0 : QYWX_AM.split(',');

  if (QYWX_AM_AY[2]) {
    const userIdTmp = QYWX_AM_AY[2].split('|');
    let userId = '';

    for (let i = 0; i < userIdTmp.length; i++) {
      const count2 = '签到号 ' + (i + 1);

      if (desp.match(count2)) {
        userId = userIdTmp[i];
      }
    }

    if (!userId) userId = QYWX_AM_AY[2];
    return userId;
  } else {
    return '@all';
  }
}

function qywxamNotify(text, desp) {
  return new Promise(resolve => {
    const QYWX_AM = MyProcessEnv.QYWX_AM;

    if (QYWX_AM) {
      const QYWX_AM_AY = QYWX_AM.split(',');
      const options_accesstoken = {
        url: `https://qyapi.weixin.qq.com/cgi-bin/gettoken`,
        data: {
          corpid: `${QYWX_AM_AY[0]}`,
          corpsecret: `${QYWX_AM_AY[1]}`
        },
        headers: {
          'Content-Type': 'application/json'
        },
        timeout
      };
      defHttp.post(options_accesstoken).then(data => {
        const html = desp.replace(/\n/g, '<br/>');
        const json = JSON.parse(data);
        const accesstoken = json.access_token;
        let options;

        switch (QYWX_AM_AY[4]) {
          case '0':
            options = {
              msgtype: 'textcard',
              textcard: {
                title: `${text}`,
                description: `${desp}`,
                url: 'https://github.com/whyour/qinglong',
                btntxt: '更多'
              }
            };
            break;

          case '1':
            options = {
              msgtype: 'text',
              text: {
                content: `${text}\n\n${desp}`
              }
            };
            break;

          default:
            options = {
              msgtype: 'mpnews',
              mpnews: {
                articles: [{
                  title: `${text}`,
                  thumb_media_id: `${QYWX_AM_AY[4]}`,
                  author: `智能助手`,
                  content_source_url: ``,
                  content: `${html}`,
                  digest: `${desp}`
                }]
              }
            };
        }

        if (!QYWX_AM_AY[4]) {
          options = {
            msgtype: 'text',
            text: {
              content: `${text}\n\n${desp}`
            }
          };
        }

        options = {
          url: `https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=${accesstoken}`,
          data: {
            touser: `${ChangeUserId(desp)}`,
            agentid: `${QYWX_AM_AY[3]}`,
            safe: '0',
            ...options
          },
          headers: {
            'Content-Type': 'application/json'
          }
        };
        defHttp.post(options).then(data => {
          if (data.errcode === 0) {
            logger.info('成员ID:' + ChangeUserId(desp) + '企业微信应用消息发送通知消息成功🎉。');
          } else {
            logger.info(`企业微信应用：${data.errmsg}`);
          }
        }).catch(err => {
          logger.info('成员ID:' + ChangeUserId(desp) + '企业微信应用消息发送通知消息失败！！');
          logger.info(err);
        }).finally(() => {
          resolve('');
        });
      }).catch(err => {
        logger.error('企业微信应用消息发送通知消息失败！！');
      });
    } else {
      resolve('');
    }
  });
}

function iGotNotify(text, desp, params = {}) {
  return new Promise(resolve => {
    const {
      IGOT_PUSH_KEY
    } = MyProcessEnv;

    if (IGOT_PUSH_KEY) {
      const IGOT_PUSH_KEY_REGX = new RegExp('^[a-zA-Z0-9]{24}$');

      if (!IGOT_PUSH_KEY_REGX.test(IGOT_PUSH_KEY)) {
        logger.info('您所提供的IGOT_PUSH_KEY无效');
        resolve('');
        return;
      }

      const options = {
        url: `https://push.hellyw.com/${IGOT_PUSH_KEY.toLowerCase()}`,
        data: `title=${text}&content=${desp}&${stringify$1(params)}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout
      };
      defHttp.post(options).then(data => {
        if (typeof data === 'string') data = JSON.parse(data);

        if (data.ret === 0) {
          logger.info('iGot发送通知消息成功🎉');
        } else {
          logger.info(`iGot发送通知消息失败：${data.errMsg}`);
        }
      }).catch(err => {
        logger.info('iGot发送通知调用API失败！！');
        logger.info(err);
      }).finally(() => {
        resolve('');
      });
    } else {
      resolve('');
    }
  });
}

function pushPlusNotify(text, desp) {
  return new Promise(resolve => {
    const {
      PUSH_PLUS_TOKEN,
      PUSH_PLUS_USER
    } = MyProcessEnv;

    if (PUSH_PLUS_TOKEN) {
      desp = desp.replace(/[\n\r]/g, '<br>');
      const data = {
        token: `${PUSH_PLUS_TOKEN}`,
        title: `${text}`,
        content: `${desp}`,
        topic: `${PUSH_PLUS_USER}`
      };
      const options = {
        url: `https://www.pushplus.plus/send`,
        data,
        headers: {
          'Content-Type': ' application/json'
        },
        timeout
      };
      defHttp.post(options).then(data => {
        if (data.code === 200) {
          logger.info(`push+发送${PUSH_PLUS_USER ? '一对多' : '一对一'}通知消息完成。`);
        } else {
          logger.info(`push+发送${PUSH_PLUS_USER ? '一对多' : '一对一'}通知消息失败：${data.msg}`);
        }
      }).catch(err => {
        logger.info(`push+发送${PUSH_PLUS_USER ? '一对多' : '一对一'}通知消息失败！！`);
        logger.info(err);
      }).finally(() => {
        resolve('');
      });
    } else {
      resolve('');
    }
  });
}

async function sendMessage$1(title, text) {
  logger.info('----【消息推送】----');
  title = `Bili-${TaskModule.nickname || TaskConfig.USERID}-${title}`;
  await sendNotify(title, text, undefined, '');
}

var sendNotify$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	sendMessage: sendMessage$1
});

const accountApi = createRequest({
  baseURL: baseURLs.account,
  headers: {
    'user-agent': TaskConfig.USER_AGENT
  }
});
const liveApi = createRequest({
  baseURL: baseURLs.live,
  headers: {
    Referer: RefererURLs.www,
    'user-agent': TaskConfig.USER_AGENT
  }
});
const biliApi = createRequest({
  baseURL: baseURLs.api,
  headers: {
    Referer: RefererURLs.www,
    'user-agent': TaskConfig.USER_AGENT
  }
});
const mangaApi = createRequest({
  baseURL: baseURLs.manga,
  headers: {
    'user-agent': TaskConfig.USER_AGENT
  }
});
const vcApi = createRequest({
  baseURL: baseURLs.vc,
  headers: {
    'user-agent': TaskConfig.USER_AGENT
  }
});
const liveTraceApi = createRequest({
  baseURL: baseURLs.liveTrace,
  headers: {
    'user-agent': TaskConfig.USER_AGENT
  }
});

function doLiveSign() {
  return liveApi.get('/xlive/web-ucenter/v1/sign/DoSign');
}
function webGetSignInfo() {
  return liveApi.get('/xlive/web-ucenter/v1/sign/WebGetSignInfo');
}
function exchangeSilver2Coin() {
  return liveApi.post('/xlive/revenue/v1/wallet/silver2coin', {
    csrf_token: TaskConfig.BILIJCT,
    csrf: TaskConfig.BILIJCT
  });
}
function exchangeStatus() {
  return liveApi.get('/xlive/revenue/v1/wallet/getStatus');
}
function getMyWallet() {
  return liveApi.get('/xlive/revenue/v1/wallet/myWallet?need_bp=1&need_metal=1&platform=pc');
}
function sendMessage(roomid, msg) {
  const csrf = TaskConfig.BILIJCT;
  const csrf_token = csrf;
  msg || (msg = random(10).toString());
  return liveApi.post('/msg/send', {
    color: 5566168,
    fontsize: 25,
    mode: 1,
    msg,
    rnd: Date.now(),
    roomid,
    bubble: 0,
    csrf,
    csrf_token
  });
}
function getFansMedalPanel(page = 1, pageSize = 50, mid = 1) {
  return liveApi.get(`/xlive/app-ucenter/v1/fansMedal/panel?page=${page}&page_size=${pageSize}&target_id=${mid}`);
}
function getGiftBagList(roomId = 3394945) {
  const time = new Date().getTime();
  return liveApi.get(`/xlive/web-room/v1/gift/bag_list?t=${time}&room_id=${roomId}`);
}
function getLiveFansMedal(pageNum = 1, pageSize = 10) {
  if (pageNum > 10) {
    pageNum = 10;
  }

  return liveApi.get(`/xlive/app-ucenter/v1/user/GetMyMedals?page=${pageNum}&page_size=${pageSize}`);
}
function sendBagGift({
  ruid,
  gift_num,
  bag_id,
  gift_id,
  roomid
}) {
  const csrf = TaskConfig.BILIJCT;
  const csrf_token = csrf;
  const postData = {
    gift_id,
    ruid,
    gift_num,
    bag_id,
    biz_id: roomid,
    rnd: new Date().getTime(),
    send_ruid: 0,
    storm_beat_id: 0,
    metadata: '',
    price: 0,
    visit_id: '',
    csrf,
    platform: 'pc',
    biz_code: 'Live',
    csrf_token,
    uid: TaskConfig.USERID
  };
  return liveApi.post('/xlive/revenue/v2/gift/sendBag', postData, {
    headers: {
      Origin: OriginURLs.live
    }
  });
}
function getArea() {
  return liveApi.get('/xlive/web-interface/v1/index/getWebAreaList?source_id=2');
}
function getLiveRoom(parentArea, areaId, page = 1) {
  return liveApi.get(`/xlive/web-interface/v1/second/getList?platform=web&parent_area_id=${parentArea}&area_id=${areaId}&page=${page}`);
}
function checkLottery(roomId) {
  return liveApi.get(`/xlive/lottery-interface/v1/Anchor/Check?roomid=${roomId}`);
}
function joinLottery(options) {
  return liveApi.post(`/xlive/lottery-interface/v1/Anchor/Join`, { ...options,
    csrf: TaskConfig.BILIJCT,
    csrf_token: TaskConfig.BILIJCT,
    visit_id: getVisitId(),
    platform: 'pc'
  });
}
function checkRedPacket(roomId) {
  return liveApi.get(`/xlive/lottery-interface/v1/lottery/getLotteryInfoWeb?roomid=${roomId}`);
}
function joinRedPacket(params) {
  return liveApi.post(`/xlive/lottery-interface/v1/popularityRedPocket/RedPocketDraw`, { ...params,
    spm_id: '444.8.red_envelope.extract',
    jump_from: '',
    session_id: '',
    csrf_token: TaskConfig.BILIJCT,
    csrf: TaskConfig.BILIJCT,
    visit_id: ''
  });
}
function getFollowLiveRoomList(page = 1, page_size = 9) {
  return liveApi.get(`/xlive/web-ucenter/user/following?page=${page}&page_size=${page_size}`);
}

async function liveSignTask() {
  logger.info('----【直播签到】----');

  try {
    const {
      data
    } = await webGetSignInfo();

    if (data.status === 1) {
      logger.info('已签到，跳过签到');
      logger.info(`已经签到${data.hadSignDays}天，${data.specialText}`);
      return;
    }
  } catch (error) {}

  try {
    const {
      code,
      data,
      message
    } = await doLiveSign();

    if (code === 0) {
      logger.info(`直播签到成功: ${data.text}，特别信息: ${data.specialText}，本月签到天数: ${data.hadSignDays}天;`);
    } else {
      logger.warn(`直播签到失败: ${code} ${message}`);
    }
  } catch (error) {
    logger.error(`直播签到异常: ${error.message}`);
  }
}

function loginByCookie() {
  return biliApi.get('/x/web-interface/nav', {
    headers: {
      Origin: OriginURLs.account
    }
  });
}
function getDailyTaskRewardInfo() {
  return biliApi.get('/x/member/web/exp/reward');
}
function getDonateCoinExp() {
  return biliApi.get('/x/web-interface/coin/today/exp');
}
function getCoinBalance() {
  return accountApi.get('/site/getCoin');
}
function getFollowings(vmid, pageNumber = 1, pageSize = 50, order = 'desc', order_type = 'attention') {
  return biliApi.get('/x/relation/followings', {
    params: {
      vmid,
      pn: pageNumber,
      ps: pageSize,
      order,
      order_type
    }
  });
}
function getFollowingsByTag(pageNumber = 1, pageSize = 50, tagId = -10) {
  return biliApi.get('/x/relation/tag', {
    params: {
      tagid: tagId,
      pn: pageNumber,
      ps: pageSize
    }
  });
}
function getSpecialFollowings(pageNumber = 1, pageSize = 50) {
  return getFollowingsByTag(pageNumber, pageSize, -10);
}
function getUser(mid) {
  return biliApi.get(`/x/space/acc/info?mid=${mid}&jsonp=jsonp`);
}
function createTag(name) {
  return biliApi.post('/x/relation/tag/create', {
    tag: name,
    jsonp: 'jsonp',
    csrf: TaskConfig.BILIJCT
  });
}
function moveToTag(mid, tagId) {
  return biliApi.post('/x/relation/tags/addUsers?cross_domain=true', {
    fids: mid,
    tagids: tagId,
    csrf: TaskConfig.BILIJCT
  }, {
    headers: {
      Origin: OriginURLs.space
    }
  });
}
function getTags() {
  return biliApi.get('/x/relation/tags?jsonp=jsonp&callback=__jp3', {
    headers: {
      Referer: 'https://space.bilibili.com/1/fans/follow?tagid=0'
    },
    requestOptions: {
      isJsonp: true
    }
  });
}

function estimatedDays(upLevelExp) {
  if (TaskConfig.BILI_TARGET_COINS <= 0) return upLevelExp / 15;
  const dailyExp = TaskConfig.BILI_TARGET_COINS * 10 + 15;
  const idealDays = upLevelExp / dailyExp;
  const coinSupportDays = TaskModule.money / (TaskConfig.BILI_TARGET_COINS - 1);
  if (idealDays < coinSupportDays) return Math.floor(idealDays);
  const needExp = upLevelExp - coinSupportDays * dailyExp;
  return needExp / 25 + coinSupportDays;
}

function setLevelInfo(data) {
  const levelInfo = data.level_info;
  const currentLevel = levelInfo.current_level;

  if (currentLevel >= TaskConfig.BILI_TARGET_LEVEL) {
    TaskModule.coinsTask = 0;
  }

  logger.info(`当前等级: ${levelInfo.current_level}`);

  if (currentLevel >= 6) {
    const funcs = TaskConfig.function;
    funcs.shareAndWatch = false;
    funcs.addCoins = false;
    funcs.taskReward = false;
    logger.info('已经满级，不需要再投币了，做个白嫖怪吧');
  } else {
    const upLevelExp = levelInfo.next_exp - levelInfo.current_exp;
    logger.info(`距离升级还需要 ${upLevelExp} 经验，预计 ${estimatedDays(upLevelExp).toFixed(2)} 天`);
  }
}

function setVipStatus(data) {
  let vipTypeMsg = '';
  TaskModule.vipType = data.vipType;
  TaskModule.vipStatus = data.vipStatus;

  switch (data.vipType) {
    case 0:
      vipTypeMsg = '无大会员';
      break;

    case 1:
      vipTypeMsg = '月度大会员';
      break;

    case 2:
      vipTypeMsg = '年度大会员';
      break;
  }

  if (data.vipStatus === 0) {
    vipTypeMsg = vipTypeMsg === '无大会员' ? vipTypeMsg : vipTypeMsg + '[已过期]';
  }

  logger.info(`大会员状态: ${vipTypeMsg}`);
}

function conciseNickname(nickname) {
  const length = nickname.length;

  if (length <= 3) {
    return nickname;
  }

  const firstWord = nickname[0];
  const lastWord = nickname[length - 1];
  return `${firstWord}**${lastWord}`;
}

async function setUserInfo(data) {
  try {
    var _data$wallet;

    const {
      data: coinBalance
    } = await getCoinBalance();
    logger.info(`登录成功: ${data.uname}`);
    logger.info(`硬币余额: ${coinBalance.money || 0}`);
    TaskModule.nickname = conciseNickname(data.uname);
    TaskModule.money = coinBalance.money || 0;
    TaskModule.userLevel = data.level_info.current_level;
    TaskModule.bCoinCouponBalance = ((_data$wallet = data.wallet) === null || _data$wallet === void 0 ? void 0 : _data$wallet.coupon_balance) || 0;
    setLevelInfo(data);
    setVipStatus(data);
  } catch (error) {
    logger.error(`获取硬币信息异常: ${error.message}`);
    logger.debug(error);
  }
}

async function loginTask() {
  logger.info('----【登录】----');
  const {
    data,
    message,
    code
  } = await loginByCookie();

  if (code !== 0) {
    logger.error(`登录错误 ${code} ${message}`);
    throw new Error(message);
  }

  if (!data.isLogin) {
    throw new Error('接口返回为未登录');
  }

  await apiDelay();
  await setUserInfo(data);
}

async function taskReward() {
  logger.info('----【每日任务完成情况】----');

  try {
    const {
      data,
      message,
      code
    } = await getDailyTaskRewardInfo();
    await apiDelay();
    const {
      data: coinExp
    } = await getDonateCoinExp();

    if (code != 0) {
      logger.warn(`状态获取失败: ${code} ${message}`);
      return;
    }

    const targetCoinsDiff = TaskModule.money - TaskConfig.BILI_STAY_COINS;
    let coins = 0;

    if (TaskModule.coinsTask === 0) {
      logger.info(`今日投币获取经验: ${coinExp}，还需投币0颗，经验够了，不想投了`);
    } else if (targetCoinsDiff <= 0) {
      logger.info(`今日投币获取经验: ${coinExp}，还需投币0颗，硬币不够了，不投币了`);
    } else if (targetCoinsDiff < TaskModule.coinsTask) {
      coins = TaskModule.coinsTask - targetCoinsDiff;
      logger.info(`投币获取经验: ${coinExp}，还需投币数量: ${coins}颗;(目标${TaskModule.coinsTask}颗，忽略部分投币)`);
    } else {
      coins = TaskModule.coinsTask - coinExp / 10;
      logger.info(`投币获取经验: ${coinExp}，还需投币数量: ${coins}颗;(目标${TaskModule.coinsTask}颗)`);
    }

    TaskModule.coinsTask = coins;
    logger.info(`每日分享: ${data.share ? '已完成' : '[未完成]'}`);
    logger.info(`每日播放: ${data.watch ? '已完成' : '[未完成]'}`);
    TaskModule.share = data.share;
    TaskModule.watch = data.watch;
  } catch (error) {
    logger.error(`状态获取异常 ${error.message}`);
  }
}

function addShare(aid) {
  const reqData = {
    csrf: TaskConfig.BILIJCT,
    aid
  };
  return biliApi.post('/x/web-interface/share/add', reqData);
}
function getRegionRankingVideos(rid = 1, day = 3) {
  return biliApi.get('/x/web-interface/ranking/region', {
    params: {
      rid,
      day
    }
  });
}
function uploadVideoHeartbeat(aid, playedTime) {
  return biliApi.post('/x/click-interface/web/heartbeat', {
    aid,
    played_time: playedTime
  });
}

function getUserNavNum(mid) {
  return biliApi.get(`/x/space/navnum?mid=${mid}`);
}
function searchVideosByUpId(upId, pageSize = 30, pageNumber = 1, keyword = '') {
  return biliApi.get('/x/space/arc/search', {
    params: {
      jsonp: 'jsonp',
      order: 'pubdate',
      keyword,
      pn: pageNumber,
      tid: 0,
      ps: pageSize,
      mid: upId
    }
  });
}
function searchAudiosByUpId(uid, pageSize = 30, pageNumber = 1) {
  return biliApi.get('/audio/music-service/web/song/upper', {
    params: {
      jsonp: 'jsonp',
      order: 1,
      pn: pageNumber,
      ps: pageSize,
      uid
    }
  });
}
function searchArticlesByUpId(mid, pageSize = 12, pageNumber = 1) {
  return biliApi.get('/x/space/article', {
    params: {
      callback: '__test',
      jsonp: 'jsonp',
      sort: 'publish_time',
      pn: pageNumber,
      ps: pageSize,
      mid
    },
    requestOptions: {
      isJsonp: true
    }
  });
}
function addCoinForVideo(aid, multiply, selectLike = 1) {
  return biliApi.post('/x/web-interface/coin/add', {
    aid,
    multiply,
    selectLike,
    csrf: TaskConfig.BILIJCT
  });
}
function addCoinForAudio(sid, coin = 1) {
  return biliHttp.post('https://www.bilibili.com/audio/music-service-c/web/coin/add', {
    sid,
    multiply: coin,
    csrf: TaskConfig.BILIJCT
  });
}
function addCoinForArticle(upid, aid, coin = 1) {
  return biliApi.post('/x/web-interface/coin/add', {
    aid,
    upid,
    avtype: 2,
    multiply: coin,
    csrf: TaskConfig.BILIJCT
  });
}

const TypeEnum = {
  video: 'video',
  audio: 'audio',
  article: 'article'
};

function getRandmonNum([video, audio, article]) {
  const total = video + audio + article;

  if (!total) {
    return;
  }

  const num = random(0, total - 1);
  let tempNum = num;

  if (num < video) {
    return {
      type: TypeEnum.video,
      page: getPageNum(30, tempNum + 1),
      index: tempNum % 30
    };
  }

  const mid = video + audio;
  tempNum = num - video;

  if (num < mid) {
    return {
      type: TypeEnum.audio,
      page: getPageNum(30, tempNum + 1),
      index: tempNum % 30
    };
  }

  tempNum = num - mid;
  return {
    type: TypeEnum.article,
    page: getPageNum(12, tempNum + 1),
    index: tempNum % 12
  };
}

async function getAidByFollowing(special = true) {
  try {
    const uid = TaskConfig.USERID;
    const {
      data,
      message,
      code
    } = await (special ? getSpecialFollowings() : getFollowings(uid));
    const followList = special ? data : data.list;

    if (!followList || followList.length === 0) {
      return {
        msg: '-1',
        data: {}
      };
    }

    if (code === 0) {
      await apiDelay();
      const {
        mid
      } = getRandomItem(followList) || {};
      return await getIdByRandom(mid);
    }

    return {
      msg: special ? `未获取到特别关注列表: ${code}-${message}` : `未获取到关注列表: ${code}-${message}`,
      data: {}
    };
  } catch (error) {
    return {
      msg: error.message,
      data: {}
    };
  }
}
async function getAidByRegionRank() {
  const arr = [1, 3, 4, 5, 160, 22, 119];
  const rid = getRandomItem(arr);

  try {
    const {
      data,
      message,
      code
    } = await getRegionRankingVideos(rid, 3);

    if (code == 0) {
      const {
        aid,
        title,
        author
      } = getRandomItem(data);
      return {
        msg: '0',
        data: {
          id: Number(aid),
          title,
          author
        }
      };
    }

    return {
      msg: `未获取到排行信息: ${code}-${message}`,
      data: {}
    };
  } catch (error) {
    return {
      msg: error.message,
      data: {}
    };
  }
}
async function getAidByCustomizeUp() {
  const customizeUp = TaskConfig.BILI_CUSTOMIZE_UP;

  if (customizeUp.length === 0) {
    return {
      msg: '-1',
      data: {}
    };
  }

  return await getIdByRandom(getRandomItem(customizeUp));
}
async function getIdByRandom(mid) {
  try {
    const {
      code,
      data,
      message
    } = await getUserNavNum(mid);

    if (code) {
      return {
        msg: `通过uid获取视频失败: ${code}-${message}`,
        data: {}
      };
    }

    await apiDelay();
    const {
      video,
      audio,
      article
    } = data;
    const {
      type,
      page,
      index
    } = getRandmonNum([video, audio, article]);
    const handle = {
      [TypeEnum.video]: getVideoByRandom,
      [TypeEnum.audio]: getAudioByRandom,
      [TypeEnum.article]: getArticleByRandom
    };
    const handleData = await handle[type](mid, page, index);

    if (handleData.message) {
      return {
        msg: handleData.message,
        data: {}
      };
    }

    return {
      msg: '0',
      data: handleData
    };
  } catch (error) {
    logger.debug(error);
    return {
      msg: error.message,
      data: {}
    };
  }
}

async function getVideoByRandom(mid, page, index) {
  const {
    code,
    data,
    message
  } = await searchVideosByUpId(mid, 30, page);

  if (code) {
    return {
      message
    };
  }

  const {
    aid,
    title,
    author
  } = data.list.vlist[index];
  return {
    type: TypeEnum.video,
    id: aid,
    title,
    author
  };
}

async function getAudioByRandom(mid, page, index) {
  const {
    code,
    data,
    msg
  } = await searchAudiosByUpId(mid, 30, page);

  if (code) {
    return {
      message: msg
    };
  }

  const {
    data: list
  } = data;
  const {
    id,
    uname,
    title
  } = list[index];
  return {
    type: TypeEnum.audio,
    id,
    title,
    author: uname
  };
}

async function getArticleByRandom(mid, page, index) {
  const {
    code,
    data,
    message
  } = await searchArticlesByUpId(mid, 12, page);

  if (code) {
    return {
      message
    };
  }

  const {
    articles
  } = data;
  const {
    id,
    title,
    author: {
      name
    }
  } = articles[index];
  return {
    type: TypeEnum.article,
    id,
    title,
    author: name,
    mid
  };
}

function getIdFuncArray() {
  const arr = [getAidByCustomizeUp, getAidByFollowing, () => getAidByFollowing(false), getAidByRegionRank];

  if (!TaskConfig.BILI_CUSTOMIZE_UP) {
    arr.shift();
  }

  return arr;
}

const idFuncArray = getIdFuncArray();
async function getAidByByPriority(start = 0) {
  idFuncArray.splice(0, TaskModule.currentStartFun + start);

  for (let index = 0; index < idFuncArray.length; index++) {
    const fun = idFuncArray[index];
    let i = Number(TaskConfig.BILI_COIN_RETRY_NUM ?? 4);
    i = i < 1 ? 1 : i > 8 ? 8 : i;

    while (i--) {
      await apiDelay();
      const data = await fun();
      if (data.msg === '-1') i = 0;
      if (data.msg === '0') return data;
    }

    if (i <= 0) {
      TaskModule.currentStartFun = index;
    }
  }

  return {
    msg: '-1',
    data: {
      id: 0
    }
  };
}
async function coinToId({
  id,
  coin = 1,
  type = 'video',
  mid
}) {
  const handle = {
    [TypeEnum.video]: addCoinForVideo,
    [TypeEnum.audio]: addCoinForAudio,
    [TypeEnum.article]: (id, coin = 1) => addCoinForArticle(mid, id, coin)
  };
  const handleData = await handle[type](Number(id), coin);
  return {
    code: handleData.code,
    message: handleData.message || handleData.msg
  };
}

async function shareAndWatch() {
  logger.info('----【分享/播放视频】----');

  if (TaskModule.share && TaskModule.watch) {
    logger.info('已完成，跳过分享/播放');
    return;
  }

  let gAid = 0;

  try {
    let biliav = await getAidByByPriority();
    if (biliav.msg === '-1') biliav = await getAidByRegionRank();

    if (biliav.msg === '0') {
      const {
        id,
        author,
        title
      } = biliav.data;
      gAid = id;
      logger.info(`获取视频: ${title} --up【${author}】`);
    } else {
      logger.warn(`获取视频失败 ${biliav.msg}`);
      return false;
    }
  } catch (error) {
    logger.error(`获取视频出现异常: ${error.message}`);
    return false;
  }

  if (!TaskModule.share) {
    await apiDelay();

    try {
      const {
        code,
        message
      } = await addShare(gAid);

      if (code === 0) {
        logger.info(`分享视频成功!`);
      } else {
        logger.warn(`分享视频失败: ${code} ${message}`);
      }
    } catch (error) {
      logger.error(`分享视频异常: ${error.message}`);
    }
  }

  if (!TaskModule.watch) {
    await apiDelay();

    try {
      const {
        code,
        message
      } = await uploadVideoHeartbeat(gAid, random(4, 60));

      if (code === 0) {
        logger.info(`播放视频成功!`);
      } else {
        logger.warn(`播放视频失败: ${code} ${message}`);
      }
    } catch (error) {
      logger.error(`播放视频异常: ${error.message}`);
    }
  }
}

async function addCoins() {
  logger.info('----【视频投币】----');

  if (!TaskModule.coinsTask) {
    logger.info('跳过投币，今日已完成');
    return;
  }

  const state = {
    eCount: 0,
    num: 0,
    prevCode: 0,
    fillCount: 0,
    priority: 0
  };
  let isReturn = false;

  while (TaskModule.coinsTask && !isReturn && state.eCount < 5) {
    isReturn = await coinHandle(state);
  }

  if (state.eCount >= 5) logger.info(`出现异常/错误5次，自动退出投币`);
  logger.info(`一共成功投币${state.num}颗`);
  logger.info(`硬币还剩${TaskModule.money}颗`);
}

async function coinHandle(state) {
  await setCoinsTask();

  if (TaskModule.coinsTask <= 0 || TaskModule.money <= 0) {
    return true;
  }

  const {
    data,
    msg
  } = await getAidByByPriority(state.priority);

  if (!(data !== null && data !== void 0 && data.id) || msg != '0') {
    state.eCount++;
    return false;
  }

  await apiDelay();
  return await coinToIdOnce(data, state);
}

async function setCoinsTask() {
  try {
    const {
      data: coinExp,
      code
    } = await getDonateCoinExp();

    if (code == 0) {
      const coins = TaskConfig.BILI_TARGET_COINS - coinExp / 10;
      TaskModule.coinsTask = coins > 0 ? coins : 0;
    }
  } catch (error) {}
}

async function coinToIdOnce(data, state) {
  const {
    id,
    title,
    author,
    type,
    mid
  } = data;

  try {
    const coinData = await coinToId({
      id,
      type,
      mid
    });

    if (coinData.code === 0) {
      TaskModule.money--;
      TaskModule.coinsTask--;
      state.num++;
      logger.info(`给[${title}--up【${author}】]投币成功`);
    } else if (coinData.code === 34005) {
      state.fillCount++;
      logger.verbose(`当前稿件[${id}]不能再投币了`);

      if (state.fillCount >= 3) {
        logger.warn(`自定义用户组投币似乎没有币可投了`);
        state.priority++;
      }
    } else if (coinData.code === -111 || coinData.code === -104) {
      logger.warn(`${id} ${coinData.message} 无法继续进行投币`);
      return true;
    } else {
      state.eCount++;
      logger.warn(`给${id}投币失败 ${coinData.code} ${coinData.message}`);

      if (state.prevCode === coinData.code) {
        return true;
      }

      state.prevCode = coinData.code;
    }
  } catch (error) {
    state.eCount++;
    logger.error(`投币异常 ${error.message}`);
  } finally {
    await apiDelay(1500);
  }

  return false;
}

function clockIn(platform = 'android') {
  return mangaApi.post('twirp/activity.v1.Activity/ClockIn', {
    platform
  });
}
function getFavoriteList$1(page_num = 1, page_size = 50, order = 1) {
  return mangaApi.post(`twirp/bookshelf.v1.Bookshelf/ListFavorite?platform=web`, {
    page_num,
    page_size,
    order,
    wait_free: 0
  });
}
function getCoupons(page_num = 1, page_size = 50) {
  return mangaApi.post(`twirp/user.v1.User/GetCoupons?platform=web`, {
    not_expired: true,
    page_num,
    page_size,
    tab_type: 1
  });
}
function getMangaDetail(comic_id) {
  return mangaApi.post(`twirp/comic.v1.Comic/ComicDetail`, {
    device: 'android',
    version: '4.16.0',
    comic_id: comic_id
  });
}
function getBuyInfo(ep_id) {
  return mangaApi.post(`twirp/comic.v1.Comic/GetEpisodeBuyInfo?platform=web`, {
    ep_id
  });
}
function buyManga$1(ep_id, coupon_id, buy_method = 2, auto_pay_gold_status = 0) {
  return mangaApi.post(`twirp/comic.v1.Comic/BuyEpisode?&platform=web`, {
    buy_method,
    ep_id,
    coupon_id,
    auto_pay_gold_status
  });
}
function searchManga$1(keyword, page_num = 1, page_size = 9) {
  return mangaApi.post(`twirp/comic.v1.Comic/Search?device=pc&platform=web`, {
    keyword,
    page_num,
    page_size
  });
}

let expireCouponNum;

async function getExpireCouponNum() {
  expireCouponNum = 0;

  try {
    const {
      code,
      msg,
      data
    } = await getCoupons();

    if (code !== 0) {
      logger.error(`获取漫读券失败：${code} ${msg}`);
      return;
    }

    const {
      user_coupons
    } = data;

    if (user_coupons.length === 0) {
      logger.info('没有漫读券，跳过任务');
      return;
    }

    const coupons = user_coupons.filter(coupon => coupon.will_expire !== 0);
    expireCouponNum = coupons.reduce((acc, coupon) => acc + coupon.remain_amount, 0);
    return expireCouponNum;
  } catch (error) {
    logger.error(`获取漫读券异常: ${error}`);
  }
}

async function getFavoriteList() {
  try {
    const {
      code,
      msg,
      data
    } = await getFavoriteList$1();

    if (code === 0) {
      return data;
    }

    logger.error(`获取追漫列表失败：${code} ${msg}`);
  } catch (error) {
    logger.error(`获取追漫列表异常: ${error}`);
  }
}

async function getMangaEpList(comic_id) {
  try {
    const {
      code,
      msg,
      data
    } = await getMangaDetail(comic_id);

    if (code !== 0) {
      logger.error(`获取漫画详情失败：${code} ${msg}`);
      return;
    }

    if (!data || !data.ep_list) {
      return;
    }

    let epList = data.ep_list;

    if (data.disable_coupon_amount !== 0) {
      epList = epList.slice(0, epList.length - data.disable_coupon_amount);
    }

    return epList.filter(ep => ep.is_locked);
  } catch (error) {
    logger.error(`获取漫画详情异常: ${error}`);
  }
}

async function getBuyCoupon(ep_id) {
  try {
    const {
      code,
      msg,
      data
    } = await getBuyInfo(ep_id);

    if (code !== 0) {
      logger.error(`获取购买信息失败：${code} ${msg}`);
      return;
    }

    if (!data) {
      return;
    }

    if (!data.allow_coupon) {
      logger.info('漫画不支持漫读券');
      return;
    }

    if (data.recommend_coupon_id === 0 || data.remain_coupon === 0) {
      expireCouponNum = 0;
      logger.info('没有足够的漫读券了');
      return;
    }

    if (!data.remain_lock_ep_num) {
      return;
    }

    return data.recommend_coupon_id;
  } catch (error) {
    logger.error(`获取购买信息异常: ${error}`);
  }
}

async function buyOneEpManga(ep_id) {
  try {
    const couponId = await getBuyCoupon(ep_id);

    if (!couponId) {
      return true;
    }

    const {
      code,
      msg
    } = await buyManga$1(ep_id, couponId);

    if (code !== 0) {
      logger.error(`购买漫画失败：${code} ${msg}`);
      return;
    }

    expireCouponNum--;
    logger.info(`购买漫画成功`);
  } catch (error) {
    logger.error(`购买漫画异常: ${error}`);
  }
}

async function searchManga(keyword) {
  try {
    const {
      code,
      msg,
      data
    } = await searchManga$1(keyword);

    if (code === 0) {
      return data;
    }

    logger.error(`搜索漫画失败：${code} ${msg}`);
  } catch (error) {
    logger.error(`搜索漫画异常: ${error}`);
  }
}

async function buyManga(comic_id) {
  const epList = await getMangaEpList(comic_id);

  if (!epList || epList.length === 0) {
    return false;
  }

  for (let index = 0; index < epList.length; index++) {
    await apiDelay(100);
    if (await buyOneEpManga(epList[index].id)) return true;
  }
}

async function buyMangaByMc() {
  const {
    mc
  } = TaskConfig.manga;

  if (mc.length === 0) {
    return;
  }

  for (let index = 0; index < mc.length; index++) {
    if (expireCouponNum <= 0) return;
    const mcId = mc[index];
    await buyManga(mcId);
  }
}

async function buyMangaByName() {
  const {
    name
  } = TaskConfig.manga;

  if (name.length === 0) {
    return;
  }

  for (let index = 0; index < name.length; index++) {
    if (expireCouponNum <= 0) return;
    const keyword = name[index];
    const mangas = await searchManga(keyword);

    if (!mangas || mangas.list.length === 0) {
      continue;
    }

    const manga = mangas.list.find(mange => mange.title === keyword);

    if (!manga) {
      continue;
    }

    await buyManga(manga.id);
  }
}

async function buyMangaByLove() {
  const {
    love
  } = TaskConfig.manga;

  if (!love || expireCouponNum <= 0) {
    return;
  }

  const favoriteList = await getFavoriteList();

  if (!favoriteList || favoriteList.length === 0) {
    return;
  }

  for (let index = 0; index < favoriteList.length; index++) {
    if (expireCouponNum <= 0) return;
    const favorite = favoriteList[index];
    await buyManga(favorite.comic_id);
  }
}

async function buyMangaService() {
  expireCouponNum = await getExpireCouponNum();

  if (expireCouponNum < 1) {
    logger.info('没有即将过期的漫读券，跳过任务');
    return;
  }

  await buyMangaByMc();
  await buyMangaByName();
  await buyMangaByLove();
}
async function mangaSign$1() {
  try {
    const {
      code
    } = await clockIn();

    if (code == 0) {
      logger.info('漫画签到成功');
    } else {
      logger.warn('漫画签到失败');
    }
  } catch (error) {
    const {
      status,
      statusCode
    } = error.response || {};

    if (status === 400 || statusCode === 400) {
      logger.info('已经签到过了，跳过任务');
    } else {
      logger.error(`漫画签到异常 ${error.message}`);
    }
  }
}

async function mangaSign() {
  logger.info('----【漫画签到】----');
  logger.warn('漫画签到任务移动到了漫画任务中，请修改为新的任务');
  await mangaSign$1();
}

function isTodayRunning() {
  const {
    buyWeek,
    buyInterval
  } = TaskConfig.manga;
  if (!buyWeek || buyWeek.length === 0) return false;
  if (buyInterval === 1) return true;
  const now = new Date();
  const weekDay = now.getDay();
  const today = now.getDate();
  return buyWeek.includes(weekDay) || today % buyInterval - 1 === 0;
}

async function mangaTask() {
  logger.info('----【漫画任务】----');
  const {
    manga
  } = TaskConfig;

  try {
    if (manga.sign) {
      logger.info('开始签到');
      await mangaSign$1();
    }

    const isBuy = manga.buy && isTodayRunning();

    if (isBuy) {
      logger.info('开始购买漫画');
      await buyMangaService();
    } else {
      logger.info('非购买漫画时间，不购买');
    }
  } catch (error) {
    logger.error(`漫画任务异常: ${error}`);
  }
}

async function silver2Coin() {
  logger.info('----【银瓜子兑换硬币】----');

  try {
    const {
      data,
      code,
      message
    } = await exchangeStatus();

    if (code != 0) {
      logger.info(`获取瓜子详情失败 ${message}`);
    }

    if (data.silver_2_coin_left === 0) {
      logger.info('今日已兑换一次');
    } else if (data.silver < 700) {
      logger.info('兑换失败，你瓜子不够了');
    } else {
      const {
        message
      } = await exchangeSilver2Coin();
      logger.info(`兑换硬币： ${message}`);
      await getMyWallet();
    }
  } catch (error) {
    logger.error(`操作异常 ${error.message}`);
  }
}

function getMyGroupsApi() {
  return vcApi.get('/link_group/v1/member/my_groups');
}
function groupSignApi(group_id, owner_id) {
  return vcApi.get('/link_setting/v1/link_setting/sign_in', {
    params: {
      group_id,
      owner_id
    }
  });
}

async function getMyGroups() {
  try {
    const {
      data,
      code,
      message
    } = await getMyGroupsApi();

    if (code === 0) {
      return (data === null || data === void 0 ? void 0 : data.list) || [];
    }

    logger.warn(`获取自己的应援团异常失败: ${message}`);
    return [];
  } catch (error) {
    logger.error(`获取自己的应援团异常: ${error}`);
  }
}

async function supGroupSign() {
  logger.info('----【应援团签到】----');
  const myGroups = await getMyGroups();
  await apiDelay();
  let count = 0;

  for (let i = 0; i < myGroups.length;) {
    const group = myGroups[i];

    try {
      const {
        data,
        code,
        message
      } = await groupSignApi(group.group_id, group.owner_uid);

      if (code === 0) {
        if (data.status === 0) {
          count++;
        } else {
          logger.info(message);
        }
      } else {
        logger.warn(`[${group.group_name}]签到失败 ${message}`);
      }
    } catch (error) {
      logger.error(`签到异常 ${error.message}`);
    } finally {
      await apiDelay();
    }
  }

  logger.info(`签到结束，成功${count}/${myGroups.length}`);
}

function objectValueToString(params) {
  Object.keys(params).forEach(key => {
    if (isNumber(params[key])) {
      params[key] = params[key].toString();
      return;
    }

    if (isObject(params[key])) {
      objectValueToString(params[key]);
      return;
    }

    if (isArray(params[key])) {
      params[key] = params[key].map(item => isObject(item) ? objectValueToString(item) : item.toString());
    }
  });
  return params;
}

function clientSign(params) {
  let data = JSON.stringify(objectValueToString(params));
  const alg = ['SHA512', 'SHA3-512', 'SHA384', 'SHA3-384', 'BLAKE2b512'];

  for (const a of alg) {
    data = crypto__namespace.createHash(a).update(data).digest('hex');
  }

  return data;
}

function shareLiveRoom(roomid) {
  return liveApi.post(`xlive/web-room/v1/index/TrigerInteract`, {
    roomid,
    interact_type: 3,
    csrf: TaskConfig.BILIJCT,
    csrf_token: TaskConfig.BILIJCT,
    visit_id: ''
  });
}
function likeLiveRoom(roomid) {
  return liveApi.post(`xlive/web-ucenter/v1/interact/likeInteract`, {
    roomid,
    csrf: TaskConfig.BILIJCT,
    csrf_token: TaskConfig.BILIJCT
  });
}
function liveMobileHeartBeat({
  buvid = randomString(37).toUpperCase(),
  gu_id = randomString(43).toLocaleUpperCase(),
  visit_id = randomString(32).toLocaleLowerCase(),
  uuid = createUUID(),
  click_id = createUUID(),
  room_id,
  up_id,
  uid,
  up_level = 40,
  up_session = '',
  parent_id = 11,
  area_id = 376
}) {
  const baseData = {
    platform: 'android',
    uuid,
    buvid,
    seq_id: '1',
    room_id,
    parent_id,
    area_id,
    timestamp: String(parseInt(String(new Date().getTime() / 1000)) - 60),
    secret_key: 'axoaadsffcazxksectbbb',
    watch_time: '60',
    up_id: up_id || uid,
    up_level,
    jump_from: '30000',
    gu_id,
    play_type: '0',
    play_url: '',
    s_time: '0',
    data_behavior_id: '',
    data_source_id: '',
    up_session,
    visit_id,
    watch_status: '',
    click_id,
    session_id: '-99998',
    player_type: '0',
    client_ts: String(parseInt(String(new Date().getTime() / 1000)))
  };
  const data = { ...baseData,
    ts: parseInt(String(new Date().getTime() / 1000)),
    client_sign: clientSign(baseData),
    csrf_token: TaskConfig.BILIJCT,
    csrf: TaskConfig.BILIJCT
  };
  return liveTraceApi.post('xlive/data-interface/v1/heartbeat/mobileHeartBeat', data, {
    headers: {
      'User-Agent': getAndroidUA()
    }
  });
}

const messageArray = kaomoji.concat('1', '2', '3', '4', '5', '6', '7', '8', '9', '签到', '哈哈');
const liveLogger = new Logger({
  console: 'debug',
  file: 'debug',
  push: 'warn'
}, 'live');
async function getFansMealList() {
  let totalNumber = 99,
      pageNumber = 0;
  const list = [];

  try {
    while (pageNumber < totalNumber) {
      const {
        code,
        message,
        data
      } = await getFansMedalPanel(pageNumber + 1, 50, TaskConfig.USERID);

      if (code !== 0) {
        logger.verbose(`获取勋章信息失败 ${code} ${message}`);
        return null;
      }

      if (!data) {
        return list;
      }

      totalNumber = data.page_info.total_page;
      pageNumber = data.page_info.current_page;
      list.push(...data.list, ...data.special_list);
    }

    return list;
  } catch (error) {
    logger.error(`获取勋章异常 ${error.message}`);
    return null;
  }
}
function filterFansMedalList(list) {
  if (!list || list.length === 0) return [];
  return list.filter(fansMedalFilter);
}

function fansMedalFilter({
  room_info,
  medal
}) {
  if (!(room_info !== null && room_info !== void 0 && room_info.room_id)) return false;
  if (medal.level >= 20) return false;
  if (medal.today_feed >= medal.day_limit) return false;
  if (medal.today_feed >= 1300) return false;
  const {
    whiteList,
    blackList
  } = TaskConfig.intimacy;

  if (!whiteList || !whiteList.length) {
    if (blackList && (blackList.includes(room_info.room_id) || blackList.includes(medal.target_id))) {
      return false;
    }

    return true;
  }

  if (whiteList.includes(room_info.room_id) || whiteList.includes(medal.target_id)) {
    return true;
  }

  return false;
}

async function sendOneMessage(roomid, nickName) {
  const msg = messageArray[random(messageArray.length - 1)];

  try {
    const {
      code,
      message
    } = await sendMessage(roomid, msg);

    if (code !== 0) {
      if (code === 11000) {
        logger.warn(`【${nickName}】${roomid}-可能未开启评论`);
        return false;
      }

      logger.warn(`【${nickName}】${roomid}-发送失败 ${message}`);
      logger.verbose(`code: ${code}`);
      return false;
    }

    return true;
  } catch (error) {
    logger.verbose(`发送弹幕异常 ${error.message}`);
  }
}

async function shareLive(roomId) {
  try {
    const {
      code,
      message,
      data
    } = await shareLiveRoom(roomId);

    if (code === 0) {
      return data;
    }

    logger.info(`【${roomId}】直播间分享失败 ${code} ${message}`);
  } catch (error) {
    logger.warn(`分享直播间 [${roomId}] 异常 ${error.message}`);
  }
}

async function likeLive(roomId) {
  try {
    const {
      code,
      message,
      data
    } = await likeLiveRoom(roomId);

    if (code === 0) {
      return data;
    }

    logger.info(`【${roomId}】直播间点赞失败 ${code} ${message}`);
  } catch (error) {
    logger.warn(`点赞直播间异常 ${error.message}`);
  }
}

async function liveMobileHeart(heartbeatParams, countRef) {
  if (countRef.value >= 31) {
    return;
  }

  try {
    const {
      code,
      message
    } = await liveMobileHeartBeat(heartbeatParams);

    if (code !== 0) {
      logger.warn(`直播间心跳失败 ${code} ${message}`);
      return;
    }

    countRef.value++;
    liveLogger.info(`直播间心跳成功 ${heartbeatParams.uname}（${countRef.value}/31）`);
  } catch (error) {
    liveLogger.error(error);
    logger.error(`直播间心跳异常 ${error.message}`);
  }
}

async function liveIntimacyService() {
  const fansMealList = filterFansMedalList(await getFansMealList());
  return await Promise.allSettled([likeAndShare(fansMealList), liveHeart(fansMealList)]);
}

async function likeAndShare(fansMealList) {
  for (let index = 0; index < fansMealList.length; index++) {
    const fansMedal = fansMealList[index];
    await liveInteract(fansMedal);
  }
}

async function liveHeart(fansMealList) {
  if (fansMealList.length === 0) return;
  const {
    liveHeart
  } = TaskConfig.intimacy;
  if (!liveHeart) return;
  return new Promise(resolve => liveHeartPromise(resolve, fansMealList));
}

function liveHeartPromise(resolve, roomList) {
  for (let index = 0; index < roomList.length; index++) {
    const countRef = {
      value: 0
    };
    const fansMeal = roomList[index];
    const timerRef = {
      value: undefined
    };
    const options = {
      buvid: randomString(37).toUpperCase(),
      gu_id: randomString(43).toLocaleUpperCase(),
      visit_id: randomString(32).toLocaleLowerCase(),
      uuid: createUUID(),
      click_id: createUUID()
    };
    run(fansMeal, options, countRef, timerRef);
    timerRef.value = setInterval(run, 60000, fansMeal, options, countRef, timerRef);
    apiDelaySync(50, 150);
  }

  resolve('直播间心跳');

  async function run({
    medal,
    anchor_info,
    room_info
  }, options, countRef, timerRef) {
    await liveMobileHeart({
      up_id: medal.target_id,
      room_id: room_info.room_id,
      uname: anchor_info.nick_name,
      ...options
    }, countRef);

    if (countRef.value >= 31) {
      timerRef && timerRef.value && clearInterval(timerRef.value);
    }
  }
}

async function liveInteract(fansMedal) {
  const {
    room_info,
    anchor_info
  } = fansMedal;

  if (!room_info || !anchor_info) {
    return;
  }

  const {
    liveLike,
    liveSendMessage,
    liveShare
  } = TaskConfig.intimacy,
        nickName = anchor_info.nick_name,
        roomid = room_info.room_id;

  if (liveSendMessage) {
    liveLogger.verbose(`【${nickName}】开始发送直播弹幕`);
    await sendOneMessage(roomid, nickName);
  }

  async function shareLiveHandle() {
    await apiDelay(100, 300);

    for (let i = 0; i < 5; i++) {
      liveLogger.verbose(`分享 [${nickName}] 直播间`);
      await shareLive(roomid);
      await apiDelay(4000);
    }
  }

  if (liveShare) {
    shareLiveHandle().catch(error => logger.error(error));
  }

  async function likeLiveHandle() {
    await apiDelay(100, 300);

    for (let i = 0; i < 3; i++) {
      liveLogger.verbose(`给 [${nickName}] 直播间点赞`);
      await likeLive(roomid);
      await apiDelay(6500);
    }
  }

  if (liveLike) {
    likeLiveHandle().catch(error => logger.error(error));
  }

  await apiDelay(22000);
}

async function liveSendMessage() {
  logger.info('----【发送直播弹幕】----');
  logger.info(`该函数即将废弃，请使用 liveIntimacy 替代`);

  try {
    const fansMedalList = await getFansMealList();
    const fansMedalLength = fansMedalList.length;
    let count = 0,
        jumpCount = 0;
    logger.info(`一共需要发送${fansMedalLength}个直播间`);
    logger.verbose(`所需时间可能很长，请耐心等待`);

    for (let i = 0; i < fansMedalLength; i++) {
      const {
        room_info,
        anchor_info,
        medal
      } = fansMedalList[i];

      if (!(room_info !== null && room_info !== void 0 && room_info.room_id)) {
        logger.info(`【${anchor_info.nick_name}】没有直播间哦`);
        jumpCount++;
        continue;
      }

      if (medal.today_feed === 100 || medal.level >= 20) {
        jumpCount++;
        continue;
      }

      if (await sendOneMessage(room_info.room_id, anchor_info.nick_name)) count++;
      if (i < fansMedalLength - 1) await apiDelay(random(10000, 25000));
    }

    logger.info(`成功发送${count}个弹幕，跳过${jumpCount}个`);
  } catch (error) {
    logger.error(`直播间发送弹幕异常: ${error.message}`);
  }
}

function receiveVipPrivilege(type = 1) {
  return biliApi.post('/x/vip/privilege/receive', {
    csrf: TaskConfig.BILIJCT,
    type
  }, {
    headers: {
      origin: OriginURLs.www,
      referer: RefererURLs.www
    }
  });
}
function receiveVipMy() {
  return biliApi.get('/x/vip/privilege/my', {
    headers: {
      origin: OriginURLs.account,
      referer: RefererURLs.www
    }
  });
}
function chargingForUp(bp_num = 50, is_bp_remains_prior = true, up_mid = TaskConfig.USERID, otype = 'up', oid = up_mid) {
  return biliApi.post('/x/ugcpay/web/v2/trade/elec/pay/quick', {
    csrf: TaskConfig.BILIJCT,
    bp_num,
    is_bp_remains_prior,
    up_mid,
    otype,
    oid
  });
}
function chargingCommentsForUp(orderId, message = '支持大佬一波') {
  return biliApi.post('/x/ugcpay/trade/elec/message', {
    csrf: TaskConfig.BILIJCT,
    message,
    order_id: orderId
  });
}

function getBCoinBalance(data) {
  var _data$wallet;

  TaskModule.bCoinCouponBalance = ((_data$wallet = data.wallet) === null || _data$wallet === void 0 ? void 0 : _data$wallet.coupon_balance) || 0;
}

async function updateNav() {
  try {
    const {
      data,
      message,
      code
    } = await loginByCookie();

    if (code !== 0) {
      logger.warn(`获取用户信息失败：${code} ${message}`);
      return;
    }

    getBCoinBalance(data);
  } catch (error) {
    logger.error(`获取用户信息异常：${error.message}`);
  }
}

var ChargeStatus;

(function (ChargeStatus) {
  ChargeStatus[ChargeStatus["\u6210\u529F"] = 4] = "\u6210\u529F";
  ChargeStatus[ChargeStatus["\u4F4E\u4E8E20\u7535\u6C60"] = -2] = "\u4F4E\u4E8E20\u7535\u6C60";
  ChargeStatus[ChargeStatus["B\u5E01\u4E0D\u8DB3"] = -4] = "B\u5E01\u4E0D\u8DB3";
})(ChargeStatus || (ChargeStatus = {}));

function init() {
  const nowTime = getPRCDate(),
        today = nowTime.getDate(),
        monthHasDays = getMonthHasDays(nowTime);
  let presetTime = TaskConfig.charge.presetTime;

  if (!isArray(presetTime)) {
    presetTime = [presetTime];
  }

  if (TaskModule.bCoinCouponBalance < 2) {
    logger.info(`剩余券为${TaskModule.bCoinCouponBalance}，不足2跳过充电`);
    return false;
  }

  if (monthHasDays === today) {
    logger.info(`今天是最后一天了`);
    return true;
  }

  if (presetTime.some(time => time === today)) {
    return true;
  }

  logger.info(`不在预设时间，不符合条件`);
  return false;
}

async function charging() {
  logger.info('----【给目标充电】----');
  await updateNav();
  await apiDelay();

  if (!init()) {
    return;
  }

  try {
    const bp_num = TaskModule.bCoinCouponBalance || 0;
    const up_mid = TaskConfig.charge.mid;
    let errorCount = 0;
    logger.info(`b 币券余额${bp_num}`);

    const run = async () => {
      const {
        code,
        message,
        data
      } = await chargingForUp(bp_num, true, up_mid);

      if (code !== 0) {
        logger.warn(`充电失败：${code} ${message}`);
        return;
      }

      logger.info(`目标【${up_mid}】${ChargeStatus[data.status]}`);

      if (data.status === ChargeStatus['成功']) {
        TaskModule.chargeOrderNo = data.order_no;
        await apiDelay();
        await chargeComments();
      }
    };

    TaskModule.chargeOrderNo = '';

    while (!TaskModule.chargeOrderNo) {
      await run();
      await apiDelay();

      if (errorCount++ > 2) {
        break;
      }
    }
  } catch (error) {
    logger.error(`充电出现异常：${error.message}`);
  }
}

async function chargeComments() {
  try {
    if (!TaskModule.chargeOrderNo) {
      return false;
    }

    const comment = defaultComments[random(0, defaultComments.length - 1)];
    const {
      code
    } = await chargingCommentsForUp(TaskModule.chargeOrderNo, comment);

    if (code === 0) {
      logger.info('留言成功！');
    }
  } catch {}
}

async function getPrivilegeStatus() {
  try {
    const {
      data,
      code,
      message
    } = await receiveVipMy();

    if (code !== 0) {
      logger.info(`获取领取状态失败：${code} ${message}`);
      return;
    }

    const {
      list
    } = data;
    const stateList = list.filter(item => item.state === 0);

    if (stateList.length === 0) {
      logger.info('暂无可领取权益（已领取）');
      return;
    }

    return stateList;
  } catch (error) {
    logger.error(`获取领取状态出现异常：${error.message}`);
  }
}

function getPrivilegeName(type) {
  switch (type) {
    case 1:
      return 'B 币券';

    case 2:
      return '会员购优惠券';

    case 3:
      return '漫读券';

    case 4:
      return '会员购运费券';

    default:
      return '未知';
  }
}

async function getOnePrivilege(type) {
  try {
    const name = getPrivilegeName(type);
    const {
      code,
      message
    } = await receiveVipPrivilege(type);
    let status = '成功';

    if (code !== 0) {
      status = `失败 ${message}`;
    }

    logger.info(`领取${name}${status}`);
    return true;
  } catch (error) {
    logger.error(`领取权益出现异常：${error.message}`);
    logger.error(error);
  }

  return false;
}

async function getPrivilege(type) {
  let errCount = 0,
      suc = false;

  while (!suc) {
    suc = await getOnePrivilege(type);

    if (errCount > 2) {
      break;
    }

    errCount++;
  }

  return suc;
}

async function getVipPrivilege() {
  try {
    logger.info('----【领取大会员权益】----');

    if (TaskModule.vipStatus === 0 || TaskModule.vipType === 0) {
      logger.info('您还不是大会员，无法领取权益');
      return;
    }

    const privilegeList = await getPrivilegeStatus();

    if (!privilegeList || privilegeList.length === 0) {
      return;
    }

    for (let index = 0; index < privilegeList.length; index++) {
      await apiDelay(100);
      const privilege = privilegeList[index];
      await getPrivilege(privilege.type);
    }
  } catch (error) {
    logger.error(`领取大会员权益出现异常：${error.message}`);
    logger.error(error);
  }
}

const EXPIRE_DATE = 2;
async function giveGift() {
  logger.info('----【投喂过期食物】----');

  try {
    const expiredGifts = await getExpiredGift();
    await apiDelay();

    if (!(expiredGifts !== null && expiredGifts !== void 0 && expiredGifts.length)) {
      logger.info(`没有${EXPIRE_DATE}天内过期的简单礼物`);
      return;
    }

    const room = await findOneRoom();

    if (!room) {
      logger.info(`没有找到投喂目标`);
      return;
    }

    await sendGift(room, expiredGifts);
  } catch (error) {
    logger.info(`投喂过期食物异常 ${error}`);
  }
}
let countGetExpiredGift = 0;

async function getExpiredGift() {
  try {
    const {
      data: {
        list
      }
    } = await getGiftBagList();
    return list.filter(gift => {
      if (gift.expire_at <= 0) {
        return false;
      }

      const time = (gift.expire_at * 1000 - new Date().getTime()) / MS2DATE < EXPIRE_DATE;
      const notSimple = ![1, 30607, 30426, 31531].includes(gift.gift_id);

      if (notSimple && time) {
        logger.info(`${gift.gift_name} 即将过期请尽快投喂`);
      }

      return notSimple ? false : time;
    });
  } catch (error) {
    if (!countGetExpiredGift) {
      await getExpiredGift();
    } else {
      return null;
    }

    countGetExpiredGift++;
  }
}

async function findOneRoom() {
  const upList = Object.assign([], TaskConfig.BILI_GIFT_UP);

  const getOneUp = () => upList.splice(random(TaskConfig.BILI_GIFT_UP.length - 1), 1)[0];

  while (upList.length) {
    const mid = getOneUp();
    const room = await getUserRoom(mid);

    if (room) {
      return {
        mid,
        ...room
      };
    }
  }

  return await findOneByRandomUp();
}

async function findOneByRandomUp() {
  const {
    data: {
      count,
      items: fansMedalList
    }
  } = await getLiveFansMedal();
  await apiDelay();

  if (!count) {
    return;
  }

  const target = fansMedalList[random(fansMedalList.length - 1)];
  return {
    mid: target.target_id,
    roomid: target.roomid || 0,
    name: target.uname
  };
}

async function getUserRoom(mid) {
  try {
    const {
      data: {
        live_room,
        name
      }
    } = await getUser(mid);
    await apiDelay();

    if (live_room.roomStatus) {
      return {
        roomid: live_room.roomid,
        name
      };
    }
  } catch {}
}

async function sendGift({
  roomid,
  mid,
  name
}, gifts) {
  for (const gift of gifts) {
    await apiDelay();

    try {
      const {
        code,
        message,
        data
      } = await sendBagGift({
        roomid,
        ruid: mid,
        bag_id: gift.bag_id,
        gift_id: gift.gift_id,
        gift_num: gift.gift_num
      });

      if (code !== 0) {
        logger.warn(`向[${name}]投喂[${gift.gift_name}]，${message}`);
        continue;
      }

      data.gift_list.forEach(gift => {
        logger.info(`成功给 [${name}] 投喂${gift.gift_name}`);
      });
    } catch {}
  }
}

function getGuessCollection(stime = '', etime = '') {
  return biliApi.get(`/x/esports/guess/collection/question?pn=1&ps=50&gid=&sids=&stime=${stime}&etime=${etime}`);
}
function guessAdd(oid, main_id, detail_id, count) {
  const csrf = TaskConfig.BILIJCT;
  const postData = {
    is_fav: 0,
    main_id,
    oid,
    detail_id,
    count,
    csrf,
    csrf_token: csrf
  };
  return biliApi.post('/x/esports/guess/add', postData);
}

async function matchGame() {
  logger.info('----【赛事硬币竞猜】----');

  if (TaskConfig.MATCH_COINS <= 0) {
    logger.info('硬币数量不能小于 0');
    return;
  }

  if (isLackOfCoin()) {
    return;
  }

  const list = await getOneGuessCollection();
  await apiDelay();

  if (!list) {
    return;
  }

  const count = await guessOne(filterList(list, TaskConfig.MATCH_DIFF));
  logger.info(`【竞猜结束】一共参与${count}次预测`);
}

function filterList(list, n) {
  return list.filter(item => {
    const {
      questions
    } = item;
    const [{
      details,
      is_guess
    }] = questions;

    if (is_guess) {
      return false;
    }

    const [team1, team2] = details;
    const diff = Math.abs(team1.odds - team2.odds);
    return diff >= n;
  });
}

async function getOneGuessCollection() {
  try {
    const {
      code,
      message,
      data: {
        list,
        page
      }
    } = await getGuessCollection();

    if (code !== 0) {
      logger.warn(`获取赛事错误 ${code} ${message}`);
      return;
    }

    if (page.total === 0) {
      logger.info('今日已经无法获取赛事');
      return null;
    }

    return list;
  } catch (error) {}
}

async function guessOne(list) {
  let count = 0;

  try {
    for (const games of list) {
      const {
        contest,
        questions
      } = games;
      const contestId = contest.id;
      const [{
        id: questionsId,
        title,
        details,
        is_guess
      }] = questions;
      const [team1, team2] = details;

      if (isLackOfCoin()) {
        return count;
      }

      if (is_guess) {
        continue;
      }

      logger.info(`${title} <=> ${team1.odds}:${team2.odds}`);
      const oddResult = team1.odds > team2.odds;
      let teamSelect;

      if (TaskConfig.MATCH_SELECTION > 0) {
        teamSelect = oddResult ? team2 : team1;
      } else {
        teamSelect = oddResult ? team1 : team2;
      }

      logger.info(`预测[ ${teamSelect.option} ] ${TaskConfig.MATCH_COINS} 颗硬币`);
      await apiDelay();
      const {
        code
      } = await guessAdd(contestId, questionsId, teamSelect.detail_id, TaskConfig.MATCH_COINS);

      if (code !== 0) {
        logger.info('预测失败');
      } else {
        count++;
        TaskModule.money -= TaskConfig.MATCH_COINS;
      }
    }
  } catch (error) {
    console.warn(error.message);
  }

  return count;
}

function isLackOfCoin() {
  if (TaskModule.money - TaskConfig.MATCH_COINS < TaskConfig.BILI_TARGET_COINS) {
    logger.info(`需要保留${TaskConfig.BILI_TARGET_COINS}个硬币，任务结束`);
    return true;
  }

  return false;
}

async function getLastFollow() {
  const {
    data,
    code
  } = await getFollowingsByTag(1, 1, 0);

  if (code !== 0) {
    throw new Error(`获取最后一个关注失败: ${code}`);
  }

  return data[0];
}
async function getTag(tagName) {
  const {
    data,
    code
  } = await getTags();

  if (code !== 0) {
    logger.warn(`获取分组列表失败: ${code}`);
    return;
  }

  return data.find(tag => tag.name === tagName);
}
async function tryCreateTag(tagName) {
  const tag = await getTag(tagName);

  if (tag) {
    return tag.tagid;
  }

  await apiDelay(300);
  const {
    data,
    code,
    message
  } = await createTag(tagName);

  if (code === 22106) {
    await apiDelay(300);
    const tag = await getTag(tagName);
    return tag && tag.tagid;
  }

  if (code !== 0) {
    logger.warn(`创建分组失败: ${code}-${message}`);
  }

  return data.tagid;
}
async function moveUsersToTag(users, tagName = '天选时刻') {
  if (users.length === 0) {
    return;
  }

  const tagId = await tryCreateTag(tagName);

  if (!tagId) {
    return;
  }

  for (const user of users) {
    const {
      code,
      message
    } = await moveToTag(user.mid, tagId);

    if (code !== 0) {
      logger.warn(`移动【${user.uname}】失败: ${code}-${message}`);
    }

    await apiDelay();
  }
}
async function getTeamUsers(users, lotteryFollows, lastFollow, ps = 1) {
  if (users.length > lotteryFollows.length) {
    return;
  }

  const {
    data,
    code,
    message
  } = await getFollowingsByTag(ps, 20, 0);

  if (code !== 0) {
    logger.warn(`获取关注用户失败: ${code}-${message}`);
    return;
  }

  for (const {
    mid,
    uname
  } of data) {
    if (users.length >= lotteryFollows.length) {
      return;
    }

    if (mid === lastFollow) {
      return;
    }

    if (lotteryFollows.includes(mid) || lotteryFollows.includes(uname)) {
      users.push({
        mid,
        uname
      });
    }
  }

  if (data.length < 20) {
    return;
  }

  return await getTeamUsers(users, lotteryFollows, lastFollow, ps + 1);
}

const RequireType = {
  None: 0,
  Follow: 1,
  Fans: 2,
  Captain: 3,
  Level: 5
};
const TianXuanStatus = {
  Enabled: 1,
  Disabled: 2
};
const PendentID = {
  Time: 504,
  RedPacket: 1096,
  Top10: 0,
  Top10_SR: 1170,
  YS_GaoNeng: 968,
  GFK_JueHuo: 1121,
  Birthday: 863,
  Major: 1152
};

let newFollowUp;

async function getLiveArea() {
  try {
    const {
      data,
      code,
      message
    } = await getArea();

    if (code !== 0) {
      logger.info(`获取直播分区失败: ${code}-${message}`);
    }

    return data.data.map(item => item.list).map(item => item.map(area => ({
      areaId: area.id,
      parentId: area.parent_id
    })));
  } catch (error) {
    logger.error(`获取直播分区异常: ${error.message}`);
    throw error;
  }
}

function pendentLottery(list) {
  const lotteryTime = [],
        lotteryPacket = [];
  list.forEach(item => {
    const num2 = item.pendant_info['2'];

    if (!num2) {
      return;
    }

    if (num2.pendent_id === PendentID.Time) {
      lotteryTime.push(item);
    } else if (num2.pendent_id === PendentID.RedPacket) {
      lotteryPacket.push(item);
    }
  });
  return {
    lotteryTime,
    lotteryPacket
  };
}

async function getLotteryRoomList(areaId, parentId, page = 1, lotType = 'lottery') {
  try {
    await apiDelay(100);
    const {
      data,
      code,
      message
    } = await getLiveRoom(parentId, areaId, page);

    if (code !== 0) {
      logger.info(`获取直播间列表失败: ${code}-${message}`);
    }

    return pendentLottery(data.list)[lotType === 'lottery' ? 'lotteryTime' : 'lotteryPacket'];
  } catch (error) {
    logger.error(`获取直播间列表异常: ${error.message}`);
    throw error;
  }
}

async function checkLotteryRoomList(areaId, parentId, page = 1) {
  const roomList = await getLotteryRoomList(areaId, parentId, page);
  const checkedRoomList = [];

  for (const room of roomList) {
    const data = await checkLotteryRoom(room);

    if (data) {
      checkedRoomList.push({ ...data,
        uid: room.uid,
        uname: room.uname
      });
      await apiDelay(100);
    }
  }

  return checkedRoomList;
}

async function checkLotteryRoom(room) {
  const {
    blackUid
  } = TaskConfig.lottery;

  if (blackUid.includes(room.uid)) {
    logger.info(`跳过黑名单用户: ${room.uname}`);
    return;
  }

  let code, data, message;

  try {
    ({
      data,
      code,
      message
    } = await checkLottery(room.roomid));
  } catch (error) {
    logger.info(`直播间${room.roomid}检测异常: ${error.message}`);
    return;
  }

  if (code !== 0) {
    logger.debug(`直播间${room.roomid}检测失败: ${code}-${message}`);
    return;
  } else if (data === null) {
    return;
  }

  const {
    excludeAward,
    includeAward
  } = TaskConfig.lottery,
        isExclude = excludeAward.some(text => data.award_name.match(text)),
        isInclude = includeAward.some(text => data.award_name.match(text));

  if (!isInclude && isExclude) {
    logger.info(`跳过屏蔽奖品: ${data.award_name}`);
    return;
  }

  if (data.status !== TianXuanStatus.Enabled) {
    return;
  }

  if (data.gift_price > 0) {
    return;
  }

  if (data.require_type === 4) {
    logger.info(`您能反馈给作者输出了什么吗？`);
    logger.info(`${data.require_type}--${data.require_text}--${data.require_value}`);
    logger.info(`也许这正是我们想要的。`);
  }

  if (data.require_type === RequireType.Level && TaskModule.userLevel >= data.require_value) {
    return data;
  }

  if (data.require_type === RequireType.None) {
    return data;
  }

  if (data.require_type === RequireType.Follow && !TaskConfig.lottery.skipNeedFollow) {
    return data;
  }
}

function getRequireUp(requireText) {
  requireText = requireText.replace('关注主播', '');
  const requireTextList = requireText.split(/\s*\+\s*/);
  requireTextList.shift();
  return requireTextList;
}

async function doLottery(lottery, rememberUp = true) {
  try {
    const {
      id,
      gift_id,
      gift_num,
      award_name,
      uid,
      uname,
      require_type,
      require_text
    } = lottery;
    logger.info(`天选主播：【${uname}】`);
    logger.info(`奖品：${award_name}`);
    const {
      code,
      message
    } = await joinLottery({
      id,
      gift_id,
      gift_num
    });

    if (code !== 0) {
      logger.info(`天选失败: ${code}-${message}`);
      return;
    }

    logger.info(`天选成功 √`);

    if (require_type === RequireType.Follow && rememberUp) {
      pushIfNotExist(newFollowUp, uid);
      const requireTextList = getRequireUp(require_text);
      requireTextList.forEach(requireText => pushIfNotExist(newFollowUp, requireText));
    }
  } catch (error) {
    logger.info(`天选异常: ${error.message}`);
  }
}

async function doLotteryArea(areaId, parentId, num = 2) {
  for (let page = 1; page <= num; page++) {
    const rooms = await checkLotteryRoomList(areaId, parentId, page);

    for (const room of rooms) {
      await doLottery(room);
      await apiDelay(300);
    }
  }
}

async function liveLotteryService() {
  newFollowUp = [];
  const {
    pageNum
  } = TaskConfig.lottery;
  const areaList = await getLiveArea();

  for (const areas of areaList) {
    for (const area of areas) {
      await doLotteryArea(area.areaId, area.parentId, pageNum);
    }
  }

  return newFollowUp;
}

async function getRedPacketId(roomId) {
  try {
    const {
      data,
      code
    } = await checkRedPacket(roomId);

    if (code !== 0) {
      return;
    }

    const {
      popularity_red_pocket
    } = data;

    if (!popularity_red_pocket) {
      return;
    }

    const {
      lot_id,
      lot_status
    } = popularity_red_pocket[0];

    if (lot_status === 2) {
      return;
    }

    return lot_id;
  } catch (error) {}
}

async function getRedPacketRoom(areaId, parentId, page = 1) {
  const roomList = await getLotteryRoomList(areaId, parentId, page, 'redPack');
  const checkedRoomList = [];

  for (const room of roomList) {
    const lotId = await getRedPacketId(room.roomid);

    if (lotId) {
      checkedRoomList.push({
        uid: room.uid,
        uname: room.uname,
        lot_id: lotId,
        room_id: room.roomid
      });
      await apiDelay(100);
    }
  }

  return checkedRoomList;
}

async function doRedPacket(redPacket) {
  try {
    const {
      lot_id,
      uid,
      uname,
      room_id
    } = redPacket;
    logger.info(`红包主播：【${uname}】`);
    const {
      code,
      message
    } = await joinRedPacket({
      room_id,
      lot_id,
      ruid: uid
    });

    if (code !== 0) {
      logger.info(`红包失败: ${code}-${message}`);
      return;
    }

    newFollowUp.push(uid);
    logger.info(`红包成功 √`);
  } catch (error) {
    logger.info(`红包异常: ${error.message}`);
  }
}

async function doRedPackArea(areaId, parentId, num = 2) {
  for (let page = 1; page <= num; page++) {
    const rooms = await getRedPacketRoom(areaId, parentId, page);

    for (const room of rooms) {
      await doRedPacket(room);
      await apiDelay(200);
    }
  }
}

async function liveRedPackService() {
  newFollowUp = [];
  const {
    pageNum
  } = TaskConfig.lottery;
  const areaList = await getLiveArea();

  for (const areas of areaList) {
    for (const area of areas) {
      await doRedPackArea(area.areaId, area.parentId, pageNum);
    }
  }

  return newFollowUp;
}

async function getLivingFollow() {
  const livingRoomList = [];
  await getLiveRoomList();
  return livingRoomList;

  async function getLiveRoomList(page = 1) {
    try {
      var _data$list;

      const {
        data,
        code,
        message
      } = await getFollowLiveRoomList(page, 9);

      if (code !== 0) {
        logger.info(`获取关注直播间失败: ${code}-${message}`);
        return;
      }

      const roomList = (_data$list = data.list) === null || _data$list === void 0 ? void 0 : _data$list.filter(room => room.live_status === 1);

      if (roomList.length === 9 && page < data.totalPage) {
        livingRoomList.push(...roomList);
        return getLiveRoomList(page + 1);
      }

      livingRoomList.push(...roomList);
    } catch (error) {
      logger.error(`获取关注直播间异常: ${error.message}`);
    }
  }
}

async function checkLotteryFollwRoom(room) {
  try {
    const {
      code,
      message,
      data
    } = await checkLottery(room.roomid);

    if (code !== 0) {
      logger.debug(`直播间${room.roomid}检测失败: ${code}-${message}`);
      return;
    }

    if (data === null) return;
    if (data.status !== TianXuanStatus.Enabled) return;
    if (data.gift_price > 0) return;
    return data;
  } catch (error) {
    logger.info(`直播间${room.roomid}检测异常: ${error.message}`);
    return;
  }
}

async function checkLotteryFollowRoomList() {
  const livingRoomList = await getLivingFollow();
  const lotteryRoomList = [];

  for (const room of livingRoomList) {
    const lottery = await checkLotteryFollwRoom(room);

    if (lottery) {
      lotteryRoomList.push({ ...lottery,
        uid: room.uid,
        uname: room.uname
      });
    }

    await apiDelay(100);
  }

  return lotteryRoomList;
}

async function liveFollowLotteryService() {
  const {
    scanFollow
  } = TaskConfig.lottery;

  if (!scanFollow) {
    return true;
  }

  try {
    logger.info(`开始扫描关注的主播`);
    const lotteryRoomList = await checkLotteryFollowRoomList();

    for (const room of lotteryRoomList) {
      await doLottery(room, false);
      await apiDelay(300);
    }

    logger.info(`关注的主播天选完成`);
  } catch (error) {
    logger.error(`关注的主播天选异常: ${error.message}`);
  }

  if (scanFollow === 'only') {
    return false;
  }

  return true;
}

async function liveLottery() {
  logger.info('----【天选时刻】----');
  const isGo = await liveFollowLotteryService();
  if (!isGo) return isGo;

  try {
    const lastFollow = await getLastFollow();
    logger.info(`最后一个关注的UP: ${lastFollow.uname}`);
    const newFollowUps = await liveLotteryService();
    logger.info('扫描完成');
    const followUps = [];
    await getTeamUsers(followUps, newFollowUps, lastFollow === null || lastFollow === void 0 ? void 0 : lastFollow.mid);
    await moveUsersToTag(followUps);
    logger.info('移动关注UP到分组成功');
  } catch (error) {
    logger.warn(`天选时刻异常: ${error.message}`);
    logger.debug(error);
  }

  logger.info('结束天选时刻');
}

function getSession({
  session_type
} = {
  session_type: 1
}) {
  return vcApi.get(`/session_svr/v1/session_svr/get_sessions?session_type=${session_type}&group_fold=1&unfollow_fold=1&sort_rule=2&build=0&mobi_app=web`);
}
function readSession({
  talker_id,
  session_type,
  ack_seqno
}) {
  return vcApi.post('/session_svr/v1/session_svr/update_ack', {
    talker_id,
    session_type,
    ack_seqno,
    build: 0,
    mobi_app: 'web',
    csrf_token: TaskConfig.BILIJCT,
    csrf: TaskConfig.BILIJCT
  }, {
    headers: {
      origin: OriginURLs.message
    }
  });
}
function deleteSession({
  talker_id,
  session_type
}) {
  return vcApi.post('/session_svr/v1/session_svr/remove_session', {
    talker_id,
    session_type,
    build: 0,
    mobi_app: 'web',
    csrf_token: TaskConfig.BILIJCT,
    csrf: TaskConfig.BILIJCT
  });
}

function isOneHour(timestamp) {
  const now = Date.now();
  const diff = now - timestamp * 1000;
  return diff < 3600000;
}

async function getMessageList(followUps) {
  try {
    const {
      code,
      message,
      data
    } = await getSession();

    if (code !== 0) {
      logger.warn(`获取会话失败：${code}-${message}`);
      return;
    }

    const {
      session_list
    } = data;

    if (session_list.length <= 0) {
      return;
    }

    return session_list.filter(({
      unread_count,
      talker_id,
      is_follow,
      last_msg
    }) => followUps.find(follow => follow.mid === talker_id) && unread_count > 0 && talker_id === last_msg.sender_uid && is_follow === 1 && isOneHour(last_msg.timestamp));
  } catch (error) {
    logger.error(`获取会话异常：${error.message}`);
  }
}

async function updateSession(followUps) {
  const sessionList = await getMessageList(followUps);
  await apiDelay(200);

  try {
    for (let index = 0; index < sessionList.length; index++) {
      const session = sessionList[index];
      await handleSession(session);
    }
  } catch (error) {
    logger.error(`更新会话异常：${error.message}`);
  }

  if (sessionList.length >= 19) {
    await updateSession(followUps);
  }
}

async function handleSession(session) {
  switch (TaskConfig.lottery.actFollowMsg) {
    case 'del':
    case 'delete':
      await deleteSession(session);
      break;

    case 'read':
      await readSession(session);
      break;
  }

  await apiDelay(50);
}

async function liveRedPack() {
  logger.info('----【天选红包】----');

  try {
    const lastFollow = await getLastFollow();
    logger.info(`最后一个关注的UP: ${lastFollow.uname}`);
    const newFollowUps = await liveRedPackService();
    logger.info('扫描完成，获取新关注的UP');
    const followUps = [];
    await getTeamUsers(followUps, newFollowUps, lastFollow === null || lastFollow === void 0 ? void 0 : lastFollow.mid);
    logger.info('开始读取消息');
    await updateSession(followUps);
    logger.info('移动关注UP到分组');
    await moveUsersToTag(followUps);
    logger.info('移动关注UP到分组成功');
  } catch (error) {
    logger.warn(`天选时刻异常: ${error.message}`);
    logger.debug(error);
  }

  logger.info('结束天选红包');
}

async function liveIntimacy() {
  logger.info('----【直播亲密度】----');

  try {
    await liveIntimacyService();
    logger.info('直播亲密度完成');
  } catch (error) {
    logger.error(`直播亲密度: ${error.message}`);
  }
}

var index = {
  taskReward,
  liveSignTask,
  addCoins,
  shareAndWatch,
  silver2Coin,
  mangaSign,
  mangaTask,
  supGroupSign,
  liveSendMessage,
  charging,
  getVipPrivilege,
  matchGame,
  liveLottery,
  liveRedPack,
  liveIntimacy,
  giveGift
};

var index$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	loginTask: loginTask,
	'default': index
});

async function getLatestVersion() {
  const options = {
    timeout: 6000
  };

  try {
    const data = await Promise.any([defHttp.get('https://api.github.com/repos/KudouRan/BiliTools/releases/latest', options), defHttp.get('https://gitee.com/api/v5/repos/catlair/BiliTools/releases/latest', options)]);
    return data.tag_name;
  } catch (error) {
    return;
  }
}

async function printVersion() {
  let version = 'v0.5.11886';

  if (version.includes('.')) {
    printStrVersion();
  } else {
    version = undefined;
  }

  try {
    if (!version) {
      version = 'v' + (getVersionByPkg() || getVersionByFile());
      logger.info(`当前版本【${version}】`);
    }

    if (!version) {
      return;
    }

    const latestTag = await getLatestVersion();

    if (latestTag && latestTag !== version) {
      logger.info(`可更新：最新版本【${latestTag}】`);
    }
  } catch {}
}

function getVersionByPkg() {
  try {
    return require("../../package.json").version;
  } catch {}
}

function getVersionByFile() {
  try {
    return fs__namespace.readFileSync(path__namespace.resolve(__dirname, '../version.txt'), 'utf8').trim();
  } catch {}
}

function printStrVersion() {
  logger.info(`当前版本【v0.5.11886】`);
}

var version = /*#__PURE__*/Object.freeze({
	__proto__: null,
	printVersion: printVersion,
	printStrVersion: printStrVersion
});
// auto commit
