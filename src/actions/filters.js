import { APPLY_FACILITY_FILTER, REMOVE_FACILITY_FILTER } from '../constants/action-types';

/**
 * @typedef {Object} Action
 * @property {string} type
 * @property {*} payload
 */

/**
 * Create action for applying facility filter
 * @param {string} filterName
 * @returns {Action}
 */
export function applyFacilityFilter(filterName) {
  return { type: APPLY_FACILITY_FILTER, payload: filterName };
}

/**
 * Create action for removing facility filter
 * @param {string} filterName
 * @returns {Action}
 */
export function removeFacilityFilter(filterName) {
  return { type: REMOVE_FACILITY_FILTER, payload: filterName };
}