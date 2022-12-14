module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1661774171146, function(require, module, exports) {


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GADDI", {
  enumerable: true,
  get: function get() {
    return _gaddi.default;
  }
});
Object.defineProperty(exports, "Stack", {
  enumerable: true,
  get: function get() {
    return _stack.default;
  }
});
Object.defineProperty(exports, "breadthFirstSearch", {
  enumerable: true,
  get: function get() {
    return _bfs.default;
  }
});
Object.defineProperty(exports, "connectedComponent", {
  enumerable: true,
  get: function get() {
    return _connectedComponent.default;
  }
});
Object.defineProperty(exports, "cosineSimilarity", {
  enumerable: true,
  get: function get() {
    return _cosineSimilarity.default;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "depthFirstSearch", {
  enumerable: true,
  get: function get() {
    return _dfs.default;
  }
});
Object.defineProperty(exports, "detectAllCycles", {
  enumerable: true,
  get: function get() {
    return _detectCycle.detectAllCycles;
  }
});
Object.defineProperty(exports, "detectAllDirectedCycle", {
  enumerable: true,
  get: function get() {
    return _detectCycle.detectAllDirectedCycle;
  }
});
Object.defineProperty(exports, "detectAllUndirectedCycle", {
  enumerable: true,
  get: function get() {
    return _detectCycle.detectAllUndirectedCycle;
  }
});
Object.defineProperty(exports, "detectCycle", {
  enumerable: true,
  get: function get() {
    return _detectCycle.default;
  }
});
exports.detectDirectedCycle = void 0;
Object.defineProperty(exports, "dijkstra", {
  enumerable: true,
  get: function get() {
    return _dijkstra.default;
  }
});
Object.defineProperty(exports, "findAllPath", {
  enumerable: true,
  get: function get() {
    return _findPath.findAllPath;
  }
});
Object.defineProperty(exports, "findShortestPath", {
  enumerable: true,
  get: function get() {
    return _findPath.findShortestPath;
  }
});
Object.defineProperty(exports, "floydWarshall", {
  enumerable: true,
  get: function get() {
    return _floydWarshall.default;
  }
});
Object.defineProperty(exports, "getAdjMatrix", {
  enumerable: true,
  get: function get() {
    return _adjacentMatrix.default;
  }
});
Object.defineProperty(exports, "getDegree", {
  enumerable: true,
  get: function get() {
    return _degree.default;
  }
});
Object.defineProperty(exports, "getInDegree", {
  enumerable: true,
  get: function get() {
    return _degree.getInDegree;
  }
});
Object.defineProperty(exports, "getNeighbors", {
  enumerable: true,
  get: function get() {
    return _util.getNeighbors;
  }
});
Object.defineProperty(exports, "getOutDegree", {
  enumerable: true,
  get: function get() {
    return _degree.getOutDegree;
  }
});
Object.defineProperty(exports, "iLouvain", {
  enumerable: true,
  get: function get() {
    return _iLouvain.default;
  }
});
Object.defineProperty(exports, "kCore", {
  enumerable: true,
  get: function get() {
    return _kCore.default;
  }
});
Object.defineProperty(exports, "kMeans", {
  enumerable: true,
  get: function get() {
    return _kMeans.default;
  }
});
Object.defineProperty(exports, "labelPropagation", {
  enumerable: true,
  get: function get() {
    return _labelPropagation.default;
  }
});
Object.defineProperty(exports, "louvain", {
  enumerable: true,
  get: function get() {
    return _louvain.default;
  }
});
Object.defineProperty(exports, "minimumSpanningTree", {
  enumerable: true,
  get: function get() {
    return _mts.default;
  }
});
Object.defineProperty(exports, "nodesCosineSimilarity", {
  enumerable: true,
  get: function get() {
    return _nodesCosineSimilarity.default;
  }
});
Object.defineProperty(exports, "pageRank", {
  enumerable: true,
  get: function get() {
    return _pageRank.default;
  }
});

var _adjacentMatrix = _interopRequireDefault(require("./adjacent-matrix"));

var _bfs = _interopRequireDefault(require("./bfs"));

var _connectedComponent = _interopRequireDefault(require("./connected-component"));

var _degree = _interopRequireWildcard(require("./degree"));

var _detectCycle = _interopRequireWildcard(require("./detect-cycle"));

var _dfs = _interopRequireDefault(require("./dfs"));

var _dijkstra = _interopRequireDefault(require("./dijkstra"));

var _findPath = require("./find-path");

var _floydWarshall = _interopRequireDefault(require("./floydWarshall"));

var _labelPropagation = _interopRequireDefault(require("./label-propagation"));

var _louvain = _interopRequireDefault(require("./louvain"));

var _iLouvain = _interopRequireDefault(require("./i-louvain"));

var _kCore = _interopRequireDefault(require("./k-core"));

var _kMeans = _interopRequireDefault(require("./k-means"));

var _cosineSimilarity = _interopRequireDefault(require("./cosine-similarity"));

var _nodesCosineSimilarity = _interopRequireDefault(require("./nodes-cosine-similarity"));

var _mts = _interopRequireDefault(require("./mts"));

var _pageRank = _interopRequireDefault(require("./pageRank"));

var _gaddi = _interopRequireDefault(require("./gaddi"));

var _stack = _interopRequireDefault(require("./structs/stack"));

var _util = require("./util");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var detectDirectedCycle = _detectCycle.default;
exports.detectDirectedCycle = detectDirectedCycle;
var _default = {
  getAdjMatrix: _adjacentMatrix.default,
  breadthFirstSearch: _bfs.default,
  connectedComponent: _connectedComponent.default,
  getDegree: _degree.default,
  getInDegree: _degree.getInDegree,
  getOutDegree: _degree.getOutDegree,
  detectCycle: _detectCycle.default,
  detectDirectedCycle: detectDirectedCycle,
  detectAllCycles: _detectCycle.detectAllCycles,
  detectAllDirectedCycle: _detectCycle.detectAllDirectedCycle,
  detectAllUndirectedCycle: _detectCycle.detectAllUndirectedCycle,
  depthFirstSearch: _dfs.default,
  dijkstra: _dijkstra.default,
  findAllPath: _findPath.findAllPath,
  findShortestPath: _findPath.findShortestPath,
  floydWarshall: _floydWarshall.default,
  labelPropagation: _labelPropagation.default,
  louvain: _louvain.default,
  iLouvain: _iLouvain.default,
  kCore: _kCore.default,
  kMeans: _kMeans.default,
  cosineSimilarity: _cosineSimilarity.default,
  nodesCosineSimilarity: _nodesCosineSimilarity.default,
  minimumSpanningTree: _mts.default,
  pageRank: _pageRank.default,
  getNeighbors: _util.getNeighbors,
  Stack: _stack.default,
  GADDI: _gaddi.default
};
exports.default = _default;
}, function(modId) {var map = {"./adjacent-matrix":1661774171147,"./bfs":1661774171148,"./connected-component":1661774171152,"./degree":1661774171153,"./detect-cycle":1661774171154,"./dfs":1661774171155,"./dijkstra":1661774171156,"./find-path":1661774171157,"./floydWarshall":1661774171158,"./label-propagation":1661774171159,"./louvain":1661774171160,"./i-louvain":1661774171166,"./k-core":1661774171167,"./k-means":1661774171168,"./cosine-similarity":1661774171169,"./nodes-cosine-similarity":1661774171170,"./mts":1661774171171,"./pageRank":1661774171174,"./gaddi":1661774171175,"./structs/stack":1661774171178,"./util":1661774171151}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171147, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var adjMatrix = function adjMatrix(graphData, directed) {
  var nodes = graphData.nodes,
      edges = graphData.edges;
  var matrix = []; // map node with index in data.nodes

  var nodeMap = {};

  if (!nodes) {
    throw new Error("invalid nodes data!");
  }

  if (nodes) {
    nodes.forEach(function (node, i) {
      nodeMap[node.id] = i;
      var row = [];
      matrix.push(row);
    });
  }

  if (edges) {
    edges.forEach(function (edge) {
      var source = edge.source,
          target = edge.target;
      var sIndex = nodeMap[source];
      var tIndex = nodeMap[target];
      if (!sIndex && sIndex !== 0 || !tIndex && tIndex !== 0) return;
      matrix[sIndex][tIndex] = 1;

      if (!directed) {
        matrix[tIndex][sIndex] = 1;
      }
    });
  }

  return matrix;
};

var _default = adjMatrix;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171148, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queue = _interopRequireDefault(require("./structs/queue"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param callbacks
 * allowTraversal: ?????? BFS ????????????????????????????????????????????????????????????????????????????????????????????????
 * enterNode: ??? BFS ???????????????????????????
 * leaveNode: ??? BFS ???????????????????????????????????????
 */
function initCallbacks(callbacks) {
  if (callbacks === void 0) {
    callbacks = {};
  }

  var initiatedCallback = callbacks;

  var stubCallback = function stubCallback() {};

  var allowTraversalCallback = function () {
    var seen = {};
    return function (_a) {
      var next = _a.next;
      var id = next;

      if (!seen[id]) {
        seen[id] = true;
        return true;
      }

      return false;
    };
  }();

  initiatedCallback.allowTraversal = callbacks.allowTraversal || allowTraversalCallback;
  initiatedCallback.enter = callbacks.enter || stubCallback;
  initiatedCallback.leave = callbacks.leave || stubCallback;
  return initiatedCallback;
}
/**
 * ?????????????????????
 * @param graph Graph ?????????
 * @param startNode ?????????????????????
 * @param originalCallbacks ??????
 */


var breadthFirstSearch = function breadthFirstSearch(graphData, startNodeId, originalCallbacks, directed) {
  if (directed === void 0) {
    directed = true;
  }

  var callbacks = initCallbacks(originalCallbacks);
  var nodeQueue = new _queue.default();
  var _a = graphData.edges,
      edges = _a === void 0 ? [] : _a; // ?????????????????????

  nodeQueue.enqueue(startNodeId);
  var previousNode = '';

  var _loop_1 = function _loop_1() {
    var currentNode = nodeQueue.dequeue();
    callbacks.enter({
      current: currentNode,
      previous: previousNode
    }); // ?????????????????????????????????????????????

    (0, _util.getNeighbors)(currentNode, edges, directed ? 'target' : undefined).forEach(function (nextNode) {
      if (callbacks.allowTraversal({
        previous: previousNode,
        current: currentNode,
        next: nextNode
      })) {
        nodeQueue.enqueue(nextNode);
      }
    });
    callbacks.leave({
      current: currentNode,
      previous: previousNode
    }); // ???????????????????????????????????????

    previousNode = currentNode;
  }; // ??????????????????????????????


  while (!nodeQueue.isEmpty()) {
    _loop_1();
  }
};

var _default = breadthFirstSearch;
exports.default = _default;
}, function(modId) { var map = {"./structs/queue":1661774171149,"./util":1661774171151}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171149, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _linkedList = _interopRequireDefault(require("./linked-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Queue =
/** @class */
function () {
  function Queue() {
    this.linkedList = new _linkedList.default();
  }
  /**
   * ??????????????????
   */


  Queue.prototype.isEmpty = function () {
    return !this.linkedList.head;
  };
  /**
   * ?????????????????????????????? ???????????????????????????
   */


  Queue.prototype.peek = function () {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  };
  /**
   * ????????????????????????????????????
   * @param value
   */


  Queue.prototype.enqueue = function (value) {
    this.linkedList.append(value);
  };
  /**
   * ??????????????????????????????????????????????????????????????? null
   */


  Queue.prototype.dequeue = function () {
    var removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  };

  Queue.prototype.toString = function (callback) {
    return this.linkedList.toString(callback);
  };

  return Queue;
}();

var _default = Queue;
exports.default = _default;
}, function(modId) { var map = {"./linked-list":1661774171150}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171150, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LinkedListNode = void 0;

var defaultComparator = function defaultComparator(a, b) {
  if (a === b) {
    return true;
  }

  return false;
};
/**
 * ???????????????????????????
 */


var LinkedListNode =
/** @class */
function () {
  function LinkedListNode(value, next) {
    if (next === void 0) {
      next = null;
    }

    this.value = value;
    this.next = next;
  }

  LinkedListNode.prototype.toString = function (callback) {
    return callback ? callback(this.value) : "".concat(this.value);
  };

  return LinkedListNode;
}();

exports.LinkedListNode = LinkedListNode;

var LinkedList =
/** @class */
function () {
  function LinkedList(comparator) {
    if (comparator === void 0) {
      comparator = defaultComparator;
    }

    this.head = null;
    this.tail = null;
    this.compare = comparator;
  }
  /**
   * ????????????????????????????????????
   * @param value
   */


  LinkedList.prototype.prepend = function (value) {
    // ???????????????????????????
    var newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  };
  /**
   * ?????????????????????????????????
   * @param value
   */


  LinkedList.prototype.append = function (value) {
    var newNode = new LinkedListNode(value); // ??????????????????????????????????????????????????????????????????

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    } // ?????????????????????????????????


    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  };
  /**
   * ??????????????????
   * @param value ??????????????????
   */


  LinkedList.prototype.delete = function (value) {
    if (!this.head) {
      return null;
    }

    var deleteNode = null; // ???????????????????????????????????????next???????????????

    while (this.head && this.compare(this.head.value, value)) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    var currentNode = this.head;

    if (currentNode !== null) {
      // ?????????????????????????????????next????????????
      while (currentNode.next) {
        if (this.compare(currentNode.next.value, value)) {
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    } // ?????????????????????????????????


    if (this.compare(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deleteNode;
  };
  /**
   * ?????????????????????
   * @param param0
   */


  LinkedList.prototype.find = function (_a) {
    var _b = _a.value,
        value = _b === void 0 ? undefined : _b,
        _c = _a.callback,
        callback = _c === void 0 ? undefined : _c;

    if (!this.head) {
      return null;
    }

    var currentNode = this.head;

    while (currentNode) {
      // ??????????????? callback?????????????????? callback ??????
      if (callback && callback(currentNode.value)) {
        return currentNode;
      } // ??????????????? value????????? value ??????


      if (value !== undefined && this.compare(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  };
  /**
   * ??????????????????
   */


  LinkedList.prototype.deleteTail = function () {
    var deletedTail = this.tail;

    if (this.head === this.tail) {
      // ???????????????????????????
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    var currentNode = this.head;

    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    return deletedTail;
  };
  /**
   * ??????????????????
   */


  LinkedList.prototype.deleteHead = function () {
    if (!this.head) {
      return null;
    }

    var deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  };
  /**
   * ???????????????????????????????????????
   * @param values ??????????????????
   */


  LinkedList.prototype.fromArray = function (values) {
    var _this = this;

    values.forEach(function (value) {
      return _this.append(value);
    });
    return this;
  };
  /**
   * ???????????????????????????????????????
   */


  LinkedList.prototype.toArray = function () {
    var nodes = [];
    var currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  };
  /**
   * ??????????????????????????????
   */


  LinkedList.prototype.reverse = function () {
    var currentNode = this.head;
    var prevNode = null;
    var nextNode = null;

    while (currentNode) {
      // ???????????????????????????
      nextNode = currentNode.next; // ??????????????????????????????????????????????????????????????????????????????

      currentNode.next = prevNode; // ??? prevNode ??? currentNode ??????????????????

      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;
  };

  LinkedList.prototype.toString = function (callback) {
    if (callback === void 0) {
      callback = undefined;
    }

    return this.toArray().map(function (node) {
      return node.toString(callback);
    }).toString();
  };

  return LinkedList;
}();

var _default = LinkedList;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171151, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueId = exports.getOutEdgesNodeId = exports.getNeighbors = exports.getEdgesByNodeId = void 0;

/**
 * ?????????????????????????????????
 * @param nodeId ?????? ID
 * @param edges ????????????????????????
 * @param type ????????????
 */
var getNeighbors = function getNeighbors(nodeId, edges, type) {
  if (edges === void 0) {
    edges = [];
  }

  var currentEdges = edges.filter(function (edge) {
    return edge.source === nodeId || edge.target === nodeId;
  });

  if (type === 'target') {
    // ??????????????? source??????????????????????????????
    var neighhborsConverter_1 = function neighhborsConverter_1(edge) {
      return edge.source === nodeId;
    };

    return currentEdges.filter(neighhborsConverter_1).map(function (edge) {
      return edge.target;
    });
  }

  if (type === 'source') {
    // ??????????????? target???????????????????????????
    var neighhborsConverter_2 = function neighhborsConverter_2(edge) {
      return edge.target === nodeId;
    };

    return currentEdges.filter(neighhborsConverter_2).map(function (edge) {
      return edge.source;
    });
  } // ???????????? type ????????????????????????


  var neighhborsConverter = function neighhborsConverter(edge) {
    return edge.source === nodeId ? edge.target : edge.source;
  };

  return currentEdges.map(neighhborsConverter);
};
/**
 * ???????????????????????????
 * @param nodeId ?????? ID
 * @param edges ????????????????????????
 */


exports.getNeighbors = getNeighbors;

var getOutEdgesNodeId = function getOutEdgesNodeId(nodeId, edges) {
  return edges.filter(function (edge) {
    return edge.source === nodeId;
  });
};
/**
 * ????????????????????????????????????????????????
 * @param nodeId ?????? ID
 * @param edges ????????????????????????
 */


exports.getOutEdgesNodeId = getOutEdgesNodeId;

var getEdgesByNodeId = function getEdgesByNodeId(nodeId, edges) {
  return edges.filter(function (edge) {
    return edge.source === nodeId || edge.target === nodeId;
  });
};
/**
 * ??????????????? ID?????????????????? + ?????????
 * @param index ??????
 */


exports.getEdgesByNodeId = getEdgesByNodeId;

var uniqueId = function uniqueId(index) {
  if (index === void 0) {
    index = 0;
  }

  var random1 = "".concat(Math.random()).split('.')[1].substr(0, 5);
  var random2 = "".concat(Math.random()).split('.')[1].substr(0, 5);
  return "".concat(index, "-").concat(random1).concat(random2);
};

exports.uniqueId = uniqueId;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171152, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getConnectedComponents;
exports.detectStrongConnectComponents = exports.detectConnectedComponents = void 0;

var _util = require("./util");

/**
 * Generate all connected components for an undirected graph
 * @param graph
 */
var detectConnectedComponents = function detectConnectedComponents(graphData) {
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var allComponents = [];
  var visited = {};
  var nodeStack = [];

  var getComponent = function getComponent(node) {
    nodeStack.push(node);
    visited[node.id] = true;
    var neighbors = (0, _util.getNeighbors)(node.id, edges);

    var _loop_1 = function _loop_1(i) {
      var neighbor = neighbors[i];

      if (!visited[neighbor]) {
        var targetNode = nodes.filter(function (node) {
          return node.id === neighbor;
        });

        if (targetNode.length > 0) {
          getComponent(targetNode[0]);
        }
      }
    };

    for (var i = 0; i < neighbors.length; ++i) {
      _loop_1(i);
    }
  };

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    if (!visited[node.id]) {
      // ?????????????????????dfs??????????????????????????????????????????????????????
      getComponent(node);
      var component = [];

      while (nodeStack.length > 0) {
        component.push(nodeStack.pop());
      }

      allComponents.push(component);
    }
  }

  return allComponents;
};
/**
 * Tarjan's Algorithm ?????????  O(|V|+|E|)
 * For directed graph only
 * a directed graph is said to be strongly connected if "every vertex is reachable from every other vertex".
 * refer: http://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
 * @param graph
 * @return a list of strongly connected components
 */


exports.detectConnectedComponents = detectConnectedComponents;

var detectStrongConnectComponents = function detectStrongConnectComponents(graphData) {
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var nodeStack = [];
  var inStack = {}; // ???????????????????????????stack????????????????????????

  var indices = {};
  var lowLink = {};
  var allComponents = [];
  var index = 0;

  var getComponent = function getComponent(node) {
    // Set the depth index for v to the smallest unused index
    indices[node.id] = index;
    lowLink[node.id] = index;
    index += 1;
    nodeStack.push(node);
    inStack[node.id] = true; // ?????????????????????

    var neighbors = (0, _util.getNeighbors)(node.id, edges, 'target').filter(function (n) {
      return nodes.map(function (node) {
        return node.id;
      }).indexOf(n) > -1;
    });

    var _loop_2 = function _loop_2(i) {
      var targetNodeID = neighbors[i];

      if (!indices[targetNodeID] && indices[targetNodeID] !== 0) {
        var targetNode = nodes.filter(function (node) {
          return node.id === targetNodeID;
        });

        if (targetNode.length > 0) {
          getComponent(targetNode[0]);
        } // tree edge


        lowLink[node.id] = Math.min(lowLink[node.id], lowLink[targetNodeID]);
      } else if (inStack[targetNodeID]) {
        // back edge, target node is in the current SCC
        lowLink[node.id] = Math.min(lowLink[node.id], indices[targetNodeID]);
      }
    };

    for (var i = 0; i < neighbors.length; i++) {
      _loop_2(i);
    } // If node is a root node, generate an SCC


    if (lowLink[node.id] === indices[node.id]) {
      var component = [];

      while (nodeStack.length > 0) {
        var tmpNode = nodeStack.pop();
        inStack[tmpNode.id] = false;
        component.push(tmpNode);
        if (tmpNode === node) break;
      }

      if (component.length > 0) {
        allComponents.push(component);
      }
    }
  };

  for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
    var node = nodes_1[_i];

    if (!indices[node.id] && indices[node.id] !== 0) {
      getComponent(node);
    }
  }

  return allComponents;
};

exports.detectStrongConnectComponents = detectStrongConnectComponents;

function getConnectedComponents(graphData, directed) {
  if (directed) return detectStrongConnectComponents(graphData);
  return detectConnectedComponents(graphData);
}
}, function(modId) { var map = {"./util":1661774171151}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171153, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOutDegree = exports.getInDegree = exports.default = void 0;

var degree = function degree(graphData) {
  var degrees = {};
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  nodes.forEach(function (node) {
    degrees[node.id] = {
      degree: 0,
      inDegree: 0,
      outDegree: 0
    };
  });
  edges.forEach(function (edge) {
    degrees[edge.source].degree++;
    degrees[edge.source].outDegree++;
    degrees[edge.target].degree++;
    degrees[edge.target].inDegree++;
  });
  return degrees;
};

var _default = degree;
/**
 * ???????????????????????????
 * @param graphData ?????????
 * @param nodeId ??????ID
 */

exports.default = _default;

var getInDegree = function getInDegree(graphData, nodeId) {
  var nodeDegree = degree(graphData);

  if (nodeDegree[nodeId]) {
    return degree(graphData)[nodeId].inDegree;
  }

  return 0;
};
/**
 * ???????????????????????????
 * @param graphData ?????????
 * @param nodeId ??????ID
 */


exports.getInDegree = getInDegree;

var getOutDegree = function getOutDegree(graphData, nodeId) {
  var nodeDegree = degree(graphData);

  if (nodeDegree[nodeId]) {
    return degree(graphData)[nodeId].outDegree;
  }

  return 0;
};

exports.getOutDegree = getOutDegree;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171154, function(require, module, exports) {


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectAllUndirectedCycle = exports.detectAllDirectedCycle = exports.detectAllCycles = exports.default = void 0;

var _dfs = _interopRequireDefault(require("./dfs"));

var _connectedComponent = _interopRequireWildcard(require("./connected-component"));

var _util = require("./util");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var detectDirectedCycle = function detectDirectedCycle(graphData) {
  var cycle = null;
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a;
  var dfsParentMap = {}; // ????????????????????????????????????

  var unvisitedSet = {}; // ??????????????????????????????

  var visitingSet = {}; // ???????????????????????????????????????

  var visitedSet = {}; // ????????? unvisitedSet

  nodes.forEach(function (node) {
    unvisitedSet[node.id] = node;
  });
  var callbacks = {
    enter: function enter(_a) {
      var currentNode = _a.current,
          previousNode = _a.previous;

      if (visitingSet[currentNode]) {
        // ???????????????????????????????????????????????????????????????
        cycle = {};
        var currentCycleNode = currentNode;
        var previousCycleNode = previousNode;

        while (previousCycleNode !== currentNode) {
          cycle[currentCycleNode] = previousCycleNode;
          currentCycleNode = previousCycleNode;
          previousCycleNode = dfsParentMap[previousCycleNode];
        }

        cycle[currentCycleNode] = previousCycleNode;
      } else {
        // ?????????????????????????????????????????????????????????????????????????????????????????????????????????
        visitingSet[currentNode] = currentNode;
        delete unvisitedSet[currentNode]; // ?????? DSF parents ??????

        dfsParentMap[currentNode] = previousNode;
      }
    },
    leave: function leave(_a) {
      var currentNode = _a.current; // ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
      // ?????????????????????????????????????????????????????????????????????

      visitedSet[currentNode] = currentNode;
      delete visitingSet[currentNode];
    },
    allowTraversal: function allowTraversal(_a) {
      var nextNode = _a.next; // ????????????????????????????????????????????????????????????????????????????????????????????????

      if (cycle) {
        return false;
      } // ???????????????????????????????????????visitedSet ???????????????????????????


      return !visitedSet[nextNode];
    }
  }; // ??????????????????

  while (Object.keys(unvisitedSet).length) {
    // ?????????????????????????????? DFS ??????
    var firsetUnVisitedKey = Object.keys(unvisitedSet)[0];
    (0, _dfs.default)(graphData, firsetUnVisitedKey, callbacks);
  }

  return cycle;
};
/**
 * ???????????????????????????Base cycles
 * refer: https://www.codeproject.com/Articles/1158232/Enumerating-All-Cycles-in-an-Undirected-Graph
 * @param graph
 * @param nodeIds ?????? ID ?????????
 * @param include ??????????????????????????????
 * @return [{[key: string]: INode}] ????????????base cycles
 */


var detectAllUndirectedCycle = function detectAllUndirectedCycle(graphData, nodeIds, include) {
  var _a, _b;

  if (include === void 0) {
    include = true;
  }

  var allCycles = [];
  var components = (0, _connectedComponent.default)(graphData, false); // loop through all connected components

  for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
    var component = components_1[_i];
    if (!component.length) continue;
    var root = component[0];
    var rootId = root.id;
    var stack = [root];
    var parent_1 = (_a = {}, _a[rootId] = root, _a);
    var used = (_b = {}, _b[rootId] = new Set(), _b); // walk a spanning tree to find cycles

    while (stack.length > 0) {
      var curNode = stack.pop();
      var curNodeId = curNode.id;
      var neighbors = (0, _util.getNeighbors)(curNodeId, graphData.edges);

      var _loop_1 = function _loop_1(i) {
        var _c;

        var neighborId = neighbors[i];
        var neighbor = graphData.nodes.find(function (node) {
          return node.id === neighborId;
        }); // const neighborId = neighbor.get('id');

        if (neighborId === curNodeId) {
          // ??????
          allCycles.push((_c = {}, _c[neighborId] = curNode, _c));
        } else if (!(neighborId in used)) {
          // visit a new node
          parent_1[neighborId] = curNode;
          stack.push(neighbor);
          used[neighborId] = new Set([curNode]);
        } else if (!used[curNodeId].has(neighbor)) {
          // a cycle found
          var cycleValid = true;
          var cyclePath = [neighbor, curNode];
          var p = parent_1[curNodeId];

          while (used[neighborId].size && !used[neighborId].has(p)) {
            cyclePath.push(p);
            if (p === parent_1[p.id]) break;else p = parent_1[p.id];
          }

          cyclePath.push(p);

          if (nodeIds && include) {
            // ??????????????????????????????
            cycleValid = false;

            if (cyclePath.findIndex(function (node) {
              return nodeIds.indexOf(node.id) > -1;
            }) > -1) {
              cycleValid = true;
            }
          } else if (nodeIds && !include) {
            // ?????????????????????????????????
            if (cyclePath.findIndex(function (node) {
              return nodeIds.indexOf(node.id) > -1;
            }) > -1) {
              cycleValid = false;
            }
          } // ??? node list ??????????????? cycle ?????????


          if (cycleValid) {
            var cycle = {};

            for (var index = 1; index < cyclePath.length; index += 1) {
              cycle[cyclePath[index - 1].id] = cyclePath[index];
            }

            if (cyclePath.length) {
              cycle[cyclePath[cyclePath.length - 1].id] = cyclePath[0];
            }

            allCycles.push(cycle);
          }

          used[neighborId].add(curNode);
        }
      };

      for (var i = 0; i < neighbors.length; i += 1) {
        _loop_1(i);
      }
    }
  }

  return allCycles;
};
/**
 * Johnson's algorithm, ??????????????? O((V + E)(C + 1))$ and space bounded by O(V + E)
 * refer: https://www.cs.tufts.edu/comp/150GA/homeworks/hw1/Johnson%2075.PDF
 * refer: https://networkx.github.io/documentation/stable/_modules/networkx/algorithms/cycles.html#simple_cycles
 * @param graph
 * @param nodeIds ?????? ID ?????????
 * @param include ??????????????????????????????
 * @return [{[key: string]: INode}] ??????????????? simple cycles
 */


exports.detectAllUndirectedCycle = detectAllUndirectedCycle;

var detectAllDirectedCycle = function detectAllDirectedCycle(graphData, nodeIds, include) {
  if (include === void 0) {
    include = true;
  }

  var path = []; // stack of nodes in current path

  var blocked = new Set();
  var B = []; // remember portions of the graph that yield no elementary circuit

  var allCycles = [];
  var idx2Node = {};
  var node2Idx = {}; // ??????????????? unblock all blocked nodes

  var unblock = function unblock(thisNode) {
    var stack = [thisNode];

    while (stack.length > 0) {
      var node = stack.pop();

      if (blocked.has(node)) {
        blocked.delete(node);
        B[node.id].forEach(function (n) {
          stack.push(n);
        });
        B[node.id].clear();
      }
    }
  };

  var circuit = function circuit(node, start, adjList) {
    var closed = false; // whether a path is closed

    if (nodeIds && include === false && nodeIds.indexOf(node.id) > -1) return closed;
    path.push(node);
    blocked.add(node);
    var neighbors = adjList[node.id];

    for (var i = 0; i < neighbors.length; i += 1) {
      var neighbor = idx2Node[neighbors[i]];

      if (neighbor === start) {
        var cycle = {};

        for (var index = 1; index < path.length; index += 1) {
          cycle[path[index - 1].id] = path[index];
        }

        if (path.length) {
          cycle[path[path.length - 1].id] = path[0];
        }

        allCycles.push(cycle);
        closed = true;
      } else if (!blocked.has(neighbor)) {
        if (circuit(neighbor, start, adjList)) {
          closed = true;
        }
      }
    }

    if (closed) {
      unblock(node);
    } else {
      for (var i = 0; i < neighbors.length; i += 1) {
        var neighbor = idx2Node[neighbors[i]];

        if (!B[neighbor.id].has(node)) {
          B[neighbor.id].add(node);
        }
      }
    }

    path.pop();
    return closed;
  };

  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a; // Johnson's algorithm ????????????????????????????????????????????????????????????

  for (var i = 0; i < nodes.length; i += 1) {
    var node = nodes[i];
    var nodeId = node.id;
    node2Idx[nodeId] = i;
    idx2Node[i] = node;
  } // ??????????????????????????????????????????????????????????????????????????????????????????


  if (nodeIds && include) {
    var _loop_2 = function _loop_2(i) {
      var nodeId = nodeIds[i];
      node2Idx[nodes[i].id] = node2Idx[nodeId];
      node2Idx[nodeId] = 0;
      idx2Node[0] = nodes.find(function (node) {
        return node.id === nodeId;
      });
      idx2Node[node2Idx[nodes[i].id]] = nodes[i];
    };

    for (var i = 0; i < nodeIds.length; i++) {
      _loop_2(i);
    }
  } // ?????? ???????????? >= nodeOrder ?????????????????????adjList


  var getMinComponentAdj = function getMinComponentAdj(components) {
    var _a;

    var minCompIdx;
    var minIdx = Infinity; // Find least component and the lowest node

    for (var i = 0; i < components.length; i += 1) {
      var comp = components[i];

      for (var j = 0; j < comp.length; j++) {
        var nodeIdx_1 = node2Idx[comp[j].id];

        if (nodeIdx_1 < minIdx) {
          minIdx = nodeIdx_1;
          minCompIdx = i;
        }
      }
    }

    var component = components[minCompIdx];
    var adjList = [];

    for (var i = 0; i < component.length; i += 1) {
      var node = component[i];
      adjList[node.id] = [];

      for (var _i = 0, _b = (0, _util.getNeighbors)(node.id, graphData.edges, 'target').filter(function (n) {
        return component.map(function (c) {
          return c.id;
        }).indexOf(n) > -1;
      }); _i < _b.length; _i++) {
        var neighbor = _b[_i]; // ??????????????? (???????????????) ??????????????????????????????????????????adjList

        if (neighbor === node.id && !(include === false && nodeIds.indexOf(node.id) > -1)) {
          allCycles.push((_a = {}, _a[node.id] = node, _a));
        } else {
          adjList[node.id].push(node2Idx[neighbor]);
        }
      }
    }

    return {
      component: component,
      adjList: adjList,
      minIdx: minIdx
    };
  };

  var nodeIdx = 0;

  while (nodeIdx < nodes.length) {
    var subgraphNodes = nodes.filter(function (n) {
      return node2Idx[n.id] >= nodeIdx;
    });
    var sccs = (0, _connectedComponent.detectStrongConnectComponents)({
      nodes: subgraphNodes,
      edges: graphData.edges
    }).filter(function (component) {
      return component.length > 1;
    });
    if (sccs.length === 0) break;
    var scc = getMinComponentAdj(sccs);
    var minIdx = scc.minIdx,
        adjList = scc.adjList,
        component = scc.component;

    if (component.length > 1) {
      component.forEach(function (node) {
        B[node.id] = new Set();
      });
      var startNode = idx2Node[minIdx]; // startNode ??????????????????????????????????????????????????????

      if (nodeIds && include && nodeIds.indexOf(startNode.id) === -1) return allCycles;
      circuit(startNode, startNode, adjList);
      nodeIdx = minIdx + 1;
    } else {
      break;
    }
  }

  return allCycles;
};
/**
 * ????????????????????????????????????
 * @param graph
 * @param directed ??????????????????
 * @param nodeIds ?????? ID ??????????????????????????????????????????????????????
 * @param include ??????????????????????????????
 * @return [{[key: string]: Node}] ?????????????????????????????????????????????Object???????????????key?????????id???value?????????????????????????????????????????????
 */


exports.detectAllDirectedCycle = detectAllDirectedCycle;

var detectAllCycles = function detectAllCycles(graphData, directed, nodeIds, include) {
  if (include === void 0) {
    include = true;
  }

  if (directed) return detectAllDirectedCycle(graphData, nodeIds, include);
  return detectAllUndirectedCycle(graphData, nodeIds, include);
};

exports.detectAllCycles = detectAllCycles;
var _default = detectDirectedCycle;
exports.default = _default;
}, function(modId) { var map = {"./dfs":1661774171155,"./connected-component":1661774171152,"./util":1661774171151}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171155, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = depthFirstSearch;

var _util = require("./util");

function initCallbacks(callbacks) {
  if (callbacks === void 0) {
    callbacks = {};
  }

  var initiatedCallback = callbacks;

  var stubCallback = function stubCallback() {};

  var allowTraversalCallback = function () {
    var seen = {};
    return function (_a) {
      var next = _a.next;

      if (!seen[next]) {
        seen[next] = true;
        return true;
      }

      return false;
    };
  }();

  initiatedCallback.allowTraversal = callbacks.allowTraversal || allowTraversalCallback;
  initiatedCallback.enter = callbacks.enter || stubCallback;
  initiatedCallback.leave = callbacks.leave || stubCallback;
  return initiatedCallback;
}
/**
 * @param {Graph} graph
 * @param {GraphNode} currentNode
 * @param {GraphNode} previousNode
 * @param {Callbacks} callbacks
 */


function depthFirstSearchRecursive(graphData, currentNode, previousNode, callbacks) {
  callbacks.enter({
    current: currentNode,
    previous: previousNode
  });
  var _a = graphData.edges,
      edges = _a === void 0 ? [] : _a;
  (0, _util.getNeighbors)(currentNode, edges, 'target').forEach(function (nextNode) {
    if (callbacks.allowTraversal({
      previous: previousNode,
      current: currentNode,
      next: nextNode
    })) {
      depthFirstSearchRecursive(graphData, nextNode, currentNode, callbacks);
    }
  });
  callbacks.leave({
    current: currentNode,
    previous: previousNode
  });
}
/**
 * ?????????????????????
 * @param data GraphData ?????????
 * @param startNodeId ???????????????????????? ID
 * @param originalCallbacks ??????
 */


function depthFirstSearch(graphData, startNodeId, callbacks) {
  depthFirstSearchRecursive(graphData, startNodeId, '', initCallbacks(callbacks));
}
}, function(modId) { var map = {"./util":1661774171151}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171156, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _util = require("@antv/util");

var _util2 = require("./util");

var minVertex = function minVertex(D, nodes, marks) {
  // ??????????????????
  var minDis = Infinity;
  var minNode;

  for (var i = 0; i < nodes.length; i++) {
    var nodeId = nodes[i].id;

    if (!marks[nodeId] && D[nodeId] <= minDis) {
      minDis = D[nodeId];
      minNode = nodes[i];
    }
  }

  return minNode;
};

var dijkstra = function dijkstra(graphData, source, directed, weightPropertyName) {
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var nodeIds = [];
  var marks = {};
  var D = {};
  var prevs = {}; // key: ??????, value: ??????????????????????????????????????????????????????????????????

  nodes.forEach(function (node, i) {
    var id = node.id;
    nodeIds.push(id);
    D[id] = Infinity;
    if (id === source) D[id] = 0;
  });
  var nodeNum = nodes.length;

  var _loop_1 = function _loop_1(i) {
    // Process the vertices
    var minNode = minVertex(D, nodes, marks);
    var minNodeId = minNode.id;
    marks[minNodeId] = true;
    if (D[minNodeId] === Infinity) return "continue"; // Unreachable vertices cannot be the intermediate point

    var relatedEdges = [];
    if (directed) relatedEdges = (0, _util2.getOutEdgesNodeId)(minNodeId, edges);else relatedEdges = (0, _util2.getEdgesByNodeId)(minNodeId, edges);
    relatedEdges.forEach(function (edge) {
      var edgeTarget = edge.target;
      var edgeSource = edge.source;
      var w = edgeTarget === minNodeId ? edgeSource : edgeTarget;
      var weight = weightPropertyName && edge[weightPropertyName] ? edge[weightPropertyName] : 1;

      if (D[w] > D[minNode.id] + weight) {
        D[w] = D[minNode.id] + weight;
        prevs[w] = [minNode.id];
      } else if (D[w] === D[minNode.id] + weight) {
        prevs[w].push(minNode.id);
      }
    });
  };

  for (var i = 0; i < nodeNum; i++) {
    _loop_1(i);
  }

  prevs[source] = [source]; // ?????????????????????????????????????????????

  var paths = {};

  for (var target in D) {
    if (D[target] !== Infinity) {
      findAllPaths(source, target, prevs, paths);
    }
  } // ?????????????????????


  var path = {};

  for (var target in paths) {
    path[target] = paths[target][0];
  }

  return {
    length: D,
    path: path,
    allPath: paths
  };
};

var _default = dijkstra;
exports.default = _default;

function findAllPaths(source, target, prevs, foundPaths) {
  if (source === target) {
    return [source];
  }

  if (foundPaths[target]) {
    return foundPaths[target];
  }

  var paths = [];

  for (var _i = 0, _a = prevs[target]; _i < _a.length; _i++) {
    var prev = _a[_i];
    var prevPaths = findAllPaths(source, prev, prevs, foundPaths);
    if (!prevPaths) return;

    for (var _b = 0, prevPaths_1 = prevPaths; _b < prevPaths_1.length; _b++) {
      var prePath = prevPaths_1[_b];
      if ((0, _util.isArray)(prePath)) paths.push((0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], prePath, true), [target], false));else paths.push([prePath, target]);
    }
  }

  foundPaths[target] = paths;
  return foundPaths[target];
}
}, function(modId) { var map = {"./util":1661774171151}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171157, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findShortestPath = exports.findAllPath = void 0;

var _dijkstra = _interopRequireDefault(require("./dijkstra"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findShortestPath = function findShortestPath(graphData, start, end, directed, weightPropertyName) {
  var _a = (0, _dijkstra.default)(graphData, start, directed, weightPropertyName),
      length = _a.length,
      path = _a.path,
      allPath = _a.allPath;

  return {
    length: length[end],
    path: path[end],
    allPath: allPath[end]
  };
};

exports.findShortestPath = findShortestPath;

var findAllPath = function findAllPath(graphData, start, end, directed) {
  var _a;

  if (start === end) return [[start]];
  var _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var visited = [start];
  var isVisited = (_a = {}, _a[start] = true, _a);
  var stack = []; // ?????????????????????????????????????????????????????????

  var allPath = [];
  var neighbors = directed ? (0, _util.getNeighbors)(start, edges, 'target') : (0, _util.getNeighbors)(start, edges);
  stack.push(neighbors);

  while (visited.length > 0 && stack.length > 0) {
    var children = stack[stack.length - 1];

    if (children.length) {
      var child = children.shift();

      if (child) {
        visited.push(child);
        isVisited[child] = true;
        neighbors = directed ? (0, _util.getNeighbors)(child, edges, 'target') : (0, _util.getNeighbors)(child, edges);
        stack.push(neighbors.filter(function (neighbor) {
          return !isVisited[neighbor];
        }));
      }
    } else {
      var node = visited.pop();
      isVisited[node] = false;
      stack.pop();
      continue;
    }

    if (visited[visited.length - 1] === end) {
      var path = visited.map(function (node) {
        return node;
      });
      allPath.push(path);
      var node = visited.pop();
      isVisited[node] = false;
      stack.pop();
    }
  }

  return allPath;
};

exports.findAllPath = findAllPath;
}, function(modId) { var map = {"./dijkstra":1661774171156,"./util":1661774171151}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171158, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adjacentMatrix = _interopRequireDefault(require("./adjacent-matrix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var floydWarshall = function floydWarshall(graphData, directed) {
  var adjacentMatrix = (0, _adjacentMatrix.default)(graphData, directed);
  var dist = [];
  var size = adjacentMatrix.length;

  for (var i = 0; i < size; i += 1) {
    dist[i] = [];

    for (var j = 0; j < size; j += 1) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (adjacentMatrix[i][j] === 0 || !adjacentMatrix[i][j]) {
        dist[i][j] = Infinity;
      } else {
        dist[i][j] = adjacentMatrix[i][j];
      }
    }
  } // floyd


  for (var k = 0; k < size; k += 1) {
    for (var i = 0; i < size; i += 1) {
      for (var j = 0; j < size; j += 1) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
};

var _default = floydWarshall;
exports.default = _default;
}, function(modId) { var map = {"./adjacent-matrix":1661774171147}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171159, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adjacentMatrix = _interopRequireDefault(require("./adjacent-matrix"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ??????????????????
 * @param graphData ?????????
 * @param directed ??????????????????????????? false
 * @param weightPropertyName ?????????????????????
 * @param maxIteration ??????????????????
 */
var labelPropagation = function labelPropagation(graphData, directed, weightPropertyName, maxIteration) {
  if (directed === void 0) {
    directed = false;
  }

  if (weightPropertyName === void 0) {
    weightPropertyName = 'weight';
  }

  if (maxIteration === void 0) {
    maxIteration = 1000;
  } // the origin data


  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var clusters = {};
  var nodeMap = {}; // init the clusters and nodeMap

  nodes.forEach(function (node, i) {
    var cid = (0, _util.uniqueId)();
    node.clusterId = cid;
    clusters[cid] = {
      id: cid,
      nodes: [node]
    };
    nodeMap[node.id] = {
      node: node,
      idx: i
    };
  }); // the adjacent matrix of calNodes inside clusters

  var adjMatrix = (0, _adjacentMatrix.default)(graphData, directed); // the sum of each row in adjacent matrix

  var ks = [];
  /**
   * neighbor nodes (id for key and weight for value) for each node
   * neighbors = {
   *  id(node_id): { id(neighbor_1_id): weight(weight of the edge), id(neighbor_2_id): weight(weight of the edge), ... },
   *  ...
   * }
   */

  var neighbors = {};
  adjMatrix.forEach(function (row, i) {
    var k = 0;
    var iid = nodes[i].id;
    neighbors[iid] = {};
    row.forEach(function (entry, j) {
      if (!entry) return;
      k += entry;
      var jid = nodes[j].id;
      neighbors[iid][jid] = entry;
    });
    ks.push(k);
  });
  var iter = 0;

  var _loop_1 = function _loop_1() {
    var changed = false;
    nodes.forEach(function (node) {
      var neighborClusters = {};
      Object.keys(neighbors[node.id]).forEach(function (neighborId) {
        var neighborWeight = neighbors[node.id][neighborId];
        var neighborNode = nodeMap[neighborId].node;
        var neighborClusterId = neighborNode.clusterId;
        if (!neighborClusters[neighborClusterId]) neighborClusters[neighborClusterId] = 0;
        neighborClusters[neighborClusterId] += neighborWeight;
      }); // find the cluster with max weight

      var maxWeight = -Infinity;
      var bestClusterIds = [];
      Object.keys(neighborClusters).forEach(function (clusterId) {
        if (maxWeight < neighborClusters[clusterId]) {
          maxWeight = neighborClusters[clusterId];
          bestClusterIds = [clusterId];
        } else if (maxWeight === neighborClusters[clusterId]) {
          bestClusterIds.push(clusterId);
        }
      });
      if (bestClusterIds.length === 1 && bestClusterIds[0] === node.clusterId) return;
      var selfClusterIdx = bestClusterIds.indexOf(node.clusterId);
      if (selfClusterIdx >= 0) bestClusterIds.splice(selfClusterIdx, 1);

      if (bestClusterIds && bestClusterIds.length) {
        changed = true; // remove from origin cluster

        var selfCluster = clusters[node.clusterId];
        var nodeInSelfClusterIdx = selfCluster.nodes.indexOf(node);
        selfCluster.nodes.splice(nodeInSelfClusterIdx, 1); // move the node to the best cluster

        var randomIdx = Math.floor(Math.random() * bestClusterIds.length);
        var bestCluster = clusters[bestClusterIds[randomIdx]];
        bestCluster.nodes.push(node);
        node.clusterId = bestCluster.id;
      }
    });
    if (!changed) return "break";
    iter++;
  };

  while (iter < maxIteration) {
    var state_1 = _loop_1();

    if (state_1 === "break") break;
  } // delete the empty clusters


  Object.keys(clusters).forEach(function (clusterId) {
    var cluster = clusters[clusterId];

    if (!cluster.nodes || !cluster.nodes.length) {
      delete clusters[clusterId];
    }
  }); // get the cluster edges

  var clusterEdges = [];
  var clusterEdgeMap = {};
  edges.forEach(function (edge) {
    var source = edge.source,
        target = edge.target;
    var weight = edge[weightPropertyName] || 1;
    var sourceClusterId = nodeMap[source].node.clusterId;
    var targetClusterId = nodeMap[target].node.clusterId;
    var newEdgeId = "".concat(sourceClusterId, "---").concat(targetClusterId);

    if (clusterEdgeMap[newEdgeId]) {
      clusterEdgeMap[newEdgeId].weight += weight;
      clusterEdgeMap[newEdgeId].count++;
    } else {
      var newEdge = {
        source: sourceClusterId,
        target: targetClusterId,
        weight: weight,
        count: 1
      };
      clusterEdgeMap[newEdgeId] = newEdge;
      clusterEdges.push(newEdge);
    }
  });
  var clustersArray = [];
  Object.keys(clusters).forEach(function (clusterId) {
    clustersArray.push(clusters[clusterId]);
  });
  return {
    clusters: clustersArray,
    clusterEdges: clusterEdges
  };
};

var _default = labelPropagation;
exports.default = _default;
}, function(modId) { var map = {"./adjacent-matrix":1661774171147,"./util":1661774171151}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171160, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@antv/util");

var _adjacentMatrix = _interopRequireDefault(require("./adjacent-matrix"));

var _vector = _interopRequireDefault(require("./utils/vector"));

var _nodeProperties = require("./utils/node-properties");

var _dataPreprocessing = require("./utils/data-preprocessing");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getModularity = function getModularity(nodes, adjMatrix, ks, m) {
  var length = adjMatrix.length;
  var param = 2 * m;
  var modularity = 0;

  for (var i = 0; i < length; i++) {
    var clusteri = nodes[i].clusterId;

    for (var j = 0; j < length; j++) {
      var clusterj = nodes[j].clusterId;
      if (clusteri !== clusterj) continue;
      var entry = adjMatrix[i][j] || 0;
      var ki = ks[i] || 0;
      var kj = ks[j] || 0;
      modularity += entry - ki * kj / param;
    }
  }

  modularity *= 1 / param;
  return modularity;
}; // ???????????????????????????????????????


var getInertialModularity = function getInertialModularity(nodes, allPropertiesWeight) {
  if (nodes === void 0) {
    nodes = [];
  }

  var length = nodes.length;
  var totalProperties = new _vector.default([]);

  for (var i = 0; i < length; i++) {
    totalProperties = totalProperties.add(new _vector.default(allPropertiesWeight[i]));
  } // ????????????


  var avgProperties = totalProperties.avg(length);
  avgProperties.normalize(); // ?????????????????????: ??????v??????????????????????????????????????????

  var variance = 0;

  for (var i = 0; i < length; i++) {
    var propertiesi = new _vector.default(allPropertiesWeight[i]);
    var squareEuclideanDistance = propertiesi.squareEuclideanDistance(avgProperties);
    variance += squareEuclideanDistance;
  } // ????????????????????????????????????


  var squareEuclideanDistanceInfo = [];
  nodes.forEach(function () {
    squareEuclideanDistanceInfo.push([]);
  });

  for (var i = 0; i < length; i++) {
    var propertiesi = new _vector.default(allPropertiesWeight[i]);
    nodes[i]['clusterInertial'] = 0;

    for (var j = 0; j < length; j++) {
      if (i === j) {
        squareEuclideanDistanceInfo[i][j] = 0;
        continue;
      }

      var propertiesj = new _vector.default(allPropertiesWeight[j]);
      squareEuclideanDistanceInfo[i][j] = propertiesi.squareEuclideanDistance(propertiesj);
      nodes[i]['clusterInertial'] += squareEuclideanDistanceInfo[i][j];
    }
  } // ?????????????????????


  var inertialModularity = 0;
  var param = 2 * length * variance;

  for (var i = 0; i < length; i++) {
    var clusteri = nodes[i].clusterId;

    for (var j = 0; j < length; j++) {
      var clusterj = nodes[j].clusterId;
      if (i === j || clusteri !== clusterj) continue;
      var inertial = nodes[i].clusterInertial * nodes[j].clusterInertial / Math.pow(param, 2) - squareEuclideanDistanceInfo[i][j] / param;
      inertialModularity += inertial;
    }
  }

  return Number(inertialModularity.toFixed(4));
};
/**
 * ???????????? louvain ??????
 * @param graphData ?????????
 * @param directed ??????????????????????????? false
 * @param weightPropertyName ?????????????????????
 * @param threshold ????????????
 * @param inertialModularity ?????????????????????????????????????????????????????????
 * @param propertyKey ??????????????????
 * @param involvedKeys ???????????????key??????
 * @param uninvolvedKeys ??????????????????key??????
 * @param inertialWeight ?????????????????????
 */


var louvain = function louvain(graphData, directed, weightPropertyName, threshold, inertialModularity, propertyKey, involvedKeys, uninvolvedKeys, inertialWeight) {
  if (directed === void 0) {
    directed = false;
  }

  if (weightPropertyName === void 0) {
    weightPropertyName = 'weight';
  }

  if (threshold === void 0) {
    threshold = 0.0001;
  }

  if (inertialModularity === void 0) {
    inertialModularity = false;
  }

  if (propertyKey === void 0) {
    propertyKey = undefined;
  }

  if (involvedKeys === void 0) {
    involvedKeys = [];
  }

  if (uninvolvedKeys === void 0) {
    uninvolvedKeys = ['id'];
  }

  if (inertialWeight === void 0) {
    inertialWeight = 1;
  } // the origin data


  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var allPropertiesWeight = [];

  if (inertialModularity) {
    nodes.forEach(function (node, index) {
      node.properties = node.properties || {};
      node.originIndex = index;
    });
    var nodeTypeInfo_1 = [];

    if (nodes.every(function (node) {
      return node.hasOwnProperty('nodeType');
    })) {
      nodeTypeInfo_1 = Array.from(new Set(nodes.map(function (node) {
        return node.nodeType;
      })));
      nodes.forEach(function (node) {
        node.properties.nodeType = nodeTypeInfo_1.findIndex(function (nodeType) {
          return nodeType === node.nodeType;
        });
      });
    } // ????????????????????????


    var properties = (0, _nodeProperties.getAllProperties)(nodes, propertyKey); // ??????????????????one-hot??????????????????

    allPropertiesWeight = (0, _dataPreprocessing.oneHot)(properties, involvedKeys, uninvolvedKeys);
  }

  var uniqueId = 1;
  var clusters = {};
  var nodeMap = {}; // init the clusters and nodeMap

  nodes.forEach(function (node, i) {
    var cid = String(uniqueId++);
    node.clusterId = cid;
    clusters[cid] = {
      id: cid,
      nodes: [node]
    };
    nodeMap[node.id] = {
      node: node,
      idx: i
    };
  }); // the adjacent matrix of calNodes inside clusters

  var adjMatrix = (0, _adjacentMatrix.default)(graphData, directed); // the sum of each row in adjacent matrix

  var ks = [];
  /**
   * neighbor nodes (id for key and weight for value) for each node
   * neighbors = {
   *  id(node_id): { id(neighbor_1_id): weight(weight of the edge), id(neighbor_2_id): weight(weight of the edge), ... },
   *  ...
   * }
   */

  var neighbors = {}; // the sum of the weights of all edges in the graph

  var m = 0;
  adjMatrix.forEach(function (row, i) {
    var k = 0;
    var iid = nodes[i].id;
    neighbors[iid] = {};
    row.forEach(function (entry, j) {
      if (!entry) return;
      k += entry;
      var jid = nodes[j].id;
      neighbors[iid][jid] = entry;
      m += entry;
    });
    ks.push(k);
  });
  m /= 2;
  var totalModularity = Infinity;
  var previousModularity = Infinity;
  var iter = 0;
  var finalNodes = [];
  var finalClusters = {};

  while (true) {
    if (inertialModularity && nodes.every(function (node) {
      return node.hasOwnProperty('properties');
    })) {
      totalModularity = getModularity(nodes, adjMatrix, ks, m) + getInertialModularity(nodes, allPropertiesWeight) * inertialWeight;
    } else {
      totalModularity = getModularity(nodes, adjMatrix, ks, m);
    } // ???????????????previousModularity????????????


    if (iter === 0) {
      previousModularity = totalModularity;
      finalNodes = nodes;
      finalClusters = clusters;
    }

    var increaseWithinThreshold = totalModularity > 0 && totalModularity > previousModularity && totalModularity - previousModularity < threshold; // ????????????????????????????????????

    if (totalModularity > previousModularity) {
      finalNodes = nodes.map(function (node) {
        return {
          node: node,
          clusterId: node.clusterId
        };
      });
      finalClusters = (0, _util.clone)(clusters);
      previousModularity = totalModularity;
    } // whether to terminate the iterations


    if (increaseWithinThreshold || iter > 100) {
      break;
    }

    ;
    iter++; // pre compute some values for current clusters

    Object.keys(clusters).forEach(function (clusterId) {
      // sum of weights of edges to nodes in cluster
      var sumTot = 0;
      edges.forEach(function (edge) {
        var source = edge.source,
            target = edge.target;
        var sourceClusterId = nodeMap[source].node.clusterId;
        var targetClusterId = nodeMap[target].node.clusterId;

        if (sourceClusterId === clusterId && targetClusterId !== clusterId || targetClusterId === clusterId && sourceClusterId !== clusterId) {
          sumTot = sumTot + (edge[weightPropertyName] || 1);
        }
      });
      clusters[clusterId].sumTot = sumTot;
    }); // move the nodes to increase the delta modularity

    nodes.forEach(function (node, i) {
      var selfCluster = clusters[node.clusterId];
      var bestIncrease = 0;
      var bestCluster;
      var commonParam = ks[i] / (2 * m); // sum of weights of edges from node to nodes in cluster

      var kiin = 0;
      var selfClusterNodes = selfCluster.nodes;
      selfClusterNodes.forEach(function (scNode) {
        var scNodeIdx = nodeMap[scNode.id].idx;
        kiin += adjMatrix[i][scNodeIdx] || 0;
      }); // the modurarity for **removing** the node i from the origin cluster of node i

      var removeModurarity = kiin - selfCluster.sumTot * commonParam; // nodes for **removing** node i into this neighbor cluster

      var selfClusterNodesAfterRemove = selfClusterNodes.filter(function (scNode) {
        return scNode.id !== node.id;
      });
      var propertiesWeightRemove = [];
      selfClusterNodesAfterRemove.forEach(function (nodeRemove, index) {
        propertiesWeightRemove[index] = allPropertiesWeight[nodeRemove.originIndex];
      }); // the inertialModularity for **removing** the node i from the origin cluster of node i

      var removeInertialModularity = getInertialModularity(selfClusterNodesAfterRemove, allPropertiesWeight) * inertialWeight; // the neightbors of the node

      var nodeNeighborIds = neighbors[node.id];
      Object.keys(nodeNeighborIds).forEach(function (neighborNodeId) {
        var neighborNode = nodeMap[neighborNodeId].node;
        var neighborClusterId = neighborNode.clusterId; // if the node and the neighbor of node are in the same cluster, reutrn

        if (neighborClusterId === node.clusterId) return;
        var neighborCluster = clusters[neighborClusterId];
        var clusterNodes = neighborCluster.nodes; // if the cluster is empty, remove the cluster and return

        if (!clusterNodes || !clusterNodes.length) return; // sum of weights of edges from node to nodes in cluster

        var neighborClusterKiin = 0;
        clusterNodes.forEach(function (cNode) {
          var cNodeIdx = nodeMap[cNode.id].idx;
          neighborClusterKiin += adjMatrix[i][cNodeIdx] || 0;
        }); // the modurarity for **adding** node i into this neighbor cluster

        var addModurarity = neighborClusterKiin - neighborCluster.sumTot * commonParam; // nodes for **adding** node i into this neighbor cluster

        var clusterNodesAfterAdd = clusterNodes.concat([node]);
        var propertiesWeightAdd = [];
        clusterNodesAfterAdd.forEach(function (nodeAdd, index) {
          propertiesWeightAdd[index] = allPropertiesWeight[nodeAdd.originIndex];
        }); // the inertialModularity for **adding** node i into this neighbor cluster

        var addInertialModularity = getInertialModularity(clusterNodesAfterAdd, allPropertiesWeight) * inertialWeight; // the increase modurarity is the difference between addModurarity and removeModurarity

        var increase = addModurarity - removeModurarity;

        if (inertialModularity) {
          increase = addModurarity + addInertialModularity - (removeModurarity + removeInertialModularity);
        } // find the best cluster to move node i into


        if (increase > bestIncrease) {
          bestIncrease = increase;
          bestCluster = neighborCluster;
        }
      }); // if found a best cluster to move into

      if (bestIncrease > 0) {
        bestCluster.nodes.push(node);
        var previousClusterId_1 = node.clusterId;
        node.clusterId = bestCluster.id; // move the node to the best cluster

        var nodeInSelfClusterIdx = selfCluster.nodes.indexOf(node); // remove from origin cluster

        selfCluster.nodes.splice(nodeInSelfClusterIdx, 1); // update sumTot for clusters
        // sum of weights of edges to nodes in cluster

        var neighborClusterSumTot_1 = 0;
        var selfClusterSumTot_1 = 0;
        edges.forEach(function (edge) {
          var source = edge.source,
              target = edge.target;
          var sourceClusterId = nodeMap[source].node.clusterId;
          var targetClusterId = nodeMap[target].node.clusterId;

          if (sourceClusterId === bestCluster.id && targetClusterId !== bestCluster.id || targetClusterId === bestCluster.id && sourceClusterId !== bestCluster.id) {
            neighborClusterSumTot_1 = neighborClusterSumTot_1 + (edge[weightPropertyName] || 1);
          }

          if (sourceClusterId === previousClusterId_1 && targetClusterId !== previousClusterId_1 || targetClusterId === previousClusterId_1 && sourceClusterId !== previousClusterId_1) {
            selfClusterSumTot_1 = selfClusterSumTot_1 + (edge[weightPropertyName] || 1);
          }
        }); // the nodes of the clusters to move into and remove are changed, update their sumTot

        bestCluster.sumTot = neighborClusterSumTot_1;
        selfCluster.sumTot = selfClusterSumTot_1;
      }
    });
  } // delete the empty clusters, assign increasing clusterId


  var newClusterIdMap = {};
  var clusterIdx = 0;
  Object.keys(finalClusters).forEach(function (clusterId) {
    var cluster = finalClusters[clusterId];

    if (!cluster.nodes || !cluster.nodes.length) {
      delete finalClusters[clusterId];
      return;
    }

    var newId = String(clusterIdx + 1);

    if (newId === clusterId) {
      return;
    }

    cluster.id = newId;
    cluster.nodes = cluster.nodes.map(function (item) {
      return {
        id: item.id,
        clusterId: newId
      };
    });
    finalClusters[newId] = cluster;
    newClusterIdMap[clusterId] = newId;
    delete finalClusters[clusterId];
    clusterIdx++;
  }); // restore node clusterId

  finalNodes.forEach(function (nodeInfo) {
    var node = nodeInfo.node,
        clusterId = nodeInfo.clusterId;
    if (!node) return;
    node.clusterId = clusterId;
    if (node.clusterId && newClusterIdMap[node.clusterId]) node.clusterId = newClusterIdMap[node.clusterId];
  }); // get the cluster edges

  var clusterEdges = [];
  var clusterEdgeMap = {};
  edges.forEach(function (edge) {
    var source = edge.source,
        target = edge.target;
    var weight = edge[weightPropertyName] || 1;
    var sourceClusterId = nodeMap[source].node.clusterId;
    var targetClusterId = nodeMap[target].node.clusterId;
    if (!sourceClusterId || !targetClusterId) return;
    var newEdgeId = "".concat(sourceClusterId, "---").concat(targetClusterId);

    if (clusterEdgeMap[newEdgeId]) {
      clusterEdgeMap[newEdgeId].weight += weight;
      clusterEdgeMap[newEdgeId].count++;
    } else {
      var newEdge = {
        source: sourceClusterId,
        target: targetClusterId,
        weight: weight,
        count: 1
      };
      clusterEdgeMap[newEdgeId] = newEdge;
      clusterEdges.push(newEdge);
    }
  });
  var clustersArray = [];
  Object.keys(finalClusters).forEach(function (clusterId) {
    clustersArray.push(finalClusters[clusterId]);
  });
  return {
    clusters: clustersArray,
    clusterEdges: clusterEdges
  };
};

var _default = louvain;
exports.default = _default;
}, function(modId) { var map = {"./adjacent-matrix":1661774171147,"./utils/vector":1661774171161,"./utils/node-properties":1661774171162,"./utils/data-preprocessing":1661774171164}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171161, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@antv/util");

/**
 * ????????????
 */
var Vector =
/** @class */
function () {
  function Vector(arr) {
    this.arr = arr;
  }

  Vector.prototype.getArr = function () {
    return this.arr || [];
  };

  Vector.prototype.add = function (otherVector) {
    var _a;

    var otherArr = otherVector.arr;

    if (!((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length)) {
      return new Vector(otherArr);
    }

    if (!(otherArr === null || otherArr === void 0 ? void 0 : otherArr.length)) {
      return new Vector(this.arr);
    }

    if (this.arr.length === otherArr.length) {
      var res = [];

      for (var index in this.arr) {
        res[index] = this.arr[index] + otherArr[index];
      }

      return new Vector(res);
    }
  };

  Vector.prototype.subtract = function (otherVector) {
    var _a;

    var otherArr = otherVector.arr;

    if (!((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length)) {
      return new Vector(otherArr);
    }

    if (!(otherArr === null || otherArr === void 0 ? void 0 : otherArr.length)) {
      return new Vector(this.arr);
    }

    if (this.arr.length === otherArr.length) {
      var res = [];

      for (var index in this.arr) {
        res[index] = this.arr[index] - otherArr[index];
      }

      return new Vector(res);
    }
  };

  Vector.prototype.avg = function (length) {
    var res = [];

    if (length !== 0) {
      for (var index in this.arr) {
        res[index] = this.arr[index] / length;
      }
    }

    return new Vector(res);
  };

  Vector.prototype.negate = function () {
    var res = [];

    for (var index in this.arr) {
      res[index] = -this.arr[index];
    }

    return new Vector(res);
  }; // ??????????????????


  Vector.prototype.squareEuclideanDistance = function (otherVector) {
    var _a;

    var otherArr = otherVector.arr;

    if (!((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length) || !(otherArr === null || otherArr === void 0 ? void 0 : otherArr.length)) {
      return 0;
    }

    if (this.arr.length === otherArr.length) {
      var res = 0;

      for (var index in this.arr) {
        res += Math.pow(this.arr[index] - otherVector.arr[index], 2);
      }

      return res;
    }
  }; // ????????????


  Vector.prototype.euclideanDistance = function (otherVector) {
    var _a;

    var otherArr = otherVector.arr;

    if (!((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length) || !(otherArr === null || otherArr === void 0 ? void 0 : otherArr.length)) {
      return 0;
    }

    if (this.arr.length === otherArr.length) {
      var res = 0;

      for (var index in this.arr) {
        res += Math.pow(this.arr[index] - otherVector.arr[index], 2);
      }

      return Math.sqrt(res);
    } else {
      console.error('The two vectors are unequal in length.');
    }
  }; // ???????????????


  Vector.prototype.normalize = function () {
    var res = [];
    var cloneArr = (0, _util.clone)(this.arr);
    cloneArr.sort(function (a, b) {
      return a - b;
    });
    var max = cloneArr[cloneArr.length - 1];
    var min = cloneArr[0];

    for (var index in this.arr) {
      res[index] = (this.arr[index] - min) / (max - min);
    }

    return new Vector(res);
  }; // 2?????? or ??????


  Vector.prototype.norm2 = function () {
    var _a;

    if (!((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length)) {
      return 0;
    }

    var res = 0;

    for (var index in this.arr) {
      res += Math.pow(this.arr[index], 2);
    }

    return Math.sqrt(res);
  }; // ?????????????????????


  Vector.prototype.dot = function (otherVector) {
    var _a;

    var otherArr = otherVector.arr;

    if (!((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length) || !(otherArr === null || otherArr === void 0 ? void 0 : otherArr.length)) {
      return 0;
    }

    if (this.arr.length === otherArr.length) {
      var res = 0;

      for (var index in this.arr) {
        res += this.arr[index] * otherVector.arr[index];
      }

      return res;
    } else {
      console.error('The two vectors are unequal in length.');
    }
  }; // ??????????????????


  Vector.prototype.equal = function (otherVector) {
    var _a;

    var otherArr = otherVector.arr;

    if (((_a = this.arr) === null || _a === void 0 ? void 0 : _a.length) !== (otherArr === null || otherArr === void 0 ? void 0 : otherArr.length)) {
      return false;
    }

    for (var index in this.arr) {
      if (this.arr[index] !== otherArr[index]) {
        return false;
      }
    }

    return true;
  };

  return Vector;
}();

var _default = Vector;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171162, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropertyWeight = exports.getAllSortProperties = exports.getAllProperties = exports.default = void 0;

var _time = require("../constants/time");

// ???????????????????????????
var getAllSortProperties = function getAllSortProperties(nodes, n) {
  if (nodes === void 0) {
    nodes = [];
  }

  if (n === void 0) {
    n = 100;
  }

  var propertyKeyInfo = {};
  nodes.forEach(function (node) {
    if (!node.properties) {
      return;
    }

    Object.keys(node.properties).forEach(function (propertyKey) {
      // ????????????????????????????????????????????????????????????, todo: ????????????one-hot??????????????????embedding
      if (propertyKey === 'id' || !"".concat(node.properties[propertyKey]).match(_time.secondReg) && !"".concat(node.properties[propertyKey]).match(_time.dateReg) && isNaN(Number(node.properties[propertyKey]))) {
        if (propertyKeyInfo.hasOwnProperty(propertyKey)) {
          delete propertyKeyInfo[propertyKey];
        }

        return;
      }

      if (propertyKeyInfo.hasOwnProperty(propertyKey)) {
        propertyKeyInfo[propertyKey] += 1;
      } else {
        propertyKeyInfo[propertyKey] = 1;
      }
    });
  }); // ???top50?????????

  var sortKeys = Object.keys(propertyKeyInfo).sort(function (a, b) {
    return propertyKeyInfo[b] - propertyKeyInfo[a];
  });
  return sortKeys.length < n ? sortKeys : sortKeys.slice(0, n);
};

exports.getAllSortProperties = getAllSortProperties;

var processProperty = function processProperty(properties, propertyKeys) {
  return propertyKeys.map(function (key) {
    if (properties.hasOwnProperty(key)) {
      // ???????????????????????????????????????
      if (!isNaN(Number(properties[key]))) {
        return Number(properties[key]);
      } // ???????????????????????????


      if (properties[key].match(_time.secondReg) || properties[key].match(_time.dateReg)) {
        // @ts-ignore
        return Number(Date.parse(new Date(properties[key]))) / 1000;
      }
    }

    return 0;
  });
}; // ????????????????????????


var getPropertyWeight = function getPropertyWeight(nodes) {
  var propertyKeys = getAllSortProperties(nodes);
  var allPropertiesWeight = [];

  for (var i = 0; i < nodes.length; i++) {
    allPropertiesWeight[i] = processProperty(nodes[i].properties, propertyKeys);
  }

  return allPropertiesWeight;
}; // ?????????????????????????????????


exports.getPropertyWeight = getPropertyWeight;

var getAllProperties = function getAllProperties(nodes, key) {
  if (key === void 0) {
    key = undefined;
  }

  var allProperties = [];
  nodes.forEach(function (node) {
    if (key === undefined) {
      allProperties.push(node);
    }

    if (node[key] !== undefined) {
      allProperties.push(node[key]);
    }
  });
  return allProperties;
};

exports.getAllProperties = getAllProperties;
var _default = {
  getAllSortProperties: getAllSortProperties,
  getPropertyWeight: getPropertyWeight,
  getAllProperties: getAllProperties
};
exports.default = _default;
}, function(modId) { var map = {"../constants/time":1661774171163}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171163, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondReg = exports.dateReg = void 0;
var secondReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
exports.secondReg = secondReg;
var dateReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
exports.dateReg = dateReg;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171164, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oneHot = exports.getDistance = exports.getAllKeyValueMap = exports.default = void 0;

var _util = require("@antv/util");

var _types = require("../types");

var _vector = _interopRequireDefault(require("./vector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ????????????????????????????????????????????????
 * @param dataList ?????????
 * @param involvedKeys ???????????????key??????
 * @param uninvolvedKeys ??????????????????key??????
 */
var getAllKeyValueMap = function getAllKeyValueMap(dataList, involvedKeys, uninvolvedKeys) {
  var keys = []; // ????????????????????????keys?????????????????????keys

  if (involvedKeys === null || involvedKeys === void 0 ? void 0 : involvedKeys.length) {
    keys = involvedKeys;
  } else {
    // ??????????????????keys??????????????????????????????key
    dataList.forEach(function (data) {
      keys = keys.concat(Object.keys(data));
    });
    keys = (0, _util.uniq)(keys);
  } // ????????????????????????key???value??????


  var allKeyValueMap = {};
  keys.forEach(function (key) {
    var value = [];
    dataList.forEach(function (data) {
      if (data[key] !== undefined && data[key] !== '') {
        value.push(data[key]);
      }
    });

    if (value.length && !(uninvolvedKeys === null || uninvolvedKeys === void 0 ? void 0 : uninvolvedKeys.includes(key))) {
      allKeyValueMap[key] = (0, _util.uniq)(value);
    }
  });
  return allKeyValueMap;
};
/**
 * one-hot???????????????????????????
 * @param dataList ?????????
 * @param involvedKeys ??????????????????key??????
 * @param uninvolvedKeys ??????????????????key??????
 */


exports.getAllKeyValueMap = getAllKeyValueMap;

var oneHot = function oneHot(dataList, involvedKeys, uninvolvedKeys) {
  // ????????????????????????????????????????????????
  var allKeyValueMap = getAllKeyValueMap(dataList, involvedKeys, uninvolvedKeys);
  var oneHotCode = [];

  if (!Object.keys(allKeyValueMap).length) {
    return oneHotCode;
  } // ???????????????one-hot??????


  dataList.forEach(function (data, index) {
    var code = [];

    if (Object.keys(allKeyValueMap).length === 1) {
      // ??????????????????????????????????????????????????????????????????????????????????????????
      var key = Object.keys(allKeyValueMap)[0];
      var keyValue = allKeyValueMap[key];

      if (keyValue.every(function (value) {
        return !isNaN(Number(value));
      })) {
        code = [data[key]];
      }
    } else {
      Object.keys(allKeyValueMap).forEach(function (key) {
        var keyValue = data[key];
        var allKeyValue = allKeyValueMap[key];
        var valueIndex = allKeyValue.findIndex(function (value) {
          return keyValue === value;
        });
        var subCode = [];

        for (var i = 0; i < allKeyValue.length; i++) {
          if (i === valueIndex) {
            subCode.push(1);
          } else {
            subCode.push(0);
          }
        }

        code = code.concat(subCode);
      });
    }

    oneHotCode[index] = code;
  });
  return oneHotCode;
};
/**
 * getDistance????????????????????????????????????
 * @param item
 * @param otherItem
 * @param distanceType ????????????
 * @param graphData ?????????
 */


exports.oneHot = oneHot;

var getDistance = function getDistance(item, otherItem, distanceType, graphData) {
  if (distanceType === void 0) {
    distanceType = _types.DistanceType.EuclideanDistance;
  }

  var distance = 0;

  switch (distanceType) {
    case _types.DistanceType.EuclideanDistance:
      distance = new _vector.default(item).euclideanDistance(new _vector.default(otherItem));
      break;

    default:
      break;
  }

  return distance;
};

exports.getDistance = getDistance;
var _default = {
  getAllKeyValueMap: getAllKeyValueMap,
  oneHot: oneHot,
  getDistance: getDistance
};
exports.default = _default;
}, function(modId) { var map = {"../types":1661774171165,"./vector":1661774171161}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171165, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DistanceType = void 0;
var DistanceType;
exports.DistanceType = DistanceType;

(function (DistanceType) {
  DistanceType["EuclideanDistance"] = "euclideanDistance";
})(DistanceType || (exports.DistanceType = DistanceType = {}));
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171166, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _louvain = _interopRequireDefault(require("./louvain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ???????????? i-louvain ?????????????????? + ?????????????????????????????????????????????
 * @param graphData ?????????
 * @param directed ??????????????????????????? false
 * @param weightPropertyName ?????????????????????
 * @param threshold ????????????
 * @param propertyKey ??????????????????
 * @param involvedKeys ???????????????key??????
 * @param uninvolvedKeys ??????????????????key??????
 * @param inertialWeight ?????????????????????
 */
var iLouvain = function iLouvain(graphData, directed, weightPropertyName, threshold, propertyKey, involvedKeys, uninvolvedKeys, inertialWeight) {
  if (directed === void 0) {
    directed = false;
  }

  if (weightPropertyName === void 0) {
    weightPropertyName = 'weight';
  }

  if (threshold === void 0) {
    threshold = 0.0001;
  }

  if (propertyKey === void 0) {
    propertyKey = undefined;
  }

  if (involvedKeys === void 0) {
    involvedKeys = [];
  }

  if (uninvolvedKeys === void 0) {
    uninvolvedKeys = ['id'];
  }

  if (inertialWeight === void 0) {
    inertialWeight = 1;
  }

  return (0, _louvain.default)(graphData, directed, weightPropertyName, threshold, true, propertyKey, involvedKeys, uninvolvedKeys, inertialWeight);
};

var _default = iLouvain;
exports.default = _default;
}, function(modId) { var map = {"./louvain":1661774171160}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171167, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@antv/util");

var _degree = _interopRequireDefault(require("./degree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  k-core?????? ?????????????????????????????????????????????????????????
 * @param graphData ?????????
 * @param k ????????????
 */
var kCore = function kCore(graphData, k) {
  var _a;

  if (k === void 0) {
    k = 1;
  }

  var data = (0, _util.clone)(graphData);
  var _b = data.nodes,
      nodes = _b === void 0 ? [] : _b;
  var _c = data.edges,
      edges = _c === void 0 ? [] : _c;

  var _loop_1 = function _loop_1() {
    // ???????????????????????????
    var degrees = (0, _degree.default)({
      nodes: nodes,
      edges: edges
    });
    var nodeIds = Object.keys(degrees); // ????????????????????????

    nodeIds.sort(function (a, b) {
      var _a, _b;

      return ((_a = degrees[a]) === null || _a === void 0 ? void 0 : _a.degree) - ((_b = degrees[b]) === null || _b === void 0 ? void 0 : _b.degree);
    });
    var minIndexId = nodeIds[0];

    if (!nodes.length || ((_a = degrees[minIndexId]) === null || _a === void 0 ? void 0 : _a.degree) >= k) {
      return "break";
    }

    var originIndex = nodes.findIndex(function (node) {
      return node.id === minIndexId;
    }); // ??????????????????k?????????

    nodes.splice(originIndex, 1); // ??????????????????k?????????????????????

    edges = edges.filter(function (edge) {
      return !(edge.source === minIndexId || edge.target === minIndexId);
    });
  };

  while (true) {
    var state_1 = _loop_1();

    if (state_1 === "break") break;
  }

  return {
    nodes: nodes,
    edges: edges
  };
};

var _default = kCore;
exports.default = _default;
}, function(modId) { var map = {"./degree":1661774171153}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171168, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@antv/util");

var _nodeProperties = require("./utils/node-properties");

var _dataPreprocessing = require("./utils/data-preprocessing");

var _vector = _interopRequireDefault(require("./utils/vector"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ????????????
var getCentroid = function getCentroid(distanceType, allPropertiesWeight, index) {
  var centroid = [];

  switch (distanceType) {
    case _types.DistanceType.EuclideanDistance:
      centroid = allPropertiesWeight[index];
      break;

    default:
      centroid = [];
      break;
  }

  return centroid;
};
/**
 *  k-means?????? ?????????????????????????????????????????????K??????
 * @param data ?????????
 * @param k ??????????????????????????????
 * @param propertyKey ??????????????????
 * @param involvedKeys ???????????????key??????
 * @param uninvolvedKeys ??????????????????key??????
 * @param distanceType ???????????? ?????????????????????????????????
 */


var kMeans = function kMeans(data, k, propertyKey, involvedKeys, uninvolvedKeys, distanceType) {
  if (k === void 0) {
    k = 3;
  }

  if (propertyKey === void 0) {
    propertyKey = undefined;
  }

  if (involvedKeys === void 0) {
    involvedKeys = [];
  }

  if (uninvolvedKeys === void 0) {
    uninvolvedKeys = ['id'];
  }

  if (distanceType === void 0) {
    distanceType = _types.DistanceType.EuclideanDistance;
  }

  var _a = data.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = data.edges,
      edges = _b === void 0 ? [] : _b;
  var defaultClusterInfo = {
    clusters: [{
      id: "0",
      nodes: nodes
    }],
    clusterEdges: []
  }; // ??????????????????????????????????????????????????????return

  if (distanceType === _types.DistanceType.EuclideanDistance && !nodes.every(function (node) {
    return node.hasOwnProperty(propertyKey);
  })) {
    return defaultClusterInfo;
  } // ????????????????????????


  var properties = []; // ??????????????????one-hot??????????????????

  var allPropertiesWeight = [];

  if (distanceType === _types.DistanceType.EuclideanDistance) {
    properties = (0, _nodeProperties.getAllProperties)(nodes, propertyKey);
    allPropertiesWeight = (0, _dataPreprocessing.oneHot)(properties, involvedKeys, uninvolvedKeys);
  }

  if (!allPropertiesWeight.length) {
    return defaultClusterInfo;
  }

  var allPropertiesWeightUniq = (0, _util.uniq)(allPropertiesWeight.map(function (item) {
    return item.join('');
  })); // ??????????????????????????????????????????????????????k??????k???????????????????????????

  var finalK = Math.min(k, nodes.length, allPropertiesWeightUniq.length); // ?????????????????????index??????allPropertiesWeight??????

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].originIndex = i;
  } // ?????????????????????????????????


  var centroids = [];
  var centroidIndexList = [];
  var clusters = [];

  for (var i = 0; i < finalK; i++) {
    if (i === 0) {
      // ????????????????????????????????????
      var randomIndex = Math.floor(Math.random() * nodes.length);

      switch (distanceType) {
        case _types.DistanceType.EuclideanDistance:
          centroids[i] = allPropertiesWeight[randomIndex];
          break;

        default:
          centroids[i] = [];
          break;
      }

      centroidIndexList.push(randomIndex);
      clusters[i] = [nodes[randomIndex]];
      nodes[randomIndex].clusterId = String(i);
    } else {
      var maxDistance = -Infinity;
      var maxDistanceNodeIndex = 0;

      var _loop_1 = function _loop_1(m) {
        if (!centroidIndexList.includes(m)) {
          var totalDistance = 0;

          for (var j = 0; j < centroids.length; j++) {
            // ??????????????????????????????????????????????????????????????????
            var distance = 0;

            switch (distanceType) {
              case _types.DistanceType.EuclideanDistance:
                distance = (0, _dataPreprocessing.getDistance)(allPropertiesWeight[nodes[m].originIndex], centroids[j], distanceType);
                break;

              default:
                break;
            }

            totalDistance += distance;
          } // ?????????????????????????????????????????????????????????


          var avgDistance = totalDistance / centroids.length; // ??????????????????????????????????????????????????????

          if (avgDistance > maxDistance && !centroids.find(function (centroid) {
            return (0, _util.isEqual)(centroid, getCentroid(distanceType, allPropertiesWeight, nodes[m].originIndex));
          })) {
            maxDistance = avgDistance;
            maxDistanceNodeIndex = m;
          }
        }
      }; // ???????????????????????????????????????????????????????????????


      for (var m = 0; m < nodes.length; m++) {
        _loop_1(m);
      }

      centroids[i] = getCentroid(distanceType, allPropertiesWeight, maxDistanceNodeIndex);
      centroidIndexList.push(maxDistanceNodeIndex);
      clusters[i] = [nodes[maxDistanceNodeIndex]];
      nodes[maxDistanceNodeIndex].clusterId = String(i);
    }
  }

  var iterations = 0;

  while (true) {
    for (var i = 0; i < nodes.length; i++) {
      var minDistanceIndex = 0;
      var minDistance = Infinity;

      if (!(iterations === 0 && centroidIndexList.includes(i))) {
        for (var j = 0; j < centroids.length; j++) {
          // ??????????????????????????????????????????????????????????????????
          var distance = 0;

          switch (distanceType) {
            case _types.DistanceType.EuclideanDistance:
              distance = (0, _dataPreprocessing.getDistance)(allPropertiesWeight[i], centroids[j], distanceType);
              break;

            default:
              break;
          } // ????????????????????????????????????


          if (distance < minDistance) {
            minDistance = distance;
            minDistanceIndex = j;
          }
        } // ??????????????????????????????


        if (nodes[i].clusterId !== undefined) {
          for (var n = clusters[Number(nodes[i].clusterId)].length - 1; n >= 0; n--) {
            if (clusters[Number(nodes[i].clusterId)][n].id === nodes[i].id) {
              clusters[Number(nodes[i].clusterId)].splice(n, 1);
            }
          }
        } // ???????????????????????????????????????????????????????????????????????????


        nodes[i].clusterId = String(minDistanceIndex);
        clusters[minDistanceIndex].push(nodes[i]);
      }
    } // ??????????????????????????????????????????


    var centroidsEqualAvg = false;

    for (var i = 0; i < clusters.length; i++) {
      var clusterNodes = clusters[i];
      var totalVector = new _vector.default([]);

      for (var j = 0; j < clusterNodes.length; j++) {
        totalVector = totalVector.add(new _vector.default(allPropertiesWeight[clusterNodes[j].originIndex]));
      } // ?????????????????????????????????


      var avgVector = totalVector.avg(clusterNodes.length); // ???????????????????????????????????????

      if (!avgVector.equal(new _vector.default(centroids[i]))) {
        centroidsEqualAvg = true; // ??????/???????????????????????????????????????????????????????????????

        centroids[i] = avgVector.getArr();
      }
    }

    iterations++; // ?????????????????????????????????????????????????????????????????????????????????????????????????????????1000????????????

    if (nodes.every(function (node) {
      return node.clusterId !== undefined;
    }) && centroidsEqualAvg || iterations >= 1000) {
      break;
    }
  } // get the cluster edges


  var clusterEdges = [];
  var clusterEdgeMap = {};
  edges.forEach(function (edge) {
    var _a, _b;

    var source = edge.source,
        target = edge.target;
    var sourceClusterId = (_a = nodes.find(function (node) {
      return node.id === source;
    })) === null || _a === void 0 ? void 0 : _a.clusterId;
    var targetClusterId = (_b = nodes.find(function (node) {
      return node.id === target;
    })) === null || _b === void 0 ? void 0 : _b.clusterId;
    var newEdgeId = "".concat(sourceClusterId, "---").concat(targetClusterId);

    if (clusterEdgeMap[newEdgeId]) {
      clusterEdgeMap[newEdgeId].count++;
    } else {
      var newEdge = {
        source: sourceClusterId,
        target: targetClusterId,
        count: 1
      };
      clusterEdgeMap[newEdgeId] = newEdge;
      clusterEdges.push(newEdge);
    }
  });
  return {
    clusters: clusters,
    clusterEdges: clusterEdges
  };
};

var _default = kMeans;
exports.default = _default;
}, function(modId) { var map = {"./utils/node-properties":1661774171162,"./utils/data-preprocessing":1661774171164,"./utils/vector":1661774171161,"./types":1661774171165}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171169, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vector = _interopRequireDefault(require("./utils/vector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * cosine-similarity?????? ?????????????????????
 * @param item ??????
 * @param targetItem ????????????
 */
var cosineSimilarity = function cosineSimilarity(item, targetItem) {
  // ??????????????????
  var targetItemVector = new _vector.default(targetItem); // ???????????????????????????

  var targetNodeNorm2 = targetItemVector.norm2(); // ????????????

  var itemVector = new _vector.default(item); // ?????????????????????

  var itemNorm2 = itemVector.norm2(); // ????????????????????????????????????????????????

  var dot = targetItemVector.dot(itemVector);
  var norm2Product = targetNodeNorm2 * itemNorm2; // ?????????????????????????????????????????????????????????

  var cosineSimilarity = norm2Product ? dot / norm2Product : 0;
  return cosineSimilarity;
};

var _default = cosineSimilarity;
exports.default = _default;
}, function(modId) { var map = {"./utils/vector":1661774171161}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171170, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@antv/util");

var _nodeProperties = require("./utils/node-properties");

var _dataPreprocessing = require("./utils/data-preprocessing");

var _cosineSimilarity = _interopRequireDefault(require("./cosine-similarity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  nodes-cosine-similarity?????? ???????????????????????????????????????(????????????????????????????????????)
 * @param nodes ???????????????
 * @param seedNode ????????????
 * @param propertyKey ??????????????????
 * @param involvedKeys ???????????????key??????
 * @param uninvolvedKeys ??????????????????key??????
 */
var nodesCosineSimilarity = function nodesCosineSimilarity(nodes, seedNode, propertyKey, involvedKeys, uninvolvedKeys) {
  if (nodes === void 0) {
    nodes = [];
  }

  if (propertyKey === void 0) {
    propertyKey = undefined;
  }

  if (involvedKeys === void 0) {
    involvedKeys = [];
  }

  if (uninvolvedKeys === void 0) {
    uninvolvedKeys = [];
  }

  var similarNodes = (0, _util.clone)(nodes.filter(function (node) {
    return node.id !== seedNode.id;
  }));
  var seedNodeIndex = nodes.findIndex(function (node) {
    return node.id === seedNode.id;
  }); // ????????????????????????

  var properties = (0, _nodeProperties.getAllProperties)(nodes, propertyKey); // ??????????????????one-hot??????????????????

  var allPropertiesWeight = (0, _dataPreprocessing.oneHot)(properties, involvedKeys, uninvolvedKeys); // ??????????????????

  var seedNodeProperties = allPropertiesWeight[seedNodeIndex];
  var allCosineSimilarity = [];
  similarNodes.forEach(function (node, index) {
    if (node.id !== seedNode.id) {
      // ????????????
      var nodeProperties = allPropertiesWeight[index]; // ?????????????????????????????????????????????????????????

      var cosineSimilarityValue = (0, _cosineSimilarity.default)(nodeProperties, seedNodeProperties);
      allCosineSimilarity.push(cosineSimilarityValue);
      node.cosineSimilarity = cosineSimilarityValue;
    }
  }); // ???????????????????????????????????????????????????

  similarNodes.sort(function (a, b) {
    return b.cosineSimilarity - a.cosineSimilarity;
  });
  return {
    allCosineSimilarity: allCosineSimilarity,
    similarNodes: similarNodes
  };
};

var _default = nodesCosineSimilarity;
exports.default = _default;
}, function(modId) { var map = {"./utils/node-properties":1661774171162,"./utils/data-preprocessing":1661774171164,"./cosine-similarity":1661774171169}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171171, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _unionFind = _interopRequireDefault(require("./structs/union-find"));

var _binaryHeap = _interopRequireDefault(require("./structs/binary-heap"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prim algorithm???use priority queue???????????? O(E+V*logV), V: ???????????????E: ????????????
 * refer: https://en.wikipedia.org/wiki/Prim%27s_algorithm
 * @param graph
 * @param weight ????????????????????????????????????????????????????????????????????????????????????
 */
var primMST = function primMST(graphData, weight) {
  var selectedEdges = [];
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;

  if (nodes.length === 0) {
    return selectedEdges;
  } // ???nodes[0]??????


  var currNode = nodes[0];
  var visited = new Set();
  visited.add(currNode); // ??????????????????????????????????????????????????????????????????

  var compareWeight = function compareWeight(a, b) {
    if (weight) {
      return a.weight - b.weight;
    }

    return 0;
  };

  var edgeQueue = new _binaryHeap.default(compareWeight);
  (0, _util.getEdgesByNodeId)(currNode.id, edges).forEach(function (edge) {
    edgeQueue.insert(edge);
  });

  while (!edgeQueue.isEmpty()) {
    // ??????????????????????????????????????????????????????
    var currEdge = edgeQueue.delMin();
    var source = currEdge.source;
    var target = currEdge.target;
    if (visited.has(source) && visited.has(target)) continue;
    selectedEdges.push(currEdge);

    if (!visited.has(source)) {
      visited.add(source);
      (0, _util.getEdgesByNodeId)(source, edges).forEach(function (edge) {
        edgeQueue.insert(edge);
      });
    }

    if (!visited.has(target)) {
      visited.add(target);
      (0, _util.getEdgesByNodeId)(target, edges).forEach(function (edge) {
        edgeQueue.insert(edge);
      });
    }
  }

  return selectedEdges;
};
/**
 * Kruskal algorithm???????????? O(E*logE), E: ????????????
 * refer: https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
 * @param graph
 * @param weight ????????????????????????????????????????????????????????????????????????????????????
 * @return IEdge[] ????????????MST???????????????
 */


var kruskalMST = function kruskalMST(graphData, weight) {
  var selectedEdges = [];
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;

  if (nodes.length === 0) {
    return selectedEdges;
  } // ?????????weight????????????????????????????????????????????????


  var weightEdges = edges.map(function (edge) {
    return edge;
  });

  if (weight) {
    weightEdges.sort(function (a, b) {
      return a.weight - b.weight;
    });
  }

  var disjointSet = new _unionFind.default(nodes.map(function (n) {
    return n.id;
  })); // ????????????????????????????????????????????????????????????????????????G??????????????????????????????????????????????????????
  // ??????????????????????????????

  while (weightEdges.length > 0) {
    var curEdge = weightEdges.shift();
    var source = curEdge.source;
    var target = curEdge.target;

    if (!disjointSet.connected(source, target)) {
      selectedEdges.push(curEdge);
      disjointSet.union(source, target);
    }
  }

  return selectedEdges;
};
/**
 * ???????????????
 * refer: https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
 * @param graph
 * @param weight ????????????????????????????????????????????????????????????????????????????????????
 * @param algo 'prim' | 'kruskal' ????????????
 * @return EdgeConfig[] ????????????MST???????????????
 */


var minimumSpanningTree = function minimumSpanningTree(graphData, weight, algo) {
  var algos = {
    prim: primMST,
    kruskal: kruskalMST
  };
  if (!algo) return kruskalMST(graphData, weight);
  return algos[algo](graphData, weight);
};

var _default = minimumSpanningTree;
exports.default = _default;
}, function(modId) { var map = {"./structs/union-find":1661774171172,"./structs/binary-heap":1661774171173,"./util":1661774171151}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171172, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * ????????? Disjoint set to support quick union
 */
var UnionFind =
/** @class */
function () {
  function UnionFind(items) {
    this.count = items.length;
    this.parent = {};

    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
      var i = items_1[_i];
      this.parent[i] = i;
    }
  } // find the root of the item


  UnionFind.prototype.find = function (item) {
    while (this.parent[item] !== item) {
      item = this.parent[item];
    }

    return item;
  };

  UnionFind.prototype.union = function (a, b) {
    var rootA = this.find(a);
    var rootB = this.find(b);
    if (rootA === rootB) return; // make the element with smaller root the parent

    if (rootA < rootB) {
      if (this.parent[b] !== b) this.union(this.parent[b], a);
      this.parent[b] = this.parent[a];
    } else {
      if (this.parent[a] !== a) this.union(this.parent[a], b);
      this.parent[a] = this.parent[b];
    }
  }; // whether a and b are connected, i.e. a and b have the same root


  UnionFind.prototype.connected = function (a, b) {
    return this.find(a) === this.find(b);
  };

  return UnionFind;
}();

var _default = UnionFind;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171173, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var defaultCompare = function defaultCompare(a, b) {
  return a - b;
};

var MinBinaryHeap =
/** @class */
function () {
  function MinBinaryHeap(compareFn) {
    if (compareFn === void 0) {
      compareFn = defaultCompare;
    }

    this.compareFn = compareFn;
    this.list = [];
  }

  MinBinaryHeap.prototype.getLeft = function (index) {
    return 2 * index + 1;
  };

  MinBinaryHeap.prototype.getRight = function (index) {
    return 2 * index + 2;
  };

  MinBinaryHeap.prototype.getParent = function (index) {
    if (index === 0) {
      return null;
    }

    return Math.floor((index - 1) / 2);
  };

  MinBinaryHeap.prototype.isEmpty = function () {
    return this.list.length <= 0;
  };

  MinBinaryHeap.prototype.top = function () {
    return this.isEmpty() ? undefined : this.list[0];
  };

  MinBinaryHeap.prototype.delMin = function () {
    var top = this.top();
    var bottom = this.list.pop();

    if (this.list.length > 0) {
      this.list[0] = bottom;
      this.moveDown(0);
    }

    return top;
  };

  MinBinaryHeap.prototype.insert = function (value) {
    if (value !== null) {
      this.list.push(value);
      var index = this.list.length - 1;
      this.moveUp(index);
      return true;
    }

    return false;
  };

  MinBinaryHeap.prototype.moveUp = function (index) {
    var parent = this.getParent(index);

    while (index && index > 0 && this.compareFn(this.list[parent], this.list[index]) > 0) {
      // swap
      var tmp = this.list[parent];
      this.list[parent] = this.list[index];
      this.list[index] = tmp; // [this.list[index], this.list[parent]] = [this.list[parent], this.list[index]]

      index = parent;
      parent = this.getParent(index);
    }
  };

  MinBinaryHeap.prototype.moveDown = function (index) {
    var _a;

    var element = index;
    var left = this.getLeft(index);
    var right = this.getRight(index);
    var size = this.list.length;

    if (left !== null && left < size && this.compareFn(this.list[element], this.list[left]) > 0) {
      element = left;
    } else if (right !== null && right < size && this.compareFn(this.list[element], this.list[right]) > 0) {
      element = right;
    }

    if (index !== element) {
      _a = [this.list[element], this.list[index]], this.list[index] = _a[0], this.list[element] = _a[1];
      this.moveDown(element);
    }
  };

  return MinBinaryHeap;
}();

var _default = MinBinaryHeap;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171174, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _degree = _interopRequireDefault(require("./degree"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * PageRank https://en.wikipedia.org/wiki/PageRank
 * refer: https://github.com/anvaka/ngraph.pagerank
 * @param graph
 * @param epsilon ??????????????????????????????????????? 0.000001
 * @param linkProb ???????????????dumping factor????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? 0.85
 */
var pageRank = function pageRank(graphData, epsilon, linkProb) {
  if (typeof epsilon !== 'number') epsilon = 0.000001;
  if (typeof linkProb !== 'number') linkProb = 0.85;
  var distance = 1;
  var leakedRank = 0;
  var maxIterations = 1000;
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var nodesCount = nodes.length;
  var currentRank;
  var curRanks = {};
  var prevRanks = {}; // Initialize pageranks ?????????

  for (var j = 0; j < nodesCount; ++j) {
    var node = nodes[j];
    var nodeId = node.id;
    curRanks[nodeId] = 1 / nodesCount;
    prevRanks[nodeId] = 1 / nodesCount;
  }

  var nodeDegree = (0, _degree.default)(graphData);

  while (maxIterations > 0 && distance > epsilon) {
    leakedRank = 0;

    for (var j = 0; j < nodesCount; ++j) {
      var node = nodes[j];
      var nodeId = node.id;
      currentRank = 0;

      if (nodeDegree[node.id].inDegree === 0) {
        curRanks[nodeId] = 0;
      } else {
        var neighbors = (0, _util.getNeighbors)(nodeId, edges, 'source');

        for (var i = 0; i < neighbors.length; ++i) {
          var neighbor = neighbors[i];
          var outDegree = nodeDegree[neighbor].outDegree;
          if (outDegree > 0) currentRank += prevRanks[neighbor] / outDegree;
        }

        curRanks[nodeId] = linkProb * currentRank;
        leakedRank += curRanks[nodeId];
      }
    }

    leakedRank = (1 - leakedRank) / nodesCount;
    distance = 0;

    for (var j = 0; j < nodesCount; ++j) {
      var node = nodes[j];
      var nodeId = node.id;
      currentRank = curRanks[nodeId] + leakedRank;
      distance += Math.abs(currentRank - prevRanks[nodeId]);
      prevRanks[nodeId] = currentRank;
    }

    maxIterations -= 1;
  }

  return prevRanks;
};

var _default = pageRank;
exports.default = _default;
}, function(modId) { var map = {"./degree":1661774171153,"./util":1661774171151}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171175, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _floydWarshall = _interopRequireDefault(require("./floydWarshall"));

var _gSpan = _interopRequireDefault(require("./gSpan/gSpan"));

var _dijkstra = _interopRequireDefault(require("./dijkstra"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ??? graphData ???????????????????????????????????????
 * @param graphData
 * @param spm
 * @param nodeLabelProp
 * @param k k-??????
 */
var findKNeighborUnits = function findKNeighborUnits(graphData, spm, nodeLabelProp, k) {
  if (nodeLabelProp === void 0) {
    nodeLabelProp = 'cluster';
  }

  if (k === void 0) {
    k = 2;
  }

  var units = [];
  var nodes = graphData.nodes;
  spm.forEach(function (row, i) {
    units.push(findKNeighborUnit(nodes, row, i, nodeLabelProp, k));
  });
  return units;
};

var findKNeighborUnit = function findKNeighborUnit(nodes, row, i, nodeLabelProp, k) {
  var unitNodeIdxs = [i];
  var neighbors = [];
  var labelCountMap = {};
  row.forEach(function (v, j) {
    if (v <= k && i !== j) {
      unitNodeIdxs.push(j);
      neighbors.push(nodes[j]);
      var label = nodes[j][nodeLabelProp];
      if (!labelCountMap[label]) labelCountMap[label] = {
        count: 1,
        dists: [v]
      };else {
        labelCountMap[label].count++;
        labelCountMap[label].dists.push(v);
      }
    }
  }); // ??? labelCountMap ?????? dists ?????????????????????????????????????????????

  Object.keys(labelCountMap).forEach(function (label) {
    labelCountMap[label].dists = labelCountMap[label].dists.sort(function (a, b) {
      return a - b;
    });
  });
  return {
    nodeIdx: i,
    nodeId: nodes[i].id,
    nodeIdxs: unitNodeIdxs,
    neighbors: neighbors,
    neighborNum: unitNodeIdxs.length - 1,
    nodeLabelCountMap: labelCountMap
  };
};
/**
 * ??????????????????????????????????????? k
 * @param k ?????? k????????? k-??????
 * @param nodeNum ?????? length
 * @param maxNodePairNum ?????????????????????????????? maxNodePairNum
 * @param spm ??????????????????
 */


var findNodePairsRandomly = function findNodePairsRandomly(k, nodeNum, maxNodePairNum, kNeighborUnits, spm) {
  // ??????????????????????????????????????????
  var nodePairNumEachNode = Math.ceil(maxNodePairNum / nodeNum);
  var nodePairMap = {};
  var foundNodePairCount = 0; // ?????????????????????????????????????????? nodePairNumEachNode ?????????????????????????????? k?????????????????????????????? maxNodePairNum ????????????????????????????????????

  kNeighborUnits.forEach(function (unit, i) {
    // ???????????? nodePairNumEachNode??????????????????????????????????????????(2 * nodeNum)???????????????
    var nodePairForICount = 0;
    var outerLoopCount = 0;
    var neighbors = unit.nodeIdxs; // the first one is the center node

    var neighborNum = unit.neighborNum - 1;

    while (nodePairForICount < nodePairNumEachNode) {
      // ??????????????????????????????????????? index
      var oidx = neighbors[1 + Math.floor(Math.random() * neighborNum)];
      var innerLoopCount = 0; // ??????????????????????????? idx ??????????????????????????? random????????????????????????????????????????????????????????????????????????????????? k

      while (nodePairMap["".concat(i, "-").concat(oidx)] || nodePairMap["".concat(oidx, "-").concat(i)]) {
        oidx = Math.floor(Math.random() * nodeNum);
        innerLoopCount++;
        if (innerLoopCount > 2 * nodeNum) break; // ????????????????????????????????????(2 * nodeNum)??????????????????????????????
      }

      if (innerLoopCount < 2 * nodeNum) {
        // ???????????????????????????????????????????????????????????????
        nodePairMap["".concat(i, "-").concat(oidx)] = {
          start: i,
          end: oidx,
          distance: spm[i][oidx]
        };
        nodePairForICount++;
        foundNodePairCount++; // ???????????????????????????????????????????????????????????????

        if (foundNodePairCount >= maxNodePairNum) return nodePairMap;
      }

      outerLoopCount++;
      if (outerLoopCount > 2 * nodeNum) break; // ????????????????????????????????????(2 * nodeNum)??????????????????????????????
    } // ?????????????????????????????? nodePairNumEachNode ?????????????????? nodePairNumEachNode????????????????????????????????????


    if (nodePairForICount < nodePairNumEachNode) {
      var gap = nodePairNumEachNode - nodePairForICount;
      nodePairNumEachNode = (nodePairNumEachNode + gap) / (nodeNum - i - 1);
    }
  });
  return nodePairMap;
};
/**
 * ???????????? nodePairMap ???????????????????????????????????????
 * @param nodePairMap ????????? map???key ??? node1.id-node2.id???value ??? { startNodeIdx, endNodeIdx, distance }
 * @param neighborUnits ??????????????????????????????
 * @param graphData ????????????
 * @param edgeMap ?????? map???????????????
 * @param cachedInducedGraphMap ????????????????????????????????????????????????????????????????????? key ??????????????????????????????????????????
 */


var getIntersectNeighborInducedGraph = function getIntersectNeighborInducedGraph(nodePairMap, neighborUnits, graphData, cachedInducedGraphMap) {
  var nodes = graphData.nodes;
  if (!cachedInducedGraphMap) cachedInducedGraphMap = {};
  Object.keys(nodePairMap).forEach(function (key) {
    var _a, _b;

    if (cachedInducedGraphMap && cachedInducedGraphMap[key]) return;
    cachedInducedGraphMap[key] = {
      nodes: [],
      edges: []
    };
    var pair = nodePairMap[key];
    var startUnitNodeIds = (_a = neighborUnits[pair.start]) === null || _a === void 0 ? void 0 : _a.nodeIdxs;
    var endUnitNodeIds = (_b = neighborUnits[pair.end]) === null || _b === void 0 ? void 0 : _b.nodeIdxs;
    if (!startUnitNodeIds || !endUnitNodeIds) return; // ??????????????????????????????

    var endSet = new Set(endUnitNodeIds);
    var intersect = startUnitNodeIds.filter(function (x) {
      return endSet.has(x);
    }); // ????????????????????? 1580 + 6 nodes full-connected ????????????

    if (!intersect || !intersect.length) return; // ???????????????????????????

    var intersectIdMap = {};
    var intersectLength = intersect.length;

    for (var i = 0; i < intersectLength; i++) {
      var node = nodes[intersect[i]];
      cachedInducedGraphMap[key].nodes.push(node); // ????????????????????????????????????

      intersectIdMap[node.id] = true;
    } // ???????????????????????????????????????????????????????????????????????????????????????


    graphData.edges.forEach(function (edge) {
      if (intersectIdMap[edge.source] && intersectIdMap[edge.target]) cachedInducedGraphMap[key].edges.push(edge);
    });
  });
  return cachedInducedGraphMap;
};
/**
 * ?????? strcutre ??? graph ??????????????????
 * @param graph ?????????
 * @param structure ?????????????????????????????????????????????????????????
 * @param nodeLabelProp ?????????????????????
 * @param edgeLabelProp ??????????????????
 */


var getMatchedCount = function getMatchedCount(graph, structure, nodeLabelProp, edgeLabelProp) {
  var _a, _b;

  var nodeMap = {};
  graph.nodes.forEach(function (node) {
    nodeMap[node.id] = node;
  });
  var count = 0;
  if (!((_a = structure === null || structure === void 0 ? void 0 : structure.edges) === null || _a === void 0 ? void 0 : _a.length) || ((_b = structure === null || structure === void 0 ? void 0 : structure.nodes) === null || _b === void 0 ? void 0 : _b.length) < 2) return 0;
  graph.edges.forEach(function (e) {
    var sourceLabel = nodeMap[e.source][nodeLabelProp];
    var targetLabel = nodeMap[e.target][nodeLabelProp];
    var strNodeLabel1 = structure === null || structure === void 0 ? void 0 : structure.nodes[0][nodeLabelProp];
    var strNodeLabel2 = structure === null || structure === void 0 ? void 0 : structure.nodes[1][nodeLabelProp];
    var strEdgeLabel = structure === null || structure === void 0 ? void 0 : structure.edges[0][edgeLabelProp];
    if (e[edgeLabelProp] !== strEdgeLabel) return;

    if (sourceLabel === strNodeLabel1 && targetLabel === strNodeLabel2 || sourceLabel === strNodeLabel2 && targetLabel === strNodeLabel1) {
      count++;
    }
  });
  return count;
};
/**
 * structures ???????????????????????????????????????????????????????????? matchedCountMap ??????????????????????????????????????????????????????
 * @param matchedCountMap ?????? structure ??????????????????????????????????????? { [strcture.idx]: { [interInducedGraphKey]: count } }
 * @param structureNum strcuture ???????????? matchedCountMap.length ??????
 * @param structures
 */


var findRepresentStructure = function findRepresentStructure(matchedCountMap, structureNum, structures) {
  var maxOffset = Infinity,
      representClusterType = 0;

  var _loop_1 = function _loop_1(i) {
    // ??????????????? map???key ??? intGraph ??? key???value ??? structures[i] ???????????????
    var countMapI = matchedCountMap[i]; // ?????? value ???????????????????????? keys ????????????

    var sortedGraphKeys = Object.keys(countMapI).sort(function (a, b) {
      return countMapI[a] - countMapI[b];
    }); // ??? 100 ??? graphKeys?????? graphKeys ??????????????? groupNum ???

    var groupNum = 10;
    var clusters = []; // ????????? groupNum ??????

    sortedGraphKeys.forEach(function (key, j) {
      if (!clusters[j % groupNum]) clusters[j % groupNum] = {
        graphs: [],
        totalCount: 0,
        aveCount: 0
      };
      clusters[j % groupNum].graphs.push(key);
      clusters[j % groupNum].totalCount += countMapI[key];
    }); // ?????? cluster ??? cluster ??????????????? innerDist????????? cluster ??????????????? intraDist

    var aveIntraDist = 0; // ????????????????????????

    var aveCounts = []; // ??????????????????????????????????????????????????????

    clusters.forEach(function (graphsInCluster) {
      // ????????????
      var aveCount = graphsInCluster.totalCount / graphsInCluster.graphs.length;
      graphsInCluster.aveCount = aveCount;
      aveCounts.push(aveCount); // ??????????????????????????????????????????

      var aveIntraPerCluster = 0;
      var graphsNum = graphsInCluster.length;
      graphsInCluster.graphs.forEach(function (graphKey1, j) {
        var graph1Count = countMapI[graphKey1];
        graphsInCluster.graphs.forEach(function (graphKey2, k) {
          if (j === k) return;
          aveIntraPerCluster += Math.abs(graph1Count - countMapI[graphKey2]);
        });
      });
      aveIntraPerCluster /= graphsNum * (graphsNum - 1) / 2;
      aveIntraDist += aveIntraPerCluster;
    });
    aveIntraDist /= clusters.length; // ??????????????????????????????

    var aveInterDist = 0; // ?????????????????????

    aveCounts.forEach(function (aveCount1, j) {
      aveCounts.forEach(function (aveCount2, k) {
        if (j === k) return;
        aveInterDist += Math.abs(aveCount1 - aveCount2);
      });
      aveInterDist /= aveCounts.length * (aveCounts.length - 1) / 2;
    }); // ?????? (??????????????????-??????????????????) ??????????????????????????????????????? structure ??????????????????????????? DS(G)???

    var offset = aveInterDist - aveIntraDist;

    if (maxOffset < offset) {
      maxOffset = offset;
      representClusterType = i;
    }
  };

  for (var i = 0; i < structureNum; i++) {
    _loop_1(i);
  }

  return {
    structure: structures[representClusterType],
    structureCountMap: matchedCountMap[representClusterType]
  };
};

var getNodeMaps = function getNodeMaps(nodes, nodeLabelProp) {
  var nodeMap = {},
      nodeLabelMap = {};
  nodes.forEach(function (node, i) {
    nodeMap[node.id] = {
      idx: i,
      node: node,
      degree: 0,
      inDegree: 0,
      outDegree: 0
    };
    var label = node[nodeLabelProp];
    if (!nodeLabelMap[label]) nodeLabelMap[label] = [];
    nodeLabelMap[label].push(node);
  });
  return {
    nodeMap: nodeMap,
    nodeLabelMap: nodeLabelMap
  };
};

var getEdgeMaps = function getEdgeMaps(edges, edgeLabelProp, nodeMap) {
  var edgeMap = {},
      edgeLabelMap = {};
  edges.forEach(function (edge, i) {
    edgeMap["".concat(_util.uniqueId)] = {
      idx: i,
      edge: edge
    };
    var label = edge[edgeLabelProp];
    if (!edgeLabelMap[label]) edgeLabelMap[label] = [];
    edgeLabelMap[label].push(edge);
    var sourceNode = nodeMap[edge.source];

    if (sourceNode) {
      sourceNode.degree++;
      sourceNode.outDegree++;
    }

    var targetNode = nodeMap[edge.target];

    if (targetNode) {
      targetNode.degree++;
      targetNode.inDegree++;
    }
  });
  return {
    edgeMap: edgeMap,
    edgeLabelMap: edgeLabelMap
  };
};
/**
 * ????????????????????? map???key ??? sourceNode.id-targetNode.id???value ???????????????????????????????????????
 * @param nodes
 * @param spm
 * @param directed
 */


var getSpmMap = function getSpmMap(nodes, spm, directed) {
  var length = spm.length;
  var map = {};
  spm.forEach(function (row, i) {
    var start = directed ? 0 : i + 1;
    var iId = nodes[i].id;

    for (var j = start; j < length; j++) {
      if (i === j) continue;
      var jId = nodes[j].id;
      var dist = row[j];
      map["".concat(iId, "-").concat(jId)] = dist;
      if (!directed) map["".concat(jId, "-").concat(iId)] = dist;
    }
  });
  return map;
};
/**
 * ?????????????????????node1???node2?????? NDS ??????
 * @param graph ????????????
 * @param node1
 * @param node2
 */


var getNDSDist = function getNDSDist(graph, node1, node2, nodeMap, spDist, kNeighborUnits, structure, nodeLabelProp, edgeLabelProp, cachedNDSMap, cachedInterInducedGraph) {
  var _a;

  var key = "".concat(node1.id, "-").concat(node2.id);
  if (cachedNDSMap && cachedNDSMap[key]) return cachedNDSMap[key];
  var interInducedGraph = cachedInterInducedGraph ? cachedInterInducedGraph[key] : undefined; // ????????????????????????????????????????????????

  if (!interInducedGraph) {
    var pairMap = (_a = {}, _a[key] = {
      start: nodeMap[node1.id].idx,
      end: nodeMap[node2.id].idx,
      distance: spDist
    }, _a);
    cachedInterInducedGraph = getIntersectNeighborInducedGraph(pairMap, kNeighborUnits, graph, cachedInterInducedGraph);
    interInducedGraph = cachedInterInducedGraph[key];
  }

  return getMatchedCount(interInducedGraph, structure, nodeLabelProp, edgeLabelProp);
};
/**
 * ?????? pattern ?????????????????????????????? minPatternNodeLabelDegreeMap
 */


var stashPatternNodeLabelDegreeMap = function stashPatternNodeLabelDegreeMap(minPatternNodeLabelDegreeMap, neighborLabel, patternNodeMap, patternNodeLabelMap) {
  var _a, _b, _c;

  var minPatternNodeLabelDegree = (_a = minPatternNodeLabelDegreeMap[neighborLabel]) === null || _a === void 0 ? void 0 : _a.degree;
  var minPatternNodeLabelInDegree = (_b = minPatternNodeLabelDegreeMap[neighborLabel]) === null || _b === void 0 ? void 0 : _b.inDegree;
  var minPatternNodeLabelOutDegree = (_c = minPatternNodeLabelDegreeMap[neighborLabel]) === null || _c === void 0 ? void 0 : _c.outDegree;

  if (minPatternNodeLabelDegreeMap[neighborLabel] === undefined) {
    minPatternNodeLabelDegree = Infinity;
    minPatternNodeLabelInDegree = Infinity;
    minPatternNodeLabelOutDegree = Infinity;
    patternNodeLabelMap[neighborLabel].forEach(function (patternNodeWithLabel) {
      var patternNodeDegree = patternNodeMap[patternNodeWithLabel.id].degree;
      if (minPatternNodeLabelDegree > patternNodeDegree) minPatternNodeLabelDegree = patternNodeDegree;
      var patternNodeInDegree = patternNodeMap[patternNodeWithLabel.id].inDegree;
      if (minPatternNodeLabelInDegree > patternNodeInDegree) minPatternNodeLabelInDegree = patternNodeInDegree;
      var patternNodeOutDegree = patternNodeMap[patternNodeWithLabel.id].outDegree;
      if (minPatternNodeLabelOutDegree > patternNodeOutDegree) minPatternNodeLabelOutDegree = patternNodeOutDegree;
    });
    minPatternNodeLabelDegreeMap[neighborLabel] = {
      degree: minPatternNodeLabelDegree,
      inDegree: minPatternNodeLabelInDegree,
      outDegree: minPatternNodeLabelOutDegree
    };
  }

  return {
    minPatternNodeLabelDegree: minPatternNodeLabelDegree,
    minPatternNodeLabelInDegree: minPatternNodeLabelInDegree,
    minPatternNodeLabelOutDegree: minPatternNodeLabelOutDegree
  };
};
/**
 * GADDI ????????????
 * @param graphData ????????????
 * @param pattern ??????????????????????????????????????????????????????
 * @param directed ?????????????????????????????? false
 * @param k ?????? k????????? k-??????
 * @param length ?????? length
 * @param nodeLabelProp ??????????????????????????????????????????????????????????????????????????? cluster
 * @param edgeLabelProp ????????????????????????????????????????????????????????????????????? cluster
 */


var GADDI = function GADDI(graphData, pattern, directed, k, length, nodeLabelProp, edgeLabelProp) {
  var _a;

  if (directed === void 0) {
    directed = false;
  }

  if (nodeLabelProp === void 0) {
    nodeLabelProp = 'cluster';
  }

  if (edgeLabelProp === void 0) {
    edgeLabelProp = 'cluster';
  }

  if (!graphData || !graphData.nodes) return; // ???????????????
  // 0. ??????????????????/??????????????????????????????????????????
  // 1. ???????????? graphData???????????? 1~5 ??????
  // 2. ??????
  // console.log("----- stage-pre: preprocessing -------");
  // -------- ??????????????????????????????/??????????????????????????????????????????-------

  var nodeNum = graphData.nodes.length;
  if (!nodeNum) return; // console.log("----- stage-pre.1: calc shortest path matrix for graph -------");

  var spm = (0, _floydWarshall.default)(graphData, directed); // console.log(
  //   "----- stage-pre.2: calc shortest path matrix for pattern -------"
  // );

  var patternSpm = (0, _floydWarshall.default)(pattern, directed); // console.log(
  //   "----- stage-pre.3: calc shortest path matrix map for graph -------"
  // );

  var spmMap = getSpmMap(graphData.nodes, spm, directed); // console.log(
  //   "----- stage-pre.4: calc shortest path matrix map for pattern -------"
  // );

  var patternSpmMap = getSpmMap(pattern.nodes, patternSpm, directed); // console.log("----- stage-pre.5: establish maps -------");
  // ????????? map?????? id ??? id ?????????????????????????????????

  var _b = getNodeMaps(graphData.nodes, nodeLabelProp),
      nodeMap = _b.nodeMap,
      nodeLabelMap = _b.nodeLabelMap;

  var _c = getNodeMaps(pattern.nodes, nodeLabelProp),
      patternNodeMap = _c.nodeMap,
      patternNodeLabelMap = _c.nodeLabelMap; // ??????????????????


  getEdgeMaps(graphData.edges, edgeLabelProp, nodeMap);
  var patternEdgeLabelMap = getEdgeMaps(pattern.edges, edgeLabelProp, patternNodeMap).edgeLabelMap; // ???????????? length??????????????? pattern ?????????????????????????????????

  var patternSpmSpread = [];
  patternSpm === null || patternSpm === void 0 ? void 0 : patternSpm.forEach(function (row) {
    patternSpmSpread = patternSpmSpread.concat(row);
  });
  if (!length) length = Math.max.apply(Math, (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], patternSpmSpread, false), [2], false));
  if (!k) k = length; // console.log("params", directed, length, k);
  // console.log("----- stage-pre.6: calc k neighbor units -------");
  // ????????????????????? k ????????????

  var kNeighborUnits = findKNeighborUnits(graphData, spm, nodeLabelProp, k);
  var patternKNeighborUnits = findKNeighborUnits(pattern, patternSpm, nodeLabelProp, k); // console.log(
  //   "----- stage0: going to processing graph and find intersect neighbor induced graphs -------"
  // );
  // console.log("----- stage0.1: going to select random node pairs -------");
  // -------- ???????????????????????? graphData-------
  // 1.1. ?????????????????? 100 ?????????????????????????????? Length ??? k
  // ??? graphData ?????? 20 ??????????????????????????? 100 ?????????????????????????????? n(n-1)/2 ?????????

  var maxNodePairNum = Math.min(100, nodeNum * (nodeNum - 1) / 2);
  var nodePairsMap = findNodePairsRandomly(k, nodeNum, maxNodePairNum, kNeighborUnits, spm); // console.log(
  //   "----- stage0.2: going to calculate intersect neighbor induced graphs -------"
  // );
  // 1.2. ?????????????????????????????????????????????????????????????????? {'beginNodeIdx-endNodeIdx': {nodes: [], edges: []}}

  var intGMap = getIntersectNeighborInducedGraph(nodePairsMap, kNeighborUnits, graphData); // 1.3. ?????? gSpan ?????????frequent graph mining????????? ISIntG ?????? 10 ??????????????????????????????3-4?????????

  var top = 10,
      minSupport = 1,
      minNodeNum = 1,
      maxNodeNum = 4;
  var params = {
    graphs: intGMap,
    nodeLabelProp: nodeLabelProp,
    edgeLabelProp: edgeLabelProp,
    minSupport: minSupport,
    minNodeNum: minNodeNum,
    maxNodeNum: maxNodeNum,
    directed: directed
  }; // console.log(
  //   "----- stage1: (gSpan) going to find frequent structure dsG -------"
  // );
  // console.log("----- stage1.1: going to run gSpan -------");
  // ????????????????????? sub structure ??????????????????

  var freStructures = (0, _gSpan.default)(params).slice(0, top); // structureNum ???????????? top

  var structureNum = freStructures.length; // 1.4. ???????????? 10 ??????????????? intGMap ????????????????????????????????????

  var matchedCountMap = [];
  freStructures.forEach(function (structure, i) {
    matchedCountMap[i] = {};
    Object.keys(intGMap).forEach(function (key) {
      var graph = intGMap[key];
      var subStructureCount = getMatchedCount(graph, structure, nodeLabelProp, edgeLabelProp);
      matchedCountMap[i][key] = subStructureCount;
    });
  }); // console.log(
  //   "----- stage1.1: going to find the most represent strucutre -------"
  // );
  // 1.5. ????????????????????????????????????????????? intGMap ????????????????????????????????? structureNum ?????????
  // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? DS(G)

  var _d = findRepresentStructure(matchedCountMap, structureNum, freStructures),
      dsG = _d.structure,
      ndsDist = _d.structureCountMap; // -------- ??????????????????-------
  // 2.1 ????????? Q ????????????????????????????????????????????? G ??????????????????????????????????????????????????? G ????????????????????????


  var beginPNode = pattern.nodes[0],
      candidates = [],
      label = (_a = pattern.nodes[0]) === null || _a === void 0 ? void 0 : _a[nodeLabelProp],
      maxNodeNumWithSameLabel = -Infinity;
  pattern.nodes.forEach(function (node) {
    var pLabel = node[nodeLabelProp];
    var nodesWithSameLabel = nodeLabelMap[pLabel];

    if ((nodesWithSameLabel === null || nodesWithSameLabel === void 0 ? void 0 : nodesWithSameLabel.length) > maxNodeNumWithSameLabel) {
      maxNodeNumWithSameLabel = nodesWithSameLabel.length;
      candidates = nodesWithSameLabel;
      label = pLabel;
      beginPNode = node;
    }
  }); // console.log("----- stage2: going to find candidates -------");
  // ?????????????????????????????????

  var minPatternNodeLabelDegreeMap = {}; // key ??? label???value ?????? label ?????????????????????

  var patternIntGraphMap = {},
      patternNDSDist = {},
      // key ??? node.id-node.id
  patternNDSDistMap = {}; // key ??? node.id-label2???value nds???????????????????????????????????????????????????????????????????????? node2???
  // 2.2.2 ?????? Q ???????????????????????? k ??????????????????????????? node ????????????????????? NDS ??????

  var patternSpDist = {};
  var patternSpDistBack = {};
  Object.keys(patternNodeLabelMap).forEach(function (label2, j) {
    patternSpDist[label2] = [];

    if (directed) {
      patternSpDistBack[label2] = [];
    }

    var maxDist = -Infinity;
    var patternNodesWithLabel2 = patternNodeLabelMap[label2];
    var patternNodePairMap = {};
    patternNodesWithLabel2.forEach(function (nodeWithLabel2) {
      var dist = patternSpmMap["".concat(beginPNode.id, "-").concat(nodeWithLabel2.id)];
      dist && patternSpDist[label2].push(dist);
      if (maxDist < dist) maxDist = dist;
      patternNodePairMap["".concat(beginPNode.id, "-").concat(nodeWithLabel2.id)] = {
        start: 0,
        end: patternNodeMap[nodeWithLabel2.id].idx,
        distance: dist
      };

      if (directed) {
        var distBack = patternSpmMap["".concat(nodeWithLabel2.id, "-").concat(beginPNode.id)];
        distBack && patternSpDistBack[label2].push(distBack);
      }
    }); // spDist[label2] ????????????????????????

    patternSpDist[label2] = patternSpDist[label2].sort(function (a, b) {
      return a - b;
    });
    if (directed) patternSpDistBack[label2] = patternSpDistBack[label2].sort(function (a, b) {
      return a - b;
    }); // ?????? Q ????????? label2 ????????? beginPNode ??? NDS ??????
    // ?????? label2 ????????? beginPNode ??????????????????????????????
    // key: node1.id-node2.id

    patternIntGraphMap = getIntersectNeighborInducedGraph(patternNodePairMap, patternKNeighborUnits, pattern, patternIntGraphMap); // pattern ??? beginNode ????????? label2 ?????? ??? NDS ????????????????????????????????????????????????????????????

    var currentPatternNDSDistArray = [];
    Object.keys(patternNodePairMap).forEach(function (key) {
      if (patternNDSDist[key]) {
        currentPatternNDSDistArray.push(patternNDSDist[key]);
        return; // ?????????????????????????????????
      }

      var patternIntGraph = patternIntGraphMap[key];
      patternNDSDist[key] = getMatchedCount(patternIntGraph, dsG, nodeLabelProp, edgeLabelProp);
      currentPatternNDSDistArray.push(patternNDSDist[key]);
    }); // ???????????? currentPatternNDSDist ??????????????????

    currentPatternNDSDistArray = currentPatternNDSDistArray.sort(function (a, b) {
      return b - a;
    });
    patternNDSDistMap["".concat(beginPNode.id, "-").concat(label2)] = currentPatternNDSDistArray;
    if (label2 === label) return;
    var candidatesNum = (candidates === null || candidates === void 0 ? void 0 : candidates.length) || 0;

    var _loop_4 = function _loop_4(m) {
      var cNode = candidates[m]; // prune1?????? candidates ????????? cNode ??? kNeighborUnits ???????????? label2 ????????????????????? pattern ??? label2 ??????????????????

      var graphNeighborUnit = kNeighborUnits[nodeMap[cNode.id].idx];
      var graphNeighborUnitCountMap = graphNeighborUnit.nodeLabelCountMap[label2];
      var patternLabel2Num = patternNodeLabelMap[label2].length;

      if (!graphNeighborUnitCountMap || graphNeighborUnitCountMap.count < patternLabel2Num) {
        candidates.splice(m, 1);
        return "continue";
      } // prune2?????? candidates ????????? cNode ??? kNeighborUnits ???????????? label2 ??????????????????????????? patternSpDist[label2]????????????
      // (prune2 ????????????candidate ?????????????????????????????? spDist[label2].length ????????????????????????????????? patternSpDist[label2] ??????????????????????????????????????? G > Q ????????????????????? candidate)


      var prune2Invalid = false;

      for (var n = 0; n < patternLabel2Num; n++) {
        if (graphNeighborUnitCountMap.dists[n] > patternSpDist[label2][n]) {
          prune2Invalid = true;
          break;
        }
      }

      if (prune2Invalid) {
        candidates.splice(m, 1);
        return "continue";
      } // prune3?????? candidates ????????? cNode ??? kNeighborUnits ???????????? label2 ????????? NDS ???????????? patternNDSDist[beginNode.id-label2]????????????
      // TODO???prune3???currentPatternNDSDistArray ??? currentNDSDist ?????????
      // ?????? G ????????? label2 ????????? cNode ??? NDS ??????
      // ?????? label2 ????????? cNode ??????????????????????????????


      var cNodePairMap = {};
      graphNeighborUnit.neighbors.forEach(function (neighborNode) {
        var dist = spmMap["".concat(cNode.id, "-").concat(neighborNode.id)];
        cNodePairMap["".concat(cNode.id, "-").concat(neighborNode.id)] = {
          start: nodeMap[cNode.id].idx,
          end: nodeMap[neighborNode.id].idx,
          distance: dist
        };
      }); // ?????? intGMap

      intGMap = getIntersectNeighborInducedGraph(cNodePairMap, kNeighborUnits, graphData, intGMap); // candidate ???????????? label2 ????????? NDS ??????, key ??? node.id-node.id

      var currentNDSDistArray = [];
      Object.keys(cNodePairMap).forEach(function (key) {
        if (ndsDist[key]) {
          currentNDSDistArray.push(ndsDist[key]);
          return; // ?????????????????????????????????
        }

        var intGraph = intGMap[key];
        ndsDist[key] = getMatchedCount(intGraph, dsG, nodeLabelProp, edgeLabelProp);
        currentNDSDistArray.push(ndsDist[key]);
      }); // ???????????? currentNDSDistArray ??????????????????

      currentNDSDistArray = currentNDSDistArray.sort(function (a, b) {
        return b - a;
      });
      var prune3Invalid = false;

      for (var n = 0; n < patternLabel2Num; n++) {
        if (currentNDSDistArray[n] < currentPatternNDSDistArray[n]) {
          prune3Invalid = true;
          break;
        }
      }

      if (prune3Invalid) {
        candidates.splice(m, 1);
        return "continue";
      }
    };

    for (var m = candidatesNum - 1; m >= 0; m--) {
      _loop_4(m);
    }
  });
  var candidateGraphs = []; // console.log(
  //   "----- stage3: going to splice neighbors for each candidate graph -------"
  // );
  // candidates ??????????????????????????? candidate ?????????????????? Length-neighbor ?????????????????????
  // ??????????????????????????????????????? Q ??????????????????????????? Q ??????????????? label????????? label ??? candidate ??????????????????????????? Q???NDS ???????????? Q

  candidates === null || candidates === void 0 ? void 0 : candidates.forEach(function (candidate) {
    var nodeIdx = nodeMap[candidate.id].idx;
    var lengthNeighborUnit = findKNeighborUnit(graphData.nodes, spm[nodeIdx], nodeIdx, nodeLabelProp, length);
    var neighborNodes = lengthNeighborUnit.neighbors; // ???????????????????????????????????????

    var neighborNum = neighborNodes.length;
    var unmatched = false;

    for (var i = neighborNum - 1; i >= 0; i--) {
      // ???????????????????????????????????????????????????????????????????????????????????? candidate ????????????
      if (neighborNodes.length + 1 < pattern.nodes.length) {
        unmatched = true;
        return;
      }

      var neighborNode = neighborNodes[i];
      var neighborLabel = neighborNode[nodeLabelProp]; // prune1: ?????????????????? label ???????????? pattern ?????????????????????

      if (!patternNodeLabelMap[neighborLabel] || !patternNodeLabelMap[neighborLabel].length) {
        neighborNodes.splice(i, 1);
        continue;
      } // prune2: ?????????????????? candidate ????????????????????????????????? label ???????????? beginPNode ????????????????????????????????????????????????
      // prune2.1: ??????????????????????????? beginPNode ???????????????????????? pattern ???????????? beginPNode ????????? label????????????????????? label ?????????


      if (!patternSpDist[neighborLabel] || !patternSpDist[neighborLabel].length) {
        neighborNodes.splice(i, 1);
        continue;
      }

      var key = "".concat(candidate.id, "-").concat(neighborNode.id); // prune2.2

      var distToCandidate = spmMap[key];
      var idx = patternSpDist[neighborLabel].length - 1;
      var maxDistWithLabelInPattern = patternSpDist[neighborLabel][idx]; // patternSpDist[neighborLabel] ??????????????????????????????

      if (distToCandidate > maxDistWithLabelInPattern) {
        neighborNodes.splice(i, 1);
        continue;
      }

      if (directed) {
        var keyBack = "".concat(neighborNode.id, "-").concat(candidate.id);
        var distFromCandidate = spmMap[keyBack];
        idx = patternSpDistBack[neighborLabel].length - 1;
        var maxBackDistWithLabelInPattern = patternSpDistBack[neighborLabel][idx];

        if (distFromCandidate > maxBackDistWithLabelInPattern) {
          neighborNodes.splice(i, 1);
          continue;
        }
      } // prune3: ?????????????????? candidate ??? NDS ???????????????????????? label ???????????? beginPNode ????????? NDS ???????????????????????????


      var ndsToCandidate = ndsDist[key] ? ndsDist[key] : getNDSDist(graphData, candidate, neighborNode, nodeMap, distToCandidate, kNeighborUnits, dsG, nodeLabelProp, edgeLabelProp, ndsDist, intGMap);
      var patternKey = "".concat(beginPNode.id, "-").concat(neighborLabel);
      var minNdsWithLabelInPattern = patternNDSDistMap[patternKey][patternNDSDistMap[patternKey].length - 1]; // patternNDSDist[key] ????????????

      if (ndsToCandidate < minNdsWithLabelInPattern) {
        neighborNodes.splice(i, 1);
        continue;
      } // prune4: ?????????????????????????????? pattern ??? label ?????????????????????????????????


      var _a = stashPatternNodeLabelDegreeMap(minPatternNodeLabelDegreeMap, neighborLabel, patternNodeMap, patternNodeLabelMap),
          minPatternNodeLabelDegree = _a.minPatternNodeLabelDegree,
          minPatternNodeLabelInDegree = _a.minPatternNodeLabelInDegree,
          minPatternNodeLabelOutDegree = _a.minPatternNodeLabelOutDegree;

      if (nodeMap[neighborNode.id].degree < minPatternNodeLabelDegree) {
        neighborNodes.splice(i, 1);
        continue;
      }
    } // ?????????????????????????????????????????? pattern ??????????????????????????????????????????


    if (!unmatched) {
      candidateGraphs.push({
        nodes: [candidate].concat(neighborNodes)
      });
    }
  }); // console.log(
  //   "----- stage4: going to splice edges and neighbors for each candidate graph -------"
  // );

  var undirectedLengthsToBeginPNode = (0, _dijkstra.default)(pattern, beginPNode.id, false).length;
  var undirectedLengthsToBeginPNodeLabelMap = {};

  if (directed) {
    Object.keys(undirectedLengthsToBeginPNode).forEach(function (nodeId) {
      var nodeLabel = patternNodeMap[nodeId].node[nodeLabelProp];
      if (!undirectedLengthsToBeginPNodeLabelMap[nodeLabel]) undirectedLengthsToBeginPNodeLabelMap[nodeLabel] = [undirectedLengthsToBeginPNode[nodeId]];else undirectedLengthsToBeginPNodeLabelMap[nodeLabel].push(undirectedLengthsToBeginPNode[nodeId]);
    });
    Object.keys(undirectedLengthsToBeginPNodeLabelMap).forEach(function (pLabel) {
      undirectedLengthsToBeginPNodeLabelMap[pLabel].sort(function (a, b) {
        return a - b;
      });
    });
  } else {
    undirectedLengthsToBeginPNodeLabelMap = patternSpDist;
  } // ?????? candidateGraphs ???????????????????????????????????????


  var candidateGraphNum = candidateGraphs.length;

  var _loop_2 = function _loop_2(i) {
    var candidateGraph = candidateGraphs[i];
    var candidate = candidateGraph.nodes[0];
    var candidateNodeLabelCountMap = {};
    var candidateNodeMap = {};
    candidateGraph.nodes.forEach(function (node, q) {
      candidateNodeMap[node.id] = {
        idx: q,
        node: node,
        degree: 0,
        inDegree: 0,
        outDegree: 0
      };
      var cNodeLabel = node[nodeLabelProp];
      if (!candidateNodeLabelCountMap[cNodeLabel]) candidateNodeLabelCountMap[cNodeLabel] = 1;else candidateNodeLabelCountMap[cNodeLabel]++;
    }); // ?????? candidate ??? neighborNodes ?????????????????? G ???????????????
    // ????????? graphData ??????????????? candidateGraph.nodes ??????????????? candidateEdges

    var candidateEdges = [];
    var edgeLabelCountMap = {};
    graphData.edges.forEach(function (edge) {
      if (candidateNodeMap[edge.source] && candidateNodeMap[edge.target]) {
        candidateEdges.push(edge);
        if (!edgeLabelCountMap[edge[edgeLabelProp]]) edgeLabelCountMap[edge[edgeLabelProp]] = 1;else edgeLabelCountMap[edge[edgeLabelProp]]++;
        candidateNodeMap[edge.source].degree++;
        candidateNodeMap[edge.target].degree++;
        candidateNodeMap[edge.source].outDegree++;
        candidateNodeMap[edge.target].inDegree++;
      }
    }); // prune??????????????? edgeLabel ??? candidateGraph ?????????????????? pattern???????????????

    var pattenrEdgeLabelNum = Object.keys(patternEdgeLabelMap).length;
    var prunedByEdgeLabel = false;

    for (var e = 0; e < pattenrEdgeLabelNum; e++) {
      var label_1 = Object.keys(patternEdgeLabelMap)[e];

      if (!edgeLabelCountMap[label_1] || edgeLabelCountMap[label_1] < patternEdgeLabelMap[label_1].length) {
        prunedByEdgeLabel = true;
        break;
      }
    }

    if (prunedByEdgeLabel) {
      candidateGraphs.splice(i, 1);
      return "continue";
    } // ?????? candidateEdges?????????????????????


    var candidateEdgeNum = candidateEdges.length; // prune?????????????????????????????????

    if (candidateEdgeNum < pattern.edges.length) {
      candidateGraphs.splice(i, 1);
      return "break";
    }

    var candidateGraphInvalid = false;

    var _loop_5 = function _loop_5(e) {
      var edge = candidateEdges[e];
      var edgeLabel = edge[edgeLabelProp];
      var patternEdgesWithLabel = patternEdgeLabelMap[edgeLabel]; // prune 1: ????????? label ???????????? pattern ??? label ??????????????????

      if (!patternEdgesWithLabel || !patternEdgesWithLabel.length) {
        edgeLabelCountMap[edgeLabel]--; // ????????? label ??? count ?????????????????? label ??????????????????????????????

        if (patternEdgesWithLabel && edgeLabelCountMap[edgeLabel] < patternEdgesWithLabel.length) {
          candidateGraphInvalid = true;
          return "break";
        }

        candidateEdges.splice(e, 1);
        candidateNodeMap[edge.source].degree--;
        candidateNodeMap[edge.target].degree--;
        candidateNodeMap[edge.source].outDegree--;
        candidateNodeMap[edge.target].inDegree--;
        return "continue";
      } // prune 2: ????????? label +?????? label ??????????????????????????? pattern ????????????????????????


      var sourceLabel = candidateNodeMap[edge.source].node[nodeLabelProp];
      var targetLabel = candidateNodeMap[edge.target].node[nodeLabelProp];
      var edgeMatched = false;
      patternEdgesWithLabel.forEach(function (patternEdge) {
        var patternSource = patternNodeMap[patternEdge.source].node;
        var patternTarget = patternNodeMap[patternEdge.target].node;
        if (patternSource[nodeLabelProp] === sourceLabel && patternTarget[nodeLabelProp] === targetLabel) edgeMatched = true;
        if (!directed && patternSource[nodeLabelProp] === targetLabel && patternTarget[nodeLabelProp] === sourceLabel) edgeMatched = true;
      });

      if (!edgeMatched) {
        edgeLabelCountMap[edgeLabel]--; // ????????? label ??? count ?????????????????? label ??????????????????????????????

        if (patternEdgesWithLabel && edgeLabelCountMap[edgeLabel] < patternEdgesWithLabel.length) {
          candidateGraphInvalid = true;
          return "break";
        }

        candidateEdges.splice(e, 1);
        candidateNodeMap[edge.source].degree--;
        candidateNodeMap[edge.target].degree--;
        candidateNodeMap[edge.source].outDegree--;
        candidateNodeMap[edge.target].inDegree--;
        return "continue";
      }
    };

    for (var e = candidateEdgeNum - 1; e >= 0; e--) {
      var state_2 = _loop_5(e);

      if (state_2 === "break") break;
    } // prune2: ??????????????????????????????????????????/??? label ???????????????????????????


    if (candidateGraphInvalid) {
      candidateGraphs.splice(i, 1);
      return "continue";
    }

    candidateGraph.edges = candidateEdges;
    var lengthsToCandidate = (0, _dijkstra.default)(candidateGraph, candidateGraph.nodes[0].id, false).length;
    Object.keys(lengthsToCandidate).reverse().forEach(function (targetId) {
      if (targetId === candidateGraph.nodes[0].id || candidateGraphInvalid) return; // prune4: ???????????????????????????????????????????????????????????????????????????????????????????????????????????? candidate???????????????????????????????????????

      if (lengthsToCandidate[targetId] === Infinity) {
        var targetNodeLabel = candidateNodeMap[targetId].node[nodeLabelProp];
        candidateNodeLabelCountMap[targetNodeLabel]--;

        if (candidateNodeLabelCountMap[targetNodeLabel] < patternNodeLabelMap[targetNodeLabel].length) {
          candidateGraphInvalid = true;
          return;
        }

        var idx = candidateGraph.nodes.indexOf(candidateNodeMap[targetId].node);
        candidateGraph.nodes.splice(idx, 1);
        candidateNodeMap[targetId] = undefined;
        return;
      } // prune5: ?????????????????????????????????????????????????????????????????? ?????? pattern ?????? label ???????????? beginNode ?????????????????????????????????????????????


      var nLabel = nodeMap[targetId].node[nodeLabelProp];

      if (!undirectedLengthsToBeginPNodeLabelMap[nLabel] || !undirectedLengthsToBeginPNodeLabelMap[nLabel].length || lengthsToCandidate[targetId] > undirectedLengthsToBeginPNodeLabelMap[nLabel][undirectedLengthsToBeginPNodeLabelMap[nLabel].length - 1]) {
        var targetNodeLabel = candidateNodeMap[targetId].node[nodeLabelProp];
        candidateNodeLabelCountMap[targetNodeLabel]--;

        if (candidateNodeLabelCountMap[targetNodeLabel] < patternNodeLabelMap[targetNodeLabel].length) {
          candidateGraphInvalid = true;
          return;
        }

        var idx = candidateGraph.nodes.indexOf(candidateNodeMap[targetId].node);
        candidateGraph.nodes.splice(idx, 1);
        candidateNodeMap[targetId] = undefined;
      }
    });

    if (candidateGraphInvalid) {
      candidateGraphs.splice(i, 1);
      return "continue";
    }

    var degreeChanged = true;
    var loopCount = 0;

    while (degreeChanged && !candidateGraphInvalid) {
      degreeChanged = false; // candidate ???????????????????????????

      var condition = directed ? candidateNodeMap[candidate.id].degree < patternNodeMap[beginPNode.id].degree || candidateNodeMap[candidate.id].inDegree < patternNodeMap[beginPNode.id].inDegree || candidateNodeMap[candidate.id].outDegree < patternNodeMap[beginPNode.id].outDegree : candidateNodeMap[candidate.id].degree < patternNodeMap[beginPNode.id].degree;

      if (condition) {
        candidateGraphInvalid = true;
        break;
      } // candidate label ???????????????????????????


      if (candidateNodeLabelCountMap[candidate[nodeLabelProp]] < patternNodeLabelMap[candidate[nodeLabelProp]].length) {
        candidateGraphInvalid = true;
        break;
      } // prune6??????????????????????????????


      var currentCandidateNodeNum = candidateGraph.nodes.length;

      for (var o = currentCandidateNodeNum - 1; o >= 0; o--) {
        var cgNode = candidateGraph.nodes[o];
        var nodeDegree = candidateNodeMap[cgNode.id].degree;
        var nodeInDegree = candidateNodeMap[cgNode.id].inDegree;
        var nodeOutDegree = candidateNodeMap[cgNode.id].outDegree;
        var cNodeLabel = cgNode[nodeLabelProp];

        var _e = stashPatternNodeLabelDegreeMap(minPatternNodeLabelDegreeMap, cNodeLabel, patternNodeMap, patternNodeLabelMap),
            minPatternNodeLabelDegree = _e.minPatternNodeLabelDegree,
            minPatternNodeLabelInDegree = _e.minPatternNodeLabelInDegree,
            minPatternNodeLabelOutDegree = _e.minPatternNodeLabelOutDegree;

        var deleteCondition = directed ? nodeDegree < minPatternNodeLabelDegree || nodeInDegree < minPatternNodeLabelInDegree || nodeOutDegree < minPatternNodeLabelOutDegree : nodeDegree < minPatternNodeLabelDegree;

        if (deleteCondition) {
          candidateNodeLabelCountMap[cgNode[nodeLabelProp]]--; // ?????? label ????????????

          if (candidateNodeLabelCountMap[cgNode[nodeLabelProp]] < patternNodeLabelMap[cgNode[nodeLabelProp]].length) {
            candidateGraphInvalid = true;
            break;
          }

          candidateGraph.nodes.splice(o, 1);
          candidateNodeMap[cgNode.id] = undefined;
          degreeChanged = true;
        }
      }

      if (candidateGraphInvalid || !degreeChanged && loopCount !== 0) break; // ?????? prune5 ??????????????????????????????????????? candidateGraph ?????????

      candidateEdgeNum = candidateEdges.length;

      for (var y = candidateEdgeNum - 1; y >= 0; y--) {
        var cedge = candidateEdges[y];

        if (!candidateNodeMap[cedge.source] || !candidateNodeMap[cedge.target]) {
          candidateEdges.splice(y, 1);
          var edgeLabel = cedge[edgeLabelProp];
          edgeLabelCountMap[edgeLabel]--;

          if (candidateNodeMap[cedge.source]) {
            candidateNodeMap[cedge.source].degree--;
            candidateNodeMap[cedge.source].outDegree--;
          }

          if (candidateNodeMap[cedge.target]) {
            candidateNodeMap[cedge.target].degree--;
            candidateNodeMap[cedge.target].inDegree--;
          } // ??? label ????????????


          if (patternEdgeLabelMap[edgeLabel] && edgeLabelCountMap[edgeLabel] < patternEdgeLabelMap[edgeLabel].length) {
            candidateGraphInvalid = true;
            break;
          }

          degreeChanged = true;
        }
      }

      loopCount++;
    }

    if (candidateGraphInvalid) {
      candidateGraphs.splice(i, 1);
      return "continue";
    } // prune: ?????????/?????????????????????/??? label ????????????????????????


    if (candidateGraphInvalid || candidateGraph.nodes.length < pattern.nodes.length || candidateEdges.length < pattern.edges.length) {
      candidateGraphs.splice(i, 1);
      return "continue";
    }
  };

  for (var i = candidateGraphNum - 1; i >= 0; i--) {
    var state_1 = _loop_2(i);

    if (state_1 === "break") break;
  } // ??????????????????????????? candidateGraphs??????????????????
  // console.log(
  //   "----- stage5: going to splice dulplicated candidate graphs -------"
  // );
  // ?????? candidateGraphs ??????????????????????????????????????? node-node-edgeLabel ?????? key???????????????????????? value???????????????


  var currentLength = candidateGraphs.length;

  var _loop_3 = function _loop_3(i) {
    var cg1 = candidateGraphs[i];
    var cg1EdgeMap = {}; // [node1.id-node2.id-edge.label]: count

    cg1.edges.forEach(function (edge) {
      var key = "".concat(edge.source, "-").concat(edge.target, "-").concat(edge.label);
      if (!cg1EdgeMap[key]) cg1EdgeMap[key] = 1;else cg1EdgeMap[key]++;
    });

    var _loop_6 = function _loop_6(j) {
      var cg2 = candidateGraphs[j];
      var cg2EdgeMap = {}; // [node1.id-node2.id-edge.label]: count

      cg2.edges.forEach(function (edge) {
        var key = "".concat(edge.source, "-").concat(edge.target, "-").concat(edge.label);
        if (!cg2EdgeMap[key]) cg2EdgeMap[key] = 1;else cg2EdgeMap[key]++;
      });
      var same = true;

      if (Object.keys(cg2EdgeMap).length !== Object.keys(cg1EdgeMap).length) {
        same = false;
      } else {
        Object.keys(cg1EdgeMap).forEach(function (key) {
          if (cg2EdgeMap[key] !== cg1EdgeMap[key]) same = false;
        });
      }

      if (same) {
        candidateGraphs.splice(j, 1);
      }
    };

    for (var j = currentLength - 1; j > i; j--) {
      _loop_6(j);
    }

    currentLength = candidateGraphs.length;
  };

  for (var i = 0; i <= currentLength - 1; i++) {
    _loop_3(i);
  }

  return candidateGraphs;
};

var _default = GADDI;
exports.default = _default;
}, function(modId) { var map = {"./floydWarshall":1661774171158,"./gSpan/gSpan":1661774171176,"./dijkstra":1661774171156,"./util":1661774171151}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171176, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@antv/util");

var _struct = require("./struct");

var DFSedge =
/** @class */
function () {
  function DFSedge(fromNode, toNode, fromNodeLabel, edgeLabel, toNodeLabel) {
    this.fromNode = fromNode;
    this.toNode = toNode;
    this.nodeEdgeNodeLabel = {
      nodeLabel1: fromNodeLabel || _struct.VACANT_NODE_LABEL,
      edgeLabel: edgeLabel || _struct.VACANT_EDGE_LABEL,
      nodeLabel2: toNodeLabel || _struct.VACANT_NODE_LABEL
    };
  }

  DFSedge.prototype.equalTo = function (other) {
    return this.fromNode === other.formNode && this.toNode === other.toNode && this.nodeEdgeNodeLabel === other.nodeEdgeNodeLabel;
  };

  DFSedge.prototype.notEqualTo = function (other) {
    return !this.equalTo(other);
  };

  return DFSedge;
}(); // DFScode ??? DESedge ?????????


var DFScode =
/** @class */
function () {
  function DFScode() {
    this.rmpath = [];
    this.dfsEdgeList = [];
  }

  DFScode.prototype.equalTo = function (other) {
    var aLength = this.dfsEdgeList.length;
    var bLength = other.length;
    if (aLength !== bLength) return false;

    for (var i = 0; i < aLength; i++) {
      if (this.dfsEdgeList[i] !== other[i]) return false;
    }

    return true;
  };

  DFScode.prototype.notEqualTo = function (other) {
    return !this.equalTo(other);
  };
  /** ???????????? edge ??? DFScode */


  DFScode.prototype.pushBack = function (fromNode, toNode, fromNodeLabel, edgeLabel, toNodeLabel) {
    this.dfsEdgeList.push(new DFSedge(fromNode, toNode, fromNodeLabel, edgeLabel, toNodeLabel));
    return this.dfsEdgeList;
  };
  /** ?????? dfs ????????? */


  DFScode.prototype.toGraph = function (graphId, directed) {
    if (graphId === void 0) {
      graphId = _struct.VACANT_GRAPH_ID;
    }

    if (directed === void 0) {
      directed = false;
    }

    var graph = new _struct.Graph(graphId, true, directed);
    this.dfsEdgeList.forEach(function (dfsEdge) {
      var fromNodeId = dfsEdge.fromNode;
      var toNodeId = dfsEdge.toNode;
      var _a = dfsEdge.nodeEdgeNodeLabel,
          nodeLabel1 = _a.nodeLabel1,
          edgeLabel = _a.edgeLabel,
          nodeLabel2 = _a.nodeLabel2;
      if (nodeLabel1 !== _struct.VACANT_NODE_LABEL) graph.addNode(fromNodeId, nodeLabel1);
      if (nodeLabel2 !== _struct.VACANT_NODE_LABEL) graph.addNode(toNodeId, nodeLabel2);
      if (nodeLabel1 !== _struct.VACANT_NODE_LABEL && nodeLabel2 !== nodeLabel1) graph.addEdge(undefined, fromNodeId, toNodeId, edgeLabel);
    });
    return graph;
  }; // ?????? rightmost path


  DFScode.prototype.buildRmpath = function () {
    this.rmpath = [];
    var oldFrom = undefined;
    var selfLength = this.dfsEdgeList.length;

    for (var i = selfLength - 1; i >= 0; i--) {
      var dfsEdge = this.dfsEdgeList[i];
      var fromNodeIdx = dfsEdge.fromNode;
      var toNodeIdx = dfsEdge.toNode;

      if (fromNodeIdx < toNodeIdx && (oldFrom === undefined || toNodeIdx === oldFrom)) {
        this.rmpath.push(i);
        oldFrom = fromNodeIdx;
      }
    }

    return this.rmpath;
  };

  DFScode.prototype.getNodeNum = function () {
    var nodeMap = {};
    this.dfsEdgeList.forEach(function (dfsEdge) {
      if (!nodeMap[dfsEdge.fromNode]) nodeMap[dfsEdge.fromNode] = true;
      if (!nodeMap[dfsEdge.toNode]) nodeMap[dfsEdge.toNode] = true;
    });
    return Object.keys(nodeMap).length;
  };

  return DFScode;
}();

var History =
/** @class */
function () {
  function History(pdfs) {
    this.his = {};
    this.nodesUsed = {};
    this.edgesUsed = {};
    this.edges = [];
    if (!pdfs) return;

    while (pdfs) {
      var e = pdfs.edge;
      this.edges.push(e);
      this.nodesUsed[e.from] = 1;
      this.nodesUsed[e.to] = 1;
      this.edgesUsed[e.id] = 1;
      pdfs = pdfs.preNode;
    } // ??????


    this.edges = this.edges.reverse();
  }

  History.prototype.hasNode = function (node) {
    return this.nodesUsed[node.id] === 1;
  };

  History.prototype.hasEdge = function (edge) {
    return this.edgesUsed[edge.id] === 1;
  };

  return History;
}();

var GSpan =
/** @class */
function () {
  function GSpan(_a) {
    var graphs = _a.graphs,
        _b = _a.minSupport,
        minSupport = _b === void 0 ? 2 : _b,
        _c = _a.minNodeNum,
        minNodeNum = _c === void 0 ? 1 : _c,
        _d = _a.maxNodeNum,
        maxNodeNum = _d === void 0 ? 4 : _d,
        _e = _a.top,
        top = _e === void 0 ? 10 : _e,
        _f = _a.directed,
        directed = _f === void 0 ? false : _f,
        _g = _a.verbose,
        verbose = _g === void 0 ? false : _g; // -------- ?????????????????????-------

    this.graphs = graphs;
    this.dfsCode = new DFScode();
    this.support = 0;
    this.frequentSize1Subgraphs = [];
    this.frequentSubgraphs = [];
    this.minSupport = minSupport;
    this.top = top;
    this.directed = directed;
    this.counter = 0; // TODO? timestamp = {}

    this.maxNodeNum = maxNodeNum;
    this.minNodeNum = minNodeNum;
    this.verbose = verbose;
    if (this.maxNodeNum < this.minNodeNum) this.maxNodeNum = this.minNodeNum;
    this.reportDF = []; // matrix
  } // Line 352


  GSpan.prototype.findForwardRootEdges = function (graph, fromNode) {
    var _this = this;

    var result = [];
    var nodeMap = graph.nodeMap;
    fromNode.edges.forEach(function (edge) {
      if (_this.directed || fromNode.label <= nodeMap[edge.to].label) result.push(edge);
    });
    return result;
  };

  GSpan.prototype.findBackwardEdge = function (graph, edge1, edge2, history) {
    if (!this.directed && edge1 === edge2) return null;
    var nodeMap = graph.nodeMap;
    var edge2To = nodeMap[edge2.to];
    var edge2ToEdges = edge2To.edges;
    var edgeLength = edge2ToEdges.length;

    for (var i = 0; i < edgeLength; i++) {
      var edge = edge2ToEdges[i];
      if (history.hasEdge(edge) || edge.to !== edge1.from) continue;

      if (!this.directed) {
        if (edge1.label < edge.label || edge1.label === edge.label && nodeMap[edge1.to].label <= nodeMap[edge2.to].label) {
          return edge;
        }
      } else {
        if (nodeMap[edge1.from].label < nodeMap[edge2.to].label || nodeMap[edge1.from].label === nodeMap[edge2.to].label && edge1.label <= edge.label) {
          return edge;
        }
      }
    }

    return null;
  };

  GSpan.prototype.findForwardPureEdges = function (graph, rightmostEdge, minNodeLabel, history) {
    var result = [];
    var rightmostEdgeToId = rightmostEdge.to;
    var edges = graph.nodeMap[rightmostEdgeToId].edges;
    var edgeLength = edges.length;

    for (var i = 0; i < edgeLength; i++) {
      var edge = edges[i];
      var toNode = graph.nodeMap[edge.to];

      if (minNodeLabel <= toNode.label && !history.hasNode(toNode)) {
        result.push(edge);
      }
    }

    return result;
  };

  GSpan.prototype.findForwardRmpathEdges = function (graph, rightmostEdge, minNodeLabel, history) {
    var result = [];
    var nodeMap = graph.nodeMap;
    var toNodeLabel = nodeMap[rightmostEdge.to].label;
    var fromNode = nodeMap[rightmostEdge.from];
    var edges = fromNode.edges;
    var edgeLength = edges.length;

    for (var i = 0; i < edgeLength; i++) {
      var edge = edges[i];
      var newToNodeLabel = nodeMap[edge.to].label;

      if (rightmostEdge.to === edge.to || minNodeLabel > newToNodeLabel || history.hasNode(nodeMap[edge.to])) {
        continue;
      }

      if (rightmostEdge.label < edge.label || rightmostEdge.label === edge.label && toNodeLabel <= newToNodeLabel) {
        result.push(edge);
      }
    }

    return result;
  };

  GSpan.prototype.getSupport = function (projected) {
    var graphMap = {};
    projected.forEach(function (pro) {
      if (!graphMap[pro.graphId]) graphMap[pro.graphId] = true;
    });
    return Object.keys(graphMap).length;
  };

  GSpan.prototype.findMinLabel = function (obj) {
    var minLabel = undefined;
    Object.keys(obj).forEach(function (nodeEdgeNodeLabel) {
      var _a = obj[nodeEdgeNodeLabel],
          nodeLabel1 = _a.nodeLabel1,
          edgeLabel = _a.edgeLabel,
          nodeLabel2 = _a.nodeLabel2;

      if (!minLabel) {
        minLabel = {
          nodeLabel1: nodeLabel1,
          edgeLabel: edgeLabel,
          nodeLabel2: nodeLabel2
        };
        return;
      }

      if (nodeLabel1 < minLabel.nodeLabel1 || nodeLabel1 === minLabel.nodeLabel1 && edgeLabel < minLabel.edgeLabel || nodeLabel1 === minLabel.nodeLabel1 && edgeLabel === minLabel.edgeLabel && nodeLabel2 < minLabel.nodeLabel2) {
        minLabel = {
          nodeLabel1: nodeLabel1,
          edgeLabel: edgeLabel,
          nodeLabel2: nodeLabel2
        };
      }
    });
    return minLabel;
  };

  GSpan.prototype.isMin = function () {
    var _this = this;

    var dfsCode = this.dfsCode;
    if (this.verbose) console.log("isMin checking", dfsCode);
    if (dfsCode.dfsEdgeList.length === 1) return true;
    var directed = this.directed;
    var graph = dfsCode.toGraph(_struct.VACANT_GRAPH_ID, directed);
    var nodeMap = graph.nodeMap;
    var dfsCodeMin = new DFScode();
    var root = {};
    graph.nodes.forEach(function (node) {
      var forwardEdges = _this.findForwardRootEdges(graph, node);

      forwardEdges.forEach(function (edge) {
        var otherNode = nodeMap[edge.to];
        var nodeEdgeNodeLabel = "".concat(node.label, "-").concat(edge.label, "-").concat(otherNode.label);
        if (!root[nodeEdgeNodeLabel]) root[nodeEdgeNodeLabel] = {
          projected: [],
          nodeLabel1: node.label,
          edgeLabel: edge.label,
          nodeLabel2: otherNode.label
        };
        var pdfs = {
          graphId: graph.id,
          edge: edge,
          preNode: null
        };
        root[nodeEdgeNodeLabel].projected.push(pdfs);
      });
    }); // ?????? root ??????????????? nodeEdgeNodeLabel ??????????????? nodeLabel1???edgeLabe???nodeLabel2 ???????????????

    var minLabel = this.findMinLabel(root); // line 419

    if (!minLabel) return;
    dfsCodeMin.dfsEdgeList.push(new DFSedge(0, 1, minLabel.nodeLabel1, minLabel.edgeLabel, minLabel.nodeLabel2)); // line 423

    var projectIsMin = function projectIsMin(projected) {
      // right most path
      var rmpath = dfsCodeMin.buildRmpath();
      var minNodeLabel = dfsCodeMin.dfsEdgeList[0].nodeEdgeNodeLabel.nodeLabel1;
      var maxToC = dfsCodeMin.dfsEdgeList[rmpath[0]].toNode; // node id

      var backwardRoot = {};
      var flag = false,
          newTo = 0;
      var end = directed ? -1 : 0; // ????????? 1 ????????? 0

      var _loop_1 = function _loop_1(i) {
        if (flag) return "break"; // line 435

        projected.forEach(function (p) {
          var history = new History(p);

          var backwardEdge = _this.findBackwardEdge(graph, history.edges[rmpath[i]], history.edges[rmpath[0]], history);

          if (backwardEdge) {
            // Line 441
            if (!backwardRoot[backwardEdge.label]) {
              backwardRoot[backwardEdge.label] = {
                projected: [],
                edgeLabel: backwardEdge.label
              };
            }

            backwardRoot[backwardEdge.label].projected.push({
              graphId: graph.id,
              edge: backwardRoot,
              preNode: p
            });
            newTo = dfsCodeMin.dfsEdgeList[rmpath[i]].fromNode;
            flag = true;
          }
        });
      };

      for (var i = rmpath.length - 1; i > end; i--) {
        var state_1 = _loop_1(i);

        if (state_1 === "break") break;
      }

      if (flag) {
        var minBackwardEdgeLabel = _this.findMinLabel(backwardRoot);

        dfsCodeMin.dfsEdgeList.push(new DFSedge(maxToC, newTo, _struct.VACANT_NODE_LABEL, minBackwardEdgeLabel.edgeLabel, _struct.VACANT_NODE_LABEL));
        var idx_1 = dfsCodeMin.dfsEdgeList.length - 1;
        if (_this.dfsCode.dfsEdgeList[idx_1] !== dfsCodeMin.dfsEdgeList[idx_1]) return false;
        return projectIsMin(backwardRoot[minBackwardEdgeLabel.edgeLabel].projected);
      }

      var forwardRoot = {};
      flag = false;
      var newFrom = 0;
      projected.forEach(function (p) {
        var history = new History(p);

        var forwardPureEdges = _this.findForwardPureEdges(graph, history.edges[rmpath[0]], minNodeLabel, history);

        if (forwardPureEdges.length > 0) {
          flag = true;
          newFrom = maxToC;
          forwardPureEdges.forEach(function (edge) {
            var key = "".concat(edge.label, "-").concat(nodeMap[edge.to].label);
            if (!forwardRoot[key]) forwardRoot[key] = {
              projected: [],
              edgeLabel: edge.label,
              nodeLabel2: nodeMap[edge.to].label
            };
            forwardRoot[key].projected.push({
              graphId: graph.id,
              edge: edge,
              preNode: p
            });
          });
        }
      });
      var pathLength = rmpath.length;

      var _loop_2 = function _loop_2(i) {
        if (flag) return "break";
        var value = rmpath[i];
        projected.forEach(function (p) {
          var history = new History(p);

          var forwardRmpathEdges = _this.findForwardRmpathEdges(graph, history.edges[value], minNodeLabel, history);

          if (forwardRmpathEdges.length > 0) {
            flag = true;
            newFrom = dfsCodeMin.dfsEdgeList[value].fromNode;
            forwardRmpathEdges.forEach(function (edge) {
              var key = "".concat(edge.label, "-").concat(nodeMap[edge.to].label);
              if (!forwardRoot[key]) forwardRoot[key] = {
                projected: [],
                edgeLabel: edge.label,
                nodeLabel2: nodeMap[edge.to].label
              };
              forwardRoot[key].projected.push({
                graphId: graph.id,
                edge: edge,
                preNode: p
              });
            });
          }
        });
      };

      for (var i = 0; i < pathLength; i++) {
        var state_2 = _loop_2(i);

        if (state_2 === "break") break;
      }

      if (!flag) return true;

      var forwardMinEdgeNodeLabel = _this.findMinLabel(forwardRoot);

      dfsCodeMin.dfsEdgeList.push(new DFSedge(newFrom, maxToC + 1, _struct.VACANT_NODE_LABEL, forwardMinEdgeNodeLabel.edgeLabel, forwardMinEdgeNodeLabel.nodeLabel2));
      var idx = dfsCodeMin.dfsEdgeList.length - 1;
      if (dfsCode.dfsEdgeList[idx] !== dfsCodeMin.dfsEdgeList[idx]) return false;
      return projectIsMin(forwardRoot["".concat(forwardMinEdgeNodeLabel.edgeLabel, "-").concat(forwardMinEdgeNodeLabel.nodeLabel2)].projected);
    };

    var key = "".concat(minLabel.nodeLabel1, "-").concat(minLabel.edgeLabel, "-").concat(minLabel.nodeLabel2);
    return projectIsMin(root[key].projected);
  };

  GSpan.prototype.report = function () {
    if (this.dfsCode.getNodeNum() < this.minNodeNum) return;
    this.counter++;
    var graph = this.dfsCode.toGraph(this.counter, this.directed);
    this.frequentSubgraphs.push((0, _util.clone)(graph));
  };

  GSpan.prototype.subGraphMining = function (projected) {
    var _this = this;

    var support = this.getSupport(projected);
    if (support < this.minSupport) return;
    if (!this.isMin()) return;
    this.report();
    var nodeNum = this.dfsCode.getNodeNum();
    var rmpath = this.dfsCode.buildRmpath();
    var maxToC = this.dfsCode.dfsEdgeList[rmpath[0]].toNode;
    var minNodeLabel = this.dfsCode.dfsEdgeList[0].nodeEdgeNodeLabel.nodeLabel1;
    var forwardRoot = {};
    var backwardRoot = {};
    projected.forEach(function (p) {
      var graph = _this.graphs[p.graphId];
      var nodeMap = graph.nodeMap;
      var history = new History(p); // backward Line 526

      for (var i = rmpath.length - 1; i >= 0; i--) {
        var backwardEdge = _this.findBackwardEdge(graph, history.edges[rmpath[i]], history.edges[rmpath[0]], history);

        if (backwardEdge) {
          var key = "".concat(_this.dfsCode.dfsEdgeList[rmpath[i]].fromNode, "-").concat(backwardEdge.label);
          if (!backwardRoot[key]) backwardRoot[key] = {
            projected: [],
            toNodeId: _this.dfsCode.dfsEdgeList[rmpath[i]].fromNode,
            edgeLabel: backwardEdge.label
          };
          backwardRoot[key].projected.push({
            graphId: p.graphId,
            edge: backwardEdge,
            preNode: p
          });
        }
      } // pure forward


      if (nodeNum >= _this.maxNodeNum) return;

      var forwardPureEdges = _this.findForwardPureEdges(graph, history.edges[rmpath[0]], minNodeLabel, history);

      forwardPureEdges.forEach(function (edge) {
        var key = "".concat(maxToC, "-").concat(edge.label, "-").concat(nodeMap[edge.to].label);
        if (!forwardRoot[key]) forwardRoot[key] = {
          projected: [],
          fromNodeId: maxToC,
          edgeLabel: edge.label,
          nodeLabel2: nodeMap[edge.to].label
        };
        forwardRoot[key].projected.push({
          graphId: p.graphId,
          edge: edge,
          preNode: p
        });
      });

      var _loop_3 = function _loop_3(i) {
        var forwardRmpathEdges = _this.findForwardRmpathEdges(graph, history.edges[rmpath[i]], minNodeLabel, history);

        forwardRmpathEdges.forEach(function (edge) {
          var key = "".concat(_this.dfsCode.dfsEdgeList[rmpath[i]].fromNode, "-").concat(edge.label, "-").concat(nodeMap[edge.to].label);
          if (!forwardRoot[key]) forwardRoot[key] = {
            projected: [],
            fromNodeId: _this.dfsCode.dfsEdgeList[rmpath[i]].fromNode,
            edgeLabel: edge.label,
            nodeLabel2: nodeMap[edge.to].label
          };
          forwardRoot[key].projected.push({
            graphId: p.graphId,
            edge: edge,
            preNode: p
          });
        });
      }; // rmpath forward


      for (var i = 0; i < rmpath.length; i++) {
        _loop_3(i);
      }
    }); // backward

    Object.keys(backwardRoot).forEach(function (key) {
      var _a = backwardRoot[key],
          toNodeId = _a.toNodeId,
          edgeLabel = _a.edgeLabel;

      _this.dfsCode.dfsEdgeList.push(new DFSedge(maxToC, toNodeId, "-1", edgeLabel, "-1"));

      _this.subGraphMining(backwardRoot[key].projected);

      _this.dfsCode.dfsEdgeList.pop();
    }); // forward

    Object.keys(forwardRoot).forEach(function (key) {
      var _a = forwardRoot[key],
          fromNodeId = _a.fromNodeId,
          edgeLabel = _a.edgeLabel,
          nodeLabel2 = _a.nodeLabel2;

      _this.dfsCode.dfsEdgeList.push(new DFSedge(fromNodeId, maxToC + 1, _struct.VACANT_NODE_LABEL, edgeLabel, nodeLabel2));

      _this.subGraphMining(forwardRoot[key].projected);

      _this.dfsCode.dfsEdgeList.pop();
    });
  };

  GSpan.prototype.generate1EdgeFrequentSubGraphs = function () {
    var graphs = this.graphs;
    var directed = this.directed;
    var minSupport = this.minSupport;
    var frequentSize1Subgraphs = this.frequentSize1Subgraphs;
    var nodeLabelCounter = {},
        nodeEdgeNodeCounter = {}; // ??????????????????????????????????????? map???key ????????? graphKey-node??????

    var nodeLableCounted = {}; // ???????????????????????????????????? map???key ????????? graphKey-fromNode??????-edge??????-toNode??????

    var nodeEdgeNodeLabelCounted = {};
    Object.keys(graphs).forEach(function (key) {
      // Line 271
      var graph = graphs[key];
      var nodeMap = graph.nodeMap; // ?????????????????????????????? ??? ??????????????? label ??? nodeLableCounted

      graph.nodes.forEach(function (node, i) {
        // Line 272
        var nodeLabel = node.label;
        var graphNodeKey = "".concat(key, "-").concat(nodeLabel);

        if (!nodeLableCounted[graphNodeKey]) {
          var counter = nodeLabelCounter[nodeLabel] || 0;
          counter++;
          nodeLabelCounter[nodeLabel] = counter;
        }

        nodeLableCounted[graphNodeKey] = {
          graphKey: key,
          label: nodeLabel
        }; // ????????????????????????????????????????????????????????????????????? nodeEdgeNodeLabelCounted. Line 276

        node.edges.forEach(function (edge) {
          var nodeLabel1 = nodeLabel;
          var nodeLabel2 = nodeMap[edge.to].label;

          if (!directed && nodeLabel1 > nodeLabel2) {
            var tmp = nodeLabel2;
            nodeLabel2 = nodeLabel1;
            nodeLabel1 = tmp;
          }

          var edgeLabel = edge.label;
          var graphNodeEdgeNodeKey = "".concat(key, "-").concat(nodeLabel1, "-").concat(edgeLabel, "-").concat(nodeLabel2);
          var nodeEdgeNodeKey = "".concat(nodeLabel1, "-").concat(edgeLabel, "-").concat(nodeLabel2);

          if (!nodeEdgeNodeCounter[nodeEdgeNodeKey]) {
            var counter = nodeEdgeNodeCounter[nodeEdgeNodeKey] || 0;
            counter++;
            nodeEdgeNodeCounter[nodeEdgeNodeKey] = counter; // Line281
          }

          nodeEdgeNodeLabelCounted[graphNodeEdgeNodeKey] = {
            graphId: key,
            nodeLabel1: nodeLabel1,
            edgeLabel: edgeLabel,
            nodeLabel2: nodeLabel2
          };
        });
      });
    }); // ?????????????????????

    Object.keys(nodeLabelCounter).forEach(function (label) {
      var count = nodeLabelCounter[label];
      if (count < minSupport) return;
      var g = {
        nodes: [],
        edges: []
      };
      g.nodes.push({
        id: "0",
        label: label
      });
      frequentSize1Subgraphs.push(g); // if (minNodeNum <= 1) reportSize1 TODO
    });
    return frequentSize1Subgraphs;
  };

  GSpan.prototype.run = function () {
    var _this = this; // -------- ?????????, _generate_1edge_frequent_subgraphs????????????????????????-------


    this.frequentSize1Subgraphs = this.generate1EdgeFrequentSubGraphs();
    if (this.maxNodeNum < 2) return;
    var graphs = this.graphs;
    var directed = this.directed; // PDFS ????????? map Line 304

    var root = {};
    Object.keys(graphs).forEach(function (graphId) {
      var graph = graphs[graphId];
      var nodeMap = graph.nodeMap; // Line 306

      graph.nodes.forEach(function (node) {
        var forwardRootEdges = _this.findForwardRootEdges(graph, node); // Line 308


        forwardRootEdges.forEach(function (edge) {
          var toNode = nodeMap[edge.to];
          var nodeEdgeNodeLabel = "".concat(node.label, "-").concat(edge.label, "-").concat(toNode.label);
          if (!root[nodeEdgeNodeLabel]) root[nodeEdgeNodeLabel] = {
            projected: [],
            nodeLabel1: node.label,
            edgeLabel: edge.label,
            nodeLabel2: toNode.label
          };
          var pdfs = {
            graphId: graphId,
            edge: edge,
            preNode: null
          };
          root[nodeEdgeNodeLabel].projected.push(pdfs);
        });
      });
    }); // Line 313

    Object.keys(root).forEach(function (nodeEdgeNodeLabel) {
      var _a = root[nodeEdgeNodeLabel],
          projected = _a.projected,
          nodeLabel1 = _a.nodeLabel1,
          edgeLabel = _a.edgeLabel,
          nodeLabel2 = _a.nodeLabel2;

      _this.dfsCode.dfsEdgeList.push(new DFSedge(0, 1, nodeLabel1, edgeLabel, nodeLabel2));

      _this.subGraphMining(projected);

      _this.dfsCode.dfsEdgeList.pop();
    });
  };

  return GSpan;
}();

var formatGraphs = function formatGraphs(graphs, directed, nodeLabelProp, edgeLabelProp) {
  var result = {};
  Object.keys(graphs).forEach(function (key, i) {
    var graph = graphs[key];
    var fGraph = new _struct.Graph(i, true, directed);
    var nodeIdxMap = {};
    graph.nodes.forEach(function (node, j) {
      fGraph.addNode(j, node[nodeLabelProp]);
      nodeIdxMap[node.id] = j;
    });
    graph.edges.forEach(function (edge, k) {
      var sourceIdx = nodeIdxMap[edge.source];
      var targetIdx = nodeIdxMap[edge.target];
      fGraph.addEdge(-1, sourceIdx, targetIdx, edge[edgeLabelProp]);
    });
    if (fGraph && fGraph.getNodeNum()) result[fGraph.id] = fGraph;
  });
  return result;
};

var toGraphDatas = function toGraphDatas(graphs, nodeLabelProp, edgeLabelProp) {
  var result = [];
  graphs.forEach(function (graph) {
    var graphData = {
      nodes: [],
      edges: []
    };
    graph.nodes.forEach(function (node) {
      var _a;

      graphData.nodes.push((_a = {
        id: "".concat(node.id)
      }, _a[nodeLabelProp] = node.label, _a));
    });
    graph.edges.forEach(function (edge) {
      var _a;

      graphData.edges.push((_a = {
        source: "".concat(edge.from),
        target: "".concat(edge.to)
      }, _a[edgeLabelProp] = edge.label, _a));
    });
    result.push(graphData);
  });
  return result;
};

var DEFAULT_LABEL_NAME = "cluster";
/**
 * gSpan ???????????????????????????frequent graph mining???
 * @param params ??????
 */

var gSpan = function gSpan(params) {
  // ------- ???????????? GraphData ??? map ??????????????? -------
  var graphs = params.graphs,
      _a = params.directed,
      directed = _a === void 0 ? false : _a,
      _b = params.nodeLabelProp,
      nodeLabelProp = _b === void 0 ? DEFAULT_LABEL_NAME : _b,
      _c = params.edgeLabelProp,
      edgeLabelProp = _c === void 0 ? DEFAULT_LABEL_NAME : _c;
  var formattedGraphs = formatGraphs(graphs, directed, nodeLabelProp, edgeLabelProp);
  var minSupport = params.minSupport,
      maxNodeNum = params.maxNodeNum,
      minNodeNum = params.minNodeNum,
      verbose = params.verbose,
      top = params.top; // ------- ???????????????????????? -------

  var algoParams = {
    graphs: formattedGraphs,
    minSupport: minSupport,
    maxNodeNum: maxNodeNum,
    minNodeNum: minNodeNum,
    top: top,
    verbose: verbose,
    directed: directed
  };
  var calculator = new GSpan(algoParams);
  calculator.run();
  var result = toGraphDatas(calculator.frequentSubgraphs, nodeLabelProp, edgeLabelProp);
  return result;
};

var _default = gSpan;
exports.default = _default;
}, function(modId) { var map = {"./struct":1661774171177}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171177, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VACANT_NODE_LABEL = exports.VACANT_NODE_ID = exports.VACANT_GRAPH_ID = exports.VACANT_EDGE_LABEL = exports.VACANT_EDGE_ID = exports.Node = exports.Graph = exports.Edge = exports.AUTO_EDGE_ID = void 0;
var VACANT_EDGE_ID = -1;
exports.VACANT_EDGE_ID = VACANT_EDGE_ID;
var VACANT_NODE_ID = -1;
exports.VACANT_NODE_ID = VACANT_NODE_ID;
var VACANT_EDGE_LABEL = "-1";
exports.VACANT_EDGE_LABEL = VACANT_EDGE_LABEL;
var VACANT_NODE_LABEL = "-1";
exports.VACANT_NODE_LABEL = VACANT_NODE_LABEL;
var VACANT_GRAPH_ID = -1;
exports.VACANT_GRAPH_ID = VACANT_GRAPH_ID;
var AUTO_EDGE_ID = "-1";
exports.AUTO_EDGE_ID = AUTO_EDGE_ID;

var Edge =
/** @class */
function () {
  function Edge(id, from, to, label) {
    if (id === void 0) {
      id = VACANT_EDGE_ID;
    }

    if (from === void 0) {
      from = VACANT_NODE_ID;
    }

    if (to === void 0) {
      to = VACANT_NODE_ID;
    }

    if (label === void 0) {
      label = VACANT_EDGE_LABEL;
    }

    this.id = id;
    this.from = from;
    this.to = to;
    this.label = label;
  }

  return Edge;
}();

exports.Edge = Edge;

var Node =
/** @class */
function () {
  function Node(id, label) {
    if (id === void 0) {
      id = VACANT_NODE_ID;
    }

    if (label === void 0) {
      label = VACANT_NODE_LABEL;
    }

    this.id = id;
    this.label = label;
    this.edges = [];
    this.edgeMap = {};
  }

  Node.prototype.addEdge = function (edge) {
    this.edges.push(edge);
    this.edgeMap[edge.id] = edge;
  };

  return Node;
}();

exports.Node = Node;

var Graph =
/** @class */
function () {
  function Graph(id, edgeIdAutoIncrease, directed) {
    if (id === void 0) {
      id = VACANT_NODE_ID;
    }

    if (edgeIdAutoIncrease === void 0) {
      edgeIdAutoIncrease = true;
    }

    if (directed === void 0) {
      directed = false;
    }

    this.id = id;
    this.edgeIdAutoIncrease = edgeIdAutoIncrease;
    this.edges = [];
    this.nodes = [];
    this.nodeMap = {};
    this.edgeMap = {};
    this.nodeLabelMap = {};
    this.edgeLabelMap = {};
    this.counter = 0;
    this.directed = directed;
  }

  Graph.prototype.getNodeNum = function () {
    return this.nodes.length;
  };

  Graph.prototype.addNode = function (id, label) {
    if (this.nodeMap[id]) return;
    var node = new Node(id, label);
    this.nodes.push(node);
    this.nodeMap[id] = node;
    if (!this.nodeLabelMap[label]) this.nodeLabelMap[label] = [];
    this.nodeLabelMap[label].push(id);
  };

  Graph.prototype.addEdge = function (id, from, to, label) {
    if (this.edgeIdAutoIncrease || id === undefined) id = this.counter++;
    if (this.nodeMap[from] && this.nodeMap[to] && this.nodeMap[to].edgeMap[id]) return;
    var edge = new Edge(id, from, to, label);
    this.edges.push(edge);
    this.edgeMap[id] = edge;
    this.nodeMap[from].addEdge(edge);
    if (!this.edgeLabelMap[label]) this.edgeLabelMap[label] = [];
    this.edgeLabelMap[label].push(edge);

    if (!this.directed) {
      var rEdge = new Edge(id, to, from, label);
      this.nodeMap[to].addEdge(rEdge);
      this.edgeLabelMap[label].push(rEdge);
    }
  };

  return Graph;
}();

exports.Graph = Graph;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171178, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _linkedList = _interopRequireDefault(require("./linked-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stack =
/** @class */
function () {
  function Stack(maxStep) {
    if (maxStep === void 0) {
      maxStep = 10;
    }

    this.linkedList = new _linkedList.default();
    this.maxStep = maxStep;
  }

  Object.defineProperty(Stack.prototype, "length", {
    get: function get() {
      return this.linkedList.toArray().length;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * ????????????????????????????????????????????????????????????????????????
   */

  Stack.prototype.isEmpty = function () {
    return !this.linkedList.head;
  };
  /**
   * ???????????????????????????????????????????????????????????????????????????????????????
   */


  Stack.prototype.isMaxStack = function () {
    return this.toArray().length >= this.maxStep;
  };
  /**
   * ??????????????????
   */


  Stack.prototype.peek = function () {
    if (this.isEmpty()) {
      return null;
    } // ????????????????????????????????????


    return this.linkedList.head.value;
  };

  Stack.prototype.push = function (value) {
    this.linkedList.prepend(value);

    if (this.length > this.maxStep) {
      this.linkedList.deleteTail();
    }
  };

  Stack.prototype.pop = function () {
    var removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  };

  Stack.prototype.toArray = function () {
    return this.linkedList.toArray().map(function (node) {
      return node.value;
    });
  };

  Stack.prototype.clear = function () {
    while (!this.isEmpty()) {
      this.pop();
    }
  };

  return Stack;
}();

var _default = Stack;
exports.default = _default;
}, function(modId) { var map = {"./linked-list":1661774171150}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1661774171146);
})()
//miniprogram-npm-outsideDeps=["tslib","@antv/util"]
//# sourceMappingURL=index.js.map