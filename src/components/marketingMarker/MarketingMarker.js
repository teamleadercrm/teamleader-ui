import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class MarketingMarker extends Component {
  render() {
    const { children, className, ...others } = this.props;

    const classNames = cx(theme['marker'], className);

    return (
      <Box {...others} className={classNames} element="mark" paddingHorizontal={1} marginHorizontal={-1}>
        {children}
      </Box>
    );
  }
}

MarketingMarker.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default MarketingMarker;
