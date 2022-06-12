import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sk-loader',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',      
    },
    {
      type: 'dist-custom-elements',
      minify: true
    },
  ],
};
