import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import {
  Banner,
  Box,
  Button,
  ButtonGroup,
  Heading3,
  Link,
  PopoverHorizontal,
  PopoverVertical,
  TextBody,
  TextSmall,
} from '../components';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import PropTypes from 'prop-types'

const store = new Store({
  active: false,
});

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];

const handleButtonClick = event => {
  store.set({ anchorEl: event.currentTarget, active: true });
};

const handleCloseClick = () => {
  store.set({ active: false });
};

const contentBoxWithSingleTextLine = (
  <Box padding={4}>
    <TextBody>This is the popover content with a <Link href="#" inherit={false}>link</Link> inside</TextBody>
  </Box>
);

storiesOf('Popover', module)
  .addDecorator((story, context) => withInfo({ TableComponent: PropTable })(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('horizontal', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a horizontalPopover" />
      <State store={store}>
        <PopoverHorizontal
          active={false}
          backdrop="transparent"
          color={select('Color', colors, 'neutral')}
          direction="west"
          position="middle"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
        >
          {contentBoxWithSingleTextLine}
        </PopoverHorizontal>
      </State>
    </Box>
  ))
  .add('vertical', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a vertical Popover" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop="transparent"
          color={select('Color', colors, 'neutral')}
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
        >
          {contentBoxWithSingleTextLine}
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('with title', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open titled Popover" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop="transparent"
          color={select('Color', colors, 'neutral')}
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
        >
          <Banner fullWidth={true}>
            <Heading3>Popover Title</Heading3>
          </Banner>
          {contentBoxWithSingleTextLine}
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('with title & subtitle', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open titled & subtitled Popover" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop="transparent"
          color={select('Color', colors, 'neutral')}
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
        >
          <Banner color="neutral" fullWidth={true}>
            <Heading3>Popover Title</Heading3>
            <TextSmall marginTop={1}>This is the popover content</TextSmall>
          </Banner>
          {contentBoxWithSingleTextLine}
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('with close button', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open Popover with close button" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop="transparent"
          color={select('Color', colors, 'neutral')}
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
        >
          <Banner onClose={handleCloseClick} fullWidth={true}>
            <Heading3>I am a heading 3</Heading3>
          </Banner>
          {contentBoxWithSingleTextLine}
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('with actions', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open Popover with actions" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop="transparent"
          color={select('Color', colors, 'neutral')}
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
        >
          {contentBoxWithSingleTextLine}
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel" />
            <Button level="primary" label="Confirm" />
          </ButtonGroup>
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('with dark backdrop', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a Popover with dark backdrop" />
      color={select('Color', colors, 'neutral')}
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop="dark"
          color={select('Color', colors, 'neutral')}
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
        >
          {contentBoxWithSingleTextLine}
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('experiment 1', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop="transparent"
          color={select('Color', colors, 'neutral')}
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
        >
          <Box padding={4}>
            <Heading3>I am a heading 3</Heading3>
            <TextBody marginTop={2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</TextBody>
          </Box>
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('experiment 2', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop="transparent"
          color={select('Color', colors, 'neutral')}
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
        >
          <Box padding={4}>
            <ul>
              <li>Lorem ipsum</li>
              <li>dolor sit amet</li>
            </ul>
          </Box>
        </PopoverVertical>
      </State>
    </Box>
  ));
