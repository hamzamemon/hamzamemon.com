import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, lang }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            siteDescription: description
            siteUrl
            siteImage: image
            siteLang: lang
          }
        }
      }
    `
  );

  const { siteTitle, siteDescription, siteUrl, siteImage, siteLang } =
    site.siteMetadata;

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    image: `${siteUrl}${image || siteImage}`,
    url: `${siteUrl}`,
    lang: lang || siteLang,
  };

  return (
    <Helmet
      title={title}
      defaultTitle={seo.title}
      titleTemplate={`%s | ${seo.title}`}
      htmlAttributes={{
        lang: seo.lang,
      }}
      meta={[
        {
          name: 'description',
          content: seo.description,
        },
        {
          property: 'og:description',
          content: seo.description,
        },
        {
          name: 'twitter:description',
          content: seo.description,
        },

        {
          property: 'og:title',
          content: seo.title,
        },

        {
          property: 'og:type',
          content: 'website',
        },

        {
          name: 'twitter:title',
          content: seo.title,
        },

        {
          property: 'image',
          content: seo.image,
        },
        {
          property: 'og:image',
          content: seo.image,
        },
        {
          property: 'twitter:image',
          content: seo.image,
        },

        {
          property: 'og:url',
          content: seo.url,
        },

        {
          name: 'twitter:creator',
          content: site.author,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ]}
    ></Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  lang: null,
};

export default SEO;
