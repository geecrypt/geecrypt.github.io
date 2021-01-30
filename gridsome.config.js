module.exports = {
  siteDescription: 'Resume and About Me.',
  siteUrl: 'https://acquroff.io',
  siteName: "Gavin Acquroff",
  pathPrefix: '/geecrypt.github.io',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-11'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}