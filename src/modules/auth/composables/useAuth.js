import { computed } from 'vue'
import { useStore } from 'vuex'

const useAuth = () => {
  const store = useStore()

  const logout =  () => {
    store.commit('auth/logout')
  }

  return {
    logout
  }
}
export default useAuth;