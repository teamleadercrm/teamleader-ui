import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Counter extends PureComponent {
  render() {
    const { children, className, color, count, maxCount, size, borderColor, borderTint, ...others } = this.props;

    const classNames = cx(
      theme['counter'],
      theme[color],
      theme[size],
      {
        [theme[`border-${borderColor}-${borderTint}`]]: borderTint,
        [theme[`border-${borderColor}`]]: !borderTint,
      },
      className,
    );

    console.log(classNames);

    return (
      <Box className={classNames} element="span" {...others} data-teamleader-ui="counter">
        {count > maxCount ? `${maxCount}+` : count} {children}
      </Box>
    );
  }
}

Counter.propTypes = {
  /** A border color to give to the counter */
  borderColor: PropTypes.oneOf(['mint', 'aqua', 'violet', 'teal', 'gold', 'ruby', 'white', 'teal']),
  /** A border tint to give to the counter */
  borderTint: PropTypes.oneOf(['darkest', 'dark', 'none', 'light', 'lightest']),
  /** The content to display inside the Counter */
  children: PropTypes.any,
  /** A class name for the counter to give custom styles */
  className: PropTypes.string,
  /** The color theme you want to style the counter in */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
  /** The value of the counter. */
  count: PropTypes.number.isRequired,
  /** The max value of the counter. */
  maxCount: PropTypes.number,
  /** The size of the counter */
  size: PropTypes.oneOf(['small', 'medium']),
};

Counter.defaultProps = {
  color: 'neutral',
  size: 'medium',
};

export default Counter;
