import { defineConfig } from 'dumi';
const repo = 'dumi'; // 项目名

export default defineConfig({
  title: 'dumi',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: '/dumi',
  publicPath: '/dumi/',
  // more config: https://d.umijs.org/config
});
