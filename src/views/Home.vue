<template>
  <div class="home">
    <v-container fill-height class="fondo">
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">Vitrina</h3>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.fondo {
  background: silver;
  text-align: center;
}
</style>