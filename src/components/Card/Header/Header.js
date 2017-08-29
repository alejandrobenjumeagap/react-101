import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import { CHILDREN } from './../../../constants/props';
import styles from './../Card/card.css';

const Header = (props) => {
  const {
    children,
    className,
    ...rest
  } = props;
  return (
    <header
      className={classnames(
        styles.header,
        className,
      )}
      {...rest}
    >
      {children}
    </header>
  );
};

Header.propTypes = {
  children: CHILDREN,
  className: PropTypes.string,
};

Header.defaultProps = {
  children: undefined,
  className: undefined,
};

export default Header;
