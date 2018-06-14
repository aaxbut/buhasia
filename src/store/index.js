import Vue from 'vue';
import Vuex from 'vuex';
import locations from './modules/locations';

import {
  PROGRESS_START,
  PROGRESS_STOP,
  API_SUCCESS,
  API_FAILURE,
  MODAL_OPEN,
  MODAL_CLOSE,
  SEARCH_MODE,
} from './types/common';

Vue.use(Vuex);

const state = {
  isProgress:      false,
  isModalOpen:     false,
  isSearchMode:    false,
  searchTerm:      null,
  success:         null,
  failure:         null,
  success_message: null,
  failure_message: null,
};

/**
 * Common Getters
 * @property {boolean} isProgress - Checks if the async op is in progress
 */
export const getters = {
  isProgress: state =>
    state.isProgress,
  isModalOpen: state =>
    state.isModalOpen,
  getSuccessMessage: state =>
    state.success_message,
  getFailureMessage: state =>
    state.failure_message,
  isSearchMode: state =>
    state.isSearchMode,
  getSearchTerm: state =>
    state.searchTerm,
};


const actions = {

  /**
   * Dispatch this action when you initiate any asyncop or API
   * call (or delayed func)
   */
  [PROGRESS_START]: ({ commit, }) => {
    commit(PROGRESS_START);
  },

  /**
   * Dispatch this action when async op or API call has been
   * finished
   */
  [PROGRESS_STOP]: ({ commit, }) => {
    commit(PROGRESS_STOP);
  },

  /**
   * Dispatch this action when you need to bring notify
   * alert on the screen, like for example when API call or
   * persistence op has finished successfully
   */
  [API_SUCCESS]: ({ commit, }, message) => {
    commit(API_SUCCESS, message);
  },

  /**
   * Dispatch this action when you need to bring notify
   * alert on the screen, like for example when API call or
   * persistence op has failed
   */
  [API_FAILURE]: ({ commit, }, message) => {
    commit(API_FAILURE, message);
  },

  /**
   * Dispatch this action when modal popup is opened
   */
  [MODAL_OPEN]: ({ commit, }) => {
    commit(MODAL_OPEN);
  },

  /**
   * Dispatch this action when modal popup is closed
   */
  [MODAL_CLOSE]: ({ commit, }) => {
    commit(MODAL_CLOSE);
  },
};


/**
 * Common Mutations
 */
const mutations = {

  /**
   * Async operation started (you can display spinner)
   */
  [PROGRESS_START]: (state) => {
    state.isProgress = true;
  },
  /**
   * Async operation finished (you can hide spinner)
   */
  [PROGRESS_STOP]: (state) => {
    state.isProgress = false;
  },

  /**
   * Mutate state.success & success_message
   * This mutation doesn't have an action, and should be committed from existing
   * actions.
   *
   * ! No components should call this mutation directly!
   * ! only from related actions of the module
   *
   * @param {object} message - Instance of type
   */
  [API_SUCCESS]: (state, message) => {
    state.success = true;
    state.success_message = message;
  },

  /**
   * Mutate state.error & error_message
   * This mutation doesn't have an action, and should be committed from existing
   * actions.
   *
   * ! No components should call this mutation directly!
   * ! only from related actions of the module
   *
   * @param {object} message - Instance of type Message (lib/error.js)
   * @param {string} message.guid - UUID of the message to make vue reactive
   *     properties work on change
   * @param {string} message.code - Unique code of the message
   * @param {object} message.meta - Unique payload that may be needed for
   *     rendering of textual message
   */
  [API_FAILURE]: (state, message) => {
    state.failure = true;
    state.failure_message = message;
  },
  /**
   * Modal window becomes visible
   */
  [MODAL_OPEN]: (state) => {
    state.isModalOpen = true;
  },
  /**
   * Modal window is closed
   */
  [MODAL_CLOSE]: (state) => {
    state.isModalOpen = false;
  },
  /**
   * Search mode in sidebar
   */
  [SEARCH_MODE]: (state, { searchTerm = null, }) => {
    if (searchTerm) {
      state.searchTerm = searchTerm;
      state.isSearchMode = true;
    } else {
      state.isSearchMode = false;
      state.searchTerm = null;
    }
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    locations,
  },
});
