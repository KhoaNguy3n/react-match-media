'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MatchMedia = function (_Component) {
  _inherits(MatchMedia, _Component);

  function MatchMedia(props) {
    _classCallCheck(this, MatchMedia);

    var _this = _possibleConstructorReturn(this, (MatchMedia.__proto__ || Object.getPrototypeOf(MatchMedia)).call(this, props));

    _this.state = { show: false };
    _this.mql = null;
    _this.onMatch = function (mql) {
      return _this._onMatch(mql);
    };
    return _this;
  }

  _createClass(MatchMedia, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mql = window.matchMedia(this.props.mediaQuery);
      this.mql.addListener(this.onMatch);
      this.onMatch(this.mql);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mql && this.mql.removeListener(this.onMatch);
    }
  }, {
    key: '_onMatch',
    value: function _onMatch(mql) {
      var show = !!mql.matches;

      if (this.props.handleMediaSizeChange && typeof this.props.handleMediaSizeChange === 'function') {
        this.props.handleMediaSizeChange(show);
      }

      this.setState({ show: show });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.children || !isClient() || !this.state.show) return false;

      return _react2.default.createElement(
        'div',
        { className: 'match-media' },
        this.props.children
      );
    }
  }]);

  return MatchMedia;
}(_react.Component);

exports.default = MatchMedia;


MatchMedia.propTypes = {
  mediaQuery: _react2.default.PropTypes.string.isRequired
};

function isClient() {
  return typeof window !== 'undefined';
}