import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SEO } from '@components';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';

const Layout = ({ children }) => {
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    handleExternalLinks();
  });

  return (
    <>
      <SEO />

      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <SiteContainer>
          <div className="site-content">
            <div>{children}</div>
          </div>
        </SiteContainer>
      </ThemeProvider>
    </>
  );
};

const SiteContainer = styled.div`
  width: 100vw;
  max-width: 100vw;

  .site-content {
    width: 100%;
    padding: 1.5rem 3rem 0;
    margin: 0 auto;

    @media (${({ theme }) => theme.breakpoints.mobileL}) {
      padding: 2rem 3rem 0;
    }

    @media (${({ theme }) => theme.breakpoints.tablet}) {
      padding: 4rem 4rem 0;
    }

    @media (${({ theme }) => theme.breakpoints.laptop}) {
      padding: 2rem 2rem 0;
      max-width: 1250px;
    }

    @media (${({ theme }) => theme.breakpoints.laptopL}) {
      padding: 3rem 1rem 0;
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
