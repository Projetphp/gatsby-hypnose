/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./data/",
      },
    },

    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-image",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
  ],
}
