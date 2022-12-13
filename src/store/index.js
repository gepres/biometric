import authModule from '@/modules/auth/store/auth'
import ventasModule from '@/modules/dashboard/store/ventas'
import breakPointModule from '@/modules/shared/store/breakpoint'
import { createStore } from "vuex";

const store = createStore({
  modules: {
    auth: authModule,
    ventas: ventasModule,
    breakpoint:breakPointModule
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