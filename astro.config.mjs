import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import clerk from '@clerk/astro';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    tailwind(),
    clerk(),
  ],
});