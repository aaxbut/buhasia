import api from '@/api';

import { common as ca, } from '@/store/types';

import {
  LOCATION_LIST,
  // LOCATION_ADD,
  // LOCATION_DELETE,
} from '../types/locations';

const state = {
  locations: [],
};

const mutations = {
  [LOCATION_LIST]: (state, locations) => {
    state.locations = [
      ...locations,
    ];
  },
};

const actions = {
  /**
   * List Locations
   */
  [LOCATION_LIST]: ({ commit, dispatch, }) => {
    dispatch(ca.PROGRESS_START);

    return api.locations.list({})
      .then((response) => {
        commit(LOCATION_LIST, response.data);
        dispatch(ca.PROGRESS_STOP);
      })
      .catch(() => {
        dispatch(ca.PROGRESS_STOP);
      });
  },
};

export const getters = {
  getLocations: state => state.locations,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
