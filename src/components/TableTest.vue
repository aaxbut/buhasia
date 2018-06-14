<template>
  <div class="container">
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="getList"
        class="elevation-1"
      >
        <template slot="items"
                  slot-scope="props">
          <td>{{ props.item.country }}</td>
          <td class="center">{{ props.item.district }}</td>
          <td class="decimal-format phone">
            {{ populationFormatter(props.item.population) }}
          </td>
        </template>
  </v-data-table>  </v-app></div>
</template>

<script>
import { mapActions, mapGetters, } from 'vuex';
import { getters as commonGetters, } from '@/store';

import { getters as locationsGetters, } from '@/store/modules/locations';
import { locations as locationsActions, } from '@/store/types';
import { LOCATION_LIST, } from '@/store/types/locations';

/**
 * @summary Locations Component
 *
 * Displays list of locations for the logged in agent or admin in sidebar
 *
 * DATA
 * ============================================================================
 * @prop {string} show - Display all locations or favorited only
 *
 * EVENTS
 * =====================================================================
 * @emits {selected} Selected location (passed as param)
 *
 */

const listMode = {
  ALL:       'all',
  FAVORITES: 'favorites',
};


export default {
  props: {
    list: { default: () => [], type: Array, },
  },
  data() {
    return {
      show:    listMode.ALL,
      headers: [
        {
          text:  'Country name',
          value: 'country',
          align: 'left',
        },
        {
          text:  'District',
          value: 'district',
          align: 'left',
        },
        {
          text:  'Population',
          value: 'population',
          align: 'left',
        },

      ],
    };
  },
  computed: {
    ...mapGetters(Object.keys(commonGetters)),
    ...mapGetters(Object.keys(locationsGetters)),
    getList() {
      return this.$store.getters.getLocations;
    },
  },

  created() {
    const { $store, } = this;

    Promise.all([
      $store.dispatch(LOCATION_LIST),
    ]).then(() => {
      this.loading = false;
    });
  },

  methods: {
    ...mapActions(Object.keys(locationsActions)),
    populationFormatter(value) {
      return value.toLocaleString();
    },
  },

};
</script>

<style scoped>


</style>
