import PropTypes from 'prop-types';

export const CHILDREN = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
  PropTypes.func,
]);
