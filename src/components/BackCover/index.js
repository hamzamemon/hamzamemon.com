import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

const BackCover = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../images/backcover.jpg"
        alt="Hamza Memon back cover"
        layout="fixed"
        placeholder="blurred"
        style={{
          opacity: 0.4,
        }}
      />

      <ContentGrid>
        <div className="content-text">
          <h1>Software Developer.</h1>
          <h2>
            An experienced software developer who loves to challenge himself.
          </h2>
          <h4>
            I am a quick learner and will efficiently spend time learning a new
            topic or technology.
            <br />I constantly want to better myself by learning new
            technologies, tools and solutions to problems.
          </h4>
          <h4>
            I now spend my time flying through code with American Airlines.
          </h4>
          <div>
            <h4>A few technologies I have used recently:</h4>

            <ul>
              <li>TypeScript</li>
              <li>Angular</li>
              <li>Java/Spring</li>
              <li>React</li>
              <li>Docker/Kubernetes</li>
            </ul>
          </div>
        </div>
        <div className="image-links-div">
          <StaticImage
            src="../../images/avatar.png"
            alt="Hamza Memon headshot"
            placeholder="blurred"
            width={200}
          />
        </div>

        <span className="logo-credit">
          *Created my logo at&nbsp;
          <a href="https://logomakr.com/">LogoMakr.com</a>
        </span>
      </ContentGrid>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mixins.pageViewportHeight};
  position: relative;
  overflow: hidden;
  color: var(--black);

  .gatsby-image-wrapper {
    position: relative;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 9fr 2fr 0.3fr;
  grid-gap: 0;
  grid-template-areas:
    'Content'
    'Image'
    'Credit';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .content-text {
    ${({ theme }) => theme.mixins.flexAround};
    grid-area: Content;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 1rem 2rem 0;

    h1 {
      ${({ theme }) => theme.mixins.textShadow};
      color: var(--pink);
      font-size: clamp(1.5rem, 7vw, 4rem);
    }

    h2 {
      font-size: clamp(1.25rem, 0.25rem + 4vw, 2rem);
    }

    h4 {
      font-size: clamp(1.1rem, 0.5rem + 1vw, 1.5rem);
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      padding: 0;
      margin-top: 1rem;
      overflow: hidden;
      list-style: none;
      justify-items: center;

      li {
        position: relative;
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        text-align: left;
        font-size: clamp(1rem, 0.5rem + 1vw, 1.1rem);

        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          line-height: 1.2rem;
        }
      }
    }
  }

  .image-links-div {
    ${({ theme }) => theme.mixins.flexCenter};
    grid-area: Image;
    flex-direction: row;
    width: 50%;
    margin: 0 auto;
    padding: 0 2rem 4rem;
    max-width: 700px;
  }

  .logo-credit {
    grid-area: Credit;
    color: var(--black);
    font-weight: 800;
    text-align: right;
    padding: 0 0.5rem 0.5rem 0;

    a {
      color: var(--pink);
      text-shadow: 0.1rem 0.1rem var(--black);
    }
  }
`;

export default BackCover;
