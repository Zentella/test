<template>
  <div class="eq ma-5">
    <div v-if="opcion === 'equipos'">
      <v-row>
        <h1 class="mx-auto">Equipos & Accesorios</h1>
      </v-row>
      <v-row>
        <v-col
          >Bolsa de Compras BIG MOBILE

          <hr />
          <div class="precio">
            <h6 class="">TOTAL</h6>
            <span class="mr-3"> ${{ formatNumber(total) }} </span>
          </div>
          <div v-if="total > 0">
            <v-btn @click="pagar">Pagar</v-btn>
          </div>
        </v-col>
        <v-col>
          <!-- <h2> Equipos & Accesorios </h2> -->
          <!-- <Cards /> -->
          <v-card class="mx-auto" max-width="500">
            <v-system-bar color="indigo darken-2" dark>
              <v-spacer></v-spacer>

              <v-icon>mdi-window-minimize</v-icon>

              <v-icon>mdi-window-maximize</v-icon>

              <v-icon>mdi-close</v-icon>
            </v-system-bar>

            <v-toolbar color="indigo" dark>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>

              <v-toolbar-title>Equipos & Accesorios</v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-toolbar>

            <v-container fluid>
              <v-row dense>
                <v-col v-for="card in equipos" :key="card.nombre" cols="6">
                  <v-card>
                    <v-img
                      :src="card.imagen"
                      :alt="card.imagen"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                    </v-img>
                    <v-card-title v-text="card.nombre"></v-card-title>
                    <v-card-text class="text--primary">
                      <ul class="m-0">
                        <li
                          class="text-capitalize w-75"
                          v-for="(item, i) in card.caracteristicas"
                          :key="i"
                        >
                          {{ item }}
                        </li>
                      </ul>
                      {{ formatNumber(card.precio_promo) }}
                      {{ card.id }}
                    </v-card-text>

                    <v-card-actions>
                      <v-btn @click="addToCart(card.id)" class="mx-auto">
                        Agregar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <pre>{{ equipos }}</pre>
    </div>

    <!-- checkout -->
    <div v-if="opcion === 'checkout'">
      <!-- <Check /> -->
      <h1>checkout</h1>
      <v-row>
        <v-col>
          <h3 class="mx-auto"><i> Datos del Comprador </i></h3>
          <hr />
          <form>
            <v-text-field
              v-model="name"
              :counter="10"
              label="Nombre"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="Repetir E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="phoneNumber"
              :counter="7"
              label="Teléfono"
              required
            ></v-text-field>

            <h3 class="mx-auto">Datos del Despacho</h3>
            <hr />
            <v-text-field
              v-model="direccion"
              :counter="10"
              label="Dirección"
              required
            ></v-text-field>
            <v-text-field
              v-model="comuna"
              :counter="10"
              label="Comuna"
              required
            ></v-text-field>

            <h3 class="mx-auto">Forma de Pago</h3>
            <hr />
            <v-radio-group v-model="radioGroup">
              <v-radio
                v-for="n in radio"
                :key="n"
                :label="`${n}`"
                :value="n"
              ></v-radio>
            </v-radio-group>

            <v-btn class="mx-auto" @click="submit"> Confirmar </v-btn>
          </form>
        </v-col>
        <v-col>
          <h5>Productos</h5>
          <hr />
          <div class="precio">
            <h6 class="">TOTAL</h6>
            <span class="mr-3"> ${{ formatNumber(total) }} </span>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- confirmación -->
    <div v-if="opcion === 'confirmacion'">
      confirma
      <div>
        La Orden Nº{{ numero }} ha sido confirmada y ya la estamos preparando!
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import utils from '@/utils/functions'
const { formatNumber } = utils

import Cards from '@/components/Cards.vue'
import Check from '@/components/Check.vue'

// import useVuelidate from '@vuelidate/core'
// import { required, email } from '@vuelidate/validators'

export default {
  name: 'Equipos',
  // mixins: [validationMixin],

  components: {
    Cards,
    Check
  },

  // validations: {
  //   name: { required, maxLength: maxLength(10) },
  //   email: { required, email },
  //   select: { required },
  //   checkbox: {
  //     checked(val) {
  //       return val
  //     }
  //   }
  // },

  data: () => ({
    opcion: 'equipos',
    pago: false,
    cards: [
      {
        title: 'Pre-fab homes',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 6
      },
      {
        title: 'Favorite road trips',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        flex: 6
      },
      {
        title: 'Best airlines',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 6
      }
    ],

    name: '',
    email: '',
    phoneNumber: '',
    direccion: '',
    comuna: '',
    radio: ['Transferencia Bancaria', 'Servipag', 'Webpay', 'Contra entrega'],
    radioGroup: 1,
    numero: 123456
  }),

  methods: {
    formatNumber, // incluido en instancia
    ...mapActions(['addToCart']), // inicializa action

    pagar() {
      this.opcion = 'checkout'
    },

    submit() {
      this.opcion = 'confirmacion'
      // let numero = 123456
    },

    orden() {
      orden = this.orden ++
    }
  },

  computed: {
    // valor reactivo
    ...mapGetters(['total']),
    ...mapState(['equipos']) // definido como props
  }
}
</script>

<style scoped>
.precio {
  color: blue;
  display: flex;
  justify-content: space-between;
}
</style>
