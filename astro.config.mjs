import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

const retiredServiceSlugs = [
  'neurotoxins',
  'morpheus-8-microneedling',
  'intense-pulse-light-therapy',
  'laser-hair-removal',
  'fillers',
  'rejuvapen-microneedling',
  'biostimulators',
  'chemical-peels',
  'biofiller-and-prp',
  'facials',
  'lash-and-brow-services',
  'vitamin-injections',
  'zo-skincare',
  'epicutis-skincare',
  'revision-skincare',
  'elta-md-sunscreen',
];

const retiredTeamMemberSlugs = ['amanda-clementi', 'courtney-miller', 'harley-lonardo', 'melissa-holley'];

export default defineConfig({
  site: 'https://www.accessofla.com',
  integrations: [
    alpinejs({ entrypoint: '/src/alpine' }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    ...Object.fromEntries(retiredServiceSlugs.map((slug) => [`/${slug}`, `/services#${slug}`])),
    ...Object.fromEntries(retiredTeamMemberSlugs.map((slug) => [`/${slug}`, `/about#${slug}`])),
    '/team': '/about#meet-our-team',
    '/memberships': '/contact#memberships',
    '/prepare-for-your-appointment': '/contact#prepare-for-your-appointment',
    '/access-awareness': '/about#access-awareness',
  },
});
