const createMDX = require( '@next/mdx')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    turbo: {
      rules: {
        '*.bib': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.bib$/,
      type: 'asset/source',
    });
    return config;
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});


module.exports = withMDX(nextConfig)
