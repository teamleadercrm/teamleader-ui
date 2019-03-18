import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconChevronUpSmallOutline, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Icon from '../icon';
import theme from './theme.css';

import SingleLineInputBase from './SingleLineInputBase';
import cx from 'classnames';

import InputBase from './InputBase';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import ValidationText from '../validationText';

import theme from './theme.css';

class SpinnerControls extends PureComponent {
  render() {
    const { inverse, spinnerUpProps, spinnerDownProps } = this.props;
    const iconProps = {
      color: inverse ? 'teal' : 'neutral',
      element: 'button',
      tabIndex: '-1',
      tint: inverse ? 'lightest' : 'darkest',
      type: 'button',
    };

    return (
      <div className={theme['spinner']}>
        <Icon className={theme['spinner-up']} {...spinnerUpProps} {...iconProps}>
          <IconChevronUpSmallOutline />
        </Icon>
        <Icon className={theme['spinner-down']} {...spinnerDownProps} {...iconProps}>
          <IconChevronDownSmallOutline />
        </Icon>
      </div>
    );
  }
}

class DurationInput extends PureComponent {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    inputHasfocus: false,
  };

  updateStep = (type, n) => {
    switch (type) {
      case 'hours':
        let hours = this.state.hours;
        hours += n;
        this.setState({ hours: hours });
        break;
      case 'minutes':
        let minutes = this.state.minutes;
        if (minutes >= 59) {
          minutes = 0;
          let hoursUp = this.state.hours;
          hoursUp += n;
          this.setState({ minutes: minutes, hours: hoursUp });
        } else {
          minutes += n;
        this.setState({ minutes: minutes });
        }
        break;
      case 'seconds':
        let seconds = this.state.seconds;
        if (seconds >= 59) {
          seconds = 0;
          let minutesUp = this.state.minutes;
          minutesUp += n;
          this.setState({ seconds: seconds, minutes: minutesUp });
        } else {
          seconds += n;
        this.setState({ seconds: seconds });
        }
        break;
      default:
        break;
    }
  };

  handleIncreaseValue = event => {
    const element = event.currentTarget.parentElement.previousSibling.getAttribute('id');
    this.updateStep(element, 1);
  };

  handleDecreaseValue = event => {
    const element = event.currentTarget.parentElement.previousSibling.getAttribute('id');
    this.updateStep(element, -1);
  };


  getSuffixWithSpinner = () => [
    ...this.props.suffix,
    <SpinnerControls
      inverse={this.props.inverse}
      spinnerUpProps={{
        onClick: this.handleIncreaseValue,
      }}
      spinnerDownProps={{
        onClick: this.handleDecreaseValue,
        disabled: this.isMinReached,
      }}
    />,
  ];

  handleBlur = event => {
    this.setState({ inputHasfocus: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleFocus = event => {
    this.setState({ inputHasfocus: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  renderOneOrMultipleElements(prop) {
    if (Array.isArray(prop)) {
      return prop.map((element, index) => React.cloneElement(element, { key: index }));
    }

    return prop;
  }

  render() {
    const {
      className,
      connectedLeft,
      connectedRight,
      disabled,
      error,
      helpText,
      onFocus,
      onBlur,
      prefix,
      inverse,
      readOnly,
      spinner,
      success,
      suffix,
      width,
      warning,
      ...others
    } = this.props;

    const classNames = cx(
      theme['wrapper'],
      {
        [theme['has-focus']]: this.state.inputHasfocus,
        [theme['has-error']]: error,
        [theme['has-success']]: success,
        [theme['has-warning']]: warning,
        [theme['has-connected-left']]: connectedLeft,
        [theme['has-connected-right']]: connectedRight,
        [theme['is-disabled']]: disabled,
        [theme['is-inverse']]: inverse,
        [theme['is-read-only']]: readOnly,
      },
      className,
    );

    const boxProps = pickBoxProps(others);
    const inputProps = {
      disabled,
      inverse,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      readOnly,
      ...omitBoxProps(others),
    };

    return (
          <Box className={classNames} {...boxProps}>
            <div className={theme['input-wrapper']}>
              <div className={theme['input-inner-wrapper']} style={{ width, flex: width && '0 0 auto' }}>
                <InputBase
          onChange={event => {
            this.setState({ seconds: event.currentTarget.hours });
          }}
          value={this.state.hours}
          type="number"
                  {...inputProps}
                  id={'hours'}
                />
                {spinner
                  ? this.getSuffixWithSpinner(0)
                  : suffix && <div className={theme['suffix-wrapper']}>{this.renderOneOrMultipleElements(suffix)}</div>}
              </div>
            </div>
          </Box>
          <Box className={classNames} {...boxProps}>
            <div className={theme['input-wrapper']}>
              <div className={theme['input-inner-wrapper']} style={{ width, flex: width && '0 0 auto' }}>
                <InputBase
          onChange={event => {
                    this.setState({ seconds: event.currentTarget.hours });
          }}
                  value={this.state.minutes}
                  type="number"
                  {...inputProps}
          id={'minutes'}
        />
                {spinner
                  ? this.getSuffixWithSpinner(0)
                  : suffix && <div className={theme['suffix-wrapper']}>{this.renderOneOrMultipleElements(suffix)}</div>}
              </div>
            </div>
          </Box>

          <Box className={classNames} {...boxProps}>
            <div className={theme['input-wrapper']}>
              <div className={theme['input-inner-wrapper']} style={{ width, flex: width && '0 0 auto' }}>
                <InputBase
          onChange={event => {
                    this.setState({ seconds: event.currentTarget.hours });
          }}
                  value={this.state.seconds}
                  type="number"
                  {...inputProps}
          id={'seconds'}
        />
                {spinner
                  ? this.getSuffixWithSpinner(0)
                  : suffix && <div className={theme['suffix-wrapper']}>{this.renderOneOrMultipleElements(suffix)}</div>}
              </div>
            </div>
          </Box>
      </Box>
    );
  }
}

DurationInput.propTypes = {
  /** The maximum value that can be inputted */
  max: PropTypes.number,
  /** The minimum value that can be inputted */
  min: PropTypes.number,
  /** Boolean indicating whether to number type input should render spinner controls */
  spinner: PropTypes.bool,
  /** Limit increment value for numeric inputs. */
  step: PropTypes.number,
};

DurationInput.defaultProps = {
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  step: 1,
  suffix: [],
  spinner: true,
};

export default DurationInput;
