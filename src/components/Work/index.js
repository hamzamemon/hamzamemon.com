import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import styled from 'styled-components';
import { devices } from '../breakpoints';

const Work = () => {
  const query = useStaticQuery(graphql`
    query {
      work: allMarkdownRemark(
        sort: { fields: frontmatter___id, order: ASC }
        filter: { fileAbsolutePath: { regex: "/(work)/" } }
      ) {
        edges {
          node {
            frontmatter {
              text
              alt
              employer
              languages
              src {
                childImageSharp {
                  gatsbyImageData(
                    blurredOptions: { width: 100 }
                    placeholder: BLURRED
                    transformOptions: { cropFocus: CENTER }
                    aspectRatio: 3
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper className="book-page-panels">
      <div className="work-grid">
        {query.work.edges.map(({ node }, i) => {
          return (
            <div key={i} className="panel-border panel">
              <figure>
                <GatsbyImage
                  image={getImage(node.frontmatter.src)}
                  alt={node.frontmatter.alt}
                />
              </figure>
              {node.frontmatter.employer && (
                <span className="employer">
                  {node.frontmatter.employer}

                  {node.frontmatter.date && (
                    <span className="date">{node.frontmatter.date}</span>
                  )}
                </span>
              )}
              {node.frontmatter.text && (
                <div>
                  {node.frontmatter.text.map((text, j) => (
                    <span key={j}>{text}</span>
                  ))}
                </div>
              )}
              {node.frontmatter.languages && (
                <span className="languages">*{node.frontmatter.languages}</span>
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  grid-area: Work;

  .panel:nth-child(1) {
    @media ${devices.tablet} {
      grid-area: 1 / 1 / 1 / 7;
    }

    div span:nth-child(1) {
      top: 5%;
      left: 5%;
    }

    div span:nth-child(2) {
      top: 50%;
      left: 50%;
    }
  }

  .panel:nth-child(2) {
    @media ${devices.tablet} {
      grid-area: 1 / 7 / 1 / 13;
    }

    div span:nth-child(1) {
      top: 5%;
      left: 5%;
      width: 40%;

      @media ${devices.laptop} {
        top: 5%;
        left: 5%;
        width: 50%;
      }
    }

    div span:nth-child(2) {
      bottom: 2%;
      right: 3%;
      width: 55%;
    }
  }

  .panel:nth-child(3) {
    @media ${devices.tablet} {
      grid-area: 2 / 1 / 2 / 6;
    }

    div span:nth-child(1) {
      top: 45%;
      right: 10%;
      width: 75%;
    }
  }

  .panel:nth-child(4) {
    @media ${devices.tablet} {
      grid-area: 2 / 6 / 2 / 13;
    }

    div span:nth-child(1) {
      top: 25%;
      left: 5%;
      width: 60%;
    }
  }

  .panel:nth-child(5) {
    @media ${devices.tablet} {
      grid-area: 3 / 1 / 3 / 7;
    }

    div span:nth-child(1) {
      top: 5%;
      left: 5%;
      width: 60%;
    }

    div span:nth-child(2) {
      top: 50%;
      right: 6%;
      width: 65%;
    }
  }

  .panel:nth-child(6) {
    @media ${devices.tablet} {
      grid-area: 3 / 7 / 3 / 13;
    }

    div span:nth-child(1) {
      top: 50%;
      right: 10%;
      width: 45%;
    }
  }

  .panel:nth-child(7) {
    @media ${devices.tablet} {
      grid-area: 4 / 1 / 4 / 8;
    }

    div span:nth-child(1) {
      top: 10%;
      left: 1%;
      width: 45%;
    }

    div span:nth-child(2) {
      top: 45%;
      right: 4%;
      width: 50%;
    }
  }

  .panel:nth-child(8) {
    @media ${devices.tablet} {
      grid-area: 4 / 8 / 4 / 13;
    }

    div span:nth-child(1) {
      top: 10%;
      left: 1%;
      width: 40%;
    }

    div span:nth-child(2) {
      top: 45%;
      right: 2%;
      width: 90%;
    }
  }
`;

export default Work;
