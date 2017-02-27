'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\next\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _HeaderComponent = require('../component/HeaderComponent');

var _HeaderComponent2 = _interopRequireDefault(_HeaderComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { padding: '2em', 'boxSizing': 'box-border' } },
    _react2.default.createElement(_HeaderComponent2.default, { title: 'Next.js About Magic' }),
    _react2.default.createElement(
      'h2',
      null,
      'This is the About page. . .'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'p',
      null,
      'Well this is some fun project trying to implement server side rendering using react + routing.',
      _react2.default.createElement('br', null),
      'Still need to implement a state container using redux...',
      _react2.default.createElement('br', null),
      'Server-side rendering magic, without tears.',
      _react2.default.createElement('br', null),
      _react2.default.createElement('img', { src: 'https://i.imgur.com/YsbKHg1.jpg' }),
      _react2.default.createElement('br', null),
      _react2.default.createElement('img', { src: 'https://s-media-cache-ak0.pinimg.com/originals/31/89/5b/31895b26cadef100f49526147f3bc1f3.jpg' })
    ),
    _react2.default.createElement('br', null),
    'Click ',
    _react2.default.createElement(
      _link2.default,
      { href: '/', prefetch: true },
      _react2.default.createElement(
        'a',
        null,
        'here'
      )
    ),
    ' to go back to the Home page'
  );
};