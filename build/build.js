const babel = require('rollup-plugin-babel');
const rollup = require('rollup');
const pkg = require('../package.json' );

rollup.rollup({
  entry: 'src/index.js',
  plugins: [
      babel({runtimeHelpers: true})
  ],
  external(id) {
    if (/babel-runtime\/.*/i.test(id)) {
      return true
    }
    return Object.keys(pkg.dependencies).indexOf(id) > -1;
  }
})
.then(function (bundle) {
  bundle.write({
      format: 'cjs',
      dest: pkg.main,
  });
  bundle.write({
      format: 'es',
      dest: pkg.module,
  });
})
.catch(function logError(e) {
  console.log(e)
});
