import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: 'hybrid',
  adapter: vercel(),
  compressHTML: true,
  server: {
    port: 3000,
  },
});
