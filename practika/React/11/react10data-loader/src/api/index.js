import queryString from 'query-string';

import { API_DEFAULT_NAT, API_DEFAULT_PAGE, API_DEFAULT_RESULTS, API_DEFAULT_SEED, BASE_URL } from "./../config";
/**
 * To get users from the server
 * @param {object} options
 * @param {number} options.results
 * @param {number} options.page
 * @param {string} options.seed
 * @param {string} options.nat
 * @returns {Promise}
 */
export const getUsers = (options) => {
  const defaultOptions = {
    results: API_DEFAULT_RESULTS,
    page: API_DEFAULT_PAGE,
    nat: API_DEFAULT_NAT
  };
  const finallyOptions = {
    ...defaultOptions,
    ...options
  }
  console.log(`${BASE_URL}?${queryString.stringify(finallyOptions)}`);
  return fetch(`${BASE_URL}?${queryString.stringify(finallyOptions)}`)
    .then(resp => resp.json());
}
