(function(params) {
  var p = new Promise((resolve, reject) => {
    if (false) {
      reject();
    }
    setTimeout(() => {
      resolve();
      console.log('异步');
    }, 1000);
  });
  p.then(() => {
    console.log(123);
  })
    .catch(() => {
      console.log('错误');
    })
    .finally(() => {
      console.log('都有');
    });
})();
