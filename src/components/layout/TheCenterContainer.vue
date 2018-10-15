<template>

  <div class="center-container">
    <NavigationPanel/>
    <div class="section type-1 big splash">
      <div class="splash-cover"/>
      <div class="container">
        <div class="splash-block">
          <div class="centered">
            <div class="container">
              <About/>
            </div>
          </div>
        </div>
      </div>
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
import About from './About';

export default {
  name:       'CenterContainer',
  components: {
    NavigationPanel,
    About,
  },
};
</script>

<style scoped>
</style>

