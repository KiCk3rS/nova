import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../'),
      };
    }
    
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    
    // Ajouter le loader TypeScript/Babel pour les fichiers .tsx/.ts
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }],
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      ],
    });
    
    // Configurer PostCSS pour Tailwind CSS
    const cssRuleIndex = config.module.rules.findIndex((rule: any) => {
      return rule && typeof rule === 'object' && rule.test && rule.test.toString().includes('\\.css');
    });
    
    if (cssRuleIndex !== -1) {
      config.module.rules.splice(cssRuleIndex, 1);
    }
    
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
    });
    
    return config;
  },
};

export default config;

