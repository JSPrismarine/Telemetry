/** @type {import('next').NextConfig} */
let config = {
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    productionBrowserSourceMaps: true,
    compress: true,
    experimental: {
        scrollRestoration: true,
        esmExternals: true,
        optimizePackageImports: [],
        webVitalsAttribution: ['CLS', 'LCP', 'INP'],
    },
    images: {
        minimumCacheTTL: 60,
        domains: ['images.prismic.io', '*.github.io']
    },
    compiler: {
        styledComponents: true,
        ...(process.env.NODE_ENV === 'production' && {
            removeConsole: {
                exclude: ['warn', 'error'],
            }
        } || {})
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        MONGODB_URI: process.env.MONGODB_URI || '',
    }
};

export default config;
