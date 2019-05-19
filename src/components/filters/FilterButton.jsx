import React from 'react';

const FilterButton = ({ label, isActive, onApply, onRemove }) => {
  const onClick = isActive ? onRemove : onApply;
  return (
    <button onClick={onClick}>
      {label} {isActive && '!'}
    </button>
  )
};

export default FilterButton;