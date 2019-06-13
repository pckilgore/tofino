"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MyComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PurpleBox =
/*#__PURE__*/
_styledComponents["default"].div.withConfig({
  displayName: "PurpleBox",
  componentId: "sc-1fnd0hd-0"
})(["height:500px;width:500px;background-color:purple;"]);

var MyComponent = function MyComponent(_ref) {
  var message = _ref.message;
  return _react["default"].createElement(PurpleBox, null, _react["default"].createElement("p", null, "I'm a transpiled, imported component"), _react["default"].createElement("br", null), _react["default"].createElement("p", null, "Your name is: ", message));
};

exports.MyComponent = MyComponent;
MyComponent.propTypes = {
  message: _propTypes["default"].string
};
var _default = MyComponent;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQdXJwbGVCb3giLCJzdHlsZWQiLCJkaXYiLCJNeUNvbXBvbmVudCIsIm1lc3NhZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztBQUVBLElBQU1BLFNBQVM7QUFBQTtBQUFHQyw2QkFBT0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5REFBZjs7QUFNTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQ3pCLGdDQUFDLFNBQUQsUUFDRSxrRkFERixFQUVFLDJDQUZGLEVBR0UsNkRBQWtCQSxPQUFsQixDQUhGLENBRHlCO0FBQUEsQ0FBcEI7OztBQVFQRCxXQUFXLENBQUNFLFNBQVosR0FBd0I7QUFDdEJELEVBQUFBLE9BQU8sRUFBRUUsc0JBQVVDO0FBREcsQ0FBeEI7ZUFJZUosVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgUHVycGxlQm94ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG5gO1xuXG5leHBvcnQgY29uc3QgTXlDb21wb25lbnQgPSAoeyBtZXNzYWdlIH0pID0+IChcbiAgPFB1cnBsZUJveD5cbiAgICA8cD57YEknbSBhIHRyYW5zcGlsZWQsIGltcG9ydGVkIGNvbXBvbmVudGB9PC9wPlxuICAgIDxiciAvPlxuICAgIDxwPllvdXIgbmFtZSBpczoge21lc3NhZ2V9PC9wPlxuICA8L1B1cnBsZUJveD5cbik7XG5cbk15Q29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlDb21wb25lbnQ7XG4iXX0=