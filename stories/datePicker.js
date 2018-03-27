import React from 'react';
import PropTable from "./components/propTable";
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select } from "@storybook/addon-knobs/react";
import { DatePicker, DatePickerInput, DatePickerInputRange, DatePickerRange, Label } from '../components';
import { DateTime } from 'luxon';
import MomentLocaleUtils from 'react-day-picker/moment';

const languages = ['da', 'de', 'fr', 'en', 'es', 'fi', 'it', 'nl', 'pt', 'pl', 'sv'];
const sizes = ['small', 'medium', 'large'];

const inputPlaceholder = DateTime.fromJSDate(new Date()).setLocale(select('Locale', languages, 'nl')).toLocaleString(DateTime.DATE_SHORT);

const preSelectedDate = DateTime.local().plus({days: 3}).toJSDate();
const preSelectedRange = {
  from: DateTime.local().plus({days: 3}).toJSDate(),
  to: DateTime.local().plus({days: 8}).toJSDate(),
};

storiesOf('DatePicker', module)
  .addDecorator((story, context) => withInfo({TableComponent: PropTable})(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Single date', () => {
    const handleOnChange = (selectedDate) => {
      console.log("Selected date", selectedDate);
    };

    return (
      <DatePicker
        locale={select('Locale', languages, 'nl')}
        localeUtils={MomentLocaleUtils}
        numberOfMonths={number('Number of months', 1)}
        onChange={handleOnChange}
        selectedDate={preSelectedDate}
        showOutsideDays={boolean('Show outside days', true)}
        showWeekNumbers={boolean('Show week numbers', true)}
        size={select('Size', sizes, 'medium')}
      />
    )
  })
  .add('Range', () => {
    const handleOnChange = (selectedRange) => {
      console.log("Selected range", selectedRange);
    };

    return (
      <DatePickerRange
        locale={select('Locale', languages, 'nl')}
        localeUtils={MomentLocaleUtils}
        numberOfMonths={number('Number of months', 2)}
        onChange={handleOnChange}
        selectedRange={preSelectedRange}
        showOutsideDays={boolean('Show outside days', false)}
        showWeekNumbers={boolean('Show week numbers', true)}
        size={select('Size', sizes, 'medium')}
      />
    )
  })
  .add('Input single date', () => {
    const handleOnChange = (selectedDate) => {
      console.log("Selected date", selectedDate);
    };

    return (
      <DatePickerInput
        formatDate={date =>  DateTime.fromJSDate(date).setLocale(select('Locale', languages, 'nl')).toLocaleString(DateTime.DATE_SHORT)}
        bold={boolean('Bold', false)}
        disabled={boolean('Disabled', false)}
        inverse={boolean('Inverse', false)}
        helpText="Pick a date"
        dayPickerProps={{
          locale: select('Locale', languages, 'nl'),
          localeUtils: MomentLocaleUtils,
          numberOfMonths: number('Number of months', 2),
          showOutsideDays: boolean('Show outside days', true),
          showWeekNumbers: boolean('Show week numbers', true)
        }}
        meta={{
          error: 'This is an error message',
          touched: true,
        }}
        onChange={handleOnChange}
        placeholder={inputPlaceholder}
        readOnly={boolean('Read only', false)}
        selectedDate={preSelectedDate}
        size={select('Size', sizes, 'medium')}
        value={preSelectedDate}
      />
    )
  })
  .add('Input range', () => {
    const handleOnChange = (selectedRange) => {
      console.log("Selected range", selectedRange);
    };

    return (
      <DatePickerInputRange
        formatDate={date =>  DateTime.fromJSDate(date).setLocale(select('Locale', languages, 'nl')).toLocaleString(DateTime.DATE_SHORT)}
        bold={boolean('Bold', false)}
        dayPickerProps={{
          locale: select('Locale', languages, 'nl'),
          localeUtils: MomentLocaleUtils,
          numberOfMonths: number('Number of months', 2),
          showOutsideDays: boolean('Show outside days', false),
          showWeekNumbers: boolean('Show week numbers', true)
        }}
        disabled={boolean('Disabled', false)}
        helpText="Pick a start & end date"
        inverse={boolean('Inverse', false)}
        meta={{
          error: 'This is an error message',
          touched: true,
        }}
        placeholder={inputPlaceholder}
        readOnly={boolean('Read only', false)}
        onChange={handleOnChange}
        selectedRange={preSelectedRange}
        size={select('Size', sizes, 'medium')}
        valueFrom={preSelectedRange.from}
        valueTo={preSelectedRange.to}
      />
      )
    }
  )
  .add('Input with label', () => {
    const handleOnChange = (selectedRange) => {
      console.log("Selected range", selectedRange);
    };

    return (
      <Label
        inverse={boolean('Inverse', false)}
        size={select('Size', sizes, 'medium')}
      >
        Date
        <DatePickerInputRange
          formatDate={date =>  DateTime.fromJSDate(date).setLocale(select('Locale', languages, 'nl')).toLocaleString(DateTime.DATE_SHORT)}
          bold={boolean('Bold', false)}
          dayPickerProps={{
            locale: select('Locale', languages, 'nl'),
            localeUtils: MomentLocaleUtils,
            numberOfMonths: number('Number of months', 2),
            showOutsideDays: boolean('Show outside days', false),
            showWeekNumbers: boolean('Show week numbers', true)
          }}
          disabled={boolean('Disabled', false)}
          helpText="Pick a start & end date"
          meta={{
            error: 'This is an error message',
            touched: true,
          }}
          placeholder={inputPlaceholder}
          readOnly={boolean('Read only', false)}
          onChange={handleOnChange}
          selectedRange={preSelectedRange}
          valueFrom={preSelectedRange.from}
          valueTo={preSelectedRange.to}
        />
      </Label>
    )
  });
