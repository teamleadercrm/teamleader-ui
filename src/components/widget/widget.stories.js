import React from 'react';
import { boolean, select } from '@storybook/addon-knobs/react';
import {
  Box,
  Button,
  ButtonGroup,
  DataGrid,
  DatePicker,
  Heading3,
  IconButton,
  IconMenu,
  Link,
  MenuItem,
  StatusBullet,
  Tooltip,
  Widget,
  TextBody,
  TextSmall,
  Heading2,
  MenuDivider,
  Bullet,
} from '../../index';
import { rows1 } from '../../static/data/datagrid';
import { IconAddMediumOutline, IconEditMediumOutline } from '@teamleader/ui-icons';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'white', 'neutral'];
const sizes = ['small', 'medium', 'large'];
const TooltippedStatusBullet = Tooltip(StatusBullet);

export default {
  title: 'Widget',
};

export const basic = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Body>
      <Heading3>I am the body title</Heading3>
      <TextBody>I am the body content</TextBody>
    </Widget.Body>
  </Widget>
);

export const withHeader = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header color={select('Header color', colors, 'neutral')}>
      <Heading2>I am the widget header title</Heading2>
    </Widget.Header>
    <Widget.Body>
      <Heading3>I am the body title</Heading3>
      <TextBody>I am the body content</TextBody>
    </Widget.Body>
  </Widget>
);

withHeader.story = {
  name: 'With header',
};

export const withHeaderAndAction = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header color={select('Header color', colors, 'neutral')} display="flex" alignItems="center">
      <Box flex={1}>
        <Heading2>I am the widget header title</Heading2>
      </Box>
      <Box>
        <IconButton icon={<IconAddMediumOutline />} />
      </Box>
    </Widget.Header>
    <Widget.Body>
      <Heading3>I am the body title</Heading3>
      <TextBody>I am the body content</TextBody>
    </Widget.Body>
  </Widget>
);

withHeaderAndAction.story = {
  name: 'With header and action',
};

export const withHeaderAndMulipleActions = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header
      color={select('header color', colors, 'neutral')}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <Heading2>I am the widget header title</Heading2>
        <Bullet color="mint" marginLeft={3} />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" style={{ width: '130px' }}>
        <IconButton icon={<IconEditMediumOutline />} />
        <IconButton icon={<IconAddMediumOutline />} />
        <IconMenu active position="top-right">
          <MenuItem label="Menu item 1" />
          <MenuItem label="Menu item 2" />
          <MenuDivider />
          <MenuItem label="Disabled menu item..." disabled />
        </IconMenu>
      </Box>
    </Widget.Header>
    <Widget.Body>
      <Heading3>I am the body title</Heading3>
      <TextBody>I am the body content</TextBody>
    </Widget.Body>
  </Widget>
);

withHeaderAndMulipleActions.story = {
  name: 'With header and muliple actions',
};

export const withFooter = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Body>
      <Heading3>I am the body title</Heading3>
      <TextBody>I am the body content</TextBody>
    </Widget.Body>
    <Widget.Footer>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading3>I am the widget footer</Heading3>
        <TextBody>Meta information</TextBody>
      </Box>
    </Widget.Footer>
  </Widget>
);

withFooter.story = {
  name: 'With footer',
};

export const fullWidget = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header color={select('Header color', colors, 'neutral')}>
      <Heading2>I am the widget header title</Heading2>
    </Widget.Header>
    <Widget.Body>
      <Heading3>I am the body title</Heading3>
      <TextBody>I am the body content</TextBody>
    </Widget.Body>
    <Widget.Footer>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading3>I am the widget footer</Heading3>
        <TextBody>Meta information</TextBody>
      </Box>
    </Widget.Footer>
  </Widget>
);

fullWidget.story = {
  name: 'Full widget',
};

export const fullWidget2Cols = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header color={select('Header color', colors, 'neutral')}>
      <Heading2>I am the widget header title</Heading2>
    </Widget.Header>
    <Widget.Body display="flex">
      <Box flex={1}>
        <Heading3>Column 1 header</Heading3>
        <TextBody>I am the body content</TextBody>
      </Box>
      <Box flex={1}>
        <Heading3>Column 2 header</Heading3>
        <TextBody>I am the body content</TextBody>
      </Box>
    </Widget.Body>
    <Widget.Footer>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading3>I am the widget footer</Heading3>
        <TextBody>Meta information</TextBody>
      </Box>
    </Widget.Footer>
  </Widget>
);

fullWidget2Cols.story = {
  name: 'Full widget 2 cols',
};

export const withDatePicker = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header color={select('Header color', colors, 'neutral')}>
      <Heading2>I am the widget header title</Heading2>
    </Widget.Header>
    <Widget.Body padding={0}>
      <DatePicker
        locale="nl-BE"
        numberOfMonths={12}
        onChange={() => console.log('Date changed')}
        selectedDate={new Date()}
      />
    </Widget.Body>
  </Widget>
);

withDatePicker.story = {
  name: 'With DatePicker',
};

export const withDataGridOnly = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Body padding={0}>
      <DataGrid
        bordered={boolean('bordered', false)}
        selectable={boolean('Selectable', true)}
        comparableId={1}
        onSelectionChange={() => console.log('Datagrid selection changed')}
        checkboxSize={select('Checkbox size', ['small', 'medium', 'large'], 'small')}
        padding={0}
        processing={boolean('Processing', false)}
      >
        <DataGrid.HeaderRowOverlay
          numSelectedRowsLabel={numSelectedRows => (numSelectedRows === 1 ? 'sélectionné' : 'sélectionnés')}
        >
          <Button size="small" level="primary" label="Marks as paid" />
          <ButtonGroup segmented marginHorizontal={3}>
            <Button size="small" label="Book" />
            <Button size="small" label="Merge" />
          </ButtonGroup>
          <Button size="small" level="destructive" label="Delete" />
        </DataGrid.HeaderRowOverlay>

        <DataGrid.HeaderRow>
          <DataGrid.HeaderCell flex="min-width" />
          <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc">
            Invoice
          </DataGrid.HeaderCell>
          <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right">
            Amount
          </DataGrid.HeaderCell>
          <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')}>
            Customer
          </DataGrid.HeaderCell>
          <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')}>Due date</DataGrid.HeaderCell>
          <DataGrid.HeaderCell flex="min-width" />
        </DataGrid.HeaderRow>
        {rows1.map((row, index) => {
          return (
            <DataGrid.BodyRow key={index} onClick={event => console.log('onClick:', row.column5, event)}>
              <DataGrid.Cell align="center" flex="min-width">
                <TooltippedStatusBullet
                  color={row.column1}
                  tooltip={<TextSmall>Overdue</TextSmall>}
                  tooltipColor={row.column1}
                  tooltipSize="small"
                  size="medium"
                />
              </DataGrid.Cell>
              <DataGrid.Cell>
                <Link href="#" inherit={false}>
                  {row.column5}
                </Link>{' '}
              </DataGrid.Cell>
              <DataGrid.Cell align="right" strong>
                {' '}
                {`€ ${row.column3}`}
              </DataGrid.Cell>
              <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
              <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
              <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
                <IconMenu position="top-right">
                  <MenuItem onClick={() => console.log('onClick: duplicate row')}>Duplicate row</MenuItem>
                  <MenuItem onClick={() => console.log('onClick: inactivate row')}>Inactive row</MenuItem>
                  <MenuItem onClick={() => console.log('onClick: remove row')}>Remove row</MenuItem>
                </IconMenu>
              </DataGrid.Cell>
            </DataGrid.BodyRow>
          );
        })}
      </DataGrid>
    </Widget.Body>
  </Widget>
);

withDataGridOnly.story = {
  name: 'With DataGrid only',
};

export const withDataGrid = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header color={select('Header color', colors, 'neutral')}>
      <Heading2>I am the widget header title</Heading2>
    </Widget.Header>
    <Widget.Body padding={0}>
      <DataGrid
        bordered={boolean('Bordered', false)}
        selectable={boolean('Selectable', true)}
        comparableId={1}
        onSelectionChange={() => console.log('Datagrid selection changed')}
        checkboxSize={select('Checkbox size', ['small', 'medium', 'large'], 'small')}
        processing={boolean('Processing', false)}
      >
        <DataGrid.HeaderRowOverlay
          numSelectedRowsLabel={numSelectedRows => (numSelectedRows === 1 ? 'sélectionné' : 'sélectionnés')}
        >
          <Button size="small" level="primary" label="Marks as paid" />
          <ButtonGroup segmented marginHorizontal={3}>
            <Button size="small" label="Book" />
            <Button size="small" label="Merge" />
          </ButtonGroup>
          <Button size="small" level="destructive" label="Delete" />
        </DataGrid.HeaderRowOverlay>

        <DataGrid.HeaderRow>
          <DataGrid.HeaderCell flex="min-width" />
          <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} sorted="asc">
            Invoice
          </DataGrid.HeaderCell>
          <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')} align="right">
            Amount
          </DataGrid.HeaderCell>
          <DataGrid.HeaderCell flex="2" onClick={() => console.log('onClick: column sort')}>
            Customer
          </DataGrid.HeaderCell>
          <DataGrid.HeaderCell onClick={() => console.log('onClick: column sort')}>Due date</DataGrid.HeaderCell>
          <DataGrid.HeaderCell flex="min-width" />
        </DataGrid.HeaderRow>
        {rows1.map((row, index) => {
          return (
            <DataGrid.BodyRow key={index} onClick={event => console.log('onClick:', row.column5, event)}>
              <DataGrid.Cell align="center" flex="min-width">
                <TooltippedStatusBullet
                  color={row.column1}
                  tooltip={<TextSmall>Overdue</TextSmall>}
                  tooltipColor={row.column1}
                  tooltipSize="small"
                  size="medium"
                />
              </DataGrid.Cell>
              <DataGrid.Cell>
                <Link href="#" inherit={false}>
                  {row.column5}
                </Link>{' '}
              </DataGrid.Cell>
              <DataGrid.Cell align="right" strong>
                {' '}
                {`€ ${row.column3}`}
              </DataGrid.Cell>
              <DataGrid.Cell flex="2">{row.column2}</DataGrid.Cell>
              <DataGrid.Cell soft>{row.column4}</DataGrid.Cell>
              <DataGrid.Cell align="right" flex="min-width" preventOverflow={false}>
                <IconMenu position="top-right">
                  <MenuItem onClick={() => console.log('onClick: duplicate row')}>Duplicate row</MenuItem>
                  <MenuItem onClick={() => console.log('onClick: inactivate row')}>Inactive row</MenuItem>
                  <MenuItem onClick={() => console.log('onClick: remove row')}>Remove row</MenuItem>
                </IconMenu>
              </DataGrid.Cell>
            </DataGrid.BodyRow>
          );
        })}
      </DataGrid>
    </Widget.Body>
    <Widget.Footer>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading3>I am the widget footer</Heading3>
        <TextBody>Meta information</TextBody>
      </Box>
    </Widget.Footer>
  </Widget>
);

withDataGrid.story = {
  name: 'With DataGrid',
};