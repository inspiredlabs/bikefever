// postcss.config.mjs - Fixed configuration for Tachyons
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';

const config = {
  plugins: [
    autoprefixer(),
    ...(process.env.NODE_ENV === 'production' ? [
      purgecss({
        content: [
          './src/**/*.{html,js,svelte,ts}',
          './src/app.html',
          './src/**/*.{svelte.js,svelte.ts}' // For Svelte 5 runes modules
        ],
        safelist: {
          standard: [
            /^svelte-/, // Preserve Svelte-generated classes
            'html', 'body',
            // Tachyons-specific patterns that are often dynamically generated
            /^(f|ma|pa|ba|br|bg|color|tc|tl|tr|dib|db|dn|flex)/,
            /^f[1-7]$/, // Font sizes (f1, f2, etc.)
            /^ma[0-7]$/, /^pa[0-7]$/, // Margins and padding
            /^bg-/ // Background utilities
          ],
          deep: [/^hljs-/, /^katex/], // Code highlighting, math rendering
          greedy: [/^(tooltip|popover|modal)/, /^nav-/] // Dynamic components
        },
        // Enhanced extractor for utility CSS frameworks
        defaultExtractor: (content) => {
          const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
          const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
          const svelteClasses = content.match(/class:([A-Za-z0-9_-]+)/g) || [];
          return [...broadMatches, ...innerMatches, ...svelteClasses.map(c => c.replace('class:', ''))];
        },
        variables: true,
        keyframes: true,
        fontFace: true
      })
    ] : [])
  ]
};

export default config;