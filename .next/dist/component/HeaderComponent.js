'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\next\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderComponent = function HeaderComponent(_ref) {
    var title = _ref.title;
    return _react2.default.createElement(
        _head2.default,
        null,
        _react2.default.createElement(
            'title',
            null,
            title
        ),
        _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css' })
    );
};

exports.default = HeaderComponent;