import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import gutil from 'gulp-util';
import mt2amd from 'gulp-mt2amd';
import rollupUtils from 'rollup-pluginutils';

function rollupMt2amd(options) {
  options = options || {};
  var filter = rollupUtils.createFilter(options.include, options.exclude);

  return {
    name: 'mt2amd',

    transform: function transform(content, id) {var _this = this;return _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {var file;return _regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                /\.(tpl\.html|less|sass|css|png|jpg|jpeg|gif|svg|json)$/.test(id)) {_context.next = 2;break;}return _context.abrupt('return',
                null);case 2:if (

                filter(id)) {_context.next = 4;break;}return _context.abrupt('return',
                null);case 4:


                file = new gutil.File({
                  base: process.cwd(),
                  cwd: process.cwd(),
                  path: id,
                  contents: new Buffer(content) });_context.next = 7;return (


                  mt2amd.compile(file, {
                    es6: true,
                    beautify: true }));case 7:file = _context.sent;return _context.abrupt('return',


                { code: file.contents.toString() });case 9:case 'end':return _context.stop();}}}, _callee, _this);}))();
    } };

}

export default rollupMt2amd;