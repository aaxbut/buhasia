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
import CenterConteiner from '@/components/layout/TheCenterConteiner';
/** 
 * @summary The main App Component
 */
export default {
  name: 'App',
  components: {
    CenterConteiter,
  },
};
</script>
<style lang="scss">
@import 'assets/scss/app.scss';
</style>
<style>
#app {
  height: 100%;
}

.main-container {
  height: 100%;
}
</style>

