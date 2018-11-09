import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputBase from './InputBase';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import ValidationText from '../validationText';
import theme from './theme.css';

class Textarea extends PureComponent {
  render() {
    const { className, error, helpText, inverse, ...others } = this.props;

    const classNames = cx(theme['wrapper'], className);

    const boxProps = pickBoxProps(others);
    const inputProps = {
      error,
      inverse,
      ...omitBoxProps(others),
    };

    return (
      <Box className={classNames} {...boxProps}>
        <InputBase className={theme['textarea']} element="textarea" {...inputProps} />
        <ValidationText error={error} help={helpText} inverse={inverse} />
      </Box>
    );
  }
}

Textarea.propTypes = {
  /** Sets a class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** The text to use as error message below the input. */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text to use as help text below the input. */
  helpText: PropTypes.string,
  /** Boolean indicating whether the input should render as inverse. */
  inverse: PropTypes.bool,
};

Textarea.defaultProps = {
  inverse: false,
};

Textarea.displayName = 'Textarea';

export default Textarea;
