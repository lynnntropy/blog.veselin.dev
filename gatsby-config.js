module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./content/assets/avatar.png",
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Veselin's blog`,
    author: `Veselin Romić`,
    description: `todo`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/omegavesko`,
      },
      {
        name: `github`,
        url: `https://github.com/omegavesko`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/veselinromic/`,
      },
    ],
  },
}
