/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'example.com',
      'jpnlwwwxvwdgkuvubyuf.supabase.co',
      'grncqmedhbcenrprtxlf.supabase.co',
      'velapower-bucket.s3.us-east-1.amazonaws.com',
    ],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
  trailingSlash: true,
};

module.exports = nextConfig;
