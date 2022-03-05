import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    opcion: false,
    equipos:[],
    planes: [],
    opiniones: []
  },
  mutations: {
    GET_EQ(state, datEq) {
      state.equipos = datEq
    },
    GET_PLAN(state, plan) {
      state.planes = plan
    },
    GET_OPINION(state, opinion) {
      state.opiniones = opinion
    },
  },
  actions: {

    async get_DatosEquipos({ commit }) {
      try {
        const { data: datEq } = await axios.get('/equipos.json')

        console.log('datEq ', datEq)
        commit("GET_EQ", datEq)

      } catch (error) {
        console.log(error)
      }
    },

    async get_DatosHome({ commit }) {
      try {
        const { data: datHome } = await axios.get('/home.json')

        this.plan = await datHome['planes']
        console.log('plan ', this.plan)
        commit("GET_PLAN", this.plan)

        this.opinion = await datHome['opiniones']
        console.log('opinion ', this.opinion)
        commit("GET_OPINION", this.opinion)

      } catch (error) {
        console.log(error)
      }
    },

    async get_DatosReq({ commit }) {
      try {
        const { data: datReq } = await axios.get('/orderprocessreq.json')

        // this.kpi = await datos['kpis']
        console.log('datReq ', datReq)
        // commit("GET_KPIS", this.kpi)

        // this.orden = await datos['utimas_ordenes']
        // console.log('utimas_ordenes ',this.orden)
        // commit("GET_ORDEN", this.orden)

        // this.devol = await datos['ultimas_devoluciones:']
        // console.log('ultimas_devoluciones: ',this.devol)
        // commit("GET_DEVOLU", this.devol)

      } catch (error) {
        console.log(error)
      }
    },

    async get_DatosResp({ commit }) {
      try {
        const { data: datResp } = await axios.get('/orderprocessresp.json')

        // this.kpi = await datos['kpis']
        console.log('datResp ', datResp)
        // commit("GET_KPIS", this.kpi)

        // this.orden = await datos['utimas_ordenes']
        // console.log('utimas_ordenes ',this.orden)
        // commit("GET_ORDEN", this.orden)

        // this.devol = await datos['ultimas_devoluciones:']
        // console.log('ultimas_devoluciones: ',this.devol)
        // commit("GET_DEVOLU", this.devol)

      } catch (error) {
        console.log(error)
      }
    },

  },
  modules: {
  }
})
