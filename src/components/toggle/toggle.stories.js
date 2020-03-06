import React from 'react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Toggle } from '../../index';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';

const sizes = ['small', 'medium', 'large'];

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Toggle'),
};

const ControlledToggle = props => {
  const handleChange = event => {
    // storybook/knobs controls our state, this changes its state
    // https://github.com/storybookjs/storybook/issues/3855#issuecomment-503795595
    window.__STORYBOOK_ADDONS.channel.emit('storybookjs/knobs/change', {
      name: 'Checked',
      value: event.target.checked,
    });
  };

  return <Toggle {...props} onChange={handleChange} />;
};

ControlledToggle.propTypes = Toggle.propTypes;
ControlledToggle.defaultProps = Toggle.defaultProps;
ControlledToggle.displayName = 'Toggle';

export const basic = () => (
  <ControlledToggle
    checked={boolean('Checked', false)}
    disabled={boolean('Disabled', false)}
    size={select('Size', sizes, 'medium')}
  />
);

export const withLabels = () => (
  <ControlledToggle
    checked={boolean('Checked', false)}
    disabled={boolean('Disabled', false)}
    label={`I'm a toggle`}
    size={select('Size', sizes, 'medium')}
  />
);

withLabels.story = {
  name: 'With labels',
};
