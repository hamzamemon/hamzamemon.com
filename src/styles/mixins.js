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
    border: 2px solid black;
  `,

  viewportHeight: css`
    height: 93vh;
    max-height: 93vh;
  `,
};

export default mixins;
