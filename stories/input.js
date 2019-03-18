import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select, text } from '@storybook/addon-knobs/react';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import {
  InputBase,
  Button,
  Checkbox,
  Counter,
  Icon,
  Input,
  DurationInput,
  LoadingSpinner,
  NumericInput,
  Textarea,
  TextBody,
  TextSmall,
} from '../src';

const sizes = ['small', 'medium', 'large'];
const types = [
  'text',
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'time',
  'url',
  'week',
];
const placeholder = 'I am the placeholder';
const prefix = [
  <Icon color="neutral" tint="darkest">
    <IconCalendarSmallOutline />
  </Icon>,
  <TextBody color="neutral">€</TextBody>,
];
const suffix = [<TextSmall color="neutral">incl. BTW</TextSmall>, <Counter count={99} />, <LoadingSpinner />];

storiesOf('Form elements/Input', module)
  .addParameters({
    info: {
      propTables: [InputBase],
    },
  })
  .add('Input', () => (
    <Input
      bold={boolean('bold', false)}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      helpText={text('helpText', '')}
      success={text('success', '')}
      warning={text('warning', '')}
      id="input1"
      inverse={boolean('inverse', false)}
      placeholder={text('placeholder', placeholder)}
      readOnly={boolean('readOnly', false)}
      size={select('size', sizes) || undefined}
      type={select('type', types, 'text')}
      connectedLeft={
        boolean('Toggle connectedLeft', false) ? <Button size={select('size', sizes, 'medium')} label="€" /> : undefined
      }
      connectedRight={
        boolean('Toggle connectedRight', false) ? (
          <Button size={select('size', sizes, 'medium')}>
            <Checkbox size="small">Discount</Checkbox>
          </Button>
        ) : (
          undefined
        )
      }
      prefix={boolean('Toggle prefix', false) ? prefix : undefined}
      suffix={boolean('Toggle suffix', false) ? suffix : undefined}
      width={text('width', undefined)}
    />
  ))
  .add('DurationInput', () => (
    <DurationInput
      bold={boolean('bold', false)}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      helpText={text('helpText', '')}
      successHours={text('successHours', '')}
      successMinutes={text('successMinutes', '')}
      successSeconds={text('successSeconds', '')}
      warningHours={text('warningHours', '')}
      warningMinutes={text('warningMinutes', '')}
      warningSeconds={text('warningSecconds', '')}
      helpHours={text('helpHours', '')}
      helpMinutes={text('helpMinutes', '')}
      helpSeconds={text('helpSecconds', '')}
      errorHours={text('errorHours', '')}
      errorMinutes={text('errorMinutes', '')}
      errorSeconds={text('errorSecconds', '')}
      inverse={boolean('inverse', false)}
      readOnly={boolean('readOnly', false)}
      size={select('size', sizes) || undefined}
      max={number('max', 10)}
      min={number('min', 0)}
      spinner={boolean('spinner', true)}
      step={number('step', 5)}
      width={number('width', 60)}
    />
  ))
  .add('NumericInput', () => (
    <NumericInput
      bold={boolean('bold', false)}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      helpText={text('helpText', '')}
      success={text('success', '')}
      warning={text('warning', '')}
      inverse={boolean('inverse', false)}
      max={number('max', 10)}
      min={number('min', 0)}
      placeholder={text('placeholder', placeholder)}
      readOnly={boolean('readOnly', false)}
      size={select('size', sizes) || undefined}
      spinner={boolean('spinner', true)}
      step={number('step', 1)}
      connectedLeft={
        boolean('Toggle connectedLeft', false) ? <Button size={select('size', sizes, 'medium')} label="€" /> : undefined
      }
      connectedRight={
        boolean('Toggle connectedRight', false) ? (
          <Button size={select('size', sizes, 'medium')}>
            <Checkbox size="small">Discount</Checkbox>
          </Button>
        ) : (
          undefined
        )
      }
      prefix={boolean('Toggle prefix', false) ? prefix : undefined}
      suffix={boolean('Toggle suffix', false) ? suffix : undefined}
      width={text('width', undefined)}
    />
  ))
  .add('Textarea', () => (
    <Textarea
      bold={boolean('bold', false)}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      helpText={text('helpText', '')}
      success={text('success', '')}
      warning={text('warning', '')}
      id="input1"
      inverse={boolean('inverse', false)}
      placeholder={text('placeholder', placeholder)}
      readOnly={boolean('readOnly', false)}
      size={select('size', sizes) || undefined}
      value={text('value', undefined)}
    />
  ));
