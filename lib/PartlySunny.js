'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PartlySunny = function PartlySunny(props) {
  return _react2.default.createElement(
    _SvgContainer2.default,
    {
      height: props.height,
      width: props.width,
      color: props.color,
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0,
      className: props.className
    },
    _react2.default.createElement(
      'svg',
      { style: props.style, className: props.cssClasses, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
      _react2.default.createElement(
        'title',
        null,
        'Partly Sunny'
      ),
      _react2.default.createElement('path', { d: 'M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91 15.24-13.68 36.17-23.21 59-26.84.06 0 .08 0 .09-.05 6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 01232 160c30.23 0 58.48 9.39 81.71 27.17a142.24 142.24 0 0142.19 53.21 16 16 0 0011.19 9c26 5.61 48.4 17.29 65.17 34C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28zm19-232.18zM387.89 221.68a168.8 168.8 0 0134.76 14.71 4 4 0 005.82-2.44 97 97 0 003.53-26.68c-.39-52.43-43.48-95.22-95.91-95.27A95.46 95.46 0 00281 129.33h-.06a3.38 3.38 0 001 6 162.45 162.45 0 0151.28 26.4 173.92 173.92 0 0145.32 52.51 16 16 0 009.35 7.44zM496 224h-32a16 16 0 010-32h32a16 16 0 010 32zM336 96a16 16 0 01-16-16V48a16 16 0 0132 0v32a16 16 0 01-16 16zM245.49 133.49a15.92 15.92 0 01-11.31-4.69l-22.63-22.62a16 16 0 0122.63-22.63l22.62 22.63a16 16 0 01-11.31 27.31zM426.51 133.49a16 16 0 01-11.31-27.31l22.62-22.63a16 16 0 0122.63 22.63l-22.63 22.62a15.92 15.92 0 01-11.31 4.69z' })
    )
  );
};

PartlySunny.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

PartlySunny.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  cssClasses: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = PartlySunny;
module.exports = exports['default'];
//# sourceMappingURL=PartlySunny.js.map