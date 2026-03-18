import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: 'static',
  adapter: vercel(),
  compressHTML: true,
  server: {
    port: 3000,
  },
  security: {
    allowedDomains: [
      {
        hostname: 'tab.4mbl.net',
        protocol: 'https',
      },
      {
        hostname: '**.vercel.app',
        protocol: 'https',
      },
    ],
  },
});
