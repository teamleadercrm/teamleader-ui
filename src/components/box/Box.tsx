import React, { PureComponent, ReactNode, CSSProperties, Ref } from 'react';
import cx from 'classnames';
import { COLOR } from '../../constants';
import theme from './theme.css';
import {
  contentAligns,
  itemAligns,
  selfAligns,
  colors,
  tints,
  boxSizings,
  displays,
  flexDirections,
  flexWraps,
  justifyContents,
  margins,
  overflows,
  paddings,
  textAligns,
} from '../../constants/types';

const borderRadiuses = {
  square: null,
  circle: '50%',
  rounded: '4px',
};

interface BoxProps {
  alignContent?: contentAligns;
  alignItems?: itemAligns;
  alignSelf?: selfAligns;
  backgroundColor?: colors;
  backgroundTint?: tints;
  borderBottomWidth?: number;
  borderColor?: colors;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderTint?: tints;
  borderTopWidth?: number;
  borderWidth?: number;
  borderRadius?: any;
  borderTopLeftRadius?: any;
  borderTopRightRadius?: any;
  borderBottomLeftRadius?: any;
  borderBottomRightRadius?: any;
  boxSizing?: boxSizings;
  children?: ReactNode;
  className?: string;
  display?: displays;
  element?: string;
  flex?: string | number;
  flexBasis?: string | number;
  flexDirection?: flexDirections;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: flexWraps;
  justifyContent?: justifyContents;
  margin?: margins;
  marginHorizontal?: margins;
  marginVertical?: margins;
  marginBottom?: margins;
  marginLeft?: margins;
  marginRight?: margins;
  marginTop?: margins;
  order?: number;
  overflow?: overflows;
  overflowX?: overflows;
  overflowY?: overflows;
  padding?: paddings;
  paddingHorizontal?: paddings;
  paddingVertical?: paddings;
  paddingBottom?: paddings;
  paddingLeft?: paddings;
  paddingRight?: paddings;
  paddingTop?: paddings;
  style?: CSSProperties;
  textAlign?: textAligns;
}

class Box extends PureComponent<BoxProps & { forwardedRef: Ref<any> }> {
  static defaultProps: Partial<BoxProps> = {
    borderColor: 'neutral',
    borderTint: 'dark',
    borderRadius: 'square',
    element: 'div',
    margin: 0,
    padding: 0,
  };

  getBorder = (value) => {
    const { borderColor, borderTint } = this.props;
    return `${value}px solid ${COLOR[borderColor.toUpperCase()][borderTint.toUpperCase()]}`;
  };

  render() {
    const {
      alignContent,
      alignItems,
      alignSelf,
      backgroundColor,
      backgroundTint,
      borderBottomWidth,
      borderColor,
      borderLeftWidth,
      borderRightWidth,
      borderTint,
      borderTopWidth,
      borderWidth,
      borderRadius,
      borderTopLeftRadius = borderRadius,
      borderTopRightRadius = borderRadius,
      borderBottomLeftRadius = borderRadius,
      borderBottomRightRadius = borderRadius,
      boxSizing,
      children,
      className,
      display,
      element,
      flex,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      forwardedRef,
      justifyContent,
      margin,
      marginHorizontal = margin,
      marginVertical = margin,
      marginBottom = marginVertical,
      marginLeft = marginHorizontal,
      marginRight = marginHorizontal,
      marginTop = marginVertical,
      order,
      overflow,
      overflowX,
      overflowY,
      padding,
      paddingHorizontal = padding,
      paddingVertical = padding,
      paddingBottom = paddingVertical,
      paddingLeft = paddingHorizontal,
      paddingRight = paddingHorizontal,
      paddingTop = paddingVertical,
      style,
      textAlign,
      ...others
    } = this.props;

    const classNames = cx(
      theme['box'],
      {
        [theme[`align-content-${alignContent}`]]: alignContent,
        [theme[`align-items-${alignItems}`]]: alignItems,
        [theme[`align-self-${alignSelf}`]]: alignSelf,
        [theme[`background-color-${backgroundColor}-${backgroundTint}`]]: backgroundColor && backgroundTint,
        [theme[`background-color-${backgroundColor}`]]:
          backgroundColor && (!backgroundTint || backgroundTint === 'normal'),
        [theme[`display-${display}`]]: display,
        [theme[`flex-direction-${flexDirection}`]]: flexDirection,
        [theme[`flex-wrap-${flexWrap}`]]: flexWrap,
        [theme[`justify-content-${justifyContent}`]]: justifyContent,
        [theme[`margin-bottom-${marginBottom}`]]: marginBottom > 0,
        [theme[`margin-left-${marginLeft}`]]: marginLeft > 0,
        [theme[`margin-right-${marginRight}`]]: marginRight > 0,
        [theme[`margin-top-${marginTop}`]]: marginTop > 0,
        [theme[`margin-bottom-negative-${Math.abs(marginBottom)}`]]: marginBottom < 0,
        [theme[`margin-left-negative-${Math.abs(marginLeft)}`]]: marginLeft < 0,
        [theme[`margin-right-negative-${Math.abs(marginRight)}`]]: marginRight < 0,
        [theme[`margin-top-negative-${Math.abs(marginTop)}`]]: marginTop < 0,
        [theme[`padding-bottom-${paddingBottom}`]]: paddingBottom > 0,
        [theme[`padding-left-${paddingLeft}`]]: paddingLeft > 0,
        [theme[`padding-right-${paddingRight}`]]: paddingRight > 0,
        [theme[`padding-top-${paddingTop}`]]: paddingTop > 0,
        [theme[`text-align-${textAlign}`]]: textAlign,
      },
      className,
    );

    const elementStyles = {
      ...(borderWidth && { border: this.getBorder(borderWidth) }),
      ...(borderBottomWidth && { borderBottom: this.getBorder(borderBottomWidth) }),
      ...(borderLeftWidth && { borderLeft: this.getBorder(borderLeftWidth) }),
      ...(borderRightWidth && { borderRight: this.getBorder(borderRightWidth) }),
      ...(borderTopWidth && { borderTop: this.getBorder(borderTopWidth) }),
      ...(borderRadius && { borderRadius: borderRadiuses[borderRadius] }),
      ...(borderTopLeftRadius && { borderTopLeftRadius: borderRadiuses[borderTopLeftRadius] }),
      ...(borderTopRightRadius && { borderTopRightRadius: borderRadiuses[borderTopRightRadius] }),
      ...(borderBottomLeftRadius && { borderBottomLeftRadius: borderRadiuses[borderBottomLeftRadius] }),
      ...(borderBottomRightRadius && { borderBottomRightRadius: borderRadiuses[borderBottomRightRadius] }),
      ...(boxSizing && { boxSizing }),
      ...(flex && { flex }),
      ...(flexBasis && { flexBasis }),
      ...(!isNaN(flexGrow) ? { flexGrow } : {}),
      ...(!isNaN(flexShrink) ? { flexShrink } : {}),
      ...(!isNaN(order) ? { order } : {}),
      ...(overflow && { overflow }),
      ...(overflowX && { overflowX }),
      ...(overflowY && { overflowY }),
      ...style,
    };

    const Element = element as React.ElementType;

    return (
      <Element className={classNames} ref={forwardedRef} style={elementStyles} {...others}>
        {children}
      </Element>
    );
  }
}

const ForwardedRef = React.forwardRef<any, BoxProps>((props, ref) => <Box {...props} forwardedRef={ref} />);
export default ForwardedRef;
