class FileListPlugin {
  apply(compiler) {
    console.log('2-加载插件开始');
    // emit 是异步 hook，使用 tapAsync 触及它，还可以使用 tapPromise/tap(同步)
    compiler.hooks.beforeRun.tapAsync('FileListPlugin1', (compilation, callback) => {
      console.log('2-beforeRun');
      callback();
    });
    compiler.hooks.run.tapAsync('FileListPlugin1', (compilation, callback) => {
      console.log('2-run');
      callback();
    });
    compiler.hooks.watchRun.tapAsync('FileListPlugin1', (compilation, callback) => {
      console.log('2-watchRun');
      callback();
    });
    compiler.hooks.beforeCompile.tapAsync('FileListPlugin1', (compilation, callback) => {
      console.log('2-beforeCompile');
      callback();
    });
    compiler.hooks.make.tapAsync('FileListPlugin1', (compilation, callback) => {
      console.log('2-make');
      callback();
    });
    compiler.hooks.afterCompile.tapAsync('FileListPlugin1', (compilation, callback) => {
      console.log('2-afterCompile');
      callback();
    });
    compiler.hooks.emit.tapAsync('FileListPlugin1', (compilation, callback) => {
      console.log('2-emit');
      callback();
    });
    compiler.hooks.afterEmit.tapAsync('FileListPlugin1', (compilation, callback) => {
      console.log('2-afterEmit');
      callback();
    });
    compiler.hooks.done.tapAsync('FileListPlugin1', (compilation, callback) => {
      console.log('2-done');
      callback();
    });
    compiler.hooks.failed.tap('FileListPlugin1', (compilation, callback) => {
      console.log('2-failed');
      callback();
    });
    compiler.hooks.invalid.tap('FileListPlugin1', (compilation, callback) => {
      console.log('2-invalid');
      callback();
    });
  }
}

module.exports = FileListPlugin;
