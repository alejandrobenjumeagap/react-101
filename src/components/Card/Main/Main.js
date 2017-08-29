import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import { CHILDREN } from './../../../constants/props';
import styles from './../Card/card.css';

const Main = (props) => {
  const {
    children,
    className,
    ...rest
  } = props;
  return (
    <main
      className={classnames(
        styles.main,
        className,
      )}
      {...rest}
    >
      {children}
    </main>
  );
};

Main.propTypes = {
  children: CHILDREN,
  className: PropTypes.string,
};

Main.defaultProps = {
  children: undefined,
  className: undefined,
};

export default Main;
