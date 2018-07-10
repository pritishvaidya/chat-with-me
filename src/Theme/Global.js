// @flow
import { css, injectGlobal, keyframes } from 'styled-components';

import AsparagusSprouts from '../Fonts/AsparagusSprouts.ttf';

injectGlobal`
  @font-face {
    font-family: 'AsparagusSprouts';
    src: url(${AsparagusSprouts}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const sizes = {
    giant: 1170,
    desktop: 992,
    tablet: 768,
    phablet: 572,
    phone: 376,
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
    const newAccumulator = accumulator;
    newAccumulator[label] = (...args: any) => css`
        @media (max-width: ${sizes[label]}px) {
            ${css(...args)};
        }
    `;
    return newAccumulator;
}, {});

const Colors = {
    Primary: '#f9890e',
    Secondary: '#8955e4',
    Black: '#333333',
    Background: '#ffffff',
    BackgroundLabel: '#f2f3ff',
    SecondaryBackground: '#f3f4fd',
    Separator: '#e7e7ec',
    Active: '#ffffff',
    Text: '#403f66',
    Shadow: '#acb7ce',
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export { Colors, media, fadeIn, fadeOut };
