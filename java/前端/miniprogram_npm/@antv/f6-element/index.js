module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1661774171351, function(require, module, exports) {


require("./nodes");

require("./edges");
}, function(modId) {var map = {"./nodes":1661774171352,"./edges":1661774171361}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171352, function(require, module, exports) {


require("./circle");

require("./rect");

require("./ellipse");

require("./diamond");

require("./triangle");

require("./modelRect");

require("./star");

require("./donut");
}, function(modId) { var map = {"./circle":1661774171353,"./rect":1661774171354,"./ellipse":1661774171355,"./diamond":1661774171356,"./triangle":1661774171357,"./modelRect":1661774171358,"./star":1661774171359,"./donut":1661774171360}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171353, function(require, module, exports) {


var _tslib = require("tslib");

var _f6Core = require("@antv/f6-core");

var _util = require("@antv/util");

// ??????????????????????????????????????????
(0, _f6Core.registerNode)('circle', {
  // ???????????????????????????
  options: {
    size: _f6Core.BaseGlobal.defaultNode.size,
    style: {
      x: 0,
      y: 0,
      stroke: _f6Core.BaseGlobal.defaultNode.style.stroke,
      fill: _f6Core.BaseGlobal.defaultNode.style.fill,
      lineWidth: _f6Core.BaseGlobal.defaultNode.style.lineWidth
    },
    labelCfg: {
      style: {
        fill: _f6Core.BaseGlobal.nodeLabel.style.fill,
        fontSize: _f6Core.BaseGlobal.nodeLabel.style.fontSize
      }
    },
    // ?????????????????????????????????????????????circle??????
    linkPoints: {
      top: false,
      right: false,
      bottom: false,
      left: false,
      // circle?????????
      size: _f6Core.BaseGlobal.defaultNode.linkPoints.size,
      lineWidth: _f6Core.BaseGlobal.defaultNode.linkPoints.lineWidth,
      fill: _f6Core.BaseGlobal.defaultNode.linkPoints.fill,
      stroke: _f6Core.BaseGlobal.defaultNode.linkPoints.stroke
    },
    // ?????????icon??????
    icon: {
      // ????????????icon????????? false ????????????icon
      show: false,
      // icon???????????????????????????
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg',
      width: 20,
      height: 20
    },
    stateStyles: (0, _tslib.__assign)({}, _f6Core.BaseGlobal.nodeStateStyles)
  },
  shapeType: 'circle',
  // ????????????
  labelPosition: 'center',
  drawShape: function drawShape(cfg, group) {
    var _a = this.getOptions(cfg).icon,
        defaultIcon = _a === void 0 ? {} : _a;
    var style = this.getShapeStyle(cfg);
    var icon = (0, _util.deepMix)({}, defaultIcon, cfg.icon);
    var keyShape = group.addShape('circle', {
      attrs: style,
      className: this.type + "-keyShape",
      draggable: true
    });
    var width = icon.width,
        height = icon.height,
        show = icon.show,
        text = icon.text;

    if (show) {
      if (text) {
        group.addShape('text', {
          attrs: (0, _tslib.__assign)({
            x: 0,
            y: 0,
            fontSize: 12,
            fill: '#000',
            stroke: '#000',
            textBaseline: 'middle',
            textAlign: 'center'
          }, icon),
          className: this.type + "-icon",
          name: this.type + "-icon",
          draggable: true
        });
      } else {
        group.addShape('image', {
          attrs: (0, _tslib.__assign)({
            x: -width / 2,
            y: -height / 2
          }, icon),
          className: this.type + "-icon",
          name: this.type + "-icon",
          draggable: true
        });
      }
    }

    this.drawLinkPoints(cfg, group);
    return keyShape;
  },

  /**
   * ??????????????????LinkPoints
   * @param {Object} cfg data???????????????
   * @param {Group} group Group??????
   */
  drawLinkPoints: function drawLinkPoints(cfg, group) {
    var _a = this.getOptions(cfg).linkPoints,
        linkPoints = _a === void 0 ? {} : _a;
    var top = linkPoints.top,
        left = linkPoints.left,
        right = linkPoints.right,
        bottom = linkPoints.bottom,
        markSize = linkPoints.size,
        markR = linkPoints.r,
        markStyle = (0, _tslib.__rest)(linkPoints, ["top", "left", "right", "bottom", "size", "r"]);
    var size = this.getSize(cfg);
    var r = size[0] / 2;

    if (left) {
      // left circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: -r,
          y: 0,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-left',
        name: 'link-point-left',
        isAnchorPoint: true
      });
    }

    if (right) {
      // right circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: r,
          y: 0,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-right',
        name: 'link-point-right',
        isAnchorPoint: true
      });
    }

    if (top) {
      // top circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: 0,
          y: -r,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-top',
        name: 'link-point-top',
        isAnchorPoint: true
      });
    }

    if (bottom) {
      // bottom circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: 0,
          y: r,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-bottom',
        name: 'link-point-bottom',
        isAnchorPoint: true
      });
    }
  },

  /**
   * ????????????????????????????????????????????????????????????
   * @param {Object} cfg ??????????????????
   * @return {Object} ???????????????
   */
  getShapeStyle: function getShapeStyle(cfg) {
    var defaultStyle = this.getOptions(cfg).style;
    var strokeStyle = {
      stroke: cfg.color
    }; // ???????????????color?????????????????????stroke??????

    var style = (0, _util.deepMix)({}, defaultStyle, strokeStyle);
    var size = this.getSize(cfg);
    var r = size[0] / 2;
    var styles = (0, _tslib.__assign)({
      x: 0,
      y: 0,
      r: r
    }, style);
    return styles;
  },
  update: function update(cfg, item) {
    var group = item.getContainer();
    var size = this.getSize(cfg); // ????????????????????????????????????????????????????????????????????? cfg ???????????????????????? cfg ????????????????????????

    var strokeStyle = {
      stroke: cfg.color,
      r: size[0] / 2
    }; // ??? getShapeStyle ???????????????update ??????????????????????????? style ??????????????????????????????????????????????????????????????????????????????????????????

    var keyShape = item.get('keyShape');
    var style = (0, _util.deepMix)({}, keyShape.attr(), strokeStyle, cfg.style);
    this.updateShape(cfg, item, style, true);
    this.updateLinkPoints(cfg, group);
  }
}, 'single-node');
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171354, function(require, module, exports) {


var _tslib = require("tslib");

var _util = require("@antv/util");

var _f6Core = require("@antv/f6-core");

(0, _f6Core.registerNode)('rect', {
  // ???????????????????????????
  options: {
    size: [100, 30],
    style: {
      radius: 0,
      stroke: _f6Core.BaseGlobal.defaultNode.style.stroke,
      fill: _f6Core.BaseGlobal.defaultNode.style.fill,
      lineWidth: _f6Core.BaseGlobal.defaultNode.style.lineWidth
    },
    // ??????????????????
    labelCfg: {
      style: {
        fill: _f6Core.BaseGlobal.nodeLabel.style.fill,
        fontSize: _f6Core.BaseGlobal.nodeLabel.style.fontSize
      }
    },
    // ?????????????????????????????????????????????circle??????
    linkPoints: {
      top: false,
      right: false,
      bottom: false,
      left: false,
      // circle?????????
      size: _f6Core.BaseGlobal.defaultNode.linkPoints.size,
      lineWidth: _f6Core.BaseGlobal.defaultNode.linkPoints.lineWidth,
      fill: _f6Core.BaseGlobal.defaultNode.linkPoints.fill,
      stroke: _f6Core.BaseGlobal.defaultNode.linkPoints.stroke
    },
    // ?????????icon??????
    icon: {
      // ????????????icon????????? false ????????????icon
      show: false,
      // icon???????????????????????????
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg',
      width: 20,
      height: 20
    },
    // ???????????????????????????
    // anchorPoints: [{ x: 0, y: 0.5 }, { x: 1, y: 0.5 }]
    anchorPoints: [[0, 0.5], [1, 0.5]],
    stateStyles: (0, _tslib.__assign)({}, _f6Core.BaseGlobal.nodeStateStyles)
  },
  shapeType: 'rect',
  labelPosition: 'center',
  drawShape: function drawShape(cfg, group) {
    var style = this.getShapeStyle(cfg);
    var keyShape = group.addShape('rect', {
      attrs: style,
      className: this.type + "-keyShape",
      name: this.type + "-keyShape",
      draggable: true
    });
    this.drawLinkPoints(cfg, group);
    return keyShape;
  },

  /**
   * ??????????????????LinkPoints
   * @param {Object} cfg data???????????????
   * @param {Group} group Group??????
   */
  drawLinkPoints: function drawLinkPoints(cfg, group) {
    var _a = this.getOptions(cfg).linkPoints,
        linkPoints = _a === void 0 ? {} : _a;
    var top = linkPoints.top,
        left = linkPoints.left,
        right = linkPoints.right,
        bottom = linkPoints.bottom,
        markSize = linkPoints.size,
        markR = linkPoints.r,
        markStyle = (0, _tslib.__rest)(linkPoints, ["top", "left", "right", "bottom", "size", "r"]);
    var size = this.getSize(cfg);
    var width = size[0];
    var height = size[1];

    if (left) {
      // left circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: -width / 2,
          y: 0,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-left',
        name: 'link-point-left',
        isAnchorPoint: true
      });
    }

    if (right) {
      // right circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: width / 2,
          y: 0,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-right',
        name: 'link-point-right',
        isAnchorPoint: true
      });
    }

    if (top) {
      // top circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: 0,
          y: -height / 2,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-top',
        name: 'link-point-top',
        isAnchorPoint: true
      });
    }

    if (bottom) {
      // bottom circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: 0,
          y: height / 2,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-bottom',
        name: 'link-point-bottom',
        isAnchorPoint: true
      });
    }
  },

  /**
   * ????????????????????????????????????????????????????????????
   * @param {Object} cfg ??????????????????
   * @return {Object} ???????????????
   */
  getShapeStyle: function getShapeStyle(cfg) {
    var defaultStyle = this.getOptions(cfg).style;
    var strokeStyle = {
      stroke: cfg.color
    }; // ???????????????color?????????????????????stroke??????

    var style = (0, _util.mix)({}, defaultStyle, strokeStyle);
    var size = this.getSize(cfg);
    var width = style.width || size[0];
    var height = style.height || size[1];
    var styles = (0, _tslib.__assign)({
      x: -width / 2,
      y: -height / 2,
      width: width,
      height: height
    }, style);
    return styles;
  },
  update: function update(cfg, item) {
    var group = item.getContainer(); // ???????????? cfg ??????????????? cfg.style ????????????????????????

    var defaultStyle = this.getOptions({}).style;
    var size = this.getSize(cfg);
    var keyShape = item.get('keyShape');

    if (!cfg.size) {
      size[0] = keyShape.attr('width') || defaultStyle.width;
      size[1] = keyShape.attr('height') || defaultStyle.height;
    } // ????????????????????????????????????????????????????????????????????? cfg ???????????????????????? cfg ????????????????????????


    var strokeStyle = {
      stroke: cfg.color,
      x: -size[0] / 2,
      y: -size[1] / 2,
      width: size[0],
      height: size[1]
    }; // ??? getShapeStyle ???????????????update ??????????????????????????? style ??????????????????????????????????????????????????????????????????????????????????????????

    var style = (0, _util.mix)({}, defaultStyle, keyShape.attr(), strokeStyle);
    style = (0, _util.mix)(style, cfg.style);
    this.updateShape(cfg, item, style, false);
    this.updateLinkPoints(cfg, group);
  }
}, 'single-node');
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171355, function(require, module, exports) {


var _tslib = require("tslib");

var _f6Core = require("@antv/f6-core");

var _util = require("@antv/util");

/**
 * ?????????????????????????????????????????????????????????
 */
(0, _f6Core.registerNode)('ellipse', {
  // ???????????????????????????
  options: {
    size: [80, 40],
    style: {
      x: 0,
      y: 0,
      stroke: _f6Core.BaseGlobal.defaultNode.style.stroke,
      fill: _f6Core.BaseGlobal.defaultNode.style.fill,
      lineWidth: _f6Core.BaseGlobal.defaultNode.style.lineWidth
    },
    // ??????????????????
    labelCfg: {
      style: {
        fill: _f6Core.BaseGlobal.nodeLabel.style.fill,
        fontSize: _f6Core.BaseGlobal.nodeLabel.style.fontSize
      }
    },
    // ?????????????????????????????????????????????circle??????
    linkPoints: {
      top: false,
      right: false,
      bottom: false,
      left: false,
      // circle?????????
      size: _f6Core.BaseGlobal.defaultNode.linkPoints.size,
      lineWidth: _f6Core.BaseGlobal.defaultNode.linkPoints.lineWidth,
      fill: _f6Core.BaseGlobal.defaultNode.linkPoints.fill,
      stroke: _f6Core.BaseGlobal.defaultNode.linkPoints.stroke
    },
    // ?????????icon??????
    icon: {
      // ????????????icon????????? false ????????????icon
      show: false,
      // icon???????????????????????????
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg',
      width: 20,
      height: 20
    },
    stateStyles: (0, _tslib.__assign)({}, _f6Core.BaseGlobal.nodeStateStyles)
  },
  shapeType: 'ellipse',
  // ????????????
  labelPosition: 'center',
  drawShape: function drawShape(cfg, group) {
    var _a = this.getOptions(cfg).icon,
        icon = _a === void 0 ? {} : _a;
    var style = this.getShapeStyle(cfg);
    var keyShape = group.addShape('ellipse', {
      attrs: style,
      className: 'ellipse-keyShape',
      name: 'ellipse-keyShape',
      draggable: true
    });
    var width = icon.width,
        height = icon.height,
        show = icon.show,
        text = icon.text;

    if (show) {
      if (text) {
        group.addShape('text', {
          attrs: (0, _tslib.__assign)({
            x: 0,
            y: 0,
            fontSize: 12,
            fill: '#000',
            stroke: '#000',
            textBaseline: 'middle',
            textAlign: 'center'
          }, icon),
          className: this.type + "-icon",
          name: this.type + "-icon",
          draggable: true
        });
      } else {
        group.addShape('image', {
          attrs: (0, _tslib.__assign)({
            x: -width / 2,
            y: -height / 2
          }, icon),
          className: this.type + "-icon",
          name: this.type + "-icon",
          draggable: true
        });
      }
    }

    this.drawLinkPoints(cfg, group);
    return keyShape;
  },

  /**
   * ??????????????????LinkPoints
   * @param {Object} cfg data???????????????
   * @param {Group} group Group??????
   */
  drawLinkPoints: function drawLinkPoints(cfg, group) {
    var _a = this.getOptions(cfg).linkPoints,
        linkPoints = _a === void 0 ? {} : _a;
    var top = linkPoints.top,
        left = linkPoints.left,
        right = linkPoints.right,
        bottom = linkPoints.bottom,
        markSize = linkPoints.size,
        markR = linkPoints.r,
        markStyle = (0, _tslib.__rest)(linkPoints, ["top", "left", "right", "bottom", "size", "r"]);
    var size = this.getSize(cfg);
    var rx = size[0] / 2;
    var ry = size[1] / 2;

    if (left) {
      // left circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: -rx,
          y: 0,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-left',
        name: 'link-point-left',
        isAnchorPoint: true
      });
    }

    if (right) {
      // right circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: rx,
          y: 0,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-right',
        name: 'link-point-right',
        isAnchorPoint: true
      });
    }

    if (top) {
      // top circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: 0,
          y: -ry,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-top',
        name: 'link-point-top',
        isAnchorPoint: true
      });
    }

    if (bottom) {
      // bottom circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: 0,
          y: ry,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-bottom',
        name: 'link-point-bottom',
        isAnchorPoint: true
      });
    }
  },

  /**
   * ????????????????????????????????????????????????????????????
   * @param {Object} cfg ??????????????????
   * @return {Object} ???????????????
   */
  getShapeStyle: function getShapeStyle(cfg) {
    var defaultStyle = this.getOptions(cfg).style;
    var strokeStyle = {
      stroke: cfg.color
    }; // ???????????????color?????????????????????stroke??????

    var style = (0, _util.mix)({}, defaultStyle, strokeStyle);
    var size = this.getSize(cfg);
    var rx = size[0] / 2;
    var ry = size[1] / 2;
    var styles = (0, _tslib.__assign)({
      x: 0,
      y: 0,
      rx: rx,
      ry: ry
    }, style);
    return styles;
  },
  update: function update(cfg, item) {
    var group = item.getContainer(); // ???????????? cfg ??????????????? cfg.style ????????????????????????

    var defaultStyle = this.getOptions({}).style;
    var size = this.getSize(cfg);
    var strokeStyle = {
      stroke: cfg.color,
      rx: size[0] / 2,
      ry: size[1] / 2
    }; // ??? getShapeStyle ???????????????update ??????????????????????????? style ??????????????????????????????????????????????????????????????????????????????????????????

    var keyShape = item.get('keyShape');
    var style = (0, _util.mix)({}, defaultStyle, keyShape.attr(), strokeStyle);
    style = (0, _util.mix)(style, cfg.style);
    this.updateShape(cfg, item, style, true);
    this.updateLinkPoints(cfg, group);
  }
}, 'single-node');
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171356, function(require, module, exports) {


var _tslib = require("tslib");

var _f6Core = require("@antv/f6-core");

var _util = require("@antv/util");

// ??????shape
(0, _f6Core.registerNode)('diamond', {
  // ???????????????????????????
  options: {
    size: [80, 80],
    style: {
      stroke: _f6Core.BaseGlobal.defaultNode.style.stroke,
      fill: _f6Core.BaseGlobal.defaultNode.style.fill,
      lineWidth: _f6Core.BaseGlobal.defaultNode.style.lineWidth
    },
    // ??????????????????
    labelCfg: {
      style: {
        fill: _f6Core.BaseGlobal.nodeLabel.style.fill,
        fontSize: _f6Core.BaseGlobal.nodeLabel.style.fontSize
      }
    },
    // ?????????????????????????????????????????????circle??????
    linkPoints: {
      top: false,
      right: false,
      bottom: false,
      left: false,
      // circle?????????
      size: _f6Core.BaseGlobal.defaultNode.linkPoints.size,
      lineWidth: _f6Core.BaseGlobal.defaultNode.linkPoints.lineWidth,
      fill: _f6Core.BaseGlobal.defaultNode.linkPoints.fill,
      stroke: _f6Core.BaseGlobal.defaultNode.linkPoints.stroke
    },
    // ?????????icon??????
    icon: {
      // ????????????icon????????? false ????????????icon
      show: false,
      // icon???????????????????????????
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg',
      width: 20,
      height: 20
    },
    stateStyles: (0, _tslib.__assign)({}, _f6Core.BaseGlobal.nodeStateStyles)
  },
  shapeType: 'diamond',
  // ????????????
  labelPosition: 'center',
  drawShape: function drawShape(cfg, group) {
    var _a = this.getOptions(cfg).icon,
        icon = _a === void 0 ? {} : _a;
    var style = this.getShapeStyle(cfg);
    var keyShape = group.addShape('path', {
      attrs: style,
      className: this.type + "-keyShape",
      name: this.type + "-keyShape",
      draggable: true
    });
    var w = icon.width,
        h = icon.height,
        show = icon.show,
        text = icon.text;

    if (show) {
      if (text) {
        group.addShape('text', {
          attrs: (0, _tslib.__assign)({
            x: 0,
            y: 0,
            fontSize: 12,
            fill: '#000',
            stroke: '#000',
            textBaseline: 'middle',
            textAlign: 'center'
          }, icon),
          className: this.type + "-icon",
          name: this.type + "-icon",
          draggable: true
        });
      } else {
        group.addShape('image', {
          attrs: (0, _tslib.__assign)({
            x: -w / 2,
            y: -h / 2
          }, icon),
          className: this.type + "-icon",
          name: this.type + "-icon",
          draggable: true
        });
      }
    }

    this.drawLinkPoints(cfg, group);
    return keyShape;
  },

  /**
   * ??????????????????LinkPoints
   * @param {Object} cfg data???????????????
   * @param {Group} group Group??????
   */
  drawLinkPoints: function drawLinkPoints(cfg, group) {
    var _a = this.getOptions(cfg).linkPoints,
        linkPoints = _a === void 0 ? {} : _a;
    var top = linkPoints.top,
        left = linkPoints.left,
        right = linkPoints.right,
        bottom = linkPoints.bottom,
        markSize = linkPoints.size,
        markR = linkPoints.r,
        markStyle = (0, _tslib.__rest)(linkPoints, ["top", "left", "right", "bottom", "size", "r"]);
    var size = this.getSize(cfg);
    var width = size[0];
    var height = size[1];

    if (left) {
      // left circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: -width / 2,
          y: 0,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-left',
        name: 'link-point-left',
        isAnchorPoint: true
      });
    }

    if (right) {
      // right circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: width / 2,
          y: 0,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-right',
        name: 'link-point-right',
        isAnchorPoint: true
      });
    }

    if (top) {
      // top circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: 0,
          y: -height / 2,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-top',
        name: 'link-point-top',
        isAnchorPoint: true
      });
    }

    if (bottom) {
      // bottom circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: 0,
          y: height / 2,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-bottom',
        name: 'link-point-bottom',
        isAnchorPoint: true
      });
    }
  },
  getPath: function getPath(cfg) {
    var size = this.getSize(cfg);
    var width = size[0];
    var height = size[1];
    var path = [['M', 0, -height / 2], ['L', width / 2, 0], ['L', 0, height / 2], ['L', -width / 2, 0], ['Z'] // ??????
    ];
    return path;
  },

  /**
   * ????????????????????????????????????????????????????????????
   * @param {Object} cfg ??????????????????
   * @return {Object} ???????????????
   */
  getShapeStyle: function getShapeStyle(cfg) {
    var defaultStyle = this.getOptions(cfg).style;
    var strokeStyle = {
      stroke: cfg.color
    }; // ???????????????color?????????????????????stroke??????

    var style = (0, _util.mix)({}, defaultStyle, strokeStyle);
    var path = this.getPath(cfg);
    var styles = (0, _tslib.__assign)({
      path: path
    }, style);
    return styles;
  },
  update: function update(cfg, item) {
    var group = item.getContainer(); // ???????????? cfg ??????????????? cfg.style ????????????????????????

    var defaultStyle = this.getOptions({}).style;
    var path = this.getPath(cfg); // ????????????????????????????????????????????????????????????????????? cfg ???????????????????????? cfg ????????????????????????

    var strokeStyle = {
      stroke: cfg.color,
      path: path
    }; // ??? getShapeStyle ???????????????update ??????????????????????????? style ??????????????????????????????????????????????????????????????????????????????????????????

    var keyShape = item.get('keyShape');
    var style = (0, _util.mix)({}, defaultStyle, keyShape.attr(), strokeStyle);
    style = (0, _util.mix)(style, cfg.style);
    this.updateShape(cfg, item, style, true);
    this.updateLinkPoints(cfg, group);
  }
}, 'single-node');
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171357, function(require, module, exports) {


var _tslib = require("tslib");

var _f6Core = require("@antv/f6-core");

var _util = require("@antv/util");

// ?????????
(0, _f6Core.registerNode)('triangle', {
  // ???????????????????????????
  options: {
    size: 40,
    direction: 'up',
    style: {
      stroke: _f6Core.BaseGlobal.defaultNode.style.stroke,
      fill: _f6Core.BaseGlobal.defaultNode.style.fill,
      lineWidth: _f6Core.BaseGlobal.defaultNode.style.lineWidth
    },
    labelCfg: {
      style: {
        fill: _f6Core.BaseGlobal.nodeLabel.style.fill,
        fontSize: _f6Core.BaseGlobal.nodeLabel.style.fontSize
      },
      offset: 15
    },
    // ?????????????????????????????????????????????circle??????
    linkPoints: {
      top: false,
      right: false,
      bottom: false,
      left: false,
      // circle?????????
      size: _f6Core.BaseGlobal.defaultNode.linkPoints.size,
      lineWidth: _f6Core.BaseGlobal.defaultNode.linkPoints.lineWidth,
      fill: _f6Core.BaseGlobal.defaultNode.linkPoints.fill,
      stroke: _f6Core.BaseGlobal.defaultNode.linkPoints.stroke
    },
    // ?????????icon??????
    icon: {
      // ????????????icon????????? false ????????????icon
      show: false,
      // icon???????????????????????????
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg',
      width: 20,
      height: 20,
      offset: 6
    },
    stateStyles: (0, _tslib.__assign)({}, _f6Core.BaseGlobal.nodeStateStyles)
  },
  shapeType: 'triangle',
  // ????????????
  labelPosition: 'bottom',
  drawShape: function drawShape(cfg, group) {
    var _a = this.getOptions(cfg),
        _b = _a.icon,
        icon = _b === void 0 ? {} : _b,
        defaultDirection = _a.direction;

    var style = this.getShapeStyle(cfg);
    var direction = cfg.direction || defaultDirection;
    var keyShape = group.addShape('path', {
      attrs: style,
      className: this.type + "-keyShape",
      name: this.type + "-keyShape",
      draggable: true
    });
    var w = icon.width,
        h = icon.height,
        show = icon.show,
        offset = icon.offset,
        text = icon.text;

    if (show) {
      if (text) {
        group.addShape('text', {
          attrs: (0, _tslib.__assign)({
            x: 0,
            y: 0,
            fontSize: 12,
            fill: '#000',
            stroke: '#000',
            textBaseline: 'middle',
            textAlign: 'center'
          }, icon),
          className: this.type + "-icon",
          name: this.type + "-icon",
          draggable: true
        });
      } else {
        var iconW = -w / 2;
        var iconH = -h / 2;

        if (direction === 'up' || direction === 'down') {
          iconH += offset;
        }

        if (direction === 'left' || direction === 'right') {
          iconW += offset;
        }

        group.addShape('image', {
          attrs: (0, _tslib.__assign)({
            x: iconW,
            y: iconH
          }, icon),
          className: this.type + "-icon",
          name: this.type + "-icon",
          draggable: true
        });
      }
    }

    this.drawLinkPoints(cfg, group);
    return keyShape;
  },

  /**
   * ??????????????????LinkPoints
   * @param {Object} cfg data???????????????
   * @param {Group} group Group??????
   */
  drawLinkPoints: function drawLinkPoints(cfg, group) {
    var _a = this.getOptions(cfg),
        _b = _a.linkPoints,
        linkPoints = _b === void 0 ? {} : _b,
        defaultDirection = _a.direction;

    var direction = cfg.direction || defaultDirection;
    var top = linkPoints.top,
        left = linkPoints.left,
        right = linkPoints.right,
        bottom = linkPoints.bottom,
        markSize = linkPoints.size,
        markR = linkPoints.r,
        markStyle = (0, _tslib.__rest)(linkPoints, ["top", "left", "right", "bottom", "size", "r"]);
    var size = this.getSize(cfg);
    var len = size[0];

    if (left) {
      // up down left right ?????????????????????????????????
      var leftPos = null;
      var diffY = len * Math.sin(1 / 3 * Math.PI);
      var r = len * Math.sin(1 / 3 * Math.PI);

      if (direction === 'up') {
        leftPos = [-r, diffY];
      } else if (direction === 'down') {
        leftPos = [-r, -diffY];
      } else if (direction === 'left') {
        leftPos = [-r, r - diffY];
      }

      if (leftPos) {
        // left circle
        group.addShape('circle', {
          attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
            x: leftPos[0],
            y: leftPos[1],
            r: markSize / 2 || markR || 5
          }),
          className: 'link-point-left',
          name: 'link-point-left'
        });
      }
    }

    if (right) {
      // right circle
      // up down left right ?????????????????????????????????
      var rightPos = null;
      var diffY = len * Math.sin(1 / 3 * Math.PI);
      var r = len * Math.sin(1 / 3 * Math.PI);

      if (direction === 'up') {
        rightPos = [r, diffY];
      } else if (direction === 'down') {
        rightPos = [r, -diffY];
      } else if (direction === 'right') {
        rightPos = [r, r - diffY];
      }

      if (rightPos) {
        group.addShape('circle', {
          attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
            x: rightPos[0],
            y: rightPos[1],
            r: markSize / 2 || markR || 5
          }),
          className: 'link-point-right',
          name: 'link-point-right'
        });
      }
    }

    if (top) {
      // up down left right ?????????????????????????????????
      var topPos = null;
      var diffY = len * Math.sin(1 / 3 * Math.PI);
      var r = len * Math.sin(1 / 3 * Math.PI);

      if (direction === 'up') {
        topPos = [r - diffY, -diffY];
      } else if (direction === 'left') {
        topPos = [r, -diffY];
      } else if (direction === 'right') {
        topPos = [-r, -diffY];
      }

      if (topPos) {
        // top circle
        group.addShape('circle', {
          attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
            x: topPos[0],
            y: topPos[1],
            r: markSize / 2 || markR || 5
          }),
          className: 'link-point-top',
          name: 'link-point-top'
        });
      }
    }

    if (bottom) {
      // up down left right ?????????????????????????????????
      var bottomPos = null;
      var diffY = len * Math.sin(1 / 3 * Math.PI);
      var r = len * Math.sin(1 / 3 * Math.PI);

      if (direction === 'down') {
        bottomPos = [-r + diffY, diffY];
      } else if (direction === 'left') {
        bottomPos = [r, diffY];
      } else if (direction === 'right') {
        bottomPos = [-r, diffY];
      }

      if (bottomPos) {
        // bottom circle
        group.addShape('circle', {
          attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
            x: bottomPos[0],
            y: bottomPos[1],
            r: markSize / 2 || markR || 5
          }),
          className: 'link-point-bottom',
          name: 'link-point-bottom'
        });
      }
    }
  },
  getPath: function getPath(cfg) {
    var defaultDirection = this.getOptions(cfg).direction;
    var direction = cfg.direction || defaultDirection;
    var size = this.getSize(cfg);
    var len = size[0];
    var diffY = len * Math.sin(1 / 3 * Math.PI);
    var r = len * Math.sin(1 / 3 * Math.PI);
    var path = [['M', -r, diffY], ['L', 0, -diffY], ['L', r, diffY], ['Z'] // ??????
    ];

    if (direction === 'down') {
      path = [['M', -r, -diffY], ['L', r, -diffY], ['L', 0, diffY], ['Z'] // ??????
      ];
    } else if (direction === 'left') {
      path = [['M', -r, r - diffY], ['L', r, -r], ['L', r, r], ['Z'] // ??????
      ];
    } else if (direction === 'right') {
      path = [['M', r, r - diffY], ['L', -r, r], ['L', -r, -r], ['Z'] // ??????
      ];
    }

    return path;
  },

  /**
   * ????????????????????????????????????????????????????????????
   * @param {Object} cfg ??????????????????
   * @return {Object} ???????????????
   */
  getShapeStyle: function getShapeStyle(cfg) {
    var defaultStyle = this.getOptions(cfg).style;
    var strokeStyle = {
      stroke: cfg.color
    }; // ???????????????color?????????????????????stroke??????

    var style = (0, _util.mix)({}, defaultStyle, strokeStyle);
    var path = this.getPath(cfg);
    var styles = (0, _tslib.__assign)({
      path: path
    }, style);
    return styles;
  },
  update: function update(cfg, item) {
    var group = item.getContainer(); // ???????????? cfg ??????????????? cfg.style ????????????????????????

    var defaultStyle = this.getOptions({}).style;
    var path = this.getPath(cfg); // ????????????????????????????????????????????????????????????????????? cfg ???????????????????????? cfg ????????????????????????

    var strokeStyle = {
      stroke: cfg.color,
      path: path
    }; // ??? getShapeStyle ???????????????update ??????????????????????????? style ??????????????????????????????????????????????????????????????????????????????????????????

    var keyShape = item.get('keyShape');
    var style = (0, _util.mix)({}, defaultStyle, keyShape.attr(), strokeStyle);
    style = (0, _util.mix)(style, cfg.style);
    this.updateShape(cfg, item, style, true);
    this.updateLinkPoints(cfg, group);
  },

  /**
   * ??????linkPoints
   * @param {Object} cfg ?????????????????????
   * @param {Group} group Item?????????group
   */
  updateLinkPoints: function updateLinkPoints(cfg, group) {
    var _a = this.getOptions({}),
        defaultLinkPoints = _a.linkPoints,
        defaultDirection = _a.direction;

    var direction = cfg.direction || defaultDirection;
    var markLeft = group.find(function (element) {
      return element.get('className') === 'link-point-left';
    });
    var markRight = group.find(function (element) {
      return element.get('className') === 'link-point-right';
    });
    var markTop = group.find(function (element) {
      return element.get('className') === 'link-point-top';
    });
    var markBottom = group.find(function (element) {
      return element.get('className') === 'link-point-bottom';
    });
    var currentLinkPoints = defaultLinkPoints;
    var existLinkPoint = markLeft || markRight || markTop || markBottom;

    if (existLinkPoint) {
      currentLinkPoints = existLinkPoint.attr();
    }

    var linkPoints = (0, _util.mix)({}, currentLinkPoints, cfg.linkPoints);
    var markFill = linkPoints.fill,
        markStroke = linkPoints.stroke,
        borderWidth = linkPoints.lineWidth;
    var markSize = linkPoints.size / 2;
    if (!markSize) markSize = linkPoints.r;

    var _b = cfg.linkPoints ? cfg.linkPoints : {
      left: undefined,
      right: undefined,
      top: undefined,
      bottom: undefined
    },
        left = _b.left,
        right = _b.right,
        top = _b.top,
        bottom = _b.bottom;

    var size = this.getSize(cfg);
    var len = size[0];
    var styles = {
      r: markSize,
      fill: markFill,
      stroke: markStroke,
      lineWidth: borderWidth
    };
    var leftPos = null;
    var diffY = len * Math.sin(1 / 3 * Math.PI);
    var r = len * Math.sin(1 / 3 * Math.PI);

    if (direction === 'up') {
      leftPos = [-r, diffY];
    } else if (direction === 'down') {
      leftPos = [-r, -diffY];
    } else if (direction === 'left') {
      leftPos = [-r, r - diffY];
    }

    if (leftPos) {
      if (markLeft) {
        if (!left && left !== undefined) {
          markLeft.remove();
        } else {
          markLeft.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
            x: leftPos[0],
            y: leftPos[1]
          }));
        }
      } else if (left) {
        group.addShape('circle', {
          attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
            x: leftPos[0],
            y: leftPos[1]
          }),
          className: 'link-point-left',
          name: 'link-point-left',
          isAnchorPoint: true
        });
      }
    }

    var rightPos = null;

    if (direction === 'up') {
      rightPos = [r, diffY];
    } else if (direction === 'down') {
      rightPos = [r, -diffY];
    } else if (direction === 'right') {
      rightPos = [r, r - diffY];
    }

    if (rightPos) {
      if (markRight) {
        if (!right && right !== undefined) {
          markRight.remove();
        } else {
          markRight.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
            x: rightPos[0],
            y: rightPos[1]
          }));
        }
      } else if (right) {
        group.addShape('circle', {
          attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
            x: rightPos[0],
            y: rightPos[1]
          }),
          className: 'link-point-right',
          name: 'link-point-right',
          isAnchorPoint: true
        });
      }
    }

    var topPos = null;

    if (direction === 'up') {
      topPos = [r - diffY, -diffY];
    } else if (direction === 'left') {
      topPos = [r, -diffY];
    } else if (direction === 'right') {
      topPos = [-r, -diffY];
    }

    if (topPos) {
      if (markTop) {
        if (!top && top !== undefined) {
          markTop.remove();
        } else {
          // top circle
          markTop.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
            x: topPos[0],
            y: topPos[1]
          }));
        }
      } else if (top) {
        group.addShape('circle', {
          attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
            x: topPos[0],
            y: topPos[1]
          }),
          className: 'link-point-top',
          name: 'link-point-top',
          isAnchorPoint: true
        });
      }
    }

    var bottomPos = null;

    if (direction === 'down') {
      bottomPos = [-r + diffY, diffY];
    } else if (direction === 'left') {
      bottomPos = [r, diffY];
    } else if (direction === 'right') {
      bottomPos = [-r, diffY];
    }

    if (bottomPos) {
      if (markBottom) {
        if (!bottom && bottom !== undefined) {
          markBottom.remove();
        } else {
          markBottom.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
            x: bottomPos[0],
            y: bottomPos[1]
          }));
        }
      } else if (bottom) {
        group.addShape('circle', {
          attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
            x: bottomPos[0],
            y: bottomPos[1]
          }),
          className: 'link-point-bottom',
          name: 'link-point-bottom',
          isAnchorPoint: true
        });
      }
    }
  }
}, 'single-node');
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171358, function(require, module, exports) {


var _tslib = require("tslib");

var _util = require("@antv/util");

var _f6Core = require("@antv/f6-core");

(0, _f6Core.registerNode)('modelRect', {
  // ???????????????????????????
  options: {
    size: [185, 70],
    style: {
      radius: 5,
      stroke: '#69c0ff',
      fill: '#ffffff',
      lineWidth: _f6Core.BaseGlobal.defaultNode.style.lineWidth,
      fillOpacity: 1
    },
    // ??????????????????
    labelCfg: {
      style: {
        fill: '#595959',
        fontSize: 14
      },
      offset: 30 // ??????????????? offset??????????????? y ?????????????????????

    },
    descriptionCfg: {
      style: {
        fontSize: 12,
        fill: '#bfbfbf'
      },
      paddingTop: 0
    },
    preRect: {
      show: true,
      width: 4,
      fill: '#40a9ff',
      radius: 2
    },
    // ?????????????????????????????????????????????circle??????
    linkPoints: {
      top: false,
      right: false,
      bottom: false,
      left: false,
      // circle?????????
      size: 10,
      lineWidth: 1,
      fill: '#72CC4A',
      stroke: '#72CC4A'
    },
    // ?????????icon??????
    logoIcon: {
      // ????????????icon????????? false ????????????icon
      show: true,
      x: 0,
      y: 0,
      // icon???????????????????????????
      img: 'https://gw.alipayobjects.com/zos/basement_prod/4f81893c-1806-4de4-aff3-9a6b266bc8a2.svg',
      width: 16,
      height: 16,
      // ?????????????????????????????????
      offset: 0
    },
    // ????????????????????????icon??????
    stateIcon: {
      // ????????????icon????????? false ????????????icon
      show: true,
      x: 0,
      y: 0,
      // icon???????????????????????????
      img: 'https://gw.alipayobjects.com/zos/basement_prod/300a2523-67e0-4cbf-9d4a-67c077b40395.svg',
      width: 16,
      height: 16,
      // ?????????????????????????????????
      offset: -5
    },
    // ???????????????????????????
    // anchorPoints: [{ x: 0, y: 0.5 }, { x: 1, y: 0.5 }]
    anchorPoints: [[0, 0.5], [1, 0.5]]
  },
  shapeType: 'modelRect',
  drawShape: function drawShape(cfg, group) {
    var _a = this.getOptions(cfg).preRect,
        preRect = _a === void 0 ? {} : _a;
    var style = this.getShapeStyle(cfg);
    var size = this.getSize(cfg);
    var width = size[0];
    var height = size[1];
    var keyShape = group.addShape('rect', {
      attrs: style,
      className: this.type + "-keyShape",
      name: this.type + "-keyShape",
      draggable: true
    });
    var preRectShow = preRect.show,
        preRectStyle = (0, _tslib.__rest)(preRect, ["show"]);

    if (preRectShow) {
      group.addShape('rect', {
        attrs: (0, _tslib.__assign)({
          x: -width / 2,
          y: -height / 2,
          height: height
        }, preRectStyle),
        className: 'pre-rect',
        name: 'pre-rect',
        draggable: true
      });
    }

    this.drawLogoIcon(cfg, group);
    this.drawStateIcon(cfg, group);
    this.drawLinkPoints(cfg, group);
    return keyShape;
  },

  /**
   * ???????????????????????????logo??????
   * @param {Object} cfg ???????????????
   * @param {Group} group Group??????
   */
  drawLogoIcon: function drawLogoIcon(cfg, group) {
    var _a = this.getOptions(cfg).logoIcon,
        logoIcon = _a === void 0 ? {} : _a;
    var size = this.getSize(cfg);
    var width = size[0];

    if (logoIcon.show) {
      var w = logoIcon.width,
          h = logoIcon.height,
          x = logoIcon.x,
          y = logoIcon.y,
          offset = logoIcon.offset,
          text = logoIcon.text,
          logoIconStyle = (0, _tslib.__rest)(logoIcon, ["width", "height", "x", "y", "offset", "text"]);

      if (text) {
        group.addShape('text', {
          attrs: (0, _tslib.__assign)({
            x: 0,
            y: 0,
            fontSize: 12,
            fill: '#000',
            stroke: '#000',
            textBaseline: 'middle',
            textAlign: 'center'
          }, logoIconStyle),
          className: 'rect-logo-icon',
          name: 'rect-logo-icon',
          draggable: true
        });
      } else {
        group.addShape('image', {
          attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, logoIconStyle), {
            x: x || -width / 2 + w + offset,
            y: y || -h / 2,
            width: w,
            height: h
          }),
          className: 'rect-logo-icon',
          name: 'rect-logo-icon',
          draggable: true
        });
      }
    }
  },

  /**
   * ???????????????????????????????????????
   * @param {Object} cfg ???????????????
   * @param {Group} group Group??????
   */
  drawStateIcon: function drawStateIcon(cfg, group) {
    var _a = this.getOptions(cfg).stateIcon,
        stateIcon = _a === void 0 ? {} : _a;
    var size = this.getSize(cfg);
    var width = size[0];

    if (stateIcon.show) {
      var w = stateIcon.width,
          h = stateIcon.height,
          x = stateIcon.x,
          y = stateIcon.y,
          offset = stateIcon.offset,
          text = stateIcon.text,
          iconStyle = (0, _tslib.__rest)(stateIcon, ["width", "height", "x", "y", "offset", "text"]);

      if (text) {
        group.addShape('text', {
          attrs: (0, _tslib.__assign)({
            x: 0,
            y: 0,
            fontSize: 12,
            fill: '#000',
            stroke: '#000',
            textBaseline: 'middle',
            textAlign: 'center'
          }, iconStyle),
          className: 'rect-state-icon',
          name: 'rect-state-icon',
          draggable: true
        });
      } else {
        group.addShape('image', {
          attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, iconStyle), {
            x: x || width / 2 - w + offset,
            y: y || -h / 2,
            width: w,
            height: h
          }),
          className: 'rect-state-icon',
          name: 'rect-state-icon',
          draggable: true
        });
      }
    }
  },

  /**
   * ??????????????????LinkPoints
   * @param {Object} cfg data???????????????
   * @param {Group} group Group??????
   */
  drawLinkPoints: function drawLinkPoints(cfg, group) {
    var _a = this.getOptions(cfg).linkPoints,
        linkPoints = _a === void 0 ? {} : _a;
    var top = linkPoints.top,
        left = linkPoints.left,
        right = linkPoints.right,
        bottom = linkPoints.bottom,
        markSize = linkPoints.size,
        markR = linkPoints.r,
        markStyle = (0, _tslib.__rest)(linkPoints, ["top", "left", "right", "bottom", "size", "r"]);
    var size = this.getSize(cfg);
    var width = size[0];
    var height = size[1];

    if (left) {
      // left circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: -width / 2,
          y: 0,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-left',
        name: 'link-point-left',
        isAnchorPoint: true
      });
    }

    if (right) {
      // right circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: width / 2,
          y: 0,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-right',
        name: 'link-point-right',
        isAnchorPoint: true
      });
    }

    if (top) {
      // top circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: 0,
          y: -height / 2,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-top',
        name: 'link-point-top',
        isAnchorPoint: true
      });
    }

    if (bottom) {
      // bottom circle
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: 0,
          y: height / 2,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-bottom',
        name: 'link-point-bottom',
        isAnchorPoint: true
      });
    }
  },
  drawLabel: function drawLabel(cfg, group) {
    var _a = this.getOptions(cfg),
        _b = _a.labelCfg,
        labelCfg = _b === void 0 ? {} : _b,
        _c = _a.logoIcon,
        logoIcon = _c === void 0 ? {} : _c,
        _d = _a.descriptionCfg,
        descriptionCfg = _d === void 0 ? {} : _d;

    var size = this.getSize(cfg);
    var width = size[0];
    var label = null;
    var show = logoIcon.show,
        w = logoIcon.width;
    var offsetX = -width / 2 + labelCfg.offset;

    if (show) {
      offsetX = -width / 2 + w + labelCfg.offset;
    }

    var fontStyle = labelCfg.style;
    var descriptionStyle = descriptionCfg.style,
        descriptionPaddingTop = descriptionCfg.paddingTop;

    if ((0, _util.isString)(cfg.description)) {
      label = group.addShape('text', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, fontStyle), {
          x: offsetX,
          y: -5,
          text: cfg.label
        }),
        className: 'text-shape',
        name: 'text-shape',
        draggable: true
      });
      group.addShape('text', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, descriptionStyle), {
          x: offsetX,
          y: 17 + (descriptionPaddingTop || 0),
          text: cfg.description
        }),
        className: 'rect-description',
        name: 'rect-description',
        draggable: true
      });
    } else {
      label = group.addShape('text', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, fontStyle), {
          x: offsetX,
          y: 7,
          text: cfg.label
        }),
        className: 'text-shape',
        name: 'text-shape',
        draggable: true
      });
    }

    return label;
  },

  /**
   * ????????????????????????????????????????????????????????????
   * @param {Object} cfg ??????????????????
   * @return {Object} ???????????????
   */
  getShapeStyle: function getShapeStyle(cfg) {
    var defaultStyle = this.getOptions(cfg).style;
    var strokeStyle = {
      stroke: cfg.color
    }; // ???????????????color?????????????????????stroke??????

    var style = (0, _util.mix)({}, defaultStyle, strokeStyle);
    var size = this.getSize(cfg);
    var width = style.width || size[0];
    var height = style.height || size[1];
    var styles = (0, _tslib.__assign)({
      x: -width / 2,
      y: -height / 2,
      width: width,
      height: height
    }, style);
    return styles;
  },
  update: function update(cfg, item) {
    var _a = this.getOptions(cfg),
        _b = _a.style,
        style = _b === void 0 ? {} : _b,
        _c = _a.labelCfg,
        labelCfg = _c === void 0 ? {} : _c,
        _d = _a.descriptionCfg,
        descriptionCfg = _d === void 0 ? {} : _d;

    var size = this.getSize(cfg);
    var width = size[0];
    var height = size[1];
    var keyShape = item.get('keyShape');
    keyShape.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, style), {
      x: -width / 2,
      y: -height / 2,
      width: width,
      height: height
    }));
    var group = item.getContainer();
    var logoIconShape = group.find(function (element) {
      return element.get('className') === 'rect-logo-icon';
    });
    var currentLogoIconAttr = logoIconShape ? logoIconShape.attr() : {};
    var logoIcon = (0, _util.mix)({}, currentLogoIconAttr, cfg.logoIcon);
    var w = logoIcon.width;

    if (w === undefined) {
      w = this.options.logoIcon.width;
    }

    var show = cfg.logoIcon ? cfg.logoIcon.show : undefined;
    var offset = labelCfg.offset;
    var offsetX = -width / 2 + w + offset;

    if (!show && show !== undefined) {
      offsetX = -width / 2 + offset;
    }

    var label = group.find(function (element) {
      return element.get('className') === 'node-label';
    });
    var description = group.find(function (element) {
      return element.get('className') === 'rect-description';
    });

    if (cfg.label) {
      if (!label) {
        group.addShape('text', {
          attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, labelCfg.style), {
            x: offsetX,
            y: cfg.description ? -5 : 7,
            text: cfg.label
          }),
          className: 'node-label',
          name: 'node-label',
          draggable: true
        });
      } else {
        var cfgStyle = cfg.labelCfg ? cfg.labelCfg.style : {};
        var labelStyle = (0, _util.mix)({}, label.attr(), cfgStyle);
        if (cfg.label) labelStyle.text = cfg.label;
        labelStyle.x = offsetX;
        if ((0, _util.isString)(cfg.description)) labelStyle.y = -5;

        if (description) {
          description.resetMatrix();
          description.attr({
            x: offsetX
          });
        }

        label.resetMatrix();
        label.attr(labelStyle);
      }
    }

    if ((0, _util.isString)(cfg.description)) {
      var paddingTop = descriptionCfg.paddingTop;

      if (!description) {
        group.addShape('text', {
          attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, descriptionCfg.style), {
            x: offsetX,
            y: 17 + (paddingTop || 0),
            text: cfg.description
          }),
          className: 'rect-description',
          name: 'rect-description',
          draggable: true
        });
      } else {
        var cfgStyle = cfg.descriptionCfg ? cfg.descriptionCfg.style : {};
        var descriptionStyle = (0, _util.mix)({}, description.attr(), cfgStyle);
        if ((0, _util.isString)(cfg.description)) descriptionStyle.text = cfg.description;
        descriptionStyle.x = offsetX;
        description.resetMatrix();
        description.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, descriptionStyle), {
          y: 17 + (paddingTop || 0)
        }));
      }
    }

    var preRectShape = group.find(function (element) {
      return element.get('className') === 'pre-rect';
    });

    if (preRectShape) {
      var preRect = (0, _util.mix)({}, preRectShape.attr(), cfg.preRect);
      preRectShape.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, preRect), {
        x: -width / 2,
        y: -height / 2,
        height: height
      }));
    }

    if (logoIconShape) {
      if (!show && show !== undefined) {
        logoIconShape.remove();
      } else {
        var logoW = logoIcon.width,
            h = logoIcon.height,
            x = logoIcon.x,
            y = logoIcon.y,
            logoOffset = logoIcon.offset,
            logoIconStyle = (0, _tslib.__rest)(logoIcon, ["width", "height", "x", "y", "offset"]);
        logoIconShape.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, logoIconStyle), {
          x: x || -width / 2 + logoW + logoOffset,
          y: y || -h / 2,
          width: logoW,
          height: h
        }));
      }
    } else if (show) {
      this.drawLogoIcon(cfg, group);
    }

    var stateIconShape = group.find(function (element) {
      return element.get('className') === 'rect-state-icon';
    });
    var currentStateIconAttr = stateIconShape ? stateIconShape.attr() : {};
    var stateIcon = (0, _util.mix)({}, currentStateIconAttr, cfg.stateIcon);

    if (stateIconShape) {
      if (!stateIcon.show && stateIcon.show !== undefined) {
        stateIconShape.remove();
      }

      var stateW = stateIcon.width,
          h = stateIcon.height,
          x = stateIcon.x,
          y = stateIcon.y,
          stateOffset = stateIcon.offset,
          stateIconStyle = (0, _tslib.__rest)(stateIcon, ["width", "height", "x", "y", "offset"]);
      stateIconShape.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, stateIconStyle), {
        x: x || width / 2 - stateW + stateOffset,
        y: y || -h / 2,
        width: stateW,
        height: h
      }));
    } else if (stateIcon.show) {
      this.drawStateIcon(cfg, group);
    }

    this.updateLinkPoints(cfg, group);
  }
}, 'single-node');
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171359, function(require, module, exports) {


var _tslib = require("tslib");

var _f6Core = require("@antv/f6-core");

var _util = require("@antv/util");

// ?????????shape
(0, _f6Core.registerNode)('star', {
  // ???????????????????????????
  options: {
    size: 60,
    style: {
      stroke: _f6Core.BaseGlobal.defaultNode.style.stroke,
      fill: _f6Core.BaseGlobal.defaultNode.style.fill,
      lineWidth: _f6Core.BaseGlobal.defaultNode.style.lineWidth
    },
    labelCfg: {
      style: {
        fill: _f6Core.BaseGlobal.nodeLabel.style.fill,
        fontSize: _f6Core.BaseGlobal.nodeLabel.style.fontSize
      }
    },
    // ?????????????????????????????????????????????circle??????
    linkPoints: {
      top: false,
      right: false,
      bottom: false,
      left: false,
      // circle?????????
      size: _f6Core.BaseGlobal.defaultNode.linkPoints.size,
      lineWidth: _f6Core.BaseGlobal.defaultNode.linkPoints.lineWidth,
      fill: _f6Core.BaseGlobal.defaultNode.linkPoints.fill,
      stroke: _f6Core.BaseGlobal.defaultNode.linkPoints.stroke
    },
    // ?????????icon??????
    icon: {
      // ????????????icon????????? false ????????????icon
      show: false,
      // icon???????????????????????????
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg',
      width: 20,
      height: 20
    },
    stateStyles: (0, _tslib.__assign)({}, _f6Core.BaseGlobal.nodeStateStyles)
  },
  shapeType: 'star',
  // ????????????
  labelPosition: 'center',
  drawShape: function drawShape(cfg, group) {
    var _a = this.getOptions(cfg).icon,
        icon = _a === void 0 ? {} : _a;
    var style = this.getShapeStyle(cfg);
    var keyShape = group.addShape('path', {
      attrs: style,
      className: this.type + "-keyShape",
      name: this.type + "-keyShape",
      draggable: true
    });
    var w = icon.width,
        h = icon.height,
        show = icon.show,
        text = icon.text;

    if (show) {
      if (text) {
        group.addShape('text', {
          attrs: (0, _tslib.__assign)({
            x: 0,
            y: 0,
            fontSize: 12,
            fill: '#000',
            stroke: '#000',
            textBaseline: 'middle',
            textAlign: 'center'
          }, icon),
          className: this.type + "-icon",
          name: this.type + "-icon",
          draggable: true
        });
      } else {
        group.addShape('image', {
          attrs: (0, _tslib.__assign)({
            x: -w / 2,
            y: -h / 2
          }, icon),
          className: this.type + "-icon",
          name: this.type + "-icon",
          draggable: true
        });
      }
    }

    this.drawLinkPoints(cfg, group);
    return keyShape;
  },

  /**
   * ??????????????????LinkPoints
   * @param {Object} cfg data???????????????
   * @param {Group} group Group??????
   */
  drawLinkPoints: function drawLinkPoints(cfg, group) {
    var _a = this.getOptions(cfg).linkPoints,
        linkPoints = _a === void 0 ? {} : _a;
    var top = linkPoints.top,
        left = linkPoints.left,
        right = linkPoints.right,
        leftBottom = linkPoints.leftBottom,
        rightBottom = linkPoints.rightBottom,
        markSize = linkPoints.size,
        markR = linkPoints.r,
        markStyle = (0, _tslib.__rest)(linkPoints, ["top", "left", "right", "leftBottom", "rightBottom", "size", "r"]);
    var size = this.getSize(cfg);
    var outerR = size[0];

    if (right) {
      // right circle
      // up down left right ?????????????????????????????????
      var x1 = Math.cos((18 + 72 * 0) / 180 * Math.PI) * outerR;
      var y1 = Math.sin((18 + 72 * 0) / 180 * Math.PI) * outerR;
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: x1,
          y: -y1,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-right',
        name: 'link-point-right'
      });
    }

    if (top) {
      // up down left right ?????????????????????????????????
      var x1 = Math.cos((18 + 72 * 1) / 180 * Math.PI) * outerR;
      var y1 = Math.sin((18 + 72 * 1) / 180 * Math.PI) * outerR; // top circle

      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: x1,
          y: -y1,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-top',
        name: 'link-point-top'
      });
    }

    if (left) {
      // up down left right ?????????????????????????????????
      var x1 = Math.cos((18 + 72 * 2) / 180 * Math.PI) * outerR;
      var y1 = Math.sin((18 + 72 * 2) / 180 * Math.PI) * outerR; // left circle

      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: x1,
          y: -y1,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-left',
        name: 'link-point-left'
      });
    }

    if (leftBottom) {
      // up down left right ?????????????????????????????????
      var x1 = Math.cos((18 + 72 * 3) / 180 * Math.PI) * outerR;
      var y1 = Math.sin((18 + 72 * 3) / 180 * Math.PI) * outerR; // left bottom circle

      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: x1,
          y: -y1,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-left-bottom',
        name: 'link-point-left-bottom'
      });
    }

    if (rightBottom) {
      // up down left right ?????????????????????????????????
      var x1 = Math.cos((18 + 72 * 4) / 180 * Math.PI) * outerR;
      var y1 = Math.sin((18 + 72 * 4) / 180 * Math.PI) * outerR; // left bottom circle

      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, markStyle), {
          x: x1,
          y: -y1,
          r: markSize / 2 || markR || 5
        }),
        className: 'link-point-right-bottom',
        name: 'link-point-right-bottom'
      });
    }
  },
  getPath: function getPath(cfg) {
    var size = this.getSize(cfg);
    var outerR = size[0];
    var defaultInnerR = outerR * 3 / 8;
    var innerR = cfg.innerR || defaultInnerR;
    var path = [];

    for (var i = 0; i < 5; i++) {
      var x1 = Math.cos((18 + 72 * i) / 180 * Math.PI) * outerR;
      var y1 = Math.sin((18 + 72 * i) / 180 * Math.PI) * outerR;
      var x2 = Math.cos((54 + 72 * i) / 180 * Math.PI) * innerR;
      var y2 = Math.sin((54 + 72 * i) / 180 * Math.PI) * innerR;

      if (i === 0) {
        path.push(['M', x1, -y1]);
      } else {
        path.push(['L', x1, -y1]);
      }

      path.push(['L', x2, -y2]);
    }

    path.push(['Z']);
    return path;
  },

  /**
   * ????????????????????????????????????????????????????????????
   * @param {Object} cfg ??????????????????
   * @return {Object} ???????????????
   */
  getShapeStyle: function getShapeStyle(cfg) {
    var defaultStyle = this.getOptions(cfg).style;
    var strokeStyle = {
      stroke: cfg.color
    }; // ???????????????color??????????????????????????? stroke ???????????? cfg ?????? stroke ?????????????????????

    var style = (0, _util.mix)({}, defaultStyle, strokeStyle);
    var path = this.getPath(cfg);
    var styles = (0, _tslib.__assign)({
      path: path
    }, style);
    return styles;
  },
  update: function update(cfg, item) {
    var group = item.getContainer(); // ???????????? cfg ??????????????? cfg.style ????????????????????????

    var defaultStyle = this.getOptions({}).style;
    var path = this.getPath(cfg); // ????????????????????????????????????????????????????????????????????? cfg ???????????????????????? cfg ????????????????????????

    var strokeStyle = {
      stroke: cfg.color,
      path: path
    }; // ??? getShapeStyle ???????????????update ??????????????????????????? style ??????????????????????????????????????????????????????????????????????????????????????????

    var keyShape = item.get('keyShape');
    var style = (0, _util.mix)({}, defaultStyle, keyShape.attr(), strokeStyle);
    style = (0, _util.mix)(style, cfg.style);
    this.updateShape(cfg, item, style, true);
    this.updateLinkPoints(cfg, group);
  },

  /**
   * ??????linkPoints
   * @param {Object} cfg ?????????????????????
   * @param {Group} group Item?????????group
   */
  updateLinkPoints: function updateLinkPoints(cfg, group) {
    var defaultLinkPoints = this.getOptions({}).linkPoints;
    var markLeft = group.find(function (element) {
      return element.get('className') === 'link-point-left';
    });
    var markRight = group.find(function (element) {
      return element.get('className') === 'link-point-right';
    });
    var markTop = group.find(function (element) {
      return element.get('className') === 'link-point-top';
    });
    var markLeftBottom = group.find(function (element) {
      return element.get('className') === 'link-point-left-bottom';
    });
    var markRightBottom = group.find(function (element) {
      return element.get('className') === 'link-point-right-bottom';
    });
    var currentLinkPoints = defaultLinkPoints;
    var existLinkPoint = markLeft || markRight || markTop || markLeftBottom || markRightBottom;

    if (existLinkPoint) {
      currentLinkPoints = existLinkPoint.attr();
    }

    var linkPoints = (0, _util.mix)({}, currentLinkPoints, cfg.linkPoints);
    var markFill = linkPoints.fill,
        markStroke = linkPoints.stroke,
        borderWidth = linkPoints.lineWidth;
    var markSize = linkPoints.size / 2;
    if (!markSize) markSize = linkPoints.r;

    var _a = cfg.linkPoints ? cfg.linkPoints : {
      left: undefined,
      right: undefined,
      top: undefined,
      leftBottom: undefined,
      rightBottom: undefined
    },
        left = _a.left,
        right = _a.right,
        top = _a.top,
        leftBottom = _a.leftBottom,
        rightBottom = _a.rightBottom;

    var size = this.getSize(cfg);
    var outerR = size[0];
    var styles = {
      r: markSize,
      fill: markFill,
      stroke: markStroke,
      lineWidth: borderWidth
    };
    var x = Math.cos((18 + 72 * 0) / 180 * Math.PI) * outerR;
    var y = Math.sin((18 + 72 * 0) / 180 * Math.PI) * outerR;

    if (markRight) {
      if (!right && right !== undefined) {
        markRight.remove();
      } else {
        markRight.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
          x: x,
          y: -y
        }));
      }
    } else if (right) {
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
          x: x,
          y: -y
        }),
        className: 'link-point-right',
        name: 'link-point-right',
        isAnchorPoint: true
      });
    }

    x = Math.cos((18 + 72 * 1) / 180 * Math.PI) * outerR;
    y = Math.sin((18 + 72 * 1) / 180 * Math.PI) * outerR;

    if (markTop) {
      if (!top && top !== undefined) {
        markTop.remove();
      } else {
        markTop.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
          x: x,
          y: -y
        }));
      }
    } else if (top) {
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
          x: x,
          y: -y
        }),
        className: 'link-point-top',
        name: 'link-point-top',
        isAnchorPoint: true
      });
    }

    x = Math.cos((18 + 72 * 2) / 180 * Math.PI) * outerR;
    y = Math.sin((18 + 72 * 2) / 180 * Math.PI) * outerR;

    if (markLeft) {
      if (!left && left !== undefined) {
        markLeft.remove();
      } else {
        markLeft.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
          x: x,
          y: -y
        }));
      }
    } else if (left) {
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
          x: x,
          y: -y
        }),
        className: 'link-point-left',
        name: 'link-point-left',
        isAnchorPoint: true
      });
    }

    x = Math.cos((18 + 72 * 3) / 180 * Math.PI) * outerR;
    y = Math.sin((18 + 72 * 3) / 180 * Math.PI) * outerR;

    if (markLeftBottom) {
      if (!leftBottom && leftBottom !== undefined) {
        markLeftBottom.remove();
      } else {
        markLeftBottom.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
          x: x,
          y: -y
        }));
      }
    } else if (leftBottom) {
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
          x: x,
          y: -y
        }),
        className: 'link-point-left-bottom',
        name: 'link-point-left-bottom',
        isAnchorPoint: true
      });
    }

    x = Math.cos((18 + 72 * 4) / 180 * Math.PI) * outerR;
    y = Math.sin((18 + 72 * 4) / 180 * Math.PI) * outerR;

    if (markRightBottom) {
      if (!rightBottom && rightBottom !== undefined) {
        markLeftBottom.remove();
      } else {
        markRightBottom.attr((0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
          x: x,
          y: -y
        }));
      }
    } else if (rightBottom) {
      group.addShape('circle', {
        attrs: (0, _tslib.__assign)((0, _tslib.__assign)({}, styles), {
          x: x,
          y: -y
        }),
        className: 'link-point-right-bottom',
        name: 'link-point-right-bottom',
        isAnchorPoint: true
      });
    }
  }
}, 'single-node');
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171360, function(require, module, exports) {


var _tslib = require("tslib");

var _f6Core = require("@antv/f6-core");

var _util = require("@antv/util");

var defaultSubjectColors = _f6Core.Util.defaultSubjectColors; // ????????????

(0, _f6Core.registerNode)('donut', {
  // ???????????????????????????
  options: {
    size: _f6Core.BaseGlobal.defaultNode.size,
    style: {
      x: 0,
      y: 0,
      stroke: _f6Core.BaseGlobal.defaultNode.style.stroke,
      fill: _f6Core.BaseGlobal.defaultNode.style.fill,
      lineWidth: _f6Core.BaseGlobal.defaultNode.style.lineWidth
    },
    labelCfg: {
      style: {
        fill: _f6Core.BaseGlobal.nodeLabel.style.fill,
        fontSize: _f6Core.BaseGlobal.nodeLabel.style.fontSize
      }
    },
    // ?????????????????????????????????????????????circle??????
    linkPoints: {
      top: false,
      right: false,
      bottom: false,
      left: false,
      // circle?????????
      size: _f6Core.BaseGlobal.defaultNode.linkPoints.size,
      lineWidth: _f6Core.BaseGlobal.defaultNode.linkPoints.lineWidth,
      fill: _f6Core.BaseGlobal.defaultNode.linkPoints.fill,
      stroke: _f6Core.BaseGlobal.defaultNode.linkPoints.stroke
    },
    // ?????????icon??????
    icon: {
      // ????????????icon????????? false ????????????icon
      show: false,
      // icon???????????????????????????
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg',
      width: 20,
      height: 20
    },
    stateStyles: (0, _tslib.__assign)({}, _f6Core.BaseGlobal.nodeStateStyles)
  },
  shapeType: 'circle',
  // ????????????
  labelPosition: 'center',
  drawShape: function drawShape(cfg, group) {
    var _a = this.getOptions(cfg).icon,
        defaultIcon = _a === void 0 ? {} : _a;
    var style = this.getShapeStyle(cfg);
    var icon = (0, _util.deepMix)({}, defaultIcon, cfg.icon);
    var keyShape = group.addShape('circle', {
      attrs: style,
      className: this.type + "-keyShape",
      draggable: true,
      name: this.type + "-keyShape"
    });
    var width = icon.width,
        height = icon.height,
        show = icon.show,
        text = icon.text;

    if (show) {
      if (text) {
        group.addShape('text', {
          attrs: (0, _tslib.__assign)({
            x: 0,
            y: 0,
            fontSize: 12,
            fill: '#000',
            stroke: '#000',
            textBaseline: 'middle',
            textAlign: 'center'
          }, icon),
          className: this.type + "-icon",
          name: this.type + "-icon",
          draggable: true
        });
      } else {
        group.addShape('image', {
          attrs: (0, _tslib.__assign)({
            x: -width / 2,
            y: -height / 2
          }, icon),
          className: this.type + "-icon",
          name: this.type + "-icon",
          draggable: true
        });
      }
    }

    var donutR = keyShape.attr('r');
    var innerR = 0.6 * donutR; // ????????????????????????

    var arcR = (donutR + innerR) / 2; // ???????????????????????????????????????

    var _b = cfg,
        _c = _b.donutAttrs,
        donutAttrs = _c === void 0 ? {} : _c,
        _d = _b.donutColorMap,
        donutColorMap = _d === void 0 ? {} : _d;
    var attrNum = Object.keys(donutAttrs).length;

    if (donutAttrs && attrNum > 1) {
      var attrs_1 = [];
      var totalValue_1 = 0;
      Object.keys(donutAttrs).forEach(function (name) {
        var value = donutAttrs[name] || 0;
        if (!(0, _util.isNumber)(value)) return;
        attrs_1.push({
          key: name,
          value: value,
          color: donutColorMap[name]
        });
        totalValue_1 += value;
      });

      if (totalValue_1) {
        var lineWidth_1 = donutR - innerR;

        if (attrNum === 1) {
          group.addShape('circle', {
            attrs: {
              r: arcR,
              x: 0,
              y: 0,
              stroke: attrs_1[0].color || defaultSubjectColors[0],
              lineWidth: lineWidth_1
            },
            name: "fan-shape-0"
          });
          return;
        }

        var arcBegin_1 = [arcR, 0];
        var beginAngle_1 = 0;
        attrs_1.forEach(function (attr, i) {
          var percent = attr.value / totalValue_1;
          if (percent < 0.001) return;
          if (percent > 0.999) percent = 1;

          if (percent === 1) {
            group.addShape('circle', {
              attrs: {
                r: arcR,
                x: 0,
                y: 0,
                stroke: attr.color || defaultSubjectColors[i % defaultSubjectColors.length],
                lineWidth: lineWidth_1
              },
              name: "fan-shape-" + i
            });
            return;
          }

          attr.percent = percent;
          attr.angle = percent * Math.PI * 2;
          attr.beginAgnle = beginAngle_1;
          beginAngle_1 += attr.angle;
          attr.endAngle = beginAngle_1;
          attr.arcBegin = arcBegin_1;
          attr.arcEnd = [arcR * Math.cos(attr.endAngle), -arcR * Math.sin(attr.endAngle)];
          var isBig = attr.angle > Math.PI ? 1 : 0;
          var path = [['M', attr.arcBegin[0], attr.arcBegin[1]], ['A', arcR, arcR, 0, isBig, 0, attr.arcEnd[0], attr.arcEnd[1]], ['L', attr.arcEnd[0], attr.arcEnd[1]]];
          group.addShape('path', {
            attrs: {
              path: path,
              lineWidth: lineWidth_1,
              stroke: attr.color || defaultSubjectColors[i % defaultSubjectColors.length]
            },
            name: "fan-shape-" + i
          });
          arcBegin_1 = attr.arcEnd;
        });
      }
    }

    this.drawLinkPoints(cfg, group);
    return keyShape;
  },
  update: undefined
}, 'circle');
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171361, function(require, module, exports) {


require("./polyline");
}, function(modId) { var map = {"./polyline":1661774171362}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171362, function(require, module, exports) {


var _tslib = require("tslib");

var _util = require("@antv/util");

var _f6Core = require("@antv/f6-core");

var _polylineUtil = require("./polyline-util");

var _router = require("./router");

// ??????
(0, _f6Core.registerEdge)('polyline', {
  options: {
    color: _f6Core.BaseGlobal.defaultEdge.color,
    size: _f6Core.BaseGlobal.defaultEdge.size,
    style: {
      radius: 0,
      offset: 15,
      x: 0,
      y: 0,
      stroke: _f6Core.BaseGlobal.defaultEdge.style.stroke,
      lineAppendWidth: _f6Core.BaseGlobal.defaultEdge.style.lineAppendWidth
    },
    // ??????????????????
    labelCfg: {
      style: {
        fill: _f6Core.BaseGlobal.edgeLabel.style.fill,
        fontSize: _f6Core.BaseGlobal.edgeLabel.style.fontSize
      }
    },
    routeCfg: {
      obstacles: [],
      maxAllowedDirectionChange: Math.PI,
      maximumLoops: 500,
      gridSize: 10 // ????????????

    },
    stateStyles: (0, _tslib.__assign)({}, _f6Core.BaseGlobal.edgeStateStyles)
  },
  shapeType: 'polyline',
  // ????????????
  labelPosition: 'center',
  drawShape: function drawShape(cfg, group) {
    var shapeStyle = this.getShapeStyle(cfg);
    if (shapeStyle.radius === 0) delete shapeStyle.radius;
    var keyShape = group.addShape('path', {
      className: 'edge-shape',
      name: 'edge-shape',
      attrs: shapeStyle
    });
    return keyShape;
  },
  getShapeStyle: function getShapeStyle(cfg) {
    var defaultStyle = this.options.style;
    var strokeStyle = {
      stroke: cfg.color
    };
    var style = (0, _util.mix)({}, defaultStyle, strokeStyle, cfg.style);
    cfg = this.getPathPoints(cfg);
    this.radius = style.radius;
    this.offset = style.offset;
    var startPoint = cfg.startPoint,
        endPoint = cfg.endPoint;
    var controlPoints = this.getControlPoints(cfg);
    var points = [startPoint]; // ???????????????
    // ???????????????

    if (controlPoints) {
      points = points.concat(controlPoints);
    } // ???????????????


    points.push(endPoint);
    var source = cfg.sourceNode;
    var target = cfg.targetNode;
    var radius = style.radius;
    var defaultRouteCfg = this.options.routeCfg;
    var routeCfg = (0, _util.mix)({}, defaultRouteCfg, cfg.routeCfg);
    routeCfg.offset = style.offset;
    var path = this.getPath(points, source, target, radius, routeCfg);

    if ((0, _util.isArray)(path) && path.length <= 1 || (0, _util.isString)(path) && path.indexOf('L') === -1) {
      path = 'M0 0, L0 0';
    }

    if (isNaN(startPoint.x) || isNaN(startPoint.y) || isNaN(endPoint.x) || isNaN(endPoint.y)) {
      path = 'M0 0, L0 0';
    }

    var attrs = (0, _util.mix)({}, _f6Core.BaseGlobal.defaultEdge.style, style, {
      lineWidth: cfg.size,
      path: path
    });
    return attrs;
  },
  updateShapeStyle: function updateShapeStyle(cfg, item) {
    var group = item.getContainer();
    if (!item.isVisible()) return;
    var strokeStyle = {
      stroke: cfg.color
    };
    var shape = group.find(function (element) {
      return element.get('className') === 'edge-shape';
    }) || item.getKeyShape();
    var size = cfg.size;
    cfg = this.getPathPoints(cfg);
    var startPoint = cfg.startPoint,
        endPoint = cfg.endPoint;
    var controlPoints = this.getControlPoints(cfg); // || cfg.controlPoints;

    var points = [startPoint]; // ???????????????
    // ???????????????

    if (controlPoints) {
      points = points.concat(controlPoints);
    } // ???????????????


    points.push(endPoint);
    var currentAttr = shape.attr();
    var previousStyle = (0, _util.mix)({}, strokeStyle, currentAttr, cfg.style);
    var source = cfg.sourceNode;
    var target = cfg.targetNode;
    var radius = previousStyle.radius;
    var defaultRouteCfg = this.options.routeCfg;
    var routeCfg = (0, _util.mix)({}, defaultRouteCfg, cfg.routeCfg);
    routeCfg.offset = previousStyle.offset;
    var path = this.getPath(points, source, target, radius, routeCfg);

    if ((0, _util.isArray)(path) && path.length <= 1 || (0, _util.isString)(path) && path.indexOf('L') === -1) {
      path = 'M0 0, L0 0';
    }

    if (isNaN(startPoint.x) || isNaN(startPoint.y) || isNaN(endPoint.x) || isNaN(endPoint.y)) {
      path = 'M0 0, L0 0';
    }

    if (currentAttr.endArrow && previousStyle.endArrow === false) {
      cfg.style.endArrow = {
        path: ''
      };
    }

    if (currentAttr.startArrow && previousStyle.startArrow === false) {
      cfg.style.startArrow = {
        path: ''
      };
    }

    var style = (0, _util.mix)(strokeStyle, shape.attr(), {
      lineWidth: size,
      path: path
    }, cfg.style);

    if (shape) {
      shape.attr(style);
    }
  },
  getPath: function getPath(points, source, target, radius, routeCfg) {
    var offset = routeCfg.offset,
        simple = routeCfg.simple; // ??????????????????

    if (!offset || points.length > 2) {
      if (radius) {
        return (0, _polylineUtil.getPathWithBorderRadiusByPolyline)(points, radius);
      }

      var pathArray_1 = [];
      (0, _util.each)(points, function (point, index) {
        if (index === 0) {
          pathArray_1.push(['M', point.x, point.y]);
        } else {
          pathArray_1.push(['L', point.x, point.y]);
        }
      });
      return pathArray_1;
    } // ??????????????????


    var polylinePoints = simple ? (0, _polylineUtil.getPolylinePoints)(points[points.length - 1], points[0], target, source, offset) : (0, _router.pathFinder)(points[0], points[points.length - 1], source, target, routeCfg);
    if (!polylinePoints || !polylinePoints.length) return 'M0 0, L0 0';

    if (radius) {
      var res_1 = (0, _polylineUtil.getPathWithBorderRadiusByPolyline)(polylinePoints, radius);
      return res_1;
    }

    var res = _f6Core.Util.pointsToPolygon(polylinePoints);

    return res;
  }
}, 'single-edge');
}, function(modId) { var map = {"./polyline-util":1661774171363,"./router":1661774171364}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171363, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPolylinePoints = exports.getPathWithBorderRadiusByPolyline = exports.getBorderRadiusPoints = exports.isBending = exports.pathFinder = exports.getNeighborPoints = exports.isSegmentCrossingBBox = exports.isSegmentsIntersected = exports.removeFrom = exports.reconstructPath = exports.heuristicCostEstimate = exports._costByPoints = exports.distance = exports.getBBoxCrossPointsByPoint = exports.getBBoxYCrossPoints = exports.getBBoxXCrossPoints = exports.isPointOutsideBBox = exports.getPointsFromBBox = exports.mergeBBox = exports.getExpandedBBoxPoint = exports.isHorizontalPort = exports.getExpandedBBox = exports.getSimplePolyline = exports.simplifyPolyline = exports.filterConnectPoints = exports.isBBoxesOverlapping = exports.getBBoxFromPoints = exports.getBBoxFromPoint = void 0;

var getBBoxFromPoint = function getBBoxFromPoint(point) {
  var x = point.x,
      y = point.y;
  return {
    x: x,
    y: y,
    centerX: x,
    centerY: y,
    minX: x,
    minY: y,
    maxX: x,
    maxY: y,
    height: 0,
    width: 0
  };
};

exports.getBBoxFromPoint = getBBoxFromPoint;

var getBBoxFromPoints = function getBBoxFromPoints(points) {
  if (points === void 0) {
    points = [];
  }

  var xs = [];
  var ys = [];
  points.forEach(function (p) {
    xs.push(p.x);
    ys.push(p.y);
  });
  var minX = Math.min.apply(Math, xs);
  var maxX = Math.max.apply(Math, xs);
  var minY = Math.min.apply(Math, ys);
  var maxY = Math.max.apply(Math, ys);
  return {
    centerX: (minX + maxX) / 2,
    centerY: (minY + maxY) / 2,
    maxX: maxX,
    maxY: maxY,
    minX: minX,
    minY: minY,
    height: maxY - minY,
    width: maxX - minX
  };
};

exports.getBBoxFromPoints = getBBoxFromPoints;

var isBBoxesOverlapping = function isBBoxesOverlapping(b1, b2) {
  return Math.abs(b1.centerX - b2.centerX) * 2 < b1.width + b2.width && Math.abs(b1.centerY - b2.centerY) * 2 < b1.height + b2.height;
};

exports.isBBoxesOverlapping = isBBoxesOverlapping;

var filterConnectPoints = function filterConnectPoints(points) {
  // pre-process: remove duplicated points
  var result = [];
  var pointsMap = {};
  var pointsLength = points.length;

  for (var i = pointsLength - 1; i >= 0; i--) {
    var p = points[i];
    p.id = p.x + "|||" + p.y;
    pointsMap[p.id] = p;
    result.push(p);
  }

  return result;
};

exports.filterConnectPoints = filterConnectPoints;

var simplifyPolyline = function simplifyPolyline(points) {
  return filterConnectPoints(points);
};

exports.simplifyPolyline = simplifyPolyline;

var getSimplePolyline = function getSimplePolyline(sPoint, tPoint) {
  return [sPoint, {
    x: sPoint.x,
    y: tPoint.y
  }, tPoint];
};

exports.getSimplePolyline = getSimplePolyline;

var getExpandedBBox = function getExpandedBBox(bbox, offset) {
  if (bbox.width || bbox.height) {
    return {
      centerX: bbox.centerX,
      centerY: bbox.centerY,
      minX: bbox.minX - offset,
      minY: bbox.minY - offset,
      maxX: bbox.maxX + offset,
      maxY: bbox.maxY + offset,
      height: bbox.height + 2 * offset,
      width: bbox.width + 2 * offset
    };
  } // when it is a point


  return bbox;
};

exports.getExpandedBBox = getExpandedBBox;

var isHorizontalPort = function isHorizontalPort(port, bbox) {
  var dx = Math.abs(port.x - bbox.centerX);
  var dy = Math.abs(port.y - bbox.centerY);
  if (dx === 0 && dy === 0) return 0;
  return dx / bbox.width > dy / bbox.height;
};

exports.isHorizontalPort = isHorizontalPort;

var getExpandedBBoxPoint = function getExpandedBBoxPoint(bbox, // ??????????????? bbox ????????? offset ?????? bbox????????? gridSize ?????????
point, // ??? gridSize ????????????????????????anchorPoint???
anotherPoint) {
  var isHorizontal = isHorizontalPort(point, bbox);

  if (isHorizontal === 0) {
    // ??????????????????????????????linkCenter: true??????????????????????????????????????????????????????
    var x = bbox.centerX;
    var y = bbox.centerY;

    if (anotherPoint.y < point.y) {
      // ??????????????????/?????????????????????????????????
      y = bbox.minY;
    } else if (anotherPoint.x > point.x) {
      // ????????????????????????????????????
      x = bbox.maxX;
    } else if (anotherPoint.x < point.x) {
      // ????????????????????????????????????
      x = bbox.minX;
    } else if (anotherPoint.x === point.x) {
      // ?????????????????????????????????
      y = bbox.maxY;
    }

    return {
      x: x,
      y: y
    };
  }

  if (isHorizontal) {
    return {
      x: point.x > bbox.centerX ? bbox.maxX : bbox.minX,
      y: point.y
    };
  }

  return {
    x: point.x,
    y: point.y > bbox.centerY ? bbox.maxY : bbox.minY
  };
};
/**
 *
 * @param b1
 * @param b2
 */


exports.getExpandedBBoxPoint = getExpandedBBoxPoint;

var mergeBBox = function mergeBBox(b1, b2) {
  var minX = Math.min(b1.minX, b2.minX);
  var minY = Math.min(b1.minY, b2.minY);
  var maxX = Math.max(b1.maxX, b2.maxX);
  var maxY = Math.max(b1.maxY, b2.maxY);
  return {
    centerX: (minX + maxX) / 2,
    centerY: (minY + maxY) / 2,
    minX: minX,
    minY: minY,
    maxX: maxX,
    maxY: maxY,
    height: maxY - minY,
    width: maxX - minX
  };
};

exports.mergeBBox = mergeBBox;

var getPointsFromBBox = function getPointsFromBBox(bbox) {
  // anticlockwise
  // const { minX, minY, maxX, maxY } = bbox;
  return [{
    x: bbox.minX,
    y: bbox.minY
  }, {
    x: bbox.maxX,
    y: bbox.minY
  }, {
    x: bbox.maxX,
    y: bbox.maxY
  }, {
    x: bbox.minX,
    y: bbox.maxY
  }];
};

exports.getPointsFromBBox = getPointsFromBBox;

var isPointOutsideBBox = function isPointOutsideBBox(point, bbox) {
  var x = point.x,
      y = point.y;
  return x < bbox.minX || x > bbox.maxX || y < bbox.minY || y > bbox.maxY;
};

exports.isPointOutsideBBox = isPointOutsideBBox;

var getBBoxXCrossPoints = function getBBoxXCrossPoints(bbox, x) {
  if (x < bbox.minX || x > bbox.maxX) {
    return [];
  }

  return [{
    x: x,
    y: bbox.minY
  }, {
    x: x,
    y: bbox.maxY
  }];
};

exports.getBBoxXCrossPoints = getBBoxXCrossPoints;

var getBBoxYCrossPoints = function getBBoxYCrossPoints(bbox, y) {
  if (y < bbox.minY || y > bbox.maxY) {
    return [];
  }

  return [{
    x: bbox.minX,
    y: y
  }, {
    x: bbox.maxX,
    y: y
  }];
};

exports.getBBoxYCrossPoints = getBBoxYCrossPoints;

var getBBoxCrossPointsByPoint = function getBBoxCrossPointsByPoint(bbox, point) {
  return getBBoxXCrossPoints(bbox, point.x).concat(getBBoxYCrossPoints(bbox, point.y));
};
/**
 * ???????????????
 */


exports.getBBoxCrossPointsByPoint = getBBoxCrossPointsByPoint;

var distance = function distance(p1, p2) {
  return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
};
/**
 * ?????? points ?????????????????? x ??? p ?????????????????? -2???y ???
 * ?????????????????? points ?????????????????? / ??????????????????
 */
// eslint-disable-next-line @typescript-eslint/naming-convention


exports.distance = distance;

var _costByPoints = function _costByPoints(p, points) {
  var offset = -2;
  var result = 0;
  points.forEach(function (point) {
    if (point) {
      if (p.x === point.x) {
        result += offset;
      }

      if (p.y === point.y) {
        result += offset;
      }
    }
  });
  return result;
};
/**
 * ps ?????? p ??? pt ???????????????????????????????????????????????????
 */


exports._costByPoints = _costByPoints;

var heuristicCostEstimate = function heuristicCostEstimate(p, ps, pt, source, target) {
  return distance(p, ps) + distance(p, pt) + _costByPoints(p, [ps, pt, source, target]);
};

exports.heuristicCostEstimate = heuristicCostEstimate;

var reconstructPath = function reconstructPath(pathPoints, pointById, cameFrom, currentId, iterator) {
  if (iterator === void 0) {
    iterator = 0;
  }

  pathPoints.unshift(pointById[currentId]);

  if (cameFrom[currentId] && cameFrom[currentId] !== currentId && iterator <= 100) {
    reconstructPath(pathPoints, pointById, cameFrom, cameFrom[currentId], iterator + 1);
  }
};
/**
 * ??? arr ????????? item
 */


exports.reconstructPath = reconstructPath;

var removeFrom = function removeFrom(arr, item) {
  var index = arr.indexOf(item);

  if (index > -1) {
    arr.splice(index, 1);
  }
};

exports.removeFrom = removeFrom;

var isSegmentsIntersected = function isSegmentsIntersected(p0, p1, p2, p3) {
  var v1x = p2.x - p0.x;
  var v1y = p2.y - p0.y;
  var v2x = p3.x - p0.x;
  var v2y = p3.y - p0.y;
  var v3x = p2.x - p1.x;
  var v3y = p2.y - p1.y;
  var v4x = p3.x - p1.x;
  var v4y = p3.y - p1.y;
  var pd1 = v1x * v2y - v1y * v2x;
  var pd2 = v3x * v4y - v3y * v4x;
  var pd3 = v1x * v3y - v1y * v3x;
  var pd4 = v2x * v4y - v2y * v4x;
  return pd1 * pd2 <= 0 && pd3 * pd4 <= 0;
};

exports.isSegmentsIntersected = isSegmentsIntersected;

var isSegmentCrossingBBox = function isSegmentCrossingBBox(p1, p2, bbox) {
  if (bbox.width || bbox.height) {
    var _a = getPointsFromBBox(bbox),
        pa = _a[0],
        pb = _a[1],
        pc = _a[2],
        pd = _a[3];

    return isSegmentsIntersected(p1, p2, pa, pb) || isSegmentsIntersected(p1, p2, pa, pd) || isSegmentsIntersected(p1, p2, pb, pc) || isSegmentsIntersected(p1, p2, pc, pd);
  }

  return false;
};
/**
 * ??? points ??????????????? x ??? y ??? point ??? x ??? y ??????????????? point ??????????????? bbox1 ??? bbox2 ??????
 */


exports.isSegmentCrossingBBox = isSegmentCrossingBBox;

var getNeighborPoints = function getNeighborPoints(points, point, bbox1, bbox2) {
  var neighbors = [];
  points.forEach(function (p) {
    if (p === point) return;

    if (p.x === point.x || p.y === point.y) {
      if (isSegmentCrossingBBox(p, point, bbox1) || isSegmentCrossingBBox(p, point, bbox2)) return;
      neighbors.push(p);
    }
  });
  return filterConnectPoints(neighbors);
};

exports.getNeighborPoints = getNeighborPoints;

var pathFinder = function pathFinder(points, start, goal, sBBox, tBBox, os, ot) {
  // A-Star Algorithm
  var closedSet = [];
  var openSet = [start];
  var cameFrom = {};
  var gScore = {}; // all default values are Infinity

  var fScore = {}; // all default values are Infinity

  gScore[start.id] = 0;
  fScore[start.id] = heuristicCostEstimate(start, goal, start);
  var pointById = {};
  points.forEach(function (p) {
    pointById[p.id] = p;
  });
  var current, lowestFScore;

  while (openSet.length) {
    current = undefined;
    lowestFScore = Infinity; // ?????? openSet ??? fScore ????????????

    openSet.forEach(function (p) {
      if (fScore[p.id] <= lowestFScore) {
        lowestFScore = fScore[p.id];
        current = p;
      }
    }); // ??? openSet ??? fScore ????????????????????????

    if (current === goal) {
      // ending condition
      var pathPoints = [];
      reconstructPath(pathPoints, pointById, cameFrom, goal.id);
      return pathPoints;
    }

    removeFrom(openSet, current);
    closedSet.push(current);
    getNeighborPoints(points, current, sBBox, tBBox).forEach(function (neighbor) {
      if (closedSet.indexOf(neighbor) !== -1) {
        return;
      }

      if (openSet.indexOf(neighbor) === -1) {
        openSet.push(neighbor);
      }

      var tentativeGScore = fScore[current.id] + distance(current, neighbor); // + distance(neighbor, goal);

      if (gScore[neighbor.id] && tentativeGScore >= gScore[neighbor.id]) {
        return;
      }

      cameFrom[neighbor.id] = current.id;
      gScore[neighbor.id] = tentativeGScore;
      fScore[neighbor.id] = gScore[neighbor.id] + heuristicCostEstimate(neighbor, goal, start, os, ot);
    });
  } // throw new Error('Cannot find path');


  return [start, goal];
};

exports.pathFinder = pathFinder;

var isBending = function isBending(p0, p1, p2) {
  return !(p0.x === p1.x && p1.x === p2.x || p0.y === p1.y && p1.y === p2.y);
};

exports.isBending = isBending;

var getBorderRadiusPoints = function getBorderRadiusPoints(p0, p1, p2, r) {
  var d0 = distance(p0, p1);
  var d1 = distance(p2, p1);

  if (d0 < r) {
    r = d0;
  }

  if (d1 < r) {
    r = d1;
  }

  var ps = {
    x: p1.x - r / d0 * (p1.x - p0.x),
    y: p1.y - r / d0 * (p1.y - p0.y)
  };
  var pt = {
    x: p1.x - r / d1 * (p1.x - p2.x),
    y: p1.y - r / d1 * (p1.y - p2.y)
  };
  return [ps, pt];
};

exports.getBorderRadiusPoints = getBorderRadiusPoints;

var getPathWithBorderRadiusByPolyline = function getPathWithBorderRadiusByPolyline(points, borderRadius) {
  var pathSegments = [];
  var startPoint = points[0];
  pathSegments.push("M" + startPoint.x + " " + startPoint.y);
  points.forEach(function (p, i) {
    var p1 = points[i + 1];
    var p2 = points[i + 2];

    if (p1 && p2) {
      if (isBending(p, p1, p2)) {
        var _a = getBorderRadiusPoints(p, p1, p2, borderRadius),
            ps = _a[0],
            pt = _a[1];

        pathSegments.push("L" + ps.x + " " + ps.y);
        pathSegments.push("Q" + p1.x + " " + p1.y + " " + pt.x + " " + pt.y);
        pathSegments.push("L" + pt.x + " " + pt.y);
      } else {
        pathSegments.push("L" + p1.x + " " + p1.y);
      }
    } else if (p1) {
      pathSegments.push("L" + p1.x + " " + p1.y);
    }
  });
  return pathSegments.join('');
};

exports.getPathWithBorderRadiusByPolyline = getPathWithBorderRadiusByPolyline;

var getPolylinePoints = function getPolylinePoints(start, end, sNode, tNode, offset) {
  var sBBox, tBBox;

  if (!sNode || !sNode.getType()) {
    sBBox = getBBoxFromPoint(start);
  } else if (sNode.getType() === 'combo') {
    var sNodeKeyShape = sNode.getKeyShape();
    sBBox = sNodeKeyShape.getCanvasBBox() || getBBoxFromPoint(start);
    sBBox.centerX = (sBBox.minX + sBBox.maxX) / 2;
    sBBox.centerY = (sBBox.minY + sBBox.maxY) / 2;
  } else {
    sBBox = sNode.getBBox();
  }

  if (!tNode || !tNode.getType()) {
    tBBox = getBBoxFromPoint(end);
  } else if (tNode.getType() === 'combo') {
    var tKeyShapeBBox = tNode.getKeyShape().getBBox();

    if (tKeyShapeBBox) {
      var _a = tNode.getModel(),
          tx = _a.x,
          ty = _a.y;

      tBBox = {
        x: tx,
        y: ty,
        width: tKeyShapeBBox.width,
        height: tKeyShapeBBox.height,
        minX: tKeyShapeBBox.minX + tx,
        maxX: tKeyShapeBBox.maxX + tx,
        minY: tKeyShapeBBox.minY + ty,
        maxY: tKeyShapeBBox.maxY + ty
      };
      tBBox.centerX = (tBBox.minX + tBBox.maxX) / 2;
      tBBox.centerY = (tBBox.minY + tBBox.maxY) / 2;
    } else {
      tBBox = getBBoxFromPoint(end);
    }
  } else {
    tBBox = tNode && tNode.getBBox();
  } // if (isBBoxesOverlapping(sBBox, tBBox)) {
  //   // source and target nodes are overlapping
  //   return simplifyPolyline(getSimplePolyline(start, end));
  // }


  var sxBBox = getExpandedBBox(sBBox, offset);
  var txBBox = getExpandedBBox(tBBox, offset); // if (isBBoxesOverlapping(sxBBox, txBBox)) {
  //   // the expanded bounding boxes of source and target nodes are overlapping
  //   return simplifyPolyline(getSimplePolyline(start, end));
  // }

  var sPoint = getExpandedBBoxPoint(sxBBox, start, end);
  var tPoint = getExpandedBBoxPoint(txBBox, end, start);
  var lineBBox = getBBoxFromPoints([sPoint, tPoint]);
  var sMixBBox = mergeBBox(sxBBox, lineBBox);
  var tMixBBox = mergeBBox(txBBox, lineBBox);
  var connectPoints = [];
  connectPoints = connectPoints.concat(getPointsFromBBox(sMixBBox)).concat(getPointsFromBBox(tMixBBox));
  var centerPoint = {
    x: (start.x + end.x) / 2,
    y: (start.y + end.y) / 2
  };
  [lineBBox, sMixBBox, tMixBBox].forEach(function (bbox) {
    connectPoints = connectPoints.concat(getBBoxCrossPointsByPoint(bbox, centerPoint).filter(function (p) {
      return isPointOutsideBBox(p, sxBBox) && isPointOutsideBBox(p, txBBox);
    }));
  });
  [{
    x: sPoint.x,
    y: tPoint.y
  }, {
    x: tPoint.x,
    y: sPoint.y
  }].forEach(function (p) {
    // impossible!!
    if (isPointOutsideBBox(p, sxBBox) && isPointOutsideBBox(p, txBBox) // &&
    // isPointInsideBBox(p, sMixBBox) && isPointInsideBBox(p, tMixBBox)
    ) {
        connectPoints.push(p);
      }
  });
  connectPoints.unshift(sPoint);
  connectPoints.push(tPoint); // filter out dulplicated points in connectPoints

  connectPoints = filterConnectPoints(connectPoints); // , sxBBox, txBBox, outerBBox

  var pathPoints = pathFinder(connectPoints, sPoint, tPoint, sBBox, tBBox, start, end);
  pathPoints.unshift(start);
  pathPoints.push(end);
  return simplifyPolyline(pathPoints);
};

exports.getPolylinePoints = getPolylinePoints;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1661774171364, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathFinder = exports.octolinearCfg = void 0;

var _f6Core = require("@antv/f6-core");

var _util = require("@antv/util");

var _polylineUtil = require("./polyline-util");

/**
 * ????????????????????? costFunc, distFunc, constraints ??????????????????????????? router
 * generalRouter: ??????????????????????????????????????????????????????
 * orthogonal: ???????????????????????????????????????4????????????
 * octolinearRouter: ?????????????????????????????????????????????8????????????
 */
var manhattanDist = function manhattanDist(p1, p2) {
  return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
};

var eucliDist = function eucliDist(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
};

var straightPath = function straightPath(start, end) {
  // console.warn('fallbackRoute: straight path');
  return [start, end];
};

var simplePolyline = function simplePolyline(start, end, startNode, endNode, cfg) {
  return (0, _polylineUtil.simplifyPolyline)((0, _polylineUtil.getPolylinePoints)(start, end, startNode, endNode, cfg.offset));
}; // getPolylinePoints


var defaultCfg = {
  offset: 20,
  maxAllowedDirectionChange: Math.PI / 2,
  maximumLoops: 2000,
  gridSize: 10,
  directions: [{
    stepX: 1,
    stepY: 0
  }, {
    stepX: -1,
    stepY: 0
  }, {
    stepX: 0,
    stepY: 1
  }, {
    stepX: 0,
    stepY: -1
  } // top
  ],

  get penalties() {
    return {
      0: 0,
      45: this.gridSize / 2,
      90: this.gridSize / 2
    };
  },

  distFunc: manhattanDist,
  fallbackRoute: simplePolyline
};
var octolinearCfg = {
  maxAllowedDirectionChange: Math.PI / 4,
  // 8 ?????????: ???????????? + 45???????????????
  directions: [{
    stepX: 1,
    stepY: 0
  }, {
    stepX: 1,
    stepY: 1
  }, {
    stepX: 0,
    stepY: 1
  }, {
    stepX: -1,
    stepY: 1
  }, {
    stepX: -1,
    stepY: 0
  }, {
    stepX: -1,
    stepY: -1
  }, {
    stepX: 0,
    stepY: -1
  }, {
    stepX: 1,
    stepY: -1
  }],
  distFunc: eucliDist,
  fallbackRoute: straightPath
};
exports.octolinearCfg = octolinearCfg;

var pos2GridIx = function pos2GridIx(pos, gridSize) {
  var gridIx = Math.round(Math.abs(pos / gridSize));
  var sign = pos < 0 ? -1 : 1;
  return gridIx < 0 ? 0 : sign * gridIx;
};

var getObstacleMap = function getObstacleMap(items, gridSize, offset) {
  var map = {};
  items.forEach(function (item) {
    // create-edge ????????????????????? polyline ??? endNode ??? null
    if (!item) return;
    var bbox = (0, _polylineUtil.getExpandedBBox)(item.getBBox(), offset);

    for (var x = pos2GridIx(bbox.minX, gridSize); x <= pos2GridIx(bbox.maxX, gridSize); x += 1) {
      for (var y = pos2GridIx(bbox.minY, gridSize); y <= pos2GridIx(bbox.maxY, gridSize); y += 1) {
        map[x + "|||" + y] = true;
      }
    }
  });
  return map;
};
/**
 * ????????????????????? p1 ??? p2 ???????????????????????????????????????????????????????????????0?????????????????????????????
 * @param p1 PolyPoint
 * @param p2 PolyPoint
 */


var getDirectionAngle = function getDirectionAngle(p1, p2) {
  var deltaX = p2.x - p1.x;
  var deltaY = p2.y - p1.y;

  if (deltaX || deltaY) {
    return Math.atan2(deltaY, deltaX);
  }

  return 0;
};
/**
 * ??????????????????????????????180??????
 * @param angle1
 * @param angle2
 */


var getAngleDiff = function getAngleDiff(angle1, angle2) {
  var directionChange = Math.abs(angle1 - angle2);
  return directionChange > Math.PI ? 2 * Math.PI - directionChange : directionChange; // return directionChange > 180 ? 360 - directionChange : directionChange;
}; // Path finder //


var estimateCost = function estimateCost(from, endPoints, distFunc) {
  var min = Infinity;

  for (var i = 0, len = endPoints.length; i < len; i++) {
    var cost = distFunc(from, endPoints[i]);

    if (cost < min) {
      min = cost;
    }
  }

  return min;
}; // ???????????? offset ?????? BBox ???????????????


var getBoxPoints = function getBoxPoints(point, // ??? gridSize ????????????????????????anchorPoint???
oriPoint, // ?????? gridSize ?????????????????????anchorPoint???
node, // ??????????????????????????? bbox
anotherPoint, // ???????????? gridSize ?????????????????????
cfg) {
  var points = []; // create-edge ????????????????????????endNode ??? null

  if (!node) {
    return [point];
  }

  var directions = cfg.directions,
      offset = cfg.offset;
  var bbox = node.getBBox();
  var isInside = oriPoint.x > bbox.minX && oriPoint.x < bbox.maxX && oriPoint.y > bbox.minY && oriPoint.y < bbox.maxY;
  var expandBBox = (0, _polylineUtil.getExpandedBBox)(bbox, offset);

  for (var i in expandBBox) {
    expandBBox[i] = pos2GridIx(expandBBox[i], cfg.gridSize);
  }

  if (isInside) {
    // ?????? anchorPoint ????????????????????????????????????????????????
    for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
      var dir = directions_1[_i];
      var bounds = [[{
        x: expandBBox.minX,
        y: expandBBox.minY
      }, {
        x: expandBBox.maxX,
        y: expandBBox.minY
      }], [{
        x: expandBBox.minX,
        y: expandBBox.minY
      }, {
        x: expandBBox.minX,
        y: expandBBox.maxY
      }], [{
        x: expandBBox.maxX,
        y: expandBBox.minY
      }, {
        x: expandBBox.maxX,
        y: expandBBox.maxY
      }], [{
        x: expandBBox.minX,
        y: expandBBox.maxY
      }, {
        x: expandBBox.maxX,
        y: expandBBox.maxY
      }]];

      for (var i = 0; i < 4; i++) {
        var boundLine = bounds[i];

        var insterctP_1 = _f6Core.Util.getLineIntersect(point, {
          x: point.x + dir.stepX * expandBBox.width,
          y: point.y + dir.stepY * expandBBox.height
        }, boundLine[0], boundLine[1]);

        if (insterctP_1 && !(0, _polylineUtil.isSegmentCrossingBBox)(point, insterctP_1, bbox)) {
          insterctP_1.id = insterctP_1.x + "|||" + insterctP_1.y;
          points.push(insterctP_1);
        }
      }
    }

    return points;
  } // ?????? anchorPoint ???????????????????????????????????????


  var insterctP = (0, _polylineUtil.getExpandedBBoxPoint)(expandBBox, point, anotherPoint);
  insterctP.id = insterctP.x + "|||" + insterctP.y;
  return [insterctP];
};

var getDirectionChange = function getDirectionChange(current, neighbor, cameFrom, scaleStartPoint) {
  var directionAngle = getDirectionAngle(current, neighbor);

  if (!cameFrom[current.id]) {
    var startAngle = getDirectionAngle(scaleStartPoint, current);
    return getAngleDiff(startAngle, directionAngle);
  }

  var prevDirectionAngle = getDirectionAngle({
    x: cameFrom[current.id].x,
    y: cameFrom[current.id].y
  }, current);
  return getAngleDiff(prevDirectionAngle, directionAngle);
};

var getControlPoints = function getControlPoints(current, cameFrom, scaleStartPoint, endPoint, startPoint, scaleEndPoint, gridSize) {
  var controlPoints = [endPoint];
  var currentId = current.id;
  var currentX = current.x;
  var currentY = current.y;
  var lastPoint = {
    x: currentX,
    y: currentY,
    id: currentId
  };

  if (getDirectionChange(lastPoint, scaleEndPoint, cameFrom, scaleStartPoint)) {
    // if (scaleEndPoint.x === endPoint.x && scaleEndPoint.y === endPoint.y)
    //   controlPoints.unshift({
    //     x: endPoint.x,
    //     y: endPoint.y
    //   })
    // else
    //   controlPoints.unshift({
    //     x: lastPoint.x * gridSize,
    //     y: lastPoint.y * gridSize,
    //   });
    controlPoints.unshift({
      x: scaleEndPoint.x === endPoint.x ? endPoint.x : lastPoint.x * gridSize,
      y: scaleEndPoint.y === endPoint.y ? endPoint.y : lastPoint.y * gridSize
    });
  }

  while (cameFrom[currentId] && cameFrom[currentId].id !== currentId) {
    var point = {
      x: currentX,
      y: currentY,
      id: currentId
    };
    var preId = cameFrom[currentId].id;
    var preX = cameFrom[currentId].x;
    var preY = cameFrom[currentId].y;
    var prePoint = {
      x: preX,
      y: preY,
      id: preId
    };
    var directionChange = getDirectionChange(prePoint, point, cameFrom, scaleStartPoint);

    if (directionChange) {
      // if (prePoint.x === point.x && prePoint.y === point.y)
      //   controlPoints.unshift({
      //     x: controlPoints[0].x,
      //     y: controlPoints[0].y
      //   })
      // else
      //   controlPoints.unshift({
      //     x: prePoint.x * gridSize,
      //     y: prePoint.y * gridSize,
      //   });
      controlPoints.unshift({
        x: prePoint.x === point.x ? controlPoints[0].x : prePoint.x * gridSize,
        y: prePoint.y === point.y ? controlPoints[0].y : prePoint.y * gridSize
      });
    }

    currentId = preId;
    currentX = preX;
    currentY = preY;
  } // ???startNode??????


  var firstPoint = {
    x: currentX,
    y: currentY,
    id: currentId
  }; // if (firstPoint.x === scaleStartPoint.x && firstPoint.y === scaleStartPoint.y) {
  //   controlPoints[0].x = startPoint.x;
  //   controlPoints[0].y = startPoint.y;
  // }

  controlPoints[0].x = firstPoint.x === scaleStartPoint.x ? startPoint.x : controlPoints[0].x;
  controlPoints[0].y = firstPoint.y === scaleStartPoint.y ? startPoint.y : controlPoints[0].y;
  controlPoints.unshift(startPoint);
  return controlPoints;
};

var pathFinder = function pathFinder(startPoint, endPoint, startNode, endNode, routerCfg) {
  if (isNaN(startPoint.x) || isNaN(endPoint.x)) return [];
  var cfg = (0, _util.deepMix)(defaultCfg, routerCfg);
  cfg.obstacles = cfg.obstacles || [];
  var gridSize = cfg.gridSize;
  var map = getObstacleMap(cfg.obstacles.concat([startNode, endNode]), gridSize, cfg.offset);
  var scaleStartPoint = {
    x: pos2GridIx(startPoint.x, gridSize),
    y: pos2GridIx(startPoint.y, gridSize)
  };
  var scaleEndPoint = {
    x: pos2GridIx(endPoint.x, gridSize),
    y: pos2GridIx(endPoint.y, gridSize)
  };
  startPoint.id = scaleStartPoint.x + "|||" + scaleStartPoint.y;
  endPoint.id = scaleEndPoint.x + "|||" + scaleEndPoint.y;
  var startPoints = getBoxPoints(scaleStartPoint, startPoint, startNode, scaleEndPoint, cfg);
  var endPoints = getBoxPoints(scaleEndPoint, endPoint, endNode, scaleStartPoint, cfg);
  startPoints.forEach(function (point) {
    delete map[point.id];
  });
  endPoints.forEach(function (point) {
    delete map[point.id];
  });
  var openSet = {};
  var closedSet = {};
  var cameFrom = {}; // ????????????????????????????????? cost, default: Infinity

  var gScore = {}; // ?????????????????????????????????????????? cost, default: Infinity

  var fScore = {}; // initialize

  for (var i = 0; i < startPoints.length; i++) {
    var firstStep = startPoints[i];
    openSet[firstStep.id] = firstStep; // cameFrom[firstStep.id] = startPoint.id;

    gScore[firstStep.id] = 0;
    fScore[firstStep.id] = estimateCost(firstStep, endPoints, cfg.distFunc);
  }

  var remainLoops = cfg.maximumLoops;
  var penalties = cfg.penalties;
  var current, curCost, direction, neighbor, neighborCost, costFromStart, directionChange;

  while (Object.keys(openSet).length > 0 && remainLoops > 0) {
    current = undefined;
    curCost = Infinity; // ?????? openSet ??? fScore ????????????

    Object.keys(openSet).forEach(function (key) {
      var id = openSet[key].id;

      if (fScore[id] <= curCost) {
        curCost = fScore[id];
        current = openSet[id];
      }
    });
    if (!current) break; // ?????? fScore ????????????????????????

    if (endPoints.findIndex(function (point) {
      return point.x === current.x && point.y === current.y;
    }) > -1) {
      return getControlPoints(current, cameFrom, scaleStartPoint, endPoint, startPoint, scaleEndPoint, gridSize);
    }

    delete openSet[current.id];
    closedSet[current.id] = true; // ????????????????????????????????????????????????
    // ????????????????????????

    for (var i = 0; i < cfg.directions.length; i++) {
      direction = cfg.directions[i];
      neighbor = {
        x: current.x + direction.stepX,
        y: current.y + direction.stepY,
        id: Math.round(current.x) + direction.stepX + "|||" + (Math.round(current.y) + direction.stepY)
      };
      if (closedSet[neighbor.id]) continue;
      directionChange = getDirectionChange(current, neighbor, cameFrom, scaleStartPoint);
      if (directionChange > cfg.maxAllowedDirectionChange) continue;
      if (map[neighbor.id]) continue; // ?????????????????????
      // ?????????????????? openSet, ??????????????????????????? cost

      if (!openSet[neighbor.id]) {
        openSet[neighbor.id] = neighbor;
      }

      neighborCost = cfg.distFunc(current, neighbor) + (isNaN(penalties[directionChange]) ? gridSize : penalties[directionChange]);
      costFromStart = gScore[current.id] + neighborCost;

      if (gScore[neighbor.id] && costFromStart >= gScore[neighbor.id]) {
        continue;
      }

      cameFrom[neighbor.id] = current;
      gScore[neighbor.id] = costFromStart;
      fScore[neighbor.id] = costFromStart + estimateCost(neighbor, endPoints, cfg.distFunc);
    }

    remainLoops -= 1;
  }

  return cfg.fallbackRoute(startPoint, endPoint, startNode, endNode, cfg);
};

exports.pathFinder = pathFinder;
}, function(modId) { var map = {"./polyline-util":1661774171363}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1661774171351);
})()
//miniprogram-npm-outsideDeps=["tslib","@antv/f6-core","@antv/util"]
//# sourceMappingURL=index.js.map