<template>
  <div>
    <NavigationPanel/>
    <b-container class="col-lg-12">
      <SplashScreen/>
    </b-container>
  </div>
</template>

<script>

/**
 * @summary CenterContainer Component
 * Layout type component that renders should display
 * main page
 */
import NavigationPanel from './NavigationPanel';
import AboutUs from './AboutUs';
import SplashScreen from './SplashScreen';

export default {
  name:       'CenterContainer',
  components: {
    NavigationPanel,
    AboutUs,
    SplashScreen,
  },
};
</script>

<style scoped>
</style>

