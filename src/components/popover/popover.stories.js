import React, { useState } from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { select, boolean, number, text } from '@storybook/addon-knobs';
import {
  IconChevronDownSmallOutline,
  IconCloseSmallOutline,
  IconTrashSmallOutline,
  IconClockSmallOutline,
} from '@teamleader/ui-icons';
import {
  Banner,
  Box,
  Button,
  ButtonGroup,
  Heading3,
  Link,
  Menu,
  MenuItem,
  MenuDivider,
  MenuTitle,
  Popover,
  TextBody,
  TextSmall,
} from '../../index';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];
const backdrops = ['transparent', 'dark'];
const directions = ['north', 'south', 'east', 'west'];
const positions = ['start', 'center', 'end'];

const contentBoxWithSingleTextLine = (
  <Box padding={4}>
    <TextBody>
      This is the popover content with a{' '}
      <Link href="#" inherit={false}>
        link
      </Link>{' '}
      inside
    </TextBody>
  </Box>
);

export default {
  component: Popover,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Popover'),

  parameters: {
    info: {
      propTablesExclude: [Link, TextBody, TextSmall, Button, Banner, Heading3, ButtonGroup, Box],
    },
  },
};

const usePopoverTrigger = () => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState(undefined);

  const triggerPopover = (event) => {
    setAnchorEl(event.currentTarget);
    setPopoverActive(true);
  };

  const closePopover = () => {
    setPopoverActive(false);
  };

  return [{ popoverActive, anchorEl }, triggerPopover, closePopover];
};

export const basic = () => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open a basic Popover" />
      <Popover
        active={popoverActive}
        anchorEl={anchorEl}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
        offsetCorrection={number('Offset correction', 0)}
      >
        {contentBoxWithSingleTextLine}
      </Popover>
    </Box>
  );
};

export const withTitle = () => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open titled Popover" />
      <Popover
        active={popoverActive}
        anchorEl={anchorEl}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
        offsetCorrection={number('Offset correction', 0)}
      >
        <Banner fullWidth>
          <Heading3>Popover Title</Heading3>
        </Banner>
        {contentBoxWithSingleTextLine}
      </Popover>
    </Box>
  );
};

withTitle.story = {
  name: 'With title',
};

export const withTitleSubtitle = () => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open titled & subtitled Popover" />
      <Popover
        active={popoverActive}
        anchorEl={anchorEl}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
        offsetCorrection={number('Offset correction', 0)}
      >
        <Banner color="neutral" fullWidth>
          <Heading3>Popover Title</Heading3>
          <TextSmall marginTop={1}>This is the popover content</TextSmall>
        </Banner>
        {contentBoxWithSingleTextLine}
      </Popover>
    </Box>
  );
};

withTitleSubtitle.story = {
  name: 'With title & subtitle',
};

export const withCloseButton = () => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open Popover with close button" />
      <Popover
        active={popoverActive}
        anchorEl={anchorEl}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction="south"
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
        offsetCorrection={number('Offset correction', 0)}
      >
        <Banner onClose={handleCloseClick} fullWidth>
          <Heading3>I am a heading 3</Heading3>
        </Banner>
        {contentBoxWithSingleTextLine}
      </Popover>
    </Box>
  );
};

withCloseButton.story = {
  name: 'With close button',
};

export const withActions = () => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open Popover with actions" />
      <Popover
        active={popoverActive}
        anchorEl={anchorEl}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
        offsetCorrection={number('Offset correction', 0)}
      >
        {contentBoxWithSingleTextLine}
        <ButtonGroup justifyContent="flex-end" padding={4}>
          <Button label="Cancel" />
          <Button level="primary" label="Confirm" />
        </ButtonGroup>
      </Popover>
    </Box>
  );
};

withActions.story = {
  name: 'With actions',
};

export const withMenu = () => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open Popover with menu" />
      <Popover
        active={popoverActive}
        anchorEl={anchorEl}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'end')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
        offsetCorrection={number('Offset correction', 0)}
      >
        <Box overflowY="auto">
          <Menu outline={false} selected="bar">
            <MenuItem value="foo" label="Foo label" />
            <MenuItem value="bar" label="Bar label" />
            <MenuItem label="Disabled ..." disabled />
            <MenuDivider />
            <MenuTitle>Group title</MenuTitle>
            <MenuItem label="Label & icon" icon={<IconClockSmallOutline />} />
            <MenuItem label="Destructive" icon={<IconTrashSmallOutline />} destructive />
            <MenuItem label="Destructive & disabled" icon={<IconCloseSmallOutline />} destructive disabled />
          </Menu>
        </Box>
      </Popover>
    </Box>
  );
};

withMenu.story = {
  name: 'With menu',
};

export const withSplitButtonMenu = () => {
  const [buttonLevel, setButtonLevel] = useState('primary');
  const [buttonLabel, setButtonLabel] = useState('Primary action');
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverActive, setPopoverActive] = useState(false);
  const [splitButtonSelected, setSplitButtonSelected] = useState('foo');

  const handleSplitButtonNormalMenuItemClick = () => {
    setButtonLevel('primary');
    setButtonLabel('Primary action');
    setPopoverActive(false);
    setSplitButtonSelected('foo');
  };

  const handleSplitButtonDestructiveMenuItemClick = () => {
    setButtonLevel('destructive');
    setButtonLabel('Destructive action');
    setPopoverActive(false);
    setSplitButtonSelected('bar');
  };

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
    setPopoverActive(true);
  };

  const handleCloseClick = () => {
    setPopoverActive(false);
  };

  return (
    <Box display="flex" justifyContent="center">
      <ButtonGroup segmented>
        <Button label={buttonLabel} level={buttonLevel} />
        <Button level={buttonLevel} onClick={handleButtonClick} icon={<IconChevronDownSmallOutline />} />
      </ButtonGroup>
      <Popover
        active={popoverActive}
        anchorEl={anchorEl}
        backdrop="transparent"
        position="start"
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        lockScroll={boolean('Lock scroll', true)}
      >
        <Menu outline={false} selected={splitButtonSelected}>
          <MenuItem
            value="foo"
            label="Primary action"
            icon={<IconClockSmallOutline />}
            onClick={handleSplitButtonNormalMenuItemClick}
          />
          <MenuItem
            value="bar"
            label="Destructive action"
            icon={<IconTrashSmallOutline />}
            destructive
            onClick={handleSplitButtonDestructiveMenuItemClick}
          />
        </Menu>
      </Popover>
    </Box>
  );
};

withSplitButtonMenu.story = {
  name: 'With split button menu',
};

export const experiment1 = () => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <Popover
        active={popoverActive}
        anchorEl={anchorEl}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
        offsetCorrection={number('Offset correction', 0)}
      >
        <Banner color="neutral" fullWidth>
          <Heading3>Popover Title</Heading3>
          <TextSmall marginTop={1}>This is the popover content</TextSmall>
        </Banner>
        <Box padding={4} overflow="auto">
          <TextBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </TextBody>
        </Box>
      </Popover>
    </Box>
  );
};

export const experiment2 = () => {
  const [{ popoverActive, anchorEl }, handleButtonClick, handleCloseClick] = usePopoverTrigger();

  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <Popover
        active={popoverActive}
        anchorEl={anchorEl}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
        offsetCorrection={number('Offset correction', 0)}
      >
        <Banner color="neutral" fullWidth>
          <Heading3>Popover Title</Heading3>
          <TextSmall marginTop={1}>This is the popover content</TextSmall>
        </Banner>
        <Box padding={4} overflow="auto">
          <TextBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </TextBody>
        </Box>
        <ButtonGroup justifyContent="flex-end" padding={4}>
          <Button label="Cancel" />
          <Button level="primary" label="Confirm" />
        </ButtonGroup>
      </Popover>
    </Box>
  );
};
