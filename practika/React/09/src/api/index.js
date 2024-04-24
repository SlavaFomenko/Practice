// export const getUsers = (page, results, nat) => {
//   if(results===null){
//     results = 10;
//   }
//   return fetch(`https://randomuser.me/api/?results=${results}&nat=${nat}&seed=abc&page=${page}`)
//     .then(resp => resp.json());
// }

// export const getUsers = (options) => {
//   const { results = 10, page = 1, seed = 'abc', nat = 'ua' } = options;
//   return fetch(`https://randomuser.me/api/?results=${results}&nat=${nat}&seed=${seed}&page=${page}`)
//     .then(resp => resp.json());
// }

import { API_DEFAULT_NAT, API_DEFAULT_PAGE, API_DEFAULT_RESULTS, API_DEFAULT_SEED, BASE_URL } from "./../config";
export const getUsers = (options) => {
  const {
    results = API_DEFAULT_RESULTS,
    page = API_DEFAULT_PAGE,
    seed = API_DEFAULT_SEED,
    nat = API_DEFAULT_NAT
  } = options;
  return fetch(`${BASE_URL}?results=${results}&nat=${nat}&seed=${seed}&page=${page}`)
    .then(resp => resp.json());
}
