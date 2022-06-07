import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title, description, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            siteDescription: description
            siteUrl
            siteImage: image
          }
        }
      }
    `
  );

  const { siteTitle, siteDescription, siteUrl, siteImage } = site.siteMetadata;

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    image: `${siteUrl}${image || siteImage}`,
    url: `${siteUrl}`,
  };

  return (
    <Helmet
      title={title}
      defaultTitle={seo.title}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};

export default Head;
