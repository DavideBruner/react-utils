const testConfig = {
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-export-default-from',
  ],
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/react',
  ],
};

module.exports = {
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-export-default-from',
  ],
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/react',
  ],
  env: {
    ci: testConfig,
    test: testConfig,
  },
};
