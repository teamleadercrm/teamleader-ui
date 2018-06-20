import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import { IconButton, LinkButton } from '../button';
import { TextBody } from '../typography';
import LoadingSpinner from '../loadingSpinner';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';
import theme from './theme.css';

class Toast extends PureComponent {
  componentDidMount() {
    if (this.props.active && this.props.timeout) {
      this.scheduleTimeout(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active && nextProps.timeout) {
      this.scheduleTimeout(nextProps);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.currentTimeout);
  }

  scheduleTimeout = props => {
    const { onTimeout, timeout } = props;

    if (this.currentTimeout) {
      clearTimeout(this.currentTimeout);
    }

    this.currentTimeout = setTimeout(() => {
      if (onTimeout) {
        onTimeout();
      }

      this.currentTimeout = null;
    }, timeout);
  };

  render() {
    const { action, active, children, className, label, onClose, processing } = this.props;
    return (
      <Transition in={active} timeout={{ enter: 0, exit: 1000 }}>
        {state => {
          if (state === 'exited') {
            return null;
          }

          const classNames = cx(
            theme['toast'],
            {
              [theme['is-entering']]: state === 'entering',
              [theme['is-entered']]: state === 'entered',
              [theme['is-exiting']]: state === 'exiting',
            },
            className,
          );

          return (
            <div data-teamleader-ui="toast" className={classNames}>
              {processing && <LoadingSpinner className={theme['spinner']} color="white" />}
              <TextBody className={theme['label']} color="white">
                {label}
                {children}
              </TextBody>
              {onClose ? (
                action ? (
                  <LinkButton className={theme['action-link']} inverse label={action} onClick={onClose} />
                ) : (
                  <IconButton
                    className={theme['action-button']}
                    icon={<IconCloseMediumOutline />}
                    color="white"
                    onClick={onClose}
                  />
                )
              ) : null}
            </div>
          );
        }}
      </Transition>
    );
  }
}

Toast.propTypes = {
  action: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClose: PropTypes.func,
  onTimeout: PropTypes.func, // eslint-disable-line
  processing: PropTypes.bool,
  timeout: PropTypes.number,
};

export default Toast;
