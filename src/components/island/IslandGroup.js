import React, { PureComponent, isValidElement } from 'react';
import PropTypes from 'prop-types';
import Box, { pickBoxProps } from '../box';

class IslandGroup extends PureComponent {
  render() {
    const { children: originalChildren, className, color, dark, direction, size, ...otherProps } = this.props;

    const boxProps = pickBoxProps(otherProps);
    const children = [];

    React.Children.forEach(originalChildren, (child) => {
      if (isValidElement(child)) {
        children.push(child);
      }
    });

    const hasMoreThanOneChild = children.length > 1;

    return (
      <Box
        {...boxProps}
        className={className}
        display="flex"
        flexDirection={direction === 'horizontal' ? 'row' : 'column'}
      >
        {React.Children.map(children, (child, index) => {
          const isFirstChild = index === 0;
          const isLastChild = index === children.length - 1;

          return React.cloneElement(child, {
            ...(!isFirstChild &&
              !isLastChild && {
                borderRadius: 'square',
              }),
            ...(direction === 'horizontal' &&
              !isFirstChild && {
                borderLeftWidth: 0,
              }),
            ...(direction === 'horizontal' &&
              hasMoreThanOneChild &&
              isFirstChild && {
                borderBottomRightRadius: 'square',
                borderTopRightRadius: 'square',
              }),
            ...(direction === 'horizontal' &&
              hasMoreThanOneChild &&
              isLastChild && {
                borderBottomLeftRadius: 'square',
                borderTopLeftRadius: 'square',
              }),
            ...(direction === 'vertical' &&
              !isFirstChild && {
                borderTopWidth: 0,
              }),
            ...(direction === 'vertical' &&
              hasMoreThanOneChild &&
              isFirstChild && {
                borderBottomLeftRadius: 'square',
                borderBottomRightRadius: 'square',
              }),
            ...(direction === 'vertical' &&
              hasMoreThanOneChild &&
              isLastChild && {
                borderTopLeftRadius: 'square',
                borderTopRightRadius: 'square',
              }),
            ...child.props,
            color: color || child.props.color,
            dark: dark || child.props.dark,
            size: size || child.props.size,
          });
        })}
      </Box>
    );
  }
}

IslandGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white']),
  dark: PropTypes.bool,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

IslandGroup.defaultProps = {
  direction: 'horizontal',
};

export default IslandGroup;
