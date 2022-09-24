import authModule from '@/modules/auth/store/auth'
import ventasModule from '@/modules/cliente/store/ventas'
import { createStore } from "vuex";

const store = createStore({
  modules: {
    auth: authModule,
    ventas: ventasModule
  },
  state: {
  },
  mutations: {

  },
  actions: {

  },
  getters: {}
});

export default store