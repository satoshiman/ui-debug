"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Debugger;
require("core-js/modules/es.json.stringify.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Debugger(_ref) {
  let {
    data
  } = _ref;
  let debugArray = [];
  Object.keys(data).forEach((i, idx) => debugArray.push({
    data: data[i],
    name: i
  }));
  return /*#__PURE__*/_react.default.createElement("div", null, debugArray.map((i, idx) => /*#__PURE__*/_react.default.createElement("div", {
    key: idx,
    className: "sign-border my-3"
  }, i.name, /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(i.data, null, 2)))));
}