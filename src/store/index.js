import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {

    async get_DatosEquipos({ commit }) {
      try {
        const { data: datEq } = await axios.get('/equipos.json')

        // this.kpi = await datos['kpis']
        console.log('equipos ', datEq)
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

    async get_DatosHome({ commit }) {
      try {
        const { data: datHome } = await axios.get('/home.json')

        // this.kpi = await datos['kpis']
        console.log('datHome ', datHome)
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
