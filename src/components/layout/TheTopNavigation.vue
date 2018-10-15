<template>
  <div class="top-navigation">
    <router-link
      to="/"
      class="btn btn--diagonal btn--blue"
      @click.native="navbar='home'">
      Home
    </router-link>
    <router-link
      to="/services"
      class="btn btn--diagonal btn--blue"
      @click.native="navbar='services'">
      Services
    </router-link>
    <router-link
      to="/about"
      class="btn btn--diagonal btn--blue"
      @click.native="navbar='abiut'">
      About us
    </router-link>
    <router-link
      to="/blog"
      class="btn btn--diagonal btn--blue"
      @click.native="navbar='blog'">
      Blog
    </router-link>
    <router-link
      to="/dashboard"
      class="btn btn--diagonal btn--blue"
      @click.native="navbar='dashboard'">
      Dashboard
    </router-link>
  </div>
</template>

<script>
console.log('!!!');

export default {
  name: 'TopNavigation',
  data() {
    return {
      navbar: '',
    };
  },
};
</script>
<style lang="scss" scoped>


.top-navigation {
  margin: auto;
  height: calc((100% - 3 * 28px) / 4);
  padding-bottom: 10px;
  background-color: #fff;
  font-size: 1.2rem;

  font-family: "Open Sans", sans-serif;
  vertical-align: middle;
  color: #444;
}

</style>
