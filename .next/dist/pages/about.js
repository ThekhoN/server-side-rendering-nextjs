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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdGhla2hvLm5nYW9zYXRoZVxcRGVza3RvcFxccmVhY3QtbmV4dFxccGFnZXNcXGFib3V0LmpzIl0sIm5hbWVzIjpbInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVjO0FBQUEsU0FDWjtBQUFBO0FBQUEsTUFBSyxPQUFPLEVBQUVBLFNBQVMsS0FBWCxFQUFpQixhQUFhLFlBQTlCLEVBQVo7QUFDRSwrREFBaUIsT0FBTSxxQkFBdkIsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRjtBQUdFLDZDQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFDZ0csK0NBRGhHO0FBQUE7QUFFMEQsK0NBRjFEO0FBQUE7QUFJRSwrQ0FKRjtBQUtFLDZDQUFLLEtBQUksaUNBQVQsR0FMRjtBQU1FLCtDQU5GO0FBT0UsNkNBQUssS0FBSSw4RkFBVDtBQVBGLEtBSkY7QUFjRSw2Q0FkRjtBQUFBO0FBZVE7QUFBQTtBQUFBLFFBQU0sTUFBSyxHQUFYLEVBQWUsY0FBZjtBQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhCLEtBZlI7QUFBQTtBQUFBLEdBRFk7QUFBQSxDIiwiZmlsZSI6ImFib3V0LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3RoZWtoby5uZ2Fvc2F0aGUvRGVza3RvcC9yZWFjdC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50L0hlYWRlckNvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0KCk9PiAoXHJcbiAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMmVtJywnYm94U2l6aW5nJzogJ2JveC1ib3JkZXInIH19PlxyXG4gICAgPEhlYWRlckNvbXBvbmVudCB0aXRsZT0nTmV4dC5qcyBBYm91dCBNYWdpYycvPlxyXG4gICAgPGgyPlRoaXMgaXMgdGhlIEFib3V0IHBhZ2UuIC4gLjwvaDI+XHJcbiAgICA8YnIvPlxyXG4gICAgPHA+XHJcbiAgICAgIFdlbGwgdGhpcyBpcyBzb21lIGZ1biBwcm9qZWN0IHRyeWluZyB0byBpbXBsZW1lbnQgc2VydmVyIHNpZGUgcmVuZGVyaW5nIHVzaW5nIHJlYWN0ICsgcm91dGluZy48YnIvPlxyXG4gICAgICBTdGlsbCBuZWVkIHRvIGltcGxlbWVudCBhIHN0YXRlIGNvbnRhaW5lciB1c2luZyByZWR1eC4uLjxici8+XHJcbiAgICAgIFNlcnZlci1zaWRlIHJlbmRlcmluZyBtYWdpYywgd2l0aG91dCB0ZWFycy5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGltZyBzcmM9J2h0dHBzOi8vaS5pbWd1ci5jb20vWXNiS0hnMS5qcGcnLz5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGltZyBzcmM9J2h0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS9vcmlnaW5hbHMvMzEvODkvNWIvMzE4OTViMjZjYWRlZjEwMGY0OTUyNjE0N2YzYmMxZjMuanBnJy8+XHJcbiAgICA8L3A+XHJcblxyXG4gICAgPGJyLz5cclxuICAgIENsaWNrIDxMaW5rIGhyZWY9XCIvXCIgcHJlZmV0Y2g+PGE+aGVyZTwvYT48L0xpbms+IHRvIGdvIGJhY2sgdG8gdGhlIEhvbWUgcGFnZVxyXG4gIDwvZGl2PlxyXG4pXHJcbiJdfQ==