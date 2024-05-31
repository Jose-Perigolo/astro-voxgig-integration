const podmindIntegration = {
  name: 'astro-podmind-integration',
  hooks: {
    'astro:config:setup': ({ injectScript }) => {
      injectScript('head', 'https://podmind.voxgig.com/widget/voxgig-podmind-ask.js', { async: true });
    },
  },
};

export default podmindIntegration;