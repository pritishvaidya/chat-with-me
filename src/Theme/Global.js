// @flow
import { css } from 'styled-components';

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
  Primary: '#6929d8',
  Background: '#ffffff',
  SecondaryBackground: '#e6e7f0',
  Separator: '#e7e7ec',
  Active: '#d2c7f0',
  Text: '#403f66',
  Shadow: '#96a6c4'
};

export { Colors, media };
