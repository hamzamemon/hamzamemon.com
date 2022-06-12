import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Barcode from '../../images/frontcover-barcode.svg';

const FrontCover = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          linkedin
        }
      }
    }
  `);

  const { linkedin } = site.siteMetadata;

  return (
    <Wrapper>
      <StaticImage
        src="../../images/frontcover.jpg"
        alt="Hamza Memon front cover"
        layout="fixed"
        placeholder="blurred"
        className="position-unset"
      />

      <div className="name-div">
        <span>Hamza Memon</span>
      </div>

      <BarcodePrice>
        <div className="logo-div">
          <StaticImage
            src="../../images/logo.png"
            alt="Hamza Memon"
            layout="fullWidth"
            placeholder="blurred"
            imgClassName="logo"
          />
        </div>

        <p>$0.00</p>

        <div className="barcode">
          <a href={linkedin}>
            <Barcode />
          </a>
        </div>
      </BarcodePrice>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mixins.pageViewportHeight};
  position: relative;
  overflow: hidden;

  .position-unset {
    position: unset;
  }

  .name-div {
    ${({ theme }) => theme.mixins.textShadow};
    width: 100%;
    position: absolute;
    top: 2%;
    font-size: clamp(4rem, 0.5rem + 11vw, 10rem);
    text-align: center;
    line-height: 0.8;
    color: var(--pink);
  }
`;

const BarcodePrice = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: absolute;
  bottom: 2%;
  left: 2%;
  flex-direction: column;
  background-color: var(--white);
  padding: 0.3rem;

  .logo-div {
    background-color: var(--black);
    width: 100%;
    height: 100%;
    position: relative;

    .logo {
      padding: 1rem;
    }
  }

  p {
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0.25rem 0;
  }

  .barcode {
    svg {
      width: clamp(6rem, 6vw, 10rem);
      height: clamp(6rem, 6vw, 10rem);
    }
  }
`;

export default FrontCover;
