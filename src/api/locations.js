/**
 * Backend Products API Endpoints
 *
 * @summary  Backend Laravel API Products Exposed Endpoints
 *
 */

import axios from './axios';

/**
 * @summary Get List Of Products
 *
 * Get List of Products
 *
 * @link http://localhost:3000/api/v1/products/
 *
 * @param {object|string|number} user - house to filter data by
 * @param {object} headers - headers for API endpoint
 * @returns {Promise}
 */
function list({ headers = {}, }) {
  const params = {};

  //
  // const houseIsObject = house &&
  //       typeof house === 'object' &&
  //       Object.prototype.hasOwnProperty.call(house, 'id');
  //
  // const houseIsNumeric = house &&
  //       (typeof house === 'string' || typeof house === 'number');
  //
  // if (houseIsObject) {
  //   params.house_id = parseInt(house.id, 10);
  // }
  //
  // if (houseIsNumeric) {
  //   params.house_id = parseInt(house, 10);
  // }
  Object.assign(headers, { 'Access-Control-Allow-Origin': 'GET', });

  return axios.get('locations', { params, }, { headers, });
}

export default {
  list,
};
