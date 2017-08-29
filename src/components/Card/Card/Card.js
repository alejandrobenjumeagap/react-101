import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';

import { CHILDREN } from './../../../constants/props';
import Mask from './../../Mask';
import styles from './card.css';

export default class Card extends Component {
  static propTypes = {
    barBackgroundColor: PropTypes.string,
    barClassName: PropTypes.string,
    barStyle: PropTypes.shape(),
    category: PropTypes.string,
    center: PropTypes.bool,
    children: CHILDREN,
    className: PropTypes.string,
    componentRef: PropTypes.func,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    type: PropTypes.string,
  }

  static defaultProps = {
    barBackgroundColor: undefined,
    barClassName: undefined,
    barStyle: {},
    category: undefined,
    center: false,
    children: undefined,
    className: undefined,
    componentRef: undefined,
    disabled: false,
    isLoading: false,
    type: undefined,
  }

  constructor(props) {
    super(props)
    this.getDimensions = this.getDimensions.bind(this);
  }

  componentDidMount() {
    const { componentRef } = this.props;
    if (componentRef) {
      componentRef(this);
    }
  }

  getDimensions() {
    return {
      height: this.card.clientHeight,
      width: this.card.clientWidth,
    };
  }

  render() {
    const {
      barBackgroundColor,
      barClassName,
      barStyle,
      category,
      center,
      children,
      className,
      disabled,
      isLoading,
      type,
      ...rest
    } = this.props;

    return (
      <div
        className={classnames(
          styles.card,
          { [styles['is-center']]: center || type === 'center' },
          { [styles['is-disabled']]: disabled },
          { [styles['is-loading']]: isLoading },
          className,
        )}
        ref={(node) => { this.card = node; }}
        {...omit(rest, ['componentRef'])}
      >
        {children}
        <div
          className={classnames(
            styles.bar,
            barClassName,
          )}
          style={Object.assign({}, barStyle, {
            backgroundColor: barBackgroundColor,
          })}
        />
        <Mask
          className={styles.mask}
          open={isLoading}
        >
          <CircularProgress
            className={styles.loader}
            size={60}
            style={{ display: undefined }}
            thickness={7}
          />
        </Mask>
      </div>
    );
  }
}
