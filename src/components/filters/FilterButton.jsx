import React from 'react';

const FilterButton = ({ label, isActive, onApply, onRemove }) => {
  const onClick = isActive ? onRemove : onApply;
  const activeClass = "f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green mr2";
  const inactiveClass = "f6 link dim br3 ba bw1 ph3 pv2 mb2 dib silver mr2";

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

export default FilterButton;