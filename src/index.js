import { defineIntegration } from 'astro';

export default function podmindIntegration(options = {}) {
  return defineIntegration({
    name: 'astro-podmind-integration',
    hooks: {
      'astro:config:setup': ({ injectScript }) => {
        injectScript('page', `https://podmind.voxgig.com/widget/voxgig-podmind-ask.js`, { async: true });
      },
    },
  });
}
