import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./src/**/*.spec.ts'],
    globals: true,
    environment: 'node',
  },
  plugins: [
    swc.vite({
      module: {
        type: 'es6',
      },
    }),
  ],
});
