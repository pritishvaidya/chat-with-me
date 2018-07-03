// @flow
import { css } from 'styled-components';
import { injectGlobal } from 'styled-components';

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
  Primary: '#8955e4',
  Background: '#ffffff',
  BackgroundLabel: '#f2f3ff',
  SecondaryBackground: '#f3f4fd',
  Separator: '#e7e7ec',
  Active: '#ffffff',
  Text: '#403f66',
  Shadow: '#acb7ce'
};

export { Colors, media };
