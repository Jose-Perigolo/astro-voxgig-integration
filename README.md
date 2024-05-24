# Astro Podmind Integration

This is an Astro integration to add a Voxgig Podmind component to your Astro project.

## Installation

Install the package using npm:

```bash
npm install astro-podmind-integration
```

## Usage

Add the integration to your `astro.config.mjs` file:

```javascript
import { defineConfig } from 'astro/config';
import voxgigIntegration from 'astro-voxgig-integration';

export default defineConfig({
  integrations: [
    voxgigIntegration(),
  ],
});
```

Use the component in your Astro pages:

```astro
---
title: "My Page"
---

<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>Welcome to My Astro Site!</h1>
    <voxgig-podmind-ask apikey="your-api-key"></voxgig-podmind-ask>
  </body>
</html>
```

This integration allows you to add the Voxgig Podmind component to your Astro project, enabling interactive podcast AI chatbot functionality on your site. Replace `"your-api-key"` with your actual API key provided by Voxgig.


## Notes

This is a work in progress.

## To do

1. Create style properties for customization while doing the integration.
2. Properly embed the voxgig script to send the prompt