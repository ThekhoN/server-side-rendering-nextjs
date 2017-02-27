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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdGhla2hvLm5nYW9zYXRoZVxcRGVza3RvcFxccmVhY3QtbmV4dFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbInBhZGRpbmciLCJwcm9wcyIsImRhdGEiLCJtYXAiLCJxdW90ZSIsImlkIiwiYXV0aG9yIiwic3VibWl0dGVkQnkiLCJ0YWciLCJnZXQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBT1U7QUFDTjtBQUNBLGFBQVE7QUFBQTtBQUFBLFVBQUssT0FBTyxFQUFFQSxTQUFTLEtBQVgsRUFBaUIsYUFBYSxZQUE5QixFQUFaO0FBQ04sbUVBQWlCLE9BQU0sb0JBQXZCLEdBRE07QUFFTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRk07QUFHTixpREFITTtBQUlOO0FBQUE7QUFBQTtBQUFBO0FBQ1U7QUFBQTtBQUFBLGNBQU0sTUFBSyxRQUFYLEVBQW9CLGNBQXBCO0FBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0IsV0FEVjtBQUFBO0FBQUEsU0FKTTtBQU9OO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNNO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBTyxXQUFVLFlBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBREYsZUFERjtBQVNFO0FBQUE7QUFBQTtBQUNDLHFCQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLEtBQUQsRUFBVztBQUM5Qix5QkFDSTtBQUFBO0FBQUEsc0JBQUksS0FBS0EsTUFBTUMsRUFBZixFQUFtQixXQUFVLGdCQUE3QjtBQUNFO0FBQUE7QUFBQTtBQUFLRCw0QkFBTUU7QUFBWCxxQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFLRiw0QkFBTUE7QUFBWCxxQkFGRjtBQUdFO0FBQUE7QUFBQTtBQUFLQSw0QkFBTUc7QUFBWCxxQkFIRjtBQUlFO0FBQUE7QUFBQTtBQUFLLCtDQUFlSCxNQUFNSSxHQUFyQjtBQUFMO0FBSkYsbUJBREo7QUFRRCxpQkFUQTtBQUREO0FBVEY7QUFGRixXQUROO0FBMEJNLGlEQUFLLFdBQVUsWUFBZjtBQTFCTjtBQVBNLE9BQVI7QUFvQ0Q7Ozs7Ozs7Ozs7O3VCQXpDbUIsZ0JBQU1DLEdBQU4sQ0FBVSx1REFBVixDOzs7QUFBWkMsbUI7aURBQ0MsRUFBQ1IsTUFBTVEsSUFBSVIsSUFBWCxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3RoZWtoby5uZ2Fvc2F0aGUvRGVza3RvcC9yZWFjdC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBIZWFkZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50L0hlYWRlckNvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly81OGIyODc0YTc4ZDIxMjEyMDBiZmE4ZGQubW9ja2FwaS5pby9hcGkvcXVvdGVzJylcclxuICAgIHJldHVybiB7ZGF0YTogcmVzLmRhdGF9XHJcbiAgfVxyXG4gIHJlbmRlcigpe1xyXG4gICAgLy9jb25zb2xlLmxvZygndGhpcy5wcm9wczonLCB0aGlzLnByb3BzKVxyXG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyZW0nLCdib3hTaXppbmcnOiAnYm94LWJvcmRlcicgfX0+XHJcbiAgICAgIDxIZWFkZXJDb21wb25lbnQgdGl0bGU9J05leHQuanMgTWFnaWMgSG9tZScvPlxyXG4gICAgICA8aDI+VGhpcyBpcyB0aGUgSG9tZSBwYWdlPC9oMj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgICBDbGljayA8TGluayBocmVmPVwiL2Fib3V0XCIgcHJlZmV0Y2g+PGE+aGVyZTwvYT48L0xpbms+IHRvIGdvIHRvIEFib3V0IHBhZ2UgYW5kIGxlYXJuIG1vcmVcclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cclxuICAgICAgICAgICAgICA8aDE+e2BmdW5RdW90ZXMgKDogYH08L2gxPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwdXJlLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+QXV0aG9yPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UXVvdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdWJtaXR0ZWQgYnk6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VGFnczo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEubWFwKChxdW90ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cXVvdGUuaWR9IGNsYXNzTmFtZT0ncHVyZS10YWJsZS1vZGQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3F1b3RlLmF1dGhvcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3F1b3RlLnF1b3RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cXVvdGUuc3VibWl0dGVkQnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntKU09OLnN0cmluZ2lmeShxdW90ZS50YWcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+KVxyXG4gIH1cclxufVxyXG4iXX0=