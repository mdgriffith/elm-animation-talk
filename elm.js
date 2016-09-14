
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};
	for (var key in oldRecord)
	{
		var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
		newRecord[key] = value;
	}
	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		var name = v.func ? v.func.name : v.name;
		return '<function' + (name === '' ? '' : ':') + name + '>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return A2(f, _p1._0, _p1._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$snd = function (_p2) {
	var _p3 = _p2;
	return _p3._1;
};
var _elm_lang$core$Basics$fst = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _elm_lang$core$Basics$always = F2(
	function (a, _p6) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$Never = function (a) {
	return {ctor: 'Never', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$oneOf = function (maybes) {
	oneOf:
	while (true) {
		var _p1 = maybes;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p3 = _p1._0;
			var _p2 = _p3;
			if (_p2.ctor === 'Nothing') {
				var _v3 = _p1._1;
				maybes = _v3;
				continue oneOf;
			} else {
				return _p3;
			}
		}
	}
};
var _elm_lang$core$Maybe$andThen = F2(
	function (maybeValue, callback) {
		var _p4 = maybeValue;
		if (_p4.ctor === 'Just') {
			return callback(_p4._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p5._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p6 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p6._0._0, _p6._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p7 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p7.ctor === '_Tuple3') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === 'Just')) && (_p7._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p7._0._0, _p7._1._0, _p7._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p8 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p8.ctor === '_Tuple4') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) && (_p8._2.ctor === 'Just')) && (_p8._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p8._0._0, _p8._1._0, _p8._2._0, _p8._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p9 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p9.ctor === '_Tuple5') && (_p9._0.ctor === 'Just')) && (_p9._1.ctor === 'Just')) && (_p9._2.ctor === 'Just')) && (_p9._3.ctor === 'Just')) && (_p9._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p9._0._0, _p9._1._0, _p9._2._0, _p9._3._0, _p9._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}


function range(lo, hi)
{
	var list = Nil;
	if (lo <= hi)
	{
		do
		{
			list = Cons(hi, list);
		}
		while (hi-- > lo);
	}
	return list;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,
	range: range,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return _elm_lang$core$Basics$not(
			A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return _elm_lang$core$Basics$not(
						isOkay(_p2));
				},
				list));
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			_elm_lang$core$Native_List.range(
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						_elm_lang$core$List_ops['::'],
						f(x),
						acc);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (x, xs$) {
				return pred(x) ? A2(_elm_lang$core$List_ops['::'], x, xs$) : xs$;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return A2(_elm_lang$core$List_ops['::'], _p10._0, xs);
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$List_ops['::'], x, y);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, x, _p11._0),
						accAcc);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				_elm_lang$core$Native_List.fromArray(
					[b]),
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		_elm_lang$core$Native_List.fromArray(
			[]),
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], x, _p16),
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: A2(_elm_lang$core$List_ops['::'], x, _p15)
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$List_ops['::'], _p19._0, _p20._0),
				_1: A2(_elm_lang$core$List_ops['::'], _p19._1, _p20._1)
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var step = F2(
				function (x, rest) {
					return A2(
						_elm_lang$core$List_ops['::'],
						sep,
						A2(_elm_lang$core$List_ops['::'], x, rest));
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_p21._1);
			return A2(_elm_lang$core$List_ops['::'], _p21._0, spersed);
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = A2(_elm_lang$core$List_ops['::'], _p22._0, taken);
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				_elm_lang$core$Native_List.fromArray(
					[])));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return _elm_lang$core$Native_List.fromArray(
											[_p23._1._0, _p23._1._1._0]);
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return _elm_lang$core$Native_List.fromArray(
												[_p23._1._0, _p23._1._1._0, _p23._1._1._1._0]);
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? A2(
												_elm_lang$core$List_ops['::'],
												_p26,
												A2(
													_elm_lang$core$List_ops['::'],
													_p27,
													A2(
														_elm_lang$core$List_ops['::'],
														_p28,
														A2(
															_elm_lang$core$List_ops['::'],
															_p25,
															A2(_elm_lang$core$List$takeTailRec, n - 4, _p24))))) : A2(
												_elm_lang$core$List_ops['::'],
												_p26,
												A2(
													_elm_lang$core$List_ops['::'],
													_p27,
													A2(
														_elm_lang$core$List_ops['::'],
														_p28,
														A2(
															_elm_lang$core$List_ops['::'],
															_p25,
															A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)))));
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return _elm_lang$core$Native_List.fromArray(
					[_p23._1._0]);
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = A2(_elm_lang$core$List_ops['::'], value, result),
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			_elm_lang$core$Native_List.fromArray(
				[]),
			n,
			value);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (result, callback) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$formatError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function addPublicModule(object, name, main)
{
	var init = main ? makeEmbed(name, main) : mainIsUndefined(name);

	object['worker'] = function worker(flags)
	{
		return init(undefined, flags, false);
	}

	object['embed'] = function embed(domNode, flags)
	{
		return init(domNode, flags, true);
	}

	object['fullscreen'] = function fullscreen(flags)
	{
		return init(document.body, flags, true);
	};
}


// PROGRAM FAIL

function mainIsUndefined(name)
{
	return function(domNode)
	{
		var message = 'Cannot initialize module `' + name +
			'` because it has no `main` value!\nWhat should I show on screen?';
		domNode.innerHTML = errorHtml(message);
		throw new Error(message);
	};
}

function errorHtml(message)
{
	return '<div style="padding-left:1em;">'
		+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
		+ '<pre style="padding-left:1em;">' + message + '</pre>'
		+ '</div>';
}


// PROGRAM SUCCESS

function makeEmbed(moduleName, main)
{
	return function embed(rootDomNode, flags, withRenderer)
	{
		try
		{
			var program = mainToProgram(moduleName, main);
			if (!withRenderer)
			{
				program.renderer = dummyRenderer;
			}
			return makeEmbedHelp(moduleName, program, rootDomNode, flags);
		}
		catch (e)
		{
			rootDomNode.innerHTML = errorHtml(e.message);
			throw e;
		}
	};
}

function dummyRenderer()
{
	return { update: function() {} };
}


// MAIN TO PROGRAM

function mainToProgram(moduleName, wrappedMain)
{
	var main = wrappedMain.main;

	if (typeof main.init === 'undefined')
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);

		return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
			init: function() { return noChange; },
			view: function() { return main; },
			update: F2(function() { return noChange; }),
			subscriptions: function () { return emptyBag; }
		});
	}

	var flags = wrappedMain.flags;
	var init = flags
		? initWithFlags(moduleName, main.init, flags)
		: initWithoutFlags(moduleName, main.init);

	return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
		init: init,
		view: main.view,
		update: main.update,
		subscriptions: main.subscriptions,
	});
}

function initWithoutFlags(moduleName, realInit)
{
	return function init(flags)
	{
		if (typeof flags !== 'undefined')
		{
			throw new Error(
				'You are giving module `' + moduleName + '` an argument in JavaScript.\n'
				+ 'This module does not take arguments though! You probably need to change the\n'
				+ 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`'
			);
		}
		return realInit();
	};
}

function initWithFlags(moduleName, realInit, flagDecoder)
{
	return function init(flags)
	{
		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Err')
		{
			throw new Error(
				'You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n'
				+ 'When trying to convert it to a usable Elm value, I run into this problem:\n\n'
				+ result._0
			);
		}
		return realInit(result._0);
	};
}


// SETUP RUNTIME SYSTEM

function makeEmbedHelp(moduleName, program, rootDomNode, flags)
{
	var init = program.init;
	var update = program.update;
	var subscriptions = program.subscriptions;
	var view = program.view;
	var makeRenderer = program.renderer;

	// ambient state
	var managers = {};
	var renderer;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var results = init(flags);
		var model = results._0;
		renderer = makeRenderer(rootDomNode, enqueue, view(model));
		var cmds = results._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			renderer.update(view(model));
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, handleMsg, loop);
	}

	var task = A2(andThen, init, loop);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			var value = converter(cmdList._0);
			for (var i = 0; i < subs.length; i++)
			{
				subs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		var value = result._0;
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		currentSend(incomingValue);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	mainToProgram: mainToProgram,
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,
	addPublicModule: addPublicModule,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(task, callback)
{
	return {
		ctor: '_Task_andThen',
		task: task,
		callback: callback
	};
}

function onError(task, callback)
{
	return {
		ctor: '_Task_onError',
		task: task,
		callback: callback
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;
	
	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}	
	
	return _elm_lang$core$Native_List.fromArray(is);
}

function toInt(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		start = 1;
	}
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
	}
	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function toFloat(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		start = 1;
	}
	var dotCount = 0;
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if ('0' <= c && c <= '9')
		{
			continue;
		}
		if (c === '.')
		{
			dotCount += 1;
			if (dotCount <= 1)
			{
				continue;
			}
		}
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	return _elm_lang$core$Result$Ok(parseFloat(s));
}

function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(_elm_lang$core$List_ops['::'], key, keyList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(_elm_lang$core$List_ops['::'], value, valueList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					_elm_lang$core$List_ops['::'],
					{ctor: '_Tuple2', _0: key, _1: value},
					list);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				_elm_lang$core$Native_List.fromArray(
					[
						'Internal red-black tree invariant violated, expected ',
						msg,
						' and got ',
						_elm_lang$core$Basics$toString(c),
						'/',
						lgot,
						'/',
						rgot,
						'\nPlease report this bug to <https://github.com/elm-lang/core/issues>'
					])));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (c, l, r) {
		var _p29 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = c;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: c, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						c,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						c,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var l$ = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, c, k, v, l$, r);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs$ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? A2(
			_elm_lang$core$List_ops['::'],
			group,
			A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs$)) : _elm_lang$core$Native_List.fromArray(
			[]);
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs$ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? A2(
			_elm_lang$core$List_ops['::'],
			group,
			A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs$)) : _elm_lang$core$Native_List.fromArray(
			[]);
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = function (prefix) {
	return function (_p0) {
		return A2(
			_elm_lang$core$List$all,
			_elm_lang$core$Basics$identity,
			A3(
				_elm_lang$core$List$map2,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					}),
				prefix,
				_p0));
	};
};
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return A2(
			_elm_lang$core$List_ops['::'],
			{
				ctor: '_Tuple3',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _p4,
				_2: _p5
			},
			A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$List_ops['::'], _p4, _p3._0),
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5)));
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return A2(
			_elm_lang$core$List_ops['::'],
			{ctor: '_Tuple2', _0: _p9, _1: _p10},
			A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: A2(_elm_lang$core$List_ops['::'], _p9, _p8._1)
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10)));
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return A2(
				_elm_lang$core$List_ops['::'],
				A2(_elm_lang$core$List_ops['::'], e, _p12),
				A2(_elm_lang$core$List_ops['::'], _p12, _p11._1));
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$core$Native_List.fromArray(
			[])
		]));
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return A2(
				_elm_lang$core$List_ops['::'],
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return A2(_elm_lang$core$List_ops['::'], x, y);
						})(e),
					acc));
		}),
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$core$Native_List.fromArray(
			[])
		]));
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs$) {
		var _p13 = xs$;
		if (_p13.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p13._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$core$Native_List.fromArray(
						[_p13._0])
					]);
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? A2(
						_elm_lang$core$List_ops['::'],
						A2(_elm_lang$core$List_ops['::'], _p15, _p14._0),
						_p14._1) : A2(
						_elm_lang$core$List_ops['::'],
						_elm_lang$core$Native_List.fromArray(
							[_p15]),
						_p14);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? _elm_lang$core$Native_List.fromArray(
					[]) : A2(_elm_lang$core$List_ops['::'], x, xs);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]));
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$List_ops['::'], x, _p19),
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Basics$fst(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_List.fromArray(
						[]),
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p21 = f(seed);
		if (_p21.ctor === 'Nothing') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			return A2(
				_elm_lang$core$List_ops['::'],
				_p21._0._0,
				A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p21._0._1));
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs$) {
		var _p22 = xs$;
		if (_p22.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p22._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[_p22._0]);
			} else {
				var _p23 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p22._1);
				if (_p23.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, _p22._0, _p23._0),
						_p23);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs$) {
		var _p24 = xs$;
		if (_p24.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[acc]);
		} else {
			var _p25 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p24._1);
			if (_p25.ctor === '::') {
				return A2(
					_elm_lang$core$List_ops['::'],
					A2(f, _p24._0, _p25._0),
					_p25);
			} else {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs$) {
		var _p26 = xs$;
		if (_p26.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p26._0, _p26._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p27) {
				var _p28 = _p27;
				var _p29 = _p28._0;
				return {
					ctor: '_Tuple2',
					_0: _p29 - 1,
					_1: A3(func, _p29, x, _p28._1)
				};
			});
		return _elm_lang$core$Basics$snd(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p30) {
				var _p31 = _p30;
				var _p32 = _p31._0;
				return {
					ctor: '_Tuple2',
					_0: _p32 + 1,
					_1: A3(func, _p32, x, _p31._1)
				};
			});
		return _elm_lang$core$Basics$snd(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p33 = m;
						if (_p33.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p33._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p34 = m;
						if (_p34.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p34._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p35 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v19_1:
			do {
				if (_p35._0.ctor === '::') {
					if (_p35._1.ctor === '::') {
						var _v20 = _p35._0._1,
							_v21 = _p35._1._1,
							_v22 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							_elm_lang$core$Native_List.fromArray(
								[_p35._0._0, _p35._1._0]));
						l1 = _v20;
						l2 = _v21;
						acc = _v22;
						continue interweaveHelp;
					} else {
						break _v19_1;
					}
				} else {
					if (_p35._1.ctor === '[]') {
						break _v19_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p35._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p35._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			_elm_lang$core$Native_List.fromArray(
				[]));
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs$) {
	var _p36 = xs$;
	if (_p36.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$core$Native_List.fromArray(
				[])
			]);
	} else {
		var f = function (_p37) {
			var _p38 = _p37;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					})(_p38._0),
				_elm_community$list_extra$List_Extra$permutations(_p38._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p36));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p39 = xs;
	if (_p39.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p40 = _p39._0;
		var f = F2(
			function (ys, r) {
				return A2(
					_elm_lang$core$List_ops['::'],
					ys,
					A2(
						_elm_lang$core$List_ops['::'],
						A2(_elm_lang$core$List_ops['::'], _p40, ys),
						r));
			});
		return A2(
			_elm_lang$core$List_ops['::'],
			_elm_lang$core$Native_List.fromArray(
				[_p40]),
			A3(
				_elm_lang$core$List$foldr,
				f,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p39._1)));
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return A2(
		_elm_lang$core$List_ops['::'],
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs));
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p41 = ll;
		if (_p41.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p41._0.ctor === '[]') {
				var _v27 = _p41._1;
				ll = _v27;
				continue transpose;
			} else {
				var _p42 = _p41._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p42);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p42);
				return A2(
					_elm_lang$core$List_ops['::'],
					A2(_elm_lang$core$List_ops['::'], _p41._0._0, heads),
					_elm_community$list_extra$List_Extra$transpose(
						A2(_elm_lang$core$List_ops['::'], _p41._0._1, tails)));
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p43) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p43));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p44) {
				return _elm_lang$core$Basics$not(
					pred(_p44));
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p45 = tail;
			if (_p45.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p45._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$singleton = function (x) {
	return _elm_lang$core$Native_List.fromArray(
		[x]);
};
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p46 = tail;
			if (_p46.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						A2(_elm_lang$core$List_ops['::'], value, _p46._0)));
			}
		}
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p47 = xs;
		if (_p47.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p49 = _p47._1;
			var _p48 = _p47._0;
			return _elm_lang$core$Native_Utils.eq(x, _p48) ? _p49 : A2(
				_elm_lang$core$List_ops['::'],
				_p48,
				A2(_elm_community$list_extra$List_Extra$remove, x, _p49));
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p50) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$fst,
			A2(
				_elm_lang$core$List$filter,
				function (_p51) {
					var _p52 = _p51;
					return p(_p52._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p50)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p53) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p53));
	};
};
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p54 = list;
			if (_p54.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p55 = _p54._0;
				if (predicate(_p55)) {
					return _elm_lang$core$Maybe$Just(_p55);
				} else {
					var _v33 = predicate,
						_v34 = _p54._1;
					predicate = _v33;
					list = _v34;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p56) {
		return _elm_lang$core$Basics$not(
			A2(_elm_lang$core$List$member, x, _p56));
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$Basics$flip(_elm_lang$core$List$concatMap);
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			la,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					lb,
					function (b) {
						return _elm_lang$core$Native_List.fromArray(
							[
								A2(f, a, b)
							]);
					});
			});
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			la,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					lb,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							lc,
							function (c) {
								return _elm_lang$core$Native_List.fromArray(
									[
										A3(f, a, b, c)
									]);
							});
					});
			});
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			la,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					lb,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							lc,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									ld,
									function (d) {
										return _elm_lang$core$Native_List.fromArray(
											[
												A4(f, a, b, c, d)
											]);
									});
							});
					});
			});
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (fl, l) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
	function (f, existing, remaining) {
		uniqueHelp:
		while (true) {
			var _p57 = remaining;
			if (_p57.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var _p59 = _p57._1;
				var _p58 = _p57._0;
				var computedFirst = f(_p58);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v36 = f,
						_v37 = existing,
						_v38 = _p59;
					f = _v36;
					existing = _v37;
					remaining = _v38;
					continue uniqueHelp;
				} else {
					return A2(
						_elm_lang$core$List_ops['::'],
						_p58,
						A3(
							_elm_community$list_extra$List_Extra$uniqueHelp,
							f,
							A2(_elm_lang$core$Set$insert, computedFirst, existing),
							_p59));
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
	});
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p60 = list;
			if (_p60.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				if (predicate(_p60._0)) {
					var _v40 = predicate,
						_v41 = _p60._1;
					predicate = _v40;
					list = _v41;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = F2(
	function (predicate, list) {
		var _p61 = list;
		if (_p61.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p62 = _p61._0;
			return predicate(_p62) ? A2(
				_elm_lang$core$List_ops['::'],
				_p62,
				A2(_elm_community$list_extra$List_Extra$takeWhile, predicate, _p61._1)) : _elm_lang$core$Native_List.fromArray(
				[]);
		}
	});
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p63) {
			return _elm_lang$core$Basics$not(
				p(_p63));
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs$) {
		var _p64 = xs$;
		if (_p64.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p66 = _p64._0;
			var _p65 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p66),
				_p64._1);
			var ys = _p65._0;
			var zs = _p65._1;
			return A2(
				_elm_lang$core$List_ops['::'],
				A2(_elm_lang$core$List_ops['::'], _p66, ys),
				A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs));
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p67) {
				var _p68 = _p67;
				var _p69 = _p68._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p69) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p68._0, _1: _p69};
			});
		var _p70 = ls;
		if (_p70.ctor === '::') {
			if (_p70._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p70._0);
			} else {
				var _p71 = _p70._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$fst(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p71,
								_1: f(_p71)
							},
							_p70._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p72) {
				var _p73 = _p72;
				var _p74 = _p73._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p74) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p73._0, _1: _p74};
			});
		var _p75 = ls;
		if (_p75.ctor === '::') {
			if (_p75._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p75._0);
			} else {
				var _p76 = _p75._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$fst(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p76,
								_1: f(_p76)
							},
							_p75._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p77 = xs;
	if (_p77.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p77._0, _1: _p77._1});
	}
};
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p78 = f(x);
		if (_p78.ctor === 'Just') {
			return A2(
				_elm_lang$core$List_ops['::'],
				x,
				A2(_elm_community$list_extra$List_Extra$iterate, f, _p78._0));
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[x]);
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p79) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p79));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (_p80) {
			return A2(
				F2(
					function (x, y) {
						return function (_p81) {
							return x(
								y(_p81));
						};
					}),
				_elm_lang$core$Maybe$Just,
				A2(
					maybe,
					_elm_lang$core$Native_List.fromArray(
						[]),
					F2(
						function (x, y) {
							return A2(_elm_lang$core$List_ops['::'], x, y);
						})(_p80)));
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

var _elm_lang$animation_frame$Native_AnimationFrame = function()
{

var hasStartTime =
	window.performance &&
	window.performance.timing &&
	window.performance.timing.navigationStart;

var navStart = hasStartTime
	? window.performance.timing.navigationStart
	: Date.now();

var rAF = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	var id = requestAnimationFrame(function(time) {
		var timeNow = time
			? (time > navStart ? time : time + navStart)
			: Date.now();

		callback(_elm_lang$core$Native_Scheduler.succeed(timeNow));
	});

	return function() {
		cancelAnimationFrame(id);
	};
});

return {
	rAF: rAF
};

}();

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_p1._0,
				_elm_lang$core$Platform$sendToApp(router)));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (f, task) {
		return A2(
			_elm_lang$core$Task$onError,
			task,
			function (err) {
				return _elm_lang$core$Task$fail(
					f(err));
			});
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			});
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					});
			});
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							});
					});
			});
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									});
							});
					});
			});
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											taskE,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											});
									});
							});
					});
			});
	});
var _elm_lang$core$Task$andMap = F2(
	function (taskFunc, taskValue) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskFunc,
			function (func) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskValue,
					function (value) {
						return _elm_lang$core$Task$succeed(
							func(value));
					});
			});
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p2 = tasks;
	if (_p2.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			_elm_lang$core$Native_List.fromArray(
				[]));
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			_p2._0,
			_elm_lang$core$Task$sequence(_p2._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p3) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$toMaybe = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Maybe$Just, task),
		function (_p4) {
			return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
		});
};
var _elm_lang$core$Task$fromMaybe = F2(
	function ($default, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Task$succeed(_p5._0);
		} else {
			return _elm_lang$core$Task$fail($default);
		}
	});
var _elm_lang$core$Task$toResult = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Result$Ok, task),
		function (msg) {
			return _elm_lang$core$Task$succeed(
				_elm_lang$core$Result$Err(msg));
		});
};
var _elm_lang$core$Task$fromResult = function (result) {
	var _p6 = result;
	if (_p6.ctor === 'Ok') {
		return _elm_lang$core$Task$succeed(_p6._0);
	} else {
		return _elm_lang$core$Task$fail(_p6._0);
	}
};
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p9, _p8, _p7) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$T = function (a) {
	return {ctor: 'T', _0: a};
};
var _elm_lang$core$Task$perform = F3(
	function (onFail, onSuccess, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$T(
				A2(
					_elm_lang$core$Task$onError,
					A2(_elm_lang$core$Task$map, onSuccess, task),
					function (x) {
						return _elm_lang$core$Task$succeed(
							onFail(x));
					})));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$T(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Native_Scheduler.spawn(
					A2(
						_elm_lang$core$Time$setInterval,
						_p1,
						A2(_elm_lang$core$Platform$sendToSelf, router, _p1))),
				function (id) {
					return A3(
						_elm_lang$core$Time$spawnHelp,
						router,
						_p0._1,
						A3(_elm_lang$core$Dict$insert, _p1, id, processes));
				});
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				_elm_lang$core$Native_List.fromArray(
					[_p6]),
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				A2(_elm_lang$core$List_ops['::'], _p6, _p4._0),
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Time$now,
				function (time) {
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Task$sequence(
							A2(
								_elm_lang$core$List$map,
								function (tagger) {
									return A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										tagger(time));
								},
								_p7._0)),
						function (_p8) {
							return _elm_lang$core$Task$succeed(state);
						});
				});
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Native_Scheduler.kill(id),
						function (_p14) {
							return _p13._2;
						})
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: A2(_elm_lang$core$List_ops['::'], interval, _p18._0),
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			killTask,
			function (_p20) {
				return A2(
					_elm_lang$core$Task$andThen,
					A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict),
					function (newProcesses) {
						return _elm_lang$core$Task$succeed(
							A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
					});
			});
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$animation_frame$AnimationFrame$rAF = _elm_lang$animation_frame$Native_AnimationFrame.rAF;
var _elm_lang$animation_frame$AnimationFrame$subscription = _elm_lang$core$Native_Platform.leaf('AnimationFrame');
var _elm_lang$animation_frame$AnimationFrame$State = F3(
	function (a, b, c) {
		return {subs: a, request: b, oldTime: c};
	});
var _elm_lang$animation_frame$AnimationFrame$init = _elm_lang$core$Task$succeed(
	A3(
		_elm_lang$animation_frame$AnimationFrame$State,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Maybe$Nothing,
		0));
var _elm_lang$animation_frame$AnimationFrame$onEffects = F3(
	function (router, subs, _p0) {
		var _p1 = _p0;
		var _p5 = _p1.request;
		var _p4 = _p1.oldTime;
		var _p2 = {ctor: '_Tuple2', _0: _p5, _1: subs};
		if (_p2._0.ctor === 'Nothing') {
			if (_p2._1.ctor === '[]') {
				return _elm_lang$core$Task$succeed(
					A3(
						_elm_lang$animation_frame$AnimationFrame$State,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Maybe$Nothing,
						_p4));
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Process$spawn(
						A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$animation_frame$AnimationFrame$rAF,
							_elm_lang$core$Platform$sendToSelf(router))),
					function (pid) {
						return A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$core$Time$now,
							function (time) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$animation_frame$AnimationFrame$State,
										subs,
										_elm_lang$core$Maybe$Just(pid),
										time));
							});
					});
			}
		} else {
			if (_p2._1.ctor === '[]') {
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Process$kill(_p2._0._0),
					function (_p3) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$animation_frame$AnimationFrame$State,
								_elm_lang$core$Native_List.fromArray(
									[]),
								_elm_lang$core$Maybe$Nothing,
								_p4));
					});
			} else {
				return _elm_lang$core$Task$succeed(
					A3(_elm_lang$animation_frame$AnimationFrame$State, subs, _p5, _p4));
			}
		}
	});
var _elm_lang$animation_frame$AnimationFrame$onSelfMsg = F3(
	function (router, newTime, _p6) {
		var _p7 = _p6;
		var _p10 = _p7.subs;
		var diff = newTime - _p7.oldTime;
		var send = function (sub) {
			var _p8 = sub;
			if (_p8.ctor === 'Time') {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p8._0(newTime));
			} else {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p8._0(diff));
			}
		};
		return A2(
			_elm_lang$core$Task$andThen,
			_elm_lang$core$Process$spawn(
				A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$animation_frame$AnimationFrame$rAF,
					_elm_lang$core$Platform$sendToSelf(router))),
			function (pid) {
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Task$sequence(
						A2(_elm_lang$core$List$map, send, _p10)),
					function (_p9) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$animation_frame$AnimationFrame$State,
								_p10,
								_elm_lang$core$Maybe$Just(pid),
								newTime));
					});
			});
	});
var _elm_lang$animation_frame$AnimationFrame$Diff = function (a) {
	return {ctor: 'Diff', _0: a};
};
var _elm_lang$animation_frame$AnimationFrame$diffs = function (tagger) {
	return _elm_lang$animation_frame$AnimationFrame$subscription(
		_elm_lang$animation_frame$AnimationFrame$Diff(tagger));
};
var _elm_lang$animation_frame$AnimationFrame$Time = function (a) {
	return {ctor: 'Time', _0: a};
};
var _elm_lang$animation_frame$AnimationFrame$times = function (tagger) {
	return _elm_lang$animation_frame$AnimationFrame$subscription(
		_elm_lang$animation_frame$AnimationFrame$Time(tagger));
};
var _elm_lang$animation_frame$AnimationFrame$subMap = F2(
	function (func, sub) {
		var _p11 = sub;
		if (_p11.ctor === 'Time') {
			return _elm_lang$animation_frame$AnimationFrame$Time(
				function (_p12) {
					return func(
						_p11._0(_p12));
				});
		} else {
			return _elm_lang$animation_frame$AnimationFrame$Diff(
				function (_p13) {
					return func(
						_p11._0(_p13));
				});
		}
	});
_elm_lang$core$Native_Platform.effectManagers['AnimationFrame'] = {pkg: 'elm-lang/animation-frame', init: _elm_lang$animation_frame$AnimationFrame$init, onEffects: _elm_lang$animation_frame$AnimationFrame$onEffects, onSelfMsg: _elm_lang$animation_frame$AnimationFrame$onSelfMsg, tag: 'sub', subMap: _elm_lang$animation_frame$AnimationFrame$subMap};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_elm_lang$core$Native_List.range(
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Color$fmod = F2(
	function (f, n) {
		var integer = _elm_lang$core$Basics$floor(f);
		return (_elm_lang$core$Basics$toFloat(
			A2(_elm_lang$core$Basics_ops['%'], integer, n)) + f) - _elm_lang$core$Basics$toFloat(integer);
	});
var _elm_lang$core$Color$rgbToHsl = F3(
	function (red, green, blue) {
		var b = _elm_lang$core$Basics$toFloat(blue) / 255;
		var g = _elm_lang$core$Basics$toFloat(green) / 255;
		var r = _elm_lang$core$Basics$toFloat(red) / 255;
		var cMax = A2(
			_elm_lang$core$Basics$max,
			A2(_elm_lang$core$Basics$max, r, g),
			b);
		var cMin = A2(
			_elm_lang$core$Basics$min,
			A2(_elm_lang$core$Basics$min, r, g),
			b);
		var c = cMax - cMin;
		var lightness = (cMax + cMin) / 2;
		var saturation = _elm_lang$core$Native_Utils.eq(lightness, 0) ? 0 : (c / (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)));
		var hue = _elm_lang$core$Basics$degrees(60) * (_elm_lang$core$Native_Utils.eq(cMax, r) ? A2(_elm_lang$core$Color$fmod, (g - b) / c, 6) : (_elm_lang$core$Native_Utils.eq(cMax, g) ? (((b - r) / c) + 2) : (((r - g) / c) + 4)));
		return {ctor: '_Tuple3', _0: hue, _1: saturation, _2: lightness};
	});
var _elm_lang$core$Color$hslToRgb = F3(
	function (hue, saturation, lightness) {
		var hue$ = hue / _elm_lang$core$Basics$degrees(60);
		var chroma = (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)) * saturation;
		var x = chroma * (1 - _elm_lang$core$Basics$abs(
			A2(_elm_lang$core$Color$fmod, hue$, 2) - 1));
		var _p0 = (_elm_lang$core$Native_Utils.cmp(hue$, 0) < 0) ? {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(hue$, 1) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: x, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(hue$, 2) < 0) ? {ctor: '_Tuple3', _0: x, _1: chroma, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(hue$, 3) < 0) ? {ctor: '_Tuple3', _0: 0, _1: chroma, _2: x} : ((_elm_lang$core$Native_Utils.cmp(hue$, 4) < 0) ? {ctor: '_Tuple3', _0: 0, _1: x, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(hue$, 5) < 0) ? {ctor: '_Tuple3', _0: x, _1: 0, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(hue$, 6) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: 0, _2: x} : {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0}))))));
		var r = _p0._0;
		var g = _p0._1;
		var b = _p0._2;
		var m = lightness - (chroma / 2);
		return {ctor: '_Tuple3', _0: r + m, _1: g + m, _2: b + m};
	});
var _elm_lang$core$Color$toRgb = function (color) {
	var _p1 = color;
	if (_p1.ctor === 'RGBA') {
		return {red: _p1._0, green: _p1._1, blue: _p1._2, alpha: _p1._3};
	} else {
		var _p2 = A3(_elm_lang$core$Color$hslToRgb, _p1._0, _p1._1, _p1._2);
		var r = _p2._0;
		var g = _p2._1;
		var b = _p2._2;
		return {
			red: _elm_lang$core$Basics$round(255 * r),
			green: _elm_lang$core$Basics$round(255 * g),
			blue: _elm_lang$core$Basics$round(255 * b),
			alpha: _p1._3
		};
	}
};
var _elm_lang$core$Color$toHsl = function (color) {
	var _p3 = color;
	if (_p3.ctor === 'HSLA') {
		return {hue: _p3._0, saturation: _p3._1, lightness: _p3._2, alpha: _p3._3};
	} else {
		var _p4 = A3(_elm_lang$core$Color$rgbToHsl, _p3._0, _p3._1, _p3._2);
		var h = _p4._0;
		var s = _p4._1;
		var l = _p4._2;
		return {hue: h, saturation: s, lightness: l, alpha: _p3._3};
	}
};
var _elm_lang$core$Color$HSLA = F4(
	function (a, b, c, d) {
		return {ctor: 'HSLA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		return A4(
			_elm_lang$core$Color$HSLA,
			hue - _elm_lang$core$Basics$turns(
				_elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$floor(hue / (2 * _elm_lang$core$Basics$pi)))),
			saturation,
			lightness,
			alpha);
	});
var _elm_lang$core$Color$hsl = F3(
	function (hue, saturation, lightness) {
		return A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, 1);
	});
var _elm_lang$core$Color$complement = function (color) {
	var _p5 = color;
	if (_p5.ctor === 'HSLA') {
		return A4(
			_elm_lang$core$Color$hsla,
			_p5._0 + _elm_lang$core$Basics$degrees(180),
			_p5._1,
			_p5._2,
			_p5._3);
	} else {
		var _p6 = A3(_elm_lang$core$Color$rgbToHsl, _p5._0, _p5._1, _p5._2);
		var h = _p6._0;
		var s = _p6._1;
		var l = _p6._2;
		return A4(
			_elm_lang$core$Color$hsla,
			h + _elm_lang$core$Basics$degrees(180),
			s,
			l,
			_p5._3);
	}
};
var _elm_lang$core$Color$grayscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$greyscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$RGBA = F4(
	function (a, b, c, d) {
		return {ctor: 'RGBA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$rgba = _elm_lang$core$Color$RGBA;
var _elm_lang$core$Color$rgb = F3(
	function (r, g, b) {
		return A4(_elm_lang$core$Color$RGBA, r, g, b, 1);
	});
var _elm_lang$core$Color$lightRed = A4(_elm_lang$core$Color$RGBA, 239, 41, 41, 1);
var _elm_lang$core$Color$red = A4(_elm_lang$core$Color$RGBA, 204, 0, 0, 1);
var _elm_lang$core$Color$darkRed = A4(_elm_lang$core$Color$RGBA, 164, 0, 0, 1);
var _elm_lang$core$Color$lightOrange = A4(_elm_lang$core$Color$RGBA, 252, 175, 62, 1);
var _elm_lang$core$Color$orange = A4(_elm_lang$core$Color$RGBA, 245, 121, 0, 1);
var _elm_lang$core$Color$darkOrange = A4(_elm_lang$core$Color$RGBA, 206, 92, 0, 1);
var _elm_lang$core$Color$lightYellow = A4(_elm_lang$core$Color$RGBA, 255, 233, 79, 1);
var _elm_lang$core$Color$yellow = A4(_elm_lang$core$Color$RGBA, 237, 212, 0, 1);
var _elm_lang$core$Color$darkYellow = A4(_elm_lang$core$Color$RGBA, 196, 160, 0, 1);
var _elm_lang$core$Color$lightGreen = A4(_elm_lang$core$Color$RGBA, 138, 226, 52, 1);
var _elm_lang$core$Color$green = A4(_elm_lang$core$Color$RGBA, 115, 210, 22, 1);
var _elm_lang$core$Color$darkGreen = A4(_elm_lang$core$Color$RGBA, 78, 154, 6, 1);
var _elm_lang$core$Color$lightBlue = A4(_elm_lang$core$Color$RGBA, 114, 159, 207, 1);
var _elm_lang$core$Color$blue = A4(_elm_lang$core$Color$RGBA, 52, 101, 164, 1);
var _elm_lang$core$Color$darkBlue = A4(_elm_lang$core$Color$RGBA, 32, 74, 135, 1);
var _elm_lang$core$Color$lightPurple = A4(_elm_lang$core$Color$RGBA, 173, 127, 168, 1);
var _elm_lang$core$Color$purple = A4(_elm_lang$core$Color$RGBA, 117, 80, 123, 1);
var _elm_lang$core$Color$darkPurple = A4(_elm_lang$core$Color$RGBA, 92, 53, 102, 1);
var _elm_lang$core$Color$lightBrown = A4(_elm_lang$core$Color$RGBA, 233, 185, 110, 1);
var _elm_lang$core$Color$brown = A4(_elm_lang$core$Color$RGBA, 193, 125, 17, 1);
var _elm_lang$core$Color$darkBrown = A4(_elm_lang$core$Color$RGBA, 143, 89, 2, 1);
var _elm_lang$core$Color$black = A4(_elm_lang$core$Color$RGBA, 0, 0, 0, 1);
var _elm_lang$core$Color$white = A4(_elm_lang$core$Color$RGBA, 255, 255, 255, 1);
var _elm_lang$core$Color$lightGrey = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$grey = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGrey = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightGray = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$gray = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGray = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightCharcoal = A4(_elm_lang$core$Color$RGBA, 136, 138, 133, 1);
var _elm_lang$core$Color$charcoal = A4(_elm_lang$core$Color$RGBA, 85, 87, 83, 1);
var _elm_lang$core$Color$darkCharcoal = A4(_elm_lang$core$Color$RGBA, 46, 52, 54, 1);
var _elm_lang$core$Color$Radial = F5(
	function (a, b, c, d, e) {
		return {ctor: 'Radial', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Color$radial = _elm_lang$core$Color$Radial;
var _elm_lang$core$Color$Linear = F3(
	function (a, b, c) {
		return {ctor: 'Linear', _0: a, _1: b, _2: c};
	});
var _elm_lang$core$Color$linear = _elm_lang$core$Color$Linear;

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function decodeObject(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function decodeTuple(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'tuple',
		func: f,
		decoders: decoders
	};
}

function andThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function customAndThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'customAndThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function decodeObject1(f, d1)
{
	return decodeObject(f, [d1]);
}

function decodeObject2(f, d1, d2)
{
	return decodeObject(f, [d1, d2]);
}

function decodeObject3(f, d1, d2, d3)
{
	return decodeObject(f, [d1, d2, d3]);
}

function decodeObject4(f, d1, d2, d3, d4)
{
	return decodeObject(f, [d1, d2, d3, d4]);
}

function decodeObject5(f, d1, d2, d3, d4, d5)
{
	return decodeObject(f, [d1, d2, d3, d4, d5]);
}

function decodeObject6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODING TUPLES

function decodeTuple1(f, d1)
{
	return decodeTuple(f, [d1]);
}

function decodeTuple2(f, d1, d2)
{
	return decodeTuple(f, [d1, d2]);
}

function decodeTuple3(f, d1, d2, d3)
{
	return decodeTuple(f, [d1, d2, d3]);
}

function decodeTuple4(f, d1, d2, d3, d4)
{
	return decodeTuple(f, [d1, d2, d3, d4]);
}

function decodeTuple5(f, d1, d2, d3, d4, d5)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5]);
}

function decodeTuple6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function badCustom(msg)
{
	return { tag: 'custom', msg: msg };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'custom':
				return 'A `customDecoder` failed'
					+ (context === '_' ? '' : ' at ' + context)
					+ ' with the message: ' + problem.msg;

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok')
				? result
				: badField(field, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'tuple':
			var decoders = decoder.decoders;
			var len = decoders.length;

			if ( !(value instanceof Array) || value.length !== len )
			{
				return badPrimitive('a Tuple with ' + len + ' entries', value);
			}

			var answer = decoder.func;
			for (var i = 0; i < len; i++)
			{
				var result = runHelp(decoders[i], value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'customAndThen':
			var result = runHelp(decoder.decoder, value);
			if (result.tag !== 'ok')
			{
				return result;
			}
			var realResult = decoder.callback(result.value);
			if (realResult.ctor === 'Err')
			{
				return badCustom(realResult._0);
			}
			return ok(realResult._0);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'map-many':
		case 'tuple':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
		case 'customAndThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),

	decodeObject1: F2(decodeObject1),
	decodeObject2: F3(decodeObject2),
	decodeObject3: F4(decodeObject3),
	decodeObject4: F5(decodeObject4),
	decodeObject5: F6(decodeObject5),
	decodeObject6: F7(decodeObject6),
	decodeObject7: F8(decodeObject7),
	decodeObject8: F9(decodeObject8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	decodeTuple1: F2(decodeTuple1),
	decodeTuple2: F3(decodeTuple2),
	decodeTuple3: F4(decodeTuple3),
	decodeTuple4: F5(decodeTuple4),
	decodeTuple5: F6(decodeTuple5),
	decodeTuple6: F7(decodeTuple6),
	decodeTuple7: F8(decodeTuple7),
	decodeTuple8: F9(decodeTuple8),

	andThen: F2(andThen),
	customAndThen: F2(customAndThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$tuple8 = _elm_lang$core$Native_Json.decodeTuple8;
var _elm_lang$core$Json_Decode$tuple7 = _elm_lang$core$Native_Json.decodeTuple7;
var _elm_lang$core$Json_Decode$tuple6 = _elm_lang$core$Native_Json.decodeTuple6;
var _elm_lang$core$Json_Decode$tuple5 = _elm_lang$core$Native_Json.decodeTuple5;
var _elm_lang$core$Json_Decode$tuple4 = _elm_lang$core$Native_Json.decodeTuple4;
var _elm_lang$core$Json_Decode$tuple3 = _elm_lang$core$Native_Json.decodeTuple3;
var _elm_lang$core$Json_Decode$tuple2 = _elm_lang$core$Native_Json.decodeTuple2;
var _elm_lang$core$Json_Decode$tuple1 = _elm_lang$core$Native_Json.decodeTuple1;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$customDecoder = _elm_lang$core$Native_Json.customAndThen;
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$object8 = _elm_lang$core$Native_Json.decodeObject8;
var _elm_lang$core$Json_Decode$object7 = _elm_lang$core$Native_Json.decodeObject7;
var _elm_lang$core$Json_Decode$object6 = _elm_lang$core$Native_Json.decodeObject6;
var _elm_lang$core$Json_Decode$object5 = _elm_lang$core$Native_Json.decodeObject5;
var _elm_lang$core$Json_Decode$object4 = _elm_lang$core$Native_Json.decodeObject4;
var _elm_lang$core$Json_Decode$object3 = _elm_lang$core$Native_Json.decodeObject3;
var _elm_lang$core$Json_Decode$object2 = _elm_lang$core$Native_Json.decodeObject2;
var _elm_lang$core$Json_Decode$object1 = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode_ops = _elm_lang$core$Json_Decode_ops || {};
_elm_lang$core$Json_Decode_ops[':='] = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Json_Decode_ops[':='], x, y);
				}),
			decoder,
			fields);
	});
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$dom$Native_Dom = function() {

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(on(document)),
	onWindow: F3(on(window)),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

//import Native.Json //

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';



////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (!a.options === b.options)
	{
		if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}



////////////  RENDERER  ////////////


function renderer(parent, tagger, initialVirtualNode)
{
	var eventNode = { tagger: tagger, parent: undefined };

	var domNode = render(initialVirtualNode, eventNode);
	parent.appendChild(domNode);

	var state = 'NO_REQUEST';
	var currentVirtualNode = initialVirtualNode;
	var nextVirtualNode = initialVirtualNode;

	function registerVirtualNode(vNode)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextVirtualNode = vNode;
	}

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/core/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var patches = diff(currentVirtualNode, nextVirtualNode);
				domNode = applyPatches(domNode, currentVirtualNode, patches, eventNode);
				currentVirtualNode = nextVirtualNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return { update: registerVirtualNode };
}


var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(cb) { setTimeout(cb, 1000 / 60); };



////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = {
				tagger: tagger,
				parent: eventNode
			};

			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return document.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			domNode.elm_event_node_ref.tagger = patch.data;
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = document.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}



////////////  PROGRAMS  ////////////


function programWithFlags(details)
{
	return {
		init: details.init,
		update: details.update,
		subscriptions: details.subscriptions,
		view: details.view,
		renderer: renderer
	};
}


return {
	node: node,
	text: text,

	custom: custom,

	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	programWithFlags: programWithFlags
};

}();
var _elm_lang$virtual_dom$VirtualDom$programWithFlags = _elm_lang$virtual_dom$Native_VirtualDom.programWithFlags;
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main$ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$svg = _elm_lang$html$Html$node('svg');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_App$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html_App$program = function (app) {
	return _elm_lang$html$Html_App$programWithFlags(
		_elm_lang$core$Native_Utils.update(
			app,
			{
				init: function (_p0) {
					return app.init;
				}
			}));
};
var _elm_lang$html$Html_App$beginnerProgram = function (_p1) {
	var _p2 = _p1;
	return _elm_lang$html$Html_App$programWithFlags(
		{
			init: function (_p3) {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p2.model,
					_elm_lang$core$Native_List.fromArray(
						[]));
			},
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p2.update, msg, model),
						_elm_lang$core$Native_List.fromArray(
							[]));
				}),
			view: _p2.view,
			subscriptions: function (_p4) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html_App$map = _elm_lang$virtual_dom$VirtualDom$map;

var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'charset', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type$ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$autosave = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'autosave', value);
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'form', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'media', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'rel', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$fst,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode_ops[':='], 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'checked']),
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'value']),
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$keyboard$Keyboard$onSelfMsg = F3(
	function (router, _p0, state) {
		var _p1 = _p0;
		var _p2 = A2(_elm_lang$core$Dict$get, _p1.category, state);
		if (_p2.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (tagger) {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					tagger(_p1.keyCode));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p2._0.taggers)),
				function (_p3) {
					return _elm_lang$core$Task$succeed(state);
				});
		}
	});
var _elm_lang$keyboard$Keyboard_ops = _elm_lang$keyboard$Keyboard_ops || {};
_elm_lang$keyboard$Keyboard_ops['&>'] = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Task$andThen,
			t1,
			function (_p4) {
				return t2;
			});
	});
var _elm_lang$keyboard$Keyboard$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
var _elm_lang$keyboard$Keyboard$categorizeHelpHelp = F2(
	function (value, maybeValues) {
		var _p5 = maybeValues;
		if (_p5.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				_elm_lang$core$Native_List.fromArray(
					[value]));
		} else {
			return _elm_lang$core$Maybe$Just(
				A2(_elm_lang$core$List_ops['::'], value, _p5._0));
		}
	});
var _elm_lang$keyboard$Keyboard$categorizeHelp = F2(
	function (subs, subDict) {
		categorizeHelp:
		while (true) {
			var _p6 = subs;
			if (_p6.ctor === '[]') {
				return subDict;
			} else {
				var _v4 = _p6._1,
					_v5 = A3(
					_elm_lang$core$Dict$update,
					_p6._0._0,
					_elm_lang$keyboard$Keyboard$categorizeHelpHelp(_p6._0._1),
					subDict);
				subs = _v4;
				subDict = _v5;
				continue categorizeHelp;
			}
		}
	});
var _elm_lang$keyboard$Keyboard$categorize = function (subs) {
	return A2(_elm_lang$keyboard$Keyboard$categorizeHelp, subs, _elm_lang$core$Dict$empty);
};
var _elm_lang$keyboard$Keyboard$keyCode = A2(_elm_lang$core$Json_Decode_ops[':='], 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$keyboard$Keyboard$subscription = _elm_lang$core$Native_Platform.leaf('Keyboard');
var _elm_lang$keyboard$Keyboard$Watcher = F2(
	function (a, b) {
		return {taggers: a, pid: b};
	});
var _elm_lang$keyboard$Keyboard$Msg = F2(
	function (a, b) {
		return {category: a, keyCode: b};
	});
var _elm_lang$keyboard$Keyboard$onEffects = F3(
	function (router, newSubs, oldState) {
		var rightStep = F3(
			function (category, taggers, task) {
				return A2(
					_elm_lang$core$Task$andThen,
					task,
					function (state) {
						return A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$core$Process$spawn(
								A3(
									_elm_lang$dom$Dom_LowLevel$onDocument,
									category,
									_elm_lang$keyboard$Keyboard$keyCode,
									function (_p7) {
										return A2(
											_elm_lang$core$Platform$sendToSelf,
											router,
											A2(_elm_lang$keyboard$Keyboard$Msg, category, _p7));
									})),
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$core$Dict$insert,
										category,
										A2(_elm_lang$keyboard$Keyboard$Watcher, taggers, pid),
										state));
							});
					});
			});
		var bothStep = F4(
			function (category, _p8, taggers, task) {
				var _p9 = _p8;
				return A2(
					_elm_lang$core$Task$andThen,
					task,
					function (state) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$core$Dict$insert,
								category,
								A2(_elm_lang$keyboard$Keyboard$Watcher, taggers, _p9.pid),
								state));
					});
			});
		var leftStep = F3(
			function (category, _p10, task) {
				var _p11 = _p10;
				return A2(
					_elm_lang$keyboard$Keyboard_ops['&>'],
					_elm_lang$core$Process$kill(_p11.pid),
					task);
			});
		return A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			oldState,
			_elm_lang$keyboard$Keyboard$categorize(newSubs),
			_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
	});
var _elm_lang$keyboard$Keyboard$MySub = F2(
	function (a, b) {
		return {ctor: 'MySub', _0: a, _1: b};
	});
var _elm_lang$keyboard$Keyboard$presses = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keypress', tagger));
};
var _elm_lang$keyboard$Keyboard$downs = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keydown', tagger));
};
var _elm_lang$keyboard$Keyboard$ups = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keyup', tagger));
};
var _elm_lang$keyboard$Keyboard$subMap = F2(
	function (func, _p12) {
		var _p13 = _p12;
		return A2(
			_elm_lang$keyboard$Keyboard$MySub,
			_p13._0,
			function (_p14) {
				return func(
					_p13._1(_p14));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Keyboard'] = {pkg: 'elm-lang/keyboard', init: _elm_lang$keyboard$Keyboard$init, onEffects: _elm_lang$keyboard$Keyboard$onEffects, onSelfMsg: _elm_lang$keyboard$Keyboard$onSelfMsg, tag: 'sub', subMap: _elm_lang$keyboard$Keyboard$subMap};

var _elm_lang$mouse$Mouse$onSelfMsg = F3(
	function (router, _p0, state) {
		var _p1 = _p0;
		var _p2 = A2(_elm_lang$core$Dict$get, _p1.category, state);
		if (_p2.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (tagger) {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					tagger(_p1.position));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p2._0.taggers)),
				function (_p3) {
					return _elm_lang$core$Task$succeed(state);
				});
		}
	});
var _elm_lang$mouse$Mouse_ops = _elm_lang$mouse$Mouse_ops || {};
_elm_lang$mouse$Mouse_ops['&>'] = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Task$andThen,
			t1,
			function (_p4) {
				return t2;
			});
	});
var _elm_lang$mouse$Mouse$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
var _elm_lang$mouse$Mouse$categorizeHelpHelp = F2(
	function (value, maybeValues) {
		var _p5 = maybeValues;
		if (_p5.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				_elm_lang$core$Native_List.fromArray(
					[value]));
		} else {
			return _elm_lang$core$Maybe$Just(
				A2(_elm_lang$core$List_ops['::'], value, _p5._0));
		}
	});
var _elm_lang$mouse$Mouse$categorizeHelp = F2(
	function (subs, subDict) {
		categorizeHelp:
		while (true) {
			var _p6 = subs;
			if (_p6.ctor === '[]') {
				return subDict;
			} else {
				var _v4 = _p6._1,
					_v5 = A3(
					_elm_lang$core$Dict$update,
					_p6._0._0,
					_elm_lang$mouse$Mouse$categorizeHelpHelp(_p6._0._1),
					subDict);
				subs = _v4;
				subDict = _v5;
				continue categorizeHelp;
			}
		}
	});
var _elm_lang$mouse$Mouse$categorize = function (subs) {
	return A2(_elm_lang$mouse$Mouse$categorizeHelp, subs, _elm_lang$core$Dict$empty);
};
var _elm_lang$mouse$Mouse$subscription = _elm_lang$core$Native_Platform.leaf('Mouse');
var _elm_lang$mouse$Mouse$Position = F2(
	function (a, b) {
		return {x: a, y: b};
	});
var _elm_lang$mouse$Mouse$position = A3(
	_elm_lang$core$Json_Decode$object2,
	_elm_lang$mouse$Mouse$Position,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'pageX', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'pageY', _elm_lang$core$Json_Decode$int));
var _elm_lang$mouse$Mouse$Watcher = F2(
	function (a, b) {
		return {taggers: a, pid: b};
	});
var _elm_lang$mouse$Mouse$Msg = F2(
	function (a, b) {
		return {category: a, position: b};
	});
var _elm_lang$mouse$Mouse$onEffects = F3(
	function (router, newSubs, oldState) {
		var rightStep = F3(
			function (category, taggers, task) {
				return A2(
					_elm_lang$core$Task$andThen,
					task,
					function (state) {
						return A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$core$Process$spawn(
								A3(
									_elm_lang$dom$Dom_LowLevel$onDocument,
									category,
									_elm_lang$mouse$Mouse$position,
									function (_p7) {
										return A2(
											_elm_lang$core$Platform$sendToSelf,
											router,
											A2(_elm_lang$mouse$Mouse$Msg, category, _p7));
									})),
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$core$Dict$insert,
										category,
										A2(_elm_lang$mouse$Mouse$Watcher, taggers, pid),
										state));
							});
					});
			});
		var bothStep = F4(
			function (category, _p8, taggers, task) {
				var _p9 = _p8;
				return A2(
					_elm_lang$core$Task$andThen,
					task,
					function (state) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$core$Dict$insert,
								category,
								A2(_elm_lang$mouse$Mouse$Watcher, taggers, _p9.pid),
								state));
					});
			});
		var leftStep = F3(
			function (category, _p10, task) {
				var _p11 = _p10;
				return A2(
					_elm_lang$mouse$Mouse_ops['&>'],
					_elm_lang$core$Process$kill(_p11.pid),
					task);
			});
		return A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			oldState,
			_elm_lang$mouse$Mouse$categorize(newSubs),
			_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
	});
var _elm_lang$mouse$Mouse$MySub = F2(
	function (a, b) {
		return {ctor: 'MySub', _0: a, _1: b};
	});
var _elm_lang$mouse$Mouse$clicks = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'click', tagger));
};
var _elm_lang$mouse$Mouse$moves = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mousemove', tagger));
};
var _elm_lang$mouse$Mouse$downs = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mousedown', tagger));
};
var _elm_lang$mouse$Mouse$ups = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mouseup', tagger));
};
var _elm_lang$mouse$Mouse$subMap = F2(
	function (func, _p12) {
		var _p13 = _p12;
		return A2(
			_elm_lang$mouse$Mouse$MySub,
			_p13._0,
			function (_p14) {
				return func(
					_p13._1(_p14));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Mouse'] = {pkg: 'elm-lang/mouse', init: _elm_lang$mouse$Mouse$init, onEffects: _elm_lang$mouse$Mouse$onEffects, onSelfMsg: _elm_lang$mouse$Mouse$onSelfMsg, tag: 'sub', subMap: _elm_lang$mouse$Mouse$subMap};

var _elm_lang$svg$Svg$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$svg$Svg$svgNamespace = A2(
	_elm_lang$virtual_dom$VirtualDom$property,
	'namespace',
	_elm_lang$core$Json_Encode$string('http://www.w3.org/2000/svg'));
var _elm_lang$svg$Svg$node = F3(
	function (name, attributes, children) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			name,
			A2(_elm_lang$core$List_ops['::'], _elm_lang$svg$Svg$svgNamespace, attributes),
			children);
	});
var _elm_lang$svg$Svg$svg = _elm_lang$svg$Svg$node('svg');
var _elm_lang$svg$Svg$foreignObject = _elm_lang$svg$Svg$node('foreignObject');
var _elm_lang$svg$Svg$animate = _elm_lang$svg$Svg$node('animate');
var _elm_lang$svg$Svg$animateColor = _elm_lang$svg$Svg$node('animateColor');
var _elm_lang$svg$Svg$animateMotion = _elm_lang$svg$Svg$node('animateMotion');
var _elm_lang$svg$Svg$animateTransform = _elm_lang$svg$Svg$node('animateTransform');
var _elm_lang$svg$Svg$mpath = _elm_lang$svg$Svg$node('mpath');
var _elm_lang$svg$Svg$set = _elm_lang$svg$Svg$node('set');
var _elm_lang$svg$Svg$a = _elm_lang$svg$Svg$node('a');
var _elm_lang$svg$Svg$defs = _elm_lang$svg$Svg$node('defs');
var _elm_lang$svg$Svg$g = _elm_lang$svg$Svg$node('g');
var _elm_lang$svg$Svg$marker = _elm_lang$svg$Svg$node('marker');
var _elm_lang$svg$Svg$mask = _elm_lang$svg$Svg$node('mask');
var _elm_lang$svg$Svg$missingGlyph = _elm_lang$svg$Svg$node('missingGlyph');
var _elm_lang$svg$Svg$pattern = _elm_lang$svg$Svg$node('pattern');
var _elm_lang$svg$Svg$switch = _elm_lang$svg$Svg$node('switch');
var _elm_lang$svg$Svg$symbol = _elm_lang$svg$Svg$node('symbol');
var _elm_lang$svg$Svg$desc = _elm_lang$svg$Svg$node('desc');
var _elm_lang$svg$Svg$metadata = _elm_lang$svg$Svg$node('metadata');
var _elm_lang$svg$Svg$title = _elm_lang$svg$Svg$node('title');
var _elm_lang$svg$Svg$feBlend = _elm_lang$svg$Svg$node('feBlend');
var _elm_lang$svg$Svg$feColorMatrix = _elm_lang$svg$Svg$node('feColorMatrix');
var _elm_lang$svg$Svg$feComponentTransfer = _elm_lang$svg$Svg$node('feComponentTransfer');
var _elm_lang$svg$Svg$feComposite = _elm_lang$svg$Svg$node('feComposite');
var _elm_lang$svg$Svg$feConvolveMatrix = _elm_lang$svg$Svg$node('feConvolveMatrix');
var _elm_lang$svg$Svg$feDiffuseLighting = _elm_lang$svg$Svg$node('feDiffuseLighting');
var _elm_lang$svg$Svg$feDisplacementMap = _elm_lang$svg$Svg$node('feDisplacementMap');
var _elm_lang$svg$Svg$feFlood = _elm_lang$svg$Svg$node('feFlood');
var _elm_lang$svg$Svg$feFuncA = _elm_lang$svg$Svg$node('feFuncA');
var _elm_lang$svg$Svg$feFuncB = _elm_lang$svg$Svg$node('feFuncB');
var _elm_lang$svg$Svg$feFuncG = _elm_lang$svg$Svg$node('feFuncG');
var _elm_lang$svg$Svg$feFuncR = _elm_lang$svg$Svg$node('feFuncR');
var _elm_lang$svg$Svg$feGaussianBlur = _elm_lang$svg$Svg$node('feGaussianBlur');
var _elm_lang$svg$Svg$feImage = _elm_lang$svg$Svg$node('feImage');
var _elm_lang$svg$Svg$feMerge = _elm_lang$svg$Svg$node('feMerge');
var _elm_lang$svg$Svg$feMergeNode = _elm_lang$svg$Svg$node('feMergeNode');
var _elm_lang$svg$Svg$feMorphology = _elm_lang$svg$Svg$node('feMorphology');
var _elm_lang$svg$Svg$feOffset = _elm_lang$svg$Svg$node('feOffset');
var _elm_lang$svg$Svg$feSpecularLighting = _elm_lang$svg$Svg$node('feSpecularLighting');
var _elm_lang$svg$Svg$feTile = _elm_lang$svg$Svg$node('feTile');
var _elm_lang$svg$Svg$feTurbulence = _elm_lang$svg$Svg$node('feTurbulence');
var _elm_lang$svg$Svg$font = _elm_lang$svg$Svg$node('font');
var _elm_lang$svg$Svg$fontFace = _elm_lang$svg$Svg$node('fontFace');
var _elm_lang$svg$Svg$fontFaceFormat = _elm_lang$svg$Svg$node('fontFaceFormat');
var _elm_lang$svg$Svg$fontFaceName = _elm_lang$svg$Svg$node('fontFaceName');
var _elm_lang$svg$Svg$fontFaceSrc = _elm_lang$svg$Svg$node('fontFaceSrc');
var _elm_lang$svg$Svg$fontFaceUri = _elm_lang$svg$Svg$node('fontFaceUri');
var _elm_lang$svg$Svg$hkern = _elm_lang$svg$Svg$node('hkern');
var _elm_lang$svg$Svg$vkern = _elm_lang$svg$Svg$node('vkern');
var _elm_lang$svg$Svg$linearGradient = _elm_lang$svg$Svg$node('linearGradient');
var _elm_lang$svg$Svg$radialGradient = _elm_lang$svg$Svg$node('radialGradient');
var _elm_lang$svg$Svg$stop = _elm_lang$svg$Svg$node('stop');
var _elm_lang$svg$Svg$circle = _elm_lang$svg$Svg$node('circle');
var _elm_lang$svg$Svg$ellipse = _elm_lang$svg$Svg$node('ellipse');
var _elm_lang$svg$Svg$image = _elm_lang$svg$Svg$node('image');
var _elm_lang$svg$Svg$line = _elm_lang$svg$Svg$node('line');
var _elm_lang$svg$Svg$path = _elm_lang$svg$Svg$node('path');
var _elm_lang$svg$Svg$polygon = _elm_lang$svg$Svg$node('polygon');
var _elm_lang$svg$Svg$polyline = _elm_lang$svg$Svg$node('polyline');
var _elm_lang$svg$Svg$rect = _elm_lang$svg$Svg$node('rect');
var _elm_lang$svg$Svg$use = _elm_lang$svg$Svg$node('use');
var _elm_lang$svg$Svg$feDistantLight = _elm_lang$svg$Svg$node('feDistantLight');
var _elm_lang$svg$Svg$fePointLight = _elm_lang$svg$Svg$node('fePointLight');
var _elm_lang$svg$Svg$feSpotLight = _elm_lang$svg$Svg$node('feSpotLight');
var _elm_lang$svg$Svg$altGlyph = _elm_lang$svg$Svg$node('altGlyph');
var _elm_lang$svg$Svg$altGlyphDef = _elm_lang$svg$Svg$node('altGlyphDef');
var _elm_lang$svg$Svg$altGlyphItem = _elm_lang$svg$Svg$node('altGlyphItem');
var _elm_lang$svg$Svg$glyph = _elm_lang$svg$Svg$node('glyph');
var _elm_lang$svg$Svg$glyphRef = _elm_lang$svg$Svg$node('glyphRef');
var _elm_lang$svg$Svg$textPath = _elm_lang$svg$Svg$node('textPath');
var _elm_lang$svg$Svg$text$ = _elm_lang$svg$Svg$node('text');
var _elm_lang$svg$Svg$tref = _elm_lang$svg$Svg$node('tref');
var _elm_lang$svg$Svg$tspan = _elm_lang$svg$Svg$node('tspan');
var _elm_lang$svg$Svg$clipPath = _elm_lang$svg$Svg$node('clipPath');
var _elm_lang$svg$Svg$colorProfile = _elm_lang$svg$Svg$node('colorProfile');
var _elm_lang$svg$Svg$cursor = _elm_lang$svg$Svg$node('cursor');
var _elm_lang$svg$Svg$filter = _elm_lang$svg$Svg$node('filter');
var _elm_lang$svg$Svg$script = _elm_lang$svg$Svg$node('script');
var _elm_lang$svg$Svg$style = _elm_lang$svg$Svg$node('style');
var _elm_lang$svg$Svg$view = _elm_lang$svg$Svg$node('view');

var _elm_lang$svg$Svg_Attributes$writingMode = _elm_lang$virtual_dom$VirtualDom$attribute('writing-mode');
var _elm_lang$svg$Svg_Attributes$wordSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('word-spacing');
var _elm_lang$svg$Svg_Attributes$visibility = _elm_lang$virtual_dom$VirtualDom$attribute('visibility');
var _elm_lang$svg$Svg_Attributes$unicodeBidi = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-bidi');
var _elm_lang$svg$Svg_Attributes$textRendering = _elm_lang$virtual_dom$VirtualDom$attribute('text-rendering');
var _elm_lang$svg$Svg_Attributes$textDecoration = _elm_lang$virtual_dom$VirtualDom$attribute('text-decoration');
var _elm_lang$svg$Svg_Attributes$textAnchor = _elm_lang$virtual_dom$VirtualDom$attribute('text-anchor');
var _elm_lang$svg$Svg_Attributes$stroke = _elm_lang$virtual_dom$VirtualDom$attribute('stroke');
var _elm_lang$svg$Svg_Attributes$strokeWidth = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-width');
var _elm_lang$svg$Svg_Attributes$strokeOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-opacity');
var _elm_lang$svg$Svg_Attributes$strokeMiterlimit = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-miterlimit');
var _elm_lang$svg$Svg_Attributes$strokeLinejoin = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linejoin');
var _elm_lang$svg$Svg_Attributes$strokeLinecap = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linecap');
var _elm_lang$svg$Svg_Attributes$strokeDashoffset = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dashoffset');
var _elm_lang$svg$Svg_Attributes$strokeDasharray = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dasharray');
var _elm_lang$svg$Svg_Attributes$stopOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stop-opacity');
var _elm_lang$svg$Svg_Attributes$stopColor = _elm_lang$virtual_dom$VirtualDom$attribute('stop-color');
var _elm_lang$svg$Svg_Attributes$shapeRendering = _elm_lang$virtual_dom$VirtualDom$attribute('shape-rendering');
var _elm_lang$svg$Svg_Attributes$pointerEvents = _elm_lang$virtual_dom$VirtualDom$attribute('pointer-events');
var _elm_lang$svg$Svg_Attributes$overflow = _elm_lang$virtual_dom$VirtualDom$attribute('overflow');
var _elm_lang$svg$Svg_Attributes$opacity = _elm_lang$virtual_dom$VirtualDom$attribute('opacity');
var _elm_lang$svg$Svg_Attributes$mask = _elm_lang$virtual_dom$VirtualDom$attribute('mask');
var _elm_lang$svg$Svg_Attributes$markerStart = _elm_lang$virtual_dom$VirtualDom$attribute('marker-start');
var _elm_lang$svg$Svg_Attributes$markerMid = _elm_lang$virtual_dom$VirtualDom$attribute('marker-mid');
var _elm_lang$svg$Svg_Attributes$markerEnd = _elm_lang$virtual_dom$VirtualDom$attribute('marker-end');
var _elm_lang$svg$Svg_Attributes$lightingColor = _elm_lang$virtual_dom$VirtualDom$attribute('lighting-color');
var _elm_lang$svg$Svg_Attributes$letterSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('letter-spacing');
var _elm_lang$svg$Svg_Attributes$kerning = _elm_lang$virtual_dom$VirtualDom$attribute('kerning');
var _elm_lang$svg$Svg_Attributes$imageRendering = _elm_lang$virtual_dom$VirtualDom$attribute('image-rendering');
var _elm_lang$svg$Svg_Attributes$glyphOrientationVertical = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-vertical');
var _elm_lang$svg$Svg_Attributes$glyphOrientationHorizontal = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-horizontal');
var _elm_lang$svg$Svg_Attributes$fontWeight = _elm_lang$virtual_dom$VirtualDom$attribute('font-weight');
var _elm_lang$svg$Svg_Attributes$fontVariant = _elm_lang$virtual_dom$VirtualDom$attribute('font-variant');
var _elm_lang$svg$Svg_Attributes$fontStyle = _elm_lang$virtual_dom$VirtualDom$attribute('font-style');
var _elm_lang$svg$Svg_Attributes$fontStretch = _elm_lang$virtual_dom$VirtualDom$attribute('font-stretch');
var _elm_lang$svg$Svg_Attributes$fontSize = _elm_lang$virtual_dom$VirtualDom$attribute('font-size');
var _elm_lang$svg$Svg_Attributes$fontSizeAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('font-size-adjust');
var _elm_lang$svg$Svg_Attributes$fontFamily = _elm_lang$virtual_dom$VirtualDom$attribute('font-family');
var _elm_lang$svg$Svg_Attributes$floodOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('flood-opacity');
var _elm_lang$svg$Svg_Attributes$floodColor = _elm_lang$virtual_dom$VirtualDom$attribute('flood-color');
var _elm_lang$svg$Svg_Attributes$filter = _elm_lang$virtual_dom$VirtualDom$attribute('filter');
var _elm_lang$svg$Svg_Attributes$fill = _elm_lang$virtual_dom$VirtualDom$attribute('fill');
var _elm_lang$svg$Svg_Attributes$fillRule = _elm_lang$virtual_dom$VirtualDom$attribute('fill-rule');
var _elm_lang$svg$Svg_Attributes$fillOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('fill-opacity');
var _elm_lang$svg$Svg_Attributes$enableBackground = _elm_lang$virtual_dom$VirtualDom$attribute('enable-background');
var _elm_lang$svg$Svg_Attributes$dominantBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('dominant-baseline');
var _elm_lang$svg$Svg_Attributes$display = _elm_lang$virtual_dom$VirtualDom$attribute('display');
var _elm_lang$svg$Svg_Attributes$direction = _elm_lang$virtual_dom$VirtualDom$attribute('direction');
var _elm_lang$svg$Svg_Attributes$cursor = _elm_lang$virtual_dom$VirtualDom$attribute('cursor');
var _elm_lang$svg$Svg_Attributes$color = _elm_lang$virtual_dom$VirtualDom$attribute('color');
var _elm_lang$svg$Svg_Attributes$colorRendering = _elm_lang$virtual_dom$VirtualDom$attribute('color-rendering');
var _elm_lang$svg$Svg_Attributes$colorProfile = _elm_lang$virtual_dom$VirtualDom$attribute('color-profile');
var _elm_lang$svg$Svg_Attributes$colorInterpolation = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation');
var _elm_lang$svg$Svg_Attributes$colorInterpolationFilters = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation-filters');
var _elm_lang$svg$Svg_Attributes$clip = _elm_lang$virtual_dom$VirtualDom$attribute('clip');
var _elm_lang$svg$Svg_Attributes$clipRule = _elm_lang$virtual_dom$VirtualDom$attribute('clip-rule');
var _elm_lang$svg$Svg_Attributes$clipPath = _elm_lang$virtual_dom$VirtualDom$attribute('clip-path');
var _elm_lang$svg$Svg_Attributes$baselineShift = _elm_lang$virtual_dom$VirtualDom$attribute('baseline-shift');
var _elm_lang$svg$Svg_Attributes$alignmentBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('alignment-baseline');
var _elm_lang$svg$Svg_Attributes$zoomAndPan = _elm_lang$virtual_dom$VirtualDom$attribute('zoomAndPan');
var _elm_lang$svg$Svg_Attributes$z = _elm_lang$virtual_dom$VirtualDom$attribute('z');
var _elm_lang$svg$Svg_Attributes$yChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('yChannelSelector');
var _elm_lang$svg$Svg_Attributes$y2 = _elm_lang$virtual_dom$VirtualDom$attribute('y2');
var _elm_lang$svg$Svg_Attributes$y1 = _elm_lang$virtual_dom$VirtualDom$attribute('y1');
var _elm_lang$svg$Svg_Attributes$y = _elm_lang$virtual_dom$VirtualDom$attribute('y');
var _elm_lang$svg$Svg_Attributes$xmlSpace = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:space');
var _elm_lang$svg$Svg_Attributes$xmlLang = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:lang');
var _elm_lang$svg$Svg_Attributes$xmlBase = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:base');
var _elm_lang$svg$Svg_Attributes$xlinkType = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:type');
var _elm_lang$svg$Svg_Attributes$xlinkTitle = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:title');
var _elm_lang$svg$Svg_Attributes$xlinkShow = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:show');
var _elm_lang$svg$Svg_Attributes$xlinkRole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:role');
var _elm_lang$svg$Svg_Attributes$xlinkHref = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:href');
var _elm_lang$svg$Svg_Attributes$xlinkArcrole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:arcrole');
var _elm_lang$svg$Svg_Attributes$xlinkActuate = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:actuate');
var _elm_lang$svg$Svg_Attributes$xChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('xChannelSelector');
var _elm_lang$svg$Svg_Attributes$x2 = _elm_lang$virtual_dom$VirtualDom$attribute('x2');
var _elm_lang$svg$Svg_Attributes$x1 = _elm_lang$virtual_dom$VirtualDom$attribute('x1');
var _elm_lang$svg$Svg_Attributes$xHeight = _elm_lang$virtual_dom$VirtualDom$attribute('x-height');
var _elm_lang$svg$Svg_Attributes$x = _elm_lang$virtual_dom$VirtualDom$attribute('x');
var _elm_lang$svg$Svg_Attributes$widths = _elm_lang$virtual_dom$VirtualDom$attribute('widths');
var _elm_lang$svg$Svg_Attributes$width = _elm_lang$virtual_dom$VirtualDom$attribute('width');
var _elm_lang$svg$Svg_Attributes$viewTarget = _elm_lang$virtual_dom$VirtualDom$attribute('viewTarget');
var _elm_lang$svg$Svg_Attributes$viewBox = _elm_lang$virtual_dom$VirtualDom$attribute('viewBox');
var _elm_lang$svg$Svg_Attributes$vertOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-y');
var _elm_lang$svg$Svg_Attributes$vertOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-x');
var _elm_lang$svg$Svg_Attributes$vertAdvY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-adv-y');
var _elm_lang$svg$Svg_Attributes$version = _elm_lang$virtual_dom$VirtualDom$attribute('version');
var _elm_lang$svg$Svg_Attributes$values = _elm_lang$virtual_dom$VirtualDom$attribute('values');
var _elm_lang$svg$Svg_Attributes$vMathematical = _elm_lang$virtual_dom$VirtualDom$attribute('v-mathematical');
var _elm_lang$svg$Svg_Attributes$vIdeographic = _elm_lang$virtual_dom$VirtualDom$attribute('v-ideographic');
var _elm_lang$svg$Svg_Attributes$vHanging = _elm_lang$virtual_dom$VirtualDom$attribute('v-hanging');
var _elm_lang$svg$Svg_Attributes$vAlphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('v-alphabetic');
var _elm_lang$svg$Svg_Attributes$unitsPerEm = _elm_lang$virtual_dom$VirtualDom$attribute('units-per-em');
var _elm_lang$svg$Svg_Attributes$unicodeRange = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-range');
var _elm_lang$svg$Svg_Attributes$unicode = _elm_lang$virtual_dom$VirtualDom$attribute('unicode');
var _elm_lang$svg$Svg_Attributes$underlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('underline-thickness');
var _elm_lang$svg$Svg_Attributes$underlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('underline-position');
var _elm_lang$svg$Svg_Attributes$u2 = _elm_lang$virtual_dom$VirtualDom$attribute('u2');
var _elm_lang$svg$Svg_Attributes$u1 = _elm_lang$virtual_dom$VirtualDom$attribute('u1');
var _elm_lang$svg$Svg_Attributes$type$ = _elm_lang$virtual_dom$VirtualDom$attribute('type');
var _elm_lang$svg$Svg_Attributes$transform = _elm_lang$virtual_dom$VirtualDom$attribute('transform');
var _elm_lang$svg$Svg_Attributes$to = _elm_lang$virtual_dom$VirtualDom$attribute('to');
var _elm_lang$svg$Svg_Attributes$title = _elm_lang$virtual_dom$VirtualDom$attribute('title');
var _elm_lang$svg$Svg_Attributes$textLength = _elm_lang$virtual_dom$VirtualDom$attribute('textLength');
var _elm_lang$svg$Svg_Attributes$targetY = _elm_lang$virtual_dom$VirtualDom$attribute('targetY');
var _elm_lang$svg$Svg_Attributes$targetX = _elm_lang$virtual_dom$VirtualDom$attribute('targetX');
var _elm_lang$svg$Svg_Attributes$target = _elm_lang$virtual_dom$VirtualDom$attribute('target');
var _elm_lang$svg$Svg_Attributes$tableValues = _elm_lang$virtual_dom$VirtualDom$attribute('tableValues');
var _elm_lang$svg$Svg_Attributes$systemLanguage = _elm_lang$virtual_dom$VirtualDom$attribute('systemLanguage');
var _elm_lang$svg$Svg_Attributes$surfaceScale = _elm_lang$virtual_dom$VirtualDom$attribute('surfaceScale');
var _elm_lang$svg$Svg_Attributes$style = _elm_lang$virtual_dom$VirtualDom$attribute('style');
var _elm_lang$svg$Svg_Attributes$string = _elm_lang$virtual_dom$VirtualDom$attribute('string');
var _elm_lang$svg$Svg_Attributes$strikethroughThickness = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-thickness');
var _elm_lang$svg$Svg_Attributes$strikethroughPosition = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-position');
var _elm_lang$svg$Svg_Attributes$stitchTiles = _elm_lang$virtual_dom$VirtualDom$attribute('stitchTiles');
var _elm_lang$svg$Svg_Attributes$stemv = _elm_lang$virtual_dom$VirtualDom$attribute('stemv');
var _elm_lang$svg$Svg_Attributes$stemh = _elm_lang$virtual_dom$VirtualDom$attribute('stemh');
var _elm_lang$svg$Svg_Attributes$stdDeviation = _elm_lang$virtual_dom$VirtualDom$attribute('stdDeviation');
var _elm_lang$svg$Svg_Attributes$startOffset = _elm_lang$virtual_dom$VirtualDom$attribute('startOffset');
var _elm_lang$svg$Svg_Attributes$spreadMethod = _elm_lang$virtual_dom$VirtualDom$attribute('spreadMethod');
var _elm_lang$svg$Svg_Attributes$speed = _elm_lang$virtual_dom$VirtualDom$attribute('speed');
var _elm_lang$svg$Svg_Attributes$specularExponent = _elm_lang$virtual_dom$VirtualDom$attribute('specularExponent');
var _elm_lang$svg$Svg_Attributes$specularConstant = _elm_lang$virtual_dom$VirtualDom$attribute('specularConstant');
var _elm_lang$svg$Svg_Attributes$spacing = _elm_lang$virtual_dom$VirtualDom$attribute('spacing');
var _elm_lang$svg$Svg_Attributes$slope = _elm_lang$virtual_dom$VirtualDom$attribute('slope');
var _elm_lang$svg$Svg_Attributes$seed = _elm_lang$virtual_dom$VirtualDom$attribute('seed');
var _elm_lang$svg$Svg_Attributes$scale = _elm_lang$virtual_dom$VirtualDom$attribute('scale');
var _elm_lang$svg$Svg_Attributes$ry = _elm_lang$virtual_dom$VirtualDom$attribute('ry');
var _elm_lang$svg$Svg_Attributes$rx = _elm_lang$virtual_dom$VirtualDom$attribute('rx');
var _elm_lang$svg$Svg_Attributes$rotate = _elm_lang$virtual_dom$VirtualDom$attribute('rotate');
var _elm_lang$svg$Svg_Attributes$result = _elm_lang$virtual_dom$VirtualDom$attribute('result');
var _elm_lang$svg$Svg_Attributes$restart = _elm_lang$virtual_dom$VirtualDom$attribute('restart');
var _elm_lang$svg$Svg_Attributes$requiredFeatures = _elm_lang$virtual_dom$VirtualDom$attribute('requiredFeatures');
var _elm_lang$svg$Svg_Attributes$requiredExtensions = _elm_lang$virtual_dom$VirtualDom$attribute('requiredExtensions');
var _elm_lang$svg$Svg_Attributes$repeatDur = _elm_lang$virtual_dom$VirtualDom$attribute('repeatDur');
var _elm_lang$svg$Svg_Attributes$repeatCount = _elm_lang$virtual_dom$VirtualDom$attribute('repeatCount');
var _elm_lang$svg$Svg_Attributes$renderingIntent = _elm_lang$virtual_dom$VirtualDom$attribute('rendering-intent');
var _elm_lang$svg$Svg_Attributes$refY = _elm_lang$virtual_dom$VirtualDom$attribute('refY');
var _elm_lang$svg$Svg_Attributes$refX = _elm_lang$virtual_dom$VirtualDom$attribute('refX');
var _elm_lang$svg$Svg_Attributes$radius = _elm_lang$virtual_dom$VirtualDom$attribute('radius');
var _elm_lang$svg$Svg_Attributes$r = _elm_lang$virtual_dom$VirtualDom$attribute('r');
var _elm_lang$svg$Svg_Attributes$primitiveUnits = _elm_lang$virtual_dom$VirtualDom$attribute('primitiveUnits');
var _elm_lang$svg$Svg_Attributes$preserveAspectRatio = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAspectRatio');
var _elm_lang$svg$Svg_Attributes$preserveAlpha = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAlpha');
var _elm_lang$svg$Svg_Attributes$pointsAtZ = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtZ');
var _elm_lang$svg$Svg_Attributes$pointsAtY = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtY');
var _elm_lang$svg$Svg_Attributes$pointsAtX = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtX');
var _elm_lang$svg$Svg_Attributes$points = _elm_lang$virtual_dom$VirtualDom$attribute('points');
var _elm_lang$svg$Svg_Attributes$pointOrder = _elm_lang$virtual_dom$VirtualDom$attribute('point-order');
var _elm_lang$svg$Svg_Attributes$patternUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternUnits');
var _elm_lang$svg$Svg_Attributes$patternTransform = _elm_lang$virtual_dom$VirtualDom$attribute('patternTransform');
var _elm_lang$svg$Svg_Attributes$patternContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternContentUnits');
var _elm_lang$svg$Svg_Attributes$pathLength = _elm_lang$virtual_dom$VirtualDom$attribute('pathLength');
var _elm_lang$svg$Svg_Attributes$path = _elm_lang$virtual_dom$VirtualDom$attribute('path');
var _elm_lang$svg$Svg_Attributes$panose1 = _elm_lang$virtual_dom$VirtualDom$attribute('panose-1');
var _elm_lang$svg$Svg_Attributes$overlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('overline-thickness');
var _elm_lang$svg$Svg_Attributes$overlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('overline-position');
var _elm_lang$svg$Svg_Attributes$origin = _elm_lang$virtual_dom$VirtualDom$attribute('origin');
var _elm_lang$svg$Svg_Attributes$orientation = _elm_lang$virtual_dom$VirtualDom$attribute('orientation');
var _elm_lang$svg$Svg_Attributes$orient = _elm_lang$virtual_dom$VirtualDom$attribute('orient');
var _elm_lang$svg$Svg_Attributes$order = _elm_lang$virtual_dom$VirtualDom$attribute('order');
var _elm_lang$svg$Svg_Attributes$operator = _elm_lang$virtual_dom$VirtualDom$attribute('operator');
var _elm_lang$svg$Svg_Attributes$offset = _elm_lang$virtual_dom$VirtualDom$attribute('offset');
var _elm_lang$svg$Svg_Attributes$numOctaves = _elm_lang$virtual_dom$VirtualDom$attribute('numOctaves');
var _elm_lang$svg$Svg_Attributes$name = _elm_lang$virtual_dom$VirtualDom$attribute('name');
var _elm_lang$svg$Svg_Attributes$mode = _elm_lang$virtual_dom$VirtualDom$attribute('mode');
var _elm_lang$svg$Svg_Attributes$min = _elm_lang$virtual_dom$VirtualDom$attribute('min');
var _elm_lang$svg$Svg_Attributes$method = _elm_lang$virtual_dom$VirtualDom$attribute('method');
var _elm_lang$svg$Svg_Attributes$media = _elm_lang$virtual_dom$VirtualDom$attribute('media');
var _elm_lang$svg$Svg_Attributes$max = _elm_lang$virtual_dom$VirtualDom$attribute('max');
var _elm_lang$svg$Svg_Attributes$mathematical = _elm_lang$virtual_dom$VirtualDom$attribute('mathematical');
var _elm_lang$svg$Svg_Attributes$maskUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskUnits');
var _elm_lang$svg$Svg_Attributes$maskContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskContentUnits');
var _elm_lang$svg$Svg_Attributes$markerWidth = _elm_lang$virtual_dom$VirtualDom$attribute('markerWidth');
var _elm_lang$svg$Svg_Attributes$markerUnits = _elm_lang$virtual_dom$VirtualDom$attribute('markerUnits');
var _elm_lang$svg$Svg_Attributes$markerHeight = _elm_lang$virtual_dom$VirtualDom$attribute('markerHeight');
var _elm_lang$svg$Svg_Attributes$local = _elm_lang$virtual_dom$VirtualDom$attribute('local');
var _elm_lang$svg$Svg_Attributes$limitingConeAngle = _elm_lang$virtual_dom$VirtualDom$attribute('limitingConeAngle');
var _elm_lang$svg$Svg_Attributes$lengthAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('lengthAdjust');
var _elm_lang$svg$Svg_Attributes$lang = _elm_lang$virtual_dom$VirtualDom$attribute('lang');
var _elm_lang$svg$Svg_Attributes$keyTimes = _elm_lang$virtual_dom$VirtualDom$attribute('keyTimes');
var _elm_lang$svg$Svg_Attributes$keySplines = _elm_lang$virtual_dom$VirtualDom$attribute('keySplines');
var _elm_lang$svg$Svg_Attributes$keyPoints = _elm_lang$virtual_dom$VirtualDom$attribute('keyPoints');
var _elm_lang$svg$Svg_Attributes$kernelUnitLength = _elm_lang$virtual_dom$VirtualDom$attribute('kernelUnitLength');
var _elm_lang$svg$Svg_Attributes$kernelMatrix = _elm_lang$virtual_dom$VirtualDom$attribute('kernelMatrix');
var _elm_lang$svg$Svg_Attributes$k4 = _elm_lang$virtual_dom$VirtualDom$attribute('k4');
var _elm_lang$svg$Svg_Attributes$k3 = _elm_lang$virtual_dom$VirtualDom$attribute('k3');
var _elm_lang$svg$Svg_Attributes$k2 = _elm_lang$virtual_dom$VirtualDom$attribute('k2');
var _elm_lang$svg$Svg_Attributes$k1 = _elm_lang$virtual_dom$VirtualDom$attribute('k1');
var _elm_lang$svg$Svg_Attributes$k = _elm_lang$virtual_dom$VirtualDom$attribute('k');
var _elm_lang$svg$Svg_Attributes$intercept = _elm_lang$virtual_dom$VirtualDom$attribute('intercept');
var _elm_lang$svg$Svg_Attributes$in2 = _elm_lang$virtual_dom$VirtualDom$attribute('in2');
var _elm_lang$svg$Svg_Attributes$in$ = _elm_lang$virtual_dom$VirtualDom$attribute('in');
var _elm_lang$svg$Svg_Attributes$ideographic = _elm_lang$virtual_dom$VirtualDom$attribute('ideographic');
var _elm_lang$svg$Svg_Attributes$id = _elm_lang$virtual_dom$VirtualDom$attribute('id');
var _elm_lang$svg$Svg_Attributes$horizOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-y');
var _elm_lang$svg$Svg_Attributes$horizOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-x');
var _elm_lang$svg$Svg_Attributes$horizAdvX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-adv-x');
var _elm_lang$svg$Svg_Attributes$height = _elm_lang$virtual_dom$VirtualDom$attribute('height');
var _elm_lang$svg$Svg_Attributes$hanging = _elm_lang$virtual_dom$VirtualDom$attribute('hanging');
var _elm_lang$svg$Svg_Attributes$gradientUnits = _elm_lang$virtual_dom$VirtualDom$attribute('gradientUnits');
var _elm_lang$svg$Svg_Attributes$gradientTransform = _elm_lang$virtual_dom$VirtualDom$attribute('gradientTransform');
var _elm_lang$svg$Svg_Attributes$glyphRef = _elm_lang$virtual_dom$VirtualDom$attribute('glyphRef');
var _elm_lang$svg$Svg_Attributes$glyphName = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-name');
var _elm_lang$svg$Svg_Attributes$g2 = _elm_lang$virtual_dom$VirtualDom$attribute('g2');
var _elm_lang$svg$Svg_Attributes$g1 = _elm_lang$virtual_dom$VirtualDom$attribute('g1');
var _elm_lang$svg$Svg_Attributes$fy = _elm_lang$virtual_dom$VirtualDom$attribute('fy');
var _elm_lang$svg$Svg_Attributes$fx = _elm_lang$virtual_dom$VirtualDom$attribute('fx');
var _elm_lang$svg$Svg_Attributes$from = _elm_lang$virtual_dom$VirtualDom$attribute('from');
var _elm_lang$svg$Svg_Attributes$format = _elm_lang$virtual_dom$VirtualDom$attribute('format');
var _elm_lang$svg$Svg_Attributes$filterUnits = _elm_lang$virtual_dom$VirtualDom$attribute('filterUnits');
var _elm_lang$svg$Svg_Attributes$filterRes = _elm_lang$virtual_dom$VirtualDom$attribute('filterRes');
var _elm_lang$svg$Svg_Attributes$externalResourcesRequired = _elm_lang$virtual_dom$VirtualDom$attribute('externalResourcesRequired');
var _elm_lang$svg$Svg_Attributes$exponent = _elm_lang$virtual_dom$VirtualDom$attribute('exponent');
var _elm_lang$svg$Svg_Attributes$end = _elm_lang$virtual_dom$VirtualDom$attribute('end');
var _elm_lang$svg$Svg_Attributes$elevation = _elm_lang$virtual_dom$VirtualDom$attribute('elevation');
var _elm_lang$svg$Svg_Attributes$edgeMode = _elm_lang$virtual_dom$VirtualDom$attribute('edgeMode');
var _elm_lang$svg$Svg_Attributes$dy = _elm_lang$virtual_dom$VirtualDom$attribute('dy');
var _elm_lang$svg$Svg_Attributes$dx = _elm_lang$virtual_dom$VirtualDom$attribute('dx');
var _elm_lang$svg$Svg_Attributes$dur = _elm_lang$virtual_dom$VirtualDom$attribute('dur');
var _elm_lang$svg$Svg_Attributes$divisor = _elm_lang$virtual_dom$VirtualDom$attribute('divisor');
var _elm_lang$svg$Svg_Attributes$diffuseConstant = _elm_lang$virtual_dom$VirtualDom$attribute('diffuseConstant');
var _elm_lang$svg$Svg_Attributes$descent = _elm_lang$virtual_dom$VirtualDom$attribute('descent');
var _elm_lang$svg$Svg_Attributes$decelerate = _elm_lang$virtual_dom$VirtualDom$attribute('decelerate');
var _elm_lang$svg$Svg_Attributes$d = _elm_lang$virtual_dom$VirtualDom$attribute('d');
var _elm_lang$svg$Svg_Attributes$cy = _elm_lang$virtual_dom$VirtualDom$attribute('cy');
var _elm_lang$svg$Svg_Attributes$cx = _elm_lang$virtual_dom$VirtualDom$attribute('cx');
var _elm_lang$svg$Svg_Attributes$contentStyleType = _elm_lang$virtual_dom$VirtualDom$attribute('contentStyleType');
var _elm_lang$svg$Svg_Attributes$contentScriptType = _elm_lang$virtual_dom$VirtualDom$attribute('contentScriptType');
var _elm_lang$svg$Svg_Attributes$clipPathUnits = _elm_lang$virtual_dom$VirtualDom$attribute('clipPathUnits');
var _elm_lang$svg$Svg_Attributes$class = _elm_lang$virtual_dom$VirtualDom$attribute('class');
var _elm_lang$svg$Svg_Attributes$capHeight = _elm_lang$virtual_dom$VirtualDom$attribute('cap-height');
var _elm_lang$svg$Svg_Attributes$calcMode = _elm_lang$virtual_dom$VirtualDom$attribute('calcMode');
var _elm_lang$svg$Svg_Attributes$by = _elm_lang$virtual_dom$VirtualDom$attribute('by');
var _elm_lang$svg$Svg_Attributes$bias = _elm_lang$virtual_dom$VirtualDom$attribute('bias');
var _elm_lang$svg$Svg_Attributes$begin = _elm_lang$virtual_dom$VirtualDom$attribute('begin');
var _elm_lang$svg$Svg_Attributes$bbox = _elm_lang$virtual_dom$VirtualDom$attribute('bbox');
var _elm_lang$svg$Svg_Attributes$baseProfile = _elm_lang$virtual_dom$VirtualDom$attribute('baseProfile');
var _elm_lang$svg$Svg_Attributes$baseFrequency = _elm_lang$virtual_dom$VirtualDom$attribute('baseFrequency');
var _elm_lang$svg$Svg_Attributes$azimuth = _elm_lang$virtual_dom$VirtualDom$attribute('azimuth');
var _elm_lang$svg$Svg_Attributes$autoReverse = _elm_lang$virtual_dom$VirtualDom$attribute('autoReverse');
var _elm_lang$svg$Svg_Attributes$attributeType = _elm_lang$virtual_dom$VirtualDom$attribute('attributeType');
var _elm_lang$svg$Svg_Attributes$attributeName = _elm_lang$virtual_dom$VirtualDom$attribute('attributeName');
var _elm_lang$svg$Svg_Attributes$ascent = _elm_lang$virtual_dom$VirtualDom$attribute('ascent');
var _elm_lang$svg$Svg_Attributes$arabicForm = _elm_lang$virtual_dom$VirtualDom$attribute('arabic-form');
var _elm_lang$svg$Svg_Attributes$amplitude = _elm_lang$virtual_dom$VirtualDom$attribute('amplitude');
var _elm_lang$svg$Svg_Attributes$allowReorder = _elm_lang$virtual_dom$VirtualDom$attribute('allowReorder');
var _elm_lang$svg$Svg_Attributes$alphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('alphabetic');
var _elm_lang$svg$Svg_Attributes$additive = _elm_lang$virtual_dom$VirtualDom$attribute('additive');
var _elm_lang$svg$Svg_Attributes$accumulate = _elm_lang$virtual_dom$VirtualDom$attribute('accumulate');
var _elm_lang$svg$Svg_Attributes$accelerate = _elm_lang$virtual_dom$VirtualDom$attribute('accelerate');
var _elm_lang$svg$Svg_Attributes$accentHeight = _elm_lang$virtual_dom$VirtualDom$attribute('accent-height');

var _user$project$Animation_Model$matchPoints = F2(
	function (points1, points2) {
		var diff = _elm_lang$core$List$length(points1) - _elm_lang$core$List$length(points2);
		if (_elm_lang$core$Native_Utils.cmp(diff, 0) > 0) {
			var _p0 = _elm_lang$core$List$head(
				_elm_lang$core$List$reverse(points2));
			if (_p0.ctor === 'Nothing') {
				return {ctor: '_Tuple2', _0: points1, _1: points2};
			} else {
				return {
					ctor: '_Tuple2',
					_0: points1,
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						points2,
						A2(
							_elm_lang$core$List$repeat,
							_elm_lang$core$Basics$abs(diff),
							_p0._0))
				};
			}
		} else {
			if (_elm_lang$core$Native_Utils.cmp(diff, 0) < 0) {
				var _p1 = _elm_lang$core$List$head(
					_elm_lang$core$List$reverse(points1));
				if (_p1.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: points1, _1: points2};
				} else {
					return {
						ctor: '_Tuple2',
						_0: A2(
							_elm_lang$core$Basics_ops['++'],
							points1,
							A2(
								_elm_lang$core$List$repeat,
								_elm_lang$core$Basics$abs(diff),
								_p1._0)),
						_1: points2
					};
				}
			} else {
				return {ctor: '_Tuple2', _0: points1, _1: points2};
			}
		}
	});
var _user$project$Animation_Model$vTolerance = 0.1;
var _user$project$Animation_Model$tolerance = 1.0e-2;
var _user$project$Animation_Model$wrapAngle = 2 * _elm_lang$core$Basics$pi;
var _user$project$Animation_Model$negativeWrapAngle = -1 * _user$project$Animation_Model$wrapAngle;
var _user$project$Animation_Model$isCmdDone = function (cmd) {
	var motionDone = function (motion) {
		return _elm_lang$core$Native_Utils.eq(motion.velocity, 0) && _elm_lang$core$Native_Utils.eq(motion.position, motion.target);
	};
	var _p2 = cmd;
	switch (_p2.ctor) {
		case 'Move':
			return motionDone(_p2._0) && motionDone(_p2._1);
		case 'MoveTo':
			return motionDone(_p2._0) && motionDone(_p2._1);
		case 'Line':
			return motionDone(_p2._0) && motionDone(_p2._1);
		case 'LineTo':
			return motionDone(_p2._0) && motionDone(_p2._1);
		case 'Horizontal':
			return motionDone(_p2._0);
		case 'HorizontalTo':
			return motionDone(_p2._0);
		case 'Vertical':
			return motionDone(_p2._0);
		case 'VerticalTo':
			return motionDone(_p2._0);
		case 'Curve':
			var _p5 = _p2._0.point;
			var _p4 = _p2._0.control2;
			var _p3 = _p2._0.control1;
			return motionDone(
				_elm_lang$core$Basics$fst(_p3)) && (motionDone(
				_elm_lang$core$Basics$snd(_p3)) && (motionDone(
				_elm_lang$core$Basics$fst(_p4)) && (motionDone(
				_elm_lang$core$Basics$snd(_p4)) && (motionDone(
				_elm_lang$core$Basics$fst(_p5)) && motionDone(
				_elm_lang$core$Basics$snd(_p5))))));
		case 'CurveTo':
			var _p8 = _p2._0.point;
			var _p7 = _p2._0.control2;
			var _p6 = _p2._0.control1;
			return motionDone(
				_elm_lang$core$Basics$fst(_p6)) && (motionDone(
				_elm_lang$core$Basics$snd(_p6)) && (motionDone(
				_elm_lang$core$Basics$fst(_p7)) && (motionDone(
				_elm_lang$core$Basics$snd(_p7)) && (motionDone(
				_elm_lang$core$Basics$fst(_p8)) && motionDone(
				_elm_lang$core$Basics$snd(_p8))))));
		case 'Quadratic':
			var _p10 = _p2._0.point;
			var _p9 = _p2._0.control;
			return motionDone(
				_elm_lang$core$Basics$fst(_p9)) && (motionDone(
				_elm_lang$core$Basics$snd(_p9)) && (motionDone(
				_elm_lang$core$Basics$fst(_p10)) && motionDone(
				_elm_lang$core$Basics$snd(_p10))));
		case 'QuadraticTo':
			var _p12 = _p2._0.point;
			var _p11 = _p2._0.control;
			return motionDone(
				_elm_lang$core$Basics$fst(_p11)) && (motionDone(
				_elm_lang$core$Basics$snd(_p11)) && (motionDone(
				_elm_lang$core$Basics$fst(_p12)) && motionDone(
				_elm_lang$core$Basics$snd(_p12))));
		case 'SmoothQuadratic':
			return A2(
				_elm_lang$core$List$all,
				function (_p13) {
					var _p14 = _p13;
					return motionDone(_p14._0) && motionDone(_p14._1);
				},
				_p2._0);
		case 'SmoothQuadraticTo':
			return A2(
				_elm_lang$core$List$all,
				function (_p15) {
					var _p16 = _p15;
					return motionDone(_p16._0) && motionDone(_p16._1);
				},
				_p2._0);
		case 'Smooth':
			return A2(
				_elm_lang$core$List$all,
				function (_p17) {
					var _p18 = _p17;
					return motionDone(_p18._0) && motionDone(_p18._1);
				},
				_p2._0);
		case 'SmoothTo':
			return A2(
				_elm_lang$core$List$all,
				function (_p19) {
					var _p20 = _p19;
					return motionDone(_p20._0) && motionDone(_p20._1);
				},
				_p2._0);
		case 'ClockwiseArc':
			var _p21 = _p2._0;
			return motionDone(_p21.x) && (motionDone(_p21.y) && (motionDone(_p21.radius) && (motionDone(_p21.startAngle) && motionDone(_p21.endAngle))));
		case 'AntiClockwiseArc':
			var _p22 = _p2._0;
			return motionDone(_p22.x) && (motionDone(_p22.y) && (motionDone(_p22.radius) && (motionDone(_p22.startAngle) && motionDone(_p22.endAngle))));
		default:
			return true;
	}
};
var _user$project$Animation_Model$isDone = function (property) {
	var motionDone = function (motion) {
		var _p23 = motion.interpolation;
		switch (_p23.ctor) {
			case 'Spring':
				return _elm_lang$core$Native_Utils.eq(motion.velocity, 0) && _elm_lang$core$Native_Utils.eq(motion.position, motion.target);
			case 'Easing':
				return _elm_lang$core$Native_Utils.eq(_p23._0.progress, 1);
			default:
				return _elm_lang$core$Native_Utils.eq(motion.position, motion.target);
		}
	};
	var _p24 = property;
	switch (_p24.ctor) {
		case 'ExactProperty':
			return true;
		case 'ColorProperty':
			return A2(
				_elm_lang$core$List$all,
				motionDone,
				_elm_lang$core$Native_List.fromArray(
					[_p24._1, _p24._2, _p24._3, _p24._4]));
		case 'ShadowProperty':
			var _p25 = _p24._2;
			return A2(
				_elm_lang$core$List$all,
				motionDone,
				_elm_lang$core$Native_List.fromArray(
					[_p25.offsetX, _p25.offsetY, _p25.size, _p25.blur, _p25.red, _p25.green, _p25.blue, _p25.alpha]));
		case 'Property':
			return motionDone(_p24._1);
		case 'Property2':
			return motionDone(_p24._1) && motionDone(_p24._2);
		case 'Property3':
			return A2(
				_elm_lang$core$List$all,
				motionDone,
				_elm_lang$core$Native_List.fromArray(
					[_p24._1, _p24._2, _p24._3]));
		case 'AngleProperty':
			return motionDone(_p24._1);
		case 'Points':
			return A2(
				_elm_lang$core$List$all,
				function (_p26) {
					var _p27 = _p26;
					return motionDone(_p27._0) && motionDone(_p27._1);
				},
				_p24._0);
		default:
			return A2(_elm_lang$core$List$all, _user$project$Animation_Model$isCmdDone, _p24._0);
	}
};
var _user$project$Animation_Model$refreshTiming = F2(
	function (now, timing) {
		var dt = now - timing.current;
		return {
			current: now,
			dt: ((_elm_lang$core$Native_Utils.cmp(dt, 34) > 0) || _elm_lang$core$Native_Utils.eq(timing.current, 0)) ? 16.666 : dt
		};
	});
var _user$project$Animation_Model$propertyName = function (prop) {
	var _p28 = prop;
	switch (_p28.ctor) {
		case 'ExactProperty':
			return _p28._0;
		case 'ColorProperty':
			return _p28._0;
		case 'ShadowProperty':
			return _p28._0;
		case 'Property':
			return _p28._0;
		case 'Property2':
			return _p28._0;
		case 'Property3':
			return _p28._0;
		case 'AngleProperty':
			return _p28._0;
		case 'Points':
			return 'points';
		default:
			return 'path';
	}
};
var _user$project$Animation_Model$replaceProps = F2(
	function (props, replacements) {
		var replacementNames = A2(_elm_lang$core$List$map, _user$project$Animation_Model$propertyName, replacements);
		var removed = A2(
			_elm_lang$core$List$filter,
			function (prop) {
				return _elm_lang$core$Basics$not(
					A2(
						_elm_lang$core$List$member,
						_user$project$Animation_Model$propertyName(prop),
						replacementNames));
			},
			props);
		return A2(_elm_lang$core$Basics_ops['++'], removed, replacements);
	});
var _user$project$Animation_Model$zipPropertiesGreedy = F2(
	function (initialProps, newTargetProps) {
		var propertyMatch = F2(
			function (prop1, prop2) {
				return _elm_lang$core$Native_Utils.eq(
					_user$project$Animation_Model$propertyName(prop1),
					_user$project$Animation_Model$propertyName(prop2));
			});
		var _p29 = A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p31, _p30) {
					var _p32 = _p30;
					var _p39 = _p32._1;
					var _p38 = _p32._0;
					var _p37 = _p32._2;
					var _p33 = _elm_lang$core$List$head(_p38);
					if (_p33.ctor === 'Nothing') {
						return {ctor: '_Tuple3', _0: _p38, _1: _p39, _2: _p37};
					} else {
						var _p36 = _p33._0;
						var _p34 = A2(
							_elm_lang$core$List$partition,
							propertyMatch(_p36),
							_p39);
						var matchingBs = _p34._0;
						var nonMatchingBs = _p34._1;
						return {
							ctor: '_Tuple3',
							_0: A2(_elm_lang$core$List$drop, 1, _p38),
							_1: function () {
								var _p35 = matchingBs;
								if (_p35.ctor === '[]') {
									return nonMatchingBs;
								} else {
									return A2(_elm_lang$core$Basics_ops['++'], _p35._1, nonMatchingBs);
								}
							}(),
							_2: A2(
								_elm_lang$core$List_ops['::'],
								{
									ctor: '_Tuple2',
									_0: _p36,
									_1: _elm_lang$core$List$head(matchingBs)
								},
								_p37)
						};
					}
				}),
			{
				ctor: '_Tuple3',
				_0: initialProps,
				_1: newTargetProps,
				_2: _elm_lang$core$Native_List.fromArray(
					[])
			},
			A2(
				_elm_lang$core$List$repeat,
				_elm_lang$core$List$length(initialProps),
				0));
		var warnings = _p29._1;
		var props = _p29._2;
		var _p40 = A2(
			_elm_lang$core$List$map,
			function (b) {
				return A2(
					_elm_lang$core$Debug$log,
					'elm-style-animation',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_user$project$Animation_Model$propertyName(b),
						' has no initial value and therefore will not be animated.'));
			},
			warnings);
		return _elm_lang$core$List$reverse(props);
	});
var _user$project$Animation_Model$Timing = F2(
	function (a, b) {
		return {current: a, dt: b};
	});
var _user$project$Animation_Model$Motion = F6(
	function (a, b, c, d, e, f) {
		return {position: a, velocity: b, target: c, interpolation: d, unit: e, interpolationOverride: f};
	});
var _user$project$Animation_Model$ShadowMotion = F8(
	function (a, b, c, d, e, f, g, h) {
		return {offsetX: a, offsetY: b, size: c, blur: d, red: e, green: f, blue: g, alpha: h};
	});
var _user$project$Animation_Model$CubicCurveMotion = F3(
	function (a, b, c) {
		return {control1: a, control2: b, point: c};
	});
var _user$project$Animation_Model$QuadraticCurveMotion = F2(
	function (a, b) {
		return {control: a, point: b};
	});
var _user$project$Animation_Model$ArcMotion = F5(
	function (a, b, c, d, e) {
		return {x: a, y: b, radius: c, startAngle: d, endAngle: e};
	});
var _user$project$Animation_Model$Animation = function (a) {
	return {ctor: 'Animation', _0: a};
};
var _user$project$Animation_Model$Tick = function (a) {
	return {ctor: 'Tick', _0: a};
};
var _user$project$Animation_Model$Loop = function (a) {
	return {ctor: 'Loop', _0: a};
};
var _user$project$Animation_Model$Repeat = F2(
	function (a, b) {
		return {ctor: 'Repeat', _0: a, _1: b};
	});
var _user$project$Animation_Model$Send = function (a) {
	return {ctor: 'Send', _0: a};
};
var _user$project$Animation_Model$Wait = function (a) {
	return {ctor: 'Wait', _0: a};
};
var _user$project$Animation_Model$Set = function (a) {
	return {ctor: 'Set', _0: a};
};
var _user$project$Animation_Model$ToWith = function (a) {
	return {ctor: 'ToWith', _0: a};
};
var _user$project$Animation_Model$To = function (a) {
	return {ctor: 'To', _0: a};
};
var _user$project$Animation_Model$Step = {ctor: 'Step'};
var _user$project$Animation_Model$AtSpeed = function (a) {
	return {ctor: 'AtSpeed', _0: a};
};
var _user$project$Animation_Model$Easing = function (a) {
	return {ctor: 'Easing', _0: a};
};
var _user$project$Animation_Model$stepInterpolation = F2(
	function (dtms, motion) {
		var interpolationToUse = A2(_elm_lang$core$Maybe$withDefault, motion.interpolation, motion.interpolationOverride);
		var _p41 = interpolationToUse;
		switch (_p41.ctor) {
			case 'AtSpeed':
				var _p43 = _p41._0.perSecond;
				var _p42 = function () {
					if (_elm_lang$core$Native_Utils.cmp(motion.position, motion.target) < 0) {
						var $new = motion.position + (_p43 * (dtms / 1000));
						return {
							ctor: '_Tuple2',
							_0: $new,
							_1: _elm_lang$core$Native_Utils.cmp($new, motion.target) > -1
						};
					} else {
						var $new = motion.position - (_p43 * (dtms / 1000));
						return {
							ctor: '_Tuple2',
							_0: $new,
							_1: _elm_lang$core$Native_Utils.cmp($new, motion.target) < 1
						};
					}
				}();
				var newPos = _p42._0;
				var finished = _p42._1;
				return finished ? _elm_lang$core$Native_Utils.update(
					motion,
					{position: motion.target, velocity: 0.0}) : _elm_lang$core$Native_Utils.update(
					motion,
					{position: newPos, velocity: _p43 * 1000});
			case 'Spring':
				var fdamper = (-1 * _p41._0.damping) * motion.velocity;
				var fspring = _p41._0.stiffness * (motion.target - motion.position);
				var a = fspring + fdamper;
				var dt = dtms / 1000;
				var newVelocity = motion.velocity + (a * dt);
				var newPos = motion.position + (newVelocity * dt);
				var dx = _elm_lang$core$Basics$abs(motion.target - newPos);
				return ((_elm_lang$core$Native_Utils.cmp(dx, _user$project$Animation_Model$tolerance) < 0) && (_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$Basics$abs(newVelocity),
					_user$project$Animation_Model$vTolerance) < 0)) ? _elm_lang$core$Native_Utils.update(
					motion,
					{position: motion.target, velocity: 0.0}) : _elm_lang$core$Native_Utils.update(
					motion,
					{position: newPos, velocity: newVelocity});
			default:
				var _p48 = _p41._0.start;
				var _p47 = _p41._0.progress;
				var _p46 = _p41._0.ease;
				var _p45 = _p41._0.duration;
				var distance = motion.target - _p48;
				var newProgress = (_elm_lang$core$Native_Utils.cmp((dtms / _p45) + _p47, 1) < 0) ? ((dtms / _p45) + _p47) : 1;
				var eased = _p46(newProgress);
				var newPos = (eased * distance) + _p48;
				var newVelocity = _elm_lang$core$Native_Utils.eq(newProgress, 1) ? 0 : ((newPos - motion.position) / dtms);
				var _p44 = motion.interpolationOverride;
				if (_p44.ctor === 'Nothing') {
					return _elm_lang$core$Native_Utils.update(
						motion,
						{
							position: newPos,
							velocity: newVelocity,
							interpolation: _user$project$Animation_Model$Easing(
								{progress: newProgress, duration: _p45, ease: _p46, start: _p48})
						});
				} else {
					return _elm_lang$core$Native_Utils.update(
						motion,
						{
							position: newPos,
							velocity: newVelocity,
							interpolationOverride: _elm_lang$core$Maybe$Just(
								_user$project$Animation_Model$Easing(
									{progress: newProgress, duration: _p45, ease: _p46, start: _p48}))
						});
				}
		}
	});
var _user$project$Animation_Model$Spring = function (a) {
	return {ctor: 'Spring', _0: a};
};
var _user$project$Animation_Model$Path = function (a) {
	return {ctor: 'Path', _0: a};
};
var _user$project$Animation_Model$Points = function (a) {
	return {ctor: 'Points', _0: a};
};
var _user$project$Animation_Model$AngleProperty = F2(
	function (a, b) {
		return {ctor: 'AngleProperty', _0: a, _1: b};
	});
var _user$project$Animation_Model$Property3 = F4(
	function (a, b, c, d) {
		return {ctor: 'Property3', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$Animation_Model$Property2 = F3(
	function (a, b, c) {
		return {ctor: 'Property2', _0: a, _1: b, _2: c};
	});
var _user$project$Animation_Model$Property = F2(
	function (a, b) {
		return {ctor: 'Property', _0: a, _1: b};
	});
var _user$project$Animation_Model$ShadowProperty = F3(
	function (a, b, c) {
		return {ctor: 'ShadowProperty', _0: a, _1: b, _2: c};
	});
var _user$project$Animation_Model$ColorProperty = F5(
	function (a, b, c, d, e) {
		return {ctor: 'ColorProperty', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _user$project$Animation_Model$ExactProperty = F2(
	function (a, b) {
		return {ctor: 'ExactProperty', _0: a, _1: b};
	});
var _user$project$Animation_Model$Close = {ctor: 'Close'};
var _user$project$Animation_Model$AntiClockwiseArc = function (a) {
	return {ctor: 'AntiClockwiseArc', _0: a};
};
var _user$project$Animation_Model$ClockwiseArc = function (a) {
	return {ctor: 'ClockwiseArc', _0: a};
};
var _user$project$Animation_Model$SmoothTo = function (a) {
	return {ctor: 'SmoothTo', _0: a};
};
var _user$project$Animation_Model$Smooth = function (a) {
	return {ctor: 'Smooth', _0: a};
};
var _user$project$Animation_Model$SmoothQuadraticTo = function (a) {
	return {ctor: 'SmoothQuadraticTo', _0: a};
};
var _user$project$Animation_Model$SmoothQuadratic = function (a) {
	return {ctor: 'SmoothQuadratic', _0: a};
};
var _user$project$Animation_Model$QuadraticTo = function (a) {
	return {ctor: 'QuadraticTo', _0: a};
};
var _user$project$Animation_Model$Quadratic = function (a) {
	return {ctor: 'Quadratic', _0: a};
};
var _user$project$Animation_Model$CurveTo = function (a) {
	return {ctor: 'CurveTo', _0: a};
};
var _user$project$Animation_Model$Curve = function (a) {
	return {ctor: 'Curve', _0: a};
};
var _user$project$Animation_Model$VerticalTo = function (a) {
	return {ctor: 'VerticalTo', _0: a};
};
var _user$project$Animation_Model$Vertical = function (a) {
	return {ctor: 'Vertical', _0: a};
};
var _user$project$Animation_Model$HorizontalTo = function (a) {
	return {ctor: 'HorizontalTo', _0: a};
};
var _user$project$Animation_Model$Horizontal = function (a) {
	return {ctor: 'Horizontal', _0: a};
};
var _user$project$Animation_Model$LineTo = F2(
	function (a, b) {
		return {ctor: 'LineTo', _0: a, _1: b};
	});
var _user$project$Animation_Model$Line = F2(
	function (a, b) {
		return {ctor: 'Line', _0: a, _1: b};
	});
var _user$project$Animation_Model$MoveTo = F2(
	function (a, b) {
		return {ctor: 'MoveTo', _0: a, _1: b};
	});
var _user$project$Animation_Model$Move = F2(
	function (a, b) {
		return {ctor: 'Move', _0: a, _1: b};
	});
var _user$project$Animation_Model$mapPathMotion = F2(
	function (fn, cmd) {
		var mapCoords = function (coords) {
			return A2(
				_elm_lang$core$List$map,
				function (_p49) {
					var _p50 = _p49;
					return {
						ctor: '_Tuple2',
						_0: fn(_p50._0),
						_1: fn(_p50._1)
					};
				},
				coords);
		};
		var _p51 = cmd;
		switch (_p51.ctor) {
			case 'Move':
				return A2(
					_user$project$Animation_Model$Move,
					fn(_p51._0),
					fn(_p51._1));
			case 'MoveTo':
				return A2(
					_user$project$Animation_Model$MoveTo,
					fn(_p51._0),
					fn(_p51._1));
			case 'Line':
				return A2(
					_user$project$Animation_Model$Line,
					fn(_p51._0),
					fn(_p51._1));
			case 'LineTo':
				return A2(
					_user$project$Animation_Model$LineTo,
					fn(_p51._0),
					fn(_p51._1));
			case 'Horizontal':
				return _user$project$Animation_Model$Horizontal(
					fn(_p51._0));
			case 'HorizontalTo':
				return _user$project$Animation_Model$HorizontalTo(
					fn(_p51._0));
			case 'Vertical':
				return _user$project$Animation_Model$Vertical(
					fn(_p51._0));
			case 'VerticalTo':
				return _user$project$Animation_Model$VerticalTo(
					fn(_p51._0));
			case 'Curve':
				var _p54 = _p51._0.point;
				var _p53 = _p51._0.control2;
				var _p52 = _p51._0.control1;
				return _user$project$Animation_Model$Curve(
					{
						control1: {
							ctor: '_Tuple2',
							_0: fn(
								_elm_lang$core$Basics$fst(_p52)),
							_1: fn(
								_elm_lang$core$Basics$snd(_p52))
						},
						control2: {
							ctor: '_Tuple2',
							_0: fn(
								_elm_lang$core$Basics$fst(_p53)),
							_1: fn(
								_elm_lang$core$Basics$snd(_p53))
						},
						point: {
							ctor: '_Tuple2',
							_0: fn(
								_elm_lang$core$Basics$fst(_p54)),
							_1: fn(
								_elm_lang$core$Basics$snd(_p54))
						}
					});
			case 'CurveTo':
				var _p57 = _p51._0.point;
				var _p56 = _p51._0.control2;
				var _p55 = _p51._0.control1;
				return _user$project$Animation_Model$CurveTo(
					{
						control1: {
							ctor: '_Tuple2',
							_0: fn(
								_elm_lang$core$Basics$fst(_p55)),
							_1: fn(
								_elm_lang$core$Basics$snd(_p55))
						},
						control2: {
							ctor: '_Tuple2',
							_0: fn(
								_elm_lang$core$Basics$fst(_p56)),
							_1: fn(
								_elm_lang$core$Basics$snd(_p56))
						},
						point: {
							ctor: '_Tuple2',
							_0: fn(
								_elm_lang$core$Basics$fst(_p57)),
							_1: fn(
								_elm_lang$core$Basics$snd(_p57))
						}
					});
			case 'Quadratic':
				var _p59 = _p51._0.point;
				var _p58 = _p51._0.control;
				return _user$project$Animation_Model$Quadratic(
					{
						control: {
							ctor: '_Tuple2',
							_0: fn(
								_elm_lang$core$Basics$fst(_p58)),
							_1: fn(
								_elm_lang$core$Basics$snd(_p58))
						},
						point: {
							ctor: '_Tuple2',
							_0: fn(
								_elm_lang$core$Basics$fst(_p59)),
							_1: fn(
								_elm_lang$core$Basics$snd(_p59))
						}
					});
			case 'QuadraticTo':
				var _p61 = _p51._0.point;
				var _p60 = _p51._0.control;
				return _user$project$Animation_Model$QuadraticTo(
					{
						control: {
							ctor: '_Tuple2',
							_0: fn(
								_elm_lang$core$Basics$fst(_p60)),
							_1: fn(
								_elm_lang$core$Basics$snd(_p60))
						},
						point: {
							ctor: '_Tuple2',
							_0: fn(
								_elm_lang$core$Basics$fst(_p61)),
							_1: fn(
								_elm_lang$core$Basics$snd(_p61))
						}
					});
			case 'SmoothQuadratic':
				return _user$project$Animation_Model$SmoothQuadratic(
					mapCoords(_p51._0));
			case 'SmoothQuadraticTo':
				return _user$project$Animation_Model$SmoothQuadraticTo(
					mapCoords(_p51._0));
			case 'Smooth':
				return _user$project$Animation_Model$Smooth(
					mapCoords(_p51._0));
			case 'SmoothTo':
				return _user$project$Animation_Model$SmoothTo(
					mapCoords(_p51._0));
			case 'ClockwiseArc':
				var _p62 = _p51._0;
				return _user$project$Animation_Model$ClockwiseArc(
					function () {
						var endAngle = _p62.endAngle;
						var startAngle = _p62.startAngle;
						var radius = _p62.radius;
						var y = _p62.y;
						var x = _p62.x;
						return _elm_lang$core$Native_Utils.update(
							_p62,
							{
								x: fn(x),
								y: fn(y),
								radius: fn(radius),
								startAngle: fn(startAngle),
								endAngle: fn(endAngle)
							});
					}());
			case 'AntiClockwiseArc':
				var _p63 = _p51._0;
				return _user$project$Animation_Model$AntiClockwiseArc(
					function () {
						var endAngle = _p63.endAngle;
						var startAngle = _p63.startAngle;
						var radius = _p63.radius;
						var y = _p63.y;
						var x = _p63.x;
						return _elm_lang$core$Native_Utils.update(
							_p63,
							{
								x: fn(x),
								y: fn(y),
								radius: fn(radius),
								startAngle: fn(startAngle),
								endAngle: fn(endAngle)
							});
					}());
			default:
				return _user$project$Animation_Model$Close;
		}
	});
var _user$project$Animation_Model$mapToMotion = F2(
	function (fn, prop) {
		var _p64 = prop;
		switch (_p64.ctor) {
			case 'ExactProperty':
				return A2(_user$project$Animation_Model$ExactProperty, _p64._0, _p64._1);
			case 'ColorProperty':
				return A5(
					_user$project$Animation_Model$ColorProperty,
					_p64._0,
					fn(_p64._1),
					fn(_p64._2),
					fn(_p64._3),
					fn(_p64._4));
			case 'ShadowProperty':
				var _p65 = _p64._2;
				var alpha = _p65.alpha;
				var blue = _p65.blue;
				var green = _p65.green;
				var red = _p65.red;
				var blur = _p65.blur;
				var size = _p65.size;
				var offsetY = _p65.offsetY;
				var offsetX = _p65.offsetX;
				return A3(
					_user$project$Animation_Model$ShadowProperty,
					_p64._0,
					_p64._1,
					{
						offsetX: fn(offsetX),
						offsetY: fn(offsetY),
						size: fn(size),
						blur: fn(blur),
						red: fn(red),
						green: fn(green),
						blue: fn(blue),
						alpha: fn(alpha)
					});
			case 'Property':
				return A2(
					_user$project$Animation_Model$Property,
					_p64._0,
					fn(_p64._1));
			case 'Property2':
				return A3(
					_user$project$Animation_Model$Property2,
					_p64._0,
					fn(_p64._1),
					fn(_p64._2));
			case 'Property3':
				return A4(
					_user$project$Animation_Model$Property3,
					_p64._0,
					fn(_p64._1),
					fn(_p64._2),
					fn(_p64._3));
			case 'AngleProperty':
				return A2(
					_user$project$Animation_Model$AngleProperty,
					_p64._0,
					fn(_p64._1));
			case 'Points':
				return _user$project$Animation_Model$Points(
					A2(
						_elm_lang$core$List$map,
						function (_p66) {
							var _p67 = _p66;
							return {
								ctor: '_Tuple2',
								_0: fn(_p67._0),
								_1: fn(_p67._1)
							};
						},
						_p64._0));
			default:
				return _user$project$Animation_Model$Path(
					A2(
						_elm_lang$core$List$map,
						_user$project$Animation_Model$mapPathMotion(fn),
						_p64._0));
		}
	});
var _user$project$Animation_Model$setPathTarget = F2(
	function (cmd, targetCmd) {
		var setMotionTarget = F2(
			function (motion, targetMotion) {
				var _p68 = motion.interpolation;
				if (_p68.ctor === 'Easing') {
					return _elm_lang$core$Native_Utils.update(
						motion,
						{
							target: targetMotion.position,
							interpolation: _user$project$Animation_Model$Easing(
								_elm_lang$core$Native_Utils.update(
									_p68._0,
									{start: motion.position}))
						});
				} else {
					return _elm_lang$core$Native_Utils.update(
						motion,
						{target: targetMotion.position});
				}
			});
		var _p69 = cmd;
		switch (_p69.ctor) {
			case 'Move':
				var _p70 = targetCmd;
				if (_p70.ctor === 'Move') {
					return A2(
						_user$project$Animation_Model$Move,
						A2(setMotionTarget, _p69._0, _p70._0),
						A2(setMotionTarget, _p69._1, _p70._1));
				} else {
					return cmd;
				}
			case 'MoveTo':
				var _p71 = targetCmd;
				if (_p71.ctor === 'MoveTo') {
					return A2(
						_user$project$Animation_Model$MoveTo,
						A2(setMotionTarget, _p69._0, _p71._0),
						A2(setMotionTarget, _p69._1, _p71._1));
				} else {
					return cmd;
				}
			case 'Line':
				var _p72 = targetCmd;
				if (_p72.ctor === 'Line') {
					return A2(
						_user$project$Animation_Model$Line,
						A2(setMotionTarget, _p69._0, _p72._0),
						A2(setMotionTarget, _p69._1, _p72._1));
				} else {
					return cmd;
				}
			case 'LineTo':
				var _p73 = targetCmd;
				if (_p73.ctor === 'LineTo') {
					return A2(
						_user$project$Animation_Model$LineTo,
						A2(setMotionTarget, _p69._0, _p73._0),
						A2(setMotionTarget, _p69._1, _p73._1));
				} else {
					return cmd;
				}
			case 'Horizontal':
				var _p74 = targetCmd;
				if (_p74.ctor === 'Horizontal') {
					return _user$project$Animation_Model$Horizontal(
						A2(setMotionTarget, _p69._0, _p74._0));
				} else {
					return cmd;
				}
			case 'HorizontalTo':
				var _p75 = targetCmd;
				if (_p75.ctor === 'HorizontalTo') {
					return _user$project$Animation_Model$HorizontalTo(
						A2(setMotionTarget, _p69._0, _p75._0));
				} else {
					return cmd;
				}
			case 'Vertical':
				var _p76 = targetCmd;
				if (_p76.ctor === 'Vertical') {
					return _user$project$Animation_Model$Vertical(
						A2(setMotionTarget, _p69._0, _p76._0));
				} else {
					return cmd;
				}
			case 'VerticalTo':
				var _p77 = targetCmd;
				if (_p77.ctor === 'VerticalTo') {
					return _user$project$Animation_Model$VerticalTo(
						A2(setMotionTarget, _p69._0, _p77._0));
				} else {
					return cmd;
				}
			case 'Curve':
				var _p80 = _p69._0;
				var _p78 = targetCmd;
				if (_p78.ctor === 'Curve') {
					var _p79 = _p78._0;
					return _user$project$Animation_Model$Curve(
						{
							control1: {
								ctor: '_Tuple2',
								_0: A2(
									setMotionTarget,
									_elm_lang$core$Basics$fst(_p80.control1),
									_elm_lang$core$Basics$fst(_p79.control1)),
								_1: A2(
									setMotionTarget,
									_elm_lang$core$Basics$snd(_p80.control1),
									_elm_lang$core$Basics$snd(_p79.control1))
							},
							control2: {
								ctor: '_Tuple2',
								_0: A2(
									setMotionTarget,
									_elm_lang$core$Basics$fst(_p80.control2),
									_elm_lang$core$Basics$fst(_p79.control2)),
								_1: A2(
									setMotionTarget,
									_elm_lang$core$Basics$snd(_p80.control2),
									_elm_lang$core$Basics$snd(_p79.control2))
							},
							point: {
								ctor: '_Tuple2',
								_0: A2(
									setMotionTarget,
									_elm_lang$core$Basics$fst(_p80.point),
									_elm_lang$core$Basics$fst(_p79.point)),
								_1: A2(
									setMotionTarget,
									_elm_lang$core$Basics$snd(_p80.point),
									_elm_lang$core$Basics$snd(_p79.point))
							}
						});
				} else {
					return cmd;
				}
			case 'CurveTo':
				var _p83 = _p69._0;
				var _p81 = targetCmd;
				if (_p81.ctor === 'CurveTo') {
					var _p82 = _p81._0;
					return _user$project$Animation_Model$CurveTo(
						{
							control1: {
								ctor: '_Tuple2',
								_0: A2(
									setMotionTarget,
									_elm_lang$core$Basics$fst(_p83.control1),
									_elm_lang$core$Basics$fst(_p82.control1)),
								_1: A2(
									setMotionTarget,
									_elm_lang$core$Basics$snd(_p83.control1),
									_elm_lang$core$Basics$snd(_p82.control1))
							},
							control2: {
								ctor: '_Tuple2',
								_0: A2(
									setMotionTarget,
									_elm_lang$core$Basics$fst(_p83.control2),
									_elm_lang$core$Basics$fst(_p82.control2)),
								_1: A2(
									setMotionTarget,
									_elm_lang$core$Basics$snd(_p83.control2),
									_elm_lang$core$Basics$snd(_p82.control2))
							},
							point: {
								ctor: '_Tuple2',
								_0: A2(
									setMotionTarget,
									_elm_lang$core$Basics$fst(_p83.point),
									_elm_lang$core$Basics$fst(_p82.point)),
								_1: A2(
									setMotionTarget,
									_elm_lang$core$Basics$snd(_p83.point),
									_elm_lang$core$Basics$snd(_p82.point))
							}
						});
				} else {
					return cmd;
				}
			case 'Quadratic':
				var _p86 = _p69._0;
				var _p84 = targetCmd;
				if (_p84.ctor === 'Quadratic') {
					var _p85 = _p84._0;
					return _user$project$Animation_Model$Quadratic(
						{
							control: {
								ctor: '_Tuple2',
								_0: A2(
									setMotionTarget,
									_elm_lang$core$Basics$fst(_p86.control),
									_elm_lang$core$Basics$fst(_p85.control)),
								_1: A2(
									setMotionTarget,
									_elm_lang$core$Basics$snd(_p86.control),
									_elm_lang$core$Basics$snd(_p85.control))
							},
							point: {
								ctor: '_Tuple2',
								_0: A2(
									setMotionTarget,
									_elm_lang$core$Basics$fst(_p86.point),
									_elm_lang$core$Basics$fst(_p85.point)),
								_1: A2(
									setMotionTarget,
									_elm_lang$core$Basics$snd(_p86.point),
									_elm_lang$core$Basics$snd(_p85.point))
							}
						});
				} else {
					return cmd;
				}
			case 'QuadraticTo':
				var _p89 = _p69._0;
				var _p87 = targetCmd;
				if (_p87.ctor === 'QuadraticTo') {
					var _p88 = _p87._0;
					return _user$project$Animation_Model$QuadraticTo(
						{
							control: {
								ctor: '_Tuple2',
								_0: A2(
									setMotionTarget,
									_elm_lang$core$Basics$fst(_p89.control),
									_elm_lang$core$Basics$fst(_p88.control)),
								_1: A2(
									setMotionTarget,
									_elm_lang$core$Basics$snd(_p89.control),
									_elm_lang$core$Basics$snd(_p88.control))
							},
							point: {
								ctor: '_Tuple2',
								_0: A2(
									setMotionTarget,
									_elm_lang$core$Basics$fst(_p89.point),
									_elm_lang$core$Basics$fst(_p88.point)),
								_1: A2(
									setMotionTarget,
									_elm_lang$core$Basics$snd(_p89.point),
									_elm_lang$core$Basics$snd(_p88.point))
							}
						});
				} else {
					return cmd;
				}
			case 'SmoothQuadratic':
				var _p90 = targetCmd;
				if (_p90.ctor === 'SmoothQuadratic') {
					return _user$project$Animation_Model$SmoothQuadratic(
						A3(
							_elm_lang$core$List$map2,
							F2(
								function (_p92, _p91) {
									var _p93 = _p92;
									var _p94 = _p91;
									return {
										ctor: '_Tuple2',
										_0: A2(setMotionTarget, _p93._0, _p94._0),
										_1: A2(setMotionTarget, _p93._1, _p94._1)
									};
								}),
							_p69._0,
							_p90._0));
				} else {
					return cmd;
				}
			case 'SmoothQuadraticTo':
				var _p95 = targetCmd;
				if (_p95.ctor === 'SmoothQuadraticTo') {
					return _user$project$Animation_Model$SmoothQuadraticTo(
						A3(
							_elm_lang$core$List$map2,
							F2(
								function (_p97, _p96) {
									var _p98 = _p97;
									var _p99 = _p96;
									return {
										ctor: '_Tuple2',
										_0: A2(setMotionTarget, _p98._0, _p99._0),
										_1: A2(setMotionTarget, _p98._1, _p99._1)
									};
								}),
							_p69._0,
							_p95._0));
				} else {
					return cmd;
				}
			case 'Smooth':
				var _p100 = targetCmd;
				if (_p100.ctor === 'Smooth') {
					return _user$project$Animation_Model$Smooth(
						A3(
							_elm_lang$core$List$map2,
							F2(
								function (_p102, _p101) {
									var _p103 = _p102;
									var _p104 = _p101;
									return {
										ctor: '_Tuple2',
										_0: A2(setMotionTarget, _p103._0, _p104._0),
										_1: A2(setMotionTarget, _p103._1, _p104._1)
									};
								}),
							_p69._0,
							_p100._0));
				} else {
					return cmd;
				}
			case 'SmoothTo':
				var _p105 = targetCmd;
				if (_p105.ctor === 'SmoothTo') {
					return _user$project$Animation_Model$SmoothTo(
						A3(
							_elm_lang$core$List$map2,
							F2(
								function (_p107, _p106) {
									var _p108 = _p107;
									var _p109 = _p106;
									return {
										ctor: '_Tuple2',
										_0: A2(setMotionTarget, _p108._0, _p109._0),
										_1: A2(setMotionTarget, _p108._1, _p109._1)
									};
								}),
							_p69._0,
							_p105._0));
				} else {
					return cmd;
				}
			case 'ClockwiseArc':
				var _p112 = _p69._0;
				var _p110 = targetCmd;
				if (_p110.ctor === 'ClockwiseArc') {
					var _p111 = _p110._0;
					return _user$project$Animation_Model$ClockwiseArc(
						function () {
							var endAngle = _p112.endAngle;
							var startAngle = _p112.startAngle;
							var radius = _p112.radius;
							var y = _p112.y;
							var x = _p112.x;
							return _elm_lang$core$Native_Utils.update(
								_p112,
								{
									x: A2(setMotionTarget, x, _p111.x),
									y: A2(setMotionTarget, y, _p111.y),
									radius: A2(setMotionTarget, radius, _p111.radius),
									startAngle: A2(setMotionTarget, startAngle, _p111.startAngle),
									endAngle: A2(setMotionTarget, endAngle, _p111.endAngle)
								});
						}());
				} else {
					return cmd;
				}
			case 'AntiClockwiseArc':
				var _p115 = _p69._0;
				var _p113 = targetCmd;
				if (_p113.ctor === 'AntiClockwiseArc') {
					var _p114 = _p113._0;
					return _user$project$Animation_Model$AntiClockwiseArc(
						function () {
							var endAngle = _p115.endAngle;
							var startAngle = _p115.startAngle;
							var radius = _p115.radius;
							var y = _p115.y;
							var x = _p115.x;
							return _elm_lang$core$Native_Utils.update(
								_p115,
								{
									x: A2(setMotionTarget, x, _p114.x),
									y: A2(setMotionTarget, y, _p114.y),
									radius: A2(setMotionTarget, radius, _p114.radius),
									startAngle: A2(setMotionTarget, startAngle, _p114.startAngle),
									endAngle: A2(setMotionTarget, endAngle, _p114.endAngle)
								});
						}());
				} else {
					return cmd;
				}
			default:
				return _user$project$Animation_Model$Close;
		}
	});
var _user$project$Animation_Model$setTarget = F3(
	function (overrideInterp, current, newTarget) {
		var setMotionTarget = F2(
			function (motion, targetMotion) {
				var newMotion = overrideInterp ? _elm_lang$core$Native_Utils.update(
					motion,
					{
						interpolationOverride: _elm_lang$core$Maybe$Just(targetMotion.interpolation)
					}) : motion;
				var _p116 = newMotion.interpolationOverride;
				if (_p116.ctor === 'Nothing') {
					var _p117 = newMotion.interpolation;
					if (_p117.ctor === 'Easing') {
						return _elm_lang$core$Native_Utils.update(
							newMotion,
							{
								target: targetMotion.position,
								interpolation: _user$project$Animation_Model$Easing(
									_elm_lang$core$Native_Utils.update(
										_p117._0,
										{start: motion.position, progress: 0}))
							});
					} else {
						return _elm_lang$core$Native_Utils.update(
							newMotion,
							{target: targetMotion.position});
					}
				} else {
					var _p118 = _p116._0;
					if (_p118.ctor === 'Easing') {
						return _elm_lang$core$Native_Utils.update(
							newMotion,
							{
								target: targetMotion.position,
								interpolationOverride: _elm_lang$core$Maybe$Just(
									_user$project$Animation_Model$Easing(
										_elm_lang$core$Native_Utils.update(
											_p118._0,
											{start: motion.position, progress: 0})))
							});
					} else {
						return _elm_lang$core$Native_Utils.update(
							newMotion,
							{target: targetMotion.position});
					}
				}
			});
		var _p119 = current;
		switch (_p119.ctor) {
			case 'ExactProperty':
				return A2(_user$project$Animation_Model$ExactProperty, _p119._0, _p119._1);
			case 'ColorProperty':
				var _p120 = newTarget;
				if (_p120.ctor === 'ColorProperty') {
					return A5(
						_user$project$Animation_Model$ColorProperty,
						_p119._0,
						A2(setMotionTarget, _p119._1, _p120._1),
						A2(setMotionTarget, _p119._2, _p120._2),
						A2(setMotionTarget, _p119._3, _p120._3),
						A2(setMotionTarget, _p119._4, _p120._4));
				} else {
					return current;
				}
			case 'ShadowProperty':
				var _p123 = _p119._2;
				var _p121 = newTarget;
				if (_p121.ctor === 'ShadowProperty') {
					var _p122 = _p121._2;
					return A3(
						_user$project$Animation_Model$ShadowProperty,
						_p119._0,
						_p119._1,
						{
							offsetX: A2(setMotionTarget, _p123.offsetX, _p122.offsetX),
							offsetY: A2(setMotionTarget, _p123.offsetY, _p122.offsetY),
							size: A2(setMotionTarget, _p123.size, _p122.size),
							blur: A2(setMotionTarget, _p123.blur, _p122.blur),
							red: A2(setMotionTarget, _p123.red, _p122.red),
							green: A2(setMotionTarget, _p123.green, _p122.green),
							blue: A2(setMotionTarget, _p123.blue, _p122.blue),
							alpha: A2(setMotionTarget, _p123.alpha, _p122.alpha)
						});
				} else {
					return current;
				}
			case 'Property':
				var _p124 = newTarget;
				if (_p124.ctor === 'Property') {
					return A2(
						_user$project$Animation_Model$Property,
						_p119._0,
						A2(setMotionTarget, _p119._1, _p124._1));
				} else {
					return current;
				}
			case 'Property2':
				var _p125 = newTarget;
				if (_p125.ctor === 'Property2') {
					return A3(
						_user$project$Animation_Model$Property2,
						_p119._0,
						A2(setMotionTarget, _p119._1, _p125._1),
						A2(setMotionTarget, _p119._2, _p125._2));
				} else {
					return current;
				}
			case 'Property3':
				var _p126 = newTarget;
				if (_p126.ctor === 'Property3') {
					return A4(
						_user$project$Animation_Model$Property3,
						_p119._0,
						A2(setMotionTarget, _p119._1, _p126._1),
						A2(setMotionTarget, _p119._2, _p126._2),
						A2(setMotionTarget, _p119._3, _p126._3));
				} else {
					return current;
				}
			case 'AngleProperty':
				var _p127 = newTarget;
				if (_p127.ctor === 'AngleProperty') {
					return A2(
						_user$project$Animation_Model$AngleProperty,
						_p119._0,
						A2(setMotionTarget, _p119._1, _p127._1));
				} else {
					return current;
				}
			case 'Points':
				var _p128 = newTarget;
				if (_p128.ctor === 'Points') {
					var _p129 = A2(_user$project$Animation_Model$matchPoints, _p119._0, _p128._0);
					var m1s = _p129._0;
					var m2s = _p129._1;
					return _user$project$Animation_Model$Points(
						A3(
							_elm_lang$core$List$map2,
							F2(
								function (_p131, _p130) {
									var _p132 = _p131;
									var _p133 = _p130;
									return {
										ctor: '_Tuple2',
										_0: A2(setMotionTarget, _p132._0, _p133._0),
										_1: A2(setMotionTarget, _p132._1, _p133._1)
									};
								}),
							m1s,
							m2s));
				} else {
					return current;
				}
			default:
				var _p134 = newTarget;
				if (_p134.ctor === 'Path') {
					return _user$project$Animation_Model$Path(
						A3(_elm_lang$core$List$map2, _user$project$Animation_Model$setPathTarget, _p119._0, _p134._0));
				} else {
					return current;
				}
		}
	});
var _user$project$Animation_Model$startTowards = F3(
	function (overrideInterp, current, target) {
		return A2(
			_elm_lang$core$List$filterMap,
			function (propPair) {
				var _p135 = propPair;
				if (_p135._1.ctor === 'Just') {
					return _elm_lang$core$Maybe$Just(
						A3(_user$project$Animation_Model$setTarget, overrideInterp, _p135._0, _p135._1._0));
				} else {
					return _elm_lang$core$Maybe$Just(_p135._0);
				}
			},
			A2(_user$project$Animation_Model$zipPropertiesGreedy, current, target));
	});
var _user$project$Animation_Model$stepPath = F2(
	function (dt, cmd) {
		var stepCoords = function (coords) {
			return A2(
				_elm_lang$core$List$map,
				function (_p136) {
					var _p137 = _p136;
					return {
						ctor: '_Tuple2',
						_0: A2(_user$project$Animation_Model$stepInterpolation, dt, _p137._0),
						_1: A2(_user$project$Animation_Model$stepInterpolation, dt, _p137._1)
					};
				},
				coords);
		};
		var _p138 = cmd;
		switch (_p138.ctor) {
			case 'Move':
				return A2(
					_user$project$Animation_Model$Move,
					A2(_user$project$Animation_Model$stepInterpolation, dt, _p138._0),
					A2(_user$project$Animation_Model$stepInterpolation, dt, _p138._1));
			case 'MoveTo':
				return A2(
					_user$project$Animation_Model$MoveTo,
					A2(_user$project$Animation_Model$stepInterpolation, dt, _p138._0),
					A2(_user$project$Animation_Model$stepInterpolation, dt, _p138._1));
			case 'Line':
				return A2(
					_user$project$Animation_Model$Line,
					A2(_user$project$Animation_Model$stepInterpolation, dt, _p138._0),
					A2(_user$project$Animation_Model$stepInterpolation, dt, _p138._1));
			case 'LineTo':
				return A2(
					_user$project$Animation_Model$LineTo,
					A2(_user$project$Animation_Model$stepInterpolation, dt, _p138._0),
					A2(_user$project$Animation_Model$stepInterpolation, dt, _p138._1));
			case 'Horizontal':
				return _user$project$Animation_Model$Horizontal(
					A2(_user$project$Animation_Model$stepInterpolation, dt, _p138._0));
			case 'HorizontalTo':
				return _user$project$Animation_Model$HorizontalTo(
					A2(_user$project$Animation_Model$stepInterpolation, dt, _p138._0));
			case 'Vertical':
				return _user$project$Animation_Model$Vertical(
					A2(_user$project$Animation_Model$stepInterpolation, dt, _p138._0));
			case 'VerticalTo':
				return _user$project$Animation_Model$VerticalTo(
					A2(_user$project$Animation_Model$stepInterpolation, dt, _p138._0));
			case 'Curve':
				var _p141 = _p138._0.point;
				var _p140 = _p138._0.control2;
				var _p139 = _p138._0.control1;
				return _user$project$Animation_Model$Curve(
					{
						control1: {
							ctor: '_Tuple2',
							_0: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$fst(_p139)),
							_1: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$snd(_p139))
						},
						control2: {
							ctor: '_Tuple2',
							_0: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$fst(_p140)),
							_1: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$snd(_p140))
						},
						point: {
							ctor: '_Tuple2',
							_0: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$fst(_p141)),
							_1: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$snd(_p141))
						}
					});
			case 'CurveTo':
				var _p144 = _p138._0.point;
				var _p143 = _p138._0.control2;
				var _p142 = _p138._0.control1;
				return _user$project$Animation_Model$CurveTo(
					{
						control1: {
							ctor: '_Tuple2',
							_0: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$fst(_p142)),
							_1: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$snd(_p142))
						},
						control2: {
							ctor: '_Tuple2',
							_0: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$fst(_p143)),
							_1: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$snd(_p143))
						},
						point: {
							ctor: '_Tuple2',
							_0: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$fst(_p144)),
							_1: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$snd(_p144))
						}
					});
			case 'Quadratic':
				var _p146 = _p138._0.point;
				var _p145 = _p138._0.control;
				return _user$project$Animation_Model$Quadratic(
					{
						control: {
							ctor: '_Tuple2',
							_0: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$fst(_p145)),
							_1: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$snd(_p145))
						},
						point: {
							ctor: '_Tuple2',
							_0: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$fst(_p146)),
							_1: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$snd(_p146))
						}
					});
			case 'QuadraticTo':
				var _p148 = _p138._0.point;
				var _p147 = _p138._0.control;
				return _user$project$Animation_Model$QuadraticTo(
					{
						control: {
							ctor: '_Tuple2',
							_0: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$fst(_p147)),
							_1: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$snd(_p147))
						},
						point: {
							ctor: '_Tuple2',
							_0: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$fst(_p148)),
							_1: A2(
								_user$project$Animation_Model$stepInterpolation,
								dt,
								_elm_lang$core$Basics$snd(_p148))
						}
					});
			case 'SmoothQuadratic':
				return _user$project$Animation_Model$SmoothQuadratic(
					stepCoords(_p138._0));
			case 'SmoothQuadraticTo':
				return _user$project$Animation_Model$SmoothQuadraticTo(
					stepCoords(_p138._0));
			case 'Smooth':
				return _user$project$Animation_Model$Smooth(
					stepCoords(_p138._0));
			case 'SmoothTo':
				return _user$project$Animation_Model$SmoothTo(
					stepCoords(_p138._0));
			case 'ClockwiseArc':
				var _p149 = _p138._0;
				return _user$project$Animation_Model$ClockwiseArc(
					_elm_lang$core$Native_Utils.update(
						_p149,
						{
							x: A2(_user$project$Animation_Model$stepInterpolation, dt, _p149.x),
							y: A2(_user$project$Animation_Model$stepInterpolation, dt, _p149.y),
							radius: A2(_user$project$Animation_Model$stepInterpolation, dt, _p149.radius),
							startAngle: A2(_user$project$Animation_Model$stepInterpolation, dt, _p149.startAngle),
							endAngle: A2(_user$project$Animation_Model$stepInterpolation, dt, _p149.endAngle)
						}));
			case 'AntiClockwiseArc':
				var _p150 = _p138._0;
				return _user$project$Animation_Model$AntiClockwiseArc(
					_elm_lang$core$Native_Utils.update(
						_p150,
						{
							x: A2(_user$project$Animation_Model$stepInterpolation, dt, _p150.x),
							y: A2(_user$project$Animation_Model$stepInterpolation, dt, _p150.y),
							radius: A2(_user$project$Animation_Model$stepInterpolation, dt, _p150.radius),
							startAngle: A2(_user$project$Animation_Model$stepInterpolation, dt, _p150.startAngle),
							endAngle: A2(_user$project$Animation_Model$stepInterpolation, dt, _p150.endAngle)
						}));
			default:
				return _user$project$Animation_Model$Close;
		}
	});
var _user$project$Animation_Model$step = F2(
	function (dt, props) {
		var stepProp = function (property) {
			var _p151 = property;
			switch (_p151.ctor) {
				case 'ExactProperty':
					return A2(_user$project$Animation_Model$ExactProperty, _p151._0, _p151._1);
				case 'Property':
					return A2(
						_user$project$Animation_Model$Property,
						_p151._0,
						A2(_user$project$Animation_Model$stepInterpolation, dt, _p151._1));
				case 'Property2':
					return A3(
						_user$project$Animation_Model$Property2,
						_p151._0,
						A2(_user$project$Animation_Model$stepInterpolation, dt, _p151._1),
						A2(_user$project$Animation_Model$stepInterpolation, dt, _p151._2));
				case 'Property3':
					return A4(
						_user$project$Animation_Model$Property3,
						_p151._0,
						A2(_user$project$Animation_Model$stepInterpolation, dt, _p151._1),
						A2(_user$project$Animation_Model$stepInterpolation, dt, _p151._2),
						A2(_user$project$Animation_Model$stepInterpolation, dt, _p151._3));
				case 'AngleProperty':
					return A2(
						_user$project$Animation_Model$AngleProperty,
						_p151._0,
						A2(_user$project$Animation_Model$stepInterpolation, dt, _p151._1));
				case 'ColorProperty':
					return A5(
						_user$project$Animation_Model$ColorProperty,
						_p151._0,
						A2(_user$project$Animation_Model$stepInterpolation, dt, _p151._1),
						A2(_user$project$Animation_Model$stepInterpolation, dt, _p151._2),
						A2(_user$project$Animation_Model$stepInterpolation, dt, _p151._3),
						A2(_user$project$Animation_Model$stepInterpolation, dt, _p151._4));
				case 'ShadowProperty':
					var _p152 = _p151._2;
					return A3(
						_user$project$Animation_Model$ShadowProperty,
						_p151._0,
						_p151._1,
						{
							offsetX: A2(_user$project$Animation_Model$stepInterpolation, dt, _p152.offsetX),
							offsetY: A2(_user$project$Animation_Model$stepInterpolation, dt, _p152.offsetY),
							size: A2(_user$project$Animation_Model$stepInterpolation, dt, _p152.size),
							blur: A2(_user$project$Animation_Model$stepInterpolation, dt, _p152.blur),
							red: A2(_user$project$Animation_Model$stepInterpolation, dt, _p152.red),
							green: A2(_user$project$Animation_Model$stepInterpolation, dt, _p152.green),
							blue: A2(_user$project$Animation_Model$stepInterpolation, dt, _p152.blue),
							alpha: A2(_user$project$Animation_Model$stepInterpolation, dt, _p152.alpha)
						});
				case 'Points':
					return _user$project$Animation_Model$Points(
						A2(
							_elm_lang$core$List$map,
							function (_p153) {
								var _p154 = _p153;
								return {
									ctor: '_Tuple2',
									_0: A2(_user$project$Animation_Model$stepInterpolation, dt, _p154._0),
									_1: A2(_user$project$Animation_Model$stepInterpolation, dt, _p154._1)
								};
							},
							_p151._0));
				default:
					return _user$project$Animation_Model$Path(
						A2(
							_elm_lang$core$List$map,
							_user$project$Animation_Model$stepPath(dt),
							_p151._0));
			}
		};
		return A2(_elm_lang$core$List$map, stepProp, props);
	});
var _user$project$Animation_Model$resolveSteps = F3(
	function (currentStyle, steps, dt) {
		resolveSteps:
		while (true) {
			var _p155 = _elm_lang$core$List$head(steps);
			if (_p155.ctor === 'Nothing') {
				return {
					ctor: '_Tuple3',
					_0: currentStyle,
					_1: _elm_lang$core$Native_List.fromArray(
						[]),
					_2: _elm_lang$core$Native_List.fromArray(
						[])
				};
			} else {
				var _p156 = _p155._0;
				switch (_p156.ctor) {
					case 'Wait':
						var _p157 = _p156._0;
						if (_elm_lang$core$Native_Utils.cmp(_p157, 0) < 1) {
							var _v69 = currentStyle,
								_v70 = A2(_elm_lang$core$List$drop, 1, steps),
								_v71 = dt;
							currentStyle = _v69;
							steps = _v70;
							dt = _v71;
							continue resolveSteps;
						} else {
							return {
								ctor: '_Tuple3',
								_0: currentStyle,
								_1: _elm_lang$core$Native_List.fromArray(
									[]),
								_2: A2(
									_elm_lang$core$List_ops['::'],
									_user$project$Animation_Model$Wait(_p157 - dt),
									A2(_elm_lang$core$List$drop, 1, steps))
							};
						}
					case 'Send':
						var _p158 = A3(
							_user$project$Animation_Model$resolveSteps,
							currentStyle,
							A2(_elm_lang$core$List$drop, 1, steps),
							dt);
						var newStyle = _p158._0;
						var msgs = _p158._1;
						var remainingSteps = _p158._2;
						return {
							ctor: '_Tuple3',
							_0: newStyle,
							_1: A2(_elm_lang$core$List_ops['::'], _p156._0, msgs),
							_2: remainingSteps
						};
					case 'To':
						var _v72 = A3(_user$project$Animation_Model$startTowards, false, currentStyle, _p156._0),
							_v73 = A2(
							_elm_lang$core$List_ops['::'],
							_user$project$Animation_Model$Step,
							A2(_elm_lang$core$List$drop, 1, steps)),
							_v74 = dt;
						currentStyle = _v72;
						steps = _v73;
						dt = _v74;
						continue resolveSteps;
					case 'ToWith':
						var _v75 = A3(_user$project$Animation_Model$startTowards, true, currentStyle, _p156._0),
							_v76 = A2(
							_elm_lang$core$List_ops['::'],
							_user$project$Animation_Model$Step,
							A2(_elm_lang$core$List$drop, 1, steps)),
							_v77 = dt;
						currentStyle = _v75;
						steps = _v76;
						dt = _v77;
						continue resolveSteps;
					case 'Set':
						var _v78 = A2(_user$project$Animation_Model$replaceProps, currentStyle, _p156._0),
							_v79 = A2(_elm_lang$core$List$drop, 1, steps),
							_v80 = dt;
						currentStyle = _v78;
						steps = _v79;
						dt = _v80;
						continue resolveSteps;
					case 'Step':
						var stepped = A2(_user$project$Animation_Model$step, dt, currentStyle);
						return A2(_elm_lang$core$List$all, _user$project$Animation_Model$isDone, stepped) ? {
							ctor: '_Tuple3',
							_0: A2(
								_elm_lang$core$List$map,
								_user$project$Animation_Model$mapToMotion(
									function (m) {
										return _elm_lang$core$Native_Utils.update(
											m,
											{interpolationOverride: _elm_lang$core$Maybe$Nothing});
									}),
								stepped),
							_1: _elm_lang$core$Native_List.fromArray(
								[]),
							_2: A2(_elm_lang$core$List$drop, 1, steps)
						} : {
							ctor: '_Tuple3',
							_0: stepped,
							_1: _elm_lang$core$Native_List.fromArray(
								[]),
							_2: steps
						};
					case 'Loop':
						var _p159 = _p156._0;
						var _v81 = currentStyle,
							_v82 = A2(
							_elm_lang$core$Basics_ops['++'],
							_p159,
							_elm_lang$core$Native_List.fromArray(
								[
									_user$project$Animation_Model$Loop(_p159)
								])),
							_v83 = dt;
						currentStyle = _v81;
						steps = _v82;
						dt = _v83;
						continue resolveSteps;
					default:
						var _p161 = _p156._1;
						var _p160 = _p156._0;
						if (_elm_lang$core$Native_Utils.eq(_p160, 0)) {
							return {
								ctor: '_Tuple3',
								_0: currentStyle,
								_1: _elm_lang$core$Native_List.fromArray(
									[]),
								_2: A2(_elm_lang$core$List$drop, 1, _p161)
							};
						} else {
							var _v84 = currentStyle,
								_v85 = A2(
								_elm_lang$core$Basics_ops['++'],
								_p161,
								_elm_lang$core$Native_List.fromArray(
									[
										A2(_user$project$Animation_Model$Repeat, _p160 - 1, _p161)
									])),
								_v86 = dt;
							currentStyle = _v84;
							steps = _v85;
							dt = _v86;
							continue resolveSteps;
						}
				}
			}
		}
	});
var _user$project$Animation_Model$updateAnimation = F2(
	function (_p163, _p162) {
		var _p164 = _p163;
		var _p165 = _p162;
		var _p174 = _p165._0;
		var timing = A2(_user$project$Animation_Model$refreshTiming, _p164._0, _p174.timing);
		var _p166 = A2(
			_elm_lang$core$List$partition,
			function (_p167) {
				var _p168 = _p167;
				return _elm_lang$core$Native_Utils.cmp(_p168._0, 0) < 1;
			},
			A2(
				_elm_lang$core$List$map,
				function (_p169) {
					var _p170 = _p169;
					return {ctor: '_Tuple2', _0: _p170._0 - timing.dt, _1: _p170._1};
				},
				_p174.interruption));
		var readyInterruption = _p166._0;
		var queuedInterruptions = _p166._1;
		var _p171 = function () {
			var _p172 = _elm_lang$core$List$head(readyInterruption);
			if (_p172.ctor === 'Just') {
				return {
					ctor: '_Tuple2',
					_0: _p172._0._1,
					_1: A2(
						_elm_lang$core$List$map,
						_user$project$Animation_Model$mapToMotion(
							function (m) {
								return _elm_lang$core$Native_Utils.update(
									m,
									{interpolationOverride: _elm_lang$core$Maybe$Nothing});
							}),
						_p174.style)
				};
			} else {
				return {ctor: '_Tuple2', _0: _p174.steps, _1: _p174.style};
			}
		}();
		var steps = _p171._0;
		var style = _p171._1;
		var _p173 = A3(_user$project$Animation_Model$resolveSteps, style, steps, timing.dt);
		var revisedStyle = _p173._0;
		var sentMessages = _p173._1;
		var revisedSteps = _p173._2;
		return {
			ctor: '_Tuple2',
			_0: _user$project$Animation_Model$Animation(
				_elm_lang$core$Native_Utils.update(
					_p174,
					{
						timing: timing,
						interruption: queuedInterruptions,
						running: (!_elm_lang$core$Native_Utils.eq(
							_elm_lang$core$List$length(revisedSteps),
							0)) || (!_elm_lang$core$Native_Utils.eq(
							_elm_lang$core$List$length(queuedInterruptions),
							0)),
						steps: revisedSteps,
						style: revisedStyle
					})),
			_1: _elm_lang$core$Platform_Cmd$batch(
				A2(
					_elm_lang$core$List$map,
					function (m) {
						return A3(
							_elm_lang$core$Task$perform,
							_elm_lang$core$Basics$identity,
							_elm_lang$core$Basics$identity,
							_elm_lang$core$Task$succeed(m));
					},
					sentMessages))
		};
	});

var _user$project$Animation$pathCmdValue = function (cmd) {
	var renderPoints = function (coords) {
		return A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				function (_p0) {
					var _p1 = _p0;
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p1._0.position),
						A2(
							_elm_lang$core$Basics_ops['++'],
							',',
							_elm_lang$core$Basics$toString(_p1._1.position)));
				},
				coords));
	};
	var _p2 = cmd;
	switch (_p2.ctor) {
		case 'Move':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'm ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p2._0.position),
					A2(
						_elm_lang$core$Basics_ops['++'],
						',',
						_elm_lang$core$Basics$toString(_p2._1.position))));
		case 'MoveTo':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'M ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p2._0.position),
					A2(
						_elm_lang$core$Basics_ops['++'],
						',',
						_elm_lang$core$Basics$toString(_p2._1.position))));
		case 'Line':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'l ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p2._0.position),
					A2(
						_elm_lang$core$Basics_ops['++'],
						',',
						_elm_lang$core$Basics$toString(_p2._1.position))));
		case 'LineTo':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'L ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p2._0.position),
					A2(
						_elm_lang$core$Basics_ops['++'],
						',',
						_elm_lang$core$Basics$toString(_p2._1.position))));
		case 'Horizontal':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'h ',
				_elm_lang$core$Basics$toString(_p2._0.position));
		case 'HorizontalTo':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'H ',
				_elm_lang$core$Basics$toString(_p2._0.position));
		case 'Vertical':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'v ',
				_elm_lang$core$Basics$toString(_p2._0.position));
		case 'VerticalTo':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'V ',
				_elm_lang$core$Basics$toString(_p2._0.position));
		case 'Curve':
			var _p5 = _p2._0.point;
			var _p4 = _p2._0.control2;
			var _p3 = _p2._0.control1;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'c ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						_elm_lang$core$Basics$fst(_p3)),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(
								_elm_lang$core$Basics$fst(_p3)),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_elm_lang$core$Basics$fst(_p4)),
									A2(
										_elm_lang$core$Basics_ops['++'],
										' ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(
												_elm_lang$core$Basics$fst(_p4)),
											A2(
												_elm_lang$core$Basics_ops['++'],
												', ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(
														_elm_lang$core$Basics$fst(_p5)),
													A2(
														_elm_lang$core$Basics_ops['++'],
														' ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString(
																_elm_lang$core$Basics$fst(_p5)),
															' '))))))))))));
		case 'CurveTo':
			var _p8 = _p2._0.point;
			var _p7 = _p2._0.control2;
			var _p6 = _p2._0.control1;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'C ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						_elm_lang$core$Basics$fst(_p6)),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(
								_elm_lang$core$Basics$fst(_p6)),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_elm_lang$core$Basics$fst(_p7)),
									A2(
										_elm_lang$core$Basics_ops['++'],
										' ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(
												_elm_lang$core$Basics$fst(_p7)),
											A2(
												_elm_lang$core$Basics_ops['++'],
												', ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(
														_elm_lang$core$Basics$fst(_p8)),
													A2(
														_elm_lang$core$Basics_ops['++'],
														' ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString(
																_elm_lang$core$Basics$fst(_p8)),
															' '))))))))))));
		case 'Quadratic':
			var _p10 = _p2._0.point;
			var _p9 = _p2._0.control;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'q ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						_elm_lang$core$Basics$fst(_p9)),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(
								_elm_lang$core$Basics$fst(_p9)),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_elm_lang$core$Basics$fst(_p10)),
									A2(
										_elm_lang$core$Basics_ops['++'],
										' ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(
												_elm_lang$core$Basics$fst(_p10)),
											' '))))))));
		case 'QuadraticTo':
			var _p12 = _p2._0.point;
			var _p11 = _p2._0.control;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'Q ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						_elm_lang$core$Basics$fst(_p11)),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(
								_elm_lang$core$Basics$fst(_p11)),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_elm_lang$core$Basics$fst(_p12)),
									A2(
										_elm_lang$core$Basics_ops['++'],
										' ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(
												_elm_lang$core$Basics$fst(_p12)),
											' '))))))));
		case 'SmoothQuadratic':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				't ',
				renderPoints(_p2._0));
		case 'SmoothQuadraticTo':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'T ',
				renderPoints(_p2._0));
		case 'Smooth':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				's ',
				renderPoints(_p2._0));
		case 'SmoothTo':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'S ',
				renderPoints(_p2._0));
		case 'ClockwiseArc':
			var _p13 = _p2._0;
			var deltaAngle = _p13.endAngle.position - _p13.startAngle.position;
			if (_elm_lang$core$Native_Utils.cmp(deltaAngle, 360 - 1.0e-6) > 0) {
				var dy = _p13.radius.position * _elm_lang$core$Basics$sin(
					_elm_lang$core$Basics$degrees(_p13.startAngle.position));
				var dx = _p13.radius.position * _elm_lang$core$Basics$cos(
					_elm_lang$core$Basics$degrees(_p13.startAngle.position));
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'A ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p13.radius.position),
						A2(
							_elm_lang$core$Basics_ops['++'],
							',',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p13.radius.position),
								A2(
									_elm_lang$core$Basics_ops['++'],
									',0,1,1,',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p13.x.position - dx),
										A2(
											_elm_lang$core$Basics_ops['++'],
											',',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p13.y.position - dy),
												A2(
													_elm_lang$core$Basics_ops['++'],
													' A ',
													A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Basics$toString(_p13.radius.position),
														A2(
															_elm_lang$core$Basics_ops['++'],
															',',
															A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString(_p13.radius.position),
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	',0,1,1,',
																	A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(_p13.x.position + dx),
																		A2(
																			_elm_lang$core$Basics_ops['++'],
																			',',
																			_elm_lang$core$Basics$toString(_p13.y.position + dy))))))))))))))));
			} else {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'A ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p13.radius.position),
						A2(
							_elm_lang$core$Basics_ops['++'],
							',',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p13.radius.position),
								A2(
									_elm_lang$core$Basics_ops['++'],
									' 0 ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										(_elm_lang$core$Native_Utils.cmp(deltaAngle, 180) > -1) ? '1' : '0',
										A2(
											_elm_lang$core$Basics_ops['++'],
											' ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												'1',
												A2(
													_elm_lang$core$Basics_ops['++'],
													' ',
													A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Basics$toString(
															_p13.x.position + (_p13.radius.position * _elm_lang$core$Basics$cos(
																_elm_lang$core$Basics$degrees(_p13.endAngle.position)))),
														A2(
															_elm_lang$core$Basics_ops['++'],
															',',
															_elm_lang$core$Basics$toString(
																_p13.y.position + (_p13.radius.position * _elm_lang$core$Basics$sin(
																	_elm_lang$core$Basics$degrees(_p13.endAngle.position)))))))))))))));
			}
		case 'AntiClockwiseArc':
			var _p14 = _p2._0;
			var deltaAngle = _p14.endAngle.position - _p14.startAngle.position;
			if (_elm_lang$core$Native_Utils.cmp(deltaAngle, 360 - 1.0e-6) > 0) {
				var dy = _p14.radius.position * _elm_lang$core$Basics$sin(
					_elm_lang$core$Basics$degrees(_p14.startAngle.position));
				var dx = _p14.radius.position * _elm_lang$core$Basics$cos(
					_elm_lang$core$Basics$degrees(_p14.startAngle.position));
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'A ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p14.radius.position),
						A2(
							_elm_lang$core$Basics_ops['++'],
							',',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p14.radius.position),
								A2(
									_elm_lang$core$Basics_ops['++'],
									',0,1,0,',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p14.x.position - dx),
										A2(
											_elm_lang$core$Basics_ops['++'],
											',',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p14.y.position - dy),
												A2(
													_elm_lang$core$Basics_ops['++'],
													' A ',
													A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Basics$toString(_p14.radius.position),
														A2(
															_elm_lang$core$Basics_ops['++'],
															',',
															A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString(_p14.radius.position),
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	',0,1,1,',
																	A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(_p14.x.position + dx),
																		A2(
																			_elm_lang$core$Basics_ops['++'],
																			',',
																			_elm_lang$core$Basics$toString(_p14.y.position + dy))))))))))))))));
			} else {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'A ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p14.radius.position),
						A2(
							_elm_lang$core$Basics_ops['++'],
							',',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p14.radius.position),
								A2(
									_elm_lang$core$Basics_ops['++'],
									' 0 ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										(_elm_lang$core$Native_Utils.cmp(_p14.startAngle.position - _p14.endAngle.position, 180) > -1) ? '1' : '0',
										A2(
											_elm_lang$core$Basics_ops['++'],
											' ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												'0',
												A2(
													_elm_lang$core$Basics_ops['++'],
													' ',
													A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Basics$toString(
															_p14.x.position + (_p14.radius.position * _elm_lang$core$Basics$cos(_p14.endAngle.position))),
														A2(
															_elm_lang$core$Basics_ops['++'],
															',',
															_elm_lang$core$Basics$toString(
																_p14.y.position + (_p14.radius.position * _elm_lang$core$Basics$sin(_p14.endAngle.position))))))))))))));
			}
		default:
			return 'z';
	}
};
var _user$project$Animation$propertyValue = F2(
	function (prop, delim) {
		var _p15 = prop;
		switch (_p15.ctor) {
			case 'ExactProperty':
				return _p15._1;
			case 'ColorProperty':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'rgba(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(
							_elm_lang$core$Basics$round(_p15._1.position)),
						A2(
							_elm_lang$core$Basics_ops['++'],
							',',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(
									_elm_lang$core$Basics$round(_p15._2.position)),
								A2(
									_elm_lang$core$Basics_ops['++'],
									',',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(
											_elm_lang$core$Basics$round(_p15._3.position)),
										A2(
											_elm_lang$core$Basics_ops['++'],
											',',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p15._4.position),
												')'))))))));
			case 'ShadowProperty':
				var _p16 = _p15._2;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_p15._1 ? 'inset ' : '',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p16.offsetX.position),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'px',
							A2(
								_elm_lang$core$Basics_ops['++'],
								' ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p16.offsetY.position),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'px',
										A2(
											_elm_lang$core$Basics_ops['++'],
											' ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p16.blur.position),
												A2(
													_elm_lang$core$Basics_ops['++'],
													'px',
													A2(
														_elm_lang$core$Basics_ops['++'],
														' ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString(_p16.size.position),
															A2(
																_elm_lang$core$Basics_ops['++'],
																'px',
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	' ',
																	A2(
																		_elm_lang$core$Basics_ops['++'],
																		'rgba(',
																		A2(
																			_elm_lang$core$Basics_ops['++'],
																			_elm_lang$core$Basics$toString(
																				_elm_lang$core$Basics$round(_p16.red.position)),
																			A2(
																				_elm_lang$core$Basics_ops['++'],
																				', ',
																				A2(
																					_elm_lang$core$Basics_ops['++'],
																					_elm_lang$core$Basics$toString(
																						_elm_lang$core$Basics$round(_p16.green.position)),
																					A2(
																						_elm_lang$core$Basics_ops['++'],
																						', ',
																						A2(
																							_elm_lang$core$Basics_ops['++'],
																							_elm_lang$core$Basics$toString(
																								_elm_lang$core$Basics$round(_p16.blue.position)),
																							A2(
																								_elm_lang$core$Basics_ops['++'],
																								', ',
																								A2(
																									_elm_lang$core$Basics_ops['++'],
																									_elm_lang$core$Basics$toString(_p16.alpha.position),
																									')')))))))))))))))))))));
			case 'Property':
				var _p17 = _p15._1;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p17.position),
					_p17.unit);
			case 'Property2':
				var _p19 = _p15._2;
				var _p18 = _p15._1;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p18.position),
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p18.unit,
						A2(
							_elm_lang$core$Basics_ops['++'],
							delim,
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p19.position),
								_p19.unit))));
			case 'Property3':
				var _p22 = _p15._3;
				var _p21 = _p15._2;
				var _p20 = _p15._1;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p20.position),
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p20.unit,
						A2(
							_elm_lang$core$Basics_ops['++'],
							delim,
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p21.position),
								A2(
									_elm_lang$core$Basics_ops['++'],
									_p21.unit,
									A2(
										_elm_lang$core$Basics_ops['++'],
										delim,
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(_p22.position),
											_p22.unit)))))));
			case 'AngleProperty':
				var _p23 = _p15._1;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p23.position),
					_p23.unit);
			case 'Points':
				return A2(
					_elm_lang$core$String$join,
					' ',
					A2(
						_elm_lang$core$List$map,
						function (_p24) {
							var _p25 = _p24;
							return A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p25._0.position),
								A2(
									_elm_lang$core$Basics_ops['++'],
									',',
									_elm_lang$core$Basics$toString(_p25._1.position)));
						},
						_p15._0));
			default:
				return A2(
					_elm_lang$core$String$join,
					' ',
					A2(_elm_lang$core$List$map, _user$project$Animation$pathCmdValue, _p15._0));
		}
	});
var _user$project$Animation$displayModeName = function (mode) {
	var _p26 = mode;
	switch (_p26.ctor) {
		case 'None':
			return 'none';
		case 'Inline':
			return 'inline';
		case 'InlineBlock':
			return 'inline-block';
		case 'Block':
			return 'block';
		case 'Flex':
			return 'flex';
		case 'InlineFlex':
			return 'inline-flex';
		default:
			return 'list-item';
	}
};
var _user$project$Animation$isAttr = function (prop) {
	var _p27 = prop;
	switch (_p27.ctor) {
		case 'Points':
			return true;
		case 'Path':
			return true;
		default:
			return false;
	}
};
var _user$project$Animation$webkitPrefix = '-webkit-';
var _user$project$Animation$iePrefix = '-ms-';
var _user$project$Animation$prefix = function (stylePair) {
	var propValue = _elm_lang$core$Basics$snd(stylePair);
	var propName = _elm_lang$core$Basics$fst(stylePair);
	var _p28 = propName;
	switch (_p28) {
		case 'transform':
			return _elm_lang$core$Native_List.fromArray(
				[
					stylePair,
					{
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$Basics_ops['++'], _user$project$Animation$iePrefix, propName),
					_1: propValue
				},
					{
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$Basics_ops['++'], _user$project$Animation$webkitPrefix, propName),
					_1: propValue
				}
				]);
		case 'transform-origin':
			return _elm_lang$core$Native_List.fromArray(
				[
					stylePair,
					{
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$Basics_ops['++'], _user$project$Animation$iePrefix, propName),
					_1: propValue
				},
					{
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$Basics_ops['++'], _user$project$Animation$webkitPrefix, propName),
					_1: propValue
				}
				]);
		case 'filter':
			return _elm_lang$core$Native_List.fromArray(
				[
					stylePair,
					{
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$Basics_ops['++'], _user$project$Animation$iePrefix, propName),
					_1: propValue
				},
					{
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$Basics_ops['++'], _user$project$Animation$webkitPrefix, propName),
					_1: propValue
				}
				]);
		default:
			return _elm_lang$core$Native_List.fromArray(
				[stylePair]);
	}
};
var _user$project$Animation$isFilter = function (prop) {
	return A2(
		_elm_lang$core$List$member,
		_user$project$Animation_Model$propertyName(prop),
		_elm_lang$core$Native_List.fromArray(
			['filter-url', 'blur', 'brightness', 'contrast', 'grayscale', 'hue-rotate', 'invert', 'saturate', 'sepia']));
};
var _user$project$Animation$isTransformation = function (prop) {
	return A2(
		_elm_lang$core$List$member,
		_user$project$Animation_Model$propertyName(prop),
		_elm_lang$core$Native_List.fromArray(
			['rotate', 'rotate3d', 'transform', 'transform3d', 'scale', 'scale3d']));
};
var _user$project$Animation$renderAttrs = function (prop) {
	var _p29 = prop;
	switch (_p29.ctor) {
		case 'Points':
			return _elm_lang$core$Maybe$Just(
				_elm_lang$svg$Svg_Attributes$points(
					A2(
						_user$project$Animation$propertyValue,
						_user$project$Animation_Model$Points(_p29._0),
						' ')));
		case 'Path':
			return _elm_lang$core$Maybe$Just(
				_elm_lang$svg$Svg_Attributes$d(
					A2(
						_user$project$Animation$propertyValue,
						_user$project$Animation_Model$Path(_p29._0),
						' ')));
		default:
			return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Animation$render = function (_p30) {
	var _p31 = _p30;
	var _p32 = A2(_elm_lang$core$List$partition, _user$project$Animation$isAttr, _p31._0.style);
	var attrProps = _p32._0;
	var styleProps = _p32._1;
	var _p33 = A3(
		_elm_lang$core$List$foldl,
		F2(
			function (prop, _p34) {
				var _p35 = _p34;
				var _p38 = _p35._1;
				var _p37 = _p35._0;
				var _p36 = _p35._2;
				return _user$project$Animation$isTransformation(prop) ? {
					ctor: '_Tuple3',
					_0: _p37,
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_p38,
						_elm_lang$core$Native_List.fromArray(
							[prop])),
					_2: _p36
				} : (_user$project$Animation$isFilter(prop) ? {
					ctor: '_Tuple3',
					_0: _p37,
					_1: _p38,
					_2: A2(
						_elm_lang$core$Basics_ops['++'],
						_p36,
						_elm_lang$core$Native_List.fromArray(
							[prop]))
				} : {
					ctor: '_Tuple3',
					_0: A2(
						_elm_lang$core$Basics_ops['++'],
						_p37,
						_elm_lang$core$Native_List.fromArray(
							[prop])),
					_1: _p38,
					_2: _p36
				});
			}),
		{
			ctor: '_Tuple3',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: _elm_lang$core$Native_List.fromArray(
				[]),
			_2: _elm_lang$core$Native_List.fromArray(
				[])
		},
		styleProps);
	var style = _p33._0;
	var transforms = _p33._1;
	var filters = _p33._2;
	var renderedStyle = A2(
		_elm_lang$core$List$map,
		function (prop) {
			return {
				ctor: '_Tuple2',
				_0: _user$project$Animation_Model$propertyName(prop),
				_1: A2(_user$project$Animation$propertyValue, prop, ' ')
			};
		},
		style);
	var renderedTransforms = _elm_lang$core$List$isEmpty(transforms) ? _elm_lang$core$Native_List.fromArray(
		[]) : _elm_lang$core$Native_List.fromArray(
		[
			{
			ctor: '_Tuple2',
			_0: 'transform',
			_1: _elm_lang$core$String$concat(
				A2(
					_elm_lang$core$List$map,
					function (prop) {
						return A2(
							_elm_lang$core$Basics_ops['++'],
							_user$project$Animation_Model$propertyName(prop),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'(',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(_user$project$Animation$propertyValue, prop, ', '),
									')')));
					},
					transforms))
		}
		]);
	var renderedFilters = _elm_lang$core$List$isEmpty(filters) ? _elm_lang$core$Native_List.fromArray(
		[]) : _elm_lang$core$Native_List.fromArray(
		[
			{
			ctor: '_Tuple2',
			_0: 'filter',
			_1: A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					function (prop) {
						var name = _user$project$Animation_Model$propertyName(prop);
						return _elm_lang$core$Native_Utils.eq(name, 'filter-url') ? A2(
							_elm_lang$core$Basics_ops['++'],
							'url(\"',
							A2(
								_elm_lang$core$Basics_ops['++'],
								A2(_user$project$Animation$propertyValue, prop, ', '),
								'\")')) : A2(
							_elm_lang$core$Basics_ops['++'],
							_user$project$Animation_Model$propertyName(prop),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'(',
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(_user$project$Animation$propertyValue, prop, ', '),
									')')));
					},
					filters))
		}
		]);
	var styleAttr = _elm_lang$html$Html_Attributes$style(
		A2(
			_elm_lang$core$List$concatMap,
			_user$project$Animation$prefix,
			A2(
				_elm_lang$core$Basics_ops['++'],
				renderedTransforms,
				A2(_elm_lang$core$Basics_ops['++'], renderedFilters, renderedStyle))));
	var otherAttrs = A2(_elm_lang$core$List$filterMap, _user$project$Animation$renderAttrs, attrProps);
	return A2(_elm_lang$core$List_ops['::'], styleAttr, otherAttrs);
};
var _user$project$Animation$alignStartingPoint = function (points) {
	var sums = A2(
		_elm_lang$core$List$map,
		function (_p39) {
			var _p40 = _p39;
			return _p40._0 + _p40._1;
		},
		points);
	var maybeMin = _elm_lang$core$List$minimum(sums);
	var indexOfLowestPoint = function () {
		var _p41 = maybeMin;
		if (_p41.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			return _elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$filterMap,
					_elm_lang$core$Basics$identity,
					A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (i, val) {
								return _elm_lang$core$Native_Utils.eq(val, _p41._0) ? _elm_lang$core$Maybe$Just(i) : _elm_lang$core$Maybe$Nothing;
							}),
						sums)));
		}
	}();
	var _p42 = indexOfLowestPoint;
	if (_p42.ctor === 'Nothing') {
		return points;
	} else {
		var _p43 = _p42._0;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			A2(_elm_lang$core$List$drop, _p43, points),
			A2(_elm_lang$core$List$take, _p43, points));
	}
};
var _user$project$Animation$close = _user$project$Animation_Model$Close;
var _user$project$Animation$path = function (commands) {
	return _user$project$Animation_Model$Path(commands);
};
var _user$project$Animation$display = function (mode) {
	return A2(
		_user$project$Animation_Model$ExactProperty,
		'display',
		_user$project$Animation$displayModeName(mode));
};
var _user$project$Animation$exactly = F2(
	function (name, value) {
		return A2(_user$project$Animation_Model$ExactProperty, name, value);
	});
var _user$project$Animation$filterUrl = function (url) {
	return A2(_user$project$Animation$exactly, 'filter-url', url);
};
var _user$project$Animation$initMotion = F2(
	function (position, unit) {
		return {
			position: position,
			velocity: 0,
			target: position,
			unit: unit,
			interpolation: _user$project$Animation_Model$Spring(
				{stiffness: 170, damping: 26}),
			interpolationOverride: _elm_lang$core$Maybe$Nothing
		};
	});
var _user$project$Animation$length = F3(
	function (name, x, unit) {
		return A2(
			_user$project$Animation_Model$Property,
			name,
			A2(_user$project$Animation$initMotion, x, unit));
	});
var _user$project$Animation$strokeWidth = function (x) {
	return A3(_user$project$Animation$length, 'stroke-width', x, '');
};
var _user$project$Animation$length2 = F3(
	function (name, _p45, _p44) {
		var _p46 = _p45;
		var _p47 = _p44;
		return A3(
			_user$project$Animation_Model$Property2,
			name,
			A2(_user$project$Animation$initMotion, _p46._0, _p46._1),
			A2(_user$project$Animation$initMotion, _p47._0, _p47._1));
	});
var _user$project$Animation$length3 = F4(
	function (name, _p50, _p49, _p48) {
		var _p51 = _p50;
		var _p52 = _p49;
		var _p53 = _p48;
		return A4(
			_user$project$Animation_Model$Property3,
			name,
			A2(_user$project$Animation$initMotion, _p51._0, _p51._1),
			A2(_user$project$Animation$initMotion, _p52._0, _p52._1),
			A2(_user$project$Animation$initMotion, _p53._0, _p53._1));
	});
var _user$project$Animation$rotate3d = F3(
	function (_p56, _p55, _p54) {
		var _p57 = _p56;
		var _p58 = _p55;
		var _p59 = _p54;
		return A4(
			_user$project$Animation$length3,
			'rotate3d',
			{ctor: '_Tuple2', _0: _p57._0, _1: 'rad'},
			{ctor: '_Tuple2', _0: _p58._0, _1: 'rad'},
			{ctor: '_Tuple2', _0: _p59._0, _1: 'rad'});
	});
var _user$project$Animation$colorProp = F2(
	function (name, color) {
		var _p60 = _elm_lang$core$Color$toRgb(color);
		var red = _p60.red;
		var green = _p60.green;
		var blue = _p60.blue;
		var alpha = _p60.alpha;
		return A5(
			_user$project$Animation_Model$ColorProperty,
			name,
			A2(
				_user$project$Animation$initMotion,
				_elm_lang$core$Basics$toFloat(red),
				''),
			A2(
				_user$project$Animation$initMotion,
				_elm_lang$core$Basics$toFloat(green),
				''),
			A2(
				_user$project$Animation$initMotion,
				_elm_lang$core$Basics$toFloat(blue),
				''),
			A2(_user$project$Animation$initMotion, alpha, ''));
	});
var _user$project$Animation$color = function (c) {
	return A2(_user$project$Animation$colorProp, 'color', c);
};
var _user$project$Animation$backgroundColor = function (c) {
	return A2(_user$project$Animation$colorProp, 'background-color', c);
};
var _user$project$Animation$borderColor = function (c) {
	return A2(_user$project$Animation$colorProp, 'border-color', c);
};
var _user$project$Animation$fill = function (color) {
	return A2(_user$project$Animation$colorProp, 'fill', color);
};
var _user$project$Animation$stroke = function (color) {
	return A2(_user$project$Animation$colorProp, 'stroke', color);
};
var _user$project$Animation$custom = F3(
	function (name, value, unit) {
		return A2(
			_user$project$Animation_Model$Property,
			name,
			A2(_user$project$Animation$initMotion, value, unit));
	});
var _user$project$Animation$opacity = function (x) {
	return A3(_user$project$Animation$custom, 'opacity', x, '');
};
var _user$project$Animation$scale = function (x) {
	return A3(_user$project$Animation$custom, 'scale', x, '');
};
var _user$project$Animation$x = function (x) {
	return A3(_user$project$Animation$custom, 'x', x, '');
};
var _user$project$Animation$y = function (y) {
	return A3(_user$project$Animation$custom, 'y', y, '');
};
var _user$project$Animation$cx = function (x) {
	return A3(_user$project$Animation$custom, 'cx', x, '');
};
var _user$project$Animation$cy = function (y) {
	return A3(_user$project$Animation$custom, 'cy', y, '');
};
var _user$project$Animation$radius = function (r) {
	return A3(_user$project$Animation$custom, 'r', r, '');
};
var _user$project$Animation$radiusX = function (rx) {
	return A3(_user$project$Animation$custom, 'rx', rx, '');
};
var _user$project$Animation$radiusY = function (ry) {
	return A3(_user$project$Animation$custom, 'ry', ry, '');
};
var _user$project$Animation$brightness = function (x) {
	return A3(_user$project$Animation$custom, 'brightness', x, '%');
};
var _user$project$Animation$contrast = function (x) {
	return A3(_user$project$Animation$custom, 'contrast', x, '%');
};
var _user$project$Animation$grayscale = function (x) {
	return A3(_user$project$Animation$custom, 'grayscale', x, '%');
};
var _user$project$Animation$greyscale = function (x) {
	return _user$project$Animation$grayscale(x);
};
var _user$project$Animation$invert = function (x) {
	return A3(_user$project$Animation$custom, 'invert', x, '%');
};
var _user$project$Animation$saturate = function (x) {
	return A3(_user$project$Animation$custom, 'saturate', x, '%');
};
var _user$project$Animation$sepia = function (x) {
	return A3(_user$project$Animation$custom, 'sepia', x, '%');
};
var _user$project$Animation$scale3d = F3(
	function (x, y, z) {
		return A4(
			_user$project$Animation_Model$Property3,
			'scale3d',
			A2(_user$project$Animation$initMotion, x, ''),
			A2(_user$project$Animation$initMotion, y, ''),
			A2(_user$project$Animation$initMotion, z, ''));
	});
var _user$project$Animation$rotate = function (_p61) {
	var _p62 = _p61;
	return A2(
		_user$project$Animation_Model$AngleProperty,
		'rotate',
		A2(_user$project$Animation$initMotion, _p62._0, 'rad'));
};
var _user$project$Animation$textShadow = function (shade) {
	var _p63 = _elm_lang$core$Color$toRgb(shade.color);
	var red = _p63.red;
	var green = _p63.green;
	var blue = _p63.blue;
	var alpha = _p63.alpha;
	return A3(
		_user$project$Animation_Model$ShadowProperty,
		'text-shadow',
		false,
		{
			offsetX: A2(_user$project$Animation$initMotion, shade.offsetX, 'px'),
			offsetY: A2(_user$project$Animation$initMotion, shade.offsetY, 'px'),
			size: A2(_user$project$Animation$initMotion, shade.size, 'px'),
			blur: A2(_user$project$Animation$initMotion, shade.blur, 'px'),
			red: A2(
				_user$project$Animation$initMotion,
				_elm_lang$core$Basics$toFloat(red),
				'px'),
			green: A2(
				_user$project$Animation$initMotion,
				_elm_lang$core$Basics$toFloat(green),
				'px'),
			blue: A2(
				_user$project$Animation$initMotion,
				_elm_lang$core$Basics$toFloat(blue),
				'px'),
			alpha: A2(_user$project$Animation$initMotion, alpha, 'px')
		});
};
var _user$project$Animation$shadow = function (shade) {
	var _p64 = _elm_lang$core$Color$toRgb(shade.color);
	var red = _p64.red;
	var green = _p64.green;
	var blue = _p64.blue;
	var alpha = _p64.alpha;
	return A3(
		_user$project$Animation_Model$ShadowProperty,
		'box-shadow',
		false,
		{
			offsetX: A2(_user$project$Animation$initMotion, shade.offsetX, 'px'),
			offsetY: A2(_user$project$Animation$initMotion, shade.offsetY, 'px'),
			size: A2(_user$project$Animation$initMotion, shade.size, 'px'),
			blur: A2(_user$project$Animation$initMotion, shade.blur, 'px'),
			red: A2(
				_user$project$Animation$initMotion,
				_elm_lang$core$Basics$toFloat(red),
				'px'),
			green: A2(
				_user$project$Animation$initMotion,
				_elm_lang$core$Basics$toFloat(green),
				'px'),
			blue: A2(
				_user$project$Animation$initMotion,
				_elm_lang$core$Basics$toFloat(blue),
				'px'),
			alpha: A2(_user$project$Animation$initMotion, alpha, 'px')
		});
};
var _user$project$Animation$insetShadow = function (shade) {
	var _p65 = _elm_lang$core$Color$toRgb(shade.color);
	var red = _p65.red;
	var green = _p65.green;
	var blue = _p65.blue;
	var alpha = _p65.alpha;
	return A3(
		_user$project$Animation_Model$ShadowProperty,
		'box-shadow',
		true,
		{
			offsetX: A2(_user$project$Animation$initMotion, shade.offsetX, 'px'),
			offsetY: A2(_user$project$Animation$initMotion, shade.offsetY, 'px'),
			size: A2(_user$project$Animation$initMotion, shade.size, 'px'),
			blur: A2(_user$project$Animation$initMotion, shade.blur, 'px'),
			red: A2(
				_user$project$Animation$initMotion,
				_elm_lang$core$Basics$toFloat(red),
				'px'),
			green: A2(
				_user$project$Animation$initMotion,
				_elm_lang$core$Basics$toFloat(green),
				'px'),
			blue: A2(
				_user$project$Animation$initMotion,
				_elm_lang$core$Basics$toFloat(blue),
				'px'),
			alpha: A2(_user$project$Animation$initMotion, alpha, 'px')
		});
};
var _user$project$Animation$move = F2(
	function (x, y) {
		return A2(
			_user$project$Animation_Model$Move,
			A2(_user$project$Animation$initMotion, x, ''),
			A2(_user$project$Animation$initMotion, y, ''));
	});
var _user$project$Animation$moveTo = F2(
	function (x, y) {
		return A2(
			_user$project$Animation_Model$MoveTo,
			A2(_user$project$Animation$initMotion, x, ''),
			A2(_user$project$Animation$initMotion, y, ''));
	});
var _user$project$Animation$line = F2(
	function (x, y) {
		return A2(
			_user$project$Animation_Model$Line,
			A2(_user$project$Animation$initMotion, x, ''),
			A2(_user$project$Animation$initMotion, y, ''));
	});
var _user$project$Animation$lineTo = F2(
	function (x, y) {
		return A2(
			_user$project$Animation_Model$LineTo,
			A2(_user$project$Animation$initMotion, x, ''),
			A2(_user$project$Animation$initMotion, y, ''));
	});
var _user$project$Animation$horizontal = function (x) {
	return _user$project$Animation_Model$Horizontal(
		A2(_user$project$Animation$initMotion, x, ''));
};
var _user$project$Animation$horizontalTo = function (x) {
	return _user$project$Animation_Model$HorizontalTo(
		A2(_user$project$Animation$initMotion, x, ''));
};
var _user$project$Animation$vertical = function (x) {
	return _user$project$Animation_Model$Vertical(
		A2(_user$project$Animation$initMotion, x, ''));
};
var _user$project$Animation$verticalTo = function (x) {
	return _user$project$Animation_Model$VerticalTo(
		A2(_user$project$Animation$initMotion, x, ''));
};
var _user$project$Animation$curve2 = function (_p66) {
	var _p67 = _p66;
	var _p70 = _p67.point;
	var _p69 = _p67.control2;
	var _p68 = _p67.control1;
	return _user$project$Animation_Model$Curve(
		{
			control1: {
				ctor: '_Tuple2',
				_0: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$fst(_p68),
					''),
				_1: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$snd(_p68),
					'')
			},
			control2: {
				ctor: '_Tuple2',
				_0: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$fst(_p69),
					''),
				_1: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$snd(_p69),
					'')
			},
			point: {
				ctor: '_Tuple2',
				_0: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$fst(_p70),
					''),
				_1: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$snd(_p70),
					'')
			}
		});
};
var _user$project$Animation$curve2To = function (_p71) {
	var _p72 = _p71;
	var _p75 = _p72.point;
	var _p74 = _p72.control2;
	var _p73 = _p72.control1;
	return _user$project$Animation_Model$CurveTo(
		{
			control1: {
				ctor: '_Tuple2',
				_0: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$fst(_p73),
					''),
				_1: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$snd(_p73),
					'')
			},
			control2: {
				ctor: '_Tuple2',
				_0: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$fst(_p74),
					''),
				_1: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$snd(_p74),
					'')
			},
			point: {
				ctor: '_Tuple2',
				_0: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$fst(_p75),
					''),
				_1: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$snd(_p75),
					'')
			}
		});
};
var _user$project$Animation$curve = function (_p76) {
	var _p77 = _p76;
	var _p79 = _p77.point;
	var _p78 = _p77.control;
	return _user$project$Animation_Model$Quadratic(
		{
			control: {
				ctor: '_Tuple2',
				_0: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$fst(_p78),
					''),
				_1: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$snd(_p78),
					'')
			},
			point: {
				ctor: '_Tuple2',
				_0: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$fst(_p79),
					''),
				_1: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$snd(_p79),
					'')
			}
		});
};
var _user$project$Animation$curveTo = function (_p80) {
	var _p81 = _p80;
	var _p83 = _p81.point;
	var _p82 = _p81.control;
	return _user$project$Animation_Model$QuadraticTo(
		{
			control: {
				ctor: '_Tuple2',
				_0: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$fst(_p82),
					''),
				_1: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$snd(_p82),
					'')
			},
			point: {
				ctor: '_Tuple2',
				_0: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$fst(_p83),
					''),
				_1: A2(
					_user$project$Animation$initMotion,
					_elm_lang$core$Basics$snd(_p83),
					'')
			}
		});
};
var _user$project$Animation$arc = function (arc) {
	return arc.clockwise ? _user$project$Animation_Model$ClockwiseArc(
		{
			x: A2(_user$project$Animation$initMotion, arc.x, ''),
			y: A2(_user$project$Animation$initMotion, arc.y, ''),
			radius: A2(_user$project$Animation$initMotion, arc.radius, ''),
			startAngle: A2(_user$project$Animation$initMotion, arc.startAngle, ''),
			endAngle: A2(_user$project$Animation$initMotion, arc.endAngle, '')
		}) : _user$project$Animation_Model$AntiClockwiseArc(
		{
			x: A2(_user$project$Animation$initMotion, arc.x, ''),
			y: A2(_user$project$Animation$initMotion, arc.y, ''),
			radius: A2(_user$project$Animation$initMotion, arc.radius, ''),
			startAngle: A2(_user$project$Animation$initMotion, arc.startAngle, ''),
			endAngle: A2(_user$project$Animation$initMotion, arc.endAngle, '')
		});
};
var _user$project$Animation$hueRotate = function (_p84) {
	var _p85 = _p84;
	return A2(
		_user$project$Animation_Model$AngleProperty,
		'hue-rotate',
		A2(_user$project$Animation$initMotion, _p85._0, 'rad'));
};
var _user$project$Animation$points = function (pnts) {
	return _user$project$Animation_Model$Points(
		A2(
			_elm_lang$core$List$map,
			function (_p86) {
				var _p87 = _p86;
				return {
					ctor: '_Tuple2',
					_0: A2(_user$project$Animation$initMotion, _p87._0, ''),
					_1: A2(_user$project$Animation$initMotion, _p87._1, '')
				};
			},
			_user$project$Animation$alignStartingPoint(pnts)));
};
var _user$project$Animation$lengthUnitName = function (unit) {
	var _p88 = unit;
	switch (_p88.ctor) {
		case 'NoUnit':
			return '';
		case 'Px':
			return 'px';
		case 'Percent':
			return '%';
		case 'Rem':
			return 'rem';
		case 'Em':
			return 'em';
		case 'Ex':
			return 'ex';
		case 'Ch':
			return 'ch';
		case 'Vh':
			return 'vh';
		case 'Vw':
			return 'vw';
		case 'Vmin':
			return 'vmin';
		case 'Vmax':
			return 'vmax';
		case 'Mm':
			return 'mm';
		case 'Cm':
			return 'cm';
		case 'In':
			return 'in';
		case 'Pt':
			return 'pt';
		default:
			return 'pc';
	}
};
var _user$project$Animation$height = function (_p89) {
	var _p90 = _p89;
	return A3(
		_user$project$Animation$length,
		'height',
		_p90._0,
		_user$project$Animation$lengthUnitName(_p90._1));
};
var _user$project$Animation$width = function (_p91) {
	var _p92 = _p91;
	return A3(
		_user$project$Animation$length,
		'width',
		_p92._0,
		_user$project$Animation$lengthUnitName(_p92._1));
};
var _user$project$Animation$left = function (_p93) {
	var _p94 = _p93;
	return A3(
		_user$project$Animation$length,
		'left',
		_p94._0,
		_user$project$Animation$lengthUnitName(_p94._1));
};
var _user$project$Animation$top = function (_p95) {
	var _p96 = _p95;
	return A3(
		_user$project$Animation$length,
		'top',
		_p96._0,
		_user$project$Animation$lengthUnitName(_p96._1));
};
var _user$project$Animation$right = function (_p97) {
	var _p98 = _p97;
	return A3(
		_user$project$Animation$length,
		'right',
		_p98._0,
		_user$project$Animation$lengthUnitName(_p98._1));
};
var _user$project$Animation$bottom = function (_p99) {
	var _p100 = _p99;
	return A3(
		_user$project$Animation$length,
		'bottom',
		_p100._0,
		_user$project$Animation$lengthUnitName(_p100._1));
};
var _user$project$Animation$maxHeight = function (_p101) {
	var _p102 = _p101;
	return A3(
		_user$project$Animation$length,
		'max-height',
		_p102._0,
		_user$project$Animation$lengthUnitName(_p102._1));
};
var _user$project$Animation$maxWidth = function (_p103) {
	var _p104 = _p103;
	return A3(
		_user$project$Animation$length,
		'max-width',
		_p104._0,
		_user$project$Animation$lengthUnitName(_p104._1));
};
var _user$project$Animation$minHeight = function (_p105) {
	var _p106 = _p105;
	return A3(
		_user$project$Animation$length,
		'min-height',
		_p106._0,
		_user$project$Animation$lengthUnitName(_p106._1));
};
var _user$project$Animation$minWidth = function (_p107) {
	var _p108 = _p107;
	return A3(
		_user$project$Animation$length,
		'min-width',
		_p108._0,
		_user$project$Animation$lengthUnitName(_p108._1));
};
var _user$project$Animation$padding = function (_p109) {
	var _p110 = _p109;
	return A3(
		_user$project$Animation$length,
		'padding',
		_p110._0,
		_user$project$Animation$lengthUnitName(_p110._1));
};
var _user$project$Animation$paddingLeft = function (_p111) {
	var _p112 = _p111;
	return A3(
		_user$project$Animation$length,
		'padding-left',
		_p112._0,
		_user$project$Animation$lengthUnitName(_p112._1));
};
var _user$project$Animation$paddingRight = function (_p113) {
	var _p114 = _p113;
	return A3(
		_user$project$Animation$length,
		'padding-right',
		_p114._0,
		_user$project$Animation$lengthUnitName(_p114._1));
};
var _user$project$Animation$paddingTop = function (_p115) {
	var _p116 = _p115;
	return A3(
		_user$project$Animation$length,
		'padding-top',
		_p116._0,
		_user$project$Animation$lengthUnitName(_p116._1));
};
var _user$project$Animation$paddingBottom = function (_p117) {
	var _p118 = _p117;
	return A3(
		_user$project$Animation$length,
		'padding-bottom',
		_p118._0,
		_user$project$Animation$lengthUnitName(_p118._1));
};
var _user$project$Animation$margin = function (_p119) {
	var _p120 = _p119;
	return A3(
		_user$project$Animation$length,
		'margin',
		_p120._0,
		_user$project$Animation$lengthUnitName(_p120._1));
};
var _user$project$Animation$marginLeft = function (_p121) {
	var _p122 = _p121;
	return A3(
		_user$project$Animation$length,
		'margin-left',
		_p122._0,
		_user$project$Animation$lengthUnitName(_p122._1));
};
var _user$project$Animation$marginRight = function (_p123) {
	var _p124 = _p123;
	return A3(
		_user$project$Animation$length,
		'margin-right',
		_p124._0,
		_user$project$Animation$lengthUnitName(_p124._1));
};
var _user$project$Animation$marginTop = function (_p125) {
	var _p126 = _p125;
	return A3(
		_user$project$Animation$length,
		'margin-top',
		_p126._0,
		_user$project$Animation$lengthUnitName(_p126._1));
};
var _user$project$Animation$marginBottom = function (_p127) {
	var _p128 = _p127;
	return A3(
		_user$project$Animation$length,
		'margin-bottom',
		_p128._0,
		_user$project$Animation$lengthUnitName(_p128._1));
};
var _user$project$Animation$borderWidth = function (_p129) {
	var _p130 = _p129;
	return A3(
		_user$project$Animation$length,
		'border-width',
		_p130._0,
		_user$project$Animation$lengthUnitName(_p130._1));
};
var _user$project$Animation$borderLeftWidth = function (_p131) {
	var _p132 = _p131;
	return A3(
		_user$project$Animation$length,
		'border-left-width',
		_p132._0,
		_user$project$Animation$lengthUnitName(_p132._1));
};
var _user$project$Animation$borderRightWidth = function (_p133) {
	var _p134 = _p133;
	return A3(
		_user$project$Animation$length,
		'border-right-width',
		_p134._0,
		_user$project$Animation$lengthUnitName(_p134._1));
};
var _user$project$Animation$borderTopWidth = function (_p135) {
	var _p136 = _p135;
	return A3(
		_user$project$Animation$length,
		'border-top-width',
		_p136._0,
		_user$project$Animation$lengthUnitName(_p136._1));
};
var _user$project$Animation$borderBottomWidth = function (_p137) {
	var _p138 = _p137;
	return A3(
		_user$project$Animation$length,
		'border-bottom-width',
		_p138._0,
		_user$project$Animation$lengthUnitName(_p138._1));
};
var _user$project$Animation$borderRadius = function (_p139) {
	var _p140 = _p139;
	return A3(
		_user$project$Animation$length,
		'border-radius',
		_p140._0,
		_user$project$Animation$lengthUnitName(_p140._1));
};
var _user$project$Animation$borderTopLeftRadius = function (_p141) {
	var _p142 = _p141;
	return A3(
		_user$project$Animation$length,
		'border-top-left-radius',
		_p142._0,
		_user$project$Animation$lengthUnitName(_p142._1));
};
var _user$project$Animation$borderTopRightRadius = function (_p143) {
	var _p144 = _p143;
	return A3(
		_user$project$Animation$length,
		'border-top-right-radius',
		_p144._0,
		_user$project$Animation$lengthUnitName(_p144._1));
};
var _user$project$Animation$borderBottomLeftRadius = function (_p145) {
	var _p146 = _p145;
	return A3(
		_user$project$Animation$length,
		'border-bottom-left-radius',
		_p146._0,
		_user$project$Animation$lengthUnitName(_p146._1));
};
var _user$project$Animation$borderBottomRightRadius = function (_p147) {
	var _p148 = _p147;
	return A3(
		_user$project$Animation$length,
		'border-bottom-right-radius',
		_p148._0,
		_user$project$Animation$lengthUnitName(_p148._1));
};
var _user$project$Animation$letterSpacing = function (_p149) {
	var _p150 = _p149;
	return A3(
		_user$project$Animation$length,
		'letter-spacing',
		_p150._0,
		_user$project$Animation$lengthUnitName(_p150._1));
};
var _user$project$Animation$lineHeight = function (_p151) {
	var _p152 = _p151;
	return A3(
		_user$project$Animation$length,
		'line-height',
		_p152._0,
		_user$project$Animation$lengthUnitName(_p152._1));
};
var _user$project$Animation$backgroundPosition = F2(
	function (_p154, _p153) {
		var _p155 = _p154;
		var _p156 = _p153;
		return A3(
			_user$project$Animation$length2,
			'background-position',
			{
				ctor: '_Tuple2',
				_0: _p155._0,
				_1: _user$project$Animation$lengthUnitName(_p155._1)
			},
			{
				ctor: '_Tuple2',
				_0: _p156._0,
				_1: _user$project$Animation$lengthUnitName(_p156._1)
			});
	});
var _user$project$Animation$translate = F2(
	function (_p158, _p157) {
		var _p159 = _p158;
		var _p160 = _p157;
		return A3(
			_user$project$Animation$length2,
			'translate',
			{
				ctor: '_Tuple2',
				_0: _p159._0,
				_1: _user$project$Animation$lengthUnitName(_p159._1)
			},
			{
				ctor: '_Tuple2',
				_0: _p160._0,
				_1: _user$project$Animation$lengthUnitName(_p160._1)
			});
	});
var _user$project$Animation$translate3d = F3(
	function (_p163, _p162, _p161) {
		var _p164 = _p163;
		var _p165 = _p162;
		var _p166 = _p161;
		return A4(
			_user$project$Animation$length3,
			'translate3d',
			{
				ctor: '_Tuple2',
				_0: _p164._0,
				_1: _user$project$Animation$lengthUnitName(_p164._1)
			},
			{
				ctor: '_Tuple2',
				_0: _p165._0,
				_1: _user$project$Animation$lengthUnitName(_p165._1)
			},
			{
				ctor: '_Tuple2',
				_0: _p166._0,
				_1: _user$project$Animation$lengthUnitName(_p166._1)
			});
	});
var _user$project$Animation$blur = function (_p167) {
	var _p168 = _p167;
	return A3(
		_user$project$Animation$length,
		'blur',
		_p168._0,
		_user$project$Animation$lengthUnitName(_p168._1));
};
var _user$project$Animation$update = F2(
	function (tick, animation) {
		return _elm_lang$core$Basics$fst(
			A2(_user$project$Animation_Model$updateAnimation, tick, animation));
	});
var _user$project$Animation$debug = function (_p169) {
	var _p170 = _p169;
	var _p180 = _p170._0;
	var time = _p180.timing.current;
	var getValueTuple = function (prop) {
		var _p171 = prop;
		switch (_p171.ctor) {
			case 'ExactProperty':
				return _elm_lang$core$Native_List.fromArray(
					[]);
			case 'ColorProperty':
				var _p172 = _p171._0;
				return _elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p172, '-red'),
						_1: _p171._1,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p172, '-green'),
						_1: _p171._2,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p172, '-blue'),
						_1: _p171._3,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p172, '-alpha'),
						_1: _p171._4,
						_2: time
					}
					]);
			case 'ShadowProperty':
				var _p174 = _p171._2;
				var _p173 = _p171._0;
				var name = _p171._1 ? A2(_elm_lang$core$Basics_ops['++'], _p173, '-inset') : _p173;
				return _elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], name, '-offsetX'),
						_1: _p174.offsetX,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], name, '-offsetY'),
						_1: _p174.offsetY,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], name, '-size'),
						_1: _p174.size,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], name, '-blur'),
						_1: _p174.blur,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], name, '-red'),
						_1: _p174.red,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], name, '-green'),
						_1: _p174.green,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], name, '-blue'),
						_1: _p174.blue,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], name, '-alpha'),
						_1: _p174.alpha,
						_2: time
					}
					]);
			case 'Property':
				return _elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple3', _0: _p171._0, _1: _p171._1, _2: time}
					]);
			case 'Property2':
				var _p175 = _p171._0;
				return _elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p175, '-x'),
						_1: _p171._1,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p175, '-y'),
						_1: _p171._2,
						_2: time
					}
					]);
			case 'Property3':
				var _p177 = _p171._0;
				var _p176 = _p171._2;
				return _elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p177, '-x'),
						_1: _p171._1,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p177, '-y'),
						_1: _p176,
						_2: time
					},
						{
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p177, '-z'),
						_1: _p176,
						_2: time
					}
					]);
			case 'AngleProperty':
				return _elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple3', _0: _p171._0, _1: _p171._1, _2: time}
					]);
			case 'Points':
				var name = 'points';
				return _elm_lang$core$List$concat(
					A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (i, _p178) {
								var _p179 = _p178;
								return _elm_lang$core$Native_List.fromArray(
									[
										{
										ctor: '_Tuple3',
										_0: A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(i),
											A2(_elm_lang$core$Basics_ops['++'], name, '-x')),
										_1: _p179._0,
										_2: time
									},
										{
										ctor: '_Tuple3',
										_0: A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(i),
											A2(_elm_lang$core$Basics_ops['++'], name, '-y')),
										_1: _p179._1,
										_2: time
									}
									]);
							}),
						_p171._0));
			default:
				return _elm_lang$core$Native_List.fromArray(
					[]);
		}
	};
	return A2(_elm_lang$core$List$concatMap, getValueTuple, _p180.style);
};
var _user$project$Animation$isRunning = function (_p181) {
	var _p182 = _p181;
	return _p182._0.running;
};
var _user$project$Animation$subscription = F2(
	function (msg, states) {
		return A2(_elm_lang$core$List$any, _user$project$Animation$isRunning, states) ? A2(
			_elm_lang$core$Platform_Sub$map,
			msg,
			_elm_lang$animation_frame$AnimationFrame$times(_user$project$Animation_Model$Tick)) : _elm_lang$core$Platform_Sub$none;
	});
var _user$project$Animation$extractInitialWait = function (steps) {
	var _p183 = _elm_lang$core$List$head(steps);
	if (_p183.ctor === 'Nothing') {
		return {
			ctor: '_Tuple2',
			_0: 0,
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		};
	} else {
		var _p184 = _p183._0;
		if (_p184.ctor === 'Wait') {
			var _p185 = _user$project$Animation$extractInitialWait(
				A2(_elm_lang$core$List$drop, 1, steps));
			var additionalTime = _p185._0;
			var remainingSteps = _p185._1;
			return {ctor: '_Tuple2', _0: _p184._0 + additionalTime, _1: remainingSteps};
		} else {
			return {ctor: '_Tuple2', _0: 0, _1: steps};
		}
	}
};
var _user$project$Animation$interrupt = F2(
	function (steps, _p186) {
		var _p187 = _p186;
		var _p188 = _p187._0;
		return _user$project$Animation_Model$Animation(
			_elm_lang$core$Native_Utils.update(
				_p188,
				{
					interruption: A2(
						_elm_lang$core$List_ops['::'],
						_user$project$Animation$extractInitialWait(steps),
						_p188.interruption),
					running: true
				}));
	});
var _user$project$Animation$queue = F2(
	function (steps, _p189) {
		var _p190 = _p189;
		var _p191 = _p190._0;
		return _user$project$Animation_Model$Animation(
			_elm_lang$core$Native_Utils.update(
				_p191,
				{
					steps: A2(_elm_lang$core$Basics_ops['++'], _p191.steps, steps),
					running: true
				}));
	});
var _user$project$Animation$warnForDoubleListedProperties = function (props) {
	var _p192 = A2(
		_elm_lang$core$List$map,
		function (propGroup) {
			var _p193 = _elm_lang$core$List$head(propGroup);
			if (_p193.ctor === 'Nothing') {
				return '';
			} else {
				return (_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(propGroup),
					1) > 0) ? A2(
					_elm_lang$core$Debug$log,
					'elm-style-animation',
					A2(
						_elm_lang$core$Basics_ops['++'],
						'The \"',
						A2(_elm_lang$core$Basics_ops['++'], _p193._0, '\" css property is listed more than once.  Only the last instance will be used.'))) : '';
			}
		},
		A2(
			_elm_community$list_extra$List_Extra$groupWhile,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				}),
			_elm_lang$core$List$sort(
				A2(
					_elm_lang$core$List$map,
					_user$project$Animation_Model$propertyName,
					A2(_elm_lang$core$List$filter, _user$project$Animation$isTransformation, props)))));
	return props;
};
var _user$project$Animation$initialState = function (current) {
	return _user$project$Animation_Model$Animation(
		{
			steps: _elm_lang$core$Native_List.fromArray(
				[]),
			style: current,
			timing: {current: 0, dt: 0},
			running: false,
			interruption: _elm_lang$core$Native_List.fromArray(
				[])
		});
};
var _user$project$Animation$styleWith = F2(
	function (interp, props) {
		return _user$project$Animation$initialState(
			A2(
				_elm_lang$core$List$map,
				_user$project$Animation_Model$mapToMotion(
					function (m) {
						return _elm_lang$core$Native_Utils.update(
							m,
							{interpolation: interp});
					}),
				_user$project$Animation$warnForDoubleListedProperties(props)));
	});
var _user$project$Animation$styleWithEach = function (props) {
	var _p194 = _user$project$Animation$warnForDoubleListedProperties(
		A2(_elm_lang$core$List$map, _elm_lang$core$Basics$snd, props));
	return _user$project$Animation$initialState(
		A2(
			_elm_lang$core$List$map,
			function (_p195) {
				var _p196 = _p195;
				return A2(
					_user$project$Animation_Model$mapToMotion,
					function (m) {
						return _elm_lang$core$Native_Utils.update(
							m,
							{interpolation: _p196._0});
					},
					_p196._1);
			},
			props));
};
var _user$project$Animation$loop = function (steps) {
	return _user$project$Animation_Model$Loop(steps);
};
var _user$project$Animation$repeat = F2(
	function (n, steps) {
		return A2(_user$project$Animation_Model$Repeat, n, steps);
	});
var _user$project$Animation$set = function (props) {
	return _user$project$Animation_Model$Set(props);
};
var _user$project$Animation$toWithEach = function (interpProps) {
	return _user$project$Animation_Model$ToWith(
		A2(
			_elm_lang$core$List$map,
			function (_p197) {
				var _p198 = _p197;
				return A2(
					_user$project$Animation_Model$mapToMotion,
					function (m) {
						return _elm_lang$core$Native_Utils.update(
							m,
							{interpolation: _p198._0});
					},
					_p198._1);
			},
			interpProps));
};
var _user$project$Animation$toWith = F2(
	function (interp, props) {
		return _user$project$Animation_Model$ToWith(
			A2(
				_elm_lang$core$List$map,
				_user$project$Animation_Model$mapToMotion(
					function (m) {
						return _elm_lang$core$Native_Utils.update(
							m,
							{interpolation: interp});
					}),
				props));
	});
var _user$project$Animation$to = function (props) {
	return _user$project$Animation_Model$To(props);
};
var _user$project$Animation$wait = function (till) {
	return _user$project$Animation_Model$Wait(till);
};
var _user$project$Animation$speed = function (speed) {
	return _user$project$Animation_Model$AtSpeed(speed);
};
var _user$project$Animation$defaultInterpolationByProperty = function (prop) {
	var linear = function (duration) {
		return _user$project$Animation_Model$Easing(
			{progress: 1, start: 0, duration: duration, ease: _elm_lang$core$Basics$identity});
	};
	var spring = _user$project$Animation_Model$Spring(
		{stiffness: 170, damping: 26});
	var _p199 = prop;
	switch (_p199.ctor) {
		case 'ExactProperty':
			return spring;
		case 'ColorProperty':
			return linear(0.4 * _elm_lang$core$Time$second);
		case 'ShadowProperty':
			return spring;
		case 'Property':
			return spring;
		case 'Property2':
			return spring;
		case 'Property3':
			return spring;
		case 'AngleProperty':
			return _user$project$Animation$speed(
				{perSecond: _elm_lang$core$Basics$pi});
		case 'Points':
			return spring;
		default:
			return spring;
	}
};
var _user$project$Animation$setDefaultInterpolation = function (prop) {
	var interp = _user$project$Animation$defaultInterpolationByProperty(prop);
	return A2(
		_user$project$Animation_Model$mapToMotion,
		function (m) {
			return _elm_lang$core$Native_Utils.update(
				m,
				{interpolation: interp});
		},
		prop);
};
var _user$project$Animation$style = function (props) {
	return _user$project$Animation$initialState(
		A2(
			_elm_lang$core$List$map,
			_user$project$Animation$setDefaultInterpolation,
			_user$project$Animation$warnForDoubleListedProperties(props)));
};
var _user$project$Animation$easing = function (_p200) {
	var _p201 = _p200;
	return _user$project$Animation_Model$Easing(
		{progress: 1, duration: _p201.duration, start: 0, ease: _p201.ease});
};
var _user$project$Animation$spring = function (settings) {
	return _user$project$Animation_Model$Spring(settings);
};
var _user$project$Animation$Shadow = F5(
	function (a, b, c, d, e) {
		return {offsetX: a, offsetY: b, size: c, blur: d, color: e};
	});
var _user$project$Animation$CubicCurve = F3(
	function (a, b, c) {
		return {control1: a, control2: b, point: c};
	});
var _user$project$Animation$QuadraticCurve = F2(
	function (a, b) {
		return {control: a, point: b};
	});
var _user$project$Animation$Arc = F6(
	function (a, b, c, d, e, f) {
		return {x: a, y: b, radius: c, startAngle: d, endAngle: e, clockwise: f};
	});
var _user$project$Animation$Pc = {ctor: 'Pc'};
var _user$project$Animation$Pt = {ctor: 'Pt'};
var _user$project$Animation$In = {ctor: 'In'};
var _user$project$Animation$Cm = {ctor: 'Cm'};
var _user$project$Animation$Mm = {ctor: 'Mm'};
var _user$project$Animation$Vmax = {ctor: 'Vmax'};
var _user$project$Animation$Vmin = {ctor: 'Vmin'};
var _user$project$Animation$Vw = {ctor: 'Vw'};
var _user$project$Animation$Vh = {ctor: 'Vh'};
var _user$project$Animation$Ch = {ctor: 'Ch'};
var _user$project$Animation$Ex = {ctor: 'Ex'};
var _user$project$Animation$Em = {ctor: 'Em'};
var _user$project$Animation$Rem = {ctor: 'Rem'};
var _user$project$Animation$Percent = {ctor: 'Percent'};
var _user$project$Animation$Px = {ctor: 'Px'};
var _user$project$Animation$NoUnit = {ctor: 'NoUnit'};
var _user$project$Animation$Length = F2(
	function (a, b) {
		return {ctor: 'Length', _0: a, _1: b};
	});
var _user$project$Animation$px = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Px);
};
var _user$project$Animation$percent = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Percent);
};
var _user$project$Animation$rem = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Rem);
};
var _user$project$Animation$em = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Em);
};
var _user$project$Animation$ex = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Ex);
};
var _user$project$Animation$ch = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Ch);
};
var _user$project$Animation$vh = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Vh);
};
var _user$project$Animation$vw = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Vw);
};
var _user$project$Animation$vmin = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Vmin);
};
var _user$project$Animation$vmax = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Vmax);
};
var _user$project$Animation$mm = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Mm);
};
var _user$project$Animation$cm = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Cm);
};
var _user$project$Animation$inches = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$In);
};
var _user$project$Animation$pt = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Pt);
};
var _user$project$Animation$pc = function (x) {
	return A2(_user$project$Animation$Length, x, _user$project$Animation$Pc);
};
var _user$project$Animation$Radians = function (a) {
	return {ctor: 'Radians', _0: a};
};
var _user$project$Animation$deg = function (a) {
	return _user$project$Animation$Radians((a / 360) * (2 * _elm_lang$core$Basics$pi));
};
var _user$project$Animation$grad = function (a) {
	return _user$project$Animation$Radians((a / 400) * (2 * _elm_lang$core$Basics$pi));
};
var _user$project$Animation$rad = function (a) {
	return _user$project$Animation$Radians(a);
};
var _user$project$Animation$turn = function (a) {
	return _user$project$Animation$Radians(a * (2 * _elm_lang$core$Basics$pi));
};
var _user$project$Animation$ListItem = {ctor: 'ListItem'};
var _user$project$Animation$listItem = _user$project$Animation$ListItem;
var _user$project$Animation$InlineFlex = {ctor: 'InlineFlex'};
var _user$project$Animation$inlineFlex = _user$project$Animation$InlineFlex;
var _user$project$Animation$Flex = {ctor: 'Flex'};
var _user$project$Animation$flex = _user$project$Animation$Flex;
var _user$project$Animation$Block = {ctor: 'Block'};
var _user$project$Animation$block = _user$project$Animation$Block;
var _user$project$Animation$InlineBlock = {ctor: 'InlineBlock'};
var _user$project$Animation$inlineBlock = _user$project$Animation$InlineBlock;
var _user$project$Animation$Inline = {ctor: 'Inline'};
var _user$project$Animation$inline = _user$project$Animation$Inline;
var _user$project$Animation$None = {ctor: 'None'};
var _user$project$Animation$none = _user$project$Animation$None;

var _user$project$Style_ops = _user$project$Style_ops || {};
_user$project$Style_ops['=>'] = F2(
	function (v0, v1) {
		return {ctor: '_Tuple2', _0: v0, _1: v1};
	});
var _user$project$Style$base = _elm_lang$core$Native_List.fromArray(
	[
		A2(_user$project$Style_ops['=>'], 'font-size', '25px'),
		A2(_user$project$Style_ops['=>'], 'color', 'white'),
		A2(_user$project$Style_ops['=>'], 'font-family', 'Open Sans')
	]);
var _user$project$Style$container = _elm_lang$html$Html_Attributes$style(
	A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Native_List.fromArray(
			[
				A2(_user$project$Style_ops['=>'], 'display', 'flex'),
				A2(_user$project$Style_ops['=>'], 'flex', 'row'),
				A2(_user$project$Style_ops['=>'], 'flex-direction', 'column'),
				A2(_user$project$Style_ops['=>'], 'position', 'relative'),
				A2(_user$project$Style_ops['=>'], 'margin', '90px auto'),
				A2(_user$project$Style_ops['=>'], 'justify-content', 'center'),
				A2(_user$project$Style_ops['=>'], 'width', '800px')
			]),
		_user$project$Style$base));
var _user$project$Style$cornell = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(_user$project$Style_ops['=>'], 'text-align', 'center')
		]));
var _user$project$Style$frame = _elm_lang$html$Html_Attributes$style(
	A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Native_List.fromArray(
			[
				A2(_user$project$Style_ops['=>'], 'display', 'flex'),
				A2(_user$project$Style_ops['=>'], 'flex-direction', 'column'),
				A2(_user$project$Style_ops['=>'], 'position', 'relative'),
				A2(_user$project$Style_ops['=>'], 'margin', '90px 0'),
				A2(_user$project$Style_ops['=>'], 'justify-content', 'center'),
				A2(_user$project$Style_ops['=>'], 'width', '800px')
			]),
		_user$project$Style$base));
var _user$project$Style$horizontal = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(_user$project$Style_ops['=>'], 'display', 'flex'),
			A2(_user$project$Style_ops['=>'], 'flex-direction', 'row'),
			A2(_user$project$Style_ops['=>'], 'justify-content', 'center')
		]));
var _user$project$Style$gears = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(_user$project$Style_ops['=>'], 'fill', '#c19849'),
			A2(_user$project$Style_ops['=>'], 'stroke', 'white'),
			A2(_user$project$Style_ops['=>'], 'stroke-width', '2px')
		]));
var _user$project$Style$gearsSvg = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(_user$project$Style_ops['=>'], 'flex-direction', 'row')
		]));
var _user$project$Style$body = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(_user$project$Style_ops['=>'], 'background-color', '#DDD')
		]));
var _user$project$Style$code = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(_user$project$Style_ops['=>'], 'white-space', 'pre'),
			A2(_user$project$Style_ops['=>'], 'font-family', 'Inconsolata')
		]));
var _user$project$Style$hiring = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(_user$project$Style_ops['=>'], 'background-color', 'rgba(0,0,0,0.1)'),
			A2(_user$project$Style_ops['=>'], 'border-radius', '3px'),
			A2(_user$project$Style_ops['=>'], 'padding', '5px 20px'),
			A2(_user$project$Style_ops['=>'], 'width', '300px'),
			A2(_user$project$Style_ops['=>'], 'margin', '0 auto'),
			A2(_user$project$Style_ops['=>'], 'margin-top', '30px')
		]));
var _user$project$Style$name = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(_user$project$Style_ops['=>'], 'font-size', '37px'),
			A2(_user$project$Style_ops['=>'], 'margin-bottom', '60px')
		]));
var _user$project$Style$animHeader = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(_user$project$Style_ops['=>'], 'margin-bottom', '0')
		]));
var _user$project$Style$shadow = _elm_lang$html$Html_Attributes$style(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(_user$project$Style_ops['=>'], 'border-radius', '5px'),
			A2(_user$project$Style_ops['=>'], 'width', '200px'),
			A2(_user$project$Style_ops['=>'], 'height', '200px')
		]));

var _user$project$Gears$factor = 0.3;
var _user$project$Gears$beginInitialRotate = function (gears) {
	var global = A2(
		_user$project$Animation$interrupt,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Animation$loop(
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_user$project$Animation$toWith,
						_user$project$Animation$speed(
							{perSecond: 1 * _user$project$Gears$factor}),
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$rotate(
								_user$project$Animation$turn(-1))
							])),
						_user$project$Animation$set(
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$rotate(
								_user$project$Animation$turn(0))
							]))
					]))
			]),
		gears.global);
	var largePlanet = A2(
		_user$project$Animation$interrupt,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Animation$loop(
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_user$project$Animation$toWith,
						_user$project$Animation$speed(
							{perSecond: 1.94736842105263 * _user$project$Gears$factor}),
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$rotate(
								_user$project$Animation$turn(1))
							])),
						_user$project$Animation$set(
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$rotate(
								_user$project$Animation$turn(0))
							]))
					]))
			]),
		gears.largePlanet);
	var mediumPlanet = A2(
		_user$project$Animation$interrupt,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Animation$loop(
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_user$project$Animation$toWith,
						_user$project$Animation$speed(
							{perSecond: 3.3636 * _user$project$Gears$factor}),
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$rotate(
								_user$project$Animation$turn(1))
							])),
						_user$project$Animation$set(
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$rotate(
								_user$project$Animation$turn(0))
							]))
					]))
			]),
		gears.mediumPlanet);
	var smallPlanet = A2(
		_user$project$Animation$interrupt,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Animation$loop(
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_user$project$Animation$toWith,
						_user$project$Animation$speed(
							{perSecond: 5.28571428571429 * _user$project$Gears$factor}),
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$rotate(
								_user$project$Animation$turn(1))
							])),
						_user$project$Animation$set(
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$rotate(
								_user$project$Animation$turn(0))
							]))
					]))
			]),
		gears.smallPlanet);
	var sun = A2(
		_user$project$Animation$interrupt,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Animation$loop(
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_user$project$Animation$toWith,
						_user$project$Animation$speed(
							{perSecond: 3.3636 * _user$project$Gears$factor}),
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$rotate(
								_user$project$Animation$turn(-1))
							])),
						_user$project$Animation$set(
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$rotate(
								_user$project$Animation$turn(0))
							]))
					]))
			]),
		gears.sun);
	var annulus = A2(
		_user$project$Animation$interrupt,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Animation$loop(
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_user$project$Animation$toWith,
						_user$project$Animation$speed(
							{perSecond: 1 * _user$project$Gears$factor}),
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$rotate(
								_user$project$Animation$turn(1))
							])),
						_user$project$Animation$set(
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$rotate(
								_user$project$Animation$turn(0))
							]))
					]))
			]),
		gears.annulus);
	return {annulus: annulus, sun: sun, smallPlanet: smallPlanet, mediumPlanet: mediumPlanet, largePlanet: largePlanet, global: global};
};
var _user$project$Gears$viewPlanetary = function (gears) {
	return A2(
		_elm_lang$svg$Svg$svg,
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$svg$Svg_Attributes$version('1.1'),
				_elm_lang$svg$Svg_Attributes$width('250'),
				_elm_lang$svg$Svg_Attributes$height('250'),
				_elm_lang$svg$Svg_Attributes$class('anim-rotate-105')
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$svg$Svg$g,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$svg$Svg_Attributes$transform('translate(120,120)scale(0.5)')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$svg$Svg$g,
						_user$project$Animation$render(gears.global),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$svg$Svg$g,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$svg$Svg_Attributes$class('gear annulus')
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_elm_lang$svg$Svg$path,
										A2(
											_elm_lang$core$Basics_ops['++'],
											_user$project$Animation$render(gears.annulus),
											_elm_lang$core$Native_List.fromArray(
												[
													_user$project$Style$gears,
													_elm_lang$svg$Svg_Attributes$class('anim-rotate-185-rev'),
													_elm_lang$svg$Svg_Attributes$radius('185'),
													_elm_lang$svg$Svg_Attributes$direction('-1'),
													_elm_lang$svg$Svg_Attributes$d('M16.28273749929777,-191.3083178001651A192,192 0 0,1 32.44815750179502,-189.23825478676002L31.26515175954208,-182.33894341432605L35.034839581251575,-174.51807933711615A178,178 0 0,1 39.95947073748795,-173.4567401353428L46.61594135624819,-179.03059518269728L48.37978778594407,-185.80472581123178A192,192 0 0,1 63.96284059047504,-181.03246952852817L61.63086202728064,-174.4323274103006L64.02459387672735,-166.08687900890945A178,178 0 0,1 68.69902150116853,-164.2085395001794L76.20173092513866,-168.5772707218051L79.08503966284661,-174.95587015452205A192,192 0 0,1 93.63742921221784,-167.6187097269481L90.2235646055224,-161.5076109348198L91.17247717565438,-152.87766156523583A178,178 0 0,1 95.46222649625412,-150.23635815733115L103.59533543545518,-153.27428511011078L107.51515893841835,-159.07385265481767A192,192 0 0,1 120.61823948076334,-149.38286482914037L116.22069949969384,-143.9366145489113L115.6974943035491,-135.27043214198815A178,178 0 0,1 119.47915704268068,-131.94215032494523L128.00869076084604,-133.56187738158704L132.85226284368883,-138.6155700392687A192,192 0 0,1 144.12908260852308,-126.84954689089565L138.874376471754,-122.22482382716508L136.89410517022839,-113.77171867227133A178,178 0 0,1 140.05888977614302,-109.85220705417903L148.73946911788397,-110.00713761629306L154.36744903045258,-114.16956985042307A192,192 0 0,1 163.49359444479578,-100.6669984429885L157.5328904806626,-96.99684745808788L154.15252187363006,-89.00000000000001A178,178 0 0,1 156.60938325532442,-84.60201579387403L165.19128375767016,-83.28769279126959L171.44176476471713,-86.4391190049933A192,192 0 0,1 178.1546932409298,-71.58844373381925L171.65947004985424,-68.97844838935708L166.97625118751753,-61.667913369620784A178,178 0 0,1 168.6545099162365,-56.917978573681644L176.89084592676141,-54.17221268616181L183.5840130699362,-56.22197208509766A192,192 0 0,1 187.69060587795573,-40.45041983917945L180.84771920532194,-38.97566494920937L174.99637776763535,-32.561753150084826A178,178 0 0,1 175.8477533953517,-27.596514740227214L183.50158052289223,-23.498296653172567L190.44488356970436,-24.387421391400714A192,192 0 0,1 191.82700151129882,-8.148711013660488L184.83330874786606,-7.851622591287449L177.9821771744813,-2.518850577455667A178,178 0 0,1 177.9821771744813,2.5188505774556416L184.83330874786608,7.851622591287423L191.82700151129885,8.14871101366046A192,192 0 0,1 190.44488356970436,24.387421391400693L183.50158052289223,23.498296653172545L175.8477533953517,27.596514740227196A178,178 0 0,1 174.99637776763535,32.56175315008481L180.84771920532197,38.975664949209346L187.69060587795576,40.45041983917943A192,192 0 0,1 183.5840130699362,56.22197208509763L176.89084592676141,54.17221268616178L168.6545099162365,56.91797857368162A178,178 0 0,1 166.97625118751753,61.66791336962075L171.65947004985424,68.97844838935706L178.1546932409298,71.58844373381922A192,192 0 0,1 171.44176476471716,86.43911900499326L165.19128375767016,83.28769279126955L156.60938325532445,84.602015793874A178,178 0 0,1 154.1525218736301,88.99999999999999L157.53289048066262,96.99684745808784L163.4935944447958,100.66699844298846A192,192 0 0,1 154.36744903045258,114.16956985042304L148.739469117884,110.00713761629304L140.05888977614302,109.85220705417903A178,178 0 0,1 136.89410517022839,113.77171867227132L138.87437647175403,122.22482382716505L144.1290826085231,126.84954689089562A192,192 0 0,1 132.85226284368886,138.61557003926868L128.00869076084604,133.561877381587L119.4791570426807,131.94215032494523A178,178 0 0,1 115.69749430354912,135.27043214198815L116.22069949969384,143.93661454891128L120.61823948076334,149.38286482914037A192,192 0 0,1 107.51515893841832,159.07385265481767L103.59533543545515,153.27428511011078L95.46222649625408,150.23635815733115A178,178 0 0,1 91.17247717565434,152.87766156523583L90.22356460552237,161.50761093481984L93.63742921221781,167.61870972694814A192,192 0 0,1 79.08503966284661,174.95587015452205L76.20173092513866,168.5772707218051L68.69902150116853,164.2085395001794A178,178 0 0,1 64.02459387672735,166.08687900890945L61.63086202728064,174.4323274103006L63.96284059047504,181.03246952852817A192,192 0 0,1 48.37978778594407,185.80472581123178L46.61594135624819,179.03059518269728L39.95947073748795,173.4567401353428A178,178 0 0,1 35.034839581251575,174.51807933711615L31.26515175954208,182.33894341432605L32.44815750179502,189.23825478676002A192,192 0 0,1 16.282737499297813,191.3083178001651L15.689096027969248,184.3335353803674L10.070358754715071,177.71490616870418A178,178 0 0,1 5.037196738795043,177.92871226706126L1.132760877285699e-14,185L1.1756220996694822e-14,192A192,192 0 0,1 -16.282737499297703,191.3083178001651L-15.689096027969141,184.3335353803674L-20.10845911437492,176.86053791630712A178,178 0 0,1 -25.105357082635607,176.22066009907397L-31.265151759542057,182.33894341432605L-32.448157501795,189.23825478676002A192,192 0 0,1 -48.37978778594396,185.8047258112318L-46.615941356248086,179.0305951826973L-49.7087932261237,170.91821399722872A178,178 0 0,1 -54.52567549000741,169.44306038418455L-61.63086202728062,174.4323274103006L-63.962840590475025,181.03246952852817A192,192 0 0,1 -79.08503966284651,174.9558701545221L-76.20173092513856,168.57727072180515L-77.8790958613289,160.05888425145898A178,178 0 0,1 -82.37738948817918,157.79089232624557L-90.22356460552236,161.50761093481984L-93.6374292122178,167.61870972694814A192,192 0 0,1 -107.51515893841837,159.07385265481764L-103.5953354354552,153.27428511011075L-103.80895870271672,144.59495182425164A178,178 0 0,1 -107.85925597491165,141.59936758523494L-116.22069949969391,143.93661454891125L-120.6182394807634,149.38286482914032A192,192 0 0,1 -132.85226284368883,138.6155700392687L-128.00869076084604,133.56187738158704L-126.75242680672253,124.97128589642682A178,178 0 0,1 -130.23820804609875,121.33428684811683L-138.87437647175403,122.22482382716505L-144.1290826085231,126.84954689089562A192,192 0 0,1 -154.3674490304526,114.169569850423L-148.73946911788403,110.007137616293L-146.0494583690616,101.75242360800915A178,178 0 0,1 -148.87044399590818,97.57863959115828L-157.53289048066264,96.9968474580878L-163.4935944447958,100.66699844298842A192,192 0 0,1 -171.44176476471722,86.43911900499316L-165.19128375767022,83.28769279126945L-161.14491292570227,75.6063293525604A178,178 0 0,1 -163.21994831969045,71.01583253414398L-171.65947004985426,68.97844838935696L-178.15469324092984,71.5884437338191A192,192 0 0,1 -183.5840130699362,56.22197208509765L-176.89084592676141,54.1722126861618L-171.60452173327482,47.285178657735955A178,178 0 0,1 -172.87391190412697,42.41002927332333L-180.84771920532197,38.97566494920932L-187.69060587795576,40.450419839179396A192,192 0 0,1 -190.44488356970436,24.387421391400625L-183.50158052289223,23.498296653172478L-177.12738089014738,17.603719464836367A178,178 0 0,1 -177.55460779382096,12.584166686054942L-184.83330874786608,7.851622591287313L-191.82700151129885,8.148711013660346A192,192 0 0,1 -191.82700151129885,-8.148711013660469L-184.83330874786608,-7.8516225912874305L-177.55460779382094,-12.584166686055056A178,178 0 0,1 -177.12738089014735,-17.60371946483648L-183.50158052289223,-23.498296653172595L-190.44488356970436,-24.38742139140075A192,192 0 0,1 -187.69060587795573,-40.45041983917952L-180.84771920532194,-38.97566494920943L-172.87391190412697,-42.410029273323445A178,178 0 0,1 -171.6045217332748,-47.28517865773606L-176.8908459267614,-54.17221268616191L-183.58401306993613,-56.22197208509777A192,192 0 0,1 -178.1546932409298,-71.58844373381922L-171.65947004985424,-68.97844838935707L-163.2199483196904,-71.0158325341441A178,178 0 0,1 -161.14491292570222,-75.60632935256051L-165.19128375767016,-83.28769279126956L-171.44176476471716,-86.43911900499327A192,192 0 0,1 -163.49359444479575,-100.66699844298853L-157.53289048066256,-96.9968474580879L-148.87044399590812,-97.57863959115838A178,178 0 0,1 -146.04945836906154,-101.75242360800925L-148.73946911788397,-110.00713761629308L-154.36744903045255,-114.16956985042309A192,192 0 0,1 -144.1290826085231,-126.8495468908956L-138.87437647175403,-122.22482382716504L-130.23820804609878,-121.33428684811682A178,178 0 0,1 -126.75242680672254,-124.97128589642678L-128.00869076084606,-133.561877381587L-132.8522628436889,-138.61557003926868A192,192 0 0,1 -120.61823948076332,-149.38286482914037L-116.22069949969382,-143.9366145489113L-107.85925597491155,-141.599367585235A178,178 0 0,1 -103.80895870271662,-144.5949518242517L-103.59533543545511,-153.27428511011084L-107.51515893841828,-159.07385265481773A192,192 0 0,1 -93.63742921221775,-167.61870972694817L-90.22356460552231,-161.50761093481984L-82.37738948817915,-157.7908923262456A178,178 0 0,1 -77.87909586132888,-160.05888425145898L-76.20173092513853,-168.57727072180518L-79.08503966284648,-174.95587015452213A192,192 0 0,1 -63.96284059047507,-181.03246952852817L-61.63086202728066,-174.4323274103006L-54.525675490007444,-169.44306038418452A178,178 0 0,1 -49.70879322612374,-170.91821399722872L-46.615941356248136,-179.03059518269728L-48.37978778594402,-185.80472581123178A192,192 0 0,1 -32.44815750179496,-189.23825478676005L-31.265151759542018,-182.33894341432608L-25.10535708263557,-176.22066009907397A178,178 0 0,1 -20.108459114374885,-176.86053791630712L-15.689096027969105,-184.3335353803674L-16.282737499297667,-191.3083178001651A192,192 0 0,1 -3.5268662990084465e-14,-192L-3.398282631857097e-14,-185L5.037196738794999,-177.92871226706126A178,178 0 0,1 10.070358754715029,-177.7149061687042L15.689096027969201,-184.3335353803674L16.282737499297767,-191.3083178001651M0,-205A205,205 0 0,0 0,205A205,205 0 0,0 0,-205Z')
												])),
										_elm_lang$core$Native_List.fromArray(
											[]))
									])),
								A2(
								_elm_lang$svg$Svg$g,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$svg$Svg_Attributes$class('gear sun'),
										_elm_lang$svg$Svg_Attributes$transform('translate(22,-60)rotate(3,22,-60)')
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_elm_lang$svg$Svg$path,
										A2(
											_elm_lang$core$Basics_ops['++'],
											_user$project$Animation$render(gears.sun),
											_elm_lang$core$Native_List.fromArray(
												[
													_user$project$Style$gears,
													_elm_lang$svg$Svg_Attributes$class('anim-rotate-55'),
													_elm_lang$svg$Svg_Attributes$radius('55'),
													_elm_lang$svg$Svg_Attributes$direction('1'),
													_elm_lang$svg$Svg_Attributes$d('M2.9390552491737054e-15,-48A48,48 0 0,1 13.52316272838863,-46.05566273349587L15.495290626278639,-52.77211354879736L23.043072250940316,-57.5588118469965A62,62 0 0,1 28.410044347099458,-55.10779781660525L29.735244960057877,-46.26894430571495L25.950759237868695,-40.38016957589669A48,48 0 0,1 36.2759795690044,-31.433315229373683L41.5662265894842,-36.01734036699068L50.50370902712081,-35.963528393414286A62,62 0 0,1 53.693575034635195,-31L50.029759744498506,-22.847825715103756L43.66233577701688,-19.93992062409055A48,48 0 0,1 47.51142921028477,-6.831112237117686L54.440179303451295,-7.827316105030682L61.929775029346494,-2.950078781072021A62,62 0 0,1 61.929775029346494,2.9500787810720235L54.440179303451295,7.827316105030684L47.51142921028477,6.831112237117688A48,48 0 0,1 43.662335777016885,19.939920624090544L50.02975974449851,22.84782571510375L53.6935750346352,30.999999999999996A62,62 0 0,1 50.50370902712081,35.963528393414286L41.56622658948421,36.01734036699067L36.275979569004406,31.43331522937368A48,48 0 0,1 25.95075923786868,40.3801695758967L29.735244960057866,46.26894430571497L28.410044347099436,55.10779781660526A62,62 0 0,1 23.04307225094029,57.558811846996505L15.495290626278617,52.772113548797364L13.52316272838861,46.05566273349588A48,48 0 0,1 -7.719085787227797e-15,48L-8.844785797865184e-15,55L-5.89347468485934,61.719259199531244A62,62 0 0,1 -11.733577150345454,60.87957923028781L-15.495290626278656,52.77211354879735L-13.523162728388645,46.055662733495865A48,48 0 0,1 -25.950759237868667,40.38016957589671L-29.735244960057848,46.26894430571498L-38.3258571456775,48.735291874052834A62,62 0 0,1 -42.78489871189093,44.87151036251436L-41.5662265894842,36.01734036699069L-36.27597956900439,31.43331522937369A48,48 0 0,1 -43.66233577701688,19.93992062409056L-50.0297597444985,22.84782571510377L-58.590050760309445,20.278213725680153A62,62 0 0,1 -60.25231723605958,14.617054001584497L-54.440179303451295,7.827316105030684L-47.51142921028477,6.831112237117688A48,48 0 0,1 -47.511429210284774,-6.831112237117676L-54.4401793034513,-7.827316105030671L-60.25231723605959,-14.617054001584481A62,62 0 0,1 -58.590050760309445,-20.27821372568014L-50.029759744498506,-22.847825715103756L-43.66233577701688,-19.93992062409055A48,48 0 0,1 -36.27597956900441,-31.43331522937366L-41.56622658948422,-36.01734036699066L-42.78489871189097,-44.87151036251433A62,62 0 0,1 -38.32585714567754,-48.73529187405281L-29.7352449600579,-46.26894430571494L-25.950759237868716,-40.38016957589667A48,48 0 0,1 -13.523162728388627,-46.05566273349587L-15.495290626278635,-52.77211354879736L-11.733577150345456,-60.87957923028781A62,62 0 0,1 -5.8934746848593695,-61.719259199531244L-5.89528155025415e-14,-55L-5.144972989312713e-14,-48M0,-35A35,35 0 0,0 0,35A35,35 0 0,0 0,-35Z')
												])),
										_elm_lang$core$Native_List.fromArray(
											[]))
									])),
								A2(
								_elm_lang$svg$Svg$g,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$svg$Svg_Attributes$class('gear planet'),
										_elm_lang$svg$Svg_Attributes$transform('translate(0,90)')
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_elm_lang$svg$Svg$path,
										A2(
											_elm_lang$core$Basics_ops['++'],
											_user$project$Animation$render(gears.largePlanet),
											_elm_lang$core$Native_List.fromArray(
												[
													_user$project$Style$gears,
													_elm_lang$svg$Svg_Attributes$class('anim-rotate-95-rev'),
													_elm_lang$svg$Svg_Attributes$radius('95'),
													_elm_lang$svg$Svg_Attributes$direction('-1'),
													_elm_lang$svg$Svg_Attributes$d('M5.38826795681846e-15,-88A88,88 0 0,1 14.48432394470459,-86.79979469943956L15.636486076669728,-93.70432382325862L22.30547130305034,-99.53123102799843A102,102 0 0,1 27.75455341422418,-98.15133603154354L30.84644957444494,-89.85263796156029L28.573553290012153,-83.23191726965585A88,88 0 0,1 41.883370587262476,-77.39369010617102L45.21500233852199,-83.55000636461645L53.41463722676355,-86.89577970150935A102,102 0 0,1 58.12042186604717,-83.82133715297499L58.35020770551845,-74.96834839265739L54.05071871669078,-69.44436482688263A88,88 0 0,1 64.74370413923559,-59.60077830306522L69.89377151394751,-64.3417493044454L78.73549839346472,-64.84382231741674A102,102 0 0,1 82.18804077741977,-60.40799577182796L79.53081543494022,-51.960075021630544L73.67065008710252,-48.13143791477356A88,88 0 0,1 80.58805274564506,-35.349197369461315L86.99846603223045,-38.1610653420321L95.52414660209959,-35.76503062966095A102,102 0 0,1 97.34931019170975,-30.44851072217285L92.09302526423639,-23.321121278375923L85.30722340266107,-21.602722868390327A88,88 0 0,1 87.69943538458695,-7.266982401565248L94.67552683563363,-7.845037819871575L101.96127131654504,-2.8105429215525275A102,102 0 0,1 101.96127131654504,2.81054292155252L94.67552683563363,7.845037819871567L87.69943538458695,7.266982401565241A88,88 0 0,1 85.30722340266107,21.602722868390327L92.09302526423639,23.32112127837592L97.34931019170975,30.44851072217284A102,102 0 0,1 95.52414660209959,35.76503062966094L86.99846603223045,38.161065342032096L80.58805274564506,35.34919736946131A88,88 0 0,1 73.67065008710252,48.13143791477355L79.53081543494022,51.96007502163054L82.18804077741979,60.40799577182795A102,102 0 0,1 78.73549839346474,64.84382231741672L69.89377151394751,64.3417493044454L64.74370413923559,59.600778303065205A88,88 0 0,1 54.05071871669078,69.44436482688263L58.35020770551845,74.96834839265739L58.12042186604717,83.82133715297499A102,102 0 0,1 53.41463722676355,86.89577970150935L45.21500233852199,83.55000636461645L41.883370587262476,77.39369010617102A88,88 0 0,1 28.573553290012153,83.23191726965585L30.84644957444494,89.85263796156029L27.75455341422418,98.15133603154354A102,102 0 0,1 22.30547130305034,99.53123102799843L15.636486076669728,93.70432382325862L14.48432394470459,86.79979469943956A88,88 0 0,1 5.38826795681846e-15,88L5.816880180656292e-15,95L-5.61895155629827,101.84511467619825A102,102 0 0,1 -11.220838541396082,101.38092908643085L-15.636486076669714,93.70432382325863L-14.484323944704578,86.79979469943957A88,88 0 0,1 -28.573553290012143,83.23191726965585L-30.84644957444493,89.85263796156029L-38.383555938679216,94.50239485590978A102,102 0 0,1 -43.53119642063317,92.2444303911529L-45.21500233852199,83.55000636461646L-41.883370587262476,77.39369010617104A88,88 0 0,1 -54.05071871669077,69.44436482688263L-58.35020770551844,74.96834839265739L-66.98870645286891,76.91887419724341A102,102 0 0,1 -71.12427371158753,73.11181634318203L-69.8937715139475,64.3417493044454L-64.74370413923558,59.60077830306522A88,88 0 0,1 -73.67065008710249,48.1314379147736L-79.5308154349402,51.96007502163059L-88.33459118601273,51.000000000000036A102,102 0 0,1 -91.00993233907617,46.056402547710746L-86.99846603223044,38.16106534203213L-80.58805274564504,35.34919736946134A88,88 0 0,1 -85.30722340266107,21.60272286839036L-92.09302526423639,23.321121278375955L-100.10805231174662,19.554484456221356A102,102 0 0,1 -101.03325263302533,14.010062897477669L-94.67552683563363,7.845037819871604L-87.69943538458695,7.266982401565275A88,88 0 0,1 -87.69943538458695,-7.266982401565215L-94.67552683563363,-7.845037819871539L-101.03325263302534,-14.010062897477601A102,102 0 0,1 -100.10805231174663,-19.554484456221285L-92.0930252642364,-23.32112127837589L-85.30722340266108,-21.6027228683903A88,88 0 0,1 -80.58805274564506,-35.34919736946129L-86.99846603223047,-38.161065342032074L-91.0099323390762,-46.05640254771069A102,102 0 0,1 -88.33459118601276,-50.99999999999997L-79.53081543494024,-51.96007502163052L-73.67065008710253,-48.13143791477354A88,88 0 0,1 -64.7437041392356,-59.6007783030652L-69.89377151394753,-64.34174930444539L-71.12427371158755,-73.11181634318201A102,102 0 0,1 -66.98870645286893,-76.91887419724341L-58.350207705518464,-74.96834839265738L-54.05071871669079,-69.44436482688262A88,88 0 0,1 -41.88337058726252,-77.39369010617101L-45.21500233852204,-83.55000636461644L-43.53119642063328,-92.24443039115285A102,102 0 0,1 -38.383555938679365,-94.50239485590973L-30.846449574445113,-89.85263796156023L-28.573553290012313,-83.2319172696558A88,88 0 0,1 -14.484323944704638,-86.79979469943956L-15.636486076669781,-93.70432382325862L-11.220838541396198,-101.38092908643084A102,102 0 0,1 -5.61895155629843,-101.84511467619825L-1.8620454028499267e-13,-95L-1.7248420573767742e-13,-88M0,-75A75,75 0 0,0 0,75A75,75 0 0,0 0,-75Z')
												])),
										_elm_lang$core$Native_List.fromArray(
											[]))
									])),
								A2(
								_elm_lang$svg$Svg$g,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$svg$Svg_Attributes$class('gear planet'),
										_elm_lang$svg$Svg_Attributes$transform('translate(-83.56238925925012,-99.58577760546713)rotate(2,-83.56238925925012,-99.58577760546713)')
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_elm_lang$svg$Svg$path,
										A2(
											_elm_lang$core$Basics_ops['++'],
											_user$project$Animation$render(gears.mediumPlanet),
											_elm_lang$core$Native_List.fromArray(
												[
													_user$project$Style$gears,
													_elm_lang$svg$Svg_Attributes$class('anim-rotate-55-rev'),
													_elm_lang$svg$Svg_Attributes$radius('55'),
													_elm_lang$svg$Svg_Attributes$direction('-1'),
													_elm_lang$svg$Svg_Attributes$d('M2.9390552491737054e-15,-48A48,48 0 0,1 13.52316272838863,-46.05566273349587L15.495290626278639,-52.77211354879736L23.043072250940316,-57.5588118469965A62,62 0 0,1 28.410044347099458,-55.10779781660525L29.735244960057877,-46.26894430571495L25.950759237868695,-40.38016957589669A48,48 0 0,1 36.2759795690044,-31.433315229373683L41.5662265894842,-36.01734036699068L50.50370902712081,-35.963528393414286A62,62 0 0,1 53.693575034635195,-31L50.029759744498506,-22.847825715103756L43.66233577701688,-19.93992062409055A48,48 0 0,1 47.51142921028477,-6.831112237117686L54.440179303451295,-7.827316105030682L61.929775029346494,-2.950078781072021A62,62 0 0,1 61.929775029346494,2.9500787810720235L54.440179303451295,7.827316105030684L47.51142921028477,6.831112237117688A48,48 0 0,1 43.662335777016885,19.939920624090544L50.02975974449851,22.84782571510375L53.6935750346352,30.999999999999996A62,62 0 0,1 50.50370902712081,35.963528393414286L41.56622658948421,36.01734036699067L36.275979569004406,31.43331522937368A48,48 0 0,1 25.95075923786868,40.3801695758967L29.735244960057866,46.26894430571497L28.410044347099436,55.10779781660526A62,62 0 0,1 23.04307225094029,57.558811846996505L15.495290626278617,52.772113548797364L13.52316272838861,46.05566273349588A48,48 0 0,1 -7.719085787227797e-15,48L-8.844785797865184e-15,55L-5.89347468485934,61.719259199531244A62,62 0 0,1 -11.733577150345454,60.87957923028781L-15.495290626278656,52.77211354879735L-13.523162728388645,46.055662733495865A48,48 0 0,1 -25.950759237868667,40.38016957589671L-29.735244960057848,46.26894430571498L-38.3258571456775,48.735291874052834A62,62 0 0,1 -42.78489871189093,44.87151036251436L-41.5662265894842,36.01734036699069L-36.27597956900439,31.43331522937369A48,48 0 0,1 -43.66233577701688,19.93992062409056L-50.0297597444985,22.84782571510377L-58.590050760309445,20.278213725680153A62,62 0 0,1 -60.25231723605958,14.617054001584497L-54.440179303451295,7.827316105030684L-47.51142921028477,6.831112237117688A48,48 0 0,1 -47.511429210284774,-6.831112237117676L-54.4401793034513,-7.827316105030671L-60.25231723605959,-14.617054001584481A62,62 0 0,1 -58.590050760309445,-20.27821372568014L-50.029759744498506,-22.847825715103756L-43.66233577701688,-19.93992062409055A48,48 0 0,1 -36.27597956900441,-31.43331522937366L-41.56622658948422,-36.01734036699066L-42.78489871189097,-44.87151036251433A62,62 0 0,1 -38.32585714567754,-48.73529187405281L-29.7352449600579,-46.26894430571494L-25.950759237868716,-40.38016957589667A48,48 0 0,1 -13.523162728388627,-46.05566273349587L-15.495290626278635,-52.77211354879736L-11.733577150345456,-60.87957923028781A62,62 0 0,1 -5.8934746848593695,-61.719259199531244L-5.89528155025415e-14,-55L-5.144972989312713e-14,-48M0,-35A35,35 0 0,0 0,35A35,35 0 0,0 0,-35Z')
												])),
										_elm_lang$core$Native_List.fromArray(
											[]))
									])),
								A2(
								_elm_lang$svg$Svg$g,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$svg$Svg_Attributes$class('gear planet'),
										_elm_lang$svg$Svg_Attributes$transform('translate(86.03646545265687,-122.87280664334881)rotate(-2,86.03646545265687,-122.87280664334881)')
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_elm_lang$svg$Svg$path,
										A2(
											_elm_lang$core$Basics_ops['++'],
											_user$project$Animation$render(gears.smallPlanet),
											_elm_lang$core$Native_List.fromArray(
												[
													_user$project$Style$gears,
													_elm_lang$svg$Svg_Attributes$class('anim-rotate-35-rev'),
													_elm_lang$svg$Svg_Attributes$radius('35'),
													_elm_lang$svg$Svg_Attributes$direction('-1'),
													_elm_lang$svg$Svg_Attributes$d('M1.7144488953513282e-15,-28A28,28 0 0,1 12.14874469529163,-25.227128301267737L15.185930869114536,-31.53391037658467L23.659442438672126,-34.70202852127178A42,42 0 0,1 28.567254986378618,-30.7881786168527L27.364101886381047,-21.82214306505567L21.891281509104836,-17.457714452044534A28,28 0 0,1 27.297981541091062,-6.230586150776803L34.122476926363824,-7.788232688471004L41.88255948160957,-3.138663930629818A42,42 0 0,1 41.88255948160957,3.138663930629819L34.122476926363824,7.7882326884710045L27.297981541091062,6.230586150776804A28,28 0 0,1 21.891281509104836,17.457714452044538L27.364101886381043,21.822143065055673L28.567254986378614,30.788178616852708A42,42 0 0,1 23.659442438672123,34.702028521271785L15.185930869114536,31.53391037658467L12.14874469529163,25.227128301267737A28,28 0 0,1 1.7144488953513282e-15,28L2.1430611191891602e-15,35L-6.259775179399321,41.530894701455395A42,42 0 0,1 -12.379717325257968,40.134057843017914L-15.185930869114532,31.53391037658467L-12.148744695291626,25.227128301267737A28,28 0 0,1 -21.891281509104836,17.45771445204454L-27.364101886381043,21.822143065055677L-36.373066958946424,20.999999999999996A42,42 0 0,1 -39.096697443056584,15.344323023388583L-34.12247692636383,7.788232688470993L-27.297981541091065,6.230586150776794A28,28 0 0,1 -27.297981541091062,-6.2305861507768L-34.122476926363824,-7.788232688471L-39.09669744305658,-15.344323023388592A42,42 0 0,1 -36.373066958946424,-21.000000000000004L-27.364101886381036,-21.822143065055684L-21.89128150910483,-17.45771445204455A28,28 0 0,1 -12.148744695291633,-25.227128301267733L-15.18593086911454,-31.533910376584664L-12.379717325257996,-40.13405784301791A42,42 0 0,1 -6.259775179399359,-41.530894701455395L-3.7515428047071864e-14,-35L-3.001234243765749e-14,-28M0,-15A15,15 0 0,0 0,15A15,15 0 0,0 0,-15Z')
												])),
										_elm_lang$core$Native_List.fromArray(
											[]))
									]))
							]))
					]))
			]));
};

var _user$project$Polygons$greyedOut = A2(
	_elm_lang$core$List$map,
	_user$project$Animation$style,
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Animation$points(
				_elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple2', _0: 161.649, _1: 152.782},
						{ctor: '_Tuple2', _0: 231.514, _1: 82.916},
						{ctor: '_Tuple2', _0: 91.783, _1: 82.916}
					])),
				_user$project$Animation$fill(
				A3(_elm_lang$core$Color$rgb, 230, 230, 230))
			]),
			_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Animation$points(
				_elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple2', _0: 8.867, _1: 0},
						{ctor: '_Tuple2', _0: 79.241, _1: 70.375},
						{ctor: '_Tuple2', _0: 232.213, _1: 70.375},
						{ctor: '_Tuple2', _0: 161.838, _1: 0}
					])),
				_user$project$Animation$fill(
				A3(_elm_lang$core$Color$rgb, 230, 230, 230))
			]),
			_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Animation$points(
				_elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple2', _0: 323.298, _1: 143.724},
						{ctor: '_Tuple2', _0: 323.298, _1: 0},
						{ctor: '_Tuple2', _0: 179.573, _1: 0}
					])),
				_user$project$Animation$fill(
				A3(_elm_lang$core$Color$rgb, 230, 230, 230))
			]),
			_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Animation$points(
				_elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple2', _0: 152.781, _1: 161.649},
						{ctor: '_Tuple2', _0: 0, _1: 8.868},
						{ctor: '_Tuple2', _0: 0, _1: 314.432}
					])),
				_user$project$Animation$fill(
				A3(_elm_lang$core$Color$rgb, 230, 230, 230))
			]),
			_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Animation$points(
				_elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple2', _0: 255.522, _1: 246.655},
						{ctor: '_Tuple2', _0: 323.298, _1: 314.432},
						{ctor: '_Tuple2', _0: 323.298, _1: 178.879}
					])),
				_user$project$Animation$fill(
				A3(_elm_lang$core$Color$rgb, 230, 230, 230))
			]),
			_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Animation$points(
				_elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple2', _0: 161.649, _1: 170.517},
						{ctor: '_Tuple2', _0: 8.869, _1: 323.298},
						{ctor: '_Tuple2', _0: 314.43, _1: 323.298}
					])),
				_user$project$Animation$fill(
				A3(_elm_lang$core$Color$rgb, 230, 230, 230))
			])
		]));
var _user$project$Polygons$view = F2(
	function (anim, sendMsg) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$style(
					_elm_lang$core$Native_List.fromArray(
						[
							{ctor: '_Tuple2', _0: 'width', _1: '300px'},
							{ctor: '_Tuple2', _0: 'height', _1: '300px'},
							{ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
							{ctor: '_Tuple2', _0: 'margin-right', _1: '50px'}
						]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$svg,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$version('1.1'),
							_elm_lang$svg$Svg_Attributes$x('0'),
							_elm_lang$svg$Svg_Attributes$y('0'),
							_elm_lang$svg$Svg_Attributes$viewBox('0 0 323.141 322.95'),
							_elm_lang$svg$Svg_Attributes$transform('scale(0.7)')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$rect,
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$svg$Svg_Attributes$fill('rgb(230,230,230)'),
									_elm_lang$svg$Svg_Attributes$x('192.99'),
									_elm_lang$svg$Svg_Attributes$y('107.392'),
									_elm_lang$svg$Svg_Attributes$width('107.676'),
									_elm_lang$svg$Svg_Attributes$height('108.167'),
									_elm_lang$svg$Svg_Attributes$transform('matrix(0.7071 0.7071 -0.7071 0.7071 186.4727 -127.2386)')
								]),
							_elm_lang$core$Native_List.fromArray(
								[])),
							A2(
							_elm_lang$svg$Svg$g,
							_elm_lang$core$Native_List.fromArray(
								[]),
							A2(
								_elm_lang$core$List$indexedMap,
								F2(
									function (i, poly) {
										return A2(
											_elm_lang$svg$Svg$polygon,
											A2(
												_elm_lang$core$Basics_ops['++'],
												_user$project$Animation$render(poly),
												_elm_lang$core$Native_List.fromArray(
													[
														_elm_lang$html$Html_Events$onClick(
														sendMsg(i))
													])),
											_elm_lang$core$Native_List.fromArray(
												[]));
									}),
								_user$project$Polygons$greyedOut)),
							A2(
							_elm_lang$svg$Svg$polygon,
							_user$project$Animation$render(anim),
							_elm_lang$core$Native_List.fromArray(
								[]))
						]))
				]));
	});
var _user$project$Polygons$palette = {
	orange: A3(_elm_lang$core$Color$rgb, 240, 173, 0),
	green: A3(_elm_lang$core$Color$rgb, 127, 209, 59),
	lavender: A3(_elm_lang$core$Color$rgb, 90, 99, 120),
	blue: A3(_elm_lang$core$Color$rgb, 96, 181, 204)
};
var _user$project$Polygons$polygons = _elm_lang$core$Native_List.fromArray(
	[
		_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Animation$points(
			_elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 161.649, _1: 152.782},
					{ctor: '_Tuple2', _0: 231.514, _1: 82.916},
					{ctor: '_Tuple2', _0: 91.783, _1: 82.916}
				])),
			_user$project$Animation$fill(_user$project$Polygons$palette.orange)
		]),
		_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Animation$points(
			_elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 8.867, _1: 0},
					{ctor: '_Tuple2', _0: 79.241, _1: 70.375},
					{ctor: '_Tuple2', _0: 232.213, _1: 70.375},
					{ctor: '_Tuple2', _0: 161.838, _1: 0}
				])),
			_user$project$Animation$fill(_user$project$Polygons$palette.green)
		]),
		_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Animation$points(
			_elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 323.298, _1: 143.724},
					{ctor: '_Tuple2', _0: 323.298, _1: 0},
					{ctor: '_Tuple2', _0: 179.573, _1: 0}
				])),
			_user$project$Animation$fill(_user$project$Polygons$palette.blue)
		]),
		_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Animation$points(
			_elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 152.781, _1: 161.649},
					{ctor: '_Tuple2', _0: 0, _1: 8.868},
					{ctor: '_Tuple2', _0: 0, _1: 314.432}
				])),
			_user$project$Animation$fill(_user$project$Polygons$palette.lavender)
		]),
		_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Animation$points(
			_elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 255.522, _1: 246.655},
					{ctor: '_Tuple2', _0: 323.298, _1: 314.432},
					{ctor: '_Tuple2', _0: 323.298, _1: 178.879}
				])),
			_user$project$Animation$fill(_user$project$Polygons$palette.orange)
		]),
		_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Animation$points(
			_elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 161.649, _1: 170.517},
					{ctor: '_Tuple2', _0: 8.869, _1: 323.298},
					{ctor: '_Tuple2', _0: 314.43, _1: 323.298}
				])),
			_user$project$Animation$fill(_user$project$Polygons$palette.blue)
		])
	]);

var _user$project$Main$talkIntro = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[_user$project$Style$frame, _user$project$Style$gearsSvg]),
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Gears$viewPlanetary(model.gears),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$h1,
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Style$animHeader]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('animation in elm')
							])),
						_elm_lang$html$Html$text('using the '),
						A2(
						_elm_lang$html$Html$i,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('elm-style-animation')
							])),
						_elm_lang$html$Html$text(' library')
					]))
			]));
};
var _user$project$Main$thanks = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[_user$project$Style$frame]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$h1,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Thanks!')
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Animation Library '),
						A2(
						_elm_lang$html$Html$br,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[])),
						A2(
						_elm_lang$html$Html$i,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('mdgriffith/elm-style-animation')
							]))
					]))
			]));
};
var _user$project$Main$initialStyle = _user$project$Animation$style(
	_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Animation$opacity(0),
			_user$project$Animation$display(_user$project$Animation$none)
		]));
var _user$project$Main$initialSubStyle = _user$project$Animation$style(
	_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Animation$opacity(1)
		]));
var _user$project$Main$viewStep = function (step) {
	var _p0 = step;
	if (_p0.ctor === 'Code') {
		return A2(
			_elm_lang$html$Html$code,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Animation$render(_p0._0),
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Style$code,
						_elm_lang$html$Html_Attributes$class('elm')
					])),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(_p0._1)
				]));
	} else {
		var _p1 = _p0._0;
		var renderPoints = function (content) {
			return A2(
				_elm_lang$html$Html$li,
				_user$project$Animation$render(_p1),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(content)
					]));
		};
		return A2(
			_elm_lang$html$Html$ul,
			_user$project$Animation$render(_p1),
			A2(_elm_lang$core$List$map, renderPoints, _p0._1));
	}
};
var _user$project$Main$viewSlide = F2(
	function (model, slide) {
		var _p2 = slide;
		if (_p2.ctor === 'Custom') {
			return A2(
				_elm_lang$html$Html$div,
				_user$project$Animation$render(_p2._0.style),
				_elm_lang$core$Native_List.fromArray(
					[
						_p2._0.html(model)
					]));
		} else {
			return A2(
				_elm_lang$html$Html$div,
				A2(
					_elm_lang$core$List_ops['::'],
					_user$project$Style$frame,
					_user$project$Animation$render(_p2._0.style)),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$h1,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(_p2._0.title)
							])),
						function () {
						var _p3 = _p2._0.steps;
						if (_p3.ctor === 'Nothing') {
							return _elm_lang$html$Html$text('');
						} else {
							return A2(
								_elm_lang$html$Html$div,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html_Attributes$class('steps')
									]),
								A2(_elm_lang$core$List$map, _user$project$Main$viewStep, _p3._0));
						}
					}()
					]));
		}
	});
var _user$project$Main$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A3(
				_elm_lang$html$Html$node,
				'link',
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$href('https://fonts.googleapis.com/css?family=Open+Sans'),
						_elm_lang$html$Html_Attributes$rel('stylesheet')
					]),
				_elm_lang$core$Native_List.fromArray(
					[])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Style$container]),
				A2(
					_elm_lang$core$List$map,
					_user$project$Main$viewSlide(model),
					model.slides))
			]));
};
var _user$project$Main_ops = _user$project$Main_ops || {};
_user$project$Main_ops['=>'] = F2(
	function (v0, v1) {
		return {ctor: '_Tuple2', _0: v0, _1: v1};
	});
var _user$project$Main$cornell = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[_user$project$Style$frame, _user$project$Style$cornell]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Style$name]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Matthew Griffith')
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$style(
						_elm_lang$core$Native_List.fromArray(
							[
								A2(_user$project$Main_ops['=>'], 'display', 'flex'),
								A2(_user$project$Main_ops['=>'], 'justify-content', 'center')
							]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$img,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html_Attributes$src('http://blog.cornelltech.io/content/images/2016/06/Mark-Solid-Foundry-F-Gradient.png'),
										_elm_lang$html$Html_Attributes$style(
										_elm_lang$core$Native_List.fromArray(
											[
												A2(_user$project$Main_ops['=>'], 'width', 'auto'),
												A2(_user$project$Main_ops['=>'], 'height', '120px'),
												A2(_user$project$Main_ops['=>'], 'padding', '35px')
											]))
									]),
								_elm_lang$core$Native_List.fromArray(
									[])),
								A2(
								_elm_lang$html$Html$br,
								_elm_lang$core$Native_List.fromArray(
									[]),
								_elm_lang$core$Native_List.fromArray(
									[])),
								_elm_lang$html$Html$text('The Foundry')
							])),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$img,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html_Attributes$src('https://mdgriffith.github.io/cornelltech/CornellTechLogo.png'),
										_elm_lang$html$Html_Attributes$style(
										_elm_lang$core$Native_List.fromArray(
											[
												A2(_user$project$Main_ops['=>'], 'width', 'auto'),
												A2(_user$project$Main_ops['=>'], 'height', '190px'),
												A2(_user$project$Main_ops['=>'], 'padding', '0 45px')
											]))
									]),
								_elm_lang$core$Native_List.fromArray(
									[])),
								A2(
								_elm_lang$html$Html$br,
								_elm_lang$core$Native_List.fromArray(
									[]),
								_elm_lang$core$Native_List.fromArray(
									[])),
								_elm_lang$html$Html$text('@ Cornell Tech')
							]))
					])),
				A2(
				_elm_lang$html$Html$br,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Style$hiring]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('We\'re hiring!')
					]))
			]));
};
var _user$project$Main$Model = F9(
	function (a, b, c, d, e, f, g, h, i) {
		return {moving: a, track: b, gears: c, cssFilter: d, shadow: e, polygon: f, polygonIndex: g, slides: h, slideIndex: i};
	});
var _user$project$Main$MoveShadow = {ctor: 'MoveShadow'};
var _user$project$Main$shadowMovement = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[_user$project$Style$frame]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$h1,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Or shadows!')
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Style$horizontal]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						A2(
							_elm_lang$core$Basics_ops['++'],
							_user$project$Animation$render(model.shadow),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Events$onMouseOver(_user$project$Main$MoveShadow),
									_user$project$Style$shadow
								])),
						_elm_lang$core$Native_List.fromArray(
							[])),
						A2(
						_elm_lang$html$Html$code,
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Style$code]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('\nAnimation.to\n   [ Animation.shadow\n         { offsetX = 0\n         , offsetY = 1\n         , size = 0\n         , blur = 2\n         , color = black\n         }\n  ]\n\n                    ')
							]))
					]))
			]));
};
var _user$project$Main$ActivateFilter = {ctor: 'ActivateFilter'};
var _user$project$Main$cssFilters = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[_user$project$Style$frame]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$h1,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Like CSS Filters!')
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Style$horizontal]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$img,
						A2(
							_elm_lang$core$Basics_ops['++'],
							_user$project$Animation$render(model.cssFilter),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html_Attributes$src('http://placekitten.com/300/300?image=10'),
									_elm_lang$html$Html_Events$onClick(_user$project$Main$ActivateFilter)
								])),
						_elm_lang$core$Native_List.fromArray(
							[])),
						A2(
						_elm_lang$html$Html$code,
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Style$code]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('\nAnimation.to\n    [ Animation.greyscale (100)\n    ]\n\n                    ')
							]))
					]))
			]));
};
var _user$project$Main$SwitchPolygon = function (a) {
	return {ctor: 'SwitchPolygon', _0: a};
};
var _user$project$Main$polygonTransitions = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[_user$project$Style$frame]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$h1,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Polygon Transitions!')
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Style$horizontal]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(_user$project$Polygons$view, model.polygon, _user$project$Main$SwitchPolygon)
							])),
						A2(
						_elm_lang$html$Html$code,
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Style$code]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text('\nAnimation.to\n    [ Animation.points\n        [ ( 161.649, 170.517 )\n        , ( 8.869, 323.298 )\n        , ( 314.43, 323.298 )\n        ]\n    , Animation.fill (Color.rgb 230 230 230)\n    ]\n\n                    ')
							]))
					]))
			]));
};
var _user$project$Main$Key = function (a) {
	return {ctor: 'Key', _0: a};
};
var _user$project$Main$Back = {ctor: 'Back'};
var _user$project$Main$Forward = {ctor: 'Forward'};
var _user$project$Main$Animate = function (a) {
	return {ctor: 'Animate', _0: a};
};
var _user$project$Main$Custom = function (a) {
	return {ctor: 'Custom', _0: a};
};
var _user$project$Main$Stepped = function (a) {
	return {ctor: 'Stepped', _0: a};
};
var _user$project$Main$animateSlide = F2(
	function (slide, animate) {
		var _p4 = slide;
		if (_p4.ctor === 'Custom') {
			var _p5 = _p4._0;
			return _user$project$Main$Custom(
				_elm_lang$core$Native_Utils.update(
					_p5,
					{
						style: animate(_p5.style)
					}));
		} else {
			var _p6 = _p4._0;
			return _user$project$Main$Stepped(
				_elm_lang$core$Native_Utils.update(
					_p6,
					{
						style: animate(_p6.style)
					}));
		}
	});
var _user$project$Main$update = F2(
	function (message, model) {
		update:
		while (true) {
			var _p7 = message;
			switch (_p7.ctor) {
				case 'Key':
					var _p8 = _p7._0;
					if (_elm_lang$core$Native_Utils.eq(_p8, 39)) {
						var _v5 = _user$project$Main$Forward,
							_v6 = model;
						message = _v5;
						model = _v6;
						continue update;
					} else {
						if (_elm_lang$core$Native_Utils.eq(_p8, 37)) {
							var _v7 = _user$project$Main$Back,
								_v8 = model;
							message = _v7;
							model = _v8;
							continue update;
						} else {
							return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
						}
					}
				case 'Forward':
					var newIndex = (_elm_lang$core$Native_Utils.cmp(
						model.slideIndex,
						_elm_lang$core$List$length(model.slides) - 1) < 0) ? (model.slideIndex + 1) : 0;
					var newSlides = A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (i, slide) {
								return _elm_lang$core$Native_Utils.eq(i, newIndex) ? A2(
									_user$project$Main$animateSlide,
									slide,
									_user$project$Animation$interrupt(
										_elm_lang$core$Native_List.fromArray(
											[
												_user$project$Animation$set(
												_elm_lang$core$Native_List.fromArray(
													[
														_user$project$Animation$display(_user$project$Animation$block)
													])),
												_user$project$Animation$to(
												_elm_lang$core$Native_List.fromArray(
													[
														_user$project$Animation$opacity(1)
													]))
											]))) : (_elm_lang$core$Native_Utils.eq(i, model.slideIndex) ? A2(
									_user$project$Main$animateSlide,
									slide,
									_user$project$Animation$interrupt(
										_elm_lang$core$Native_List.fromArray(
											[
												_user$project$Animation$set(
												_elm_lang$core$Native_List.fromArray(
													[
														_user$project$Animation$opacity(0),
														_user$project$Animation$display(_user$project$Animation$none)
													]))
											]))) : slide);
							}),
						model.slides);
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{slideIndex: newIndex, slides: newSlides}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'Back':
					var newIndex = (_elm_lang$core$Native_Utils.cmp(model.slideIndex, 0) > 0) ? (model.slideIndex - 1) : (_elm_lang$core$List$length(model.slides) - 1);
					var newSlides = A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (i, slide) {
								return _elm_lang$core$Native_Utils.eq(i, newIndex) ? A2(
									_user$project$Main$animateSlide,
									slide,
									_user$project$Animation$interrupt(
										_elm_lang$core$Native_List.fromArray(
											[
												_user$project$Animation$set(
												_elm_lang$core$Native_List.fromArray(
													[
														_user$project$Animation$display(_user$project$Animation$block)
													])),
												_user$project$Animation$to(
												_elm_lang$core$Native_List.fromArray(
													[
														_user$project$Animation$opacity(1)
													]))
											]))) : (_elm_lang$core$Native_Utils.eq(i, model.slideIndex) ? A2(
									_user$project$Main$animateSlide,
									slide,
									_user$project$Animation$interrupt(
										_elm_lang$core$Native_List.fromArray(
											[
												_user$project$Animation$set(
												_elm_lang$core$Native_List.fromArray(
													[
														_user$project$Animation$opacity(0),
														_user$project$Animation$display(_user$project$Animation$none)
													]))
											]))) : slide);
							}),
						model.slides);
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{slideIndex: newIndex, slides: newSlides}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'ActivateFilter':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								cssFilter: A2(
									_user$project$Animation$interrupt,
									_elm_lang$core$Native_List.fromArray(
										[
											_user$project$Animation$to(
											_elm_lang$core$Native_List.fromArray(
												[
													_user$project$Animation$greyscale(100)
												]))
										]),
									model.cssFilter)
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'MoveShadow':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								shadow: A2(
									_user$project$Animation$interrupt,
									_elm_lang$core$Native_List.fromArray(
										[
											_user$project$Animation$to(
											_elm_lang$core$Native_List.fromArray(
												[
													A2(
													_user$project$Animation$translate,
													_user$project$Animation$px(100),
													_user$project$Animation$px(100)),
													_user$project$Animation$scale(1.2),
													_user$project$Animation$backgroundColor(
													A3(_elm_lang$core$Color$rgb, 240, 173, 0)),
													_user$project$Animation$shadow(
													{
														offsetX: 50,
														offsetY: 55,
														blur: 15,
														size: 0,
														color: A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.1)
													})
												])),
											_user$project$Animation$to(
											_elm_lang$core$Native_List.fromArray(
												[
													A2(
													_user$project$Animation$translate,
													_user$project$Animation$px(0),
													_user$project$Animation$px(0)),
													_user$project$Animation$scale(1),
													_user$project$Animation$backgroundColor(
													A3(_elm_lang$core$Color$rgb, 96, 181, 204)),
													_user$project$Animation$shadow(
													{
														offsetX: 0,
														offsetY: 0,
														size: 0,
														blur: 2,
														color: A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.1)
													})
												]))
										]),
									model.shadow)
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'SwitchPolygon':
					var newPolygon = _elm_lang$core$List$head(
						A2(_elm_lang$core$List$drop, _p7._0, _user$project$Polygons$polygons));
					var _p9 = newPolygon;
					if (_p9.ctor === 'Just') {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{
									polygon: A2(
										_user$project$Animation$interrupt,
										_elm_lang$core$Native_List.fromArray(
											[
												_user$project$Animation$to(_p9._0)
											]),
										model.polygon)
								}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					} else {
						return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					}
				default:
					var _p13 = _p7._0;
					var shadow = A2(_user$project$Animation$update, _p13, model.shadow);
					var cssFilter = A2(_user$project$Animation$update, _p13, model.cssFilter);
					var polygon = A2(_user$project$Animation$update, _p13, model.polygon);
					var slides = A2(
						_elm_lang$core$List$map,
						function (slide) {
							var _p10 = slide;
							if (_p10.ctor === 'Custom') {
								var _p11 = _p10._0;
								return _user$project$Main$Custom(
									_elm_lang$core$Native_Utils.update(
										_p11,
										{
											style: A2(_user$project$Animation$update, _p13, _p11.style)
										}));
							} else {
								var _p12 = _p10._0;
								return _user$project$Main$Stepped(
									_elm_lang$core$Native_Utils.update(
										_p12,
										{
											style: A2(_user$project$Animation$update, _p13, _p12.style)
										}));
							}
						},
						model.slides);
					var track = A2(_user$project$Animation$update, _p13, model.track);
					var global = A2(_user$project$Animation$update, _p13, model.gears.global);
					var largePlanet = A2(_user$project$Animation$update, _p13, model.gears.largePlanet);
					var mediumPlanet = A2(_user$project$Animation$update, _p13, model.gears.mediumPlanet);
					var smallPlanet = A2(_user$project$Animation$update, _p13, model.gears.smallPlanet);
					var sun = A2(_user$project$Animation$update, _p13, model.gears.sun);
					var annulus = A2(_user$project$Animation$update, _p13, model.gears.annulus);
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								track: track,
								slides: slides,
								polygon: polygon,
								cssFilter: cssFilter,
								shadow: shadow,
								gears: {annulus: annulus, sun: sun, smallPlanet: smallPlanet, mediumPlanet: mediumPlanet, largePlanet: largePlanet, global: global}
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
			}
		}
	});
var _user$project$Main$BulletPoints = F2(
	function (a, b) {
		return {ctor: 'BulletPoints', _0: a, _1: b};
	});
var _user$project$Main$bulletPoints = function (points) {
	return A2(_user$project$Main$BulletPoints, _user$project$Main$initialSubStyle, points);
};
var _user$project$Main$Code = F2(
	function (a, b) {
		return {ctor: 'Code', _0: a, _1: b};
	});
var _user$project$Main$someCode = function (str) {
	return A2(_user$project$Main$Code, _user$project$Main$initialSubStyle, str);
};
var _user$project$Main$slides = _elm_lang$core$Native_List.fromArray(
	[
		_user$project$Main$Custom(
		{
			html: _user$project$Main$cornell,
			style: _user$project$Animation$style(
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Animation$opacity(1),
						_user$project$Animation$display(_user$project$Animation$block)
					])),
			hiddenNote: ''
		}),
		_user$project$Main$Custom(
		{html: _user$project$Main$talkIntro, style: _user$project$Main$initialStyle, hiddenNote: ''}),
		_user$project$Main$Stepped(
		{
			title: 'How do we talk about animation?',
			hiddenNote: 'OK, so I got this thing.  I need it to make it:',
			style: _user$project$Main$initialStyle,
			steps: _elm_lang$core$Maybe$Just(
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Main$bulletPoints(
						_elm_lang$core$Native_List.fromArray(
							['fade in and change position', 'then tell me it\'s done', 'then begin rotating until further notice']))
					]))
		}),
		_user$project$Main$Stepped(
		{
			title: 'A list as our interface',
			hiddenNote: 'OK, so I got this thing.  I need it to make it:',
			style: _user$project$Main$initialStyle,
			steps: _elm_lang$core$Maybe$Just(
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Main$someCode('\n[ to [ opacity 1\n     , left (px 200)\n     ]\n, send DoneFadingIn\n, loop\n      [ to [ rotate (degrees 360) ]\n      , set [ rotate (degrees 0) ]\n      ]\n]\n')
					]))
		}),
		_user$project$Main$Stepped(
		{
			title: 'What if the animation is already doing something?',
			hiddenNote: 'OK, so I got this thing.  I need it to make it:',
			style: _user$project$Main$initialStyle,
			steps: _elm_lang$core$Maybe$Just(
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Main$bulletPoints(
						_elm_lang$core$Native_List.fromArray(
							['Smoothly interrupt it', 'Queue up after it'])),
						_user$project$Main$someCode('\nAnimation.interrupt\n    [ ourListofInstructions\n    ]\n')
					]))
		}),
		_user$project$Main$Stepped(
		{
			title: 'How do we get from A to B?',
			hiddenNote: 'OK, so I got this thing.  I need it to make it:',
			style: _user$project$Main$initialStyle,
			steps: _elm_lang$core$Maybe$Just(
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Main$bulletPoints(
						_elm_lang$core$Native_List.fromArray(
							['Duration/Easing', 'Springs (default in elm-style-animation)']))
					]))
		}),
		_user$project$Main$Stepped(
		{
			title: 'Intuition for Springs',
			hiddenNote: 'You’re may be avoiding springs because no one gave you a good intuition about them.  And they’re hard to do in CSS Transitions.  You have two properties to specify to create a spring.  First, the stiffness, which says \'how fast does this move\'?  Second, the damping which says \'how fast does this settle?\'',
			style: _user$project$Main$initialStyle,
			steps: _elm_lang$core$Maybe$Just(
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Main$bulletPoints(
						_elm_lang$core$Native_List.fromArray(
							['Stiffness - How fast does it move?', 'Damping - How fast does it settle?', 'Duration is a secondary property of the spring.']))
					]))
		}),
		_user$project$Main$Stepped(
		{title: 'Animating Cool Stuff!', hiddenNote: '', style: _user$project$Main$initialStyle, steps: _elm_lang$core$Maybe$Nothing}),
		_user$project$Main$Custom(
		{hiddenNote: '', style: _user$project$Main$initialStyle, html: _user$project$Main$cssFilters}),
		_user$project$Main$Custom(
		{hiddenNote: '', style: _user$project$Main$initialStyle, html: _user$project$Main$polygonTransitions}),
		_user$project$Main$Custom(
		{hiddenNote: '', style: _user$project$Main$initialStyle, html: _user$project$Main$shadowMovement}),
		_user$project$Main$Custom(
		{html: _user$project$Main$thanks, style: _user$project$Main$initialStyle, hiddenNote: ''})
	]);
var _user$project$Main$main = {
	main: _elm_lang$html$Html_App$program(
		{
			init: {
				ctor: '_Tuple2',
				_0: {
					moving: false,
					track: _user$project$Animation$style(
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$left(
								_user$project$Animation$px(0)),
								_user$project$Animation$top(
								_user$project$Animation$px(0))
							])),
					gears: _user$project$Gears$beginInitialRotate(
						{
							annulus: _user$project$Animation$style(
								_elm_lang$core$Native_List.fromArray(
									[
										_user$project$Animation$rotate(
										_user$project$Animation$turn(0))
									])),
							sun: _user$project$Animation$style(
								_elm_lang$core$Native_List.fromArray(
									[
										_user$project$Animation$rotate(
										_user$project$Animation$turn(0))
									])),
							smallPlanet: _user$project$Animation$style(
								_elm_lang$core$Native_List.fromArray(
									[
										_user$project$Animation$rotate(
										_user$project$Animation$turn(0))
									])),
							mediumPlanet: _user$project$Animation$style(
								_elm_lang$core$Native_List.fromArray(
									[
										_user$project$Animation$rotate(
										_user$project$Animation$turn(0))
									])),
							largePlanet: _user$project$Animation$style(
								_elm_lang$core$Native_List.fromArray(
									[
										_user$project$Animation$rotate(
										_user$project$Animation$turn(0))
									])),
							global: _user$project$Animation$style(
								_elm_lang$core$Native_List.fromArray(
									[
										_user$project$Animation$rotate(
										_user$project$Animation$turn(0))
									]))
						}),
					polygon: _user$project$Animation$style(
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$points(
								_elm_lang$core$Native_List.fromArray(
									[
										{ctor: '_Tuple2', _0: 8.867, _1: 0},
										{ctor: '_Tuple2', _0: 79.241, _1: 70.375},
										{ctor: '_Tuple2', _0: 232.213, _1: 70.375},
										{ctor: '_Tuple2', _0: 161.838, _1: 0}
									])),
								_user$project$Animation$fill(
								A3(_elm_lang$core$Color$rgb, 127, 209, 59))
							])),
					shadow: _user$project$Animation$style(
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$shadow(
								{
									offsetX: 0,
									offsetY: 1,
									size: 0,
									blur: 2,
									color: A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.1)
								}),
								A2(
								_user$project$Animation$translate,
								_user$project$Animation$px(0),
								_user$project$Animation$px(0)),
								_user$project$Animation$scale(1),
								_user$project$Animation$backgroundColor(
								A3(_elm_lang$core$Color$rgb, 96, 181, 204))
							])),
					polygonIndex: 1,
					cssFilter: _user$project$Animation$style(
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Animation$blur(
								_user$project$Animation$px(0)),
								_user$project$Animation$greyscale(0)
							])),
					slides: _user$project$Main$slides,
					slideIndex: 0
				},
				_1: _elm_lang$core$Platform_Cmd$none
			},
			view: _user$project$Main$view,
			update: _user$project$Main$update,
			subscriptions: function (model) {
				return _elm_lang$core$Platform_Sub$batch(
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_user$project$Animation$subscription,
							_user$project$Main$Animate,
							_elm_lang$core$Native_List.fromArray(
								[model.gears.annulus, model.gears.sun, model.gears.smallPlanet, model.gears.largePlanet, model.gears.mediumPlanet])),
							_elm_lang$keyboard$Keyboard$downs(_user$project$Main$Key)
						]));
			}
		})
};

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
_elm_lang$core$Native_Platform.addPublicModule(Elm['Main'], 'Main', typeof _user$project$Main$main === 'undefined' ? null : _user$project$Main$main);

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);
