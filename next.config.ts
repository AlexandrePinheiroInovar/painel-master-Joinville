
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'locagoraveiculos.com.br',
        port: '',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc', // For Floc Grupo logo
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
