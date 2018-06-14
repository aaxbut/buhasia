<template>
  <v-container fluid>
    <v-slide-y-transition>
      <v-layout column
                align-center>
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            transition="fade"
            reverse-transition="fade"
          />
        </v-carousel>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'SecondWorld',
  data() {
    return {
      items: [
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg',
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #00c853;
}

</style>
