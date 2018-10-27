<template>

  <b-navbar toggleable="md"
            type="light"
            variant="light"
            class="navbar-fixed-top">
    <b-navbar-toggle target="nav_collapse"/>

    <div>
      <!-- Image and text -->
      <b-navbar variant="faded"
                type="light">
        <b-navbar-brand>
          <img src="../../assets/logo.png"
               class="d-inline-block align-top"
               alt="BV"
               style="width: 50px;" >
        </b-navbar-brand>
        <div class="test_cuns">Consulting Luck</div>
      </b-navbar>
    </div>

    <b-collapse id="nav_collapse"
                is-nav>
      <b-navbar-nav class="ml-auto right">
        <div class="top-navigation">
          <span>
            <b-nav-item href="#jump1"
                        class="btn top-navigation">
              About Us
            </b-nav-item>
          </span>
          <span>
            <b-nav-item href="#"
                        class="btn top-navigation">Service</b-nav-item>
          </span>
          <span>
            <b-nav-item href="#"
                        class="btn top-navigation">Contack Us</b-nav-item>
          </span>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
console.log('!!!');

export default {
  name: 'NavigationPanel',
  data() {
    return {
      navbar: '',
    };
  },
};
</script>
<style lang="scss" scoped>

.top-navigation {
  display: table-cell;
}

.test_cuns {
  font-size: 1.2rem;
  font-weight: bold;
  vertical-align: middle;
}
</style>
