import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import Box from '../box';
import Icon from '../icon';
import { IconUserAddMediumOutline, IconUserAddSmallOutline } from '@teamleader/ui-icons';

class AvatarAdd extends PureComponent {
  render() {
    const { children, size } = this.props;

    return (
      <Box
        alignItems="center"
        backgroundColor="neutral"
        backgroundTint="normal"
        className={cx(theme['avatar'], theme['avatar-add'])}
        data-teamleader-ui="avatar-add"
        display="flex"
        justifyContent="center"
      >
        <Icon color="neutral" tint="darkest">
          {size === 'tiny' || size === 'small' ? <IconUserAddSmallOutline /> : <IconUserAddMediumOutline />}
        </Icon>
        {children && <div className={theme['children']}>{children}</div>}
      </Box>
    );
  }
}

AvatarAdd.propTypes = {
  /** Component that will be placed top right of the avatar image. */
  children: PropTypes.any,
  /** The size of the avatar. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'hero']),
};

export default AvatarAdd;
