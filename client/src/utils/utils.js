exports.formatPrice = function(num) {
  num = parseFloat(num);
  return `$${num.toFixed(2)}`;
};
