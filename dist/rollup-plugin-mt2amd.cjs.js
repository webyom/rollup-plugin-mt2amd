'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _regeneratorRuntime = _interopDefault(require('babel-runtime/regenerator'));
var _asyncToGenerator = _interopDefault(require('babel-runtime/helpers/asyncToGenerator'));
var Vinyl = _interopDefault(require('vinyl'));
var mt2amd = _interopDefault(require('gulp-mt2amd'));
var rollupUtils = _interopDefault(require('rollup-pluginutils'));

function rollupMt2amd(options) {
  options = options || {};
  var filter = rollupUtils.createFilter(options.include, options.exclude);

  return {
    name: 'mt2amd',

    transform: function transform(content, id) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {var file;return _regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                /\.(tpl\.html|less|sass|css|png|jpg|jpeg|gif|svg|json)$/.test(id)) {_context.next = 2;break;}return _context.abrupt('return',
                null);case 2:if (

                filter(id)) {_context.next = 4;break;}return _context.abrupt('return',
                null);case 4:


                file = new Vinyl({
                  base: process.cwd(),
                  cwd: process.cwd(),
                  path: id,
                  contents: new Buffer(content) });_context.next = 7;return (


                  mt2amd.compile(file, {
                    babel: options.babel,
                    strictMode: options.strictMode,
                    dataInjection: options.dataInjection,
                    esModule: true,
                    beautify: true }));case 7:file = _context.sent;return _context.abrupt('return',


                { code: file.contents.toString(), map: { mappings: '' } });case 9:case 'end':return _context.stop();}}}, _callee, _this);}))();
    } };

}

module.exports = rollupMt2amd;
