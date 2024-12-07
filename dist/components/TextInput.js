"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TextInput = _ref => {
  let {
    placeholder,
    value,
    onChange,
    onSubmit
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Paper, {
    component: "form",
    onSubmit: onSubmit,
    sx: {
      gap: "12px",
      padding: "8px",
      display: "flex",
      alignItems: "center"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Add.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputBase, {
      value: value,
      onChange: onChange,
      placeholder: placeholder,
      sx: {
        fontSize: "large"
      }
    })]
  });
};
var _default = exports.default = TextInput;