import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

import Box from '../box';
import { TextSmall } from '../typography';

class ProgressStep extends PureComponent {
  render() {
    const { label, active, completed, color } = this.props;
    const classNames = cx(theme['step'], theme[color], {
      [theme['is-active']]: active,
      [theme['is-completed']]: completed,
    });
    return (
      <Box className={classNames}>
        <TextSmall className={theme['step-label']}>{label}</TextSmall>
        <span className={theme['status-bullet']} />
      </Box>
    );
  }
}

ProgressStep.propTypes = {
  /** Color theme of the progress tracker. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'gold', 'ruby']),
  /** The label for the progress step */
  label: PropTypes.string.isRequired,
  /** Whether or not the step is active */
  active: PropTypes.bool.isRequired,
  /** Whether or not the step has been completed */
  completed: PropTypes.bool.isRequired,
};

ProgressStep.defaultProps = {
  color: 'neutral',
  active: false,
  completed: false,
};

ProgressStep.displayName = 'ProgressStep';

export default ProgressStep;
