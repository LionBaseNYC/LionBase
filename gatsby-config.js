const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "LionBase",
    author: "Alex, Kev, and Tommy",
    description: "Student collaboration @ CU."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',

    // IMAGE API
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/lion-blue-simple.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, 'images'),
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,

    // JSON API
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `assets`, 'data'),
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`, // a fixed string
      },
    },
  ],
};
