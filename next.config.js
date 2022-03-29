/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{type: 'query', key: 's', value: '(?<s>.*)'}],
          destination: '/:s',
        },
      ],
    };
  },
}

module.exports = nextConfig
