module.exports = {
  hooks: {
    'pre-commit': 'yarn format:check && yarn lint'
  }
};
