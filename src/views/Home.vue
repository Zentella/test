<template>
  <div class="home">
    <v-container fill-height class="fondo">
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">Vitrina</h3>
        </v-flex>
      </v-layout>
    </v-container>
    <v-row>
      <h3 class="mx-auto">planes</h3>
    <pre>{{planes}}</pre>

      <!-- <Indicadores :kpis="kpis" /> -->
    </v-row>
    <v-row>
      <h3 class="mx-auto">que dicen</h3>
      <!-- <Indicadores :kpis="kpis" /> -->
    </v-row>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <pre>{{opiniones}}</pre>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  computed: {
    // valor reactivo
    ...mapState(['planes', 'opiniones']) // definido como props
  },
}
</script>

<style scoped>
.fondo {
  background: silver;
  text-align: center;
}
</style>
