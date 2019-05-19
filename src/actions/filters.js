import { APPLY_FACILITY_FILTER, REMOVE_FACILITY_FILTER } from '../constants/action-types';

export function applyFacilityFilter(payload) {
  return { type: APPLY_FACILITY_FILTER, payload };
}

export function removeFacilityFilter(payload) {
  return { type: REMOVE_FACILITY_FILTER, payload };
}