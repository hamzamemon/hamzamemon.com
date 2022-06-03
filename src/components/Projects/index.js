import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import styled from 'styled-components';
import { devices } from '../breakpoints';

const Projects = React.forwardRef((props, ref) => {
  const query = useStaticQuery(graphql`
    query {
      work: allMarkdownRemark(
        sort: { fields: frontmatter___id, order: ASC }
        filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              text
              alt
              languages
              url
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
              <a href={node.frontmatter.url} target="_blank">
                <figure>
                  <GatsbyImage
                    image={getImage(node.frontmatter.src)}
                    alt={node.frontmatter.alt}
                  />
                </figure>
              </a>

              {node.frontmatter.title && (
                <span className="title">{node.frontmatter.title}</span>
              )}

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
                <span className="languages">{node.frontmatter.languages}</span>
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.section`
  grid-area: Projects;

  .panel:nth-child(1) {
    @media ${devices.tablet} {
      grid-area: 1 / 1 / 1 / 13;
    }

    div span:nth-child(1) {
      top: 8%;
      left: 5%;
      width: 50%;
    }

    div span:nth-child(2) {
      top: 45%;
      right: 3%;
      width: 50%;
    }
  }

  .panel:nth-child(2) {
    @media ${devices.tablet} {
      grid-area: 2 / 1 / 2 / 13;
    }

    div span:nth-child(1) {
      top: 6%;
      left: 4%;
      width: 45%;

      @media ${devices.laptop} {
        top: 5%;
        left: 5%;
        width: 55%;
      }
    }

    div span:nth-child(2) {
      top: 38%;
      right: 3%;
      width: 75%;
    }

    div span:nth-child(3) {
      bottom: 15%;
      right: 3%;
      width: 90%;
    }
  }

  .panel:nth-child(3) {
    @media ${devices.tablet} {
      grid-area: 3 / 1 / 3 / 13;
    }

    div span:nth-child(1) {
      top: 20%;
      right: 0;
      width: 70%;
    }
  }

  .panel:nth-child(4) {
    @media ${devices.tablet} {
      grid-area: 4 / 1 / 4 / 13;
    }

    div span:nth-child(1) {
      top: 20%;
      left: 0;
      width: 75%;
    }
  }
`;

export default Projects;
