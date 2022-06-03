import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { devices } from '../breakpoints';

import Barcode from '../../images/frontcover-barcode.svg';

const FrontCover = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../images/frontcover.jpg"
        alt="Work"
        layout="fixed"
        placeholder="blurred"
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
  max-height: 90vh;
  position: relative;
  overflow: hidden;
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

      @media ${devices.mobileM} {
        width: 40px;
        height: 40px;
      }

      @media ${devices.mobileL} {
        width: 50px;
        height: 50px;
      }

      @media ${devices.tabletS} {
        width: 60px;
        height: 60px;
      }

      @media ${devices.laptop} {
        width: 80px;
        height: 80px;
      }
    }
  }

  .name-div {
    font-size: clamp(4rem, 0.5rem + 15vw, 10rem);
    text-align: center;
    grid-area: Name;
    line-height: 0.8;
    color: #ffa0c5;
  }
`;

const BarcodePrice = styled.div`
  position: absolute;
  bottom: 2%;
  left: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
