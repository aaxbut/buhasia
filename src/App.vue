<template>

  <div id="app">
    <div class="main-container">
      <center-conteiner>
        <router-view/>
      </center-conteiner>
    </div>
  </div>
</template>

<script lang="js">
import CenterConteiner from '@/components/layout/TheCenterContainer';
/**
 * @summary The main App Component
 */
export default {
  name:       'App',
  components: {
    CenterConteiner,
  },
};
</script>

<style lang="scss">
@import 'assets/scss/app.scss';
</style>

<style>

.main-container {
  width: 100%;
  height: 100%;
}
</style>
