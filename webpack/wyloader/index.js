module.exports = function(code) {
  console.log(code);
  const newCode = code.replace(/c/g, 'console.log').replace(/st/g, 'setTimeout');
  return newCode;
};
