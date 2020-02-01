module.exports = {
  siteMetadata: {
    title: 'Teste Nodis',
    description: 'Teste para a vaga de front-end da Nodis.',
    author: '@marcoaring',
    siteUrl: 'https://marcoaring.com.br'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${ __dirname }/static/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#1c9956',
        theme_color: '#1c9956',
        display: 'minimal-ui',
        icon: 'static/images/logo.png',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap'
  ]
};
