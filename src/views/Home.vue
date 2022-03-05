<template>
  <div class="home">
    <v-container fill-height class="fondo">
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">Vitrina</h3>
        </v-flex>
      </v-layout>
    </v-container>
    <div>
      <v-row>
        <h3 class="mx-auto mt-5">Planes Flexibles</h3>
      </v-row>
      <v-row class="mx-auto">
        <v-col v-for="card in planes" :key="card.titulo" cols="4">
          <v-card class="card">
            <v-img
              src=""
              alt=""
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            </v-img>
            <v-card-title v-text="card.titulo"></v-card-title>
            <v-card-subtitle v-text="card.texto"></v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <h3 class="mx-auto mt-5">que dicen</h3>
      </v-row>

        <v-row class="mx-auto">
        <v-col v-for="card in opiniones" :key="card.nombre" cols="4">
          <v-card class="card">
            <v-img
              src=""
              alt=""
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            </v-img>
            <v-card-title v-text="card.nombre"></v-card-title>
            <v-card-subtitle v-text="card.texto"></v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
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
  }
}
</script>

<style scoped>
.fondo {
  background: silver;
  text-align: center;
}
.card {
  text-align: center;
}
</style>
