import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Barcode from '../../images/frontcover-barcode.svg';

const FrontCover = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../images/frontcover.jpg"
        alt="Work"
        layout="fixed"
        placeholder="blurred"
        className="position-unset"
      />
      <CoverHeader>
        <div className="logo-div">
          <StaticImage
            src="../../images/logo.png"
            alt="Hamza Memon"
            layout="fullWidth"
            placeholder="blurred"
            imgClassName="logo"
          />
        </div>

        <div className="name-div">
          <span>Hamza Memon</span>
        </div>
      </CoverHeader>

      <BarcodePrice>
        <div className="h5">
          <p>$0.00</p>
        </div>

        <div className="barcode">
          <Barcode />
        </div>
      </BarcodePrice>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mixins.viewportHeight};
  position: relative;
  overflow: hidden;

  .position-unset {
    position: unset;
  }
`;

const CoverHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 0px;
  position: absolute;
  grid-template-areas: 'Logo Name Name Name Name Name Name Name Name Name Name .';

  top: 2%;
  left: 4%;

  .logo-div {
    grid-area: Logo;

    .logo {
      width: 30px;
      height: 30px;

      @media (${({ theme }) => theme.breakpoints.mobileM}) {
        width: 40px;
        height: 40px;
      }

      @media (${({ theme }) => theme.breakpoints.mobileL}) {
        width: 50px;
        height: 50px;
      }

      @media (${({ theme }) => theme.breakpoints.tabletS}) {
        width: 60px;
        height: 60px;
      }

      @media (${({ theme }) => theme.breakpoints.laptop}) {
        width: 80px;
        height: 80px;
      }
    }
  }

  .name-div {
    font-size: clamp(4rem, 0.5rem + 11vw, 10rem);
    text-align: center;
    grid-area: Name;
    line-height: 0.8;
    color: #ffa0c5;
    text-shadow: 0.1rem 0.1rem black;
  }
`;

const BarcodePrice = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: absolute;
  bottom: 2%;
  left: 2%;
  flex-direction: column;
  background-color: white;
  padding: 0.3rem;

  .barcode {
    svg {
      width: clamp(5rem, 6vw, 10rem);
      height: clamp(5rem, 6vw, 10rem);
    }
  }
`;

export default FrontCover;
