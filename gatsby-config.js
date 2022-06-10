const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Wedding RSVP`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Crimson Pro:200,300,400,500,600,700`,
          `Work Sans:200,300,400,500,600,700`,
          `Courier New:200,300,400,500,600,700`,
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `assets`, `images`),
      },
      __key: "images",
    },
  ],
};
