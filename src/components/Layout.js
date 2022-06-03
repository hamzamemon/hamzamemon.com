import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { devices } from './breakpoints';

const Layout = ({ children }) => {
  return (
    <SiteContainer>
      <SiteContent>
        <div>{children}</div>
      </SiteContent>
    </SiteContainer>
  );
};

const SiteContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
`;

const SiteContent = styled.div`
  width: 100%;
  padding: 1.5rem 3rem 0;
  margin: 0 auto;

  @media ${devices.mobileL} {
    padding: 2rem 3rem 0;
  }

  @media ${devices.tablet} {
    padding: 4rem 4rem 0;
  }

  @media ${devices.laptop} {
    padding: 2rem 2rem 0;
    max-width: 1250px;
  }

  @media ${devices.laptopL} {
    padding: 3rem 1rem 0;
  }
`;

export default Layout;
