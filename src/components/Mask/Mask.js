import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import styles from './mask.css';
import { CHILDREN } from './../../constants/props';

const Mask = ({ children, className, fixed, open, ...rest }) => (
  <div
    className={classnames(
      styles.mask,
      { [styles['is-open']]: open },
      { [styles['is-fixed']]: fixed },
      className,
    )}
    {...rest}
  >
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

Mask.propTypes = {
  children: CHILDREN,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  open: PropTypes.bool.isRequired,
};

Mask.defaultProps = {
  children: undefined,
  className: undefined,
  fixed: false,
  open: false,
};

export default Mask;
