import Vinyl from 'vinyl';
import mt2amd from 'gulp-mt2amd';
import rollupUtils from 'rollup-pluginutils';

export default function rollupMt2amd (options) {
  options = options || {};
  const filter = rollupUtils.createFilter(options.include, options.exclude);

  return {
    name: 'mt2amd',

    async transform(content, id) {
      if (!(/\.(tpl\.html|less|sass|css|png|jpg|jpeg|gif|svg|json)$/).test(id)) {
        return null;
      }
      if (!filter(id)) {
        return null;
      }

      let file = new Vinyl({
        base: process.cwd(),
        cwd: process.cwd(),
        path: id,
        contents: new Buffer(content)
      });

      file = await mt2amd.compile(file, {
        babel: options.babel,
        strictMode: options.strictMode,
        dataInjection: options.dataInjection,
        esModule: true,
        beautify: true
      });

      return {code: file.contents.toString(), map: {mappings: ''}};
    }
  };
};
