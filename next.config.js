const { withContentlayer } = require('next-contentlayer2')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
// default-src 'self';
// script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.tailwindcss.com giscus.app analytics.umami.is https://www.googletagmanager.com https://googleads.g.doubleclick.net https://doubleclick.net;
// style-src 'self' 'unsafe-inline';
// img-src * blob: data:;
// media-src *.s3.amazonaws.com;
// connect-src *;
// font-src 'self';
// frame-src giscus.app https://td.doubleclick.net;
const ContentSecurityPolicy = `
      default-src *;
      script-src *;
      style-src *;
      img-src * data:;
      font-src *;
      connect-src *;
      media-src *;
      object-src *;
      frame-src *;
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined
const unoptimized = process.env.UNOPTIMIZED ? true : undefined

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), {
    async rewrites() {
      return [
        {
          source: '/2048/', // 你想要的访问路径
          destination: '/2048.html', // 指向public目录下的文件
        },
        {
          source: '/2048-baseball/', // 你想要的访问路径
          destination: '/2048-baseball.html', // 指向public目录下的文件
        },
        {
          source: '/2048-cricket/', // 你想要的访问路径
          destination: '/2048-cricket.html', // 指向public目录下的文件
        },
        {
          source: '/2048-cupcakes/', // 你想要的访问路径
          destination: '/2048-cupcakes.html', // 指向public目录下的文件
        },
        {
          source: '/champion-island/', // 你想要的访问路径
          destination: '/champion-island.html', // 指向public目录下的文件
        },
        {
          source: '/cricket-games/', // 你想要的访问路径
          destination: '/cricket-games.html', // 指向public目录下的文件
        },
        {
          source: '/doodle-baseball/', // 你想要的访问路径
          destination: '/doodle-baseball.html', // 指向public目录下的文件
        },
        {
          source: '/doodle-basketball/', // 你想要的访问路径
          destination: '/doodle-basketball.html', // 指向public目录下的文件
        },
        {
          source: '/doodle-bubble-tea/', // 你想要的访问路径
          destination: '/doodle-bubble-tea.html', // 指向public目录下的文件
        },
        {
          source: '/doodle-football/', // 你想要的访问路径
          destination: '/doodle-football.html', // 指向public目录下的文件
        },
        {
          source: '/doodle-garden-gnomes/', // 你想要的访问路径
          destination: '/doodle-garden-gnomes.html', // 指向public目录下的文件
        },
        {
          source: '/doodle-halloween/', // 你想要的访问路径
          destination: '/doodle-halloween.html', // 指向public目录下的文件
        },
        {
          source: '/doodle-jump/', // 你想要的访问路径
          destination: '/doodle-jump.html', // 指向public目录下的文件
        },
        {
          source: '/doodle-pacman/', // 你想要的访问路径
          destination: '/doodle-pacman.html', // 指向public目录下的文件
        },
        {
          source: '/doodle-snake/', // 你想要的访问路径
          destination: '/doodle-snake.html', // 指向public目录下的文件
        },
        {
          source: '/doodle-soccer/', // 你想要的访问路径
          destination: '/doodle-soccer.html', // 指向public目录下的文件
        },
        {
          source: '/doodle-solitaire/', // 你想要的访问路径
          destination: '/doodle-solitaire.html', // 指向public目录下的文件
        },
        {
          source: '/google-doodle-games/', // 你想要的访问路径
          destination: '/google-doodle-games.html', // 指向public目录下的文件
        },
        // {
        //   source: '/doodle-cricket/', // 你想要的访问路径
        //   destination: '/doodle-cricket.html', // 指向public目录下的文件
        // },
        // 文件资源重定向 一定要放在最后 否则会出现 404 错误

        {
          source: '/2048/:path*', // 原始路径模式
          destination: '/:path*', // 重定向到实际文件位置
        },
        {
          source: '/2048-baseball/:path*', // 原始路径模式
          destination: '/:path*', // 重定向到实际文件位置
        },
        {
          source: '/2048-cricket/:path*', // 原始路径模式
          destination: '/:path*', // 重定向到实际文件位置
        },
        {
          source: '/2048-cupcakes/:path*', // 原始路径模式
          destination: '/:path*', // 重定向到实际文件位置
        },
        {
          source: '/champion-island/:path*', // 原始路径模式
          destination: '/:path*', // 重定向到实际文件位置
        },
        {
          source: '/doodle-baseball/:path*', // 原始路径模式
          destination: '/:path*', // 重定向到实际文件位置
        },
        {
          source: '/doodle-basketball/:path*', // 原始路径模式
          destination: '/:path*', // 重定向到实际文件位置
        },
        {
          source: '/doodle-bubble-tea/:path*', // 原始路径模式
          destination: '/:path*', // 重定向到实际文件位置
        },
        {
          source: '/doodle-football/:path*', // 原始路径模式
          destination: '/:path*', // 重定向到实际文件位置
        },
        {
          source: '/doodle-garden-gnomes/:path*', // 原始路径模式
          destination: '/:path*', // 重定向到实际文件位置
        },
        {
          source: '/doodle-halloween/:path*', // 原始路径模式
          destination: '/:path*', // 重定向到实际文件位置
        },
        {
          source: '/doodle-doodle-jump/:path*', // 原始路径模式
          destination: '/:path*', // 重定向到实际文件位置
        },
        {
          source: '/doodle-pacman/:path*',
          destination: '/:path*',
        },
        {
          source: '/doodle-snake/:path*',
          destination: '/:path*',
        },
        {
          source: '/doodle-soccer/:path*',
          destination: '/:path*',
        },
        {
          source: '/doodle-solitaire/:path*',
          destination: '/:path*',
        },
        // {
        //   source: '/google-doodle-games/:path*',
        //   destination: '/:path*',
        // },
        // {
        //   source: '/doodle-cricket/:path*',
        //   destination: '/:path*',
        // },
      ]
    },
    async redirects() {
      return [
        {
          source: '/:path*/feed.xml/',
          destination: '/:path*/feed.xml',
          permanent: true,
        },
        {
          source: '/blog/primevue/how-to-change-css-of-primevue/',
          destination: '/blog/css/how-to-change-css-of-primevue/',
          permanent: true,
        },
      ]
    },
    output,
    basePath,
    trailingSlash: true,
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
        },
      ],
      unoptimized,
    },
    // async headers() {
    //   return [
    //     {
    //       source: '/(.*)',
    //       headers: [],
    //     },
    //   ]
    // },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  })
}
