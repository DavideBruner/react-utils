const seed = (count, factoryFn) =>
  new Array(count).fill().map((v, i) => factoryFn(i));

module.exports = {
  seed
};
