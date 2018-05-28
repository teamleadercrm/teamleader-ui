import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../loadingSpinner';
import cx from 'classnames';
import theme from './theme.css';

class Button extends PureComponent {
  static propTypes = {
    /** The content to display inside the button. */
    children: PropTypes.any,
    /** A class name for the button to give custom styles. */
    className: PropTypes.string,
    /** Determines which kind of button to be rendered. */
    level: PropTypes.oneOf(['outline', 'primary', 'secondary', 'destructive']),
    /** If true, component will be disabled. */
    disabled: PropTypes.bool,
    /** If true, component will be shown in an active state */
    active: PropTypes.bool,
    /** If true, component will take the full width available. */
    fullWidth: PropTypes.bool,
    /** If set, button will be rendered as an anchor element. */
    href: PropTypes.string,
    /** The icon displayed inside the button. */
    icon: PropTypes.element,
    /** The position of the icon inside the button. */
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    /** If true, component will be rendered in inverse mode. */
    inverse: PropTypes.bool,
    /** The textual label displayed inside the button. */
    label: PropTypes.string,
    /** Callback function that is fired when mouse leaves the component. */
    onMouseLeave: PropTypes.func,
    /** Callback function that is fired when the mouse button is released. */
    onMouseUp: PropTypes.func,
    /** If true, component will show a loading spinner instead of label or children. */
    processing: PropTypes.bool,
    /** Size of the button. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Type of the button element. */
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    fullWidth: false,
    level: 'secondary',
    iconPlacement: 'left',
    inverse: false,
    processing: false,
    size: 'medium',
    type: 'button',
  };

  getSpinnerColor() {
    const { inverse, level } = this.props;

    return level === 'secondary' || (level === 'outline' && !inverse) ? 'teal' : 'white';
  }

  handleMouseUp = event => {
    this.buttonNode.blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = event => {
    this.buttonNode.blur();
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render() {
    const {
      children,
      className,
      level,
      disabled,
      active,
      fullWidth,
      href,
      icon,
      iconPlacement,
      inverse,
      label,
      size,
      type,
      processing,
      ...others
    } = this.props;

    const element = href ? 'a' : 'button';

    const classNames = cx(
      theme['button'],
      theme[level],
      {
        [theme['icon-only']]: !label && !children,
        [theme['inverse']]: inverse && level === 'outline',
        [theme['is-full-width']]: fullWidth,
        [theme['processing']]: processing,
        [theme['active']]: active,
        [theme[size]]: theme[size],
      },
      className,
    );

    const props = {
      ...others,
      href,
      ref: node => {
        this.buttonNode = node;
      },
      className: classNames,
      disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      type: !href ? type : null,
      'data-teamleader-ui': 'button',
    };

    return React.createElement(
      element,
      props,
      icon && iconPlacement === 'left' ? icon : null,
      label || children ? (
        <span className={theme['children']}>
          {label}
          {children}
        </span>
      ) : null,
      icon && iconPlacement === 'right' ? icon : null,
      processing ? (
        <LoadingSpinner
          className={theme['spinner']}
          color={this.getSpinnerColor()}
          size={size === 'small' ? 'small' : 'medium'}
        />
      ) : null,
    );
  }
}

export default Button;
export { Button };
