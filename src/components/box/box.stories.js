import React from 'react';
import { number, select } from '@storybook/addon-knobs/react';
import { Box, TextBody, COLORS, TINTS } from '../../index';

const borderRadiusValues = ['square', 'circle', 'rounded'];
const displayValues = ['inline', 'inline-block', 'block', 'flex', 'inline-flex'];
const justifyContentValues = ['center', 'flex-start', 'flex-end', 'space-around', 'space-between', 'space-evenly'];
const textAlignValues = ['center', 'left', 'right'];

const spacingOptions = {
  range: true,
  min: 0,
  max: 8,
  step: 1,
};

export default {
  title: 'Box',

  parameters: {
    info: {
      propTablesExclude: [TextBody],
    },
  },
};

export const basic = () => (
  <Box
    backgroundColor={select('Background color', COLORS, 'neutral')}
    backgroundTint={select('Background tint', TINTS, 'light')}
    borderWidth={number('Border width', 0)}
    borderBottomWidth={number('Border bottom width', 0)}
    borderLeftWidth={number('Border left width', 0)}
    borderRightWidth={number('Border right width', 0)}
    borderTopWidth={number('Border top width', 0)}
    borderColor={select('Border color', COLORS, 'neutral')}
    borderTint={select('Border tint', TINTS, 'dark')}
    borderRadius={select('Border radius', borderRadiusValues, 'square')}
    borderTopLeftRadius={select('Border top left radius', borderRadiusValues, 'square')}
    borderTopRightRadius={select('Border top right radius', borderRadiusValues, 'square')}
    borderBottomLeftRadius={select('Border bottom left radius', borderRadiusValues, 'square')}
    borderBottomRightRadius={select('Border bottom right radius', borderRadiusValues, 'square')}
    display={select('Display', displayValues, 'block')}
    justifyContent={select('Justify Content', justifyContentValues, 'flex-start')}
    margin={number('Margin', 0, spacingOptions)}
    padding={number('Padding', 3, spacingOptions)}
    textAlign={select('Text align', textAlignValues, 'left')}
  >
    <TextBody>I'm body text inside a Box component</TextBody>
  </Box>
);