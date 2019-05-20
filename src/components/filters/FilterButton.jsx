import React from 'react';
import PropTypes from 'prop-types';

const FilterButton = ({ label, isActive, onApply, onRemove }) => {
  const onClick = isActive ? onRemove : onApply;
  const activeClass = "f6 link dim br3 ph2 pv2 mb2 dib white bg-dark-green mr2";
  const inactiveClass = "f6 link dim br3 ba bw1 ph2 pv2 mb2 dib silver mr2";

  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <a
      className={isActive ? activeClass : inactiveClass}
      href="#"
      onClick={onClick}
      >
      {label}
    </a>
  )
};

FilterButton.defaultProps = {
  onApply: () => {},
  onRemove: () => {},
};

FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onApply: PropTypes.func,
  onRemove: PropTypes.func,
};

export default FilterButton;