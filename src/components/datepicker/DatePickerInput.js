import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { pickBoxProps } from '../box';
import DatePicker from '../datepicker';
import Icon from '../icon';
import Input from '../input';
import Popover from '../popover';
import cx from 'classnames';
import theme from './theme.css';
import MomentLocaleUtils from 'react-day-picker/moment';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import { JSDateToLocaleString } from './utils';

class DatePickerInput extends PureComponent {
  state = {
    isPopoverActive: false,
    popoverAnchorEl: null,
    selectedDate: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.selectedDate !== undefined && props.selectedDate !== state.selectedDate) {
      return {
        selectedDate: props.selectedDate,
      };
    }

    return null;
  }

  handleInputFocus = event => {
    const { onFocus } = this.props.inputProps;

    this.setState(
      {
        popoverAnchorEl: event.currentTarget,
        isPopoverActive: true,
      },
      () => onFocus && onFocus(),
    );
  };

  handlePopoverClose = () => {
    this.setState({ isPopoverActive: false });
  };

  handleDatePickerDateChange = date => {
    this.setState({ isPopoverActive: false, selectedDay: date }, () => this.props.onChange(date));
  };

  renderIcon = () => {
    const { inverse } = this.props;

    return (
      <Icon
        className={theme['input-icon']}
        color={inverse ? 'teal' : 'neutral'}
        tint={inverse ? 'light' : 'darkest'}
        marginHorizontal={2}
      >
        <IconCalendarSmallOutline />
      </Icon>
    );
  };

  render() {
    const {
      className,
      dayPickerProps,
      formatDate,
      inverse,
      inputProps,
      locale,
      popoverProps,
      size,
      ...others
    } = this.props;
    const { isPopoverActive, popoverAnchorEl, selectedDate } = this.state;

    const boxProps = pickBoxProps(others);
    const datePickerClassNames = cx(theme['date-picker-input'], theme[`is-${size}`]);

    return (
      <Box className={className} {...boxProps}>
        <Input
          inverse={inverse}
          onFocus={this.handleInputFocus}
          prefix={this.renderIcon()}
          size={size}
          value={formatDate(selectedDate, locale)}
          width="120px"
          {...inputProps}
        />
        <Popover
          active={isPopoverActive}
          anchorEl={popoverAnchorEl}
          backdrop="transparent"
          fullWidth
          onEscKeyDown={this.handlePopoverClose}
          onOverlayClick={this.handlePopoverClose}
          position="end"
          offsetCorrection={30}
          zIndex={500}
          {...popoverProps}
        >
          <Box overflowY="auto">
            <DatePicker
              className={datePickerClassNames}
              locale={locale}
              localeUtils={MomentLocaleUtils}
              month={selectedDate}
              onChange={this.handleDatePickerDateChange}
              selectedDate={selectedDate}
              {...dayPickerProps}
            />
          </Box>
        </Popover>
      </Box>
    );
  }
}

DatePickerInput.propTypes = {
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** Object with props for the DatePicker component. */
  dayPickerProps: PropTypes.object,
  /** A custom function to format a date. */
  formatDate: PropTypes.func,
  /** Object with props for the Input component. */
  inputProps: PropTypes.object,
  /** If true, component will be rendered in inverse mode. */
  inverse: PropTypes.bool,
  /** The language locale code ('en', 'nl', 'fr',...). */
  locale: PropTypes.string,
  /** Callback function that is fired when the date has changed. */
  onChange: PropTypes.func,
  /** Object with props for the Popover component. */
  popoverProps: PropTypes.object,
  /** The current selected date. */
  selectedDate: PropTypes.instanceOf(Date),
  /** Size of the Input & DatePicker components. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

DatePickerInput.defaultProps = {
  formatDate: JSDateToLocaleString,
  inverse: false,
  locale: 'en',
  size: 'medium',
};

export default DatePickerInput;
