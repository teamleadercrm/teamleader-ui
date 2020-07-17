import React, { PureComponent, ReactNode, Ref } from 'react';
import { Box } from '../../index';

interface BodyProps {
  /** The content to display inside the dialog. */
  children: ReactNode;
  /** If true, the content will be scrollable when it exceeds the available height. */
  scrollable: boolean;
}

class Body extends PureComponent<BodyProps & { forwardedRef: Ref<any> }> {
  render() {
    const { scrollable, children, forwardedRef, ...rest } = this.props;

    if (!scrollable) {
      return children;
    }

    return (
      <Box display="flex" flexDirection="column" overflowY="auto" {...rest} ref={forwardedRef}>
        {children}
      </Box>
    );
  }
}

export const Component = React.forwardRef<any, BodyProps>((props, ref) => <Body {...props} forwardedRef={ref} />);
Component.displayName = 'Body';
export default Component;
