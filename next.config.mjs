const repo = 'rajkumar-malviya-portfolio';
const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  trailingSlash: true,
};

export default nextConfig;
