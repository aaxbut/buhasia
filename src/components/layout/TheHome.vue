<template>
  <div class="home-page">
    <MainPage/>
    <Footer/>
  </div>
</template>

<script>
import SideBar from './TheSideBar';
import Footer from './TheFooter';
import Dashboard from './TheDashboard';
import MainPage from './TheMainPage';

export default {
  name:       'Home',
  components: {
    MainPage,
    SideBar,
    Dashboard,
    Footer,
  },
};
</script>
<style>
.home-page {

}
</style>
