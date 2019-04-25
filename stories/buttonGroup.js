import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { Store, State } from '@sambego/storybook-state';
import { IconAddMediumOutline } from '@teamleader/ui-icons';
import { Button, ButtonGroup } from '../src';

const store = new Store({
  value: 'option2',
});

const handleChangeValue = (value, event) => {
  store.set({ value });
};

storiesOf('Button groups', module)
  .addParameters({
    info: {
      propTablesExclude: [Button, State],
    },
  })
  .add('Normal', () => (
    <ButtonGroup segmented={boolean('Segmented', false)}>
      <Button label="Button 1" />
      <Button label="Button 2" />
      <Button icon={<IconAddMediumOutline />} />
    </ButtonGroup>
  ))
  .add('With active', () => (
    <State store={store}>
      <ButtonGroup
        segmented={boolean('Segmented', true)}
        value="option2"
        onChange={handleChangeValue}
        level="secondary"
      >
        <Button label="Option 1" value="option1" />
        <Button label="Option 2" value="option2" />
        <Button label="Option 3" value="option3" />
      </ButtonGroup>
    </State>
  ));
