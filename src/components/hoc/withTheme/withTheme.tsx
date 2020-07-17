import React, { PureComponent } from 'react';
import cx from 'classnames';
import { colors, tints } from '../../../constants/types';

interface WithThemeProps {
  /** The color of the component */
  color?: colors;
  /** The size of the component */
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'fullscreen';
  /** The tint of the component */
  tint?: tints;
  /** The className of the component */
  className?: string;
}

const withTheme = (theme) => (WrappedComponent): React.ComponentClass<WithThemeProps> => {
  class WithTheme extends PureComponent<WithThemeProps> {
    static defaultProps: Partial<WithThemeProps> = {
      color: 'neutral',
      size: 'medium',
      tint: 'normal',
    };

    static displayName = `WithTheme(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    render() {
      const { color, size, tint, className, ...others } = this.props;

      const classNames = cx(theme[`is-${color}`], theme[`is-${size}`], theme[`is-${tint}`], className);

      return <WrappedComponent className={classNames} {...others} />;
    }
  }

  return WithTheme;
};

export default withTheme;
