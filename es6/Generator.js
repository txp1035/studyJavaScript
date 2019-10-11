(function() {
  function name(a, b) {
    setTimeout(() => {
      a(123);
    }, 1000);
  }
  var p = new Promise(name);
  function* helloWorldGenerator() {
    var a = yield p;
    console.log(a);
    yield 'world';
    return 'ending';
  }

  var hw = helloWorldGenerator();

  console.log(hw.next());
  console.log(hw.next());
  console.log(hw.next());
  console.log(hw.next());
})();
