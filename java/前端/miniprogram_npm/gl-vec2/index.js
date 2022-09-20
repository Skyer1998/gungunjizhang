module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1661774171920, function(require, module, exports) {
module.exports = {
  EPSILON: require('./epsilon')
  , create: require('./create')
  , clone: require('./clone')
  , fromValues: require('./fromValues')
  , copy: require('./copy')
  , set: require('./set')
  , equals: require('./equals')
  , exactEquals: require('./exactEquals')
  , add: require('./add')
  , subtract: require('./subtract')
  , sub: require('./sub')
  , multiply: require('./multiply')
  , mul: require('./mul')
  , divide: require('./divide')
  , div: require('./div')
  , inverse: require('./inverse')
  , min: require('./min')
  , max: require('./max')
  , rotate: require('./rotate')
  , floor: require('./floor')
  , ceil: require('./ceil')
  , round: require('./round')
  , scale: require('./scale')
  , scaleAndAdd: require('./scaleAndAdd')
  , distance: require('./distance')
  , dist: require('./dist')
  , squaredDistance: require('./squaredDistance')
  , sqrDist: require('./sqrDist')
  , length: require('./length')
  , len: require('./len')
  , squaredLength: require('./squaredLength')
  , sqrLen: require('./sqrLen')
  , negate: require('./negate')
  , normalize: require('./normalize')
  , dot: require('./dot')
  , cross: require('./cross')
  , lerp: require('./lerp')
  , random: require('./random')
  , transformMat2: require('./transformMat2')
  , transformMat2d: require('./transformMat2d')
  , transformMat3: require('./transformMat3')
  , transformMat4: require('./transformMat4')
  , forEach: require('./forEach')
  , limit: require('./limit')
}

}, function(modId) {var map = {"./epsilon":1661774171921,"./create":1661774171922,"./clone":1661774171923,"./fromValues":1661774171924,"./copy":1661774171925,"./set":1661774171926,"./equals":1661774171927,"./exactEquals":1661774171928,"./add":1661774171929,"./subtract":1661774171930,"./sub":1661774171931,"./multiply":1661774171932,"./mul":1661774171933,"./divide":1661774171934,"./div":1661774171935,"./inverse":1661774171936,"./min":1661774171937,"./max":1661774171938,"./rotate":1661774171939,"./floor":1661774171940,"./ceil":1661774171941,"./round":1661774171942,"./scale":1661774171943,"./scaleAndAdd":1661774171944,"./distance":1661774171945,"./dist":1661774171946,"./squaredDistance":1661774171947,"./sqrDist":1661774171948,"./length":1661774171949,"./len":1661774171950,"./squaredLength":1661774171951,"./sqrLen":1661774171952,"./negate":1661774171953,"./normalize":1661774171954,"./dot":1661774171955,"./cross":1661774171956,"./lerp":1661774171957,"./random":1661774171958,"./transformMat2":1661774171959,"./transformMat2d":1661774171960,"./transformMat3":1661774171961,"./transformMat4":1661774171962,"./forEach":1661774171963,"./limit":1661774171964}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171921, function(require, module, exports) {
module.exports = 0.000001

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171922, function(require, module, exports) {
module.exports = create

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
    var out = new Float32Array(2)
    out[0] = 0
    out[1] = 0
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171923, function(require, module, exports) {
module.exports = clone

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
    var out = new Float32Array(2)
    out[0] = a[0]
    out[1] = a[1]
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171924, function(require, module, exports) {
module.exports = fromValues

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
    var out = new Float32Array(2)
    out[0] = x
    out[1] = y
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171925, function(require, module, exports) {
module.exports = copy

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
    out[0] = a[0]
    out[1] = a[1]
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171926, function(require, module, exports) {
module.exports = set

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
    out[0] = x
    out[1] = y
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171927, function(require, module, exports) {
module.exports = equals

var EPSILON = require('./epsilon')

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0]
  var a1 = a[1]
  var b0 = b[0]
  var b1 = b[1]
  return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)))
}

}, function(modId) { var map = {"./epsilon":1661774171921}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171928, function(require, module, exports) {
module.exports = exactEquals

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1]
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171929, function(require, module, exports) {
module.exports = add

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171930, function(require, module, exports) {
module.exports = subtract

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171931, function(require, module, exports) {
module.exports = require('./subtract')

}, function(modId) { var map = {"./subtract":1661774171930}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171932, function(require, module, exports) {
module.exports = multiply

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171933, function(require, module, exports) {
module.exports = require('./multiply')

}, function(modId) { var map = {"./multiply":1661774171932}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171934, function(require, module, exports) {
module.exports = divide

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171935, function(require, module, exports) {
module.exports = require('./divide')

}, function(modId) { var map = {"./divide":1661774171934}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171936, function(require, module, exports) {
module.exports = inverse

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0]
  out[1] = 1.0 / a[1]
  return out
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171937, function(require, module, exports) {
module.exports = min

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0])
    out[1] = Math.min(a[1], b[1])
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171938, function(require, module, exports) {
module.exports = max

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0])
    out[1] = Math.max(a[1], b[1])
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171939, function(require, module, exports) {
module.exports = rotate

/**
 * Rotates a vec2 by an angle
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to rotate
 * @param {Number} angle the angle of rotation (in radians)
 * @returns {vec2} out
 */
function rotate(out, a, angle) {
  var c = Math.cos(angle),
      s = Math.sin(angle)
  var x = a[0],
      y = a[1]

  out[0] = x * c - y * s
  out[1] = x * s + y * c

  return out
}


}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171940, function(require, module, exports) {
module.exports = floor

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0])
  out[1] = Math.floor(a[1])
  return out
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171941, function(require, module, exports) {
module.exports = ceil

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0])
  out[1] = Math.ceil(a[1])
  return out
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171942, function(require, module, exports) {
module.exports = round

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round(out, a) {
  out[0] = Math.round(a[0])
  out[1] = Math.round(a[1])
  return out
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171943, function(require, module, exports) {
module.exports = scale

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171944, function(require, module, exports) {
module.exports = scaleAndAdd

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale)
    out[1] = a[1] + (b[1] * scale)
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171945, function(require, module, exports) {
module.exports = distance

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1]
    return Math.sqrt(x*x + y*y)
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171946, function(require, module, exports) {
module.exports = require('./distance')

}, function(modId) { var map = {"./distance":1661774171945}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171947, function(require, module, exports) {
module.exports = squaredDistance

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1]
    return x*x + y*y
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171948, function(require, module, exports) {
module.exports = require('./squaredDistance')

}, function(modId) { var map = {"./squaredDistance":1661774171947}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171949, function(require, module, exports) {
module.exports = length

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1]
    return Math.sqrt(x*x + y*y)
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171950, function(require, module, exports) {
module.exports = require('./length')

}, function(modId) { var map = {"./length":1661774171949}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171951, function(require, module, exports) {
module.exports = squaredLength

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1]
    return x*x + y*y
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171952, function(require, module, exports) {
module.exports = require('./squaredLength')

}, function(modId) { var map = {"./squaredLength":1661774171951}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171953, function(require, module, exports) {
module.exports = negate

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
    out[0] = -a[0]
    out[1] = -a[1]
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171954, function(require, module, exports) {
module.exports = normalize

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1]
    var len = x*x + y*y
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
    }
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171955, function(require, module, exports) {
module.exports = dot

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1]
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171956, function(require, module, exports) {
module.exports = cross

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0]
    out[0] = out[1] = 0
    out[2] = z
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171957, function(require, module, exports) {
module.exports = lerp

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1]
    out[0] = ax + t * (b[0] - ax)
    out[1] = ay + t * (b[1] - ay)
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171958, function(require, module, exports) {
module.exports = random

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
    scale = scale || 1.0
    var r = Math.random() * 2.0 * Math.PI
    out[0] = Math.cos(r) * scale
    out[1] = Math.sin(r) * scale
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171959, function(require, module, exports) {
module.exports = transformMat2

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[2] * y
    out[1] = m[1] * x + m[3] * y
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171960, function(require, module, exports) {
module.exports = transformMat2d

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[2] * y + m[4]
    out[1] = m[1] * x + m[3] * y + m[5]
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171961, function(require, module, exports) {
module.exports = transformMat3

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[3] * y + m[6]
    out[1] = m[1] * x + m[4] * y + m[7]
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171962, function(require, module, exports) {
module.exports = transformMat4

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
    var x = a[0], 
        y = a[1]
    out[0] = m[0] * x + m[4] * y + m[12]
    out[1] = m[1] * x + m[5] * y + m[13]
    return out
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171963, function(require, module, exports) {
module.exports = forEach

var vec = require('./create')()

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
function forEach(a, stride, offset, count, fn, arg) {
    var i, l
    if(!stride) {
        stride = 2
    }

    if(!offset) {
        offset = 0
    }
    
    if(count) {
        l = Math.min((count * stride) + offset, a.length)
    } else {
        l = a.length
    }

    for(i = offset; i < l; i += stride) {
        vec[0] = a[i]
        vec[1] = a[i+1]
        fn(vec, vec, arg)
        a[i] = vec[0]
        a[i+1] = vec[1]
    }
    
    return a
}
}, function(modId) { var map = {"./create":1661774171922}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171964, function(require, module, exports) {
module.exports = limit;

/**
 * Limit the magnitude of this vector to the value used for the `max`
 * parameter.
 *
 * @param  {vec2} the vector to limit
 * @param  {Number} max the maximum magnitude for the vector
 * @returns {vec2} out
 */
function limit(out, a, max) {
  var mSq = a[0] * a[0] + a[1] * a[1];

  if (mSq > max * max) {
    var n = Math.sqrt(mSq);
    out[0] = a[0] / n * max;
    out[1] = a[1] / n * max;
  } else {
    out[0] = a[0];
    out[1] = a[1];
  }

  return out;
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1661774171920);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map