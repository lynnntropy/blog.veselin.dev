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
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-25952845-11",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Veselin's blog`,
    author: `Veselin Romić`,
    description: `Hi! I'm Veselin/Vesko, and this is my blog.`,
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
