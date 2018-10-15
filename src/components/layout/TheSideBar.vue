<template>
  <aside>
    <div class="container">
      <div class="side-bar">
        <div class="side-bar-item logo-sidebar">
          <img src="@/assets/logo.png"
               class="logo-sidebar">
        </div>
        <div calss="side-bar-item">
          <TopNavigation/>
        </div>
        <div class="side-bar-item pull-left">
          Welcome, <strong> User name </strong>
          <a @click="profile">
            <img src="@/assets/profile.png"
                 class="avatar img-circle">
          </a>
          <a href="#"
             @click="logout">
            <span class="glyphicon glyphicon-log-out"/>
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import TopNavigation from './TheTopNavigation';

export default {
  name:       'SideBar',
  components: {
    TopNavigation,
  },
};
</script>

<style scoped>

.side-bar {
  display: inline-flex;
  width: 100%;
  height: 10px;
  padding: 10px;
  grid-template-columns: auto;
}

.side-bar-item {
  padding: 1px;
  vertical-align: middle;
}

.avatar {
  display: inline-block;
  width: 15%;
  vertical-align: middle;
}

.logo-sidebar {
  width: 20%;
}

.pull-left {

  width: 30%;
  text-align: right;
}

</style>
