import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, text } from '@storybook/addon-knobs/react';
import { Box, TextBody, COLORS, TINTS } from '../src';

const displayValues = ['inline', 'inline-block', 'block', 'flex', 'inline-flex'];
const justifyContentValues = ['center', 'flex-start', 'flex-end', 'space-around', 'space-between', 'space-evenly'];
const textAlignValues = ['center', 'left', 'right'];

const spacingOptions = {
  range: true,
  min: 0,
  max: 8,
  step: 1,
};

storiesOf('Box', module)
  .addParameters({
    info: {
      propTablesExclude: [TextBody],
    },
  })
  .add('Basic', () => (
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
      borderRadius={text('Border radius', undefined)}
      display={select('Display', displayValues, 'block')}
      justifyContent={select('Justify Content', justifyContentValues, 'flex-start')}
      margin={number('Margin', 0, spacingOptions)}
      padding={number('Padding', 3, spacingOptions)}
      textAlign={select('Text align', textAlignValues, 'left')}
    >
      <TextBody>I'm body text inside a Box component</TextBody>
    </Box>
  ));
