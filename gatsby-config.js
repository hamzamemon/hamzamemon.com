const config = require('./src/config');

const siteMetadata = {
  title: config.title,
  description: config.description,
  siteUrl: config.siteUrl,
  lang: config.lang,
  image: config.image,
  linkedin: config.links.linkedin,
};

const corePlugins = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `fonts`,
      path: `${__dirname}/src/fonts`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `content`,
      path: `${__dirname}/content`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `projects`,
      path: `${__dirname}/content/projects`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `work`,
      path: `${__dirname}/content/work`,
    },
  },
];

const devPlugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-sass`,
];

const imagePlugins = [
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-react-svg`,
    options: {
      rule: {
        include: /images/,
      },
    },
  },
];

const markdownPlugins = [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-external-links`,
          options: {
            target: `_blank`,
            rel: `noopener noreferrer`,
          },
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 800,
            linkImagesToOriginal: true,
            quality: 90,
            tracedSVG: { color: `#ff0000` },
          },
        },
      ],
    },
  },
];

const searchPlugins = [
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: ['G-ZX50D87CHZ'],
      pluginConfig: {
        head: true,
      },
    },
  },
];

const pwaPlugins = [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: config.title,
      short_name: config.title,
      description: config.description,
      lang: config.lang,
      start_url: `/`,
      background_color: config.black,
      theme_color: config.pink,
      display: `minimal-ui`,
      icon: config.favicon,
      icon_options: {
        purpose: 'any maskable',
      },
    },
  },
  `gatsby-plugin-offline`,
];

module.exports = {
  siteMetadata,
  plugins: [
    ...corePlugins,
    ...devPlugins,
    ...imagePlugins,
    ...markdownPlugins,
    ...searchPlugins,
    ...pwaPlugins,
  ],
};
