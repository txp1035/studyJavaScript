module.exports = function(code) {
  // console.log(code);
  console.log('加载自己load');
  const newCode = code.replace(/c/g, 'console.log').replace(/st/g, 'setTimeout');
  return newCode;
};
