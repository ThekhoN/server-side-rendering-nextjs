'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\next\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('C:\\Users\\thekho.ngaosathe\\Desktop\\react-next\\node_modules\\next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _HeaderComponent = require('../component/HeaderComponent');

var _HeaderComponent2 = _interopRequireDefault(_HeaderComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      //console.log('this.props:', this.props)
      return _react2.default.createElement(
        'div',
        { style: { padding: '2em', 'boxSizing': 'box-border' } },
        _react2.default.createElement(_HeaderComponent2.default, { title: 'Next.js Magic Home' }),
        _react2.default.createElement(
          'h2',
          null,
          'This is the Home page'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'Click ',
          _react2.default.createElement(
            _link2.default,
            { href: '/about', prefetch: true },
            _react2.default.createElement(
              'a',
              null,
              'here'
            )
          ),
          ' to go to About page and learn more'
        ),
        _react2.default.createElement(
          'div',
          { className: 'pure-g' },
          _react2.default.createElement(
            'div',
            { className: 'pure-u-1-3' },
            _react2.default.createElement(
              'h1',
              null,
              'funQuotes (: '
            ),
            _react2.default.createElement(
              'table',
              { className: 'pure-table' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Author'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Quote'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Submitted by:'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Tags:'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                this.props.data.map(function (quote) {
                  return _react2.default.createElement(
                    'tr',
                    { key: quote.id, className: 'pure-table-odd' },
                    _react2.default.createElement(
                      'td',
                      null,
                      quote.author
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      quote.quote
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      quote.submittedBy
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      (0, _stringify2.default)(quote.tag)
                    )
                  );
                })
              )
            )
          ),
          _react2.default.createElement('div', { className: 'pure-u-1-3' })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios2.default.get('http://58b2874a78d2121200bfa8dd.mockapi.io/api/quotes');

              case 2:
                res = _context.sent;
                return _context.abrupt('return', { data: res.data });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return _class;
}(_react.Component);

exports.default = _class;