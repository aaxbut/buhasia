<template>
  <!-- Content here -->
  <b-container fluid>
    <b-img :src="require('@/assets/images/splash_screen.png')"
           fluid-grow
           alt="Responsive imag1e"
           width="100%"
    />
    <b-container fluid>
      <h1 class="centered">
  Консалтинг успех- мы ведем учет

  Бухгалтерия без проблем!!!
  </h1>

    </b-container>

  </b-container>
  <!--<div class="splash-block">-->
  <!--<div class="centered">-->
  <!--<div class="splash-cover"/>-->
  <!--<div class="container">-->
  <!--<div class="section-headlines">-->
  <!--<h1>-->
  <!--Консалтинг успех- мы ведем учет-->
  <!--</h1>-->
  <!--<h4>-->
  <!--Бухгалтерия без проблем!!!-->
  <!--</h4>-->
  <!--</div>-->
  <!--<a href="#jump1"-->
  <!--class="btn btn-outline btn-lg">Мы готовы предложить </a>&nbsp;-->
  <!--<a href="#jump6"-->
  <!--class="btn btn-outline btn-lg">Сообщить нам!</a>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
</template>

<script>
console.log('@');

export default {
  name: 'SplashScreen',
};
</script>

<style scoped>

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
