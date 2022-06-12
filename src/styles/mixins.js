import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexAround: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  panelBorder: css`
    border: 2px solid var(--black);
  `,

  pageViewportHeight: css`
    height: 93vh;
    max-height: 93vh;
  `,

  textShadow: css`
    text-shadow: 0.2rem 0.2rem var(--black);
  `,
};

export default mixins;
