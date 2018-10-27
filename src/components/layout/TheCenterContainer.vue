<template>

  <div class="center-container">
    <NavigationPanel/>
    <div class="splash section type-1">
      <SplashScreen/>
    </div>
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

