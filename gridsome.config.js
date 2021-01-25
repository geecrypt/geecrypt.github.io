module.exports = {
  siteName: 'Gavin\'s Resume',
  siteDescription: 'Resume and About Me. Forked from  lokecarlsson/gridsome-starter-resume',
  siteUrl: 'https://geecrypt.github.io',
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