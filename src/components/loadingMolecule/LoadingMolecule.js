import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class LoadingMolecule extends PureComponent {
  randomGradientPostFix = Math.random()
    .toString(16)
    .slice(2);

  render() {
    const { className, basePath, startColor, stopColor, type, ...others } = this.props;

    const classNames = cx(theme['loading-molecule'], theme[type], className);

    const gradient1Name = `linearGradient-1-${this.randomGradientPostFix}`;
    const gradient2Name = `linearGradient-2-${this.randomGradientPostFix}`;
    const grandient1Source = `url(${basePath}#${gradient1Name})`;
    const grandient2Source = `url(${basePath}#${gradient2Name})`;

    return (
      <div data-teamleader-ui="loading-molecule" className={classNames} {...others}>
        <svg className="loader" width="100px" height="56px" version="1.1">
          <defs>
            <linearGradient x1="63.2191022%" y1="50%" x2="21.8036493%" y2="115.713387%" id={gradient1Name}>
              <stop stopColor={startColor} offset="0%" />
              <stop stopColor={stopColor} offset="100%" />
            </linearGradient>
            <linearGradient x1="63.2191002%" y1="50%" x2="63.2191002%" y2="0%" id={gradient2Name}>
              <stop stopColor={startColor} offset="0%" />
              <stop stopColor={stopColor} offset="100%" />
            </linearGradient>
          </defs>
          <g id="Content" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polyline
              id="left-solid"
              className={theme['left-solid']}
              fill={startColor}
              points="48.1016216 0.241175937 48.1016216 28.1174122 0.0416216216 28.1174122 48.1016216 0.241175937"
            />
            <polyline
              id="right-solid"
              className={theme['right-solid']}
              fill={startColor}
              points="51.7081081 56.0633336 75.747027 42.0745849 51.7081081 0.241175937 51.7081081 56.0633336"
            />
            <polyline
              id="right-gradient"
              className={theme['right-gradient']}
              fill={grandient1Source}
              points="67.7264865 28.1168678 75.747027 42.0745849 99.7772973 28.1168678 67.7264865 28.1168678"
            />
            <polyline
              id="left-gradient"
              className={theme['left-gradient']}
              fill={grandient2Source}
              points="32.0897297 28.1174122 48.1016216 28.1174122 48.0843243 56.0736775 32.0897297 28.1174122"
            />
          </g>
        </svg>
      </div>
    );
  }
}

LoadingMolecule.defaultProps = {
  className: '',
  startColor: '#BABABA',
  stopColor: '#DADADA',
  type: 'normal',
};

LoadingMolecule.propTypes = {
  className: PropTypes.string,
  basePath: PropTypes.string.isRequired,
  startColor: PropTypes.string.isRequired,
  stopColor: PropTypes.string.isRequired,
  type: PropTypes.string,
};

LoadingMolecule.displayName = 'LoadingMolecule';

export default LoadingMolecule;
