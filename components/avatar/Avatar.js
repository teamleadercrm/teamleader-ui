import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Avatar extends PureComponent {
  static propTypes = {
    /** Component that will be placed top right of the avatar image. */
    children: PropTypes.any,
    /** A class name for the wrapper to give custom styles. */
    className: PropTypes.string,
    /** An image source or an image element. */
    image: PropTypes.string,
    /** An alternative text for the image element. */
    imageAlt: PropTypes.string,
    /** A class name for the image to give custom styles. */
    imageClassName: PropTypes.string,
    /** The size of the avatar. */
    size: PropTypes.oneOf(['tiny', 'small', 'medium']),
  };

  static defaultProps = {
    size: 'medium',
  };

  render() {
    const { children, className, image, imageAlt, imageClassName, size, ...others } = this.props;

    const avatarClassNames = cx(theme['avatar'], theme[size], className);

    return (
      <Box className={avatarClassNames} {...others} data-teamleader-ui="avatar">
        <img alt={imageAlt} src={image} className={cx(theme['image'], imageClassName)} />
        {children && <div className={theme['children']}>{children}</div>}
      </Box>
    );
  }
}

export default Avatar;
