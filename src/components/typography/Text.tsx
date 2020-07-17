import React, { PureComponent, CSSProperties } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { tints, colors } from '../../constants/types';

export interface TextProps {
  children: React.ReactNode;
  className?: string;
  color?: colors;
  element?: React.ReactNode;
  maxLines?: number;
  style?: CSSProperties;
  tint?: tints;
}

const factory = (baseType, type, defaultElement): React.ComponentType<TextProps> => {
  class Text extends PureComponent<TextProps> {
    static defaultProps: Partial<TextProps> = {
      element: null,
      tint: 'darkest',
    };

    render() {
      const { children, className, color, element, maxLines, style, tint, ...others } = this.props;

      const classNames = cx(
        theme[baseType],
        theme[type],
        theme[color],
        theme[tint],
        {
          [theme['overflow-multiline']]: maxLines > 1,
          [theme['overflow-singleline']]: maxLines === 1,
        },
        className,
      );

      const styles = {
        ...(maxLines > 1 && { MozLineClamp: maxLines, WebkitLineClamp: maxLines }),
        ...style,
      };

      const Element = element || defaultElement;

      return (
        <Box className={classNames} data-teamleader-ui={baseType} element={Element} {...others} style={styles}>
          {children}
        </Box>
      );
    }
  }

  return Text;
};

export { factory as textFactory };
