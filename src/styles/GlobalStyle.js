import { createGlobalStyle } from 'styled-components';
import variables from './variables';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './typography.scss';

const GlobalStyle = createGlobalStyle`
  ${variables};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    font-weight: 400;
    font-family: var(--font);
    letter-spacing: 0.3px;
    line-height: 1.1;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  section {
    ${({ theme }) => theme.mixins.panelBorder};
  }
  
  h1 {
    font-weight: 800;
  }
  
  .slick-prev:before,
  .slick-next:before {
    color: var(--black);
  }
  
  .slick-slide {
    width: 100vw;
    ${({ theme }) => theme.mixins.pageViewportHeight};
    overflow: auto;
  }
  
  .gatsby-image-wrapper {
    position: unset;
  }
  
  .book-page-panels {
    width: 100%;
    max-width: 1250px;
    border: 0;
  
    .work-grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      gap: 1.5rem;
  
      @media (min-width: 768px) {
        grid-template-columns: repeat(12, 1fr);
      }
    }
  
    .panel {
      ${({ theme }) => theme.mixins.panelBorder};
      background-color: var(--white);
      box-shadow: 0 6px 6px -6px var(--black);
      display: inline-block;
      overflow: hidden;
      position: relative;
      min-height: 200px;
  
      span {
        ${({ theme }) => theme.mixins.panelBorder};
        position: absolute;
        background-color: var(--white);
        padding: 0.75rem;
        opacity: 0.8;
        line-height: 1;
        font-size: 0.9rem;
        font-weight: 800;
  
        @media (min-width: 375px) {
          font-size: 1rem;
        }
  
        @media (min-width: 414px) {
          font-size: 1.1rem;
        }
  
        @media (min-width: 1024px) {
          font-size: 1.15rem;
        }
  
        @media (min-width: 1440px) {
          font-size: 1.25rem;
        }
  
        &.employer,
        &.title {
          top: 1%;
          right: 1%;
          background-color: var(--yellow);
        }
  
        &.languages {
          bottom: 1%;
          left: 1%;
          background-color: var(--yellow);
        }
      }
    }
  }
`;

export default GlobalStyle;
