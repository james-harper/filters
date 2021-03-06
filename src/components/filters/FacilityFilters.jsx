import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilterButton from './FilterButton';
import { applyFacilityFilter, removeFacilityFilter } from '../../actions/filters';
import data from '../../data/facilities.json';

const { facilities } = data;

const mapStateToProps = state => {
  return { filters: state.facilityFilters };
};

const FacilityFilters = ({ filters, dispatch }) => (
  <>
    <span className="f6 fw6 ttu tracked">Filter by facilities: </span>
    {facilities.map(facility => (
      <FilterButton
        key={facility}
        label={facility}
        isActive={filters.includes(facility)}
        onApply={() => dispatch(applyFacilityFilter(facility))}
        onRemove={() => dispatch(removeFacilityFilter(facility))}
      />
    ))}
  </>
);

FacilityFilters.defaultProps = {
  filters: [],
  dispatch: () => {},
};

FacilityFilters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(FacilityFilters);