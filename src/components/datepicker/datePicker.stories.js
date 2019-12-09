import React from 'react';
import { boolean, number, select, text } from '@storybook/addon-knobs/react';
import { DatePicker, DatePickerRange, DatePickerInput, DatePickerInputRange } from '../../index';
import { DateTime } from 'luxon';
import CustomLocaleUtils, { formatDate, parseDate } from './localeUtils';

const languages = [
  'da-DK',
  'de-DE',
  'fr-FR',
  'en-GB',
  'en-US',
  'es-ES',
  'fi-FI',
  'it-IT',
  'nl-BE',
  'pt-PT',
  'pl-PL',
  'sv-SE',
];
const sizes = ['small', 'medium', 'large'];

const customFormatDate = (date, locale) => {
  return DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString(DateTime.DATETIME_HUGE);
};

const inputPlaceholderToday = DateTime.fromJSDate(new Date())
  .setLocale(select('Locale', languages, 'nl-BE'))
  .toLocaleString(DateTime.DATE_SHORT);
const inputPlaceholderTomorrow = DateTime.fromJSDate(new Date())
  .setLocale(select('Locale', languages, 'nl-BE'))
  .plus({ days: 1 })
  .toLocaleString(DateTime.DATE_SHORT);

const preSelectedDate = DateTime.local()
  .plus({ days: 3 })
  .toJSDate();
const preSelectedRange = {
  selectedStartDate: DateTime.local()
    .plus({ days: 3 })
    .toJSDate(),
  selectedEndDate: DateTime.local()
    .plus({ days: 8 })
    .toJSDate(),
};

export default {
  title: 'Form elements/DatePicker',
};

export const singleDate = () => {
  const handleOnChange = selectedDate => {
    console.log('Selected date', selectedDate);
  };

  return (
    <DatePicker
      bordered={boolean('bordered', true)}
      locale={select('Locale', languages, 'nl-BE')}
      localeUtils={CustomLocaleUtils}
      numberOfMonths={number('Number of months', 1)}
      onChange={handleOnChange}
      selectedDate={preSelectedDate}
      showOutsideDays={boolean('Show outside days', true)}
      showWeekNumbers={boolean('Show week numbers', true)}
      size={select('Size', sizes, 'medium')}
    />
  );
};

singleDate.story = {
  name: 'Single date',
};

export const inputSingleDate = () => {
  const handleOnChange = selectedDate => {
    console.log('Selected date', selectedDate);
  };

  return (
    <DatePickerInput
      bordered={boolean('bordered', false)}
      dayPickerProps={{
        numberOfMonths: number('Number of months', 1),
        showOutsideDays: boolean('Show outside days', true),
        showWeekNumbers: boolean('Show week numbers', true),
      }}
      formatDate={customFormatDate}
      inputProps={{
        bold: boolean('Bold', false),
        disabled: boolean('Disabled', false),
        error: text('Error', ''),
        helpText: text('Help text', 'Pick a date'),
        inverse: boolean('Inverse', false),
        warning: text('Warning', ''),
        placeholder: inputPlaceholderToday,
        readOnly: boolean('Read only', false),
        width: text('Width', '120px'),
      }}
      locale={select('Locale', languages, 'nl-BE')}
      onChange={handleOnChange}
      selectedDate={preSelectedDate}
      size={select('Size', sizes, 'medium')}
    />
  );
};

inputSingleDate.story = {
  name: 'Input single date',
};

export const range = () => {
  const handleOnChange = selectedRange => {
    console.log('Selected range', selectedRange);
  };

  return (
    <DatePickerRange
      bordered={boolean('bordered', true)}
      locale={select('Locale', languages, 'nl-BE')}
      localeUtils={CustomLocaleUtils}
      numberOfMonths={number('Number of months', 2)}
      onChange={handleOnChange}
      selectedRange={preSelectedRange}
      showOutsideDays={boolean('Show outside days', false)}
      showWeekNumbers={boolean('Show week numbers', true)}
      size={select('Size', sizes, 'medium')}
    />
  );
};

export const inputRange = () => {
  const handleOnChange = selectedRange => {
    console.log('Selected range', selectedRange);
  };

  return (
    <DatePickerInputRange
      bold={boolean('Bold', false)}
      dayPickerProps={{
        locale: select('Locale', languages, 'nl-BE'),
        localeUtils: CustomLocaleUtils,
        numberOfMonths: number('Number of months', 2),
        showOutsideDays: boolean('Show outside days', false),
        showWeekNumbers: boolean('Show week numbers', true),
      }}
      dayPickerInputStartDateProps={{
        placeholder: inputPlaceholderToday,
        value: preSelectedRange.selectedStartDate,
      }}
      dayPickerInputEndDateProps={{
        placeholder: inputPlaceholderTomorrow,
        value: preSelectedRange.selectedEndDate,
      }}
      formatDate={formatDate}
      parseDate={parseDate}
      disabled={boolean('Disabled', false)}
      error={text('error', '')}
      helpText={text('helpText', 'Pick a date')}
      warning={text('warning', '')}
      inverse={boolean('Inverse', false)}
      readOnly={boolean('Read only', false)}
      onChange={handleOnChange}
      selectedRange={preSelectedRange}
      size={select('Size', sizes, 'medium')}
      width={text('width', undefined)}
    />
  );
};

inputRange.story = {
  name: 'Input range',
};